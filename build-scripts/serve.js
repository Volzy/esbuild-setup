import * as esbuild from 'esbuild';
import config from '../esbuild.config.js';

let ctx = await esbuild.context(config).catch(() => process.exit(1));

await ctx.watch();
  
let { host, port } = await ctx.serve({
    servedir: 'public',
    port: 3000,
});

console.log(`Local development available on ${host}:${port}`);