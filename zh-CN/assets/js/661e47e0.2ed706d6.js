"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["55692"],{71175:function(e,n,i){i.r(n),i.d(n,{default:()=>o,frontMatter:()=>c,metadata:()=>l,assets:()=>d,toc:()=>h,contentTitle:()=>s});var l=JSON.parse('{"id":"scripting/functions/CreateVehicle","title":"CreateVehicle","description":"\u5728\u6E38\u620F\u4E16\u754C\u4E2D\u521B\u5EFA\u8F66\u8F86\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/CreateVehicle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/CreateVehicle","permalink":"/zh-CN/docs/scripting/functions/CreateVehicle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/CreateVehicle.md","tags":[{"inline":true,"label":"\u8F66\u8F86","permalink":"/zh-CN/docs/tags/\u8F66\u8F86"}],"version":"current","frontMatter":{"title":"CreateVehicle","sidebar_label":"CreateVehicle","description":"\u5728\u6E38\u620F\u4E16\u754C\u4E2D\u521B\u5EFA\u8F66\u8F86\u3002","tags":["\u8F66\u8F86"]},"sidebar":"docsSidebar","previous":{"title":"CreatePlayerTextDraw","permalink":"/zh-CN/docs/scripting/functions/CreatePlayerTextDraw"},"next":{"title":"DB_ExecuteQuery","permalink":"/zh-CN/docs/scripting/functions/DB_ExecuteQuery"}}'),r=i("85893"),t=i("50065");let c={title:"CreateVehicle",sidebar_label:"CreateVehicle",description:"\u5728\u6E38\u620F\u4E16\u754C\u4E2D\u521B\u5EFA\u8F66\u8F86\u3002",tags:["\u8F66\u8F86"]},s=void 0,d={},h=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2},{value:"\u76F8\u5173\u56DE\u8C03",id:"\u76F8\u5173\u56DE\u8C03",level:2},{value:"\u76F8\u5173\u8D44\u6E90",id:"\u76F8\u5173\u8D44\u6E90",level:2}];function a(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u6E38\u620F\u4E16\u754C\u4E2D\u52A8\u6001\u521B\u5EFA\u8F66\u8F86\uFF0C\u53EF\u5728\u811A\u672C\u4EFB\u610F\u65F6\u523B\u66FF\u4EE3 AddStaticVehicleEx \u4F7F\u7528\u3002"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u53C2\u6570\u540D"}),(0,r.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../resources/vehicleid",children:"modelid"})}),(0,r.jsx)(n.td,{children:"\u8F66\u8F86\u6A21\u578B ID"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Float",":spawnX"]}),(0,r.jsx)(n.td,{children:"\u8F66\u8F86\u751F\u6210\u7684 X \u8F74\u5750\u6807"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Float",":spawnY"]}),(0,r.jsx)(n.td,{children:"\u8F66\u8F86\u751F\u6210\u7684 Y \u8F74\u5750\u6807"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Float",":spawnZ"]}),(0,r.jsx)(n.td,{children:"\u8F66\u8F86\u751F\u6210\u7684 Z \u8F74\u5750\u6807"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["Float",":angle"]}),(0,r.jsx)(n.td,{children:"\u8F66\u8F86\u521D\u59CB\u671D\u5411\u89D2\u5EA6"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../resources/vehiclecolorid",children:"colour1"})}),(0,r.jsx)(n.td,{children:"\u4E3B\u989C\u8272 ID"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../resources/vehiclecolorid",children:"colour2"})}),(0,r.jsx)(n.td,{children:"\u526F\u989C\u8272 ID"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"respawnDelay"}),(0,r.jsx)(n.td,{children:"\u65E0\u9A7E\u9A76\u5458\u65F6\u8F66\u8F86\u91CD\u751F\u5EF6\u8FDF\uFF08\u79D2\uFF09\u3002\u4F7F\u7528-1 \u5C06\u7981\u7528\u81EA\u52A8\u91CD\u751F"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["bool",":addSiren"]}),(0,r.jsx)(n.td,{children:"\u9ED8\u8BA4\u503C'false'\u3002\u4E3A\u8F66\u8F86\u542F\u7528\u8B66\u7B1B\u529F\u80FD\uFF08\u9700\u8F66\u8F86\u81EA\u5E26\u5587\u53ED\uFF09"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,r.jsx)(n.p,{children:"\u8FD4\u56DE\u521B\u5EFA\u7684\u8F66\u8F86 ID\uFF08\u8303\u56F4 1 \u81F3 MAX_VEHICLES\uFF09\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u82E5\u8FBE\u5230\u8F66\u8F86\u6570\u91CF\u4E0A\u9650\u6216\u6A21\u578B ID \u65E0\u6548\uFF0C\u8FD4\u56DE INVALID_VEHICLE_ID (65535)\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u82E5\u4F7F\u7528\u706B\u8F66\u6A21\u578B ID\uFF08538 \u6216 537\uFF09\uFF0C\u8FD4\u56DE 0\uFF08\u4E0D\u53EF\u7528\uFF09\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    // \u5728\u6E38\u620F\u4E2D\u6DFB\u52A0\u4E00\u67B6\u4E5D\u5934\u86C7\u76F4\u5347\u673A\uFF08520\uFF09\uFF0C\u91CD\u751F\u65F6\u95F4\u4E3A60\u79D2\n    CreateVehicle(520, 2109.1763, 1503.0453, 32.2887, 82.2873, -1, -1, 60);\n    return 1;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["\u706B\u8F66\u8F66\u8F86\u4EC5\u80FD\u901A\u8FC7",(0,r.jsx)(n.a,{href:"AddStaticVehicle",children:"AddStaticVehicle"}),"\u548C",(0,r.jsx)(n.a,{href:"AddStaticVehicleEx",children:"AddStaticVehicleEx"}),"\u6DFB\u52A0"]})}),"\n",(0,r.jsx)(n.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"DestroyVehicle",children:"DestroyVehicle"}),": \u9500\u6BC1\u8F66\u8F86"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"AddStaticVehicle",children:"AddStaticVehicle"}),": \u6DFB\u52A0\u9759\u6001\u8F66\u8F86"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"AddStaticVehicleEx",children:"AddStaticVehicleEx"}),": \u6DFB\u52A0\u5E26\u81EA\u5B9A\u4E49\u91CD\u751F\u65F6\u95F4\u7684\u9759\u6001\u8F66\u8F86"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"GetVehicleParamsSirenState",children:"GetVehicleParamsSirenState"}),": \u68C0\u6D4B\u8F66\u8F86\u8B66\u7B1B\u72B6\u6001"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"SetVehicleSpawnInfo",children:"SetVehicleSpawnInfo"}),": \u914D\u7F6E\u8F66\u8F86\u751F\u6210\u53C2\u6570"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"GetVehicleSpawnInfo",children:"GetVehicleSpawnInfo"}),": \u83B7\u53D6\u8F66\u8F86\u751F\u6210\u4FE1\u606F"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"ChangeVehicleColours",children:"ChangeVehicleColours"}),": \u4FEE\u6539\u8F66\u8F86\u989C\u8272\u914D\u7F6E"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"GetVehicleColours",children:"GetVehicleColours"}),": \u83B7\u53D6\u8F66\u8F86\u989C\u8272\u914D\u7F6E"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"SetVehicleRespawnDelay",children:"SetVehicleRespawnDelay"}),": \u8BBE\u7F6E\u8F66\u8F86\u91CD\u751F\u5EF6\u8FDF"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"GetVehicleRespawnDelay",children:"GetVehicleRespawnDelay"}),": \u83B7\u53D6\u8F66\u8F86\u91CD\u751F\u5EF6\u8FDF"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u76F8\u5173\u56DE\u8C03",children:"\u76F8\u5173\u56DE\u8C03"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../callbacks/OnVehicleSpawn",children:"OnVehicleSpawn"}),": \u8F66\u8F86\u91CD\u751F\u65F6\u89E6\u53D1"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../callbacks/OnVehicleSirenStateChange",children:"OnVehicleSirenStateChange"}),": \u8B66\u7B1B\u72B6\u6001\u53D8\u5316\u65F6\u89E6\u53D1"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u76F8\u5173\u8D44\u6E90",children:"\u76F8\u5173\u8D44\u6E90"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../resources/vehicleid",children:"\u8F66\u8F86\u6A21\u578B\u5217\u8868"}),": \u6E38\u620F\u4E2D\u6240\u6709\u53EF\u7528\u8F66\u8F86\u6A21\u578B\u7684\u5B8C\u6574\u6E05\u5355"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../resources/vehiclecolorid",children:"\u8F66\u8F86\u989C\u8272 ID \u5217\u8868"}),": \u6240\u6709\u8F66\u8F86\u989C\u8272 ID \u5BF9\u7167\u8868"]}),"\n"]})]})}function o(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return s},a:function(){return c}});var l=i(67294);let r={},t=l.createContext(r);function c(e){let n=l.useContext(t);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);