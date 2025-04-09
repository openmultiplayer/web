"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["50520"],{61350:function(t,e,n){n.r(e),n.d(e,{default:()=>f,frontMatter:()=>i,metadata:()=>o,assets:()=>a,toc:()=>d,contentTitle:()=>r});var o=JSON.parse('{"id":"scripting/functions/GetObjectAttachedOffset","title":"GetObjectAttachedOffset","description":"Get the attachment offset and rotation of an object.","source":"@site/docs/scripting/functions/GetObjectAttachedOffset.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetObjectAttachedOffset","permalink":"/es/docs/scripting/functions/GetObjectAttachedOffset","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetObjectAttachedOffset.md","tags":[{"inline":true,"label":"object","permalink":"/es/docs/tags/object"}],"version":"current","frontMatter":{"title":"GetObjectAttachedOffset","sidebar_label":"GetObjectAttachedOffset","description":"Get the attachment offset and rotation of an object.","tags":["object"]},"sidebar":"docsSidebar","previous":{"title":"GetObjectAttachedData","permalink":"/es/docs/scripting/functions/GetObjectAttachedData"},"next":{"title":"GetObjectDrawDistance","permalink":"/es/docs/scripting/functions/GetObjectDrawDistance"}}'),s=n("85893"),c=n("50065");let i={title:"GetObjectAttachedOffset",sidebar_label:"GetObjectAttachedOffset",description:"Get the attachment offset and rotation of an object.",tags:["object"]},r=void 0,a={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function l(t){let e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...t.components},{VersionWarn:n}=e;return n||function(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,s.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(e.p,{children:"Get the attachment offset and rotation of an object."}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Name"}),(0,s.jsx)(e.th,{children:"Description"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"objectid"}),(0,s.jsx)(e.td,{children:"The ID of the object to get the offset and rotation of."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsxs)(e.td,{children:["&Float",":offsetX"]}),(0,s.jsx)(e.td,{children:"A float variable in which to store the offsetX coordinate, passed by reference."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsxs)(e.td,{children:["&Float",":offsetY"]}),(0,s.jsx)(e.td,{children:"A float variable in which to store the offsetY coordinate, passed by reference."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsxs)(e.td,{children:["&Float",":offsetZ"]}),(0,s.jsx)(e.td,{children:"A float variable in which to store the offsetZ coordinate, passed by reference."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsxs)(e.td,{children:["&Float",":rotationX"]}),(0,s.jsx)(e.td,{children:"A float variable in which to store the rotationX coordinate, passed by reference."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsxs)(e.td,{children:["&Float",":rotationY"]}),(0,s.jsx)(e.td,{children:"A float variable in which to store the rotationY coordinate, passed by reference."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsxs)(e.td,{children:["&Float",":rotationZ"]}),(0,s.jsx)(e.td,{children:"A float variable in which to store the rotationZ coordinate, passed by reference."})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"true"})," - The function was executed successfully."]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"false"})," - The function failed to execute. The object specified does not exist."]}),"\n",(0,s.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:"new \n    Float:offsetX,\n    Float:offsetY,\n    Float:offsetZ,\n    Float:rotationX,\n    Float:rotationY,\n    Float:rotationZ;\n\nGetObjectAttachedOffset(objectid, offsetX, offsetY, offsetZ, rotationX, rotationY, rotationZ);\n"})}),"\n",(0,s.jsx)(e.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"GetObjectAttachedData",children:"GetObjectAttachedData"}),": Get the attachment data of an object."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"GetPlayerObjectAttachedOffset",children:"GetPlayerObjectAttachedOffset"}),": Get the attachment offset and rotation of a player-object."]}),"\n"]})]})}function f(t={}){let{wrapper:e}={...(0,c.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(l,{...t})}):l(t)}},50065:function(t,e,n){n.d(e,{Z:function(){return r},a:function(){return i}});var o=n(67294);let s={},c=o.createContext(s);function i(t){let e=o.useContext(c);return o.useMemo(function(){return"function"==typeof t?t(e):{...e,...t}},[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:i(t.components),o.createElement(c.Provider,{value:e},t.children)}}}]);