(function(){"use strict";var t={7219:function(t,e,n){var s=n(9242),o=n(3396);function a(t,e,s,a,i,r){const c=(0,o.up)("HeaderPage"),l=(0,o.up)("BodyPage"),u=(0,o.up)("FooterPage");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(c,{title:"PomoTimer",logo_img:n(2043)},null,8,["logo_img"]),(0,o.Wm)(l),(0,o.Wm)(u,{name:"Rafael Camargo",github_link:"https://www.github.com/rafandoo",instagram_link:"https://www.instagram.com/rafandoo/",personal_link:"https://github.com/rafandoo/pomotimer-lite"})],64)}var i=n(7139);const r={class:"navbar navbar-dark navbar-expand-md bg-dark py-3"},c={class:"container"},l={class:"col d-flex justify-content-center align-items-center"},u={href:"#",class:"navbar-brand d-flex align-items-center"},A={class:"title"},d=["src","alt"];function m(t,e,n,s,a,m){const p=(0,o.up)("ConfigModal");return(0,o.wg)(),(0,o.iD)("nav",r,[(0,o._)("div",c,[(0,o._)("div",l,[(0,o._)("a",u,[(0,o._)("span",A,(0,i.zw)(n.title)+" ",1),(0,o._)("img",{src:n.logo_img,alt:n.title},null,8,d)]),(0,o.Wm)(p)])])])}const p={class:"config-div"},g=(0,o._)("a",{id:"config",class:"config","data-bs-target":"#modal-config","data-bs-toggle":"modal"},[(0,o._)("i",{class:"fas fa-cog text-white"})],-1),f=(0,o._)("div",{class:"modal fade",role:"dialog",tabindex:"-1",id:"modal-config"},[(0,o._)("div",{class:"modal-dialog modal-dialog-centered",role:"document"},[(0,o._)("div",{class:"modal-content bg-dark text-white"},[(0,o._)("div",{class:"modal-header"},[(0,o._)("h4",{class:"modal-title"},"Settings"),(0,o._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]),(0,o._)("form",{target:"_self"},[(0,o._)("div",{class:"modal-body"},[(0,o._)("div",{class:"input-group justify-content-center p-2"},[(0,o._)("span",{class:"input-group-text info"},"Focus Time"),(0,o._)("span",{class:"input-group-text infoConfig"},[(0,o._)("span",{id:"focusMinutes",style:{"font-size":"20px","margin-left":"8px","margin-right":"8px"}},"25"),(0,o._)("button",{id:"plusBtnFocus",class:"plusBtn text-white",type:"button"},[(0,o._)("i",{class:"fas fa-plus"})]),(0,o._)("button",{id:"minusBtnFocus",class:"minusBtn text-white",type:"button"},[(0,o._)("i",{class:"fas fa-minus"})])])]),(0,o._)("div",{class:"input-group justify-content-center p-2"},[(0,o._)("span",{class:"input-group-text info"},"Break Time"),(0,o._)("span",{class:"input-group-text infoConfig"},[(0,o._)("span",{id:"breakMinutes",style:{"font-size":"20px","margin-left":"8px","margin-right":"8px"}},"5"),(0,o._)("button",{id:"plusBtnBreak",class:"plusBtn text-white",type:"button"},[(0,o._)("i",{class:"fas fa-plus"})]),(0,o._)("button",{id:"minusBtnBreak",class:"minusBtn text-white",type:"button"},[(0,o._)("i",{class:"fas fa-minus"})])])]),(0,o._)("div",{class:"input-group justify-content-center p-2"},[(0,o._)("span",{class:"input-group-text info"},"Cycles"),(0,o._)("span",{class:"input-group-text infoConfig"},[(0,o._)("span",{id:"cycles",style:{"font-size":"20px","margin-left":"8px","margin-right":"8px"}},"4"),(0,o._)("button",{id:"plusBtnCycles",class:"plusBtn text-white",type:"button"},[(0,o._)("i",{class:"fas fa-plus"})]),(0,o._)("button",{id:"minusBtnCycles",class:"minusBtn text-white",type:"button"},[(0,o._)("i",{class:"fas fa-minus"})])])]),(0,o._)("div",{class:"input-group justify-content-center p-2"},[(0,o._)("span",{class:"input-group-text info"},"Sound"),(0,o._)("span",{class:"input-group-text infoConfig"},[(0,o._)("label",{class:"checkbox path m-1"},[(0,o._)("input",{type:"checkbox",checked:"",id:"alarmCheck"}),(0,o._)("svg",{viewBox:"0 0 21 21"},[(0,o._)("path",{d:"M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"})])])])])]),(0,o._)("div",{class:"modal-footer"},[(0,o._)("button",{type:"submit",class:"save-btn",id:"saveBtn","data-bs-dismiss":"modal","aria-label":"Close"},"Save")])])])])],-1),h=[g,f];function C(t,e,n,s,a,i){return(0,o.wg)(),(0,o.iD)("div",p,h)}var b={name:"ConfigModal",methods:{config(){localStorage.setItem("focusMinutes",25),localStorage.setItem("breakMinutes",5),localStorage.setItem("cycles",4),localStorage.setItem("status","focus"),localStorage.setItem("alarm",!0),window.onload=function(){const t=document.querySelector("#plusBtnFocus"),e=document.querySelector("#minusBtnFocus"),n=document.querySelector("#plusBtnBreak"),s=document.querySelector("#minusBtnBreak"),o=document.querySelector("#plusBtnCycles"),a=document.querySelector("#minusBtnCycles"),i=1,r=99;let c=document.querySelector("#focusMinutes"),l=25,u=document.querySelector("#breakMinutes"),A=5,d=document.querySelector("#cycles"),m=4;s.onclick=function(){A>i&&(A-=1,u.innerText=A)},n.onclick=function(){A<r&&(A+=1,u.innerText=A)},e.onclick=function(){l>i&&(l-=1,c.innerText=l)},t.onclick=function(){l<r&&(l+=1,c.innerText=l)},a.onclick=function(){m>i&&(m-=1,d.innerText=m)},o.onclick=function(){m<r&&(m+=1,d.innerText=m)},document.querySelector("form").addEventListener("submit",(t=>{t.preventDefault(),localStorage.setItem("focusMinutes",c.innerHTML),localStorage.setItem("breakMinutes",u.innerHTML),localStorage.setItem("cycles",d.innerHTML),localStorage.setItem("alarm",document.querySelector("#alarmCheck").checked)}))}}},mounted(){this.config()}},y=n(89);const v=(0,y.Z)(b,[["render",C]]);var M=v,w={name:"HeaderPage",props:{title:{type:String,default:"Title"},logo_img:{type:String,default:"../assets/img/pomodoro.png"}},components:{ConfigModal:M}};const x=(0,y.Z)(w,[["render",m]]);var _=x;const k={class:"container-fluid p-4"};function S(t,e,n,s,a,i){const r=(0,o.up)("SwitchHeader"),c=(0,o.up)("ProgressTimer"),l=(0,o.up)("CtrlButtons");return(0,o.wg)(),(0,o.iD)("div",k,[(0,o.Wm)(r),(0,o.Wm)(c),(0,o.Wm)(l)])}const B={class:"row mt-4"},I=(0,o.uE)('<div class="col-lg-6 offset-lg-3 d-flex justify-content-center"><div class="switch-button"><span class="active" style="border-radius:20px 0px 0px 20px;"></span><button disabled class="switch-button-case left active-case">Focus</button><button disabled class="switch-button-case right">Break</button></div></div>',1),L=[I];function W(t,e,n,s,a,i){return(0,o.wg)(),(0,o.iD)("div",B,L)}var j={name:"SwitchHeader"};const T=(0,y.Z)(j,[["render",W]]);var G=T;const Z={class:"row"},O={class:"col"},E={class:"text-white mt-7 mb-7"},V={class:"timer"},Q=(0,o._)("div",{class:"minutes"},"0",-1),R=(0,o._)("div",null,":",-1),U=(0,o._)("div",{class:"seconds"},"00",-1),q=["src"],Y=(0,o._)("svg",{class:"progress-ring",height:"220",width:"220"},[(0,o._)("circle",{class:"progress-ring circle","stroke-width":"4",fill:"transparent",r:"91",cx:"110",cy:"110"})],-1);function F(t,e,s,a,i,r){return(0,o.wg)(),(0,o.iD)("div",Z,[(0,o._)("div",O,[(0,o._)("div",E,[(0,o._)("figure",V,[Q,R,U,(0,o._)("audio",{src:n(5255),id:"alarm"},null,8,q),Y])])])])}var H={name:"ProgressTimer"};const J=(0,y.Z)(H,[["render",F]]);var z=J;const D={class:"row"},P=(0,o.uE)('<div class="col text-center"><button id="refreshBtn" class="text-white refreshBtn" type="button"><i class="fa fa-refresh"></i></button><button id="playBtn" class="text-white actionBtn" type="button"><i class="fas fa-play"></i></button><button id="pauseBtn" class="text-white actionBtn" type="button" hidden><i id="actIcon" class="fas fa-pause"></i></button></div>',1),N=[P];function X(t,e,n,s,a,i){return(0,o.wg)(),(0,o.iD)("div",D,N)}var K={name:"CtrlButtons"};const $=(0,y.Z)(K,[["render",X]]);var tt=$,et={name:"BodyPage",components:{SwitchHeader:G,ProgressTimer:z,CtrlButtons:tt}};const nt=(0,y.Z)(et,[["render",S]]);var st=nt;const ot={class:"text-center bg-dark"},at={class:"container text-white py-4 py-lg-4"},it={class:"text-muted mb-0"},rt={class:"list-inline mt-3"},ct={class:"list-inline-item me-4"},lt=["href"],ut=(0,o._)("i",{class:"fab fa-github text-light"},null,-1),At=[ut],dt={class:"list-inline-item me-4"},mt=["href"],pt=(0,o._)("i",{class:"fab fa-instagram text-light"},null,-1),gt=[pt],ft={class:"list-inline-item"},ht=["href"],Ct=(0,o._)("i",{class:"fas fa-code text-light"},null,-1),bt=[Ct];function yt(t,e,n,s,a,r){return(0,o.wg)(),(0,o.iD)("footer",ot,[(0,o._)("div",at,[(0,o._)("p",it,"Copyright © 2023 "+(0,i.zw)(n.name),1),(0,o._)("ul",rt,[(0,o._)("li",ct,[(0,o._)("a",{href:n.github_link,target:"_blank",rel:"noopener noreferrer"},At,8,lt)]),(0,o._)("li",dt,[(0,o._)("a",{href:n.instagram_link,target:"_blank",rel:"noopener noreferrer"},gt,8,mt)]),(0,o._)("li",ft,[(0,o._)("a",{href:n.personal_link,target:"_blank",rel:"noopener noreferrer"},bt,8,ht)])])])])}var vt={name:"FooterPage",props:{name:{type:String,default:"Name"},github_link:{type:String,default:"www.github.com"},instagram_link:{type:String,default:"www.instagram.com"},personal_link:{type:String,default:"www.google.com"}}};const Mt=(0,y.Z)(vt,[["render",yt]]);var wt=Mt,xt={name:"App",components:{HeaderPage:_,BodyPage:st,FooterPage:wt},methods:{progressCircle(){const t=document.querySelector(".progress-ring.circle"),e=t.r.baseVal.value,n=2*e*Math.PI;function s(e){const s=n-e/100*n;t.style.strokeDashoffset=s}return t.style.strokeDasharray=n,t.style.strokeDashoffset=n,{setProgress:s}},switch(){const t=document.querySelector(".active"),e=document.querySelector(".switch-button-case.right"),n=document.querySelector(".switch-button-case.left");function s(){e.classList.remove("active-case"),n.classList.add("active-case"),t.style.left="0%",t.style.borderRadius="20px 0px 0px 20px"}function o(){e.classList.add("active-case"),n.classList.remove("active-case"),t.style.left="50%",t.style.borderRadius="0px 20px 20px 0px"}return{switchLeft:s,switchRight:o}},timer(t,e){t.setProgress(100);const n=document.querySelector("#playBtn"),s=document.querySelector("#pauseBtn"),o=document.querySelector("#actIcon"),a=document.querySelector("#refreshBtn"),i=document.querySelector("#alarm"),r=document.querySelector("#cycles"),c=document.querySelector(".minutes"),l=document.querySelector(".seconds");let u=null,A=0,d=0,m=!1,p=0,g=0,f=0;function h(){if(c.textContent=Math.floor(g/60),l.textContent=g%60>9?g%60:"0"+g%60,g>0)d=Math.ceil((A-g)/A*100),t.setProgress(d),g--,u=window.setTimeout(h,1e3);else{p=0,g=0,M();let t=localStorage.getItem("status");C()?y():"focus"===t?(e.switchRight(),localStorage.setItem("status","break"),b()):(e.switchLeft(),localStorage.setItem("status","focus"),b())}}function C(){return f===Number(localStorage.getItem("cycles"))?(f=0,!0):("focus"===localStorage.getItem("status")&&(f++,r.textContent=f),!1)}function b(){let t=localStorage.getItem("status");p=Number("focus"===t?localStorage.getItem("focusMinutes"):localStorage.getItem("breakMinutes")),g=60*p,A=60*p,setTimeout(h(),60),m=!1,n.setAttribute("hidden",!0),s.removeAttribute("hidden")}function y(){clearTimeout(u),f=0,t.setProgress(100),e.switchLeft(),localStorage.setItem("status","focus"),n.removeAttribute("hidden"),s.setAttribute("hidden",!0),s.classList.contains("fa-play")&&(s.classList.remove("fa-play"),s.classList.add("fa-pause")),c.textContent="0",l.textContent="00"}function v(){void 0!==m&&(m?(m=!1,u=setTimeout(h,60),o.classList.remove("fa-play"),o.classList.add("fa-pause")):(clearTimeout(u),m=!0,o.classList.remove("fa-pause"),o.classList.add("fa-play")))}function M(){"true"===localStorage.getItem("alarm")&&i.play()}n.addEventListener("click",(()=>{b()})),s.addEventListener("click",(()=>{v()})),a.addEventListener("click",(()=>{y()}))}},mounted(){this.timer(this.progressCircle(),this.switch())}};const _t=(0,y.Z)(xt,[["render",a]]);var kt=_t;(0,s.ri)(kt).mount("#app")},2043:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACE1BMVEUAAAAAhGIA0moAjWMAlmQA12wA1mz/KSz9LC3+LCz/Kiz4MC4AhGIAhGIAhGIAhGIA0moA0moAhGIAhGIA0moA0moA0moA0moA0moA0moA0moAhGIAhGIA0moA0moA0WkA0WkA2WYAgGEAgWEA1WYA0moA0moA0moA3HgA44AAu3wAt3oA44AA0moA0moA0moA0moA8pUA8pUA8pUA0moA0moA2W0JzWgLzGgA2m3/GCOZdlCYd1H/HCX5MC77Li36Ly34MC74MC75Ly75Ly74MC75MC75MC74MC74MC74MC74MC74MC74MC74MC74MC74MC74MC74MC74MC74MC74MC74MC74MC74MC74MC74MC74MC74MC74MC74MC74MC74MC74MC74MC74MC74MC74MC74MC74MC74MC74MC74MC74MC74MC74MC74MC74MC74MC74MC74MC4AhGIA0moA0mkAgmEA02sA2HIA3HcA3HgApnIA02wA2nQA54YA8JIA8pUA8JUA54cA2nUD2ncA75EA85cA85YA9JcE2ncS4osA9JYA9ZcT4oqDjWAA9pcV5I5UsnMW4453lmTvNzJMuXcA+ZkA9pgF8JQxzYKed1TwNjGjdFI0y4AG75RGv3qUgFl0mGZ2l2V2l2Z7lGOceVXbRzr6Ly35Ly7dRTl7k2OTgFn4MC76Li37Li37LS3///8lWmo1AAAAc3RSTlMAAAAAAAAAAAAAAAABM446AQJ2iViamJV8Qgl4jF2A7Y8XdooYjU3z/aSjsaLxTw2i/fz+pAwlubslIauxJCO1uiYPoKdg9/hnFL3AE0j08010gI2ZApaiTF/3ZqCkDiO2uCQi9Q267/C8Y0R5lZx6RhEBXmXt2gAAAAFiS0dEsENkrsQAAAAHdElNRQfmCh4XCQVOfpABAAABoUlEQVQ4y2NgoC5gZORhZMQrz8vHj6GCiUlAEAQEmJgYGYWKhRkZkUTACgRERMWAQFxCUopZuliGRUpSQhwkICoLVcAkVwIGpfIKikplyioK8qUQAVWIAgYmNXUgr7yiskpDU6taW0ejqrKiBqhGV48J6gh9g5KS2rr6hoYGQ6NGQ2MgXd/UXFJiYgpVwMBqZt7S2taODDpaOy0s2aDy7BxW1l0dEInunm6oil4bW04uiAJuO/s+qHD/hImT+qEqJjs4ckPknZynTJ02HQj6Z8ycNXvO3Hn9IM60+VNcnEAquLld3aYsWLho0eLFS5YuW75i+cpZqxYvWrRo4eop7h7cQBXcnl5r1qxdBwbrl69Zs2b5eghn7Zo13j4gBb5+a3AB/wCgEdyBa3CDIJCCYDwKQoAKQsPwKAgPJcIEwm7w9cftiwiQAlA44ACQcOCOjMIhHxXNDQ5rpxgcCmLjoLEVn4BVPjGJGxrd3MkxKRjSKeFJ3NywlM+d6pqWjiKdkZkVx42UN7i5nbJzcvNgIDe/oJCbmwENcHMXwQCmJCUAAM+6Xsj+NmYJAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTEwLTMwVDIzOjA4OjU4KzAwOjAwIE1nJAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0xMC0zMFQyMzowODo1OCswMDowMFEQ35gAAAAgdEVYdHNvZnR3YXJlAGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnvM8dnQAAABh0RVh0VGh1bWI6OkRvY3VtZW50OjpQYWdlcwAxp/+7LwAAABh0RVh0VGh1bWI6OkltYWdlOjpIZWlnaHQAMTkyQF1xVQAAABd0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAAxOTLTrCEIAAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADE2NjcxNzEzMzjnt0USAAAAD3RFWHRUaHVtYjo6U2l6ZQAwQkKUoj7sAAAAVnRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vbW50bG9nL2Zhdmljb25zLzIwMjItMTAtMzAvYTI3MzM2Y2UwNjA0M2UwM2I2M2I2MjlhZWU5ZGQ5NjAuaWNvLnBuZ6SqsToAAAAASUVORK5CYII="},5255:function(t,e,n){t.exports=n.p+"media/alarm.665edd61.mp3"}},e={};function n(s){var o=e[s];if(void 0!==o)return o.exports;var a=e[s]={exports:{}};return t[s].call(a.exports,a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,s,o,a){if(!s){var i=1/0;for(u=0;u<t.length;u++){s=t[u][0],o=t[u][1],a=t[u][2];for(var r=!0,c=0;c<s.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](s[c])}))?s.splice(c--,1):(r=!1,a<i&&(i=a));if(r){t.splice(u--,1);var l=o();void 0!==l&&(e=l)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[s,o,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p="/pomotimer-lite/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,s){var o,a,i=s[0],r=s[1],c=s[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(o in r)n.o(r,o)&&(n.m[o]=r[o]);if(c)var u=c(n)}for(e&&e(s);l<i.length;l++)a=i[l],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(u)},s=self["webpackChunkpomotimer"]=self["webpackChunkpomotimer"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(7219)}));s=n.O(s)})();
//# sourceMappingURL=app.4c20ea53.js.map