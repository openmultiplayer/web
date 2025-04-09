"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["82880"],{78653:function(e,r,n){n.r(r),n.d(r,{default:()=>d,frontMatter:()=>i,metadata:()=>t,assets:()=>o,toc:()=>u,contentTitle:()=>a});var t=JSON.parse('{"id":"scripting/functions/GetServerRuleFlags","title":"GetServerRuleFlags","description":"Gets the flags of a server rule.","source":"@site/docs/scripting/functions/GetServerRuleFlags.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetServerRuleFlags","permalink":"/pl/docs/scripting/functions/GetServerRuleFlags","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetServerRuleFlags.md","tags":[{"inline":true,"label":"rule","permalink":"/pl/docs/tags/rule"}],"version":"current","frontMatter":{"title":"GetServerRuleFlags","sidebar_label":"GetServerRuleFlags","description":"Gets the flags of a server rule.","tags":["rule"]},"sidebar":"docsSidebar","previous":{"title":"GetSVarsUpperIndex","permalink":"/pl/docs/scripting/functions/GetSVarsUpperIndex"},"next":{"title":"GetServerTickRate","permalink":"/pl/docs/scripting/functions/GetServerTickRate"}}'),s=n("85893"),l=n("50065");let i={title:"GetServerRuleFlags",sidebar_label:"GetServerRuleFlags",description:"Gets the flags of a server rule.",tags:["rule"]},a=void 0,o={},u=[{value:"Description",id:"description",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){let r={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components},{VersionWarn:n}=r;return n||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,s.jsx)(r.admonition,{type:"warning",children:(0,s.jsx)(r.p,{children:"This function has not yet been implemented."})}),"\n",(0,s.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(r.p,{children:"Gets the flags of a server rule."}),"\n",(0,s.jsx)(r.h2,{id:"return-values",children:"Return Values"}),"\n",(0,s.jsx)(r.p,{children:"Returns the server rule flags."}),"\n",(0,s.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    AddServerRule("discord", "discord.gg/samp");\n    SetServerRuleFlags("discord", 1);\n\n    new E_SERVER_RULE_FLAGS:flags = GetServerRuleFlags("discord");\n    printf("Flags: %d", _:flags); // Flags: 1\n    return 1;\n}\n'})}),"\n",(0,s.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"AddServerRule",children:"AddServerRule"}),": Add a server rule."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"RemoveServerRule",children:"RemoveServerRule"}),": Remove the server rule."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"IsValidServerRule",children:"IsValidServerRule"}),": Checks if the given server rule is valid."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"SetServerRuleFlags",children:"SetServerRuleFlags"}),": Sets the flags of a server rule."]}),"\n"]})]})}function d(e={}){let{wrapper:r}={...(0,l.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},50065:function(e,r,n){n.d(r,{Z:function(){return a},a:function(){return i}});var t=n(67294);let s={},l=t.createContext(s);function i(e){let r=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(l.Provider,{value:r},e.children)}}}]);