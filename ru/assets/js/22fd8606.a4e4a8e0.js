"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["41065"],{3786:function(t,e,n){n.r(e),n.d(e,{default:()=>h,frontMatter:()=>c,metadata:()=>o,assets:()=>a,toc:()=>l,contentTitle:()=>s});var o=JSON.parse('{"id":"scripting/functions/GetObjectMovingTargetRot","title":"GetObjectMovingTargetRot","description":"Get the move target rotation of an object.","source":"@site/docs/scripting/functions/GetObjectMovingTargetRot.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetObjectMovingTargetRot","permalink":"/ru/docs/scripting/functions/GetObjectMovingTargetRot","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetObjectMovingTargetRot.md","tags":[{"inline":true,"label":"object","permalink":"/ru/docs/tags/object"}],"version":"current","frontMatter":{"title":"GetObjectMovingTargetRot","sidebar_label":"GetObjectMovingTargetRot","description":"Get the move target rotation of an object.","tags":["object"]},"sidebar":"docsSidebar","previous":{"title":"GetObjectMovingTargetPos","permalink":"/ru/docs/scripting/functions/GetObjectMovingTargetPos"},"next":{"title":"GetObjectPos","permalink":"/ru/docs/scripting/functions/GetObjectPos"}}'),r=n("85893"),i=n("50065");let c={title:"GetObjectMovingTargetRot",sidebar_label:"GetObjectMovingTargetRot",description:"Get the move target rotation of an object.",tags:["object"]},s=void 0,a={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(t){let e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...t.components},{VersionWarn:n}=e;return n||function(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,r.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(e.p,{children:"Get the move target rotation of an object."}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Name"}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"objectid"}),(0,r.jsx)(e.td,{children:"The ID of the object to get the move target rotation of."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsxs)(e.td,{children:["&Float",":rotationX"]}),(0,r.jsx)(e.td,{children:"A float variable in which to store the rotationX coordinate, passed by reference."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsxs)(e.td,{children:["&Float",":rotationY"]}),(0,r.jsx)(e.td,{children:"A float variable in which to store the rotationY coordinate, passed by reference."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsxs)(e.td,{children:["&Float",":rotationZ"]}),(0,r.jsx)(e.td,{children:"A float variable in which to store the rotationZ coordinate, passed by reference."})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"true"})," - The function was executed successfully."]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"false"})," - The function failed to execute. The object specified does not exist."]}),"\n",(0,r.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:"new objectid = CreateObject(968, 1023.79541, -943.75879, 42.31450,   0.00000, 0.00000, 10.00000);\nMoveObject(objectid, 1023.79541, -943.75879, 42.31450,  0.8,   0.00000, -90.00000, 10.00000);\n\nnew \n    Float:rotationX,\n    Float:rotationY,\n    Float:rotationZ;\n\nGetObjectMovingTargetRot(objectid, rotationX, rotationY, rotationZ);\n// rotationX = 0.00000\n// rotationY = -90.00000\n// rotationZ = 10.00000\n"})}),"\n",(0,r.jsx)(e.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"GetObjectMovingTargetPos",children:"GetObjectMovingTargetPos"}),": Get the move target position of an object."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"GetPlayerObjectMovingTargetRot",children:"GetPlayerObjectMovingTargetRot"}),": Get the move target rotation of a player-object."]}),"\n"]})]})}function h(t={}){let{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(d,{...t})}):d(t)}},50065:function(t,e,n){n.d(e,{Z:function(){return s},a:function(){return c}});var o=n(67294);let r={},i=o.createContext(r);function c(t){let e=o.useContext(i);return o.useMemo(function(){return"function"==typeof t?t(e):{...e,...t}},[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:c(t.components),o.createElement(i.Provider,{value:e},t.children)}}}]);