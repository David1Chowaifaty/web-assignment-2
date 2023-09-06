import{r as t,c as s,h as i,H as e,g as h}from"./p-b03c7092.js";const n=":host{display:block}";const a=class{constructor(i){t(this,i);this.oncheckchange=s(this,"oncheckchange",7);this.label="";this.inputId="";this.checkboxStyle=undefined;this.disabled=undefined;this.labelStyle=undefined;this.containerStyle=undefined;this.checked=undefined;this.labelShown=false}componentWillLoad(){this.setLabelShown()}onLabelChange(){this.setLabelShown()}setLabelShown(){if(this.label!==""&&this.inputId!==""){this.labelShown=true}else{this.labelShown=false}}handleChange(t){const s=t.target.checked;this.checked=s;this.oncheckchange.emit(s)}render(){return i(e,null,i("input",{type:"checkbox",disabled:this.disabled,onChange:this.handleChange.bind(this),checked:this.checked,class:this.checkboxStyle,id:this.inputId}),this.labelShown&&i("label",{class:this.labelStyle,htmlFor:this.inputId},this.label))}static get watchers(){return{label:["onLabelChange"]}}};a.style=n;const d=":host{display:block}";const l=class{constructor(i){t(this,i);this.onselectchange=s(this,"onselectchange",7);this.data=undefined;this.selectName=undefined;this.selectStyle=undefined;this.selectTitle=undefined;this.disabled=undefined;this.selectedItem=undefined;this.selectData=undefined;this.parentAttributes=[]}componentWillLoad(){this.setSelectData();Array.from(this.el.attributes).forEach((t=>{if(t.name!=="data"){this.parentAttributes.push({name:t.name,value:t.value});this.el.removeAttribute(t.name)}}));this.el.className=""}componentDidLoad(){this.parentAttributes.forEach((t=>{this.selectRef.setAttribute(t.name,t.value)}))}handleDataChange(t,s){if(t!==s&&t!==""){this.setSelectData()}}setSelectData(){try{if(this.data&&this.data.trim()!==""){this.selectData=JSON.parse(this.data)}}catch(t){console.error("Error parsing JSON data:",t)}}onSelectChange(t){const s=t.target.value;this.onselectchange.emit(s);this.selectedItem=s}render(){return i(e,null,i("select",{ref:t=>this.selectRef=t,disabled:this.disabled,onChange:this.onSelectChange.bind(this),title:this.selectTitle},this.selectData.map((t=>i("optgroup",{label:t.optgrouplabel},t.options.map((t=>i("option",{value:t.value},t.title))))))))}get el(){return h(this)}static get watchers(){return{data:["handleDataChange"]}}};l.style=d;export{a as ir_checkbox,l as ir_select};
//# sourceMappingURL=p-271940d8.entry.js.map