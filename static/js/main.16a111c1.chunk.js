(this.webpackJsonpclocktime=this.webpackJsonpclocktime||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('{"name":"clocktime","author":{"name":"Josiah Ayres","email":"josiahayres@gmail.com","url":"https://www.linkedin.com/in/josiahayres/"},"version":"1.2.1","private":true,"homepage":"https://josiahayres.github.io/clocktime/","dependencies":{"@material-ui/core":"^4.10.2","@testing-library/jest-dom":"^4.2.4","@testing-library/react":"^9.5.0","@testing-library/user-event":"^7.2.1","notistack":"^0.9.17","react":"^16.13.1","react-dom":"^16.13.1","react-scripts":"3.4.1","source-map-explorer":"^2.4.2"},"scripts":{"analyze":"source-map-explorer \'build/static/js/*.js\'","start":"react-scripts start","build":"react-scripts build && npm run styleguide:build","test":"react-scripts test","eject":"react-scripts eject","predeploy":"npm version minor && npm run build","deploy":"gh-pages -d build","styleguide":"styleguidist server","styleguide:build":"styleguidist build"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"devDependencies":{"chalk":"^4.1.0","check-prop-types":"^1.1.2","gh-pages":"^3.1.0","prop-types":"^15.7.2","react-styleguidist":"^11.0.8"}}')},,,,,function(e,t,i){e.exports=i(29)},,,,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var n=i(0),o=i.n(n),a=i(4),r=i.n(a),l=i(6),c=i(1);i(22);var s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.size,i=void 0===t?"regular":t,n=e.config,a=void 0===n?{hour:0,minute:0,visible:!0}:n,r=a.hour,l=a.minute,c=a.visible,s=o.a.createRef(null),u=o.a.createRef(null);o.a.useEffect((function(){if(!isNaN(r)&&!isNaN(l)&&(null===s||void 0===s?void 0:s.current)&&(null===u||void 0===u?void 0:u.current)){var e=30*r,t=6*l;s.current.style.transform="rotate(".concat(e,"deg)"),u.current.style.transform="rotate(".concat(t,"deg)")}}),[s,u,r,l]);var m=c?"wrap":"wrap hidden";return o.a.createElement("div",{className:"clock ".concat(i)},o.a.createElement("div",{className:m},o.a.createElement("span",{ref:s,className:"hour"}),o.a.createElement("span",{ref:u,className:"minute"}),o.a.createElement("span",{className:"dot"})))};i(23);var u=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.number,n=t.size,a=void 0===n?"small":n;switch(i){case 1:e={topLeft:{hour:0,minute:30,visible:!1},topRight:{hour:6,minute:30,visible:!0},middleLeft:{hour:6,minute:15,visible:!1},middleRight:{hour:6,minute:60,visible:!0},bottomLeft:{hour:3,minute:60,visible:!1},bottomRight:{hour:12,minute:60,visible:!0}};break;case 2:e={topLeft:{hour:3,minute:15,visible:!0},topRight:{hour:9,minute:30,visible:!0},middleLeft:{hour:6,minute:15,visible:!0},middleRight:{hour:12,minute:45,visible:!0},bottomLeft:{hour:3,minute:60,visible:!0},bottomRight:{hour:9,minute:45,visible:!0}};break;case 3:e={topLeft:{hour:3,minute:15,visible:!0},topRight:{hour:9,minute:30,visible:!0},middleLeft:{hour:3,minute:15,visible:!0},middleRight:{hour:12,minute:45,visible:!0},bottomLeft:{hour:3,minute:15,visible:!0},bottomRight:{hour:9,minute:0,visible:!0}};break;case 4:e={topLeft:{hour:6,minute:30,visible:!0},topRight:{hour:6,minute:30,visible:!0},middleLeft:{hour:12,minute:15,visible:!0},middleRight:{hour:12,minute:45,visible:!0},bottomLeft:{hour:3,minute:15,visible:!1},bottomRight:{hour:12,minute:60,visible:!0}};break;case 5:e={topLeft:{hour:6,minute:15,visible:!0},topRight:{hour:9,minute:45,visible:!0},middleLeft:{hour:12,minute:15,visible:!0},middleRight:{hour:6,minute:45,visible:!0},bottomLeft:{hour:3,minute:15,visible:!0},bottomRight:{hour:9,minute:0,visible:!0}};break;case 6:e={topLeft:{hour:6,minute:15,visible:!0},topRight:{hour:9,minute:45,visible:!0},middleLeft:{hour:12,minute:30,visible:!0},middleRight:{hour:6,minute:45,visible:!0},bottomLeft:{hour:12,minute:15,visible:!0},bottomRight:{hour:9,minute:0,visible:!0}};break;case 7:e={topLeft:{hour:3,minute:15,visible:!0},topRight:{hour:9,minute:30,visible:!0},middleLeft:{hour:12,minute:30,visible:!1},middleRight:{hour:12,minute:30,visible:!0},bottomLeft:{hour:12,minute:15,visible:!1},bottomRight:{hour:12,minute:60,visible:!0}};break;case 8:e={topLeft:{hour:3,minute:30,visible:!0},topRight:{hour:9,minute:30,visible:!0},middleLeft:{hour:3,minute:30,visible:!0},middleRight:{hour:9,minute:30,visible:!0},bottomLeft:{hour:3,minute:60,visible:!0},bottomRight:{hour:9,minute:0,visible:!0}};break;case 9:e={topLeft:{hour:3,minute:30,visible:!0},topRight:{hour:9,minute:30,visible:!0},middleLeft:{hour:3,minute:0,visible:!0},middleRight:{hour:12,minute:30,visible:!0},bottomLeft:{hour:3,minute:15,visible:!0},bottomRight:{hour:9,minute:0,visible:!0}};break;default:e={topLeft:{hour:3,minute:30,visible:!0},topRight:{hour:9,minute:30,visible:!0},middleLeft:{hour:12,minute:30,visible:!0},middleRight:{hour:12,minute:30,visible:!0},bottomLeft:{hour:12,minute:15,visible:!0},bottomRight:{hour:9,minute:0,visible:!0}}}return o.a.createElement("div",{className:"analog-digit"},o.a.createElement(s,{config:e.topLeft,size:a}),o.a.createElement(s,{config:e.topRight,size:a}),o.a.createElement(s,{config:e.middleLeft,size:a}),o.a.createElement(s,{config:e.middleRight,size:a}),o.a.createElement(s,{config:e.bottomLeft,size:a}),o.a.createElement(s,{config:e.bottomRight,size:a}))};function m(e,t){var i=Object(n.useState)((function(){try{var i=window.localStorage.getItem(e);return i?JSON.parse(i):t}catch(n){return console.log(n),t}})),o=Object(c.a)(i,2),a=o[0],r=o[1];return[a,function(t){try{var i=t instanceof Function?t(a):t;r(i),window.localStorage.setItem(e,JSON.stringify(i))}catch(n){console.log(n)}}]}var d=i(2),h=i.n(d);function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.when,i=void 0===t||t,n=e.children,o=void 0===n?null:n;return"boolean"===typeof i&&!!i&&o}b.propTypes={when:h.a.bool.isRequired};var v=b,f=(i(24),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.onClick,i=e.label,n=void 0===i?"":i,a=e.checked,r=void 0!==a&&a;return o.a.createElement("div",{className:"toggleContainer"},o.a.createElement("p",null,n),o.a.createElement("label",{className:"switch"},o.a.createElement("input",{type:"checkbox",checked:r,onChange:t}),o.a.createElement("span",{className:"slider round"})))}),g=(i(25),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.onClick,i=e.size,n=void 0===i?"size":i,a=e.selected,r=void 0===a?"":a;return o.a.createElement("li",{id:n,onClick:function(){return t(n)}},o.a.createElement("input",{type:"radio",name:"clocksize",value:n,checked:r===n}),o.a.createElement("label",{htmlFor:n},n),o.a.createElement("div",{className:"check"},o.a.createElement("div",{className:"inside"})))}),p=(i(26),function(e){var t=e.children;return o.a.createElement("div",{className:"container"},o.a.createElement("ul",null,t))}),E=i(8);i(27);var k=function(){var e=Object(l.b)().enqueueSnackbar,t=Object(n.useState)(new Date),i=Object(c.a)(t,2),a=i[0],r=i[1],s=Object(n.useState)(0),d=Object(c.a)(s,2),h=d[0],b=d[1],k=Object(n.useState)(0),w=Object(c.a)(k,2),R=w[0],N=w[1],y=Object(n.useState)(0),j=Object(c.a)(y,2),L=j[0],O=j[1],S=Object(n.useState)(0),z=Object(c.a)(S,2),C=z[0],x=z[1],W=Object(n.useState)(0),A=Object(c.a)(W,2),J=A[0],B=A[1],D=Object(n.useState)(0),I=Object(c.a)(D,2),H=I[0],F=I[1],P=Object(n.useState)(!1),T=Object(c.a)(P,2),U=T[0],q=T[1],M=m("is24Hr",!1),Y=Object(c.a)(M,2),$=Y[0],_=Y[1],G=m("showSeconds",!1),K=Object(c.a)(G,2),Q=K[0],V=K[1],X=m("showDivider",!0),Z=Object(c.a)(X,2),ee=Z[0],te=Z[1],ie=m("clockSize","small"),ne=Object(c.a)(ie,2),oe=ne[0],ae=ne[1];Object(n.useEffect)((function(){var e=setInterval((function(){return r(new Date)}),1e3);return function(){clearInterval(e)}})),Object(n.useEffect)((function(){var e=($||a.getHours()<=12?a.getHours():a.getHours()%12).toString().padStart(2,"0"),t=a.getMinutes().toString().padStart(2,0),i=a.getSeconds().toString().padStart(2,0);b(Number(e[0])),N(Number(e[1])),O(Number(t[0])),x(Number(t[1])),B(Number(i[0])),F(Number(i[1]))}),[a,$]);var re=o.a.createElement("div",{className:"overlay"},o.a.createElement("div",{className:"optionsContainer",onClick:function(e){return e.stopPropagation()}},o.a.createElement("h2",null,"Clocktime"),o.a.createElement("div",{className:"options"},o.a.createElement("h3",null,"Options"),o.a.createElement(f,{label:"Seconds",checked:Q,onClick:function(){return V(!Q)}}),o.a.createElement(f,{label:"24 hours",checked:$,onClick:function(){return _(!$)}}),o.a.createElement(f,{label:"Divider",checked:ee,onClick:function(){return te(!ee)}}),o.a.createElement("p",null,"Clock size"),o.a.createElement(p,null,o.a.createElement(g,{size:"tiny",name:"clocksize",onClick:function(e){return ae(e)},selected:oe}),o.a.createElement(g,{size:"small",name:"clocksize",onClick:function(e){return ae(e)},selected:oe}),o.a.createElement(g,{size:"regular",name:"clocksize",onClick:function(e){return ae(e)},selected:oe}),o.a.createElement(g,{size:"large",name:"clocksize",onClick:function(e){return ae(e)},selected:oe})),o.a.createElement("h3",null,"Background"),o.a.createElement("p",null,"Coming soon...")),o.a.createElement("button",{className:"closeButton",onClick:function(){return function(){q(!1);e("Your preferences are now saved between browser reloads!",{variant:"info"})}()}},"Close")));return o.a.createElement(o.a.Fragment,null,o.a.createElement(v,{when:U},re),o.a.createElement("div",{className:"app"},o.a.createElement("div",{className:"time"},o.a.createElement(u,{number:h,size:oe}),o.a.createElement(u,{number:R,size:oe})),o.a.createElement(v,{when:ee},o.a.createElement("div",{className:"divider"},":")),o.a.createElement("div",{className:"time"},o.a.createElement(u,{number:L,size:oe}),o.a.createElement(u,{number:C,size:oe})),o.a.createElement(v,{when:Q},o.a.createElement(v,{when:ee},o.a.createElement("div",{className:"divider"},":")),o.a.createElement("div",{className:"time"},o.a.createElement(u,{number:J,size:oe}),o.a.createElement(u,{number:H,size:oe}))),o.a.createElement("span",null,o.a.createElement("span",{className:"optionsBtn",onClick:function(){return q(!0)}},"options")," | ".concat(E.name," (").concat(E.version,")"))))};var w=function(e){return o.a.createElement(l.a,null,o.a.createElement(k,null))},R=(i(28),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function N(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var i=e.installing;null!=i&&(i.onstatechange=function(){"installed"===i.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(w,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/clocktime",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/clocktime","/service-worker.js");R?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(i){var n=i.headers.get("content-type");404===i.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):N(t,e)}))}}()}],[[13,1,2]]]);
//# sourceMappingURL=main.16a111c1.chunk.js.map