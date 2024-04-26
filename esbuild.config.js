import clean from '@akrc/esbuild-plugin-clean';
import { lessLoader } from 'esbuild-plugin-less';

const isProduction = process.env.NODE_ENV === 'production';

export default {
    entryPoints: [
        './src/**/*.entry.ts',
        './src/**/*.entry.tsx',
        './src/Foundation/Loader.ts'
    ],
    entryNames: '[name].[hash]',
    /*bundle: isProduction,
    minify: isProduction,*/
    bundle: true,
    minify: true,
    splitting: true,
    sourcemap: true,
    outdir: './public/BuildArtifacts',
    format: 'esm',
    plugins: [
        clean(),
        lessLoader(),
    ],
};