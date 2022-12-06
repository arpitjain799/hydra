"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1055],{3905:function(e,n,a){a.r(n),a.d(n,{MDXContext:function(){return d},MDXProvider:function(){return c},mdx:function(){return g},useMDXComponents:function(){return p},withMDXComponents:function(){return s}});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},i.apply(this,arguments)}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function m(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=t.createContext({}),s=function(e){return function(n){var a=p(n.components);return t.createElement(e,i({},n,{components:a}))}},p=function(e){var n=t.useContext(d),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},c=function(e){var n=p(e.components);return t.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),s=p(a),c=r,f=s["".concat(o,".").concat(c)]||s[c]||u[c]||i;return a?t.createElement(f,l(l({ref:n},d),{},{components:a})):t.createElement(f,l({ref:n},d))}));function g(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=f;var l={};for(var m in n)hasOwnProperty.call(n,m)&&(l[m]=n[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}f.displayName="MDXCreateElement"},8663:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return l},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return s},default:function(){return c}});var t=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],l={id:"terminology",title:"Terminology"},m=void 0,d={unversionedId:"advanced/terminology",id:"advanced/terminology",title:"Terminology",description:"This page describes some common concepts in Hydra, most of which are covered in greater details throughout the documentation.",source:"@site/docs/advanced/terminology.md",sourceDirName:"advanced",slug:"/advanced/terminology",permalink:"/docs/advanced/terminology",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/docs/advanced/terminology.md",tags:[],version:"current",lastUpdatedBy:"Jasha10",lastUpdatedAt:1670319942,formattedLastUpdatedAt:"12/6/2022",frontMatter:{id:"terminology",title:"Terminology"},sidebar:"docs",previous:{title:"Optuna Sweeper plugin",permalink:"/docs/plugins/optuna_sweeper"},next:{title:"Hydra's command line flags",permalink:"/docs/advanced/hydra-command-line-flags"}},s=[{value:"Input Configs",id:"input-configs",children:[{value:"Config files",id:"config-files",children:[],level:3},{value:"Structured Config",id:"structured-config",children:[],level:3}],level:2},{value:"Other configs",id:"other-configs",children:[],level:2},{value:"Overrides",id:"overrides",children:[],level:2},{value:"Defaults List",id:"defaults-list",children:[],level:2},{value:"Config Group",id:"config-group",children:[],level:2},{value:"Config Group Option",id:"config-group-option",children:[],level:2},{value:"Package",id:"package",children:[],level:2},{value:"Example of Core Concepts",id:"example-of-core-concepts",children:[],level:2},{value:"Config Search Path",id:"config-search-path",children:[],level:2},{value:"Plugins",id:"plugins",children:[],level:2}],p={toc:s};function c(e){var n=e.components,a=(0,r.Z)(e,o);return(0,i.mdx)("wrapper",(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"This page describes some common concepts in Hydra, most of which are covered in greater details throughout the documentation.\nExamples of many of the following concepts are in the ",(0,i.mdx)("a",{parentName:"p",href:"#example-of-core-concepts"},"Examples section"),"."),(0,i.mdx)("h2",{id:"input-configs"},"Input Configs"),(0,i.mdx)("p",null,"Input configs are building blocks used to construct the ",(0,i.mdx)("a",{parentName:"p",href:"#output-config"},"Output Config")," consumed by the application.\nThey can be grouped by placing them in ",(0,i.mdx)("a",{parentName:"p",href:"#config-group"},"Config Groups"),"."),(0,i.mdx)("h3",{id:"config-files"},"Config files"),(0,i.mdx)("p",null,"Config files are form of input configs in ",(0,i.mdx)("a",{parentName:"p",href:"https://yaml.org/"},"YAML")," format. They can exist in the file system or\nin a Python module."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Example config file',title:'"Example',config:!0,file:!0},"user:\n  name: James Bond\n  age: 7\n")),(0,i.mdx)("h3",{id:"structured-config"},"Structured Config"),(0,i.mdx)("p",null,"This term has two common meanings:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"A class decorated with ",(0,i.mdx)("a",{parentName:"li",href:"https://docs.python.org/3/library/dataclasses.html"},"@dataclass")," or ",(0,i.mdx)("a",{parentName:"li",href:"https://www.attrs.org/en/stable/"},"@attr.s"),", or an instance of such a class which is intended to be used as config.  "),(0,i.mdx)("li",{parentName:"ol"},"A Config object initialized from a class or object as defined in 1. Structured Configs provide additional type information that enables static and runtime type checking.")),(0,i.mdx)("p",null,"The two primary patterns for using Structured Configs are:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"As an ",(0,i.mdx)("a",{parentName:"li",href:"#input-configs"},"Input Config"),"."),(0,i.mdx)("li",{parentName:"ul"},"As a schema validating Config Files and command line arguments.")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Example Schema"',title:'"Example','Schema"':!0},"@dataclass\nclass User:\n  name: str\n  age: int\n")),(0,i.mdx)("h2",{id:"other-configs"},"Other configs"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Primary Config"),": The input config named in ",(0,i.mdx)("a",{parentName:"p",href:"/docs/tutorials/basic/your_first_app/config_file"},(0,i.mdx)("strong",{parentName:"a"},"@hydra.main()"))," or in the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/advanced/compose_api"},(0,i.mdx)("strong",{parentName:"a"},"Compose API")),".",(0,i.mdx)("br",{parentName:"p"}),"\n",(0,i.mdx)("strong",{parentName:"p"},"Output Config"),": A config composed from the ",(0,i.mdx)("a",{parentName:"p",href:"#input-configs"},"Input Configs")," and ",(0,i.mdx)("a",{parentName:"p",href:"#overrides"},"Overrides")," by ",(0,i.mdx)("strong",{parentName:"p"},"@hydra.main()"),", or the Compose API."),(0,i.mdx)("h2",{id:"overrides"},"Overrides"),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"/docs/advanced/override_grammar/basic"},"Overrides")," are strings that can be used to manipulate the config composition process.\nThis includes updating, adding and deleting config values and ",(0,i.mdx)("a",{parentName:"p",href:"#defaults-list"},"Defaults List")," options.  "),(0,i.mdx)("p",null,"Overrides can be used in the command line and in the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/advanced/compose_api"},"Compose API"),".",(0,i.mdx)("br",{parentName:"p"}),"\n","In the examples below, ",(0,i.mdx)("inlineCode",{parentName:"p"},"key=value")," is an override:"),(0,i.mdx)("div",{className:"row"},(0,i.mdx)("div",{className:"col col--6"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-shell",metastring:'title="Override in the command line"',title:'"Override',in:!0,the:!0,command:!0,'line"':!0},"$ python my_app.py key=value\n\n"))),(0,i.mdx)("div",{className:"col col--6"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Override used in the Compose API"',title:'"Override',used:!0,in:!0,the:!0,Compose:!0,'API"':!0},'cfg = compose(config_name, \n              overrides=["key=value"])\n')))),(0,i.mdx)("h2",{id:"defaults-list"},"Defaults List"),(0,i.mdx)("p",null,"A list in an ",(0,i.mdx)("a",{parentName:"p",href:"#input-configs"},"Input Config")," that instructs Hydra how compose the config. "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Defaults List in a YAML config"',title:'"Defaults',List:!0,in:!0,a:!0,YAML:!0,'config"':!0},"defaults:\n  - db: mysql      # An overridable defaults list entry\n  - schema/school  # A non-overridable defaults list entry\n")),(0,i.mdx)("h2",{id:"config-group"},"Config Group"),(0,i.mdx)("p",null,"A Config Group is a directory in the ",(0,i.mdx)("a",{parentName:"p",href:"#config-search-path"},"Config Search Path")," that contains ",(0,i.mdx)("a",{parentName:"p",href:"#input-configs"},"Input Configs"),".\nConfig Groups can be nested, and in that case the path elements are separated by a forward slash ('/') regardless of the operating system."),(0,i.mdx)("h2",{id:"config-group-option"},"Config Group Option"),(0,i.mdx)("p",null,"An Input Config in a Config Group. When used in a Defaults List, a Config Group Option can be a single Input Config, or a list of Input Configs from the same Config Group. "),(0,i.mdx)("h2",{id:"package"},"Package"),(0,i.mdx)("p",null,"A Package is the path to node in a config. By default, the Package of a Config Group Option is derived from the Config Group.\n",(0,i.mdx)("em",{parentName:"p"},"e.g:")," Configs in ",(0,i.mdx)("strong",{parentName:"p"},"mi6/agent")," will have the package ",(0,i.mdx)("strong",{parentName:"p"},"mi6.agent")," by default."),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"/docs/advanced/overriding_packages#overriding-the-package-via-the-package-directive"},"Package Directive")," specifies the root ",(0,i.mdx)("a",{parentName:"p",href:"#package"},"Package")," of a ",(0,i.mdx)("a",{parentName:"p",href:"#input-configs"},"Config File"),". It can appear at the top of YAML config file."),(0,i.mdx)("h2",{id:"example-of-core-concepts"},"Example of Core Concepts"),(0,i.mdx)("div",{className:"row"},(0,i.mdx)("div",{className:"col col--4"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"defaults:\n - mi6/agent: james_bond\n\n"))),(0,i.mdx)("div",{className:"col col--4"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="mi6/agent/james_bond.yaml" {1}',title:'"mi6/agent/james_bond.yaml"',"{1}":!0},"# @package bond.james\ncodename: '007'\n\n"))),(0,i.mdx)("div",{className:"col col--4"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Output config" {1,2}',title:'"Output','config"':!0,"{1,2}":!0},"bond:\n  james:\n    codename: '007'\n")))),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#input-configs"},"Input Configs"),": ",(0,i.mdx)("strong",{parentName:"li"},"config.yaml"),", ",(0,i.mdx)("strong",{parentName:"li"},"mi6/agent/james_bond.yaml")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#config-group"},"Config Group"),": mi6/agent"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#config-group-option"},"Config Group Option"),": james_bond"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#package"},"Packages"),": ",(0,i.mdx)("strong",{parentName:"li"},"<empty",">"),", ",(0,i.mdx)("strong",{parentName:"li"},"mi6"),", ",(0,i.mdx)("strong",{parentName:"li"},"mi6.agent"),", ",(0,i.mdx)("strong",{parentName:"li"},"mi6.agent.codename")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#package-directive"},"Package directive"),": ",(0,i.mdx)("strong",{parentName:"li"},"# @package bond.james"),", overriding the default Package for the containing Input Config ")),(0,i.mdx)("h2",{id:"config-search-path"},"Config Search Path"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"/docs/advanced/search_path"},"Config Search Path")," is a list of paths that are searched in order to find configs. It is similar to\nthe Python ",(0,i.mdx)("a",{parentName:"p",href:"https://docs.python.org/3/using/cmdline.html#envvar-PYTHONPATH"},"PYTHONPATH"),"."),(0,i.mdx)("h2",{id:"plugins"},"Plugins"),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"/docs/advanced/plugins/overview"},"Plugins")," extend Hydra's capabilities. Hydra has several plugin types, for example Launcher and Sweeper."))}c.isMDXComponent=!0}}]);