"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["14634"],{25336:function(e,t,n){n.r(t),n.d(t,{default:()=>p,frontMatter:()=>l,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>a});var r=JSON.parse('{"id":"scripting/functions/GetPlayerZAim","title":"GetPlayerZAim","description":"Gets a player\'s Z Aim.","source":"@site/docs/scripting/functions/GetPlayerZAim.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerZAim","permalink":"/sr/docs/scripting/functions/GetPlayerZAim","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerZAim.md","tags":[{"inline":true,"label":"player","permalink":"/sr/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerZAim","sidebar_label":"GetPlayerZAim","description":"Gets a player\'s Z Aim.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerWorldBounds","permalink":"/sr/docs/scripting/functions/GetPlayerWorldBounds"},"next":{"title":"GetPlayers","permalink":"/sr/docs/scripting/functions/GetPlayers"}}'),i=n("85893"),s=n("50065");let l={title:"GetPlayerZAim",sidebar_label:"GetPlayerZAim",description:"Gets a player's Z Aim.",tags:["player"]},a=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Gets a player's Z Aim. (related to the camera and aiming)"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"The ID of the player."})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"Returns the player's Z Aim as a float value."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'new Float:zAim = GetPlayerZAim(playerid);\n\nSendClientMessage(playerid, -1, "Z Aim = %f", zAim);\n'})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetPlayerCameraPos",children:"GetPlayerCameraPos"}),": Get the position of the player's camera."]}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return l}});var r=n(67294);let i={},s=r.createContext(i);function l(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);