"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["41065"],{3786:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>c,metadata:()=>o,assets:()=>a,toc:()=>l,contentTitle:()=>s});var o=JSON.parse('{"id":"scripting/functions/GetObjectMovingTargetRot","title":"GetObjectMovingTargetRot","description":"Get the move target rotation of an object.","source":"@site/docs/scripting/functions/GetObjectMovingTargetRot.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetObjectMovingTargetRot","permalink":"/de/docs/scripting/functions/GetObjectMovingTargetRot","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetObjectMovingTargetRot.md","tags":[{"inline":true,"label":"object","permalink":"/de/docs/tags/object"}],"version":"current","frontMatter":{"title":"GetObjectMovingTargetRot","sidebar_label":"GetObjectMovingTargetRot","description":"Get the move target rotation of an object.","tags":["object"]},"sidebar":"docsSidebar","previous":{"title":"GetObjectMovingTargetPos","permalink":"/de/docs/scripting/functions/GetObjectMovingTargetPos"},"next":{"title":"GetObjectPos","permalink":"/de/docs/scripting/functions/GetObjectPos"}}'),i=n("85893"),r=n("50065");let c={title:"GetObjectMovingTargetRot",sidebar_label:"GetObjectMovingTargetRot",description:"Get the move target rotation of an object.",tags:["object"]},s=void 0,a={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Get the move target rotation of an object."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"objectid"}),(0,i.jsx)(t.td,{children:"The ID of the object to get the move target rotation of."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["&Float",":rotationX"]}),(0,i.jsx)(t.td,{children:"A float variable in which to store the rotationX coordinate, passed by reference."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["&Float",":rotationY"]}),(0,i.jsx)(t.td,{children:"A float variable in which to store the rotationY coordinate, passed by reference."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["&Float",":rotationZ"]}),(0,i.jsx)(t.td,{children:"A float variable in which to store the rotationZ coordinate, passed by reference."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"true"})," - The function was executed successfully."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"false"})," - The function failed to execute. The object specified does not exist."]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"new objectid = CreateObject(968, 1023.79541, -943.75879, 42.31450,   0.00000, 0.00000, 10.00000);\nMoveObject(objectid, 1023.79541, -943.75879, 42.31450,  0.8,   0.00000, -90.00000, 10.00000);\n\nnew \n    Float:rotationX,\n    Float:rotationY,\n    Float:rotationZ;\n\nGetObjectMovingTargetRot(objectid, rotationX, rotationY, rotationZ);\n// rotationX = 0.00000\n// rotationY = -90.00000\n// rotationZ = 10.00000\n"})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetObjectMovingTargetPos",children:"GetObjectMovingTargetPos"}),": Get the move target position of an object."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetPlayerObjectMovingTargetRot",children:"GetPlayerObjectMovingTargetRot"}),": Get the move target rotation of a player-object."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return c}});var o=n(67294);let i={},r=o.createContext(i);function c(e){let t=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);