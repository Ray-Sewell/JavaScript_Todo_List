(()=>{"use strict";var e={424:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(645),r=t.n(o)()((function(e){return e[1]}));r.push([e.id,"* {\n    padding: 0;\n    margin: 0;\n}\n#project-list {\n    display: flex;\n    background-color: darkslategray;\n}\n.project-nav-button {\n    color: white;\n    font-size: 1.1em;\n    padding: 5px;\n    cursor: pointer;\n}\n.project-nav-button:hover, #add-project-button:hover {\n    background-color: white;\n    color: darkslategray;\n}\n.todo-item {\n    text-align: center;\n    padding: 5px;\n    color: white;\n}\n#splash {\n    height: 100vh;\n    width: 100vw;\n    position: fixed;\n    top:0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.2);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n#form_container {\n    display: flex;\n    flex-direction: column;\n    background-color: white;\n    padding: 1em;\n    gap: 1em;\n}\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\nform {\n    display: flex;\n    flex-direction: column;\n    gap: 1em;\n}\nbutton {\n    cursor: pointer;\n}\n#add-project-button {\n    font-size: 1.5em;\n    color: white;\n    cursor: pointer;\n    text-align: center;\n    padding: 0 .3em 0 .3em;\n}\n#show-create-item-form-button {\n    font-size: 2em;\n    font-weight: 700;\n    background-color: rgb(92, 173, 92);\n    color: white;\n    cursor: pointer;\n    margin: .3em;\n    border-radius: 5px;\n    text-align: center;\n    width: 100px;\n}\n#submit_form_button {\n    cursor: pointer;\n    background-color:cadetblue;\n    color:white;\n    padding:.2em;\n    border-radius: 2px;\n    font-weight: 700;\n    text-align: center;\n}\n#close_form_button {\n    width: max-content;\n    align-self: flex-end;\n    color:red;\n    background-color: white;\n    padding: .2em .4em .2em .4em;\n    border: none;\n    box-shadow: 1px 1px 1px black;\n    font-weight: 700;\n}\n#close_form_button:hover {\n\n    color:white;\n    background-color: red;\n\n}\n.todo-item {\n    width: 100vw;\n    max-width: 800px;\n}",""]);const i=r},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(r[c]=!0)}for(var a=0;a<e.length;a++){var d=[].concat(e[a]);o&&r[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),n.push(d))}},n}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var i={},c=[],a=0;a<e.length;a++){var d=e[a],l=o.base?d[0]+o.base:d[0],u=i[l]||0,m="".concat(l," ").concat(u);i[l]=u+1;var p=t(m),s={css:d[1],media:d[2],sourceMap:d[3]};-1!==p?(n[p].references++,n[p].updater(s)):n.push({identifier:m,updater:r(s,o),references:1}),c.push(m)}return c}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<i.length;c++){var a=t(i[c]);n[a].references--}for(var d=o(e,r),l=0;l<i.length;l++){var u=t(i[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}i=d}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o=t.css,r=t.media,i=t.sourceMap;r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(o,e)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,exports:{}};return e[o](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{const e=(e,n,t)=>({name:e,description:n,priority:t,complete:!1,change_status:function(){this.complete=!this.complete}}),n=function(n,t,o,r){let i=e(t,o,r);return n.add_item(i),i},o=(e,n,t)=>({name:e,description:n,priority:t,items:[],add_item:function(e){this.items.push(e)},remove_item:function(e){let n=this.items.indexOf(e);n>-1&&this.items.splice(n,1)}}),r=[],i=function(e){r.push(e)},c=function(){return r},a=function(e,n,t){let r=o(e,n,t);return i(r),r},d=document.querySelector("#content"),l=function(){return c()[d.dataset.index]},u=document.createElement("div"),m=document.querySelector("#content");function p(){let e=document.querySelector("#splash");e.parentNode.removeChild(e)}u.id="splash";const s=function(){let e=document.createElement("div"),t=document.createElement("button"),o=document.createElement("h4"),r=document.createElement("form"),i=document.createElement("label"),c=document.createElement("input"),a=document.createElement("label"),d=document.createElement("input"),m=document.createElement("div");e.id="form_container",t.id="close_form_button",t.innerHTML="X",t.onclick=function(){p()},o.innerHTML="Create new Todo item",i.innerHTML="name",c.type="text",c.id="item-creation-name",a.innerHTML="description",d.type="text",c.id="item-creation-desc",m.id="submit_form_button",m.innerHTML="create",m.onclick=function(){n(l(),c.value,d.value,"low"),p(),b()},e.appendChild(t),e.appendChild(o),e.appendChild(r),r.appendChild(i),r.appendChild(c),r.appendChild(a),r.appendChild(d),r.appendChild(m),u.appendChild(e)},f=function(){m.appendChild(u)},h=document.querySelector("#content");function v(e){let n=e.priority;return"high"==n?"#DC143C":"medium"==n?"#FF7F50":"#5F9EA0"}const b=function(){h.innerHTML="";let e=l(),n=document.createElement("div");n.id="show-create-item-form-button",n.innerHTML="+",n.onclick=function(){f()},h.appendChild(n),e.items.forEach((e=>{let n=document.createElement("div"),t=document.createElement("h2"),o=document.createElement("h5"),r=document.createElement("input");n.className="todo-item",t.innerHTML=e.name,o.innerHTML=e.description,r.type="checkbox",e.complete?(n.style.background="#303030",r.checked=!0):(n.style.background=v(e),r.checked=!1),r.onchange=function(){r.checked?(n.style.background="#303030",e.complete=!0):(n.style.background=v(e),e.complete=!1)},n.appendChild(t),n.appendChild(o),n.appendChild(r),h.appendChild(n)}))},g=document.querySelector("#content"),x=document.createElement("div"),y=document.querySelector("#content");function C(){let e=document.querySelector("#splash");e.parentNode.removeChild(e)}x.id="splash";const w=function(){let e=document.createElement("div"),n=document.createElement("button"),t=document.createElement("h4"),o=document.createElement("form"),r=document.createElement("label"),i=document.createElement("input"),c=document.createElement("label"),d=document.createElement("input"),l=document.createElement("div");e.id="form_container",n.id="close_form_button",n.innerHTML="X",n.onclick=function(){C()},t.innerHTML="Create new Project",r.innerHTML="name",i.type="text",c.innerHTML="description",d.type="text",l.id="submit_form_button",l.innerHTML="create",l.onclick=function(){a(i.value,d.value,"low"),C(),T()},e.appendChild(n),e.appendChild(t),e.appendChild(o),o.appendChild(r),o.appendChild(i),o.appendChild(c),o.appendChild(d),o.appendChild(l),x.appendChild(e)},E=function(){y.appendChild(x)},k=document.querySelector("#project-list"),T=function(){k.innerHTML="";let e=c(),n=document.createElement("div");n.id="add-project-button",n.innerHTML="+",n.onclick=function(){E()},k.appendChild(n),e.forEach(((e,n)=>{let t=document.createElement("div");t.className="project-nav-button",t.innerHTML=e.name,t.dataset.index=n,t.onclick=function(){!function(e){let n=c()[e];g.dataset.index=e,b(n)}(n)},k.appendChild(t)}))};var M=t(379),_=t.n(M),L=t(795),H=t.n(L),j=t(569),S=t.n(j),q=t(565),A=t.n(q),N=t(216),F=t.n(N),I=t(589),O=t.n(I),P=t(424),Z={};Z.styleTagTransform=O(),Z.setAttributes=A(),Z.insert=S().bind(null,"head"),Z.domAPI=H(),Z.insertStyleElement=F(),_()(P.Z,Z),P.Z&&P.Z.locals&&P.Z.locals,document.querySelector("#content").dataset.index=0;let z=a("default project","default desc","high");n(z,"default item","default desc","low"),n(z,"default item","default desc","medium"),n(z,"default item","default desc","high");let D=a("default project 2","default desc","low");n(D,"default item 2","default desc 2","low"),T(),b(),s(),w()})()})();