"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["99346"],{66453:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>o,metadata:()=>i,assets:()=>c,toc:()=>r,contentTitle:()=>a});var i=JSON.parse('{"id":"scripting/functions/SetObjectsDefaultCameraCollision","title":"SetObjectsDefaultCameraCollision","description":"Allows camera collisions with newly created objects to be disabled by default.","source":"@site/docs/scripting/functions/SetObjectsDefaultCameraCollision.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetObjectsDefaultCameraCollision","permalink":"/hu/docs/scripting/functions/SetObjectsDefaultCameraCollision","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetObjectsDefaultCameraCollision.md","tags":[{"inline":true,"label":"object","permalink":"/hu/docs/tags/object"},{"inline":true,"label":"camera","permalink":"/hu/docs/tags/camera"}],"version":"current","frontMatter":{"title":"SetObjectsDefaultCameraCollision","sidebar_label":"SetObjectsDefaultCameraCollision","description":"Allows camera collisions with newly created objects to be disabled by default.","tags":["object","camera"]},"sidebar":"docsSidebar","previous":{"title":"SetObjectsDefaultCameraCol","permalink":"/hu/docs/scripting/functions/SetObjectsDefaultCameraCol"},"next":{"title":"SetPVarFloat","permalink":"/hu/docs/scripting/functions/SetPVarFloat"}}'),s=n("85893"),l=n("50065");let o={title:"SetObjectsDefaultCameraCollision",sidebar_label:"SetObjectsDefaultCameraCollision",description:"Allows camera collisions with newly created objects to be disabled by default.",tags:["object","camera"]},a=void 0,c={},r=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Allows camera collisions with newly created objects to be disabled by default."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["bool",":disable"]}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"true"})," to disable camera collisions for newly created objects and ",(0,s.jsx)(t.code,{children:"false"})," to enable them (enabled by default)."]})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:"Note"}),"\n",(0,s.jsx)(t.p,{children:"This function only affects the camera collision of objects created AFTER its use - it does not toggle existing objects' camera collisions."}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    // Disable camera collision\n    SetObjectsDefaultCameraCollision(true);\n\n    // Create mapped objects\n    CreateObject(...);\n    CreateObject(...);\n    CreateObject(...);\n    CreateObject(...);\n\n    // The above objects will NOT have camera collisions\n\n    // Re-enable camera collisions\n    SetObjectsDefaultCameraCollision(false);\n\n    // Create mapped objects\n    CreateObject(...);\n    CreateObject(...);\n    CreateObject(...);\n    CreateObject(...);\n\n    // The above objects WILL have camera collision\n\n    // BUT, the first set will still NOT have camera collisions\n\n    return 1;\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsx)(t.p,{children:"This function only affects the camera collision of objects created AFTER its use - it does not toggle existing objects' camera collisions."})}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(t.p,{children:"This function ONLY works outside the normal SA map boundaries (past 3000 units)."})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"SetObjectNoCameraCollision",children:"SetObjectNoCameraCollision"}),": Disables collisions between camera and object."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"SetPlayerObjectNoCameraCollision",children:"SetPlayerObjectNoCameraCollision"}),": Disables collisions between camera and player object."]}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return o}});var i=n(67294);let s={},l=i.createContext(s);function o(e){let t=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);