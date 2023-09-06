'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d8bd83.js');

/*
 Stencil Client Patch Browser v4.1.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('ir-components.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["ir-checkbox.cjs",[[0,"ir-checkbox",{"label":[513],"inputId":[513,"input-id"],"checkboxStyle":[513,"checkbox-style"],"disabled":[516],"labelStyle":[513,"label-style"],"containerStyle":[513,"container-style"],"checked":[1540],"labelShown":[32]}]]],["ir-input.cjs",[[0,"ir-input",{"containerStyle":[513,"container-style"],"labelStyle":[513,"label-style"],"inputStyle":[513,"input-style"],"label":[513],"inputId":[513,"input-id"],"placeholder":[513],"value":[513],"type":[513],"visible":[32]}]]],["ir-select.cjs",[[0,"ir-select",{"data":[513],"selectedItem":[1537,"selected-item"],"selectData":[32]}]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=ir-components.cjs.js.map