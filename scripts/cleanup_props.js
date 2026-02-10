
import fs from 'fs';
import path from 'path';

const dir = './src/components/ui';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx') || f.endsWith('.js'));

console.log(`Scanning ${files.length} files in ${dir}`);

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    const original = content;

    // 1. Remove prop type annotation in arrow functions
    // Pattern: ({ ... }: SomeProps) =>
    // Regex: / \}: \w+Props\) /g -> ' })'
    content = content.replace(/\}: \w+Props\)/g, '})');

    // 2. Remove "import { ... } from '...'" if it was only used for types and now causes "unused var" errors?
    // Use eslint --fix for that?
    // But we can try to catch common ones like "VariationProps"
    // Actually, eslint reported "VariantProps is defined but never used".
    // We can just remove "VariantProps" from imports if it's there.
    content = content.replace(/, VariantProps/g, '');
    content = content.replace(/VariantProps, /g, '');

    // 3. Remove "import ... from 'class-variance-authority'" if empty?

    // 4. Unexpected token SeparatorProps in separator.jsx
    // Likely: ({ ... }: SeparatorProps)

    // 5. Export 'Badge' is not defined?
    // In `toaster.jsx`?
    // Check that later.

    if (content !== original) {
        fs.writeFileSync(filePath, content);
        console.log(`Modified ${file}`);
    }
});
