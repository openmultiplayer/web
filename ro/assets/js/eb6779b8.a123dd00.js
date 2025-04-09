"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["6720"],{54729:function(e,t,i){i.r(t),i.d(t,{default:()=>u,frontMatter:()=>c,metadata:()=>n,assets:()=>a,toc:()=>o,contentTitle:()=>l});var n=JSON.parse('{"id":"scripting/functions/DestroyPickup","title":"DestroyPickup","description":"Destroys a pickup created with CreatePickup.","source":"@site/docs/scripting/functions/DestroyPickup.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/DestroyPickup","permalink":"/ro/docs/scripting/functions/DestroyPickup","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/DestroyPickup.md","tags":[{"inline":true,"label":"pickup","permalink":"/ro/docs/tags/pickup"}],"version":"current","frontMatter":{"title":"DestroyPickup","sidebar_label":"DestroyPickup","description":"Destroys a pickup created with CreatePickup.","tags":["pickup"]},"sidebar":"docsSidebar","previous":{"title":"DestroyObject","permalink":"/ro/docs/scripting/functions/DestroyObject"},"next":{"title":"DestroyPlayerObject","permalink":"/ro/docs/scripting/functions/DestroyPlayerObject"}}'),r=i("85893"),s=i("50065");let c={title:"DestroyPickup",sidebar_label:"DestroyPickup",description:"Destroys a pickup created with CreatePickup.",tags:["pickup"]},l=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function p(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Destroys a pickup created with CreatePickup."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"pickup"}),(0,r.jsx)(t.td,{children:"The ID of the pickup to destroy (returned by CreatePickup)."})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"false"})," - The function failed to execute. The pickup specified doesn't exist."]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:"new g_PickupArmour;\n\n// Create a pickup for armor.\ng_PickupArmour = CreatePickup(1242, 2, 1503.3359, 1432.3585, 10.1191);\n\n// Some time later...\nDestroyPickup(g_PickupArmour);\n"})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"CreatePickup",children:"CreatePickup"}),": Create a pickup."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"IsValidPickup",children:"IsValidPickup"}),": Checks if a pickup is valid."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"../callbacks/OnPlayerPickUpPickup",children:"OnPlayerPickUpPickup"}),": Called when a player picks up a pickup."]}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return l},a:function(){return c}});var n=i(67294);let r={},s=n.createContext(r);function c(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);