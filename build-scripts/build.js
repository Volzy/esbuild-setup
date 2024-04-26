import * as esbuild from 'esbuild';
import config from '../esbuild.config.js';

await esbuild.build(config).catch(() => process.exit(1));