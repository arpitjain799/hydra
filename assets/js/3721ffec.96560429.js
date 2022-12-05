"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6607],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return m},MDXProvider:function(){return c},mdx:function(){return g},useMDXComponents:function(){return p},withMDXComponents:function(){return s}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},l.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=a.createContext({}),s=function(e){return function(n){var t=p(n.components);return a.createElement(e,l({},n,{components:t}))}},p=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(m.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(t),c=r,f=s["".concat(i,".").concat(c)]||s[c]||u[c]||l;return t?a.createElement(f,d(d({ref:n},m),{},{components:t})):a.createElement(f,d({ref:n},m))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=f;var d={};for(var o in n)hasOwnProperty.call(n,o)&&(d[o]=n[o]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var m=2;m<l;m++)i[m]=t[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},83295:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return o},metadata:function(){return m},toc:function(){return s},default:function(){return c}});var a=t(87462),r=t(63366),l=(t(67294),t(3905)),i=["components"],d={id:"defaults_list",title:"The Defaults List"},o=void 0,m={unversionedId:"advanced/defaults_list",id:"version-1.2/advanced/defaults_list",title:"The Defaults List",description:"Introduction",source:"@site/versioned_docs/version-1.2/advanced/defaults_list.md",sourceDirName:"advanced",slug:"/advanced/defaults_list",permalink:"/docs/1.2/advanced/defaults_list",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.2/advanced/defaults_list.md",tags:[],version:"1.2",lastUpdatedBy:"skshetry",lastUpdatedAt:1670274765,formattedLastUpdatedAt:"12/5/2022",frontMatter:{id:"defaults_list",title:"The Defaults List"},sidebar:"docs",previous:{title:"Extended Override syntax",permalink:"/docs/1.2/advanced/override_grammar/extended"},next:{title:"Packages",permalink:"/docs/1.2/advanced/overriding_packages"}},s=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"An example",id:"an-example",children:[],level:2},{value:"Overriding Config Group options",id:"overriding-config-group-options",children:[],level:2},{value:"Composition order",id:"composition-order",children:[],level:2},{value:"Interpolation in the Defaults List",id:"interpolation-in-the-defaults-list",children:[{value:"Restrictions:",id:"restrictions",children:[],level:4}],level:2},{value:"Debugging the Defaults List",id:"debugging-the-defaults-list",children:[],level:2},{value:"Related topics",id:"related-topics",children:[],level:2}],p={toc:s};function c(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.mdx)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("h2",{id:"introduction"},"Introduction"),(0,l.mdx)("div",{className:"admonition admonition-important alert alert--info"},(0,l.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,l.mdx)("h5",{parentName:"div"},(0,l.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,l.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,l.mdx)("div",{parentName:"div",className:"admonition-content"},(0,l.mdx)("p",{parentName:"div"},"Many of the features described in this page are new. Please report any issues."))),(0,l.mdx)("p",null,"The Defaults List is a list in an input config that instructs Hydra how to build the output config.\nEach input config can have a Defaults List as a top level element. The Defaults List itself\nis not a part of output config."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-text",metastring:'title="Defaults List YAML syntax"',title:'"Defaults',List:!0,YAML:!0,'syntax"':!0},"defaults:\n (- CONFIG|GROUP_DEFAULT)*\n\nCONFIG                 : (CONFIG_GROUP/)?CONFIG_NAME(@PACKAGE)?\nGROUP_DEFAULT          : [optional|override]? CONFIG_GROUP(@PACKAGE)?: OPTION\nOPTION                 : CONFIG_NAME|CONFIG_NAMES|null\n")),(0,l.mdx)("p",null,(0,l.mdx)("em",{parentName:"p"},"CONFIG")," : A config to use when creating the output config. e.g. ",(0,l.mdx)("inlineCode",{parentName:"p"},"db/mysql"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"db/mysql@backup"),"."),(0,l.mdx)("p",null,(0,l.mdx)("em",{parentName:"p"},"GROUP_DEFAULT")," : An ",(0,l.mdx)("em",{parentName:"p"},"overridable")," config. e.g. ",(0,l.mdx)("inlineCode",{parentName:"p"},"db: mysql"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"db@backup: mysql"),"."),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("strong",{parentName:"li"},(0,l.mdx)("em",{parentName:"strong"},"override"))," : Overrides the option of a previously defined GROUP_DEFAULT."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("strong",{parentName:"li"},(0,l.mdx)("em",{parentName:"strong"},"optional"))," : By default, an OPTION that do not exist causes an error; optional suppresses the error. "),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("strong",{parentName:"li"},(0,l.mdx)("em",{parentName:"strong"},"null"))," : A place-holder for a future override. If it is not overridden the entry is ignored.")),(0,l.mdx)("p",null,(0,l.mdx)("em",{parentName:"p"},"CONFIG_NAME"),": The name of a config, without the file system extension. e.g. ",(0,l.mdx)("inlineCode",{parentName:"p"},"mysql")," and not ",(0,l.mdx)("inlineCode",{parentName:"p"},"mysql.yaml"),"."),(0,l.mdx)("p",null,(0,l.mdx)("em",{parentName:"p"},"CONFIG_NAMES")," : A list of config names. e.g. ",(0,l.mdx)("inlineCode",{parentName:"p"},"[mysql, sqlite]")),(0,l.mdx)("p",null,(0,l.mdx)("em",{parentName:"p"},"CONFIG_GROUP")," : A path to a set of configs.",(0,l.mdx)("br",{parentName:"p"}),"\n","The path is relative to the containing config.\nIt can be made absolute by prefixing it with a ",(0,l.mdx)("inlineCode",{parentName:"p"},"/"),".",(0,l.mdx)("br",{parentName:"p"}),"\n","The path separator is ",(0,l.mdx)("inlineCode",{parentName:"p"},"/")," regardless of the operating system."),(0,l.mdx)("p",null,(0,l.mdx)("em",{parentName:"p"},"OPTION"),": The currently selected ",(0,l.mdx)("em",{parentName:"p"},"CONFIG_NAME")," or ",(0,l.mdx)("em",{parentName:"p"},"CONFIG_NAMES")," from a ",(0,l.mdx)("em",{parentName:"p"},"CONFIG_GROUP"),". "),(0,l.mdx)("p",null,(0,l.mdx)("em",{parentName:"p"},"PACKAGE")," : Where to place the content of the config within the output config.\nIt is relative to the Package of the containing config by default. See ",(0,l.mdx)("a",{parentName:"p",href:"/docs/1.2/advanced/overriding_packages"},"Packages"),"."),(0,l.mdx)("h2",{id:"an-example"},"An example"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-text",metastring:'title="Config directory structure"',title:'"Config',directory:!0,'structure"':!0},"\u251c\u2500\u2500 server\n\u2502   \u251c\u2500\u2500 db\n\u2502   \u2502   \u251c\u2500\u2500 mysql.yaml\n\u2502   \u2502   \u2514\u2500\u2500 sqlite.yaml\n\u2502   \u2514\u2500\u2500 apache.yaml\n\u2514\u2500\u2500 config.yaml\n")),(0,l.mdx)("p",null,"Input configs:"),(0,l.mdx)("div",{className:"row"},(0,l.mdx)("div",{className:"col col--4"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"defaults:\n  - server/apache\n\ndebug: false\n\n\n\n"))),(0,l.mdx)("div",{className:"col col--4"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="server/apache.yaml"',title:'"server/apache.yaml"'},"defaults:\n  - db: mysql\n\nname: apache\n\n\n\n"))),(0,l.mdx)("div",{className:"col col--4"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="server/db/mysql.yaml"',title:'"server/db/mysql.yaml"'},"name: mysql\n")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="server/db/sqlite.yaml"',title:'"server/db/sqlite.yaml"'},"name: sqlite\n")))),(0,l.mdx)("p",null,"Output config:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ python my_app.py"',title:'"$',python:!0,'my_app.py"':!0},"server:\n  db:\n    name: mysql\n  name: apache\ndebug: false\n")),(0,l.mdx)("h2",{id:"overriding-config-group-options"},"Overriding Config Group options"),(0,l.mdx)("p",null,"A Config Group's option can be overridden using a new ",(0,l.mdx)("em",{parentName:"p"},"GROUP_DEFAULT")," with the ",(0,l.mdx)("strong",{parentName:"p"},(0,l.mdx)("em",{parentName:"strong"},"override"))," keyword.\nIf a Group Default is overridden more than once, the last one, in depth first order, wins."),(0,l.mdx)("p",null,"Extending the previous example:"),(0,l.mdx)("div",{className:"row"},(0,l.mdx)("div",{className:"col col--6"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml" {3}',title:'"config.yaml"',"{3}":!0},"defaults:\n  - server/apache\n  - override server/db: sqlite\n\ndebug: false\n"))),(0,l.mdx)("div",{className:"col col--6"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ python my_app.py" {2,3}',title:'"$',python:!0,'my_app.py"':!0,"{2,3}":!0},"server:\n  db:\n    name: sqlite\n  name: apache\ndebug: false\n")))),(0,l.mdx)("p",null,"A Config Group's option can also be overridden via the command line. e.g:  "),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"$ python my_app.py server/db=sqlite\n")),(0,l.mdx)("h2",{id:"composition-order"},"Composition order"),(0,l.mdx)("p",null,"The Defaults List is ordered:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"If multiple configs define the same value, the last one wins."),(0,l.mdx)("li",{parentName:"ul"},"If multiple configs contribute to the same dictionary, the result is the combined dictionary.")),(0,l.mdx)("p",null,"By default, the content of a config is overriding the content of configs in the defaults list."),(0,l.mdx)("div",{className:"row"},(0,l.mdx)("div",{className:"col col--6"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml" {5}',title:'"config.yaml"',"{5}":!0},"defaults:\n  - db: mysql  \n\ndb:\n  host: backup\n"))),(0,l.mdx)("div",{className:"col  col--6"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Result: db.host from config" {3}',title:'"Result:',"db.host":!0,from:!0,'config"':!0,"{3}":!0},"db:\n  driver: mysql    # db/mysql.yaml\n  host: backup     # config.yaml\n  port: 3306       # db/mysql.yaml\n\n")))),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"_self_")," entry determines the relative position of ",(0,l.mdx)("strong",{parentName:"p"},"this")," config in the Defaults List.\nIf it is not specified, it is added automatically as the last item."),(0,l.mdx)("div",{className:"row"},(0,l.mdx)("div",{className:"col col--6"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml" {2,6}',title:'"config.yaml"',"{2,6}":!0},"defaults:\n  - _self_\n  - db: mysql # Overrides this config \n\ndb:\n  host: backup\n"))),(0,l.mdx)("div",{className:"col  col--6"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Result: All values from db/mysql" {3}',title:'"Result:',All:!0,values:!0,from:!0,'db/mysql"':!0,"{3}":!0},"db:\n  driver: mysql    # db/mysql.yaml\n  host: localhost  # db/mysql.yaml\n  port: 3306       # db/mysql.yaml\n\n\n")))),(0,l.mdx)("p",null,"With ",(0,l.mdx)("inlineCode",{parentName:"p"},"_self_")," at the top of the Defaults List, the host field defined in ",(0,l.mdx)("em",{parentName:"p"},"config.yaml")," now precedes the host field defined\nin ",(0,l.mdx)("em",{parentName:"p"},"db/mysql.yaml"),", and as a result is overridden."),(0,l.mdx)("h2",{id:"interpolation-in-the-defaults-list"},"Interpolation in the Defaults List"),(0,l.mdx)("p",null,"Config Group Options can be selected using interpolation."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - server: apache\n  - db: mysql\n  - combination_specific_config: ${server}_${db}  # apache_mysql\n")),(0,l.mdx)("p",null,"Interpolation keys can be config groups with any @package overrides.",(0,l.mdx)("br",{parentName:"p"}),"\n","For example: ",(0,l.mdx)("inlineCode",{parentName:"p"},"${db/engine}"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"${db@backup}")),(0,l.mdx)("p",null,"The selected option for ",(0,l.mdx)("em",{parentName:"p"},"combination_specific_config")," depends on the final selected options for ",(0,l.mdx)("em",{parentName:"p"},"db")," and ",(0,l.mdx)("em",{parentName:"p"},"server"),".",(0,l.mdx)("br",{parentName:"p"}),"\n","e.g., If ",(0,l.mdx)("em",{parentName:"p"},"db")," is overridden to ",(0,l.mdx)("em",{parentName:"p"},"sqlite"),", ",(0,l.mdx)("em",{parentName:"p"},"combination_specific_config")," will become ",(0,l.mdx)("em",{parentName:"p"},"apache_sqlite"),"."),(0,l.mdx)("h4",{id:"restrictions"},"Restrictions:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Interpolation keys in the Defaults List cannot reference values in the Final Config Object (it does not yet exist)."),(0,l.mdx)("li",{parentName:"ul"},"Defaults List interpolation keys are absolute (even in nested configs)."),(0,l.mdx)("li",{parentName:"ul"},"The subtree expanded by an Interpolated Config may not contain Default List overrides.")),(0,l.mdx)("p",null,"See ",(0,l.mdx)("a",{parentName:"p",href:"/docs/1.2/patterns/specializing_config"},"Patterns/Specializing Configs")," for more information."),(0,l.mdx)("h2",{id:"debugging-the-defaults-list"},"Debugging the Defaults List"),(0,l.mdx)("p",null,"Hydra's config composition process is as follows:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"The Defaults Tree is created."),(0,l.mdx)("li",{parentName:"ul"},"The Final Defaults List is created via a DFS walk of the Defaults Tree."),(0,l.mdx)("li",{parentName:"ul"},"The Output Config is composed from the entries in the Final Defaults List.")),(0,l.mdx)("p",null,"You can inspect these artifacts via command line flags:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"--info defaults-tree")," shows the Defaults Tree."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"--info defaults")," Shows the Final Defaults List."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"--cfg job|hydra|all")," Shows the Output Config.")),(0,l.mdx)("p",null,"Example outputs:"),(0,l.mdx)("details",null,(0,l.mdx)("summary",null,"python my_app.py ",(0,l.mdx)("b",null,"--info defaults-tree")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title=""',title:'""'},"<root>:\n  hydra/config:\n    hydra/hydra_logging: default\n    hydra/job_logging: default\n    hydra/launcher: basic\n    hydra/sweeper: basic\n    hydra/output: default\n    hydra/help: default\n    hydra/hydra_help: default\n    _self_\n  config:\n    server/apache:\n      server/db: mysql\n      _self_\n    _self_\n"))),(0,l.mdx)("details",null,(0,l.mdx)("summary",null,"python my_app.py ",(0,l.mdx)("b",null,"--info defaults")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-text"},"Defaults List\n*************\n| Config path                 | Package             | _self_ | Parent        | \n-------------------------------------------------------------------------------\n| hydra/hydra_logging/default | hydra.hydra_logging | False  | hydra/config  |\n| hydra/job_logging/default   | hydra.job_logging   | False  | hydra/config  |\n| hydra/launcher/basic        | hydra.launcher      | False  | hydra/config  |\n| hydra/sweeper/basic         | hydra.sweeper       | False  | hydra/config  |\n| hydra/output/default        | hydra               | False  | hydra/config  |\n| hydra/help/default          | hydra.help          | False  | hydra/config  |\n| hydra/hydra_help/default    | hydra.hydra_help    | False  | hydra/config  |\n| hydra/config                | hydra               | True   | <root>        |\n| server/db/mysql             | server.db           | False  | server/apache |\n| server/apache               | server              | True   | config        |\n| config                      |                     | True   | <root>        |\n-------------------------------------------------------------------------------\n"))),(0,l.mdx)("details",null,(0,l.mdx)("summary",null,"python my_app.py ",(0,l.mdx)("b",null,"--cfg job")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-yaml"},"server:\n  db:\n    name: mysql\n  name: apache\ndebug: false\n"))),(0,l.mdx)("h2",{id:"related-topics"},"Related topics"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"/docs/1.2/advanced/overriding_packages"},"Packages")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"/docs/1.2/patterns/extending_configs"},"Common Patterns/Extending Configs")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"/docs/1.2/patterns/configuring_experiments"},"Common Patterns/Configuring Experiments")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"/docs/1.2/patterns/select_multiple_configs_from_config_group"},"Selecting multiple configs from a Config Group"))))}c.isMDXComponent=!0}}]);