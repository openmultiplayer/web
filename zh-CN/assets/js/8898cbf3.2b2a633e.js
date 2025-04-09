"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["83313"],{50970:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>a,metadata:()=>l,assets:()=>c,toc:()=>s,contentTitle:()=>r});var l=JSON.parse('{"id":"scripting/callbacks/OnPlayerEditAttachedObject","title":"OnPlayerEditAttachedObject","description":"\u5F53\u73A9\u5BB6\u7ED3\u675F\u9644\u52A0\u7269\u4F53\u7F16\u8F91\u6A21\u5F0F\u65F6\u89E6\u53D1\u8BE5\u56DE\u8C03","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerEditAttachedObject.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerEditAttachedObject","permalink":"/zh-CN/docs/scripting/callbacks/OnPlayerEditAttachedObject","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerEditAttachedObject.md","tags":[{"inline":true,"label":"\u73A9\u5BB6","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6"},{"inline":true,"label":"\u7269\u4F53","permalink":"/zh-CN/docs/tags/\u7269\u4F53"},{"inline":true,"label":"\u9644\u52A0\u7269\u4F53","permalink":"/zh-CN/docs/tags/\u9644\u52A0\u7269\u4F53"}],"version":"current","frontMatter":{"title":"OnPlayerEditAttachedObject","sidebar_label":"OnPlayerEditAttachedObject","description":"\u5F53\u73A9\u5BB6\u7ED3\u675F\u9644\u52A0\u7269\u4F53\u7F16\u8F91\u6A21\u5F0F\u65F6\u89E6\u53D1\u8BE5\u56DE\u8C03","tags":["\u73A9\u5BB6","\u7269\u4F53","\u9644\u52A0\u7269\u4F53"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerDisconnect","permalink":"/zh-CN/docs/scripting/callbacks/OnPlayerDisconnect"},"next":{"title":"OnPlayerEditObject","permalink":"/zh-CN/docs/scripting/callbacks/OnPlayerEditObject"}}'),i=n("85893"),d=n("50065");let a={title:"OnPlayerEditAttachedObject",sidebar_label:"OnPlayerEditAttachedObject",description:"\u5F53\u73A9\u5BB6\u7ED3\u675F\u9644\u52A0\u7269\u4F53\u7F16\u8F91\u6A21\u5F0F\u65F6\u89E6\u53D1\u8BE5\u56DE\u8C03",tags:["\u73A9\u5BB6","\u7269\u4F53","\u9644\u52A0\u7269\u4F53"]},r=void 0,c={},s=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u6CE8\u610F",id:"\u6CE8\u610F",level:2},{value:"\u76F8\u5173\u56DE\u8C03",id:"\u76F8\u5173\u56DE\u8C03",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function o(e){let t={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(t.p,{children:"\u5F53\u73A9\u5BB6\u7ED3\u675F\u9644\u52A0\u7269\u4F53\u7F16\u8F91\u6A21\u5F0F\u65F6\u89E6\u53D1\u8BE5\u56DE\u8C03\u3002"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"\u53C2\u6570"}),(0,i.jsx)(t.th,{children:"\u8BF4\u660E"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"\u7ED3\u675F\u7F16\u8F91\u7684\u73A9\u5BB6ID"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["EDIT_RESPONSE",":response"]}),(0,i.jsx)(t.td,{children:"\u64CD\u4F5C\u7ED3\u679C\uFF1A0=\u53D6\u6D88\uFF08ESC\uFF09\uFF0C1=\u4FDD\u5B58\uFF08\u70B9\u51FB\u4FDD\u5B58\u56FE\u6807\uFF09"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"index"}),(0,i.jsx)(t.td,{children:"\u9644\u52A0\u7269\u4F53\u7684\u7D22\u5F15\u53F7\uFF080-9\uFF09"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"modelid"}),(0,i.jsx)(t.td,{children:"\u88AB\u7F16\u8F91\u9644\u52A0\u7269\u4F53\u7684\u6A21\u578BID"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"boneid"}),(0,i.jsx)(t.td,{children:"\u88AB\u7F16\u8F91\u9644\u52A0\u7269\u4F53\u7684\u9AA8\u9ABCID"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":fOffsetX"]}),(0,i.jsx)(t.td,{children:"\u88AB\u7F16\u8F91\u9644\u52A0\u7269\u4F53\u7684X\u8F74\u504F\u79FB\u91CF"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":fOffsetY"]}),(0,i.jsx)(t.td,{children:"\u88AB\u7F16\u8F91\u9644\u52A0\u7269\u4F53\u7684Y\u8F74\u504F\u79FB\u91CF"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":fOffsetZ"]}),(0,i.jsx)(t.td,{children:"\u88AB\u7F16\u8F91\u9644\u52A0\u7269\u4F53\u7684Z\u8F74\u504F\u79FB\u91CF"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":fRotX"]}),(0,i.jsx)(t.td,{children:"\u88AB\u7F16\u8F91\u9644\u52A0\u7269\u4F53\u7684X\u8F74\u65CB\u8F6C\u89D2\u5EA6"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":fRotY"]}),(0,i.jsx)(t.td,{children:"\u88AB\u7F16\u8F91\u9644\u52A0\u7269\u4F53\u7684Y\u8F74\u65CB\u8F6C\u89D2\u5EA6"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":fRotZ"]}),(0,i.jsx)(t.td,{children:"\u88AB\u7F16\u8F91\u9644\u52A0\u7269\u4F53\u7684Z\u8F74\u65CB\u8F6C\u89D2\u5EA6"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":fScaleX"]}),(0,i.jsx)(t.td,{children:"\u88AB\u7F16\u8F91\u9644\u52A0\u7269\u4F53\u7684X\u8F74\u7F29\u653E\u6BD4\u4F8B"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":fScaleY"]}),(0,i.jsx)(t.td,{children:"\u88AB\u7F16\u8F91\u9644\u52A0\u7269\u4F53\u7684Y\u8F74\u7F29\u653E\u6BD4\u4F8B"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":fScaleZ"]}),(0,i.jsx)(t.td,{children:"\u88AB\u7F16\u8F91\u9644\u52A0\u7269\u4F53\u7684Z\u8F74\u7F29\u653E\u6BD4\u4F8B"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,i.jsxs)(t.p,{children:["1 - \u963B\u6B62\u5176\u4ED6\u811A\u672C\u63A5\u6536\u6B64\u56DE\u8C03",(0,i.jsx)(t.br,{}),"\n","0 - \u5141\u8BB8\u4F20\u9012\u7ED9\u540E\u7EED\u811A\u672C"]}),"\n",(0,i.jsx)(t.p,{children:"\u8BE5\u56DE\u8C03\u5728\u6EE4\u955C\u811A\u672C\u4E2D\u603B\u662F\u4F18\u5148\u89E6\u53D1\u3002"}),"\n",(0,i.jsx)(t.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'enum attached_object_data\n{\n    Float:ao_x,\n    Float:ao_y,\n    Float:ao_z,\n    Float:ao_rx,\n    Float:ao_ry,\n    Float:ao_rz,\n    Float:ao_sx,\n    Float:ao_sy,\n    Float:ao_sz\n}\n\nnew ao[MAX_PLAYERS][MAX_PLAYER_ATTACHED_OBJECTS][attached_object_data];\n\n// \u5F53\u9644\u52A0\u7269\u4F53\u88AB\u9644\u52A0\u65F6\uFF0C\u5E94\u5C06\u6570\u636E\u5B58\u50A8\u5230\u4E0A\u8FF0\u6570\u7EC4\u4E2D\n\npublic OnPlayerEditAttachedObject(playerid, EDIT_RESPONSE:response, index, modelid, boneid, Float:fOffsetX, Float:fOffsetY, Float:fOffsetZ, Float:fRotX, Float:fRotY, Float:fRotZ, Float:fScaleX, Float:fScaleY, Float:fScaleZ)\n{\n    if (response == EDIT_RESPONSE_FINAL)\n    {\n        SendClientMessage(playerid, COLOR_GREEN, "\u9644\u52A0\u7269\u4F53\u7F16\u8F91\u5DF2\u4FDD\u5B58");\n\n        ao[playerid][index][ao_x] = fOffsetX;\n        ao[playerid][index][ao_y] = fOffsetY;\n        ao[playerid][index][ao_z] = fOffsetZ;\n        ao[playerid][index][ao_rx] = fRotX;\n        ao[playerid][index][ao_ry] = fRotY;\n        ao[playerid][index][ao_rz] = fRotZ;\n        ao[playerid][index][ao_sx] = fScaleX;\n        ao[playerid][index][ao_sy] = fScaleY;\n        ao[playerid][index][ao_sz] = fScaleZ;\n    }\n    else if (response == EDIT_RESPONSE_CANCEL)\n    {\n        SendClientMessage(playerid, COLOR_RED, "\u9644\u52A0\u7269\u4F53\u7F16\u8F91\u672A\u4FDD\u5B58");\n\n        new i = index;\n        SetPlayerAttachedObject(playerid, index, modelid, boneid,\n            ao[playerid][i][ao_x],\n            ao[playerid][i][ao_y],\n            ao[playerid][i][ao_z],\n            ao[playerid][i][ao_rx],\n            ao[playerid][i][ao_ry],\n            ao[playerid][i][ao_rz],\n            ao[playerid][i][ao_sx],\n            ao[playerid][i][ao_sy],\n            ao[playerid][i][ao_sz]);\n    }\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"\u6CE8\u610F",children:"\u6CE8\u610F"}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["\u4F7F\u7528",(0,i.jsx)(t.a,{href:"../functions/SetPlayerAttachedObject",children:"SetPlayerAttachedObject"}),"\u53EF\u8FD8\u539F\u9644\u52A0\u7269\u4F53\u7684\u539F\u59CB\u53C2\u6570"]})}),"\n",(0,i.jsx)(t.h2,{id:"\u76F8\u5173\u56DE\u8C03",children:"\u76F8\u5173\u56DE\u8C03"}),"\n",(0,i.jsx)(t.p,{children:"\u4EE5\u4E0B\u56DE\u8C03\u53EF\u80FD\u4E0E\u5F53\u524D\u56DE\u8C03\u5B58\u5728\u5173\u8054\uFF1A"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"OnPlayerEditObject",children:"OnPlayerEditObject"}),"\uFF1A\u5F53\u73A9\u5BB6\u7ED3\u675F\u666E\u901A\u7269\u4F53\u7F16\u8F91\u65F6\u89E6\u53D1"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"OnPlayerSelectObject",children:"OnPlayerSelectObject"}),"\uFF1A\u5F53\u73A9\u5BB6\u901A\u8FC7",(0,i.jsx)(t.a,{href:"../functions/SelectObject",children:"SelectObject"}),"\u9009\u62E9\u7269\u4F53\u540E\u89E6\u53D1"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,i.jsx)(t.p,{children:"\u4EE5\u4E0B\u51FD\u6570\u53EF\u80FD\u4E0E\u5F53\u524D\u56DE\u8C03\u76F8\u5173\uFF1A"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"../functions/EditAttachedObject",children:"EditAttachedObject"}),"\uFF1A\u8FDB\u5165\u9644\u52A0\u7269\u4F53\u7F16\u8F91\u6A21\u5F0F"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"../functions/SetPlayerAttachedObject",children:"SetPlayerAttachedObject"}),"\uFF1A\u4E3A\u73A9\u5BB6\u9644\u52A0\u7269\u4F53"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"../functions/RemovePlayerAttachedObject",children:"RemovePlayerAttachedObject"}),"\uFF1A\u79FB\u9664\u73A9\u5BB6\u7684\u9644\u52A0\u7269\u4F53"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"../functions/IsPlayerEditingAttachedObject",children:"IsPlayerEditingAttachedObject"}),"\uFF1A\u68C0\u6D4B\u73A9\u5BB6\u662F\u5426\u6B63\u5728\u7F16\u8F91\u9644\u52A0\u7269\u4F53"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"../functions/CancelEdit",children:"CancelEdit"}),"\uFF1A\u53D6\u6D88\u7269\u4F53\u7F16\u8F91"]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return a}});var l=n(67294);let i={},d=l.createContext(i);function a(e){let t=l.useContext(d);return l.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),l.createElement(d.Provider,{value:t},e.children)}}}]);