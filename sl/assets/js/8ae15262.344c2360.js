"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["20016"],{270:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>a,metadata:()=>i,assets:()=>c,toc:()=>o,contentTitle:()=>l});var i=JSON.parse('{"id":"scripting/functions/GetGravity","title":"GetGravity","description":"Get the currently global gravity.","source":"@site/docs/scripting/functions/GetGravity.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetGravity","permalink":"/sl/docs/scripting/functions/GetGravity","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetGravity.md","tags":[],"version":"current","frontMatter":{"title":"GetGravity","sidebar_label":"GetGravity","description":"Get the currently global gravity.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"GetGameText","permalink":"/sl/docs/scripting/functions/GetGameText"},"next":{"title":"GetMaxPlayers","permalink":"/sl/docs/scripting/functions/GetMaxPlayers"}}'),r=n("85893"),s=n("50065");let a={title:"GetGravity",sidebar_label:"GetGravity",description:"Get the currently global gravity.",tags:[]},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Get the currently global gravity."}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"SA-MP server:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'#include <a_samp>\n\n#if\xa0!defined GetGravity\n    native Float:GetGravity();\n#endif\n\npublic OnGameModeInit()\n{\n    printf("Current gravity: %f", GetGravity());\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"open.mp server:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'#include <open.mp>\n\npublic OnGameModeInit()\n{\n    printf("Current gravity: %f", GetGravity());\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["In SA-MP Server this function is not defined by default. Add 'native Float",":GetGravity","();' under the inclusion of a_samp.inc to use it."]})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"SetGravity",children:"SetGravity"}),": Set the global gravity."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetPlayerGravity",children:"GetPlayerGravity"}),": Get a player's gravity."]}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return a}});var i=n(67294);let r={},s=i.createContext(r);function a(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);