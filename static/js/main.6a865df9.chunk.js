(this.webpackJsonpday3=this.webpackJsonpday3||[]).push([[0],{19:function(e,c,t){},27:function(e,c,t){},37:function(e,c){},38:function(e,c,t){"use strict";t.r(c);var a=t(6),n=t(20),s=t.n(n),r=(t(27),t(5)),u=(t(19),t(1));function i(e){var c=e.expression,t=e.result,a=e.err;return Object(u.jsxs)("div",{className:"display",children:[Object(u.jsx)("p",{children:c}),a?Object(u.jsx)("p",{className:"error",children:a}):Object(u.jsx)("p",{className:"output",children:t})]})}function l(e){return Object(u.jsx)("div",{className:"btn","data-input":e.value,children:e.value})}function o(e){return Object(u.jsx)("div",{className:"keypad",onClick:function(c){return e.calculate(c.target.dataset.input)},children:["7","4","1",".","8","5","2","0","9","6","3","=","AC","CE","/","*","+","-","sin","ln","\u03c0","(","cos","log","e",")","tan","!","^","\u221a"].map((function(e){return Object(u.jsx)(l,{value:e},e)}))})}var d=t(40);var p=function(){var e=Object(a.useState)(!1),c=Object(r.a)(e,2),t=c[0],n=c[1],s=Object(a.useState)(""),l=Object(r.a)(s,2),p=l[0],j=l[1],b=Object(a.useState)(""),k=Object(r.a)(b,2),m=k[0],f=k[1],O=Object(a.useState)(""),y=Object(r.a)(O,2),v=y[0],h=y[1],x=function(e){e.classList.add("clicked"),setTimeout((function(){e.classList.remove("clicked")}),100)};return Object(a.useEffect)((function(){return document.addEventListener("keyup",(function(e){if(document.querySelector("[data-input='".concat(e.key,"']"))||["Enter","Escape","Backspace"].includes(e.key))switch(e.key){case"Enter":document.querySelector("[data-input='=']").click(),x(document.querySelector("[data-input='=']"));break;case"Escape":document.querySelector("[data-input='AC']").click(),x(document.querySelector("[data-input='AC']"));break;case"Backspace":document.querySelector("[data-input='CE']").click(),x(document.querySelector("[data-input='CE']"));break;default:x(document.querySelector("[data-input='".concat(e.key,"']"))),document.querySelector("[data-input='".concat(e.key,"']")).click()}})),function(){document.removeEventListener("keyup",(function(e){}))}}),[]),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("button",{onClick:function(){n(!t)},children:["Show ",t?"Basic":"Scientific"]}),Object(u.jsxs)("main",{className:t?"expanded":"",children:[Object(u.jsx)(i,{err:v,expression:p,result:m}),Object(u.jsx)(o,{calculate:function(e){h("");try{switch(e){case"AC":j(""),f("");break;case"CE":j(p.slice(0,-1)),f("");break;case"=":var c=p.replaceAll("log","log10");c=(c=(c=c.replaceAll("ln","log")).replaceAll("\u03c0","pi")).replaceAll("\u221a","sqrt"),f(Object(d.a)(c));break;case"sin":case"cos":case"tan":case"ln":case"log":case"\u221a":j(p+e+"(");break;default:j(p+e),f("")}}catch(t){console.log(t.message),h(t.message)}}})]})]})};s.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.6a865df9.chunk.js.map