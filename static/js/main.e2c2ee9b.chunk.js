(this.webpackJsonpclocktime=this.webpackJsonpclocktime||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('{"name":"clocktime","author":{"name":"Josiah Ayres","email":"josiahayres@gmail.com","url":"https://www.linkedin.com/in/josiahayres/"},"version":"1.4.0","private":true,"homepage":"https://josiahayres.github.io/clocktime/","dependencies":{"@material-ui/core":"^4.10.2","@testing-library/jest-dom":"^4.2.4","@testing-library/react":"^9.5.0","@testing-library/user-event":"^7.2.1","notistack":"^0.9.17","react":"^16.13.1","react-dom":"^16.13.1","react-scripts":"3.4.1","source-map-explorer":"^2.4.2"},"scripts":{"analyze":"source-map-explorer \'build/static/js/*.js\'","start":"react-scripts start","build":"react-scripts build && npm run styleguide:build","test":"react-scripts test","eject":"react-scripts eject","deploy":"gh-pages -d build","styleguide":"styleguidist server","styleguide:build":"styleguidist build"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"devDependencies":{"chalk":"^4.1.0","check-prop-types":"^1.1.2","gh-pages":"^3.1.0","prop-types":"^15.7.2","react-styleguidist":"^11.0.8"}}')},,,,,function(e,t,i){e.exports=i(29)},,,,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var n=i(0),o=i.n(n),a=i(4),r=i.n(a),l=i(6),c=i(1),s=i(2),u=i.n(s);function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.when,i=void 0===t||t,n=e.children,o=void 0===n?null:n;return"boolean"===typeof i&&!!i&&o}m.propTypes={when:u.a.bool.isRequired};var d=m;i(22);var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.size,i=void 0===t?"regular":t,n=e.config,a=void 0===n?{hour:0,minute:0,visible:!0}:n,r=a.hour,l=a.minute,c=a.visible,s=o.a.createRef(null),u=o.a.createRef(null);o.a.useEffect((function(){if(!isNaN(r)&&!isNaN(l)&&(null===s||void 0===s?void 0:s.current)&&(null===u||void 0===u?void 0:u.current)){var e=30*r,t=6*l;s.current.style.transform="rotate(".concat(e,"deg)"),u.current.style.transform="rotate(".concat(t,"deg)")}}),[s,u,r,l]);var m=c?"wrap":"wrap hidden";return o.a.createElement("div",{className:"clock ".concat(i)},o.a.createElement("div",{className:m},o.a.createElement("span",{ref:s,className:"hour"}),o.a.createElement("span",{ref:u,className:"minute"}),o.a.createElement("span",{className:"dot"})))};i(23);var b=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.number,n=t.size,a=void 0===n?"small":n;switch(i){case 1:e={topLeft:{hour:0,minute:30,visible:!1},topRight:{hour:6,minute:30,visible:!0},middleLeft:{hour:6,minute:15,visible:!1},middleRight:{hour:6,minute:60,visible:!0},bottomLeft:{hour:3,minute:60,visible:!1},bottomRight:{hour:12,minute:60,visible:!0}};break;case 2:e={topLeft:{hour:3,minute:15,visible:!0},topRight:{hour:9,minute:30,visible:!0},middleLeft:{hour:6,minute:15,visible:!0},middleRight:{hour:12,minute:45,visible:!0},bottomLeft:{hour:3,minute:60,visible:!0},bottomRight:{hour:9,minute:45,visible:!0}};break;case 3:e={topLeft:{hour:3,minute:15,visible:!0},topRight:{hour:9,minute:30,visible:!0},middleLeft:{hour:3,minute:15,visible:!0},middleRight:{hour:12,minute:45,visible:!0},bottomLeft:{hour:3,minute:15,visible:!0},bottomRight:{hour:9,minute:0,visible:!0}};break;case 4:e={topLeft:{hour:6,minute:30,visible:!0},topRight:{hour:6,minute:30,visible:!0},middleLeft:{hour:12,minute:15,visible:!0},middleRight:{hour:12,minute:45,visible:!0},bottomLeft:{hour:3,minute:15,visible:!1},bottomRight:{hour:12,minute:60,visible:!0}};break;case 5:e={topLeft:{hour:6,minute:15,visible:!0},topRight:{hour:9,minute:45,visible:!0},middleLeft:{hour:12,minute:15,visible:!0},middleRight:{hour:6,minute:45,visible:!0},bottomLeft:{hour:3,minute:15,visible:!0},bottomRight:{hour:9,minute:0,visible:!0}};break;case 6:e={topLeft:{hour:6,minute:15,visible:!0},topRight:{hour:9,minute:45,visible:!0},middleLeft:{hour:12,minute:30,visible:!0},middleRight:{hour:6,minute:45,visible:!0},bottomLeft:{hour:12,minute:15,visible:!0},bottomRight:{hour:9,minute:0,visible:!0}};break;case 7:e={topLeft:{hour:3,minute:15,visible:!0},topRight:{hour:9,minute:30,visible:!0},middleLeft:{hour:12,minute:30,visible:!1},middleRight:{hour:12,minute:30,visible:!0},bottomLeft:{hour:12,minute:15,visible:!1},bottomRight:{hour:12,minute:60,visible:!0}};break;case 8:e={topLeft:{hour:3,minute:30,visible:!0},topRight:{hour:9,minute:30,visible:!0},middleLeft:{hour:3,minute:30,visible:!0},middleRight:{hour:9,minute:30,visible:!0},bottomLeft:{hour:3,minute:60,visible:!0},bottomRight:{hour:9,minute:0,visible:!0}};break;case 9:e={topLeft:{hour:3,minute:30,visible:!0},topRight:{hour:9,minute:30,visible:!0},middleLeft:{hour:3,minute:0,visible:!0},middleRight:{hour:12,minute:30,visible:!0},bottomLeft:{hour:3,minute:15,visible:!0},bottomRight:{hour:9,minute:0,visible:!0}};break;default:e={topLeft:{hour:3,minute:30,visible:!0},topRight:{hour:9,minute:30,visible:!0},middleLeft:{hour:12,minute:30,visible:!0},middleRight:{hour:12,minute:30,visible:!0},bottomLeft:{hour:12,minute:15,visible:!0},bottomRight:{hour:9,minute:0,visible:!0}}}return o.a.createElement("div",{className:"analog-digit"},o.a.createElement(h,{config:e.topLeft,size:a}),o.a.createElement(h,{config:e.topRight,size:a}),o.a.createElement(h,{config:e.middleLeft,size:a}),o.a.createElement(h,{config:e.middleRight,size:a}),o.a.createElement(h,{config:e.bottomLeft,size:a}),o.a.createElement(h,{config:e.bottomRight,size:a}))},v=(i(24),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.onClick,i=void 0===t?function(e){console.log("Radio component missing onClick")}:t,n=e.value,a=void 0===n?"":n,r=e.selected,l=void 0===r?"":r,c=e.label;return console.log("Radio value: ".concat(a," selected: ").concat(l)),o.a.createElement("li",{id:a,onClick:function(){return i(a)}},o.a.createElement("input",{type:"radio",name:"clocksize",value:a,checked:l===a}),o.a.createElement("label",{htmlFor:a},null!==c&&void 0!==c?c:a),o.a.createElement("div",{className:"check"},o.a.createElement("div",{className:"inside"})))}),f=(i(25),function(e){var t=e.children;return o.a.createElement("div",{className:"container"},o.a.createElement("ul",null,t))}),g=(i(26),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.onClick,i=e.label,n=void 0===i?"":i,a=e.checked,r=void 0!==a&&a;return o.a.createElement("div",{className:"toggleContainer"},o.a.createElement("p",null,n),o.a.createElement("label",{className:"switch"},o.a.createElement("input",{type:"checkbox",checked:r,onChange:t}),o.a.createElement("span",{className:"slider round"})))}),p=new URL(window.location.href);function E(e,t){var i=Object(n.useState)((function(){try{if(p.searchParams.has(e))return JSON.parse(p.searchParams.get(e));var i=window.localStorage.getItem(e);return i?JSON.parse(i):t}catch(n){return console.log(n),t}})),o=Object(c.a)(i,2),a=o[0],r=o[1];return[a,function(t){try{var i=t instanceof Function?t(a):t;r(i),window.localStorage.setItem(e,JSON.stringify(i)),p.searchParams.set(e,JSON.stringify(i)),window.history.pushState("","Clocktime",p.search.toString())}catch(n){console.log(n)}}]}var k=i(8);i(27);var w=function(){var e=Object(l.b)().enqueueSnackbar,t=Object(n.useState)(new Date),i=Object(c.a)(t,2),a=i[0],r=i[1],s=Object(n.useState)(0),u=Object(c.a)(s,2),m=u[0],h=u[1],p=Object(n.useState)(0),w=Object(c.a)(p,2),R=w[0],N=w[1],S=Object(n.useState)(0),y=Object(c.a)(S,2),L=y[0],j=y[1],O=Object(n.useState)(0),C=Object(c.a)(O,2),z=C[0],x=C[1],J=Object(n.useState)(0),W=Object(c.a)(J,2),A=W[0],P=W[1],B=Object(n.useState)(0),D=Object(c.a)(B,2),I=D[0],H=D[1],U=Object(n.useState)(!1),F=Object(c.a)(U,2),T=F[0],q=F[1],M=E("is24Hr",!1),Y=Object(c.a)(M,2),$=Y[0],_=Y[1],G=E("showSeconds",!1),K=Object(c.a)(G,2),Q=K[0],V=K[1],X=E("showDivider",!0),Z=Object(c.a)(X,2),ee=Z[0],te=Z[1],ie=E("clockSize","small"),ne=Object(c.a)(ie,2),oe=ne[0],ae=ne[1];Object(n.useEffect)((function(){var e=setInterval((function(){return r(new Date)}),1e3);return function(){clearInterval(e)}})),Object(n.useEffect)((function(){var e=($||a.getHours()<=12?a.getHours():a.getHours()%12).toString().padStart(2,"0"),t=a.getMinutes().toString().padStart(2,0),i=a.getSeconds().toString().padStart(2,0);h(Number(e[0])),N(Number(e[1])),j(Number(t[0])),x(Number(t[1])),P(Number(i[0])),H(Number(i[1]))}),[a,$]);var re=o.a.createElement("div",{className:"overlay"},o.a.createElement("div",{className:"optionsContainer",onClick:function(e){return e.stopPropagation()}},o.a.createElement("h2",null,"Clocktime"),o.a.createElement("div",{className:"options"},o.a.createElement("h3",null,"Options"),o.a.createElement(g,{label:"Seconds",checked:Q,onClick:function(){return V(!Q)}}),o.a.createElement(g,{label:"24 hours",checked:$,onClick:function(){return _(!$)}}),o.a.createElement(g,{label:"Divider",checked:ee,onClick:function(){return te(!ee)}}),o.a.createElement("p",null,"Clock size"),o.a.createElement(f,null,o.a.createElement(v,{value:"tiny",name:"clockSize",onClick:ae,selected:oe}),o.a.createElement(v,{value:"small",name:"clockSize",onClick:ae,selected:oe}),o.a.createElement(v,{value:"regular",name:"clockSize",onClick:function(e){return ae(e)},selected:oe}),o.a.createElement(v,{value:"large",name:"clockSize",onClick:function(e){return ae(e)},selected:oe})),o.a.createElement("h3",null,"Background"),o.a.createElement("p",null,"Coming soon..."),o.a.createElement("button",{onClick:function(){window.localStorage.clear(),window.history.pushState("","Clocktime",window.location.pathname)}},"Reset to default")),o.a.createElement("button",{className:"closeButton",onClick:function(){return function(){q(!1);e("Your preferences are now saved between browser reloads!",{variant:"info"})}()}},"Close")));return o.a.createElement(o.a.Fragment,null,o.a.createElement(d,{when:T},re),o.a.createElement("div",{className:"app"},o.a.createElement("div",{className:"time"},o.a.createElement(b,{number:m,size:oe}),o.a.createElement(b,{number:R,size:oe})),o.a.createElement(d,{when:ee},o.a.createElement("div",{className:"divider"},":")),o.a.createElement("div",{className:"time"},o.a.createElement(b,{number:L,size:oe}),o.a.createElement(b,{number:z,size:oe})),o.a.createElement(d,{when:Q},o.a.createElement(d,{when:ee},o.a.createElement("div",{className:"divider"},":")),o.a.createElement("div",{className:"time"},o.a.createElement(b,{number:A,size:oe}),o.a.createElement(b,{number:I,size:oe}))),o.a.createElement("span",null,o.a.createElement("span",{className:"optionsBtn",onClick:function(){return q(!0)}},"options")," | ".concat(k.name," (").concat(k.version,")"))))};var R=function(e){return o.a.createElement(l.a,null,o.a.createElement(w,null))},N=(i(28),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function S(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var i=e.installing;null!=i&&(i.onstatechange=function(){"installed"===i.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(R,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/clocktime",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/clocktime","/service-worker.js");N?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(i){var n=i.headers.get("content-type");404===i.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):S(t,e)}))}}()}],[[13,1,2]]]);
//# sourceMappingURL=main.e2c2ee9b.chunk.js.map