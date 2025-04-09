"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["19265"],{96909:function(n,e,c){c.r(e),c.d(e,{default:()=>o,frontMatter:()=>h,metadata:()=>i,assets:()=>r,toc:()=>s,contentTitle:()=>a});var i=JSON.parse('{"id":"scripting/callbacks/OnVehicleRespray","title":"OnVehicleRespray","description":"Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi m\u1ED9t ng\u01B0\u1EDDi ch\u01A1i r\u1EDDi kh\u1ECFi c\u1EEDa h\xe0ng t\xf9y ch\u1EC9nh, ngay c\u1EA3 khi kh\xf4ng thay \u0111\u1ED5i m\xe0u s\u1EAFc.","source":"@site/i18n/vi/docusaurus-plugin-content-docs/current/scripting/callbacks/OnVehicleRespray.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnVehicleRespray","permalink":"/vi/docs/scripting/callbacks/OnVehicleRespray","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnVehicleRespray.md","tags":[{"inline":true,"label":"vehicle","permalink":"/vi/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"OnVehicleRespray","sidebar_label":"OnVehicleRespray","description":"Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi m\u1ED9t ng\u01B0\u1EDDi ch\u01A1i r\u1EDDi kh\u1ECFi c\u1EEDa h\xe0ng t\xf9y ch\u1EC9nh, ngay c\u1EA3 khi kh\xf4ng thay \u0111\u1ED5i m\xe0u s\u1EAFc.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"OnVehiclePaintjob","permalink":"/vi/docs/scripting/callbacks/OnVehiclePaintjob"},"next":{"title":"OnVehicleSirenStateChange","permalink":"/vi/docs/scripting/callbacks/OnVehicleSirenStateChange"}}'),l=c("85893"),t=c("50065");let h={title:"OnVehicleRespray",sidebar_label:"OnVehicleRespray",description:"Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi m\u1ED9t ng\u01B0\u1EDDi ch\u01A1i r\u1EDDi kh\u1ECFi c\u1EEDa h\xe0ng t\xf9y ch\u1EC9nh, ngay c\u1EA3 khi kh\xf4ng thay \u0111\u1ED5i m\xe0u s\u1EAFc.",tags:["vehicle"]},a=void 0,r={},s=[{value:"M\xf4 t\u1EA3",id:"m\xf4-t\u1EA3",level:2},{value:"Tr\u1EA3 v\u1EC1",id:"tr\u1EA3-v\u1EC1",level:2},{value:"V\xed d\u1EE5",id:"v\xed-d\u1EE5",level:2},{value:"L\u01B0u \xfd",id:"l\u01B0u-\xfd",level:2},{value:"C\xe1c callback li\xean quan",id:"c\xe1c-callback-li\xean-quan",level:2},{value:"C\xe1c h\xe0m li\xean quan",id:"c\xe1c-h\xe0m-li\xean-quan",level:2}];function d(n){let e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"m\xf4-t\u1EA3",children:"M\xf4 t\u1EA3"}),"\n",(0,l.jsx)(e.p,{children:"Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi m\u1ED9t ng\u01B0\u1EDDi ch\u01A1i r\u1EDDi kh\u1ECFi c\u1EEDa h\xe0ng t\xf9y ch\u1EC9nh, ngay c\u1EA3 khi m\xe0u s\u1EAFc c\u1EE7a xe kh\xf4ng thay \u0111\u1ED5i. L\u01B0u \xfd, t\xean c\u1EE7a callback n\xe0y c\xf3 th\u1EC3 g\xe2y hi\u1EC3u l\u1EA7m, c\xe1c c\u1EEDa h\xe0ng Pay 'n' Spray kh\xf4ng g\u1ECDi callback n\xe0y."}),"\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"T\xean"}),(0,l.jsx)(e.th,{children:"M\xf4 t\u1EA3"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"playerid"}),(0,l.jsx)(e.td,{children:"ID c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i \u0111ang l\xe1i xe."})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"vehicleid"}),(0,l.jsx)(e.td,{children:"ID c\u1EE7a xe \u0111\xe3 \u0111\u01B0\u1EE3c s\u01A1n l\u1EA1i."})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"color1"}),(0,l.jsx)(e.td,{children:"M\xe0u s\u1EAFc m\xe0 m\xe0u ch\xednh c\u1EE7a xe \u0111\xe3 \u0111\u01B0\u1EE3c thay \u0111\u1ED5i."})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"color2"}),(0,l.jsx)(e.td,{children:"M\xe0u s\u1EAFc m\xe0 m\xe0u ph\u1EE5 c\u1EE7a xe \u0111\xe3 \u0111\u01B0\u1EE3c thay \u0111\u1ED5i."})]})]})]}),"\n",(0,l.jsx)(e.h2,{id:"tr\u1EA3-v\u1EC1",children:"Tr\u1EA3 v\u1EC1"}),"\n",(0,l.jsx)(e.p,{children:"Lu\xf4n \u0111\u01B0\u1EE3c g\u1ECDi \u0111\u1EA7u ti\xean trong gamemode."}),"\n",(0,l.jsx)(e.h2,{id:"v\xed-d\u1EE5",children:"V\xed d\u1EE5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-c",children:'public OnVehicleRespray(playerid, vehicleid, color1, color2)\n{\n    new string[48];\n    format(string, sizeof(string), "B\u1EA1n \u0111\xe3 s\u01A1n l\u1EA1i xe %d th\xe0nh m\xe0u %d v\xe0 %d!", vehicleid, color1, color2);\n    SendClientMessage(playerid, COLOR_GREEN, string);\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(e.h2,{id:"l\u01B0u-\xfd",children:"L\u01B0u \xfd"}),"\n",(0,l.jsxs)(e.admonition,{type:"tip",children:[(0,l.jsx)(e.p,{children:"Callback n\xe0y kh\xf4ng \u0111\u01B0\u1EE3c g\u1ECDi b\u1EDFi ChangeVehicleColor. T\xean c\u1EE7a callback n\xe0y c\xf3 th\u1EC3 g\xe2y hi\u1EC3u l\u1EA7m, v\xe0 n\xf3 kh\xf4ng \u0111\u01B0\u1EE3c g\u1ECDi cho c\xe1c c\u1EEDa h\xe0ng Pay 'n' Spray (ch\u1EC9 c\xe1c c\u1EEDa h\xe0ng t\xf9y ch\u1EC9nh)."}),(0,l.jsxs)(e.p,{children:["Fix \u1EDF \u0111\xe2y: ",(0,l.jsx)(e.a,{href:"http://pastebin.com/G81da7N1",children:"http://pastebin.com/G81da7N1"})]})]}),"\n",(0,l.jsxs)(e.admonition,{type:"warning",children:[(0,l.jsx)(e.p,{children:"L\u1ED7i \u0111\xe3 bi\u1EBFt:"}),(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Xem tr\u01B0\u1EDBc m\u1ED9t th\xe0nh ph\u1EA7n b\xean trong c\u1EEDa h\xe0ng t\xf9y ch\u1EC9nh c\xf3 th\u1EC3 g\u1ECDi callback n\xe0y."}),"\n"]})]}),"\n",(0,l.jsx)(e.h2,{id:"c\xe1c-callback-li\xean-quan",children:"C\xe1c callback li\xean quan"}),"\n",(0,l.jsx)(e.p,{children:"C\xe1c callback sau c\xf3 th\u1EC3 h\u1EEFu \xedch, v\xec ch\xfang li\xean quan \u0111\u1EBFn callback n\xe0y theo m\u1ED9t c\xe1ch n\xe0o \u0111\xf3."}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"OnVehiclePaintjob",children:"OnVehiclePaintjob"}),": Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi l\u1EDBp s\u01A1n c\u1EE7a m\u1ED9t xe b\u1ECB thay \u0111\u1ED5i."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"OnVehicleMod",children:"OnVehicleMod"}),": Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi m\u1ED9t xe \u0111\u01B0\u1EE3c t\xf9y ch\u1EC9nh."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"OnEnterExitModShop",children:"OnEnterExitModShop"}),": Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi m\u1ED9t xe v\xe0o ho\u1EB7c r\u1EDDi kh\u1ECFi c\u1EEDa h\xe0ng t\xf9y ch\u1EC9nh."]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"c\xe1c-h\xe0m-li\xean-quan",children:"C\xe1c h\xe0m li\xean quan"}),"\n",(0,l.jsx)(e.p,{children:"C\xe1c h\xe0m sau c\xf3 th\u1EC3 h\u1EEFu \xedch, v\xec ch\xfang li\xean quan \u0111\u1EBFn callback n\xe0y theo m\u1ED9t c\xe1ch n\xe0o \u0111\xf3."}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"../functions/ChangeVehicleColor",children:"ChangeVehicleColor"}),": \u0110\u1EB7t m\xe0u c\u1EE7a m\u1ED9t xe."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"../functions/ChangeVehiclePaintjob",children:"ChangeVehiclePaintjob"}),": Thay \u0111\u1ED5i l\u1EDBp s\u01A1n c\u1EE7a m\u1ED9t xe."]}),"\n"]})]})}function o(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(d,{...n})}):d(n)}},50065:function(n,e,c){c.d(e,{Z:function(){return a},a:function(){return h}});var i=c(67294);let l={},t=i.createContext(l);function h(n){let e=i.useContext(t);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:h(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);