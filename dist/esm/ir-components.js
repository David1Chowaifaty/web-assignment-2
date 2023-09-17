import { p as promiseResolve, b as bootstrapLazy } from './index-d305657b.js';
export { s as setNonce } from './index-d305657b.js';

/*
 Stencil Client Patch Browser v4.2.0 | MIT Licensed | https://stenciljs.com
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
  return bootstrapLazy([["ir-select_2",[[0,"ir-select",{"data":[513],"selectedItem":[1537,"selected-item"],"selectStyle":[513,"select-style"],"selectData":[32]}],[0,"ir-switch",{"value":[1028],"labelOn":[1,"label-on"],"labelOff":[1,"label-off"],"size":[1],"switch_animate":[4],"disabled":[4],"readonly":[4],"indeterminate":[4],"inverse":[4],"radioAllOff":[4,"radio-all-off"],"colorOn":[1,"color-on"],"offColor":[1,"off-color"],"classOn":[1,"class-on"],"offClass":[1,"off-class"],"labelText":[1,"label-text"],"handleWidth":[1,"handle-width"],"labelWidth":[1,"label-width"],"baseClass":[1,"base-class"],"wrapperClass":[1,"wrapper-class"]}]]],["ir-checkbox",[[0,"ir-checkbox",{"label":[513],"inputId":[513,"input-id"],"checkboxStyle":[513,"checkbox-style"],"disabled":[516],"labelStyle":[513,"label-style"],"containerStyle":[513,"container-style"],"checked":[1540],"labelShown":[32]}]]],["ir-input",[[0,"ir-input",{"containerStyle":[513,"container-style"],"labelStyle":[513,"label-style"],"inputStyle":[513,"input-style"],"label":[513],"inputId":[513,"input-id"],"placeholder":[513],"value":[513],"type":[513],"visible":[32]}]]]], options);
});

//# sourceMappingURL=ir-components.js.map