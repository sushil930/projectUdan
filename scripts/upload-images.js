import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Parse CLOUDINARY_URL safely so api_key is present
const cloudinaryUrl = process.env.CLOUDINARY_URL;
if (!cloudinaryUrl) {
    console.error('❌ Error: CLOUDINARY_URL not found in .env file');
    console.log('Please create a .env file with your Cloudinary credentials.');
    process.exit(1);
}

// CLOUDINARY_URL format: cloudinary://API_KEY:API_SECRET@CLOUD_NAME
const parsed = new URL(cloudinaryUrl);
const cloudName = parsed.hostname;
const apiKey = parsed.username;
const apiSecret = parsed.password;

cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
    secure: true,
});

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const CONSTANTS_FILE = path.join(process.cwd(), 'constants.ts');

// Helper to find all image files recursively
function getAllImages(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
            getAllImages(filePath, fileList);
        } else {
            if (/\.(jpg|jpeg|png|gif|webp)$/i.test(file)) {
                fileList.push(filePath);
            }
        }
    });
    
    return fileList;
}

async function uploadImages() {
    console.log('🚀 Starting Cloudinary migration...');
    
    const images = getAllImages(PUBLIC_DIR);
    console.log(`📸 Found ${images.length} images to process.`);

    let constantsContent = fs.readFileSync(CONSTANTS_FILE, 'utf8');
    let replacements = 0;

    for (const imagePath of images) {
        // Get relative path from public folder (e.g., /images/teams/name.jpg)
        // This matches how they are referenced in constants.ts
        const relativePath = imagePath.replace(PUBLIC_DIR, '').replace(/\\/g, '/');
        const dirname = path.dirname(relativePath); // e.g., /images/teams/art&design
        const basename = path.basename(relativePath); // e.g., AyushYadav.jpg

        // Sanitize folder and public_id to avoid Cloudinary rejecting special chars like '&'
        const safeDir = dirname.replace(/[^a-zA-Z0-9/_-]/g, '_');
        const safeName = basename.replace(/[^a-zA-Z0-9._-]/g, '_');
        const publicId = `project_udan${safeDir}/${safeName}`.replace(/\.{2,}/g, '.');
        
        // Check if this image is actually used in constants.ts
        if (!constantsContent.includes(relativePath)) {
            console.log(`⚠️ Skipping unused image: ${relativePath}`);
            continue;
        }

        console.log(`Uploading: ${relativePath}...`);

        try {
            // Upload to Cloudinary
            // use_filename: true keeps the original name
            // unique_filename: false prevents random characters being added
            // folder: organizes them in Cloudinary same as local
            const result = await cloudinary.uploader.upload(imagePath, {
                public_id: publicId,
                overwrite: true,
                resource_type: 'image',
                invalidate: true,
            });

            console.log(`✅ Uploaded! URL: ${result.secure_url}`);

            // Replace in constants.ts content
            // We replace the local path string with the new Cloudinary URL
            constantsContent = constantsContent.split(`'${relativePath}'`).join(`'${result.secure_url}'`);
            constantsContent = constantsContent.split(`"${relativePath}"`).join(`"${result.secure_url}"`);
            
            replacements++;

        } catch (error) {
            console.error(`❌ Failed to upload ${relativePath}:`, error.message);
        }
    }

    // Write updated constants.ts
    if (replacements > 0) {
        fs.writeFileSync(CONSTANTS_FILE, constantsContent);
        console.log(`\n✨ Success! Updated ${replacements} image paths in constants.ts`);
    } else {
        console.log('\nNo changes made to constants.ts');
    }
}

uploadImages();
