"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[228],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,g=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3899:function(e,t,n){n.d(t,{Z:function(){return c},T:function(){return l}});var r=n(7462),o=n(7294),i=n(6742),a=n(2263),s=n(907);function c(e){return o.createElement(i.Z,(0,r.Z)({},e,{to:(t=e.to,c=(0,s.zu)(),(0,a.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(n=null==c?void 0:c.name)?n:"current"]+t),target:"_blank"}));var t,n,c}function l(e){var t,n=null!=(t=e.text)?t:"Example (Click Here)";return o.createElement(c,e,o.createElement("span",null,"\xa0"),o.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example (Click Here)"}))}},5225:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=n(3899),s=["components"],c={id:"config_groups",title:"Config Groups"},l=void 0,u={unversionedId:"tutorials/structured_config/config_groups",id:"version-1.0/tutorials/structured_config/config_groups",isDocsHomePage:!1,title:"Config Groups",description:"Structured Configs can be used to implement config groups. Special care needs to be taken when specifying a",source:"@site/versioned_docs/version-1.0/tutorials/structured_config/3_config_groups.md",sourceDirName:"tutorials/structured_config",slug:"/tutorials/structured_config/config_groups",permalink:"/docs/1.0/tutorials/structured_config/config_groups",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/tutorials/structured_config/3_config_groups.md",tags:[],version:"1.0",lastUpdatedBy:"Jasha10",lastUpdatedAt:1642706413,formattedLastUpdatedAt:"1/20/2022",sidebarPosition:3,frontMatter:{id:"config_groups",title:"Config Groups"},sidebar:"version-1.0/docs",previous:{title:"A hierarchical static configuration",permalink:"/docs/1.0/tutorials/structured_config/hierarchical_static_config"},next:{title:"Defaults List",permalink:"/docs/1.0/tutorials/structured_config/defaults"}},p=[{value:"Config inheritance",id:"config-inheritance",children:[]}],f={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(a.T,{to:"examples/tutorials/structured_configs/3_config_groups",mdxType:"ExampleGithubLink"}),(0,i.kt)("p",null,"Structured Configs can be used to implement config groups. Special care needs to be taken when specifying a\ndefault value for fields populated by a config group. We will look at why below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Defining a config group for database" {16-17,22-23}',title:'"Defining',a:!0,config:!0,group:!0,for:!0,'database"':!0,"{16-17,22-23}":!0},'@dataclass\nclass MySQLConfig:\n    driver: str = "mysql"\n    host: str = "localhost"\n    port: int = 3306\n\n@dataclass\nclass PostGreSQLConfig:\n    driver: str = "postgresql"\n    host: str = "localhost"\n    port: int = 5432\n    timeout: int = 10\n\n@dataclass\nclass Config:\n    # Keep db omegaconf.MISSING. We will populate it using composition.\n    db: Any = MISSING\n\n# Create config group `db` with options \'mysql\' and \'postgreqsl\'\ncs = ConfigStore.instance()\ncs.store(name="config", node=Config)\ncs.store(group="db", name="mysql", node=MySQLConfig)\ncs.store(group="db", name="postgresql", node=PostGreSQLConfig)\n\n@hydra.main(config_name="config")\ndef my_app(cfg: Config) -> None:\n    print(OmegaConf.to_yaml(cfg))\n')),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("em",{parentName:"p"},"Config")," class is ",(0,i.kt)("strong",{parentName:"p"},"NOT")," the Defaults list. We will see the Defaults list in the next page."))),(0,i.kt)("p",null,"You can select the database from the command line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py +db=postgresql\ndb:\n  driver: postgresql\n  host: localhost\n  password: drowssap\n  port: 5432\n  timeout: 10\n  user: postgres_user\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," above is required because there is no default choice for the config group ",(0,i.kt)("inlineCode",{parentName:"p"},"db"),".\nThe next page will reintroduce the Defaults List, eliminating the need for the ",(0,i.kt)("inlineCode",{parentName:"p"},"+"),"."),(0,i.kt)("h3",{id:"config-inheritance"},"Config inheritance"),(0,i.kt)("p",null,"Standard Python inheritance can be used to get improved type safety, and to move common fields to the parent class."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Defining a config group for database using inheritance"',title:'"Defining',a:!0,config:!0,group:!0,for:!0,database:!0,using:!0,'inheritance"':!0},'@dataclass\nclass DBConfig:\n    host: str = "localhost"\n    port: int = MISSING\n    driver: str = MISSING\n\n@dataclass\nclass MySQLConfig(DBConfig):\n    driver: str = "mysql"\n    port: int = 3306\n\n@dataclass\nclass PostGreSQLConfig(DBConfig):\n    driver: str = "postgresql"\n    port: int = 5432\n    timeout: int = 10\n\n@dataclass\nclass Config:\n    # We can now annotate db as DBConfig which\n    # improves both static and dynamic type safety.\n    db: DBConfig = MISSING\n')))}d.isMDXComponent=!0}}]);