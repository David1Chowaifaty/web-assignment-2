import { p as promiseResolve, b as bootstrapLazy } from './index-fe493b20.js';
export { s as setNonce } from './index-fe493b20.js';

/*
 Stencil Client Patch Browser v4.1.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["ir-checkbox",[[0,"ir-checkbox",{"checkboxId":[513,"checkbox-id"],"checkboxName":[513,"checkbox-name"],"checked":[1540],"checkboxStyle":[513,"checkbox-style"]}]]],["ir-input",[[0,"ir-input",{"placeholder":[513],"value":[1537],"type":[513],"inputStyle":[513,"input-style"],"currentValue":[32]}]]]], options);
});

//# sourceMappingURL=webcm.js.map