"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["7975"],{97074:function(e,n,l){l.r(n),l.d(n,{default:()=>d,frontMatter:()=>s,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>i});var r=JSON.parse('{"id":"scripting/functions/AllowPlayerWeapons","title":"AllowPlayerWeapons","description":"Enable/Disable weapons for a player.","source":"@site/docs/scripting/functions/AllowPlayerWeapons.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AllowPlayerWeapons","permalink":"/ru/docs/scripting/functions/AllowPlayerWeapons","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/AllowPlayerWeapons.md","tags":[{"inline":true,"label":"player","permalink":"/ru/docs/tags/player"}],"version":"current","frontMatter":{"title":"AllowPlayerWeapons","sidebar_label":"AllowPlayerWeapons","description":"Enable/Disable weapons for a player.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"AllowPlayerTeleport","permalink":"/ru/docs/scripting/functions/AllowPlayerTeleport"},"next":{"title":"ApplyActorAnimation","permalink":"/ru/docs/scripting/functions/ApplyActorAnimation"}}'),t=l("85893"),o=l("50065");let s={title:"AllowPlayerWeapons",sidebar_label:"AllowPlayerWeapons",description:"Enable/Disable weapons for a player.",tags:["player"]},i=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function p(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components},{VersionWarn:l}=n;return l||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l,{version:"omp v1.1.0.2612"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Enable/Disable weapons for a player."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"playerid"}),(0,t.jsx)(n.td,{children:"The ID of the player to allow weapons"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["bool",":allow"]}),(0,t.jsx)(n.td,{children:"true for allow and false for disallow."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:"This function always returns true."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"public OnPlayerConnect(playerid)\n{\n    AllowPlayerWeapons(playerid, true);\n    return 1;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"ArePlayerWeaponsAllowed",children:"ArePlayerWeaponsAllowed"}),": Can the player use weapons?"]}),"\n"]})]})}function d(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},50065:function(e,n,l){l.d(n,{Z:function(){return i},a:function(){return s}});var r=l(67294);let t={},o=r.createContext(t);function s(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);