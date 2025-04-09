"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["29668"],{93193:function(e,r,t){t.r(r),t.d(r,{default:()=>u,frontMatter:()=>i,metadata:()=>n,assets:()=>o,toc:()=>a,contentTitle:()=>d});var n=JSON.parse('{"id":"scripting/functions/SetServerRuleFlags","title":"SetServerRuleFlags","description":"Sets the flags of a server rule.","source":"@site/docs/scripting/functions/SetServerRuleFlags.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetServerRuleFlags","permalink":"/fil/docs/scripting/functions/SetServerRuleFlags","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetServerRuleFlags.md","tags":[{"inline":true,"label":"rule","permalink":"/fil/docs/tags/rule"}],"version":"current","frontMatter":{"title":"SetServerRuleFlags","sidebar_label":"SetServerRuleFlags","description":"Sets the flags of a server rule.","tags":["rule"]},"sidebar":"docsSidebar","previous":{"title":"SetServerRule","permalink":"/fil/docs/scripting/functions/SetServerRule"},"next":{"title":"SetSpawnInfo","permalink":"/fil/docs/scripting/functions/SetSpawnInfo"}}'),s=t("85893"),l=t("50065");let i={title:"SetServerRuleFlags",sidebar_label:"SetServerRuleFlags",description:"Sets the flags of a server rule.",tags:["rule"]},d=void 0,o={},a=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){let r={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{VersionWarn:t}=r;return t||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,s.jsx)(r.admonition,{type:"warning",children:(0,s.jsx)(r.p,{children:"This function has not yet been implemented."})}),"\n",(0,s.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(r.p,{children:"Sets the flags of a server rule."}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"const rule[]"}),(0,s.jsx)(r.td,{children:"The server rule name."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["E_SERVER_RULE_FLAGS",":flags"]}),(0,s.jsx)(r.td,{children:"The flags to set."})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:["Returns ",(0,s.jsx)(r.strong,{children:"true"})," if the function executed successfully, otherwise ",(0,s.jsx)(r.strong,{children:"false"}),"."]}),"\n",(0,s.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    AddServerRule("discord", "discord.gg/samp");\n    SetServerRuleFlags("discord", 1);\n    return 1;\n}\n'})}),"\n",(0,s.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"AddServerRule",children:"AddServerRule"}),": Add a server rule."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"RemoveServerRule",children:"RemoveServerRule"}),": Remove the server rule."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"IsValidServerRule",children:"IsValidServerRule"}),": Checks if the given server rule is valid."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"GetServerRuleFlags",children:"GetServerRuleFlags"}),": Gets the flags of a server rule."]}),"\n"]})]})}function u(e={}){let{wrapper:r}={...(0,l.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},50065:function(e,r,t){t.d(r,{Z:function(){return d},a:function(){return i}});var n=t(67294);let s={},l=n.createContext(s);function i(e){let r=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(l.Provider,{value:r},e.children)}}}]);