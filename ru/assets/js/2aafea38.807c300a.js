"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["53249"],{24065:function(e,t,r){r.r(t),r.d(t,{default:()=>p,frontMatter:()=>l,metadata:()=>n,assets:()=>s,toc:()=>a,contentTitle:()=>c});var n=JSON.parse('{"id":"scripting/functions/SetPlayerObjectMoveSpeed","title":"SetPlayerObjectMoveSpeed","description":"Set the move speed of a player-object.","source":"@site/docs/scripting/functions/SetPlayerObjectMoveSpeed.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerObjectMoveSpeed","permalink":"/ru/docs/scripting/functions/SetPlayerObjectMoveSpeed","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetPlayerObjectMoveSpeed.md","tags":[{"inline":true,"label":"player","permalink":"/ru/docs/tags/player"},{"inline":true,"label":"object","permalink":"/ru/docs/tags/object"},{"inline":true,"label":"playerobject","permalink":"/ru/docs/tags/playerobject"}],"version":"current","frontMatter":{"title":"SetPlayerObjectMoveSpeed","sidebar_label":"SetPlayerObjectMoveSpeed","description":"Set the move speed of a player-object.","tags":["player","object","playerobject"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerObjectMaterialText","permalink":"/ru/docs/scripting/functions/SetPlayerObjectMaterialText"},"next":{"title":"SetPlayerObjectNoCameraCol","permalink":"/ru/docs/scripting/functions/SetPlayerObjectNoCameraCol"}}'),o=r("85893"),i=r("50065");let l={title:"SetPlayerObjectMoveSpeed",sidebar_label:"SetPlayerObjectMoveSpeed",description:"Set the move speed of a player-object.",tags:["player","object","playerobject"]},c=void 0,s={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{VersionWarn:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,o.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(t.p,{children:"Set the move speed of a player-object."}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Name"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"playerid"}),(0,o.jsx)(t.td,{children:"The ID of the player."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"objectid"}),(0,o.jsx)(t.td,{children:"The ID of the player-object to set the move speed of."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsxs)(t.td,{children:["Float",":speed"]}),(0,o.jsx)(t.td,{children:"The speed at which to move the object (units per second)."})]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"true"})," - The function was executed successfully."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"false"})," - The function failed to execute. The object specified does not exist."]}),"\n",(0,o.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-c",children:"new playerobjectid = CreatePlayerObject(playerid, 985, 1003.39154, -643.33423, 122.35060,   0.00000, 1.00000, 24.00000);\nMovePlayerObject(playerid, playerobjectid, 1003.3915, -643.3342, 114.5122,  0.8);\n\nSetPlayerObjectMoveSpeed(playerid, playerobjectid, 1.5);\n// Move speed changed from 0.8 to 1.5\n"})}),"\n",(0,o.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"MovePlayerObject",children:"MovePlayerObject"}),": Move a player object to a new position with a set speed."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"GetPlayerObjectMoveSpeed",children:"GetPlayerObjectMoveSpeed"}),": Get the move speed of a player-object."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"SetObjectMoveSpeed",children:"SetObjectMoveSpeed"}),": Set the move speed of an object."]}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return c},a:function(){return l}});var n=r(67294);let o={},i=n.createContext(o);function l(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);