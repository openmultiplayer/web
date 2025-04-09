"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["98235"],{74658:function(e,t,n){n.r(t),n.d(t,{default:()=>p,frontMatter:()=>s,metadata:()=>o,assets:()=>d,toc:()=>l,contentTitle:()=>r});var o=JSON.parse('{"id":"scripting/functions/SetObjectMoveSpeed","title":"SetObjectMoveSpeed","description":"Set the move speed of an object.","source":"@site/docs/scripting/functions/SetObjectMoveSpeed.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetObjectMoveSpeed","permalink":"/tr/docs/scripting/functions/SetObjectMoveSpeed","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetObjectMoveSpeed.md","tags":[{"inline":true,"label":"object","permalink":"/tr/docs/tags/object"}],"version":"current","frontMatter":{"title":"SetObjectMoveSpeed","sidebar_label":"SetObjectMoveSpeed","description":"Set the move speed of an object.","tags":["object"]},"sidebar":"docsSidebar","previous":{"title":"SetObjectMaterialText","permalink":"/tr/docs/scripting/functions/SetObjectMaterialText"},"next":{"title":"SetObjectNoCameraCol","permalink":"/tr/docs/scripting/functions/SetObjectNoCameraCol"}}'),c=n("85893"),i=n("50065");let s={title:"SetObjectMoveSpeed",sidebar_label:"SetObjectMoveSpeed",description:"Set the move speed of an object.",tags:["object"]},r=void 0,d={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function a(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,c.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,c.jsx)(t.p,{children:"Set the move speed of an object."}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:"Name"}),(0,c.jsx)(t.th,{children:"Description"})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"objectid"}),(0,c.jsx)(t.td,{children:"The ID of the object to set the move speed of."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsxs)(t.td,{children:["Float",":speed"]}),(0,c.jsx)(t.td,{children:"The speed at which to move the object (units per second)."})]})]})]}),"\n",(0,c.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:"true"})," - The function was executed successfully."]}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:"false"})," - The function failed to execute. The object specified does not exist."]}),"\n",(0,c.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-c",children:"new objectid = CreateObject(985, 1003.39154, -643.33423, 122.35060,   0.00000, 1.00000, 24.00000);\nMoveObject(objectid, 1003.3915, -643.3342, 114.5122,  0.8);\n\nSetObjectMoveSpeed(objectid, 1.5);\n// Move speed changed from 0.8 to 1.5\n"})}),"\n",(0,c.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"MoveObject",children:"MoveObject"}),": Move an object to a new position with a set speed."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"GetObjectMoveSpeed",children:"GetObjectMoveSpeed"}),": Get the move speed of an object."]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"SetPlayerObjectMoveSpeed",children:"SetPlayerObjectMoveSpeed"}),": Set the move speed of a player-object."]}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return s}});var o=n(67294);let c={},i=o.createContext(c);function s(e){let t=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);