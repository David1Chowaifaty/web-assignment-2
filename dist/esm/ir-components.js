import { p as promiseResolve, b as bootstrapLazy } from './index-bdc48f77.js';
export { s as setNonce } from './index-bdc48f77.js';

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
  return bootstrapLazy([["ir-checkbox",[[0,"ir-checkbox",{"label":[513],"inputId":[513,"input-id"],"checkboxStyle":[513,"checkbox-style"],"disabled":[516],"labelStyle":[513,"label-style"],"containerStyle":[513,"container-style"],"checked":[1540],"labelShown":[32]}]]],["ir-input",[[0,"ir-input",{"containerStyle":[513,"container-style"],"labelStyle":[513,"label-style"],"inputStyle":[513,"input-style"],"label":[513],"inputId":[513,"input-id"],"placeholder":[513],"value":[513],"type":[513],"visible":[32]}]]],["ir-select",[[0,"ir-select",{"data":[513],"selectedItem":[1537,"selected-item"],"selectData":[32]}]]]], options);
});

//# sourceMappingURL=ir-components.js.map