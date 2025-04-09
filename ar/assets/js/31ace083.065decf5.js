"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["31026"],{52690:function(e,t,n){n.r(t),n.d(t,{default:()=>p,frontMatter:()=>s,metadata:()=>o,assets:()=>d,toc:()=>l,contentTitle:()=>r});var o=JSON.parse('{"id":"scripting/functions/GetObjectMoveSpeed","title":"GetObjectMoveSpeed","description":"Get the move speed of an object.","source":"@site/docs/scripting/functions/GetObjectMoveSpeed.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetObjectMoveSpeed","permalink":"/ar/docs/scripting/functions/GetObjectMoveSpeed","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetObjectMoveSpeed.md","tags":[{"inline":true,"label":"object","permalink":"/ar/docs/tags/object"}],"version":"current","frontMatter":{"title":"GetObjectMoveSpeed","sidebar_label":"GetObjectMoveSpeed","description":"Get the move speed of an object.","tags":["object"]},"sidebar":"docsSidebar","previous":{"title":"GetObjectModel","permalink":"/ar/docs/scripting/functions/GetObjectModel"},"next":{"title":"GetObjectMovingTargetPos","permalink":"/ar/docs/scripting/functions/GetObjectMovingTargetPos"}}'),i=n("85893"),c=n("50065");let s={title:"GetObjectMoveSpeed",sidebar_label:"GetObjectMoveSpeed",description:"Get the move speed of an object.",tags:["object"]},r=void 0,d={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function a(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Get the move speed of an object."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"objectid"}),(0,i.jsx)(t.td,{children:"The ID of the object to get the move speed of."})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"Returns the move speed as float."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"new objectid = CreateObject(985, 1003.39154, -643.33423, 122.35060,   0.00000, 1.00000, 24.00000);\nMoveObject(objectid, 1003.3915, -643.3342, 114.5122,  0.8);\n\nnew Float:moveSpeed = GetObjectMoveSpeed(objectid);\n// moveSpeed = 0.8\n"})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"MoveObject",children:"MoveObject"}),": Move an object to a new position with a set speed."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetObjectMoveSpeed",children:"SetObjectMoveSpeed"}),": Set the move speed of an object."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetPlayerObjectMoveSpeed",children:"GetPlayerObjectMoveSpeed"}),": Get the move speed of a player-object."]}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return s}});var o=n(67294);let i={},c=o.createContext(i);function s(e){let t=o.useContext(c);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(c.Provider,{value:t},e.children)}}}]);