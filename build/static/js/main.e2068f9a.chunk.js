(this["webpackJsonptodolist-react"]=this["webpackJsonptodolist-react"]||[]).push([[0],{163:function(e,n,t){},164:function(e,n,t){},168:function(e,n){},170:function(e,n){},180:function(e,n){},182:function(e,n){},210:function(e,n){},212:function(e,n){},213:function(e,n){},218:function(e,n){},220:function(e,n){},239:function(e,n){},251:function(e,n){},254:function(e,n){},300:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),c=t(153),i=t.n(c),s=(t(163),t(164),t(4)),l=t(301);const r="https://todo-list.alphacamp.io/api/auth/";var d=t(56),u=t(3);const h={isAuthenticated:!1,currentMember:null,register:null,login:null,logout:null},b=Object(o.createContext)(h),j=()=>Object(o.useContext)(b);var p=function(e){let{children:n}=e;const[t,a]=Object(o.useState)(!1),[c,i]=Object(o.useState)(null),{pathname:h}=Object(s.m)();return Object(o.useEffect)((()=>{console.log("Auth useEffect is running",t),(async()=>{const e=localStorage.getItem("authToken");if(!e)return a(!1),void i(null);const n=await(async e=>{try{return(await l.a.get("".concat(r,"test-token"),{headers:{Authorization:"Bearer "+e}})).data.success}catch(n){console.log("Check Permission failed ".concat(n))}})(e);n?(a(!0),i(d.decode(e))):(a(!1),i(null))})()}),[h]),Object(u.jsx)(b.Provider,{value:{isAuthenticated:t,currentMember:c,register:async e=>{const{success:n,authToken:t}=await(async e=>{let{username:n,password:t,email:o}=e;try{const{data:e}=await l.a.post("".concat(r,"register"),{username:n,password:t,email:o}),{authToken:a}=e;return a?{success:!0,...e}:e}catch(a){console.log("Register failed ".concat(a))}})({username:e.username,email:e.email,password:e.password}),o=d.decode(t);return console.log(o),o?(a(!0),i(o),localStorage.setItem("authToken",t)):(a(!1),i(null)),n},login:async e=>{const{success:n,authToken:t}=await(async e=>{let{username:n,password:t}=e;try{const{data:e}=await l.a.post("".concat(r,"login"),{username:n,password:t}),{authToken:o}=e;return o?{success:!0,...e}:e}catch(o){console.log("Login failed ".concat(o))}})({username:e.username,password:e.password}),o=d.decode(t);if(o)return o?(a(!0),i(o),localStorage.setItem("authToken",t)):(a(!1),i(null)),n},logout:()=>{localStorage.removeItem("authToken"),a(!1),i(null)}},children:n})};var g,f,x,m,O=()=>{const{isAuthenticated:e}=j(),n=Object(s.o)();return Object(o.useEffect)((()=>{n(e?"/todo":"/login")}),[n,e]),Object(u.jsx)("div",{children:"HomePage"})},v=t(8),y=t(9);const w=y.a.div(g||(g=Object(v.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 50px;\n"]))),k=y.a.div(f||(f=Object(v.a)(["\n  width: 50%;\n  margin-top: 30px;\n"]))),C=y.a.button(x||(x=Object(v.a)(["\n  border-radius: 30px;\n  background-color: #ff6600;\n  border: none;\n\n  color: white;\n  min-width: 300px;\n  font-family: 'Noto Sans TC', sans-serif;\n  font-weight: bold;\n  padding: 6px 0;\n  margin: 2rem 0;\n\n  &.hover {\n    cursor: pointer;\n  }\n"]))),E=y.a.div(m||(m=Object(v.a)(["\n  color: #0062ff;\n  font-size: 16px;\n  font-weight: 400;\n"])));var D,T,S,z;function N(){return N=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},N.apply(this,arguments)}function F(e,n){let{title:t,titleId:a,...c}=e;return o.createElement("svg",N({width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":a},c),t?o.createElement("title",{id:a},t):null,D||(D=o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M25.6996 18.4709C25.6996 18.4709 18.2328 30.5781 12.1109 30.5781C1.40314 30.5781 11.3821 7.51318 19.1916 7.51318C24.641 7.51318 25.6996 18.4709 25.6996 18.4709Z",fill:"#FF6600"})),T||(T=o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M34.5723 33.6972C32.4451 35.9607 29.8198 37.6976 26.9044 38.7701C23.989 39.8426 20.8639 40.2213 17.7767 39.8761C14.6895 39.5309 11.7252 38.4713 9.11881 36.7813C6.51245 35.0914 4.33573 32.8175 2.76123 30.1401C4.5314 32.5477 7.53375 34.1527 11.803 34.1527C22.3199 34.1527 28.2899 25.98 28.2899 25.98C28.2899 25.98 28.8062 32.4392 34.5593 33.6972H34.5723Z",fill:"#FF6600"})),S||(S=o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M37.7223 10.7451C39.2963 13.7527 40.0781 17.1116 39.9939 20.505C39.9096 23.8984 38.9621 27.2144 37.2407 30.1401C35.8792 29.3764 34.8725 28.1082 34.4379 26.609L32.1558 19.7724L37.7223 10.7451Z",fill:"#FF6600"})),z||(z=o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.0031 0.0173688C25.0185 0.0140335 29.8513 1.89881 33.5398 5.29665L29.7521 11.4088C28.3811 7.84302 25.5957 4.2729 20.1767 4.2729C9.07841 4.2729 0.852307 16.3888 0.852307 23.9846C0.849861 24.9669 0.975283 25.9454 1.22543 26.8953C0.115582 23.8725 -0.247948 20.6265 0.165719 17.4331C0.579385 14.2398 1.75802 11.1934 3.60147 8.55306C5.44491 5.91269 7.89866 3.75634 10.7542 2.26726C13.6097 0.778179 16.7826 0.000388507 20.0031 0V0.0173688Z",fill:"#FF6600"})))}const R=o.forwardRef(F);t.p;var A,M,P,B=t.p+"static/media/check-active.680985db.svg",I=t.p+"static/media/check-circle.ad8591fd.svg",L=t.p+"static/media/check-hover.f1b1bcfd.svg";const K=y.a.div(A||(A=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  background-color: #f5f8fa;\n  width: 100%;\n  height: 54px;\n  border-bottom: 2px solid black;\n"]))),V=y.a.label(M||(M=Object(v.a)(["\n  font-size: 14;\n  color: '#696974';\n  text-align: start;\n"]))),Z=y.a.input(P||(P=Object(v.a)(["\n  outline: none;\n  border: none;\n  background-color: #f5f8fa;\n  border-radius: 0px;\n"])));var H,J,q=e=>{let{type:n,label:t,value:o,placeholder:a,onChange:c}=e;return Object(u.jsxs)(K,{children:[Object(u.jsx)(V,{children:t}),Object(u.jsx)(Z,{type:n||"text",value:o||"",placeholder:a||"",onChange:e=>null===c||void 0===c?void 0:c(e.target.value)})]})};const G=y.a.header(H||(H=Object(v.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  color: var(--major);\n  padding: 0 16px;\n\n  h3 {\n    font-weight: 400;\n    user-select: none;\n  }\n"]))),U=y.a.div(J||(J=Object(v.a)(["\n  color: var(--gray);\n  span {\n    color: var(--major);\n  }\n"])));var $,Q,W,X,Y=e=>{let{username:n}=e;return Object(u.jsxs)(G,{children:[Object(u.jsx)("h3",{children:"Tasks"}),Object(u.jsxs)(U,{children:["Hi ",Object(u.jsx)("span",{children:n})]})]})},_=t(39);const ee=y.a.div($||($=Object(v.a)(["\n  min-height: 52px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  word-wrap: break-word;\n  word-break: break-word;\n  padding: 0 12px;\n  box-shadow: 0 17px 0 -16px #e5e5e5;\n  flex-wrap: wrap;\n\n  &.active {\n    box-shadow: 0 17px 0 -16px var(--major);\n  }\n"]))),ne=y.a.label(Q||(Q=Object(v.a)(["\n  display: inline-flex;\n  font-size: 30px;\n  transition: color 0.2s ease-out;\n  font-weight: 300;\n\n  &:after {\n    content: '+';\n  }\n"]))),te=y.a.div(W||(W=Object(v.a)(["\n  min-height: 52px;\n  display: flex;\n  align-items: center;\n  flex: 1;\n  user-select: none;\n\n  input {\n    flex: 1;\n    padding: 8px 12px;\n    border: 0;\n    outline: 0;\n    font-size: 1rem;\n\n    &::placeholder {\n      color: var(--major);\n      font-size: 13px;\n    }\n  }\n  $.active {\n    input::placeholder {\n      color: var(--gray);\n    }\n  }\n"]))),oe=y.a.div(X||(X=Object(v.a)(["\n  button {\n    font-size: 13px;\n    color: var(--major);\n    padding-right: 5px;\n    display: none;\n  }\n\n  &.active {\n    button {\n      display: block;\n    }\n  }\n"])));var ae,ce=e=>{let{inputValue:n,onChange:t,onKeydown:o,onAddTodo:a}=e;return Object(u.jsxs)(ee,{className:Object(_.a)("",{active:n.length>0}),children:[Object(u.jsx)(ne,{className:"icon",htmlFor:"add-todo-input"}),Object(u.jsx)(te,{children:Object(u.jsx)("input",{id:"add-todo-input",type:"text",placeholder:"\u65b0\u589e\u5de5\u4f5c",value:n,onChange:e=>null===t||void 0===t?void 0:t(e.target.value),onKeyDown:e=>{"Enter"===e.key&&(null===o||void 0===o||o())}})}),Object(u.jsx)(oe,{className:Object(_.a)("",{active:n.length>0}),children:Object(u.jsx)("button",{className:"btn-reset",onClick:a,children:"\u65b0\u589e"})})]})};const ie=y.a.div(ae||(ae=Object(v.a)(["\n  min-height: 52px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  word-wrap: break-word;\n  word-break: break-word;\n  padding: 0 12px;\n  box-shadow: 0 17px 0 -16px #e5e5e5;\n  flex-wrap: wrap;\n\n  .task-item-body-input {\n    user-select: none;\n    display: none;\n    flex: 1;\n    padding: 8px 0px;\n    border: 0;\n    outline: 0;\n    font-size: 1rem;\n\n    &::placeholder {\n      color: var(--gray);\n      font-size: 13px;\n    }\n  }\n\n  &:hover {\n    background: #fff3eb;\n    box-shadow: inset 0 0 0 1px #fff3eb;\n\n    .task-item-action .btn-destroy {\n      display: inline-flex;\n    }\n  }\n\n  &.done {\n    .task-item-body {\n      color: var(--gray);\n      text-decoration: line-through;\n    }\n\n    .icon-checked {\n      background-image: url(",");\n    }\n  }\n\n  &.edit {\n    .task-item-body-input {\n      display: block;\n    }\n    .task-item-body-text {\n      display: none;\n    }\n    .task-item-action {\n      display: none;\n    }\n  }\n\n  .task-item-checked {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .task-item-body {\n    font-weight: 400;\n    padding: 8px 12px;\n    flex: 1;\n    display: flex;\n  }\n\n  .task-item-action {\n    .btn-destroy {\n      display: none;\n      font-size: 30px;\n      transition: color 0.2s ease-out;\n      font-weight: 300;\n      &:after {\n        content: '\xd7';\n      }\n    }\n  }\n\n  .icon-checked {\n    background-image: url(",");\n    background-position: center;\n    background-repeat: no-repeat;\n\n    &:hover {\n      transition: background-image 0.5s;\n      background-image: url(",");\n    }\n  }\n"])),B,I,L);var se=e=>{let{todo:n,onSave:t,onDelete:a,onToggleDone:c,onChnageMode:i}=e;const s=Object(o.useRef)(null);return Object(u.jsxs)(ie,{className:Object(_.a)("",{done:n.isDone,edit:n.isEdit}),children:[Object(u.jsx)("div",{className:"task-item-checked",children:Object(u.jsx)("span",{className:"icon icon-checked",onClick:()=>null===c||void 0===c?void 0:c(n.id)})}),Object(u.jsxs)("div",{className:"task-item-body",onDoubleClick:()=>{null===i||void 0===i||i({id:n.id,isEdit:!0})},children:[Object(u.jsx)("span",{className:"task-item-body-text",children:n.title}),Object(u.jsx)("input",{ref:s,className:"task-item-body-input",defaultValue:n.title,onKeyDown:e=>{"Enter"===e.key&&s.current.value.length>0&&(null===t||void 0===t||t({id:n.id,title:s.current.value})),"Escape"===e.key&&i({id:n.id,isEdit:!1})}})]}),Object(u.jsx)("div",{className:"task-item-action ",children:Object(u.jsx)("button",{className:"btn-reset btn-destroy icon",onClick:()=>null===a||void 0===a?void 0:a(n.id)})})]})};var le,re,de=e=>{let{todos:n,onSave:t,onDelete:o,onToggleDone:a,onChnageMode:c}=e;return Object(u.jsx)("div",{children:n.map((e=>Object(u.jsx)(se,{todo:e,onToggleDone:a,onChnageMode:c,onSave:t,onDelete:o},e.id)))})};const ue=y.a.footer(le||(le=Object(v.a)(["\n  display: flex;\n  justify-content: space-between;\n\n  padding: 0 16px;\n  p {\n    font-size: 14px;\n    font-weight: 300;\n    margin: 2rem 0 1rem;\n  }\n"]))),he=y.a.button(re||(re=Object(v.a)(["\n  padding: 0;\n  border: 0;\n  background: none;\n  vertical-align: baseline;\n  appearance: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  cursor: pointer;\n  outline: 0;\n\n  font-size: 14px;\n  font-weight: 300;\n  margin: 2rem 0 1rem;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));var be=e=>{let{todos:n}=e;const{logout:t}=j();return Object(u.jsxs)(ue,{children:[Object(u.jsxs)("p",{children:["\u5269\u9918\u9805\u76ee\u6578\uff1a ",n.length]}),Object(u.jsx)(he,{onClick:()=>{t()},children:"\u767b\u51fa"})]})},je=t(20),pe=t(30),ge=t.n(pe);var fe=()=>{const[e,n]=Object(o.useState)(""),[t,a]=Object(o.useState)(""),c=Object(s.o)(),{isAuthenticated:i,login:l}=j();Object(o.useEffect)((()=>{i&&c("/todo"),console.log("loginPage useEffect",i)}),[c,i]);return Object(u.jsxs)(w,{children:[Object(u.jsx)("div",{children:Object(u.jsx)(R,{})}),Object(u.jsx)("h1",{children:"\u767b\u5165 Todo"}),Object(u.jsx)(k,{children:Object(u.jsx)(q,{label:"\u5e33\u865f",placeholder:"\u8acb\u8f38\u5165\u5e33\u865f",value:e,onChange:e=>n(e)})}),Object(u.jsx)(k,{children:Object(u.jsx)(q,{label:"\u5bc6\u78bc",placeholder:"\u8acb\u8f38\u5165\u5bc6\u78bc",value:t,onChange:e=>a(e)})}),Object(u.jsx)(C,{onClick:async()=>{try{if(0===e.length||0===t.length)return;if(await l({username:e,password:t}))return void ge.a.fire({title:"\u767b\u5165\u6210\u529f",icon:"success",timer:1e3,showConfirmButton:!1,position:"top"});ge.a.fire({title:"\u767b\u5165\u5931\u6557",icon:"error",timer:1e3,showConfirmButton:!1,position:"top"})}catch(n){console.log(n)}},children:"\u767b\u5165"}),Object(u.jsx)(je.b,{to:"/signup",children:Object(u.jsx)(E,{children:"\u8a3b\u518a"})})]})};var xe=()=>{const[e,n]=Object(o.useState)(""),[t,a]=Object(o.useState)(""),[c,i]=Object(o.useState)(""),l=Object(s.o)(),{isAuthenticated:r,register:d}=j();Object(o.useEffect)((()=>{r&&l("/todo"),console.log("sigunupPage useEffect")}),[l,r]);return Object(u.jsxs)(w,{children:[Object(u.jsx)("div",{children:Object(u.jsx)(R,{})}),Object(u.jsx)("h1",{children:"\u5efa\u7acb\u60a8\u7684\u5e33\u865f"}),Object(u.jsx)(k,{children:Object(u.jsx)(q,{label:"\u5e33\u865f",placeholder:"\u8acb\u8f38\u5165\u5e33\u865f",value:e,onChange:e=>n(e)})}),Object(u.jsx)(k,{children:Object(u.jsx)(q,{label:"Email",placeholder:"\u8acb\u8f38\u5165\u8a3b\u518aEmail",value:t,onChange:e=>a(e)})}),Object(u.jsx)(k,{children:Object(u.jsx)(q,{label:"\u5bc6\u78bc",placeholder:"\u8acb\u8f38\u5165\u5bc6\u78bc",value:c,onChange:e=>i(e)})}),Object(u.jsx)(C,{onClick:async()=>{try{if(0===e.length||0===t.length||0===c.length)return;if(await d({username:e,email:t,password:c}))return void ge.a.fire({title:"\u8a3b\u518a\u6210\u529f",icon:"success",timer:1e3,showConfirmButton:!1,position:"top"});ge.a.fire({title:"\u8a3b\u518a\u5931\u6557",icon:"error",timer:1e3,showConfirmButton:!1,position:"top"})}catch(n){console.log(n)}},children:"\u8a3b\u518a"}),Object(u.jsx)(je.b,{to:"/login",children:Object(u.jsx)(E,{children:"\u53d6\u6d88"})})]})};const me="https://todo-list.alphacamp.io/api",Oe=l.a.create({baseURL:me});Oe.interceptors.request.use((e=>{const n=localStorage.getItem("authToken");return n&&(e.headers.Authorization="Bearer ".concat(n)),e}),(e=>{console.log(e)}));const ve=async e=>{const{title:n,isDone:t}=e;try{const e=await Oe.post("".concat(me,"/todos"),{title:n,isDone:t});return console.log("creattodo",e.data),e.data}catch(o){console.log("Create Todos failed:  ".concat(o))}},ye=async e=>{const{title:n,isDone:t,id:o}=e;try{const e=await Oe.patch("".concat(me,"/todos/").concat(o),{title:n,isDone:t});return console.log("patchtodo",e.data),e.data}catch(a){console.log("Patch Todos failed:  ".concat(a))}};var we=()=>{const[e,n]=Object(o.useState)(""),[t,a]=Object(o.useState)([]),c=Object(s.o)(),{isAuthenticated:i,currentMember:l}=j();Object(o.useEffect)((()=>{i||c("/login"),console.log("todoPage useEffect",i)}),[c,i]),Object(o.useEffect)((()=>{(async()=>{try{const e=await(async()=>{try{const e=await Oe.get("".concat(me,"/todos"));return console.log("gettodo",e.data),e.data.data}catch(e){console.log("GET Todos failed:  ".concat(e))}})();a(e.map((e=>({...e,isEdit:!1}))))}catch(e){console.log("getTodo failed ".concat(e))}})()}),[]);return Object(u.jsxs)("div",{children:["TodoPage",Object(u.jsx)(Y,{username:null===l||void 0===l?void 0:l.name}),Object(u.jsx)(ce,{inputValue:e,onChange:function(e){n(e)},onKeydown:async()=>{if(0!==e.length)try{const t=await ve({title:e,isDone:!1});a((e=>[...e,{id:t.id,title:t.title,isDone:t.isDone,isEdit:!1}])),n("")}catch(t){console.log("handleKeyDown failed ".concat(t))}},onAddTodo:async()=>{if(0!==e.length)try{const t=await ve({title:e,isDone:!1});a((e=>[...e,{id:t.id,title:t.title,isDone:t.isDone,isEdit:!1}])),n("")}catch(t){console.log("handleAddTodo failed ".concat(t))}}}),Object(u.jsx)(de,{todos:t,onToggleDone:async e=>{const n=t.find((n=>n.id===e));try{await ye({id:e,isDone:!n.isDone}),a((n=>n.map((n=>n.id===e?{...n,isDone:!n.isDone}:n))))}catch(o){console.log("handle Toggle failed ".concat(o))}},onChnageMode:e=>{let{id:n,isEdit:t}=e;a((e=>e.map((e=>e.id===n?{...e,isEdit:t}:{...e,isEdit:!1}))))},onSave:async e=>{let{id:n,title:t}=e;try{await ye({id:n,title:t}),a((e=>e.map((e=>e.id===n?{...e,title:t,isEdit:!1}:e))))}catch(o){console.log("handle Save failed ".concat(o))}},onDelete:async e=>{try{await(async e=>{try{return(await Oe.delete("".concat(me,"/todos/").concat(e))).data}catch(n){console.log("Delete Todos failed:  ".concat(n))}})(e),a((n=>n.filter((n=>n.id!==e))))}catch(n){console.log("handle Delete ".concat(n))}}}),Object(u.jsx)(be,{todos:t})]})};var ke=function(){return Object(u.jsx)("div",{className:"app",children:Object(u.jsx)(je.a,{children:Object(u.jsx)(p,{children:Object(u.jsxs)(s.c,{children:[Object(u.jsx)(s.a,{path:"login",element:Object(u.jsx)(fe,{})}),Object(u.jsx)(s.a,{path:"signup",element:Object(u.jsx)(xe,{})}),Object(u.jsx)(s.a,{path:"todo",element:Object(u.jsx)(we,{})}),Object(u.jsx)(s.a,{path:"*",element:Object(u.jsx)(O,{})})]})})})})};var Ce=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,302)).then((n=>{let{getCLS:t,getFID:o,getFCP:a,getLCP:c,getTTFB:i}=n;t(e),o(e),a(e),c(e),i(e)}))};i.a.createRoot(document.getElementById("root")).render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(ke,{})})),Ce()}},[[300,1,2]]]);
//# sourceMappingURL=main.e2068f9a.chunk.js.map