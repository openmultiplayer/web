"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["7975"],{97074:function(e,n,l){l.r(n),l.d(n,{default:()=>d,frontMatter:()=>s,metadata:()=>t,assets:()=>a,toc:()=>c,contentTitle:()=>i});var t=JSON.parse('{"id":"scripting/functions/AllowPlayerWeapons","title":"AllowPlayerWeapons","description":"Enable/Disable weapons for a player.","source":"@site/docs/scripting/functions/AllowPlayerWeapons.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AllowPlayerWeapons","permalink":"/tr/docs/scripting/functions/AllowPlayerWeapons","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/AllowPlayerWeapons.md","tags":[{"inline":true,"label":"player","permalink":"/tr/docs/tags/player"}],"version":"current","frontMatter":{"title":"AllowPlayerWeapons","sidebar_label":"AllowPlayerWeapons","description":"Enable/Disable weapons for a player.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"AllowPlayerTeleport","permalink":"/tr/docs/scripting/functions/AllowPlayerTeleport"},"next":{"title":"ApplyActorAnimation","permalink":"/tr/docs/scripting/functions/ApplyActorAnimation"}}'),r=l("85893"),o=l("50065");let s={title:"AllowPlayerWeapons",sidebar_label:"AllowPlayerWeapons",description:"Enable/Disable weapons for a player.",tags:["player"]},i=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function p(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components},{VersionWarn:l}=n;return l||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l,{version:"omp v1.1.0.2612"}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Enable/Disable weapons for a player."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"The ID of the player to allow weapons"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["bool",":allow"]}),(0,r.jsx)(n.td,{children:"true for allow and false for disallow."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:"This function always returns true."}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"public OnPlayerConnect(playerid)\n{\n    AllowPlayerWeapons(playerid, true);\n    return 1;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"ArePlayerWeaponsAllowed",children:"ArePlayerWeaponsAllowed"}),": Can the player use weapons?"]}),"\n"]})]})}function d(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},50065:function(e,n,l){l.d(n,{Z:function(){return i},a:function(){return s}});var t=l(67294);let r={},o=t.createContext(r);function s(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);