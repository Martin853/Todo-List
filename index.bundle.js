(()=>{"use strict";var e={144:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(81),r=n.n(o),i=n(645),a=n.n(i)()(r());a.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans&display=swap);"]),a.push([e.id,'body{height:100vh;margin:0;padding:0;font-family:"Open Sans",sans-serif}nav{background-color:#8f95d3;height:120px;display:flex;justify-content:center;align-items:center;font-size:4rem;font-weight:bold;color:#000}#main-content{height:100%;width:80%;margin:auto;background-color:#eee;display:flex;flex-direction:column;justify-content:flex-start;align-items:center}#add-task{border:none;outline:none;margin-top:2rem;width:250px;height:80px;font-size:24px;font-weight:bold;background-color:#8f95d3;color:#000;border-radius:10px;transition:background-color .2s ease-in-out}#add-task:hover{background-color:#676fc5;cursor:pointer}#modal{display:none;justify-content:center;align-items:center;position:fixed;z-index:1;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(0,0,0,.4);transition:all .3s ease-in-out}#modal-content{width:350px;height:250px;background-color:#252525;border-radius:15px;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:1rem}#modal-content h1{color:#fff;margin:0;margin-top:1rem}#modal-content input{width:85%;height:1.5rem}#button-group{width:85%;margin:auto;display:flex;gap:1rem}#save{outline:none;border:none;flex:1;height:2rem;color:#fff;margin-bottom:1rem;transition:background-color .2s ease-in-out;background-color:#6ec017}#save:hover{background-color:#53940e;cursor:pointer}#cancel{outline:none;border:none;flex:1;height:2rem;color:#fff;margin-bottom:1rem;transition:background-color .2s ease-in-out;background-color:#bb4430}#cancel:hover{background-color:#8b2a19;cursor:pointer}#task-container{width:100%;min-height:100%;display:flex;flex-direction:column;justify-content:flex-start;align-items:center}#task{width:80%;height:3.5rem;background-color:#e5e5e5;border-radius:10px;margin-top:1.5rem;margin-bottom:1.5rem;padding:0 1.5rem 0 1.5rem;display:flex;justify-content:space-between;align-items:center;border:1px solid #000}#task div{display:flex;justify-content:center;align-items:center;gap:1rem}.edit{border:none;outline:none;padding:.5rem;font-size:1rem;width:4rem;background-color:#8f95d3;border-radius:10px;font-weight:bold;transition:background-color .2s ease-in-out}.edit:hover{background-color:#676fc5;cursor:pointer}.delete{border:none;outline:none;padding:.5rem;font-size:1rem;width:4rem;background-color:#8f95d3;border-radius:10px;font-weight:bold;transition:background-color .2s ease-in-out}.delete:hover{background-color:#676fc5;cursor:pointer}.editable{border:solid 1px #000}',""]);const c=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],d=o.base?s[0]+o.base:s[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=n(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=r(f,o);o.byIndex=c,t.splice(c,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var s=o(e,r),d=0;d<i.length;d++){var l=n(i[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{function e(){this.tasks=[],this.addTask=function(e){this.tasks.push(e)},this.removeTask=function(e){this.tasks.splice(e,1)}}function t(e,t,n){this.taskTitle=e,this.taskDescription=t,this.dueDate=n,this.status="Incomplete",this.updateTitle=function(e){this.taskTitle=e},this.updateDescription=function(e){this.taskDescription=e},this.updateDueDate=function(e){this.dueDate=e},this.updateStatus=function(e){this.status=e}}function o(e,t){const n=document.querySelector("#task-container");n.innerHTML="";for(let r=0;r<e.length;r++){const i=document.createElement("div");i.id="task";const a=document.createElement("div"),c=document.createElement("h1");c.innerText=e[r].taskTitle;const s=document.createElement("p");s.innerText=e[r].taskDescription;const d=document.createElement("p");d.innerText=e[r].dueDate;const l=document.createElement("div"),u=document.createElement("button");u.innerText="Edit",u.classList="edit";const p=document.createElement("button");p.innerText="Delete",p.classList="delete",p.addEventListener("click",(function(){t.removeTask(r),o(e,t)})),u.addEventListener("click",(function(){"Save"===u.innerText&&(u.innerText="Edit",c.contentEditable=!1,s.contentEditable=!1,d.contentEditable=!1,c.classList.remove("editable"),s.classList.remove("editable"),d.classList.remove("editable"),e[r].updateTitle(c.innerText),e[r].updateDescription(s.innerText),e[r].updateDueDate(d.innerText),o(e,t)),u.innerText="Save",c.contentEditable=!0,s.contentEditable=!0,d.contentEditable=!0,c.classList.add("editable"),s.classList.add("editable"),d.classList.add("editable")})),a.append(c,s,d),l.append(u,p),i.append(a,l),n.appendChild(i)}}var r=n(379),i=n.n(r),a=n(795),c=n.n(a),s=n(569),d=n.n(s),l=n(565),u=n.n(l),p=n(216),f=n.n(p),m=n(589),h=n.n(m),g=n(144),v={};v.styleTagTransform=h(),v.setAttributes=u(),v.insert=d().bind(null,"head"),v.domAPI=c(),v.insertStyleElement=f(),i()(g.Z,v),g.Z&&g.Z.locals&&g.Z.locals;const b=document.querySelector("#add-task"),y=document.querySelector("#modal"),x=document.querySelector("#cancel"),k=document.querySelector("#save"),T=document.querySelector("#task-title"),w=document.querySelector("#task-description"),E=document.querySelector("#task-date"),S=new e;b.addEventListener("click",(function(){y.style.display="flex"})),x.addEventListener("click",(function(){y.style.display="none"})),window.onclick=function(e){e.target==y&&(y.style.display="none")},k.addEventListener("click",(function(){const n=new t(T.value,w.value,E.value);S.addTask(n),console.log(S),T.value="",w.value="",E.value="",y.style.display="none",o(S.tasks,S),console.log(e)}))})()})();