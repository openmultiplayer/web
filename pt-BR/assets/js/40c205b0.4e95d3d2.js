"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["3946"],{22374:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>i,metadata:()=>c,assets:()=>d,toc:()=>o,contentTitle:()=>s});var c=JSON.parse('{"id":"scripting/functions/GetObjectAttachedData","title":"GetObjectAttachedData","description":"Get the attachment data of an object.","source":"@site/docs/scripting/functions/GetObjectAttachedData.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetObjectAttachedData","permalink":"/pt-BR/docs/scripting/functions/GetObjectAttachedData","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetObjectAttachedData.md","tags":[{"inline":true,"label":"object","permalink":"/pt-BR/docs/tags/object"}],"version":"current","frontMatter":{"title":"GetObjectAttachedData","sidebar_label":"GetObjectAttachedData","description":"Get the attachment data of an object.","tags":["object"]},"sidebar":"docsSidebar","previous":{"title":"GetNetworkStats","permalink":"/pt-BR/docs/scripting/functions/GetNetworkStats"},"next":{"title":"GetObjectAttachedOffset","permalink":"/pt-BR/docs/scripting/functions/GetObjectAttachedOffset"}}'),a=n("85893"),r=n("50065");let i={title:"GetObjectAttachedData",sidebar_label:"GetObjectAttachedData",description:"Get the attachment data of an object.",tags:["object"]},s=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function l(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"Get the attachment data of an object."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"objectid"}),(0,a.jsx)(t.td,{children:"The ID of the object to get the attachment data of"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"&parentVehicle"}),(0,a.jsx)(t.td,{children:"A variable in which to store the parentVehicle ID, passed by reference."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"&parentObject"}),(0,a.jsx)(t.td,{children:"A variable in which to store the parentObject ID, passed by reference."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"&parentPlayer"}),(0,a.jsx)(t.td,{children:"A variable in which to store the parentPlayer ID, passed by reference."})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"true"})," - The function was executed successfully."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"false"})," - The function failed to execute. The object specified does not exist."]}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-c",children:"new \n    parentVehicle,\n    parentObject,\n    parentPlayer;\n\nGetObjectAttachedData(objectid, parentVehicle, parentObject, parentPlayer);\n"})}),"\n",(0,a.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetObjectAttachedOffset",children:"GetObjectAttachedOffset"}),": Get the attachment offset and rotation of an object."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetPlayerObjectAttachedData",children:"GetPlayerObjectAttachedData"}),": Get the attachment data of a player-object."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return i}});var c=n(67294);let a={},r=c.createContext(a);function i(e){let t=c.useContext(r);return c.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),c.createElement(r.Provider,{value:t},e.children)}}}]);