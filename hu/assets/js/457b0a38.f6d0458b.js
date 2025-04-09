"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["86756"],{89112:function(e,t,n){n.r(t),n.d(t,{default:()=>p,frontMatter:()=>i,metadata:()=>r,assets:()=>s,toc:()=>a,contentTitle:()=>c});var r=JSON.parse('{"id":"scripting/functions/GetPlayerObjectMoveSpeed","title":"GetPlayerObjectMoveSpeed","description":"Get the move speed of a player-object.","source":"@site/docs/scripting/functions/GetPlayerObjectMoveSpeed.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerObjectMoveSpeed","permalink":"/hu/docs/scripting/functions/GetPlayerObjectMoveSpeed","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerObjectMoveSpeed.md","tags":[{"inline":true,"label":"player","permalink":"/hu/docs/tags/player"},{"inline":true,"label":"object","permalink":"/hu/docs/tags/object"},{"inline":true,"label":"playerobject","permalink":"/hu/docs/tags/playerobject"}],"version":"current","frontMatter":{"title":"GetPlayerObjectMoveSpeed","sidebar_label":"GetPlayerObjectMoveSpeed","description":"Get the move speed of a player-object.","tags":["player","object","playerobject"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerObjectModel","permalink":"/hu/docs/scripting/functions/GetPlayerObjectModel"},"next":{"title":"GetPlayerObjectMovingTargetPos","permalink":"/hu/docs/scripting/functions/GetPlayerObjectMovingTargetPos"}}'),o=n("85893"),l=n("50065");let i={title:"GetPlayerObjectMoveSpeed",sidebar_label:"GetPlayerObjectMoveSpeed",description:"Get the move speed of a player-object.",tags:["player","object","playerobject"]},c=void 0,s={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,o.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(t.p,{children:"Get the move speed of a player-object."}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Name"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"playerid"}),(0,o.jsx)(t.td,{children:"The ID of the player."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"objectid"}),(0,o.jsx)(t.td,{children:"The ID of the player-object to get the move speed of."})]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsx)(t.p,{children:"Returns the move speed as float."}),"\n",(0,o.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-c",children:"new playerobjectid = CreatePlayerObject(playerid, 985, 1003.39154, -643.33423, 122.35060,   0.00000, 1.00000, 24.00000);\nMovePlayerObject(playerid, playerobjectid, 1003.3915, -643.3342, 114.5122,  0.8);\n\nnew Float:moveSpeed = GetPlayerObjectMoveSpeed(playerid, playerobjectid);\n// moveSpeed = 0.8\n"})}),"\n",(0,o.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"MovePlayerObject",children:"MovePlayerObject"}),": Move a player object to a new position with a set speed."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"SetPlayerObjectMoveSpeed",children:"SetPlayerObjectMoveSpeed"}),": Set the move speed of a player-object."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"GetObjectMoveSpeed",children:"GetObjectMoveSpeed"}),": Get the move speed of an object."]}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return i}});var r=n(67294);let o={},l=r.createContext(o);function i(e){let t=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);