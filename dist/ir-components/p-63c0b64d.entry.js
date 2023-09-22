import{r as t,c as s,h as i,F as h}from"./p-98109975.js";const n=class{constructor(i){t(this,i);this.buttonClicked=s(this,"buttonClicked",7);this.type="button";this.buttonTitle="";this.icon="";this.buttonStyle="";this.colorVariant="primary";this.shadow="";this.glow=undefined;this.shapeVariant="default"}shapeChanged(){this.applyButtonStyle()}colorChanged(){this.applyButtonStyle()}applyButtonStyle(){switch(this.shapeVariant){case"round":return`btn-${this.colorVariant} round`;case"square":return`btn-${this.colorVariant} square`;case"outline":return`btn-outline-${this.colorVariant}`;default:return`btn-${this.colorVariant}`}}handleClick(){this.buttonClicked.emit()}render(){let t="";if(this.shadow!==""){t=`box-shadow-${this.shadow}`}return i("button",{type:this.type,onClick:this.handleClick.bind(this),class:`btn ${this.applyButtonStyle()} ${this.buttonStyle} ${t} ${this.glow?"btn-glow":""} `},this.icon!==""&&i(h,null,i("i",{class:this.icon})," "),this.buttonTitle)}static get watchers(){return{shapeVariant:["shapeChanged"],colorVariant:["colorChanged"]}}};export{n as ir_button};
//# sourceMappingURL=p-63c0b64d.entry.js.map