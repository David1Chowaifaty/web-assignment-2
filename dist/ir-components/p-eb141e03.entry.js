import{r as t,c as s,h as e,F as i,H as n}from"./p-98109975.js";const r=class{constructor(e){t(this,e);this.buttonClicked=s(this,"buttonClicked",7);this.type="button";this.buttonTitle="";this.icon="";this.buttonStyle="";this.colorVariant="primary";this.shadow="";this.glow=undefined;this.shapeVariant="default"}shapeChanged(){this.applyButtonStyle()}colorChanged(){this.applyButtonStyle()}applyButtonStyle(){switch(this.shapeVariant){case"round":return`btn-${this.colorVariant} round`;case"square":return`btn-${this.colorVariant} square`;case"outline":return`btn-outline-${this.colorVariant}`;default:return`btn-${this.colorVariant}`}}handleClick(){this.buttonClicked.emit()}render(){let t="";if(this.shadow!==""){t=`box-shadow-${this.shadow}`}return e("button",{type:this.type,onClick:this.handleClick.bind(this),class:`btn  ${this.applyButtonStyle()} ${this.buttonStyle} ${t} ${this.glow?"btn-glow":""} `},this.icon!==""&&e(i,null,e("i",{class:this.icon})," "),this.buttonTitle)}static get watchers(){return{shapeVariant:["shapeChanged"],colorVariant:["colorChanged"]}}};const a=":host{display:block}";const o=class{constructor(e){t(this,e);this.oncheckchange=s(this,"oncheckchange",7);this.label="";this.inputId="";this.checkboxStyle=undefined;this.disabled=undefined;this.labelStyle=undefined;this.containerStyle=undefined;this.checked=undefined;this.labelShown=false}componentWillLoad(){this.setLabelShown()}onLabelChange(){this.setLabelShown()}setLabelShown(){if(this.label!==""&&this.inputId!==""){this.labelShown=true}else{this.labelShown=false}}handleChange(t){const s=t.target.checked;this.checked=s;this.oncheckchange.emit(s)}render(){return e(n,null,e("input",{type:"checkbox",disabled:this.disabled,onChange:this.handleChange.bind(this),checked:this.checked,class:this.checkboxStyle,id:this.inputId}),this.labelShown&&e("label",{class:this.labelStyle,htmlFor:this.inputId},this.label))}static get watchers(){return{label:["onLabelChange"]}}};o.style=a;const l=":host{display:block}";const c=class{constructor(e){t(this,e);this.ontextchange=s(this,"ontextchange",7);this.label=undefined;this.icon=undefined;this.inputId=undefined;this.placeholder=undefined;this.value=undefined;this.type=undefined;this.containerStyle=undefined;this.required=undefined;this.visible=false}handleChange(t){this.visible=true;this.value=t.target.value;this.ontextchange.emit(this.value)}applyContainerStyle(){const t=this.label!==""?"input-group input-group-sm":"form-group position-relative has-icon-left";return`${t} ${this.containerStyle}`}render(){return e(n,null,e("fieldset",{class:this.applyContainerStyle()},this.label&&e("div",{class:"input-group-prepend"},e("span",{class:"input-group-text",id:this.inputId},this.label)),e("input",{type:this.type,placeholder:this.placeholder,class:"form-control",value:this.value,onInput:t=>this.handleChange(t),"aria-label":"Small","aria-describedby":"inputGroup-sizing-sm",required:this.required}),this.icon&&e("div",{class:"form-control-position"},e("i",{class:this.icon}," "))))}};c.style=l;const h=class{constructor(s){t(this,s)}render(){return e("div",{class:"app-content container center-layout mt-2"},e("div",{class:"content-overlay"}),e("div",{class:"content-wrapper"},e("div",{class:"content-body"},e("section",{class:"row flexbox-container"},e("div",{class:"col-12 d-flex align-items-center justify-content-center"},e("div",{class:"col-lg-4 col-md-8 col-10 box-shadow-2 p-0"},e("div",{class:"card border-grey border-lighten-3 m-0"},e("div",{class:"card-header border-0"},e("div",{class:"card-title text-center"},e("img",{src:"../../../app-assets/images/logo/logo-dark.png",alt:"branding logo"})),e("h6",{class:"card-subtitle line-on-side text-muted text-center font-small-3 pt-2"},e("span",null,"Login with Modern"))),e("div",{class:"card-content"},e("div",{class:"card-body"},e("form",{class:"form-horizontal form-simple",novalidate:true},e("ir-input",{type:"text",icon:"la la-user",placeholder:"Your Username",required:true,"container-style":"mb-0"}),e("ir-input",{type:"password",icon:"la la-key",placeholder:"Enter Password",required:true}),e("div",{class:"form-group row"},e("ir-checkbox",{class:"col-sm-6 col-12 text-center text-sm-left",label:" Remember Me","input-id":"remember-me","checkbox-style":"chk-remember"}),e("div",{class:"col-sm-6 col-12 text-center text-sm-right"},e("a",{href:"recover-password.html",class:"card-link"},"Forgot Password?"))),e("ir-button",{type:"submit",icon:"ft-unlock",class:"btn-block","button-title":" Login","color-variant":"info"})))),e("div",{class:"card-footer"},e("div",{class:""},e("p",{class:"float-xl-left text-center m-0"},e("a",{href:"recover-password.html",class:"card-link"},"Recover password")),e("p",{class:"float-xl-right text-center m-0"},"New to Moden Admin?"," ",e("a",{href:"register-simple.html",class:"card-link"},"Sign Up")))))))))))}};export{r as ir_button,o as ir_checkbox,c as ir_input,h as ir_login};
//# sourceMappingURL=p-eb141e03.entry.js.map