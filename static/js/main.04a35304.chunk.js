(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(7),s=c.n(i),l=c(8),r=c(6),d=c(3),j=(c(13),c(0)),o=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(function(){var e=localStorage.getItem("lists");return console.log(e),e?JSON.parse(localStorage.getItem("lists")):[]}()),s=Object(d.a)(i,2),o=s[0],b=s[1],u=Object(n.useState)(!0),m=Object(d.a)(u,2),f=m[0],O=m[1],h=Object(n.useState)(null),x=Object(d.a)(h,2),p=x[0],v=x[1],g=function(){if(c)if(c&&!f)b(o.map((function(e){return e.id===p?Object(r.a)(Object(r.a)({},e),{},{name:c}):e}))),O(!0),a(""),v(null);else{var e={id:(new Date).getTime().toString(),name:c};b([].concat(Object(l.a)(o),[e])),a("")}else alert("plzz fill data")};return Object(n.useEffect)((function(){localStorage.setItem("lists",JSON.stringify(o))}),[o]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"main-div",children:Object(j.jsxs)("div",{className:"child-div",children:[Object(j.jsx)("figure",{children:Object(j.jsx)("figcaption",{children:"To Do List"})}),Object(j.jsxs)("div",{className:"addItems",children:[Object(j.jsx)("input",{type:"text",placeholder:"Write..",value:c,onChange:function(e){return a(e.target.value)}}),f?Object(j.jsx)("i",{className:"fa fa-plus add-btn",title:"Add Item",onClick:g}):Object(j.jsx)("i",{className:"far fa-edit add-btn",title:"Update Item",onClick:g})]}),Object(j.jsx)("div",{className:"showItems",children:o.map((function(e){return Object(j.jsxs)("div",{className:"eachItem",children:[Object(j.jsx)("h3",{children:e.name}),Object(j.jsxs)("div",{className:"todo-btn",children:[Object(j.jsx)("i",{className:"far fa-edit add-btn",title:"Edit Item",onClick:function(){return function(e){var t=o.find((function(t){return t.id===e}));console.log(t),O(!1),a(t.name),v(e)}(e.id)}}),Object(j.jsx)("i",{className:"far fa-trash-alt add-btn",title:"Delete Item",onClick:function(){return function(e){var t=o.filter((function(t){return e!==t.id}));b(t)}(e.id)}})]})]},e.id)}))}),Object(j.jsx)("div",{className:"showItems",children:Object(j.jsxs)("button",{className:"btn effect04","data-sm-link-text":"Remove All",onClick:function(){b([])},children:[Object(j.jsx)("span",{children:" CHECK LIST "})," "]})})]})})})},b=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(o,{})})};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.04a35304.chunk.js.map