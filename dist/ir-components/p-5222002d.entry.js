import{r as i,c as r,h as o}from"./p-a401f962.js";const t=".backdrop{position:fixed;top:0;left:0;width:100%;height:100vh;cursor:pointer;background:rgba(0, 0, 0, 0.5);z-index:99;transition:all 0.5s;opacity:0;pointer-events:none;transition:all 0.5s}.backdrop.active{opacity:1;pointer-events:all}.sidebar-right{position:fixed;top:0;right:-100%;bottom:0;width:var(--sidebar-width, 50rem);max-width:100%;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);transition:all 0.5s;z-index:200;overflow-y:hidden;color:var(--sidebar-color, #000);background-color:var(--sidebar-backgound, #fff);padding:0.5rem}.sidebar-right.active{right:0;overflow-y:scroll}.sidebar-left{position:fixed;top:0;left:-100%;bottom:0;width:var(--sidebar-width, 30rem);max-width:100%;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);transition:all 0.5s;z-index:200;overflow-y:hidden;color:var(--sidebar-color, #000);background:var(--sidebar-backgound, #fff);padding:0.5rem}.sidebar-left.active{left:0;overflow-y:scroll}.close{position:absolute;top:0.5rem;right:1rem;width:1rem;height:1rem;cursor:pointer}";const e=class{constructor(o){i(this,o);this.irSidebarToggle=r(this,"irSidebarToggle",7);this.name=undefined;this.side="right";this.open=false}async toggleSidebar(){this.irSidebarToggle.emit(this.open)}render(){let i="";if(this.open){i="active"}else{i=""}return[o("div",{class:`backdrop ${i}`,onClick:()=>{this.toggleSidebar()}}),o("div",{class:`sidebar-${this.side} ${i}`},o("a",{class:"close",onClick:()=>{this.toggleSidebar()}},o("ir-icon",{icon:"ft-x"})),o("slot",null))]}};e.style=t;export{e as ir_sidebar};
//# sourceMappingURL=p-5222002d.entry.js.map