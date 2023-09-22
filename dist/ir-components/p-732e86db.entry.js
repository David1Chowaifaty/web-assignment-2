import{r as s,c as t,h as e,H as i}from"./p-98109975.js";const n=":host{display:block}";const r=class{constructor(e){s(this,e);this.oncheckchange=t(this,"oncheckchange",7);this.label="";this.inputId="";this.checkboxStyle=undefined;this.disabled=undefined;this.labelStyle=undefined;this.containerStyle=undefined;this.checked=undefined;this.labelShown=false}componentWillLoad(){this.setLabelShown()}onLabelChange(){this.setLabelShown()}setLabelShown(){if(this.label!==""&&this.inputId!==""){this.labelShown=true}else{this.labelShown=false}}handleChange(s){const t=s.target.checked;this.checked=t;this.oncheckchange.emit(t)}render(){return e(i,null,e("input",{type:"checkbox",disabled:this.disabled,onChange:this.handleChange.bind(this),checked:this.checked,class:this.checkboxStyle,id:this.inputId}),this.labelShown&&e("label",{class:this.labelStyle,htmlFor:this.inputId},this.label))}static get watchers(){return{label:["onLabelChange"]}}};r.style=n;const l=":host{display:block}";const o=class{constructor(e){s(this,e);this.ontextchange=t(this,"ontextchange",7);this.label=undefined;this.icon=undefined;this.inputId=undefined;this.placeholder=undefined;this.value=undefined;this.type=undefined;this.containerStyle=undefined;this.required=undefined;this.visible=false}handleChange(s){this.visible=true;this.value=s.target.value;this.ontextchange.emit(this.value)}applyContainerStyle(){const s=this.label!==""?"input-group input-group-sm":"form-group position-relative has-icon-left";return`${s} ${this.containerStyle}`}render(){return e(i,null,e("fieldset",{class:this.applyContainerStyle()},this.label&&e("div",{class:"input-group-prepend"},e("span",{class:"input-group-text",id:this.inputId},this.label)),e("input",{type:this.type,placeholder:this.placeholder,class:"form-control",value:this.value,onInput:s=>this.handleChange(s),"aria-label":"Small","aria-describedby":"inputGroup-sizing-sm",required:this.required}),this.icon&&e("div",{class:"form-control-position"},e("i",{class:this.icon}," "))))}};o.style=l;const a=class{constructor(t){s(this,t)}render(){return e("div",{class:"app-content container center-layout mt-2"},e("div",{class:"content-overlay"}),e("div",{class:"content-wrapper"},e("div",{class:"content-body"},e("section",{class:"row flexbox-container"},e("div",{class:"col-12 d-flex align-items-center justify-content-center"},e("div",{class:"col-lg-4 col-md-8 col-10 box-shadow-2 p-0"},e("div",{class:"card border-grey border-lighten-3 m-0"},e("div",{class:"card-header border-0"},e("div",{class:"card-title text-center"},e("img",{src:"../../../app-assets/images/logo/logo-dark.png",alt:"branding logo"})),e("h6",{class:"card-subtitle line-on-side text-muted text-center font-small-3 pt-2"},e("span",null,"Login with Modern"))),e("div",{class:"card-content"},e("div",{class:"card-body"},e("form",{class:"form-horizontal form-simple",novalidate:true},e("ir-input",{type:"text",icon:"la la-user",placeholder:"Your Username",required:true,"container-style":"mb-0"}),e("ir-input",{type:"password",icon:"la la-key",placeholder:"Enter Password",required:true}),e("div",{class:"form-group row"},e("ir-checkbox",{class:"col-sm-6 col-12 text-center text-sm-left",label:" Remember Me","input-id":"remember-me","checkbox-style":"chk-remember"}),e("div",{class:"col-sm-6 col-12 text-center text-sm-right"},e("a",{href:"recover-password.html",class:"card-link"},"Forgot Password?"))),e("button",{type:"submit",class:"btn btn-info btn-block"},e("i",{class:"ft-unlock"})," Login")))),e("div",{class:"card-footer"},e("div",{class:""},e("p",{class:"float-xl-left text-center m-0"},e("a",{href:"recover-password.html",class:"card-link"},"Recover password")),e("p",{class:"float-xl-right text-center m-0"},"New to Moden Admin?"," ",e("a",{href:"register-simple.html",class:"card-link"},"Sign Up")))))))))))}};export{r as ir_checkbox,o as ir_input,a as ir_login};
//# sourceMappingURL=p-732e86db.entry.js.map