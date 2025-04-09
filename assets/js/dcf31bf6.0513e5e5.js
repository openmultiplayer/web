"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["53643"],{75989:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>c,assets:()=>o,toc:()=>r,contentTitle:()=>a});var c=JSON.parse('{"id":"scripting/callbacks/OnObjectMoved","title":"OnObjectMoved","description":"This callback is called when an object is moved after MoveObject (when it stops moving).","source":"@site/docs/scripting/callbacks/OnObjectMoved.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnObjectMoved","permalink":"/docs/scripting/callbacks/OnObjectMoved","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnObjectMoved.md","tags":[{"inline":true,"label":"object","permalink":"/docs/tags/object"}],"version":"current","frontMatter":{"title":"OnObjectMoved","sidebar_label":"OnObjectMoved","description":"This callback is called when an object is moved after MoveObject (when it stops moving).","tags":["object"]},"sidebar":"docsSidebar","previous":{"title":"OnNPCSpawn","permalink":"/docs/scripting/callbacks/OnNPCSpawn"},"next":{"title":"OnPickupStreamIn","permalink":"/docs/scripting/callbacks/OnPickupStreamIn"}}'),i=n("85893"),l=n("50065");let s={title:"OnObjectMoved",sidebar_label:"OnObjectMoved",description:"This callback is called when an object is moved after MoveObject (when it stops moving).",tags:["object"]},a=void 0,o={},r=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"This callback is called when an object is moved after MoveObject (when it stops moving)."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"objectid"}),(0,i.jsx)(t.td,{children:"The ID of the object that was moved"})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"It is always called first in filterscripts."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'public OnObjectMoved(objectid)\n{\n    printf("Object %d finished moving.", objectid);\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"../functions/SetObjectPos",children:"SetObjectPos"})," does not work when used in this callback. To fix it, recreate the object."]})}),"\n",(0,i.jsx)(t.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,i.jsx)(t.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"OnPlayerObjectMoved",children:"OnPlayerObjectMoved"}),": This callback is called when a player-object stops moving."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsx)(t.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"../functions/MoveObject",children:"MoveObject"}),": Move an object."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"../functions/MovePlayerObject",children:"MovePlayerObject"}),": Move a player object."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"../functions/IsObjectMoving",children:"IsObjectMoving"}),": Check if the object is moving."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"../functions/StopObject",children:"StopObject"}),": Stop an object from moving."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return s}});var c=n(67294);let i={},l=c.createContext(i);function s(e){let t=c.useContext(l);return c.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),c.createElement(l.Provider,{value:t},e.children)}}}]);