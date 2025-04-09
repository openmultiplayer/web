"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["86478"],{29344:function(e,t,r){r.r(t),r.d(t,{default:()=>p,frontMatter:()=>a,metadata:()=>n,assets:()=>l,toc:()=>c,contentTitle:()=>s});var n=JSON.parse('{"id":"scripting/functions/GetPlayerObjectMovingTargetPos","title":"GetPlayerObjectMovingTargetPos","description":"Get the move target position of a player-object.","source":"@site/docs/scripting/functions/GetPlayerObjectMovingTargetPos.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerObjectMovingTargetPos","permalink":"/fil/docs/scripting/functions/GetPlayerObjectMovingTargetPos","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerObjectMovingTargetPos.md","tags":[{"inline":true,"label":"player","permalink":"/fil/docs/tags/player"},{"inline":true,"label":"object","permalink":"/fil/docs/tags/object"},{"inline":true,"label":"playerobject","permalink":"/fil/docs/tags/playerobject"}],"version":"current","frontMatter":{"title":"GetPlayerObjectMovingTargetPos","sidebar_label":"GetPlayerObjectMovingTargetPos","description":"Get the move target position of a player-object.","tags":["player","object","playerobject"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerObjectMoveSpeed","permalink":"/fil/docs/scripting/functions/GetPlayerObjectMoveSpeed"},"next":{"title":"GetPlayerObjectMovingTargetRot","permalink":"/fil/docs/scripting/functions/GetPlayerObjectMovingTargetRot"}}'),i=r("85893"),o=r("50065");let a={title:"GetPlayerObjectMovingTargetPos",sidebar_label:"GetPlayerObjectMovingTargetPos",description:"Get the move target position of a player-object.",tags:["player","object","playerobject"]},s=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components},{VersionWarn:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Get the move target position of a player-object."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"The ID of the player."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"objectid"}),(0,i.jsx)(t.td,{children:"The ID of the player-object to get the move target position of."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["&Float",":targetX"]}),(0,i.jsx)(t.td,{children:"A float variable in which to store the targetX coordinate, passed by reference."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["&Float",":targetY"]}),(0,i.jsx)(t.td,{children:"A float variable in which to store the targetY coordinate, passed by reference."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["&Float",":targetZ"]}),(0,i.jsx)(t.td,{children:"A float variable in which to store the targetZ coordinate, passed by reference."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"true"})," - The function was executed successfully."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"false"})," - The function failed to execute. The object specified does not exist."]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"new playerobjectid = CreatePlayerObject(playerid, 985, 1003.39154, -643.33423, 122.35060,   0.00000, 1.00000, 24.00000);\nMovePlayerObject(playerid, playerobjectid, 1003.3915, -643.3342, 114.5122,  0.8);\n\nnew \n    Float:targetX,\n    Float:targetY,\n    Float:targetZ;\n\nGetPlayerObjectMovingTargetPos(playerid, playerobjectid, targetX, targetY, targetZ);\n// targetX = 1003.3915\n// targetY = -643.3342\n// targetZ = 114.5122\n"})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetPlayerObjectMovingTargetRot",children:"GetPlayerObjectMovingTargetRot"}),": Get the move target rotation of a player-object."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetObjectMovingTargetPos",children:"GetObjectMovingTargetPos"}),": Get the move target position of an object."]}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return s},a:function(){return a}});var n=r(67294);let i={},o=n.createContext(i);function a(e){let t=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);