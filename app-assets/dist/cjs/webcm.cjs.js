'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f956d12b.js');

/*
 Stencil Client Patch Browser v4.1.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('webcm.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["ir-checkbox.cjs",[[0,"ir-checkbox",{"checkboxId":[513,"checkbox-id"],"checkboxName":[513,"checkbox-name"],"checked":[1540],"checkboxStyle":[513,"checkbox-style"]}]]],["ir-input.cjs",[[0,"ir-input",{"placeholder":[513],"value":[1537],"type":[513],"inputStyle":[513,"input-style"],"currentValue":[32]}]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=webcm.cjs.js.map