"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["78014"],{56235:function(e,i,n){n.r(i),n.d(i,{default:()=>u,frontMatter:()=>c,metadata:()=>r,assets:()=>d,toc:()=>a,contentTitle:()=>l});var r=JSON.parse('{"id":"scripting/functions/IsValidPickup","title":"IsValidPickup","description":"\u68C0\u6D4B\u62FE\u53D6\u7269\u662F\u5426\u6709\u6548\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/IsValidPickup.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsValidPickup","permalink":"/zh-CN/docs/scripting/functions/IsValidPickup","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/IsValidPickup.md","tags":[{"inline":true,"label":"\u62FE\u53D6\u7269","permalink":"/zh-CN/docs/tags/\u62FE\u53D6\u7269"}],"version":"current","frontMatter":{"title":"IsValidPickup","sidebar_label":"IsValidPickup","description":"\u68C0\u6D4B\u62FE\u53D6\u7269\u662F\u5426\u6709\u6548\u3002","tags":["\u62FE\u53D6\u7269"]},"sidebar":"docsSidebar","previous":{"title":"IsValidObject","permalink":"/zh-CN/docs/scripting/functions/IsValidObject"},"next":{"title":"IsValidPlayer3DTextLabel","permalink":"/zh-CN/docs/scripting/functions/IsValidPlayer3DTextLabel"}}'),t=n("85893"),s=n("50065");let c={title:"IsValidPickup",sidebar_label:"IsValidPickup",description:"\u68C0\u6D4B\u62FE\u53D6\u7269\u662F\u5426\u6709\u6548\u3002",tags:["\u62FE\u53D6\u7269"]},l=void 0,d={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B\u4EE3\u7801",id:"\u793A\u4F8B\u4EE3\u7801",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function o(e){let i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{VersionWarnZH_CN:n}=i;return n||function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarnZH_CN",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,t.jsx)(i.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(i.p,{children:"\u68C0\u6D4B\u6307\u5B9A\u62FE\u53D6\u7269 ID \u662F\u5426\u6709\u6548\u3002"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"\u53C2\u6570\u540D"}),(0,t.jsx)(i.th,{children:"\u8BF4\u660E"})]})}),(0,t.jsx)(i.tbody,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"pickupid"}),(0,t.jsx)(i.td,{children:"\u8981\u68C0\u6D4B\u7684\u62FE\u53D6\u7269 ID"})]})})]}),"\n",(0,t.jsx)(i.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,t.jsxs)(i.p,{children:["\u5F53\u62FE\u53D6\u7269\u6709\u6548\u65F6\u8FD4\u56DE ",(0,t.jsx)(i.strong,{children:"true"}),"\uFF0C\u65E0\u6548\u65F6\u8FD4\u56DE ",(0,t.jsx)(i.strong,{children:"false"})]}),"\n",(0,t.jsx)(i.h2,{id:"\u793A\u4F8B\u4EE3\u7801",children:"\u793A\u4F8B\u4EE3\u7801"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-c",children:"new g_Pickup; // \u5168\u5C40\u62FE\u53D6\u7269\u5B58\u50A8\u53D8\u91CF\n\npublic OnGameModeInit()\n{\n    // \u5728\u5750\u6807(1503.33,1432.35,10.11)\u521B\u5EFA\u9632\u5F39\u8863\u62FE\u53D6\u7269\n    g_Pickup = CreatePickup(1242, 2, 1503.3359, 1432.3585, 10.1191, -1);\n\n    if (IsValidPickup(g_Pickup))\n    {\n        // \u6267\u884C\u6709\u6548\u72B6\u6001\u5904\u7406\n    }\n    return 1;\n}\n"})}),"\n",(0,t.jsx)(i.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"CreatePickup",children:"CreatePickup"}),": \u521B\u5EFA\u5168\u5C40\u62FE\u53D6\u7269"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"AddStaticPickup",children:"AddStaticPickup"}),": \u6DFB\u52A0\u9759\u6001\u62FE\u53D6\u7269"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"DestroyPickup",children:"DestroyPickup"}),": \u9500\u6BC1\u62FE\u53D6\u7269"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"IsPickupStreamedIn",children:"IsPickupStreamedIn"}),": \u68C0\u6D4B\u73A9\u5BB6\u662F\u5426\u52A0\u8F7D\u8BE5\u62FE\u53D6\u7269"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"IsPickupHiddenForPlayer",children:"IsPickupHiddenForPlayer"}),": \u68C0\u6D4B\u62FE\u53D6\u7269\u5BF9\u73A9\u5BB6\u662F\u5426\u9690\u85CF"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"SetPickupPos",children:"SetPickupPos"}),": \u8BBE\u7F6E\u62FE\u53D6\u7269\u5750\u6807"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"GetPickupPos",children:"GetPickupPos"}),": \u83B7\u53D6\u62FE\u53D6\u7269\u5750\u6807"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"SetPickupModel",children:"SetPickupModel"}),": \u8BBE\u7F6E\u62FE\u53D6\u7269\u6A21\u578B"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"GetPickupModel",children:"GetPickupModel"}),": \u83B7\u53D6\u62FE\u53D6\u7269\u6A21\u578B ID"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"SetPickupType",children:"SetPickupType"}),": \u8BBE\u7F6E\u62FE\u53D6\u7269\u7C7B\u578B"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"GetPickupType",children:"GetPickupType"}),": \u83B7\u53D6\u62FE\u53D6\u7269\u7C7B\u578B"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"SetPickupVirtualWorld",children:"SetPickupVirtualWorld"}),": \u8BBE\u7F6E\u62FE\u53D6\u7269\u865A\u62DF\u4E16\u754C"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"GetPickupVirtualWorld",children:"GetPickupVirtualWorld"}),": \u83B7\u53D6\u62FE\u53D6\u7269\u6240\u5728\u865A\u62DF\u4E16\u754C"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"ShowPickupForPlayer",children:"ShowPickupForPlayer"}),": \u4E3A\u73A9\u5BB6\u663E\u793A\u62FE\u53D6\u7269"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"HidePickupForPlayer",children:"HidePickupForPlayer"}),": \u4E3A\u73A9\u5BB6\u9690\u85CF\u62FE\u53D6\u7269"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"SetPickupForPlayer",children:"SetPickupForPlayer"}),": \u4E3A\u73A9\u5BB6\u81EA\u5B9A\u4E49\u62FE\u53D6\u7269\u5C5E\u6027"]}),"\n"]})]})}function u(e={}){let{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return l},a:function(){return c}});var r=n(67294);let t={},s=r.createContext(t);function c(e){let i=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(s.Provider,{value:i},e.children)}}}]);