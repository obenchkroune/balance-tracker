(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{36:function(e,t,a){e.exports=a(46)},42:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),l=a.n(c),o=(a(41),a(42),a(12)),u=a(54),i=a(50),s=a(51),m=a(53),d=a(35),E=a(18),f=function(e,t){switch(t.type){case"DELETE_TRANSACTION":return Object(E.a)(Object(E.a)({},e),{},{transactions:e.transactions.filter((function(e){return e.id!==t.payload}))});case"ADD_TRANSACTION":return Object(E.a)(Object(E.a)({},e),{},{transactions:[].concat(Object(d.a)(e.transactions),[t.payload])});default:return e}},b={transactions:[{id:1,title:"Flower",ammount:-20},{id:2,title:"Salary",ammount:300},{id:3,title:"Book",ammount:-10},{id:4,title:"Camera",ammount:150}]},p=Object(n.createContext)(b),v=function(e){var t=e.children,a=Object(n.useReducer)(f,b),c=Object(o.a)(a,2),l=c[0],u=c[1];return r.a.createElement(p.Provider,{value:{transactions:l.transactions,deleteTransaction:function(e){u({type:"DELETE_TRANSACTION",payload:e})},addTransaction:function(e){u({type:"ADD_TRANSACTION",payload:e})}}},t)};var h=function(e){var t=e.open,a=e.close,c=Object(n.useState)(""),l=Object(o.a)(c,2),d=l[0],E=l[1],f=Object(n.useState)(0),b=Object(o.a)(f,2),v=b[0],h=b[1],O=Object(n.useContext)(p).addTransaction;return r.a.createElement(i.a,{show:t,onHide:a},r.a.createElement(i.a.Header,{closeButton:!0},r.a.createElement("h3",null,"New Transaction")),r.a.createElement(i.a.Body,null,r.a.createElement(s.a,{onSubmit:function(e){e.preventDefault();var t={id:Object(m.a)(),title:d,ammount:parseInt(v)};O(t),E(""),h(0),a()}},r.a.createElement(s.a.Group,null,r.a.createElement(s.a.Label,null,"title:"),r.a.createElement(s.a.Control,{value:d,onChange:function(e){return E(e.target.value)},placeholder:"Enter Text...",required:!0})),r.a.createElement(s.a.Group,null,r.a.createElement(s.a.Label,null,"ammount:"),r.a.createElement(s.a.Control,{onChange:function(e){return h(e.target.value)},type:"number",value:v,required:!0})),r.a.createElement(u.a,{type:"submit",block:!0,variant:"info"},"Add transaction"))))};var O=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"mb-4"},r.a.createElement("h3",null,"Balance tracker"),r.a.createElement(u.a,{onClick:function(){return c(!0)}},"Add Transaction"),r.a.createElement(h,{open:a,close:function(){c(!1)}}))};var y=function(){var e=Object(n.useContext)(p).transactions.map((function(e){return e.ammount})).reduce((function(e,t){return e+t}),0).toFixed(2);return r.a.createElement("div",{className:"my-3"},r.a.createElement("strong",null,"YOUR BALANCE"),r.a.createElement("h1",{className:"display-4"},"$",e))},N=a(49),j=a(31);var x=function(){var e=Object(n.useContext)(p).transactions.map((function(e){return e.ammount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),a=e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0)*-1..toFixed(2);return r.a.createElement("div",{className:"bg-white shadow py-4 text-center bold",style:{fontSize:"1.3rem",fontWeight:"600"}},r.a.createElement(N.a,null,r.a.createElement(j.a,{md:6,className:"border-adjust py-1 mx-3 mx-md-auto"},"INCOME",r.a.createElement("p",{className:"text-success m-0"},"+$",t)),r.a.createElement(j.a,{md:6},"EXPENCES",r.a.createElement("p",{className:"text-danger m-0"},"-$",a))))},C=a(52);var g=function(e){var t=e.transaction,a=Object(n.useContext)(p).deleteTransaction;return r.a.createElement(C.a.Item,{style:t.ammount<0?{borderRight:"4px solid #dc3545"}:{borderRight:"4px solid #28a745"},className:"d-flex align-items-center justify-content-between mb-2 shadow-sm"},r.a.createElement("span",null,t.title),r.a.createElement("span",null,t.ammount<0?"-":"+","$",Math.abs(t.ammount),r.a.createElement(u.a,{onClick:function(){return a(t.id)},size:"sm",variant:"danger",className:"ml-2"},"delete")))};var T=function(){var e=Object(n.useContext)(p).transactions;return r.a.createElement("div",{className:"my-3"},r.a.createElement("h3",null,"History"),r.a.createElement("hr",null),r.a.createElement(C.a,{style:{fontWeight:"600"}},e.map((function(e){return r.a.createElement(g,{key:e.id,transaction:e})}))))};var w=function(){return r.a.createElement(v,null,r.a.createElement("div",{className:"mx-auto col-lg-5 mt-4"},r.a.createElement(O,null),r.a.createElement(y,null),r.a.createElement(x,null),r.a.createElement(T,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.45f75281.chunk.js.map