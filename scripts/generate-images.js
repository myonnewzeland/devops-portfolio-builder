#!/usr/bin/env node

/**
 * Image optimization script for DevOps Portfolio
 * Generates responsive AVIF, WebP, and optimized fallback images
 */

import sharp from 'sharp';
import { existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');
const publicDir = join(rootDir, 'public', 'assets');

// Ensure output directory exists
if (!existsSync(publicDir)) {
  mkdirSync(publicDir, { recursive: true });
}

/**
 * Generate responsive images for hero background
 */
async function generateHeroImages() {
  console.log('🖼️  Generating hero background images...');
  
  const sourceImage = join(rootDir, 'public', 'assets', 'hero-bg.jpg');
  const widths = [400, 800, 1200, 1600];
  
  for (const width of widths) {
    const outputBase = join(publicDir, `hero-bg-${width}w`);
    
    // Generate AVIF (best compression)
    await sharp(sourceImage)
      .resize(width, null, { withoutEnlargement: true })
      .avif({ quality: 52, effort: 8 })
      .toFile(`${outputBase}.avif`);
    console.log(`  ✓ Generated hero-bg-${width}w.avif`);
    
    // Generate WebP (fallback 1)
    await sharp(sourceImage)
      .resize(width, null, { withoutEnlargement: true })
      .webp({ quality: 64, effort: 6 })
      .toFile(`${outputBase}.webp`);
    console.log(`  ✓ Generated hero-bg-${width}w.webp`);
    
    // Generate JPEG (fallback 2)
    await sharp(sourceImage)
      .resize(width, null, { withoutEnlargement: true })
      .jpeg({ quality: 68, progressive: true })
      .toFile(`${outputBase}.jpg`);
    console.log(`  ✓ Generated hero-bg-${width}w.jpg`);
  }
  
  console.log('✅ Hero background images complete\n');
}

/**
 * Generate responsive images for avatar
 */
async function generateAvatarImages() {
  console.log('👤 Generating avatar images...');
  
  const sourceImage = join(rootDir, 'public', 'assets', 'avatar.png');
  const sizes = [96, 192, 384];
  
  for (const size of sizes) {
    const outputBase = join(publicDir, `avatar-${size}`);
    
    // Generate AVIF
    await sharp(sourceImage)
      .resize(size, size, { fit: 'cover' })
      .avif({ quality: 75, effort: 6 })
      .toFile(`${outputBase}.avif`);
    console.log(`  ✓ Generated avatar-${size}.avif`);
    
    // Generate WebP
    await sharp(sourceImage)
      .resize(size, size, { fit: 'cover' })
      .webp({ quality: 78, effort: 6 })
      .toFile(`${outputBase}.webp`);
    console.log(`  ✓ Generated avatar-${size}.webp`);
    
    // Generate PNG (preserve transparency)
    await sharp(sourceImage)
      .resize(size, size, { fit: 'cover' })
      .png({ quality: 80, compressionLevel: 9 })
      .toFile(`${outputBase}.png`);
    console.log(`  ✓ Generated avatar-${size}.png`);
  }
  
  console.log('✅ Avatar images complete\n');
}

/**
 * Main execution
 */
async function main() {
  console.log('🚀 Starting image generation...\n');
  
  try {
    await generateHeroImages();
    await generateAvatarImages();
    
    console.log('🎉 All images generated successfully!');
    console.log('📊 Expected savings:');
    console.log('   - Mobile hero: ~70% reduction');
    console.log('   - Desktop hero: ~40% reduction');
    console.log('   - Avatar: ~60% reduction\n');
  } catch (error) {
    console.error('❌ Error generating images:', error);
    process.exit(1);
  }
}

main();
