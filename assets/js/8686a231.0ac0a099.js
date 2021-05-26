(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{187:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(8),a=(t(0),t(270)),i={id:"config_store",title:"Config Store API"},c={unversionedId:"tutorials/structured_config/config_store",id:"tutorials/structured_config/config_store",isDocsHomePage:!1,title:"Config Store API",description:"ConfigStore is a singleton storing configs in memory.",source:"@site/docs/tutorials/structured_config/10_config_store.md",slug:"/tutorials/structured_config/config_store",permalink:"/docs/next/tutorials/structured_config/config_store",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/tutorials/structured_config/10_config_store.md",version:"current",lastUpdatedBy:"Syed Tousif Ahmed",lastUpdatedAt:1622048686,formattedLastUpdatedAt:"5/26/2021",sidebar:"docs",previous:{title:"Structured Config schema",permalink:"/docs/next/tutorials/structured_config/schema"},next:{title:"Extending Configs",permalink:"/docs/next/patterns/extending_configs"}},s=[{value:"API",id:"api",children:[]},{value:"Example node values",id:"example-node-values",children:[]}],p={toc:s};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"ConfigStore")," is a singleton storing configs in memory.\nThe primary API for interacting with the ",Object(a.b)("inlineCode",{parentName:"p"},"ConfigStore")," is the store method described below."),Object(a.b)("h3",{id:"api"},"API"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},'class ConfigStore(metaclass=Singleton):\n    def store(\n        self,\n        name: str,\n        node: Any,\n        group: Optional[str] = None,\n        package: Optional[str] = "_group_",\n        provider: Optional[str] = None,\n    ) -> None:\n        """\n        Stores a config node into the repository\n        :param name: config name\n        :param node: config node, can be DictConfig, ListConfig,\n            Structured configs and even dict and list\n        :param group: config group, subgroup separator is \'/\',\n            for example hydra/launcher\n        :param package: Config node parent hierarchy.\n            Child separator is \'.\', for example foo.bar.baz\n        :param provider: the name of the module/app providing this config.\n            Helps debugging.\n        """\n    ...\n')),Object(a.b)("h3",{id:"example-node-values"},"Example node values"),Object(a.b)("p",null,"A few examples of supported node values parameters:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},'@dataclass\nclass MySQLConfig:\n    host: str = "localhost"\n    port: int = 3306\n\n# Using the type\ncs.store(name="config1", node=MySQLConfig)\n# Using an instance, overriding some default values\ncs.store(name="config2", node=MySQLConfig(host="test.db", port=3307))\n# Using a dictionary, forfeiting runtime type safety\ncs.store(name="config3", node={"host": "localhost", "port": 3308})\n')))}u.isMDXComponent=!0},270:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return g}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),u=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=u(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(t),f=r,g=l["".concat(i,".").concat(f)]||l[f]||d[f]||a;return t?o.a.createElement(g,c(c({ref:n},p),{},{components:t})):o.a.createElement(g,c({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);