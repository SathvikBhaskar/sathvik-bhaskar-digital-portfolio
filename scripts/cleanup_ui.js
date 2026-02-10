
import fs from 'fs';
import path from 'path';

const dir = './src/components/ui';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx') || f.endsWith('.js'));

console.log(`Found ${files.length} files in ${dir}`);

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    const original = content;

    // 1. Remove "import type"
    content = content.replace(/import type .*? from .*?;/g, '');
    content = content.replace(/import .*?, \{ type .*? \} from .*?;/g, (match) => {
        // handle mixed import like: import { type A, B } from '...'
        return match.replace('type ', '');
    });
    // Simple check for "type" in imports
    content = content.replace(/, type /g, ', ');

    // 2. Remove interfaces
    // Pattern: export interface Name extends ... { ... }
    // We use a regex that matches until the closing brace at the start of a line
    content = content.replace(/export interface [\w]+Props[\s\S]*?^}/gm, '');

    // 3. Remove types defined with "type X ="
    // content = content.replace(/type \w+ = [\s\S]*?;/g, ''); // Too dangerous for single line?

    // 4. Remove generics in forwardRef: forwardRef<...>(
    content = content.replace(/forwardRef<[\s\S]*?>\(/g, 'forwardRef(');

    // 5. Remove generics in cva: cva<...>(
    content = content.replace(/cva<[\s\S]*?>\(/g, 'cva(');

    // 6. Remove : Type annotation in arrow functions if present
    // e.g. ({ val }: Props) =>
    // This is hard. But shadcn usually uses forwardRef generics, not arg annotation.

    if (content !== original) {
        fs.writeFileSync(filePath, content);
        console.log(`Modified ${file}`);
    }
});
