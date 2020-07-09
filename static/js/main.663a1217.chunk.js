(this.webpackJsonpclocktime=this.webpackJsonpclocktime||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('{"name":"clocktime","version":"1.1.1","private":true,"homepage":"https://josiahayres.github.io/clocktime/","dependencies":{"@material-ui/core":"^4.10.2","@testing-library/jest-dom":"^4.2.4","@testing-library/react":"^9.5.0","@testing-library/user-event":"^7.2.1","notistack":"^0.9.17","react":"^16.13.1","react-dom":"^16.13.1","react-scripts":"3.4.1","source-map-explorer":"^2.4.2"},"scripts":{"analyze":"source-map-explorer \'build/static/js/*.js\'","start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject","predeploy":"npm version minor && npm run build","deploy":"gh-pages -d build"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"devDependencies":{"gh-pages":"^3.1.0"}}')},,,,,function(e,t,i){e.exports=i(29)},,,,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var n=i(0),o=i.n(n),a=i(4),r=i.n(a),c=i(6),l=(i(22),i(1));i(23);var s=function(e){var t=e.size,i=void 0===t?"regular":t,n=e.showSecond,a=void 0!==n&&n,r=e.config,c=void 0===r?{hour:0,minute:0,visible:!0}:r,l=c.hour,s=c.minute,u=c.visible,m=o.a.createRef(null),d=o.a.createRef(null);o.a.useEffect((function(){if(!isNaN(l)&&!isNaN(s))if((null===m||void 0===m?void 0:m.current)&&(null===d||void 0===d?void 0:d.current)){var e=30*l,t=6*s;m.current.style.transform="rotate(".concat(e,"deg)"),d.current.style.transform="rotate(".concat(t,"deg)")}else console.log(m)}),[m,d,l,s]);var b="wrap"+(u?"":" hidden");return o.a.createElement("div",{className:"clock ".concat(i)},o.a.createElement("div",{className:b},o.a.createElement("span",{ref:m,className:"hour"}),o.a.createElement("span",{ref:d,className:"minute"}),a&&o.a.createElement("span",{className:"second"}),o.a.createElement("span",{className:"dot"})))};i(24);var u=function(e){var t,i=e.number,n=e.size,a=void 0===n?"small":n;switch(i){case 1:t={topLeft:{hour:0,minute:30,visible:!1},topRight:{hour:6,minute:30,visible:!0},middleLeft:{hour:6,minute:15,visible:!1},middleRight:{hour:6,minute:60,visible:!0},bottomLeft:{hour:3,minute:60,visible:!1},bottomRight:{hour:12,minute:60,visible:!0}};break;case 2:t={topLeft:{hour:3,minute:15,visible:!0},topRight:{hour:9,minute:30,visible:!0},middleLeft:{hour:6,minute:15,visible:!0},middleRight:{hour:12,minute:45,visible:!0},bottomLeft:{hour:3,minute:60,visible:!0},bottomRight:{hour:9,minute:45,visible:!0}};break;case 3:t={topLeft:{hour:3,minute:15,visible:!0},topRight:{hour:9,minute:30,visible:!0},middleLeft:{hour:3,minute:15,visible:!0},middleRight:{hour:12,minute:45,visible:!0},bottomLeft:{hour:3,minute:15,visible:!0},bottomRight:{hour:9,minute:0,visible:!0}};break;case 4:t={topLeft:{hour:6,minute:30,visible:!0},topRight:{hour:6,minute:30,visible:!0},middleLeft:{hour:12,minute:15,visible:!0},middleRight:{hour:12,minute:45,visible:!0},bottomLeft:{hour:3,minute:15,visible:!1},bottomRight:{hour:12,minute:60,visible:!0}};break;case 5:t={topLeft:{hour:6,minute:15,visible:!0},topRight:{hour:9,minute:45,visible:!0},middleLeft:{hour:12,minute:15,visible:!0},middleRight:{hour:6,minute:45,visible:!0},bottomLeft:{hour:3,minute:15,visible:!0},bottomRight:{hour:9,minute:0,visible:!0}};break;case 6:t={topLeft:{hour:6,minute:15,visible:!0},topRight:{hour:9,minute:45,visible:!0},middleLeft:{hour:12,minute:30,visible:!0},middleRight:{hour:6,minute:45,visible:!0},bottomLeft:{hour:12,minute:15,visible:!0},bottomRight:{hour:9,minute:0,visible:!0}};break;case 7:t={topLeft:{hour:3,minute:15,visible:!0},topRight:{hour:9,minute:30,visible:!0},middleLeft:{hour:12,minute:30,visible:!1},middleRight:{hour:12,minute:30,visible:!0},bottomLeft:{hour:12,minute:15,visible:!1},bottomRight:{hour:12,minute:60,visible:!0}};break;case 8:t={topLeft:{hour:3,minute:30,visible:!0},topRight:{hour:9,minute:30,visible:!0},middleLeft:{hour:3,minute:30,visible:!0},middleRight:{hour:9,minute:30,visible:!0},bottomLeft:{hour:3,minute:60,visible:!0},bottomRight:{hour:9,minute:0,visible:!0}};break;case 9:t={topLeft:{hour:3,minute:30,visible:!0},topRight:{hour:9,minute:30,visible:!0},middleLeft:{hour:3,minute:0,visible:!0},middleRight:{hour:12,minute:30,visible:!0},bottomLeft:{hour:3,minute:15,visible:!0},bottomRight:{hour:9,minute:0,visible:!0}};break;default:t={topLeft:{hour:3,minute:30,visible:!0},topRight:{hour:9,minute:30,visible:!0},middleLeft:{hour:12,minute:30,visible:!0},middleRight:{hour:12,minute:30,visible:!0},bottomLeft:{hour:12,minute:15,visible:!0},bottomRight:{hour:9,minute:0,visible:!0}}}return o.a.createElement("div",{className:"analog-digit"},o.a.createElement(s,{staticClock:!0,config:t.topLeft,size:a}),o.a.createElement(s,{staticClock:!0,config:t.topRight,size:a}),o.a.createElement(s,{staticClock:!0,config:t.middleLeft,size:a}),o.a.createElement(s,{staticClock:!0,config:t.middleRight,size:a}),o.a.createElement(s,{staticClock:!0,config:t.bottomLeft,size:a}),o.a.createElement(s,{staticClock:!0,config:t.bottomRight,size:a}))};function m(e,t){var i=Object(n.useState)((function(){try{var i=window.localStorage.getItem(e);return i?JSON.parse(i):t}catch(n){return console.log(n),t}})),o=Object(l.a)(i,2),a=o[0],r=o[1];return[a,function(t){try{var i=t instanceof Function?t(a):t;r(i),window.localStorage.setItem(e,JSON.stringify(i))}catch(n){console.log(n)}}]}var d=i(2),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{when:!0,children:null},t=e.when,i=e.children;return t?t&&i:null};b.propTypes={when:i.n(d).a.bool};var h=b,v=(i(25),function(e){var t=e.onClick,i=e.label,n=void 0===i?"":i,a=e.checked,r=void 0!==a&&a;return o.a.createElement("div",{className:"toggleContainer"},o.a.createElement("p",null,n),o.a.createElement("label",{className:"switch"},o.a.createElement("input",{type:"checkbox",checked:r,onChange:t}),o.a.createElement("span",{className:"slider round"})))}),f=(i(26),function(e){var t=e.onClick,i=e.size,n=void 0===i?"size":i,a=e.selected,r=void 0===a?"":a;return o.a.createElement("li",{id:n,onClick:function(){return t(n)}},o.a.createElement("input",{type:"radio",name:"clocksize",value:n,checked:r===n}),o.a.createElement("label",{htmlFor:n},n),o.a.createElement("div",{className:"check"},o.a.createElement("div",{className:"inside"})))}),g=(i(27),function(e){var t=e.children;return o.a.createElement("div",{className:"container"},o.a.createElement("ul",null,t))}),p=i(8);i(28);var E=function(){var e=Object(c.b)().enqueueSnackbar,t=Object(n.useState)(new Date),i=Object(l.a)(t,2),a=i[0],r=i[1],s=Object(n.useState)(0),d=Object(l.a)(s,2),b=d[0],E=d[1],k=Object(n.useState)(0),w=Object(l.a)(k,2),N=w[0],R=w[1],L=Object(n.useState)(0),j=Object(l.a)(L,2),S=j[0],C=j[1],O=Object(n.useState)(0),z=Object(l.a)(O,2),y=z[0],x=z[1],W=Object(n.useState)(0),A=Object(l.a)(W,2),B=A[0],D=A[1],I=Object(n.useState)(0),J=Object(l.a)(I,2),H=J[0],F=J[1],P=Object(n.useState)(!1),T=Object(l.a)(P,2),U=T[0],M=T[1],q=m("is24Hr",!1),Y=Object(l.a)(q,2),$=Y[0],_=Y[1],G=m("showSeconds",!1),K=Object(l.a)(G,2),Q=K[0],V=K[1],X=m("showDivider",!0),Z=Object(l.a)(X,2),ee=Z[0],te=Z[1],ie=m("clockSize","small"),ne=Object(l.a)(ie,2),oe=ne[0],ae=ne[1];Object(n.useEffect)((function(){var e=setInterval((function(){return r(new Date)}),1e3);return function(){clearInterval(e)}})),Object(n.useEffect)((function(){var e=($||a.getHours()<=12?a.getHours():a.getHours()%12).toString().padStart(2,"0"),t=a.getMinutes().toString().padStart(2,0),i=a.getSeconds().toString().padStart(2,0);E(Number(e[0])),R(Number(e[1])),C(Number(t[0])),x(Number(t[1])),D(Number(i[0])),F(Number(i[1]))}),[a,$]);var re=o.a.createElement("div",{className:"overlay"},o.a.createElement("div",{className:"optionsContainer",onClick:function(e){return e.stopPropagation()}},o.a.createElement("h2",null,"Clocktime"),o.a.createElement("div",{className:"options"},o.a.createElement("h3",null,"Options"),o.a.createElement(v,{label:"Seconds",checked:Q,onClick:function(){return V(!Q)}}),o.a.createElement(v,{label:"24 hours",checked:$,onClick:function(){return _(!$)}}),o.a.createElement(v,{label:"Divider",checked:ee,onClick:function(){return te(!ee)}}),o.a.createElement("p",null,"Clock size"),o.a.createElement(g,null,o.a.createElement(f,{size:"tiny",name:"clocksize",onClick:function(e){return ae(e)},selected:oe}),o.a.createElement(f,{size:"small",name:"clocksize",onClick:function(e){return ae(e)},selected:oe}),o.a.createElement(f,{size:"regular",name:"clocksize",onClick:function(e){return ae(e)},selected:oe}),o.a.createElement(f,{size:"large",name:"clocksize",onClick:function(e){return ae(e)},selected:oe})),o.a.createElement("h3",null,"Background"),o.a.createElement("p",null,"Coming soon...")),o.a.createElement("button",{className:"closeButton",onClick:function(){return function(){M(!1);e("Your preferences are now saved between browser reloads!",{variant:"info"})}()}},"Close")));return o.a.createElement(o.a.Fragment,null,o.a.createElement(h,{when:U},re),o.a.createElement("div",{className:"app"},o.a.createElement("div",{className:"time"},o.a.createElement(u,{number:b,size:oe}),o.a.createElement(u,{number:N,size:oe})),o.a.createElement(h,{when:ee},o.a.createElement("div",{className:"divider"},":")),o.a.createElement("div",{className:"time"},o.a.createElement(u,{number:S,size:oe}),o.a.createElement(u,{number:y,size:oe})),o.a.createElement(h,{when:Q},o.a.createElement(h,{when:ee},o.a.createElement("div",{className:"divider"},":")),o.a.createElement("div",{className:"time"},o.a.createElement(u,{number:B,size:oe}),o.a.createElement(u,{number:H,size:oe}))),o.a.createElement("span",null,o.a.createElement("span",{className:"optionsBtn",onClick:function(){return M(!0)}},"options")," ","| ","".concat(p.name," (").concat(p.version,")"))))},k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var i=e.installing;null!=i&&(i.onstatechange=function(){"installed"===i.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(c.a,{maxSnack:3},o.a.createElement(E,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/clocktime",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/clocktime","/service-worker.js");k?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(i){var n=i.headers.get("content-type");404===i.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):w(t,e)}))}}()}],[[13,1,2]]]);
//# sourceMappingURL=main.663a1217.chunk.js.map