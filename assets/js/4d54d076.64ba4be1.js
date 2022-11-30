"use strict";(self.webpackChunkinterep_docs=self.webpackChunkinterep_docs||[]).push([[80],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1933:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:8},i="Contributing",l={unversionedId:"contributing",id:"contributing",title:"Contributing",description:"Thank you for being interested in contributing to the Interep project!",source:"@site/docs/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/contributing",editUrl:"https://github.com/interep-project/docs/edit/main/docs/contributing.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Code of conduct",permalink:"/code-of-conduct"},next:{title:"Resources",permalink:"/resources"}},s={},u=[{value:"Pull Requests",id:"pull-requests",level:2},{value:"CI (Github Actions) Tests",id:"ci-github-actions-tests",level:2},{value:"Style Guide",id:"style-guide",level:2},{value:"Code rules",id:"code-rules",level:3},{value:"Commits rules",id:"commits-rules",level:3},{value:"Type",id:"type",level:4},{value:"Scope",id:"scope",level:4},{value:"Subject",id:"subject",level:4},{value:"Body",id:"body",level:4},{value:"Branch rules",id:"branch-rules",level:3}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"contributing"},"Contributing"),(0,a.kt)("p",null,"\ud83c\udf89 Thank you for being interested in contributing to the Interep project! \ud83c\udf89"),(0,a.kt)("p",null,"Feel welcome and read the following sections in order to know how to ask questions and how to work on something."),(0,a.kt)("p",null,"All members of our community are expected to follow our ",(0,a.kt)("a",{parentName:"p",href:"https://docs.interep.link/code-of-conduct"},"Code of Conduct"),". Please make sure you are welcoming and friendly in all of our spaces."),(0,a.kt)("p",null,"We're really glad you're reading this, because we need volunteer developers to help this project come to fruition. \ud83d\udc4f"),(0,a.kt)("h2",{id:"pull-requests"},"Pull Requests"),(0,a.kt)("p",null,"The best way to contribute to our projects is with pull requests. Here's a quick guide:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Fork the repo.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the tests. We only take pull requests with passing tests.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add a test for your change. Only refactoring and documentation changes require no new tests.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Make sure to check out the ",(0,a.kt)("a",{parentName:"p",href:"/contributing#style-guide"},"Style Guide")," and ensure that your code complies with the rules.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Make the test pass.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Commit your changes.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Push to your fork and submit a pull request on our ",(0,a.kt)("inlineCode",{parentName:"p"},"dev")," branch. Please provide us with some explanation of why you made the changes you made. For new features make sure to explain a standard use case to us."))),(0,a.kt)("h2",{id:"ci-github-actions-tests"},"CI (Github Actions) Tests"),(0,a.kt)("p",null,"We use GitHub Actions to test each PR before it is merged."),(0,a.kt)("p",null,"When you submit your PR (or later change that code), a CI build will automatically be kicked off. A note will be added to the PR, and will indicate the current status of the build."),(0,a.kt)("h2",{id:"style-guide"},"Style Guide"),(0,a.kt)("h3",{id:"code-rules"},"Code rules"),(0,a.kt)("p",null,"We always use ESLint and Prettier. To check that your code follows the rules, simply run the npm script ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn lint"),"."),(0,a.kt)("h3",{id:"commits-rules"},"Commits rules"),(0,a.kt)("p",null,"For commits it is recommended to use ",(0,a.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org"},"Conventional Commits"),"."),(0,a.kt)("p",null,"Don't worry if it looks complicated, in our repositories, after ",(0,a.kt)("inlineCode",{parentName:"p"},"git add"),", you can usually run the npm script ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn commit")," to make many of these steps interactive."),(0,a.kt)("p",null,"Each commit message consists of a ",(0,a.kt)("strong",{parentName:"p"},"header"),", a ",(0,a.kt)("strong",{parentName:"p"},"body")," and a ",(0,a.kt)("strong",{parentName:"p"},"footer"),". The ",(0,a.kt)("strong",{parentName:"p"},"header")," has a special format that includes a ",(0,a.kt)("strong",{parentName:"p"},"type"),", a ",(0,a.kt)("strong",{parentName:"p"},"scope")," and a ",(0,a.kt)("strong",{parentName:"p"},"subject"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<type>(<scope>): <subject>\n<BLANK LINE>\n<body>\n<BLANK LINE>\n<footer>\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"header")," is mandatory and the ",(0,a.kt)("strong",{parentName:"p"},"scope")," of the header is optional."),(0,a.kt)("h4",{id:"type"},"Type"),(0,a.kt)("p",null,"The type must be one of the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"feat: A new feature"),(0,a.kt)("li",{parentName:"ul"},"fix: A bug fix"),(0,a.kt)("li",{parentName:"ul"},"docs: Documentation only changes"),(0,a.kt)("li",{parentName:"ul"},"style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)"),(0,a.kt)("li",{parentName:"ul"},"refactor: A code change that neither fixes a bug nor adds a feature (improvements of the code structure)"),(0,a.kt)("li",{parentName:"ul"},"perf: A code change that improves the performance"),(0,a.kt)("li",{parentName:"ul"},"test: Adding missing or correcting existing tests"),(0,a.kt)("li",{parentName:"ul"},"build: Changes that affect the build system or external dependencies (example scopes: gulp, npm)"),(0,a.kt)("li",{parentName:"ul"},"ci: Changes to CI configuration files and scripts (example scopes: travis, circle)"),(0,a.kt)("li",{parentName:"ul"},"chore: Other changes that don't modify src or test files"),(0,a.kt)("li",{parentName:"ul"},"revert: Reverts a previous commit")),(0,a.kt)("h4",{id:"scope"},"Scope"),(0,a.kt)("p",null,"The scope should be the name of the npm package affected (as perceived by the person reading the changelog generated from commit messages)."),(0,a.kt)("h4",{id:"subject"},"Subject"),(0,a.kt)("p",null,"The subject contains a succinct description of the change:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Use the imperative, present tense: "change" not "changed" nor "changes"'),(0,a.kt)("li",{parentName:"ul"},"Don't capitalize the first letter"),(0,a.kt)("li",{parentName:"ul"},"No dot (.) at the end")),(0,a.kt)("h4",{id:"body"},"Body"),(0,a.kt)("p",null,'Just as in the subject, use the imperative, present tense: "change" not "changed" nor "changes". The body should include the motivation for the change and contrast this with previous behavior.'),(0,a.kt)("h3",{id:"branch-rules"},"Branch rules"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"There must be a ",(0,a.kt)("inlineCode",{parentName:"li"},"main")," branch, used only for the releases."),(0,a.kt)("li",{parentName:"ul"},"There must be a ",(0,a.kt)("inlineCode",{parentName:"li"},"dev")," branch, used to merge all the branches under it."),(0,a.kt)("li",{parentName:"ul"},"Avoid long descriptive names for long-lived branches."),(0,a.kt)("li",{parentName:"ul"},"Use kebab-case (no CamelCase)."),(0,a.kt)("li",{parentName:"ul"},"Use grouping tokens (words) at the beginning of your branch names (in a similar way to the ",(0,a.kt)("inlineCode",{parentName:"li"},"type")," of commit)."),(0,a.kt)("li",{parentName:"ul"},"Define and use short lead tokens to differentiate branches in a way that is meaningful to your workflow."),(0,a.kt)("li",{parentName:"ul"},"Use slashes to separate parts of your branch names."),(0,a.kt)("li",{parentName:"ul"},"Remove branch after merge if it is not important.")),(0,a.kt)("p",null,"Examples:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git branch -b docs/readme\ngit branch -b test/a-feature\ngit branch -b feat/sidebar\ngit branch -b fix/b-feature\n")))}p.isMDXComponent=!0}}]);