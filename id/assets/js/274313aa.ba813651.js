"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["76686"],{75535:function(e,t,r){r.r(t),r.d(t,{default:()=>p,frontMatter:()=>l,metadata:()=>n,assets:()=>s,toc:()=>d,contentTitle:()=>o});var n=JSON.parse('{"id":"scripting/functions/HideObjectForPlayer","title":"HideObjectForPlayer","description":"Hide an object for a player.","source":"@site/docs/scripting/functions/HideObjectForPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/HideObjectForPlayer","permalink":"/id/docs/scripting/functions/HideObjectForPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/HideObjectForPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/id/docs/tags/player"},{"inline":true,"label":"object","permalink":"/id/docs/tags/object"}],"version":"current","frontMatter":{"title":"HideObjectForPlayer","sidebar_label":"HideObjectForPlayer","description":"Hide an object for a player.","tags":["player","object"]},"sidebar":"docsSidebar","previous":{"title":"HideMenuForPlayer","permalink":"/id/docs/scripting/functions/HideMenuForPlayer"},"next":{"title":"HidePickupForPlayer","permalink":"/id/docs/scripting/functions/HidePickupForPlayer"}}'),i=r("85893"),c=r("50065");let l={title:"HideObjectForPlayer",sidebar_label:"HideObjectForPlayer",description:"Hide an object for a player.",tags:["player","object"]},o=void 0,s={},d=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function a(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components},{VersionWarn:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Hide an object for a player."}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"The ID of the player."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"objectid"}),(0,i.jsx)(t.td,{children:"The ID of the object to hide for player."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"true"})," - The function was executed successfully."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"false"})," - The function failed to execute. The playerid or objectid specified does not exist."]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"new gObject;\n\npublic OnGameModeInit()\n{\n    gObject = CreateObject(1431, 921.12201, -1206.78613, 16.52670,   0.00000, 0.00000, 90.00000);\n    return 1;\n}\n\npublic OnPlayerConnect(playerid)\n{\n    HideObjectForPlayer(playerid, gObject);\n    return 1;\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"ShowObjectForPlayer",children:"ShowObjectForPlayer"}),": Show an object for a player."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"IsObjectHiddenForPlayer",children:"IsObjectHiddenForPlayer"}),": Checks if an object is hidden for a player."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"CreateObject",children:"CreateObject"}),": Create an object."]}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return o},a:function(){return l}});var n=r(67294);let i={},c=n.createContext(i);function l(e){let t=n.useContext(c);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);