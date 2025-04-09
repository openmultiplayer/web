"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["97150"],{74519:function(e,r,a){a.r(r),a.d(r,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>o,toc:()=>c,contentTitle:()=>l});var t=JSON.parse('{"id":"tutorials/servervariablesystem","title":"Server variable system","description":"The server variable system (put short, SVar) is a new way of creating server variables in an efficient dynamically created method globally, meaning they can be used in server\'s gamemode and filterscripts at the same time.","source":"@site/docs/tutorials/servervariablesystem.md","sourceDirName":"tutorials","slug":"/tutorials/servervariablesystem","permalink":"/bs/docs/tutorials/servervariablesystem","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/tutorials/servervariablesystem.md","tags":[],"version":"current","frontMatter":{"title":"Server variable system","sidebar_label":"Server variable system","description":"The server variable system (put short, SVar) is a new way of creating server variables in an efficient dynamically created method globally, meaning they can be used in server\'s gamemode and filterscripts at the same time."},"sidebar":"docsSidebar","previous":{"title":"Cooldowns","permalink":"/bs/docs/tutorials/cooldowns"},"next":{"title":"String Manipulation","permalink":"/bs/docs/tutorials/stringmanipulation"}}'),s=a("85893"),n=a("50065");let i={title:"Server variable system",sidebar_label:"Server variable system",description:"The server variable system (put short, SVar) is a new way of creating server variables in an efficient dynamically created method globally, meaning they can be used in server's gamemode and filterscripts at the same time."},l=void 0,o={},c=[{value:"Advantages",id:"advantages",level:2},{value:"Drawbacks",id:"drawbacks",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let r={a:"a",admonition:"admonition",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.strong,{children:"server variable system"})," (put short, ",(0,s.jsx)(r.strong,{children:"SVar"}),") is a new way of creating global server variables efficient and dynamically, meaning that they can be used in server's gamemode and filterscripts at the same time."]}),"\n",(0,s.jsxs)(r.p,{children:["They are similar to ",(0,s.jsx)(r.a,{href:"perplayervariablesystem",children:"PVars"}),", but are not tied to a player ID."]}),"\n",(0,s.jsx)(r.admonition,{type:"warning",children:(0,s.jsx)(r.p,{children:"This system was introduced in SA-MP 0.3.7 R2-1 and will not work in earlier versions!"})}),"\n",(0,s.jsx)(r.admonition,{type:"note",children:(0,s.jsx)(r.p,{children:"The SVar system is the same as the PVars, although the variables created are server-wide, not attached to any player ID, and persist through gamemode changes."})}),"\n",(0,s.jsx)(r.h2,{id:"advantages",children:"Advantages"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"SVars can be shared/accessed across gamemode scripts and filterscripts."}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"You can easily enumerate and print/store the SVar list. This makes debugging easier."}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Even if a SVar hasn't been created, it still will return a default value of 0."}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"SVars can hold very large strings using dynamically allocated memory."}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"You can Set, Get, Create SVars ingame."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"drawbacks",children:"Drawbacks"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"SVars are several times slower than regular variables. It is generally more favorable to trade in memory for speed, rather than the other way round."}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"../scripting/functions/SetSVarInt",children:"SetSVarInt"}),": set an integer for a server variable."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"../scripting/functions/GetSVarInt",children:"GetSVarInt"}),": get a player server as an integer."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"../scripting/functions/SetSVarString",children:"SetSVarString"}),": set a string for a server variable."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"../scripting/functions/GetSVarString",children:"GetSVarString"}),": get the previously set string from a server variable."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"../scripting/functions/SetSVarFloat",children:"SetSVarFloat"}),": set a float for a server variable."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"../scripting/functions/GetSVarFloat",children:"GetSVarFloat"}),": get the previously set float from a server variable"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"../scripting/functions/DeleteSVar",children:"DeleteSVar"}),": delete a server variable."]}),"\n"]})]})}function h(e={}){let{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,r,a){a.d(r,{Z:function(){return l},a:function(){return i}});var t=a(67294);let s={},n=t.createContext(s);function i(e){let r=t.useContext(n);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);