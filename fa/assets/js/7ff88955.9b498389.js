"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["29174"],{30394:function(e,t,l){l.r(t),l.d(t,{default:()=>h,frontMatter:()=>c,metadata:()=>n,assets:()=>s,toc:()=>o,contentTitle:()=>i});var n=JSON.parse('{"id":"scripting/callbacks/OnPlayerObjectMoved","title":"OnPlayerObjectMoved","description":"This callback is called when a player object is moved after MovePlayerObject (when it stops moving).","source":"@site/docs/scripting/callbacks/OnPlayerObjectMoved.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerObjectMoved","permalink":"/fa/docs/scripting/callbacks/OnPlayerObjectMoved","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerObjectMoved.md","tags":[{"inline":true,"label":"player","permalink":"/fa/docs/tags/player"},{"inline":true,"label":"object","permalink":"/fa/docs/tags/object"},{"inline":true,"label":"playerobject","permalink":"/fa/docs/tags/playerobject"}],"version":"current","frontMatter":{"title":"OnPlayerObjectMoved","sidebar_label":"OnPlayerObjectMoved","description":"This callback is called when a player object is moved after MovePlayerObject (when it stops moving).","tags":["player","object","playerobject"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerLeaveRaceCheckpoint","permalink":"/fa/docs/scripting/callbacks/OnPlayerLeaveRaceCheckpoint"},"next":{"title":"OnPlayerPickUpPickup","permalink":"/fa/docs/scripting/callbacks/OnPlayerPickUpPickup"}}'),a=l("85893"),r=l("50065");let c={title:"OnPlayerObjectMoved",sidebar_label:"OnPlayerObjectMoved",description:"This callback is called when a player object is moved after MovePlayerObject (when it stops moving).",tags:["player","object","playerobject"]},i=void 0,s={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{TipNPCCallbacks:l}=t;return l||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("TipNPCCallbacks",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(t.p,{children:["This callback is called when a player object is moved after ",(0,a.jsx)(t.a,{href:"../functions/MovePlayerObject",children:"MovePlayerObject"})," (when it stops moving)."]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"playerid"}),(0,a.jsx)(t.td,{children:"The playerid the object is assigned to"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"objectid"}),(0,a.jsx)(t.td,{children:"The ID of the player object that was moved"})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(t.p,{children:"It is always called first in filterscripts."}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-c",children:'public OnPlayerObjectMoved(playerid, objectid)\n{\n    printf("Player object moved: objectid: %d playerid: %d", objectid, playerid);\n    return 1;\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,a.jsx)(l,{}),"\n",(0,a.jsx)(t.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,a.jsx)(t.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"OnObjectMoved",children:"OnObjectMoved"}),": This callback is called when an object stops moving."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsx)(t.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"../functions/MovePlayerObject",children:"MovePlayerObject"}),": Move a player object."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"../functions/IsPlayerObjectMoving",children:"IsPlayerObjectMoving"}),": Check if the player object is moving."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"../functions/StopPlayerObject",children:"StopPlayerObject"}),": Stop a player object from moving."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"../functions/CreatePlayerObject",children:"CreatePlayerObject"}),": Create an object for only one player."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"../functions/DestroyPlayerObject",children:"DestroyPlayerObject"}),": Destroy a player object."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},50065:function(e,t,l){l.d(t,{Z:function(){return i},a:function(){return c}});var n=l(67294);let a={},r=n.createContext(a);function c(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);