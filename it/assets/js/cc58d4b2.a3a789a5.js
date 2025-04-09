"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["59589"],{94967:function(e,i,n){n.r(i),n.d(i,{default:()=>b,frontMatter:()=>o,metadata:()=>t,assets:()=>c,toc:()=>r,contentTitle:()=>l});var t=JSON.parse('{"id":"scripting/functions/HasObjectCameraCollision","title":"HasObjectCameraCollision","description":"Checks if an object has camera collision enabled. (SetObjectNoCameraCollision)","source":"@site/docs/scripting/functions/HasObjectCameraCollision.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/HasObjectCameraCollision","permalink":"/it/docs/scripting/functions/HasObjectCameraCollision","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/HasObjectCameraCollision.md","tags":[{"inline":true,"label":"object","permalink":"/it/docs/tags/object"}],"version":"current","frontMatter":{"title":"HasObjectCameraCollision","sidebar_label":"HasObjectCameraCollision","description":"Checks if an object has camera collision enabled. (SetObjectNoCameraCollision)","tags":["object"]},"sidebar":"docsSidebar","previous":{"title":"HasGameText","permalink":"/it/docs/scripting/functions/HasGameText"},"next":{"title":"HasPlayerObjectCameraCollision","permalink":"/it/docs/scripting/functions/HasPlayerObjectCameraCollision"}}'),s=n("85893"),a=n("50065");let o={title:"HasObjectCameraCollision",sidebar_label:"HasObjectCameraCollision",description:"Checks if an object has camera collision enabled. (SetObjectNoCameraCollision)",tags:["object"]},l=void 0,c={},r=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components},{VersionWarn:n}=i;return n||function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,s.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(i.p,{children:["Checks if an object has camera collision enabled. (",(0,s.jsx)(i.a,{href:"SetObjectNoCameraCollision",children:"SetObjectNoCameraCollision"}),")"]}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Name"}),(0,s.jsx)(i.th,{children:"Description"})]})}),(0,s.jsx)(i.tbody,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"objectid"}),(0,s.jsx)(i.td,{children:"The ID of the object to check."})]})})]}),"\n",(0,s.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"true"})," - Object camera collision is enable."]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"false"})," - Object camera collision is disable."]}),"\n",(0,s.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-c",children:'if (HasObjectCameraCollision(objectid))\n{\n    printf("Object %d camera collision: enable", objectid);\n}\nelse\n{\n    printf("Object %d camera collision: disable", objectid);\n}\n'})}),"\n",(0,s.jsx)(i.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"SetObjectNoCameraCollision",children:"SetObjectNoCameraCollision"}),": Disable collisions between players' cameras and the specified object."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"HasPlayerObjectCameraCollision",children:"HasPlayerObjectCameraCollision"}),": Checks if a player-object has camera collision enabled."]}),"\n"]})]})}function b(e={}){let{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return l},a:function(){return o}});var t=n(67294);let s={},a=t.createContext(s);function o(e){let i=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);