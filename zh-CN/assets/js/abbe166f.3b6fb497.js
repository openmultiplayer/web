"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["94428"],{14279:function(e,t,n){n.r(t),n.d(t,{default:()=>o,frontMatter:()=>s,metadata:()=>r,assets:()=>c,toc:()=>a,contentTitle:()=>d});var r=JSON.parse('{"id":"scripting/functions/SetPlayerAttachedObject","title":"SetPlayerAttachedObject","description":"\u5C06\u7269\u4F53\u9644\u52A0\u5230\u73A9\u5BB6\u6307\u5B9A\u9AA8\u9ABC\u4E0A\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/SetPlayerAttachedObject.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerAttachedObject","permalink":"/zh-CN/docs/scripting/functions/SetPlayerAttachedObject","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetPlayerAttachedObject.md","tags":[{"inline":true,"label":"\u73A9\u5BB6","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6"},{"inline":true,"label":"\u7269\u4F53","permalink":"/zh-CN/docs/tags/\u7269\u4F53"},{"inline":true,"label":"\u9644\u52A0\u7269","permalink":"/zh-CN/docs/tags/\u9644\u52A0\u7269"}],"version":"current","frontMatter":{"title":"SetPlayerAttachedObject","sidebar_label":"SetPlayerAttachedObject","description":"\u5C06\u7269\u4F53\u9644\u52A0\u5230\u73A9\u5BB6\u6307\u5B9A\u9AA8\u9ABC\u4E0A\u3002","tags":["\u73A9\u5BB6","\u7269\u4F53","\u9644\u52A0\u7269"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerArmour","permalink":"/zh-CN/docs/scripting/functions/SetPlayerArmour"},"next":{"title":"SetPlayerCameraLookAt","permalink":"/zh-CN/docs/scripting/functions/SetPlayerCameraLookAt"}}'),l=n("85893"),i=n("50065");let s={title:"SetPlayerAttachedObject",sidebar_label:"SetPlayerAttachedObject",description:"\u5C06\u7269\u4F53\u9644\u52A0\u5230\u73A9\u5BB6\u6307\u5B9A\u9AA8\u9ABC\u4E0A\u3002",tags:["\u73A9\u5BB6","\u7269\u4F53","\u9644\u52A0\u7269"]},d=void 0,c={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B\u4EE3\u7801",id:"\u793A\u4F8B\u4EE3\u7801",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2},{value:"\u76F8\u5173\u8D44\u6E90",id:"\u76F8\u5173\u8D44\u6E90",level:2}];function h(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(t.p,{children:"\u5C06\u7269\u4F53\u9644\u52A0\u5230\u73A9\u5BB6\u6307\u5B9A\u9AA8\u9ABC\u4E0A\u3002"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"\u53C2\u6570\u540D"}),(0,l.jsx)(t.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"playerid"}),(0,l.jsx)(t.td,{children:"\u76EE\u6807\u73A9\u5BB6 ID"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"index"}),(0,l.jsx)(t.td,{children:"\u9644\u52A0\u69FD\u4F4D\u7D22\u5F15\uFF080-9\uFF09"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"modelid"}),(0,l.jsx)(t.td,{children:"\u8981\u9644\u52A0\u7684\u7269\u4F53\u6A21\u578B ID"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"bone"}),(0,l.jsxs)(t.td,{children:["\u76EE\u6807",(0,l.jsx)(t.a,{href:"../resources/boneid",children:"\u9AA8\u9ABC ID"})]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Float",":offsetX"]}),(0,l.jsx)(t.td,{children:"(\u53EF\u9009) X \u8F74\u4F4D\u7F6E\u504F\u79FB\u91CF"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Float",":offsetY"]}),(0,l.jsx)(t.td,{children:"(\u53EF\u9009) Y \u8F74\u4F4D\u7F6E\u504F\u79FB\u91CF"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Float",":offsetZ"]}),(0,l.jsx)(t.td,{children:"(\u53EF\u9009) Z \u8F74\u4F4D\u7F6E\u504F\u79FB\u91CF"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Float",":rotationX"]}),(0,l.jsx)(t.td,{children:"(\u53EF\u9009) X \u8F74\u65CB\u8F6C\u89D2\u5EA6"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Float",":rotationY"]}),(0,l.jsx)(t.td,{children:"(\u53EF\u9009) Y \u8F74\u65CB\u8F6C\u89D2\u5EA6"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Float",":rotationZ"]}),(0,l.jsx)(t.td,{children:"(\u53EF\u9009) Z \u8F74\u65CB\u8F6C\u89D2\u5EA6"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Float",":scaleX"]}),(0,l.jsx)(t.td,{children:"(\u53EF\u9009) X \u8F74\u7F29\u653E\u6BD4\u4F8B"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Float",":scaleY"]}),(0,l.jsx)(t.td,{children:"(\u53EF\u9009) Y \u8F74\u7F29\u653E\u6BD4\u4F8B"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Float",":scaleZ"]}),(0,l.jsx)(t.td,{children:"(\u53EF\u9009) Z \u8F74\u7F29\u653E\u6BD4\u4F8B"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"materialColour1"}),(0,l.jsx)(t.td,{children:"(\u53EF\u9009) \u7B2C\u4E00\u6750\u8D28\u989C\u8272\uFF08\u6574\u6570\u6216 ARGB \u5341\u516D\u8FDB\u5236\u989C\u8272\u503C\uFF09"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"materialColour2"}),(0,l.jsx)(t.td,{children:"(\u53EF\u9009) \u7B2C\u4E8C\u6750\u8D28\u989C\u8272\uFF08\u6574\u6570\u6216 ARGB \u5341\u516D\u8FDB\u5236\u989C\u8272\u503C\uFF09"})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsxs)(t.p,{children:["\u6210\u529F\u8FD4\u56DE ",(0,l.jsx)(t.strong,{children:"1"}),"\uFF0C\u5931\u8D25\u8FD4\u56DE ",(0,l.jsx)(t.strong,{children:"0"}),"\u3002"]}),"\n",(0,l.jsx)(t.h2,{id:"\u793A\u4F8B\u4EE3\u7801",children:"\u793A\u4F8B\u4EE3\u7801"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:"public OnPlayerSpawn(playerid)\n{\n    SetPlayerAttachedObject(playerid, 3, 1609, 2); // \u5728\u69FD\u4F4D3\u9644\u52A0\u4E4C\u9F9F\u5230\u73A9\u5BB6\u5934\u90E8\n\n    // \u5E26\u989C\u8272\u53C2\u6570\u7684\u9644\u52A0\u793A\u4F8B\uFF1A\n    SetPlayerAttachedObject(playerid, 3, 19487, 2, 0.101, -0.0, 0.0, 5.50, 84.60, 83.7, 1.0, 1.0, 1.0, 0xFF00FF00);\n    // \u7ED9\u73A9\u5BB6\u9644\u52A0\u767D\u8272\u5E3D\u5B50\u5E76\u67D3\u6210\u7EFF\u8272\n    return 1;\n}\n"})}),"\n",(0,l.jsx)(t.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,l.jsx)(t.admonition,{type:"tip",children:(0,l.jsx)(t.p,{children:"\u672C\u51FD\u6570\u4E0E CreateObject/CreatePlayerObject \u7269\u4F53\u6C60\u76F8\u4E92\u72EC\u7ACB"})}),"\n",(0,l.jsx)(t.admonition,{type:"warning",children:(0,l.jsx)(t.p,{children:"\u5355\u4E2A\u73A9\u5BB6\u6700\u591A\u9644\u52A0 10 \u4E2A\u7269\u4F53\uFF08\u69FD\u4F4D 0-9\uFF09"})}),"\n",(0,l.jsx)(t.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"RemovePlayerAttachedObject",children:"RemovePlayerAttachedObject"}),": \u79FB\u9664\u73A9\u5BB6\u9644\u52A0\u7269\u4F53"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"IsPlayerAttachedObjectSlotUsed",children:"IsPlayerAttachedObjectSlotUsed"}),": \u68C0\u6D4B\u6307\u5B9A\u69FD\u4F4D\u662F\u5426\u88AB\u5360\u7528"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"GetPlayerAttachedObject",children:"GetPlayerAttachedObject"}),": \u83B7\u53D6\u6307\u5B9A\u69FD\u4F4D\u7684\u9644\u52A0\u7269\u4F53\u6570\u636E"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"EditAttachedObject",children:"EditAttachedObject"}),": \u7F16\u8F91\u5DF2\u9644\u52A0\u7269\u4F53"]}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"\u76F8\u5173\u8D44\u6E90",children:"\u76F8\u5173\u8D44\u6E90"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"../resources/boneid",children:"\u9AA8\u9ABC ID \u5217\u8868"})}),"\n"]})]})}function o(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return s}});var r=n(67294);let l={},i=r.createContext(l);function s(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);