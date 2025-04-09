"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["80067"],{72759:function(e,i,l){l.r(i),l.d(i,{default:()=>p,frontMatter:()=>r,metadata:()=>t,assets:()=>o,toc:()=>c,contentTitle:()=>s});var t=JSON.parse('{"id":"scripting/functions/HasPlayerObjectCameraCollision","title":"HasPlayerObjectCameraCollision","description":"Checks if a player-object has camera collision enabled. (SetPlayerObjectNoCameraCollision)","source":"@site/docs/scripting/functions/HasPlayerObjectCameraCollision.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/HasPlayerObjectCameraCollision","permalink":"/it/docs/scripting/functions/HasPlayerObjectCameraCollision","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/HasPlayerObjectCameraCollision.md","tags":[{"inline":true,"label":"player","permalink":"/it/docs/tags/player"},{"inline":true,"label":"object","permalink":"/it/docs/tags/object"},{"inline":true,"label":"playerobject","permalink":"/it/docs/tags/playerobject"}],"version":"current","frontMatter":{"title":"HasPlayerObjectCameraCollision","sidebar_label":"HasPlayerObjectCameraCollision","description":"Checks if a player-object has camera collision enabled. (SetPlayerObjectNoCameraCollision)","tags":["player","object","playerobject"]},"sidebar":"docsSidebar","previous":{"title":"HasObjectCameraCollision","permalink":"/it/docs/scripting/functions/HasObjectCameraCollision"},"next":{"title":"HasVehicleBeenOccupied","permalink":"/it/docs/scripting/functions/HasVehicleBeenOccupied"}}'),a=l("85893"),n=l("50065");let r={title:"HasPlayerObjectCameraCollision",sidebar_label:"HasPlayerObjectCameraCollision",description:"Checks if a player-object has camera collision enabled. (SetPlayerObjectNoCameraCollision)",tags:["player","object","playerobject"]},s=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components},{VersionWarn:l}=i;return l||function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l,{version:"omp v1.1.0.2612"}),"\n",(0,a.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(i.p,{children:["Checks if a player-object has camera collision enabled. (",(0,a.jsx)(i.a,{href:"SetPlayerObjectNoCameraCollision",children:"SetPlayerObjectNoCameraCollision"}),")"]}),"\n",(0,a.jsxs)(i.table,{children:[(0,a.jsx)(i.thead,{children:(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.th,{children:"Name"}),(0,a.jsx)(i.th,{children:"Description"})]})}),(0,a.jsxs)(i.tbody,{children:[(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"playerid"}),(0,a.jsx)(i.td,{children:"The ID of the player."})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"objectid"}),(0,a.jsx)(i.td,{children:"The ID of the object to check."})]})]})]}),"\n",(0,a.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.code,{children:"true"})," - Player-object camera collision is enable."]}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.code,{children:"false"})," - Player-object camera collision is disable."]}),"\n",(0,a.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-c",children:'if (HasPlayerObjectCameraCollision(playerid, playerobjectid))\n{\n    printf("Player: %d  Object: %d  Camera collision: enable", playerid, playerobjectid);\n}\nelse\n{\n    printf("Player: %d  Object: %d  Camera collision: disable", playerid, playerobjectid);\n}\n'})}),"\n",(0,a.jsx)(i.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.a,{href:"SetPlayerObjectNoCameraCollision",children:"SetPlayerObjectNoCameraCollision"}),": Disable collisions between players' cameras and the specified object."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.a,{href:"HasObjectCameraCollision",children:"HasObjectCameraCollision"}),": Checks if an object has camera collision enabled."]}),"\n"]})]})}function p(e={}){let{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,i,l){l.d(i,{Z:function(){return s},a:function(){return r}});var t=l(67294);let a={},n=t.createContext(a);function r(e){let i=t.useContext(n);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(n.Provider,{value:i},e.children)}}}]);