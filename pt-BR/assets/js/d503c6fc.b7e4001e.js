"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["23585"],{20514:function(e,r,t){t.r(r),t.d(r,{default:()=>u,frontMatter:()=>l,metadata:()=>n,assets:()=>c,toc:()=>o,contentTitle:()=>d});var n=JSON.parse('{"id":"scripting/functions/SetServerRule","title":"SetServerRule","description":"Add a server rule.","source":"@site/docs/scripting/functions/SetServerRule.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetServerRule","permalink":"/pt-BR/docs/scripting/functions/SetServerRule","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetServerRule.md","tags":[{"inline":true,"label":"rule","permalink":"/pt-BR/docs/tags/rule"}],"version":"current","frontMatter":{"title":"SetServerRule","sidebar_label":"SetServerRule","description":"Add a server rule.","tags":["rule"]},"sidebar":"docsSidebar","previous":{"title":"SetSVarString","permalink":"/pt-BR/docs/scripting/functions/SetSVarString"},"next":{"title":"SetServerRuleFlags","permalink":"/pt-BR/docs/scripting/functions/SetServerRuleFlags"}}'),i=t("85893"),s=t("50065");let l={title:"SetServerRule",sidebar_label:"SetServerRule",description:"Add a server rule.",tags:["rule"]},d=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function a(e){let r={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{VersionWarn:t}=r;return t||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(r.p,{children:"Add a server rule."}),"\n",(0,i.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Name"}),(0,i.jsx)(r.th,{children:"Description"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"const rule[]"}),(0,i.jsx)(r.td,{children:"The server rule name to add."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"const format[]"}),(0,i.jsx)(r.td,{children:"The server rule value."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"OPEN_MP_TAGS:..."}),(0,i.jsx)(r.td,{children:"Indefinite number of arguments of any tag."})]})]})]}),"\n",(0,i.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(r.p,{children:"Returns true if the function executed successfully, otherwise false."}),"\n",(0,i.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    SetServerRule("discord", "discord.gg/samp");\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(r.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(r.admonition,{type:"tip",children:(0,i.jsxs)(r.p,{children:["This function is the same as ",(0,i.jsx)(r.a,{href:"AddServerRule",children:"AddServerRule"}),"."]})}),"\n",(0,i.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"RemoveServerRule",children:"RemoveServerRule"}),": Remove the server rule."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"IsValidServerRule",children:"IsValidServerRule"}),": Checks if the given server rule is valid."]}),"\n"]})]})}function u(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},50065:function(e,r,t){t.d(r,{Z:function(){return d},a:function(){return l}});var n=t(67294);let i={},s=n.createContext(i);function l(e){let r=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);