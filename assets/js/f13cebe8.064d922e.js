"use strict";(self.webpackChunkklogging=self.webpackChunkklogging||[]).push([[409],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),m=p(n),g=a,d=m["".concat(c,".").concat(g)]||m[g]||s[g]||o;return n?r.createElement(d,i(i({ref:e},u),{},{components:n})):r.createElement(d,i({ref:e},u))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3564:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:1},c="Log Events",p={unversionedId:"concepts/log-events",id:"concepts/log-events",isDocsHomePage:!1,title:"Log Events",description:"A log event (modelled by",source:"@site/docs/concepts/log-events.md",sourceDirName:"concepts",slug:"/concepts/log-events",permalink:"/docs/concepts/log-events",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Built-in configurations",permalink:"/docs/configuration/built-ins"},next:{title:"Dispatching",permalink:"/docs/concepts/dispatching"}},u=[],s={toc:u};function m(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"log-events"},"Log Events"),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"log event")," (modelled by\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/klogging/klogging/blob/main/src/commonMain/kotlin/io/klogging/events/LogEvent.kt"},(0,o.kt)("inlineCode",{parentName:"a"},"LogEvent")),")\ncontains information at a point in time and the state of a running system."),(0,o.kt)("p",null,"Important properties of an event are:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Timestamp"),(0,o.kt)("td",{parentName:"tr",align:null},"The point in time when the event occurred, with microsecond or finer resolution.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Logger"),(0,o.kt)("td",{parentName:"tr",align:null},"Name of the logger that sent the event (e.g. a fully-qualified class name).")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Level"),(0,o.kt)("td",{parentName:"tr",align:null},"An indication of the severity of the event.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Host"),(0,o.kt)("td",{parentName:"tr",align:null},"Name of the host where the event originated: important in distributed systems.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Context"),(0,o.kt)("td",{parentName:"tr",align:null},"Context where the event occurred, typically thread / coroutine name.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Message"),(0,o.kt)("td",{parentName:"tr",align:null},"A string message summarising what happened, that might be constructed from a template.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Stack trace"),(0,o.kt)("td",{parentName:"tr",align:null},"Details about an exception or error, if one is associate with the event.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Items"),(0,o.kt)("td",{parentName:"tr",align:null},"A map of useful information current at the time of the event.")))))}m.isMDXComponent=!0}}]);