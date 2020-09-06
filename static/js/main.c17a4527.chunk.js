(this.webpackJsonpclocktime=this.webpackJsonpclocktime||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('{"name":"clocktime","author":{"name":"Josiah Ayres","email":"josiahayres@gmail.com","url":"https://www.linkedin.com/in/josiahayres/"},"version":"1.4.3","private":true,"homepage":"https://josiahayres.github.io/clocktime/","dependencies":{"@material-ui/core":"^4.10.2","@testing-library/jest-dom":"^4.2.4","@testing-library/react":"^9.5.0","@testing-library/user-event":"^7.2.1","notistack":"^0.9.17","react":"^16.13.1","react-dom":"^16.13.1","react-scripts":"3.4.1","source-map-explorer":"^2.4.2"},"scripts":{"analyze":"source-map-explorer \'build/static/js/*.js\'","start":"react-scripts start","build":"react-scripts build && npm run styleguide:build","test":"react-scripts test","eject":"react-scripts eject","deploy":"gh-pages -d build","styleguide":"styleguidist server","styleguide:build":"styleguidist build"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"devDependencies":{"chalk":"^4.1.0","check-prop-types":"^1.1.2","gh-pages":"^3.1.0","prop-types":"^15.7.2","react-styleguidist":"^11.0.8"}}')},,,function(e,t,i){},function(e,t,i){},,,function(e,t,i){e.exports=i(31)},,,,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),o=i(4),r=i.n(o),l=i(6),c=i(1);var s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.when,i=void 0===t||t,o=e.children,r=void 0===o?null:o;return"boolean"===typeof i&&i?r:a.a.createElement(n.Fragment,null)};i(24);var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.size,i=void 0===t?"regular":t,n=e.config,o=void 0===n?{hour:0,minute:0,visible:!0}:n,r=o.hour,l=o.minute,c=o.visible,s=a.a.createRef(null),u=a.a.createRef(null);a.a.useEffect((function(){if(!isNaN(r)&&!isNaN(l)&&(null===s||void 0===s?void 0:s.current)&&(null===u||void 0===u?void 0:u.current)){var e=30*r,t=6*l;s.current.style.transform="rotate(".concat(e,"deg)"),u.current.style.transform="rotate(".concat(t,"deg)")}}),[s,u,r,l]);var m=c?"wrap":"wrap hidden";return a.a.createElement("div",{className:"clock ".concat(i)},a.a.createElement("div",{className:m},a.a.createElement("span",{ref:s,className:"hour"}),a.a.createElement("span",{ref:u,className:"minute"}),a.a.createElement("span",{className:"dot"})))};i(25);var m=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.number,n=t.size,o=void 0===n?"small":n;switch(i){case 1:e={topLeft:{hour:0,minute:30,visible:!1},topRight:{hour:6,minute:30,visible:!0},middleLeft:{hour:6,minute:15,visible:!1},middleRight:{hour:6,minute:60,visible:!0},bottomLeft:{hour:3,minute:60,visible:!1},bottomRight:{hour:12,minute:60,visible:!0}};break;case 2:e={topLeft:{hour:3,minute:15,visible:!0},topRight:{hour:9,minute:30,visible:!0},middleLeft:{hour:6,minute:15,visible:!0},middleRight:{hour:12,minute:45,visible:!0},bottomLeft:{hour:3,minute:60,visible:!0},bottomRight:{hour:9,minute:45,visible:!0}};break;case 3:e={topLeft:{hour:3,minute:15,visible:!0},topRight:{hour:9,minute:30,visible:!0},middleLeft:{hour:3,minute:15,visible:!0},middleRight:{hour:12,minute:45,visible:!0},bottomLeft:{hour:3,minute:15,visible:!0},bottomRight:{hour:9,minute:0,visible:!0}};break;case 4:e={topLeft:{hour:6,minute:30,visible:!0},topRight:{hour:6,minute:30,visible:!0},middleLeft:{hour:12,minute:15,visible:!0},middleRight:{hour:12,minute:45,visible:!0},bottomLeft:{hour:3,minute:15,visible:!1},bottomRight:{hour:12,minute:60,visible:!0}};break;case 5:e={topLeft:{hour:6,minute:15,visible:!0},topRight:{hour:9,minute:45,visible:!0},middleLeft:{hour:12,minute:15,visible:!0},middleRight:{hour:6,minute:45,visible:!0},bottomLeft:{hour:3,minute:15,visible:!0},bottomRight:{hour:9,minute:0,visible:!0}};break;case 6:e={topLeft:{hour:6,minute:15,visible:!0},topRight:{hour:9,minute:45,visible:!0},middleLeft:{hour:12,minute:30,visible:!0},middleRight:{hour:6,minute:45,visible:!0},bottomLeft:{hour:12,minute:15,visible:!0},bottomRight:{hour:9,minute:0,visible:!0}};break;case 7:e={topLeft:{hour:3,minute:15,visible:!0},topRight:{hour:9,minute:30,visible:!0},middleLeft:{hour:12,minute:30,visible:!1},middleRight:{hour:12,minute:30,visible:!0},bottomLeft:{hour:12,minute:15,visible:!1},bottomRight:{hour:12,minute:60,visible:!0}};break;case 8:e={topLeft:{hour:3,minute:30,visible:!0},topRight:{hour:9,minute:30,visible:!0},middleLeft:{hour:3,minute:30,visible:!0},middleRight:{hour:9,minute:30,visible:!0},bottomLeft:{hour:3,minute:60,visible:!0},bottomRight:{hour:9,minute:0,visible:!0}};break;case 9:e={topLeft:{hour:3,minute:30,visible:!0},topRight:{hour:9,minute:30,visible:!0},middleLeft:{hour:3,minute:0,visible:!0},middleRight:{hour:12,minute:30,visible:!0},bottomLeft:{hour:3,minute:15,visible:!0},bottomRight:{hour:9,minute:0,visible:!0}};break;default:e={topLeft:{hour:3,minute:30,visible:!0},topRight:{hour:9,minute:30,visible:!0},middleLeft:{hour:12,minute:30,visible:!0},middleRight:{hour:12,minute:30,visible:!0},bottomLeft:{hour:12,minute:15,visible:!0},bottomRight:{hour:9,minute:0,visible:!0}}}return a.a.createElement("div",{className:"analog-digit"},a.a.createElement(u,{config:e.topLeft,size:o}),a.a.createElement(u,{config:e.topRight,size:o}),a.a.createElement(u,{config:e.middleLeft,size:o}),a.a.createElement(u,{config:e.middleRight,size:o}),a.a.createElement(u,{config:e.bottomLeft,size:o}),a.a.createElement(u,{config:e.bottomRight,size:o}))},d=(i(26),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.onClick,i=void 0===t?function(e){console.log("Radio component missing onClick")}:t,n=e.value,o=void 0===n?"":n,r=e.selected,l=void 0===r?"":r,c=e.label;return console.log("Radio value: ".concat(o," selected: ").concat(l)),a.a.createElement("li",{id:o,onClick:function(){return i(o)}},a.a.createElement("input",{type:"radio",name:"clocksize",value:o,checked:l===o}),a.a.createElement("label",{htmlFor:o},null!==c&&void 0!==c?c:o),a.a.createElement("div",{className:"check"},a.a.createElement("div",{className:"inside"})))}),h=(i(11),function(e){var t=e.children;return a.a.createElement("div",{className:"radioContainer"},a.a.createElement("ul",null,t))}),v=(i(27),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.onClick,i=e.label,n=void 0===i?"":i,o=e.checked,r=void 0!==o&&o;return a.a.createElement("div",{className:"toggleContainer"},a.a.createElement("p",null,n),a.a.createElement("label",{className:"switch"},a.a.createElement("input",{type:"checkbox",checked:r,onChange:t}),a.a.createElement("span",{className:"slider round"})))}),b=(i(12),i(28),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.onClick,i=void 0===t?function(e){console.log("ColourSelect component missing onClick")}:t,n=e.value,o=void 0===n?"":n,r=e.selected,l=void 0===r?"":r,c=e.hoverText;return a.a.createElement("li",{id:o,onClick:function(){return i(o)},"aria-label":c,className:o},a.a.createElement("input",{type:"radio",name:"backgroundColour",value:o,checked:l===o}),a.a.createElement("div",{className:"check"}))});i(29);var f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.children;return a.a.createElement("div",{className:"colourSelectGroup"},a.a.createElement("ul",null,t))},g=new URL(window.location.href);function p(e,t){var i=Object(n.useState)((function(){try{if(g.searchParams.has(e))return JSON.parse(g.searchParams.get(e));var i=window.localStorage.getItem(e);return i?JSON.parse(i):t}catch(n){return console.log(n),t}})),a=Object(c.a)(i,2),o=a[0],r=a[1];return[o,function(t){try{var i=t instanceof Function?t(o):t;r(i),window.localStorage.setItem(e,JSON.stringify(i)),g.searchParams.set(e,JSON.stringify(i)),window.history.pushState("","Clocktime",g.search.toString())}catch(n){console.log(n)}}]}var k=i(8);var E=function(){var e=Object(l.b)().enqueueSnackbar,t=Object(n.useState)(new Date),i=Object(c.a)(t,2),o=i[0],r=i[1],u=Object(n.useState)(0),g=Object(c.a)(u,2),E=g[0],w=g[1],N=Object(n.useState)(0),R=Object(c.a)(N,2),S=R[0],y=R[1],j=Object(n.useState)(0),C=Object(c.a)(j,2),L=C[0],O=C[1],z=Object(n.useState)(0),x=Object(c.a)(z,2),B=x[0],J=x[1],W=Object(n.useState)(0),A=Object(c.a)(W,2),P=A[0],D=A[1],I=Object(n.useState)(0),T=Object(c.a)(I,2),F=T[0],H=T[1],U=Object(n.useState)(!1),M=Object(c.a)(U,2),q=M[0],G=M[1],Y=p("is24Hr",!1),$=Object(c.a)(Y,2),_=$[0],K=$[1],Q=p("showSeconds",!1),V=Object(c.a)(Q,2),X=V[0],Z=V[1],ee=p("showDivider",!0),te=Object(c.a)(ee,2),ie=te[0],ne=te[1],ae=p("clockSize","small"),oe=Object(c.a)(ae,2),re=oe[0],le=oe[1],ce=p("backgroundOption","animatedBackgroundOne"),se=Object(c.a)(ce,2),ue=se[0],me=se[1];Object(n.useEffect)((function(){var e=setInterval((function(){return r(new Date)}),1e3);return function(){clearInterval(e)}})),Object(n.useEffect)((function(){var e=(_||o.getHours()<=12?o.getHours():o.getHours()%12).toString().padStart(2,"0"),t=o.getMinutes().toString().padStart(2,0),i=o.getSeconds().toString().padStart(2,0);w(Number(e[0])),y(Number(e[1])),O(Number(t[0])),J(Number(t[1])),D(Number(i[0])),H(Number(i[1]))}),[o,_]);var de=a.a.createElement("div",{className:"overlay"},a.a.createElement("div",{className:"optionsContainer",onClick:function(e){return e.stopPropagation()}},a.a.createElement("h2",null,"Clocktime"),a.a.createElement("div",{className:"options"},a.a.createElement("h3",null,"Options"),a.a.createElement(v,{label:"Seconds",checked:X,onClick:function(){return Z(!X)}}),a.a.createElement(v,{label:"24 hours",checked:_,onClick:function(){return K(!_)}}),a.a.createElement(v,{label:"Divider",checked:ie,onClick:function(){return ne(!ie)}}),a.a.createElement("p",null,"Clock size"),a.a.createElement(h,null,a.a.createElement(d,{value:"tiny",name:"clockSize",onClick:le,selected:re}),a.a.createElement(d,{value:"small",name:"clockSize",onClick:le,selected:re}),a.a.createElement(d,{value:"regular",name:"clockSize",onClick:function(e){return le(e)},selected:re}),a.a.createElement(d,{value:"large",name:"clockSize",onClick:function(e){return le(e)},selected:re})),a.a.createElement("h3",null,"Background"),a.a.createElement(f,null,a.a.createElement(b,{value:"animatedBackgroundOne",selected:ue,onClick:function(e){return me(e)}}),a.a.createElement(b,{value:"animatedBackgroundTwo",selected:ue,onClick:function(e){return me(e)}}),a.a.createElement(b,{value:"animatedBackgroundThree",selected:ue,onClick:function(e){return me(e)}})),a.a.createElement("button",{onClick:function(){window.localStorage.clear(),window.history.pushState("","Clocktime",window.location.pathname)}},"Reset to default")),a.a.createElement("button",{className:"closeButton",onClick:function(){return function(){G(!1);e("Your preferences are now saved between browser reloads!",{variant:"info"})}()}},"Close")));return a.a.createElement(a.a.Fragment,null,a.a.createElement(s,{when:q},de),a.a.createElement("div",{className:"app ".concat(ue)},a.a.createElement("div",{className:"time"},a.a.createElement(m,{number:E,size:re}),a.a.createElement(m,{number:S,size:re})),a.a.createElement(s,{when:ie},a.a.createElement("div",{className:"divider"},":")),a.a.createElement("div",{className:"time"},a.a.createElement(m,{number:L,size:re}),a.a.createElement(m,{number:B,size:re})),a.a.createElement(s,{when:X},a.a.createElement(s,{when:ie},a.a.createElement("div",{className:"divider"},":")),a.a.createElement("div",{className:"time"},a.a.createElement(m,{number:P,size:re}),a.a.createElement(m,{number:F,size:re}))),a.a.createElement("span",null,a.a.createElement("span",{className:"optionsBtn",onClick:function(){return G(!0)}},"options")," | ".concat(k.name," (").concat(k.version,")"))))};var w=function(e){return a.a.createElement(l.a,null,a.a.createElement(E,null))},N=(i(30),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function R(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var i=e.installing;null!=i&&(i.onstatechange=function(){"installed"===i.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(w,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/clocktime",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/clocktime","/service-worker.js");N?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(i){var n=i.headers.get("content-type");404===i.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):R(t,e)}))}}()}],[[15,1,2]]]);
//# sourceMappingURL=main.c17a4527.chunk.js.map