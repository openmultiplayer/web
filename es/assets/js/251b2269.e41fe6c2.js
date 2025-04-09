"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["80661"],{48962:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>o,assets:()=>a,toc:()=>l,contentTitle:()=>c});var o=JSON.parse('{"id":"scripting/functions/GetObjectMovingTargetPos","title":"GetObjectMovingTargetPos","description":"Get the move target position of an object.","source":"@site/docs/scripting/functions/GetObjectMovingTargetPos.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetObjectMovingTargetPos","permalink":"/es/docs/scripting/functions/GetObjectMovingTargetPos","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetObjectMovingTargetPos.md","tags":[{"inline":true,"label":"object","permalink":"/es/docs/tags/object"}],"version":"current","frontMatter":{"title":"GetObjectMovingTargetPos","sidebar_label":"GetObjectMovingTargetPos","description":"Get the move target position of an object.","tags":["object"]},"sidebar":"docsSidebar","previous":{"title":"GetObjectMoveSpeed","permalink":"/es/docs/scripting/functions/GetObjectMoveSpeed"},"next":{"title":"GetObjectMovingTargetRot","permalink":"/es/docs/scripting/functions/GetObjectMovingTargetRot"}}'),r=n("85893"),i=n("50065");let s={title:"GetObjectMovingTargetPos",sidebar_label:"GetObjectMovingTargetPos",description:"Get the move target position of an object.",tags:["object"]},c=void 0,a={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Get the move target position of an object."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"objectid"}),(0,r.jsx)(t.td,{children:"The ID of the object to get the move target position of."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["&Float",":targetX"]}),(0,r.jsx)(t.td,{children:"A float variable in which to store the targetX coordinate, passed by reference."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["&Float",":targetY"]}),(0,r.jsx)(t.td,{children:"A float variable in which to store the targetY coordinate, passed by reference."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["&Float",":targetZ"]}),(0,r.jsx)(t.td,{children:"A float variable in which to store the targetZ coordinate, passed by reference."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"true"})," - The function was executed successfully."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"false"})," - The function failed to execute. The object specified does not exist."]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:"new objectid = CreateObject(985, 1003.39154, -643.33423, 122.35060,   0.00000, 1.00000, 24.00000);\nMoveObject(objectid, 1003.3915, -643.3342, 114.5122,  0.8);\n\nnew \n    Float:targetX,\n    Float:targetY,\n    Float:targetZ;\n\nGetObjectMovingTargetPos(objectid, targetX, targetY, targetZ);\n// targetX = 1003.3915\n// targetY = -643.3342\n// targetZ = 114.5122\n"})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetObjectMovingTargetRot",children:"GetObjectMovingTargetRot"}),": Get the move target rotation of an object."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetPlayerObjectMovingTargetPos",children:"GetPlayerObjectMovingTargetPos"}),": Get the move target position of a player-object."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return s}});var o=n(67294);let r={},i=o.createContext(r);function s(e){let t=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);