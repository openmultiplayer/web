"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["88522"],{21483:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>l,metadata:()=>i,assets:()=>a,toc:()=>c,contentTitle:()=>s});var i=JSON.parse('{"id":"scripting/functions/GetPlayerPoolSize","title":"GetPlayerPoolSize","description":"Gets the highest playerid currently in use on the server.","source":"@site/docs/scripting/functions/GetPlayerPoolSize.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerPoolSize","permalink":"/es/docs/scripting/functions/GetPlayerPoolSize","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerPoolSize.md","tags":[{"inline":true,"label":"player","permalink":"/es/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerPoolSize","sidebar_label":"GetPlayerPoolSize","description":"Gets the highest playerid currently in use on the server.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerPing","permalink":"/es/docs/scripting/functions/GetPlayerPing"},"next":{"title":"GetPlayerPos","permalink":"/es/docs/scripting/functions/GetPlayerPos"}}'),r=n("85893"),o=n("50065");let l={title:"GetPlayerPoolSize",sidebar_label:"GetPlayerPoolSize",description:"Gets the highest playerid currently in use on the server.",tags:["player"]},s=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{version:"SA-MP 0.3.7"}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["Gets the highest playerid currently in use on the server.  Note that in SA",":MP"," this function is broken and will return ",(0,r.jsx)(t.code,{children:"0"})," even when there are no players.  fixes.inc and open.mp correct this to return ",(0,r.jsx)(t.code,{children:"-1"}),", but also deprecate the function in favour of ",(0,r.jsx)(t.code,{children:"MAX_PLAYERS"})," or ",(0,r.jsx)(t.code,{children:"foreach"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:"FreezeAll()\n{\n    // note that we assign the return value to a new variable (j) to avoid calling the function with each iteration\n    for (new i = 0, j = GetPlayerPoolSize(); i <= j; i++)\n    {\n        TogglePlayerControllable(i, 0);\n    }\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetVehiclePoolSize",children:"GetVehiclePoolSize"}),": Gets the highest vehicleid currently in use on the server."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetMaxPlayers",children:"GetMaxPlayers"}),": Gets the maximum number of players that can join the server."]}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return l}});var i=n(67294);let r={},o=i.createContext(r);function l(e){let t=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);