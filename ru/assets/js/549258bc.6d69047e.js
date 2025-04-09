"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["41467"],{73728:function(e,t,n){n.r(t),n.d(t,{default:()=>b,frontMatter:()=>l,metadata:()=>i,assets:()=>c,toc:()=>a,contentTitle:()=>r});var i=JSON.parse('{"id":"scripting/functions/SetObjectNoCameraCollision","title":"SetObjectNoCameraCollision","description":"Disable collisions between players\' cameras and the specified object.","source":"@site/docs/scripting/functions/SetObjectNoCameraCollision.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetObjectNoCameraCollision","permalink":"/ru/docs/scripting/functions/SetObjectNoCameraCollision","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetObjectNoCameraCollision.md","tags":[{"inline":true,"label":"object","permalink":"/ru/docs/tags/object"},{"inline":true,"label":"camera","permalink":"/ru/docs/tags/camera"}],"version":"current","frontMatter":{"title":"SetObjectNoCameraCollision","sidebar_label":"SetObjectNoCameraCollision","description":"Disable collisions between players\' cameras and the specified object.","tags":["object","camera"]},"sidebar":"docsSidebar","previous":{"title":"SetObjectNoCameraCol","permalink":"/ru/docs/scripting/functions/SetObjectNoCameraCol"},"next":{"title":"SetObjectPos","permalink":"/ru/docs/scripting/functions/SetObjectPos"}}'),o=n("85893"),s=n("50065");let l={title:"SetObjectNoCameraCollision",sidebar_label:"SetObjectNoCameraCollision",description:"Disable collisions between players' cameras and the specified object.",tags:["object","camera"]},r=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,o.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(t.p,{children:"Disable collisions between players' cameras and the specified object."}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Name"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"objectid"}),(0,o.jsx)(t.td,{children:"The ID of the object to disable camera collisions on."})]})})]}),"\n",(0,o.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"true"})," - The function was executed successfully."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"false"})," - The function failed to execute. The object specified does not exist."]}),"\n",(0,o.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-c",children:"public OnObjectMoved(objectid)\n{\n    new Float:objX, Float:objY, Float:objZ;\n    GetObjectPos(objectid, objX, objY, objZ);\n    if (objX >= 3000.0 || objY >= 3000.0 || objX <= -3000.0 || objY <= -3000.0)\n    {\n        SetObjectNoCameraCollision(objectid);\n    }\n    return 1;\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"This only works outside the map boundaries (past -3000/3000 units on the x and/or y axis)."})}),"\n",(0,o.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"HasObjectCameraCollision",children:"HasObjectCameraCollision"}),": Checks if an object has camera collision enabled."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"SetPlayerObjectNoCameraCollision",children:"SetPlayerObjectNoCameraCollision"}),": Disables collisions between camera and player object."]}),"\n"]})]})}function b(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return l}});var i=n(67294);let o={},s=i.createContext(o);function l(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);