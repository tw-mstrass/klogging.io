"use strict";(self.webpackChunkklogging=self.webpackChunkklogging||[]).push([[353],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return g}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(t),g=i,u=c["".concat(s,".").concat(g)]||c[g]||d[g]||o;return t?a.createElement(u,r(r({ref:n},m),{},{components:t})):a.createElement(u,r({ref:n},m))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},6836:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return c}});var a=t(7462),i=t(3366),o=(t(7294),t(3905)),r=["components"],l={sidebar_position:1},s="Configuration DSL",p={unversionedId:"configuration/dsl",id:"configuration/dsl",isDocsHomePage:!1,title:"Configuration DSL",description:"Klogging has a configuration DSL that makes it easy to get started. Put the configuration",source:"@site/docs/configuration/dsl.md",sourceDirName:"configuration",slug:"/configuration/dsl",permalink:"/docs/configuration/dsl",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Get started",permalink:"/docs/get-started"},next:{title:"Configuration with JSON",permalink:"/docs/configuration/json"}},m=[{value:"A simple example",id:"a-simple-example",children:[]},{value:"A more complex example",id:"a-more-complex-example",children:[]},{value:"DSL reference",id:"dsl-reference",children:[{value:"<code>loggingConfiguration</code>",id:"loggingconfiguration",children:[]},{value:"<code>kloggingMinLogLevel</code>",id:"kloggingminloglevel",children:[]},{value:"<code>sink</code>",id:"sink",children:[]},{value:"<code>logging</code>",id:"logging",children:[]},{value:"<code>fromLoggerBase</code> and <code>exactLogger</code>",id:"fromloggerbase-and-exactlogger",children:[]},{value:"<code>fromMinlevel</code> and <code>atLevel</code>",id:"fromminlevel-and-atlevel",children:[]},{value:"<code>toSink</code>",id:"tosink",children:[]}]}],d={toc:m};function c(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuration-dsl"},"Configuration DSL"),(0,o.kt)("p",null,"Klogging has a configuration DSL that makes it easy to get started. Put the configuration\nto run as early as possible in your program."),(0,o.kt)("h2",{id:"a-simple-example"},"A simple example"),(0,o.kt)("p",null,"Here is a simple example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'loggingConfiguration {\n    sink("stdout", RENDER_SIMPLE, STDOUT)\n    sink("seq", seq("http://localhost:5341"))\n    logging {\n        fromLoggerBase("com.example")\n        fromMinLevel(Level.INFO) {\n            toSink("stdout")\n        }\n    }\n}\n')),(0,o.kt)("p",null,"This configuration:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"First declares a ",(0,o.kt)("a",{parentName:"p",href:"../concepts/sinks"},"sink")," called ",(0,o.kt)("inlineCode",{parentName:"p"},"stdout")," that ",(0,o.kt)("a",{parentName:"p",href:"../concepts/rendering"},"renders")," each\n",(0,o.kt)("a",{parentName:"p",href:"../concepts/log-events"},"log event")," into a ",(0,o.kt)("a",{parentName:"p",href:"built-ins"},"simple string format")," and\n",(0,o.kt)("a",{parentName:"p",href:"../concepts/dispatching"},"dispatches")," it to the standard output stream. Sinks should be\nconfigured first, before they are used.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Next declares a logging configuration that applies to loggers with names starting\nwith ",(0,o.kt)("inlineCode",{parentName:"p"},"com.example"),". In this configuration, all log events at ",(0,o.kt)("a",{parentName:"p",href:"../concepts/levels"},"severity level"),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"INFO")," or greater are ",(0,o.kt)("a",{parentName:"p",href:"../concepts/dispatching"},"dispatched")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"stdout")," sink."))),(0,o.kt)("h2",{id:"a-more-complex-example"},"A more complex example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'loggingConfiguration {\n    sink("stdout", RENDER_SIMPLE, STDOUT)\n    sink("stderr", RENDER_SIMPLE, STDERR)\n    sink("seq", seq(server = "http://localhost:5341"))\n    sink("auditing") {\n        syslog(config = "syslogConfig") { render(renderAudit) }\n    }\n    logging {\n        fromLoggerBase("com.example")\n        atLevel(Level.INFO) {\n            toSink("stdout")\n            toSink("seq")\n        }\n        fromMinLevel(Level.WARN) {\n            toSink("stderr")\n            toSink("seq")\n        }\n    }\n    logging {\n        exactLogger("com.example.service.FancyService")\n        fromMinLevel(Level.DEBUG) { to Sink("seq") }\n    }\n    logging {\n        fromLoggerBase("audit")\n        toSink("auditing")\n    }\n}\n')),(0,o.kt)("p",null,"This example has four sinks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"stdout")," to the standard output stream;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"stderr")," to the standard error stream;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"seq")," to a local ",(0,o.kt)("a",{parentName:"li",href:"https://datalust.co/seq"},"Seq log aggregator")," server; and"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"auditing")," to a Syslog server.")),(0,o.kt)("p",null,"Three logging configurations, which together mean:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Loggers with names starting with ",(0,o.kt)("inlineCode",{parentName:"p"},"com.example")," dispatch their log events:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"all at level ",(0,o.kt)("inlineCode",{parentName:"li"},"INFO")," or greater to sink ",(0,o.kt)("inlineCode",{parentName:"li"},"seq"),";"),(0,o.kt)("li",{parentName:"ul"},"at level ",(0,o.kt)("inlineCode",{parentName:"li"},"INFO")," also to sink ",(0,o.kt)("inlineCode",{parentName:"li"},"stdout"),"; and"),(0,o.kt)("li",{parentName:"ul"},"any at level ",(0,o.kt)("inlineCode",{parentName:"li"},"WARN")," or greater to sink ",(0,o.kt)("inlineCode",{parentName:"li"},"stderr"),"."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Logger ",(0,o.kt)("inlineCode",{parentName:"p"},"com.example.service.FancyService")," also dispatches log events with level ",(0,o.kt)("inlineCode",{parentName:"p"},"DEBUG")," to\nsink ",(0,o.kt)("inlineCode",{parentName:"p"},"seq"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Loggers with names starting with ",(0,o.kt)("inlineCode",{parentName:"p"},"audit")," dispatch all log events to sink ",(0,o.kt)("inlineCode",{parentName:"p"},"auditing"),"."))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Configuration for ",(0,o.kt)("strong",{parentName:"p"},"syslog")," sinks is not yet available."))),(0,o.kt)("h2",{id:"dsl-reference"},"DSL reference"),(0,o.kt)("h3",{id:"loggingconfiguration"},(0,o.kt)("inlineCode",{parentName:"h3"},"loggingConfiguration")),(0,o.kt)("p",null,"This function creates a configuration for the running program. It makes sense to call this as early as\npossible in program startup. It uses specifications in the supplied lambda."),(0,o.kt)("p",null,"By default, the configuration replaces any existing one:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"loggingConfiguration {\n    // ...\n}\n")),(0,o.kt)("p",null,"A scenario for appending a configuration is where the code defines a custom ",(0,o.kt)("a",{parentName:"p",href:"../concepts/rendering"},"renderer"),"\nor ",(0,o.kt)("a",{parentName:"p",href:"../concepts/dispatching"},"dispatcher"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'import com.example.customRenderer\n\nloggingConfiguration(append = true) {\n    sink("custom", customRenderer, STDOUT)\n}\n')),(0,o.kt)("h3",{id:"kloggingminloglevel"},(0,o.kt)("inlineCode",{parentName:"h3"},"kloggingMinLogLevel")),(0,o.kt)("p",null,"This function sets the minimum level used by the ",(0,o.kt)("a",{parentName:"p",href:"../internals/internal-logger"},"internal logger"),"\nto decide whether to emit log messages."),(0,o.kt)("p",null,"If not specified, the level is that set by the value of ",(0,o.kt)("a",{parentName:"p",href:"../internals/environment-variables"},"environment variable"),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"KLOGGING_MIN_LOG_LEVEL"),", which will override the built-in default value ",(0,o.kt)("inlineCode",{parentName:"p"},"INFO"),"."),(0,o.kt)("h3",{id:"sink"},(0,o.kt)("inlineCode",{parentName:"h3"},"sink")),(0,o.kt)("p",null,"This function configures a named sink with a ",(0,o.kt)("a",{parentName:"p",href:"../concepts/rendering"},"renderer")," and a\n",(0,o.kt)("a",{parentName:"p",href:"../concepts/dispatching"},"dispatcher"),"."),(0,o.kt)("p",null,"This example configures two sinks:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'    sink("stdout", RENDER_SIMPLE, STDOUT)\n    sink("seq", seq("http://localhost:5341"))\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"stdout")," sink renders events with the built-in renderer ",(0,o.kt)("inlineCode",{parentName:"li"},"RENDER_SIMPLE")," and dispatches them\nto the standard output using the built-in ",(0,o.kt)("inlineCode",{parentName:"li"},"STDOUT")," dispatcher."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"seq")," sink uses the built-in ",(0,o.kt)("inlineCode",{parentName:"li"},"seq")," function for rendering events in\n",(0,o.kt)("a",{parentName:"li",href:"https://docs.datalust.co/docs/posting-raw-events#compact-json-format"},"CLEF")," compact JSON format and\ndispatching them to a ",(0,o.kt)("a",{parentName:"li",href:"https://datalust.co/seq"},"Seq server")," running locally.")),(0,o.kt)("p",null,"Sinks must be declared before they are referenced in ",(0,o.kt)("a",{parentName:"p",href:"#tosink"},(0,o.kt)("inlineCode",{parentName:"a"},"toSink"))," functions."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"sink")," function is not complete and will be enhanced in the future."))),(0,o.kt)("h3",{id:"logging"},(0,o.kt)("inlineCode",{parentName:"h3"},"logging")),(0,o.kt)("p",null,"This function configures logging from specified loggers at specified levels to specified\nsinks. Your configuration must include at least one ",(0,o.kt)("inlineCode",{parentName:"p"},"logging")," function for Klogging to\nemit any logs."),(0,o.kt)("p",null,"The following sections explain details."),(0,o.kt)("h3",{id:"fromloggerbase-and-exactlogger"},(0,o.kt)("inlineCode",{parentName:"h3"},"fromLoggerBase")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"exactLogger")),(0,o.kt)("p",null,"These functions specify how to match logger names. For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},'fromLoggerBase("com.example")')," matches all loggers with names that start with ",(0,o.kt)("inlineCode",{parentName:"p"},"com.example"),", such\nas ",(0,o.kt)("inlineCode",{parentName:"p"},"com.example.config.ConfigApp"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"com.example.services.BlodgeService")," etc.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},'exactLogger("com.example.services.GlubService")')," matches only the logger called\n",(0,o.kt)("inlineCode",{parentName:"p"},"com.example.services.GlubService"),". No other logger with match."))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"exactLogger")," takes precedence if both are specified in a ",(0,o.kt)("inlineCode",{parentName:"p"},"logging")," section."))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"These functions are optional: if logger names are not specified, all loggers will match.\nThis configuration is the equivalent of the root logger in Log4j or Logback."))),(0,o.kt)("h3",{id:"fromminlevel-and-atlevel"},(0,o.kt)("inlineCode",{parentName:"h3"},"fromMinlevel")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"atLevel")),(0,o.kt)("p",null,"These functions specify the levels at which to dispatch log events. For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"fromMinLevel(Level.INFO)")," will enable all events at ",(0,o.kt)("inlineCode",{parentName:"p"},"INFO")," level and above (i.e. more severe:\n",(0,o.kt)("inlineCode",{parentName:"p"},"WARN"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ERROR")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"FATAL"),") to be dispatched.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"atLevel(Level.WARN)")," enables only events at ",(0,o.kt)("inlineCode",{parentName:"p"},"WARN")," level to be dispatched by matching loggers."))),(0,o.kt)("p",null,"The functions accept a lambda to specify which sinks to dispatch to."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"At least one of these functions must be specified or else Klogging will not emit any\nevents for the specified loggers."))),(0,o.kt)("h3",{id:"tosink"},(0,o.kt)("inlineCode",{parentName:"h3"},"toSink")),(0,o.kt)("p",null,"This function specifies the name of a sink to dispatch events to. It can be called mulitple times for\na level specification. The sink must have been defined previously by name, otherwise a short warning\nis written to the console and the configuration is ignored."),(0,o.kt)("p",null,"An example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'    fromMinLevel(Level.INFO) {\n        toSink("console")\n        toSink("seq")\n    }\n')),(0,o.kt)("p",null,"During dispatching, an event is never dispatched to a sink more than once. Given this configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'    logging {\n        fromLoggerBase("com.example")\n        fromMinLevel(Level.INFO) {\n            toSink("stdout")\n            toSink("seq")\n        }\n        fromMinLevel(Level.WARN) {\n            toSink("stderr")\n            toSink("seq")\n        }\n    }\n')),(0,o.kt)("p",null,"An event from logger ",(0,o.kt)("inlineCode",{parentName:"p"},"com.example.nurdling.NurdleController")," at level ",(0,o.kt)("inlineCode",{parentName:"p"},"WARN")," is dispatched to ",(0,o.kt)("inlineCode",{parentName:"p"},"seq")," only once.\nThere is no need to disable additivity as in Log4J and Logback."))}c.isMDXComponent=!0}}]);