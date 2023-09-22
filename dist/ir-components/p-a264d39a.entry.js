import{r as t,c as i,h as e,F as s,H as n}from"./p-a401f962.js";const r=class{constructor(e){t(this,e);this.buttonClicked=i(this,"buttonClicked",7);this.type="button";this.buttonTitle="";this.icon="";this.buttonStyle="";this.colorVariant="primary";this.shadow="";this.glow=undefined;this.shapeVariant="default"}shapeChanged(){this.applyButtonStyle()}colorChanged(){this.applyButtonStyle()}applyButtonStyle(){switch(this.shapeVariant){case"round":return`btn-${this.colorVariant} round`;case"square":return`btn-${this.colorVariant} square`;case"outline":return`btn-outline-${this.colorVariant}`;default:return`btn-${this.colorVariant}`}}handleClick(){this.buttonClicked.emit()}render(){let t="";if(this.shadow!==""){t=`box-shadow-${this.shadow}`}return e("button",{type:this.type,onClick:this.handleClick.bind(this),class:`btn ${this.applyButtonStyle()} ${this.buttonStyle} ${t} ${this.glow?"btn-glow":""} `},this.icon!==""&&e(s,null,e("i",{class:this.icon})," "),this.buttonTitle)}static get watchers(){return{shapeVariant:["shapeChanged"],colorVariant:["colorChanged"]}}};const o=":host{display:block}";const a=class{constructor(i){t(this,i);this.imageSource=undefined;this.imageAltText=undefined;this.headerTitle=undefined}render(){return e(n,null,e("div",{class:"card-title text-center"},e("img",{src:this.imageSource,alt:this.imageAltText})),e("h6",{class:"card-subtitle line-on-side text-muted text-center font-small-3 pt-2"},e("span",null,this.headerTitle)))}};a.style=o;const l=":host{display:block}";const h=class{constructor(e){t(this,e);this.oncheckchange=i(this,"oncheckchange",7);this.label="";this.inputId="";this.checkboxStyle=undefined;this.disabled=undefined;this.labelStyle=undefined;this.containerStyle=undefined;this.checked=undefined;this.labelShown=false}componentWillLoad(){this.setLabelShown()}onLabelChange(){this.setLabelShown()}setLabelShown(){if(this.label!==""&&this.inputId!==""){this.labelShown=true}else{this.labelShown=false}}handleChange(t){const i=t.target.checked;this.checked=i;this.oncheckchange.emit(i)}render(){return e(n,null,e("input",{type:"checkbox",disabled:this.disabled,onChange:this.handleChange.bind(this),checked:this.checked,class:this.checkboxStyle,id:this.inputId}),this.labelShown&&e("label",{class:this.labelStyle,htmlFor:this.inputId},this.label))}static get watchers(){return{label:["onLabelChange"]}}};h.style=l;const c=":host{display:block}";const d=class{constructor(e){t(this,e);this.ontextchange=i(this,"ontextchange",7);this.label="";this.icon=undefined;this.inputId=undefined;this.placeholder=undefined;this.value=undefined;this.type=undefined;this.containerStyle=undefined;this.required=undefined;this.visible=false}handleChange(t){this.visible=true;this.value=t.target.value;this.ontextchange.emit(this.value)}applyContainerStyle(){const t=this.label!==""?"input-group input-group-sm":"form-group position-relative has-icon-left";return`${t} ${this.containerStyle}`}render(){return e(n,null,e("fieldset",{class:this.applyContainerStyle()},this.label&&e("div",{class:"input-group-prepend"},e("span",{class:"input-group-text",id:this.inputId},this.label)),e("input",{type:this.type,placeholder:this.placeholder,class:"form-control",value:this.value,onInput:t=>this.handleChange(t),"aria-label":"Small","aria-describedby":"inputGroup-sizing-sm",required:this.required}),this.icon&&e("div",{class:"form-control-position"},e("i",{class:this.icon}," "))))}};d.style=c;const u=":host{display:block}";const p=class{constructor(i){t(this,i);this.linkTitle=undefined;this.linkDestination=undefined}render(){return e(n,null,e("a",{href:this.linkDestination,class:"card-link"},this.linkTitle))}};p.style=u;const b=class{constructor(e){t(this,e);this.loginClicked=i(this,"loginClicked",7);this.username=undefined;this.password=undefined;this.isChecked=false;this.opened=false}componentDidLoad(){this.addEventListeners()}addEventListeners(){this.usernameRef.addEventListener("ontextchange",this.handleUsernameChange.bind(this));this.passwordRef.addEventListener("ontextchange",this.handlePasswordChange.bind(this));this.checkboxRef.addEventListener("oncheckchange",this.handleCheckboxChange.bind(this))}toggleSidbar(){this.toggleOpened()}handleUsernameChange(t){this.username=t.detail}handlePasswordChange(t){this.password=t.detail}handleCheckboxChange(t){this.isChecked=t.detail}toggleOpened(){this.opened=!this.opened}handleFormSubmit(t){t.preventDefault();this.emitLoginData()}emitLoginData(){this.loginClicked.emit({isChecked:this.isChecked,password:this.password,username:this.username})}render(){return e(n,null,e("div",{class:"app-content container center-layout mt-2"},e("div",{class:"content-overlay"}),e("div",{class:"content-wrapper"},e("div",{class:"content-body"},e("section",{class:"row flexbox-container"},e("div",{class:"col-12 d-flex align-items-center justify-content-center"},e("div",{class:"col-lg-4 col-md-8 col-10 box-shadow-2 p-0"},e("div",{class:"card border-grey border-lighten-3 m-0"},e("ir-card-header",{class:"card-header border-0","image-source":"../../../app-assets/images/logo/logo-dark.png","image-alt-text":"branding logo","header-title":"Login with Modern"}),e("div",{class:"card-content"},e("div",{class:"card-body"},e("form",{class:"form-horizontal form-simple",novalidate:true,onSubmit:this.handleFormSubmit.bind(this)},e("ir-input",{ref:t=>this.usernameRef=t,type:"text",icon:"la la-user",placeholder:"Your Username",required:true,"container-style":"mb-0"}),e("ir-input",{ref:t=>this.passwordRef=t,type:"password",icon:"la la-key",placeholder:"Enter Password",required:true}),e("div",{class:"form-group row"},e("ir-checkbox",{ref:t=>this.checkboxRef=t,class:"col-sm-6 col-12 text-center text-sm-left",label:" Remember Me","input-id":"remember-me","checkbox-style":"chk-remember"}),e("div",{class:"col-sm-6 col-12 text-center text-sm-right"},e("ir-link",{"link-title":"Forgot Password?","link-destination":"#"}))),e("ir-button",{class:"btn-block",type:"submit",icon:"ft-unlock","button-style":"btn-block","button-title":" Login","color-variant":"info"})))),e("div",{class:"card-footer"},e("div",{class:""},e("p",{class:"float-xl-left text-center m-0"},e("ir-link",{"link-title":" Recover password","link-destination":"#"})),e("p",{class:"float-xl-right text-center m-0"},"New to Moden Admin? ",e("ir-link",{onClick:this.toggleOpened.bind(this),"link-title":"Sign Up","link-destination":"#"})))),e("ir-sidebar",{ref:t=>this.sideBarRef=t,open:this.opened},e("ir-register",null))))))))))}};const g=class{constructor(e){t(this,e);this.registerClicked=i(this,"registerClicked",7);this.username=undefined;this.password=undefined;this.email=undefined}handleClick(){}componentDidLoad(){this.addEventListeners()}addEventListeners(){this.usernameRef.addEventListener("ontextchange",this.handleUsernameChange.bind(this));this.passwordRef.addEventListener("ontextchange",this.handlePasswordChange.bind(this));this.emailRef.addEventListener("ontextchange",this.handleEmailChange.bind(this))}handleUsernameChange(t){this.username=t.detail}handlePasswordChange(t){this.password=t.detail}handleEmailChange(t){this.email=t.detail}handleFormSubmit(t){t.preventDefault();this.emitRegisterData()}emitRegisterData(){this.registerClicked.emit({email:this.email,password:this.password,username:this.username})}render(){return e("section",{class:"row flexbox-container"},e("div",{class:"col-12 d-flex align-items-center justify-content-center"},e("div",{class:"col-lg-4 col-md-8 col-10 box-shadow-2 p-0"},e("div",{class:"card border-grey border-lighten-3 px-2 py-2 m-0"},e("ir-card-header",{class:"card-header border-0","image-source":"../../../app-assets/images/logo/logo-dark.png","image-alt-text":"branding logo","header-title":"Create Account"}),e("div",{class:"card-content"},e("div",{class:"card-body"},e("form",{class:"form-horizontal form-simple",novalidate:true},e("ir-input",{ref:t=>this.usernameRef=t,type:"text",icon:"la la-user",placeholder:"User Name","container-style":"mb-1"}),e("ir-input",{ref:t=>this.emailRef=t,type:"text",icon:"la la-envelope",placeholder:"Your Email Address",required:true,"container-style":"mb-1"}),e("ir-input",{ref:t=>this.passwordRef=t,type:"password",icon:"la la-key",placeholder:"Enter Password",required:true}),e("ir-button",{class:"btn-block",type:"submit",icon:"ft-unlock","button-style":"btn-block","button-title":" Register","color-variant":"info"}))),e("p",{class:"text-center"},"Already have an account ? ",e("ir-link",{onClick:this.handleClick.bind(this),"link-title":"LogIn","link-destination":"#"})))))))}};const f=".backdrop{position:fixed;top:0;left:0;width:100%;height:100vh;cursor:pointer;background:rgba(0, 0, 0, 0.5);z-index:99;transition:all 0.5s;opacity:0;pointer-events:none;transition:all 0.5s}.backdrop.active{opacity:1;pointer-events:all}.sidebar-right{position:fixed;top:0;right:-100%;bottom:0;width:var(--sidebar-width, 30rem);max-width:100%;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);transition:all 0.5s;z-index:200;overflow-y:hidden;color:var(--sidebar-color, #000);background-color:var(--sidebar-backgound, #fff);padding:0.5rem}.sidebar-right.active{right:0;overflow-y:scroll}.sidebar-left{position:fixed;top:0;left:-100%;bottom:0;width:var(--sidebar-width, 30rem);max-width:100%;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);transition:all 0.5s;z-index:200;overflow-y:hidden;color:var(--sidebar-color, #000);background:var(--sidebar-backgound, #fff);padding:0.5rem}.sidebar-left.active{left:0;overflow-y:scroll}.close{position:absolute;top:0.5rem;right:1rem;width:1rem;height:1rem;cursor:pointer}";const m=class{constructor(e){t(this,e);this.irSidebarToggle=i(this,"irSidebarToggle",7);this.name=undefined;this.side="right";this.open=false}async toggleSidebar(){this.irSidebarToggle.emit(this.open)}render(){let t="";if(this.open){t="active"}else{t=""}return[e("div",{class:`backdrop ${t}`,onClick:()=>{this.toggleSidebar()}}),e("div",{class:`sidebar-${this.side} ${t}`},e("a",{class:"close",onClick:()=>{this.toggleSidebar()}},e("ir-icon",{icon:"ft-x"})),e("slot",null))]}};m.style=f;export{r as ir_button,a as ir_card_header,h as ir_checkbox,d as ir_input,p as ir_link,b as ir_login,g as ir_register,m as ir_sidebar};
//# sourceMappingURL=p-a264d39a.entry.js.map