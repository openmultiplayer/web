"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["46009"],{59675:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>l,metadata:()=>i,assets:()=>o,toc:()=>c,contentTitle:()=>a});var i=JSON.parse('{"id":"scripting/functions/SetGravity","title":"SetGravity","description":"Set the gravity for all players.","source":"@site/docs/scripting/functions/SetGravity.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetGravity","permalink":"/sl/docs/scripting/functions/SetGravity","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetGravity.md","tags":[],"version":"current","frontMatter":{"title":"SetGravity","sidebar_label":"SetGravity","description":"Set the gravity for all players.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"SetGameModeText","permalink":"/sl/docs/scripting/functions/SetGameModeText"},"next":{"title":"SetMenuColumnHeader","permalink":"/sl/docs/scripting/functions/SetMenuColumnHeader"}}'),r=n("85893"),s=n("50065");let l={title:"SetGravity",sidebar_label:"SetGravity",description:"Set the gravity for all players.",tags:[]},a=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Set the gravity for all players."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Float",":gravity"]}),(0,r.jsx)(t.td,{children:"The value that the gravity should be set to (between -50.0 and 50.0)."})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.p,{children:"This function always returns 1, even when it fails to execute if the gravity is out of the limits (lower than -50.0 or high than +50.0)."}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    // Set moon-like gravity\n    SetGravity(0.001);\n\n    return 1;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.p,{children:"Default gravity is 0.008."})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetGravity",children:"GetGravity"}),": Get the currently set gravity."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"SetPlayerGravity",children:"SetPlayerGravity"}),": Set a player's gravity."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"SetWeather",children:"SetWeather"}),": Set the global weather."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"SetWorldTime",children:"SetWorldTime"}),": Set the global server time."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return l}});var i=n(67294);let r={},s=i.createContext(r);function l(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);