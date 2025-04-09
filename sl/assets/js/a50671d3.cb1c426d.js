"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["80067"],{72759:function(e,l,i){i.r(l),i.d(l,{default:()=>p,frontMatter:()=>r,metadata:()=>a,assets:()=>o,toc:()=>c,contentTitle:()=>s});var a=JSON.parse('{"id":"scripting/functions/HasPlayerObjectCameraCollision","title":"HasPlayerObjectCameraCollision","description":"Checks if a player-object has camera collision enabled. (SetPlayerObjectNoCameraCollision)","source":"@site/docs/scripting/functions/HasPlayerObjectCameraCollision.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/HasPlayerObjectCameraCollision","permalink":"/sl/docs/scripting/functions/HasPlayerObjectCameraCollision","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/HasPlayerObjectCameraCollision.md","tags":[{"inline":true,"label":"player","permalink":"/sl/docs/tags/player"},{"inline":true,"label":"object","permalink":"/sl/docs/tags/object"},{"inline":true,"label":"playerobject","permalink":"/sl/docs/tags/playerobject"}],"version":"current","frontMatter":{"title":"HasPlayerObjectCameraCollision","sidebar_label":"HasPlayerObjectCameraCollision","description":"Checks if a player-object has camera collision enabled. (SetPlayerObjectNoCameraCollision)","tags":["player","object","playerobject"]},"sidebar":"docsSidebar","previous":{"title":"HasObjectCameraCollision","permalink":"/sl/docs/scripting/functions/HasObjectCameraCollision"},"next":{"title":"HasVehicleBeenOccupied","permalink":"/sl/docs/scripting/functions/HasVehicleBeenOccupied"}}'),n=i("85893"),t=i("50065");let r={title:"HasPlayerObjectCameraCollision",sidebar_label:"HasPlayerObjectCameraCollision",description:"Checks if a player-object has camera collision enabled. (SetPlayerObjectNoCameraCollision)",tags:["player","object","playerobject"]},s=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let l={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components},{VersionWarn:i}=l;return i||function(e,l){throw Error("Expected "+(l?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i,{version:"omp v1.1.0.2612"}),"\n",(0,n.jsx)(l.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(l.p,{children:["Checks if a player-object has camera collision enabled. (",(0,n.jsx)(l.a,{href:"SetPlayerObjectNoCameraCollision",children:"SetPlayerObjectNoCameraCollision"}),")"]}),"\n",(0,n.jsxs)(l.table,{children:[(0,n.jsx)(l.thead,{children:(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.th,{children:"Name"}),(0,n.jsx)(l.th,{children:"Description"})]})}),(0,n.jsxs)(l.tbody,{children:[(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"playerid"}),(0,n.jsx)(l.td,{children:"The ID of the player."})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"objectid"}),(0,n.jsx)(l.td,{children:"The ID of the object to check."})]})]})]}),"\n",(0,n.jsx)(l.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(l.p,{children:[(0,n.jsx)(l.code,{children:"true"})," - Player-object camera collision is enable."]}),"\n",(0,n.jsxs)(l.p,{children:[(0,n.jsx)(l.code,{children:"false"})," - Player-object camera collision is disable."]}),"\n",(0,n.jsx)(l.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-c",children:'if (HasPlayerObjectCameraCollision(playerid, playerobjectid))\n{\n    printf("Player: %d  Object: %d  Camera collision: enable", playerid, playerobjectid);\n}\nelse\n{\n    printf("Player: %d  Object: %d  Camera collision: disable", playerid, playerobjectid);\n}\n'})}),"\n",(0,n.jsx)(l.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.a,{href:"SetPlayerObjectNoCameraCollision",children:"SetPlayerObjectNoCameraCollision"}),": Disable collisions between players' cameras and the specified object."]}),"\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.a,{href:"HasObjectCameraCollision",children:"HasObjectCameraCollision"}),": Checks if an object has camera collision enabled."]}),"\n"]})]})}function p(e={}){let{wrapper:l}={...(0,t.a)(),...e.components};return l?(0,n.jsx)(l,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},50065:function(e,l,i){i.d(l,{Z:function(){return s},a:function(){return r}});var a=i(67294);let n={},t=a.createContext(n);function r(e){let l=a.useContext(t);return a.useMemo(function(){return"function"==typeof e?e(l):{...l,...e}},[l,e])}function s(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(t.Provider,{value:l},e.children)}}}]);