var a=({context:l=document}={})=>{let n=[...l.querySelectorAll("[data-component]")];for(let o=0;o<n.length;o++){let c=n[o],t=c.getAttribute("data-component");if(!t)return;import(t).then(e=>{console.debug(`Loader: Dynamically importing ${t}`),new e.default(c)}).catch(e=>{throw console.debug(`Loader: Failed to dynamically import ${t}`,e),e})}};a();
//# sourceMappingURL=Loader.MR2OH4DG.js.map
