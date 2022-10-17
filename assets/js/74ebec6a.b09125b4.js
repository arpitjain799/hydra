"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9097],{3905:function(e,r,n){n.r(r),n.d(r,{MDXContext:function(){return d},MDXProvider:function(){return s},mdx:function(){return f},useMDXComponents:function(){return c},withMDXComponents:function(){return p}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(){return i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},i.apply(this,arguments)}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function u(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=t.createContext({}),p=function(e){return function(r){var n=c(r.components);return t.createElement(e,i({},r,{components:n}))}},c=function(e){var r=t.useContext(d),n=r;return e&&(n="function"==typeof e?e(r):u(u({},r),e)),n},s=function(e){var r=c(e.components);return t.createElement(d.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},y=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),s=o,y=p["".concat(a,".").concat(s)]||p[s]||m[s]||i;return n?t.createElement(y,u(u({ref:r},d),{},{components:n})):t.createElement(y,u({ref:r},d))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=y;var u={};for(var l in r)hasOwnProperty.call(r,l)&&(u[l]=r[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var d=2;d<i;d++)a[d]=n[d];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},93899:function(e,r,n){n.d(r,{Z:function(){return l},T:function(){return d}});var t=n(87462),o=n(67294),i=n(39960),a=n(52263),u=n(80907);function l(e){return o.createElement(i.default,(0,t.Z)({},e,{to:(r=e.to,l=(0,u.useActiveVersion)(),(0,a.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(n=null==l?void 0:l.name)?n:"current"]+r),target:"_blank"}));var r,n,l}function d(e){var r,n=null!=(r=e.text)?r:"Example (Click Here)";return o.createElement(l,e,o.createElement("span",null,"\xa0"),o.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example (Click Here)"}))}},54341:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var t=n(87462),o=n(63366),i=(n(67294),n(3905)),a=n(93899),u=["components"],l={id:"working_directory",title:"Output/Working directory",sidebar_label:"Output/Working directory"},d=void 0,p={unversionedId:"tutorials/basic/running_your_app/working_directory",id:"version-1.0/tutorials/basic/running_your_app/working_directory",title:"Output/Working directory",description:"Hydra solves the problem of your needing to specify a new output directory for each run, by",source:"@site/versioned_docs/version-1.0/tutorials/basic/running_your_app/3_working_directory.md",sourceDirName:"tutorials/basic/running_your_app",slug:"/tutorials/basic/running_your_app/working_directory",permalink:"/docs/1.0/tutorials/basic/running_your_app/working_directory",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/tutorials/basic/running_your_app/3_working_directory.md",tags:[],version:"1.0",lastUpdatedBy:"Saugat Pachhai (\u0938\u094c\u0917\u093e\u0924)",lastUpdatedAt:1666011276,formattedLastUpdatedAt:"10/17/2022",sidebarPosition:3,frontMatter:{id:"working_directory",title:"Output/Working directory",sidebar_label:"Output/Working directory"},sidebar:"version-1.0/docs",previous:{title:"Multi-run",permalink:"/docs/1.0/tutorials/basic/running_your_app/multi-run"},next:{title:"Logging",permalink:"/docs/1.0/tutorials/basic/running_your_app/logging"}},c=[{value:"Disabling output subdir",id:"disabling-output-subdir",children:[],level:3},{value:"Original working directory",id:"original-working-directory",children:[],level:3}],s={toc:c};function m(e){var r=e.components,n=(0,o.Z)(e,u);return(0,i.mdx)("wrapper",(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,i.mdx)(a.T,{to:"examples/tutorials/basic/running_your_hydra_app/3_working_directory",mdxType:"ExampleGithubLink"}),(0,i.mdx)("p",null,"Hydra solves the problem of your needing to specify a new output directory for each run, by\ncreating a directory for each run and executing your code within that working directory."),(0,i.mdx)("p",null,"The working directory is used to:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Store the output for the application (For example, a database dump file)"),(0,i.mdx)("li",{parentName:"ul"},"Store the Hydra output for the run (Configuration, Logs etc)")),(0,i.mdx)("p",null,"Every time you run the app, a new working directory is created:"),(0,i.mdx)("p",null,"Python file: ",(0,i.mdx)("inlineCode",{parentName:"p"},"my_app.py")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'import os\nimport hydra\nfrom omegaconf import DictConfig\n\n@hydra.main()\ndef my_app(cfg: DictConfig) -> None:\n    print("Working directory : {}".format(os.getcwd()))\n\n$ python my_app.py\nWorking directory : /home/omry/dev/hydra/outputs/2019-09-25/15-16-17\n\n$ python my_app.py\nWorking directory : /home/omry/dev/hydra/outputs/2019-09-25/15-16-19\n')),(0,i.mdx)("p",null,"Let's take a look at one of the working directories:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-text"},"$ tree outputs/2019-09-25/15-16-17\noutputs/2019-09-25/15-16-17\n\u251c\u2500\u2500 .hydra\n\u2502   \u251c\u2500\u2500 config.yaml\n\u2502   \u251c\u2500\u2500 hydra.yaml\n\u2502   \u2514\u2500\u2500 overrides.yaml\n\u2514\u2500\u2500 my_app.log\n")),(0,i.mdx)("p",null,"We have the Hydra output directory (",(0,i.mdx)("inlineCode",{parentName:"p"},".hydra")," by default) and the application log file.\nInside the configuration output directory we have:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"config.yaml"),": A dump of the user specified configuration"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"hydra.yaml"),": A dump of the Hydra configuration"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"overrides.yaml"),": The command line overrides used")),(0,i.mdx)("p",null,"And in the main output directory:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"my_app.log"),": A log file created for this run")),(0,i.mdx)("h3",{id:"disabling-output-subdir"},"Disabling output subdir"),(0,i.mdx)("p",null,"You can change the ",(0,i.mdx)("inlineCode",{parentName:"p"},".hydra")," subdirectory name by overriding ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.output_subdir"),".\nYou can disable its creation by overriding ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.output_subdir")," to ",(0,i.mdx)("inlineCode",{parentName:"p"},"null"),". "),(0,i.mdx)("h3",{id:"original-working-directory"},"Original working directory"),(0,i.mdx)("p",null,"You can still access the original working directory if you need to:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"import os\nfrom omegaconf import DictConfig\nimport hydra\n\n@hydra.main()\ndef my_app(_cfg: DictConfig) -> None:\n    print(f\"Current working directory : {os.getcwd()}\")\n    print(f\"Orig working directory    : {hydra.utils.get_original_cwd()}\")\n    print(f\"to_absolute_path('foo')   : {hydra.utils.to_absolute_path('foo')}\")\n    print(f\"to_absolute_path('/foo')  : {hydra.utils.to_absolute_path('/foo')}\")\n\nif __name__ == \"__main__\":\n    my_app()\n\n\n$ python examples/tutorial/8_working_directory/original_cwd.py\nCurrent working directory  : /Users/omry/dev/hydra/outputs/2019-10-23/10-53-03\nOriginal working directory : /Users/omry/dev/hydra\nto_absolute_path('foo')    : /Users/omry/dev/hydra/foo\nto_absolute_path('/foo')   : /foo\n")),(0,i.mdx)("p",null,"Working directory can be ",(0,i.mdx)("a",{parentName:"p",href:"/docs/1.0/configure_hydra/workdir"},"customized"),"."))}m.isMDXComponent=!0}}]);