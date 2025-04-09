"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["73545"],{2531:function(e,n,t){t.r(n),t.d(n,{default:()=>o,frontMatter:()=>h,metadata:()=>c,assets:()=>s,toc:()=>r,contentTitle:()=>l});var c=JSON.parse('{"id":"scripting/callbacks/OnVehicleDamageStatusUpdate","title":"OnVehicleDamageStatusUpdate","description":"Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi m\u1ED9t ph\u1EA7n t\u1EED c\u1EE7a xe nh\u01B0 c\u1EEDa, l\u1ED1p, t\u1EA5m ch\u1EAFn ho\u1EB7c \u0111\xe8n thay \u0111\u1ED5i tr\u1EA1ng th\xe1i h\u01B0 h\u1ECFng c\u1EE7a ch\xfang.","source":"@site/i18n/vi/docusaurus-plugin-content-docs/current/scripting/callbacks/OnVehicleDamageStatusUpdate.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnVehicleDamageStatusUpdate","permalink":"/vi/docs/scripting/callbacks/OnVehicleDamageStatusUpdate","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnVehicleDamageStatusUpdate.md","tags":[{"inline":true,"label":"vehicle","permalink":"/vi/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"OnVehicleDamageStatusUpdate","description":"Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi m\u1ED9t ph\u1EA7n t\u1EED c\u1EE7a xe nh\u01B0 c\u1EEDa, l\u1ED1p, t\u1EA5m ch\u1EAFn ho\u1EB7c \u0111\xe8n thay \u0111\u1ED5i tr\u1EA1ng th\xe1i h\u01B0 h\u1ECFng c\u1EE7a ch\xfang.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"OnUnoccupiedVehicleUpdate","permalink":"/vi/docs/scripting/callbacks/OnUnoccupiedVehicleUpdate"},"next":{"title":"OnVehicleDeath","permalink":"/vi/docs/scripting/callbacks/OnVehicleDeath"}}'),i=t("85893"),a=t("50065");let h={title:"OnVehicleDamageStatusUpdate",description:"Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi m\u1ED9t ph\u1EA7n t\u1EED c\u1EE7a xe nh\u01B0 c\u1EEDa, l\u1ED1p, t\u1EA5m ch\u1EAFn ho\u1EB7c \u0111\xe8n thay \u0111\u1ED5i tr\u1EA1ng th\xe1i h\u01B0 h\u1ECFng c\u1EE7a ch\xfang.",tags:["vehicle"]},l=void 0,s={},r=[{value:"M\xf4 t\u1EA3",id:"m\xf4-t\u1EA3",level:2},{value:"Tr\u1EA3 v\u1EC1",id:"tr\u1EA3-v\u1EC1",level:2},{value:"V\xed d\u1EE5",id:"v\xed-d\u1EE5",level:2},{value:"L\u01B0u \xfd",id:"l\u01B0u-\xfd",level:2},{value:"C\xe1c h\xe0m li\xean quan",id:"c\xe1c-h\xe0m-li\xean-quan",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["\u0110\u1EC3 bi\u1EBFt th\xeam c\xe1c h\xe0m h\u1EEFu \xedch li\xean quan \u0111\u1EBFn gi\xe1 tr\u1ECB h\u01B0 h\u1ECFng c\u1EE7a xe, xem ",(0,i.jsx)(n.a,{href:"../resources/damagestatus",children:"t\u1EA1i \u0111\xe2y"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"m\xf4-t\u1EA3",children:"M\xf4 t\u1EA3"}),"\n",(0,i.jsx)(n.p,{children:"Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi m\u1ED9t ph\u1EA7n t\u1EED c\u1EE7a xe nh\u01B0 c\u1EEDa, l\u1ED1p, t\u1EA5m ch\u1EAFn ho\u1EB7c \u0111\xe8n thay \u0111\u1ED5i tr\u1EA1ng th\xe1i h\u01B0 h\u1ECFng c\u1EE7a ch\xfang."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"T\xean"}),(0,i.jsx)(n.th,{children:"M\xf4 t\u1EA3"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"vehicleid"}),(0,i.jsx)(n.td,{children:"ID c\u1EE7a xe \u0111\xe3 thay \u0111\u1ED5i tr\u1EA1ng th\xe1i h\u01B0 h\u1ECFng."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"playerid"}),(0,i.jsx)(n.td,{children:"ID c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i \u0111\xe3 \u0111\u1ED3ng b\u1ED9 h\xf3a s\u1EF1 thay \u0111\u1ED5i trong tr\u1EA1ng th\xe1i h\u01B0 h\u1ECFng (ng\u01B0\u1EDDi \u0111\xe3 l\xe0m h\u01B0 xe ho\u1EB7c s\u1EEDa ch\u1EEFa)."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"tr\u1EA3-v\u1EC1",children:"Tr\u1EA3 v\u1EC1"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"1"})," - S\u1EBD ng\u0103n c\xe1c filterscript kh\xe1c nh\u1EADn \u0111\u01B0\u1EE3c callback n\xe0y."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"0"})," - Cho bi\u1EBFt r\u1EB1ng callback n\xe0y s\u1EBD \u0111\u01B0\u1EE3c truy\u1EC1n \u0111\u1EBFn filterscript ti\u1EBFp theo."]}),"\n",(0,i.jsx)(n.h2,{id:"v\xed-d\u1EE5",children:"V\xed d\u1EE5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"public OnVehicleDamageStatusUpdate(vehicleid, playerid)\n{\n    // L\u1EA5y tr\u1EA1ng th\xe1i h\u01B0 h\u1ECFng c\u1EE7a t\u1EA5t c\u1EA3 c\xe1c th\xe0nh ph\u1EA7n\n    new \n        VEHICLE_PANEL_STATUS:panels,\n        VEHICLE_DOOR_STATUS:doors,\n        VEHICLE_LIGHT_STATUS:lights,\n        VEHICLE_TYRE_STATUS:tyres;\n\n    GetVehicleDamageStatus(vehicleid, panels, doors, lights, tyres);\n\n    // \u0110\u1EB7t l\u1ED1p xe th\xe0nh 0, c\xf3 ngh\u0129a l\xe0 kh\xf4ng c\xf3 l\u1ED1p b\u1ECB n\u1ED5\n    tyres = VEHICLE_TYRE_STATUS_NONE;\n\n    // C\u1EADp nh\u1EADt tr\u1EA1ng th\xe1i h\u01B0 h\u1ECFng c\u1EE7a xe v\u1EDBi l\u1ED1p kh\xf4ng b\u1ECB n\u1ED5\n    UpdateVehicleDamageStatus(vehicleid, panels, doors, lights, tyres);\n    return 1;\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"l\u01B0u-\xfd",children:"L\u01B0u \xfd"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"\u0110i\u1EC1u n\xe0y kh\xf4ng bao g\u1ED3m thay \u0111\u1ED5i s\u1EE9c kh\u1ECFe c\u1EE7a xe."})}),"\n",(0,i.jsx)(n.h2,{id:"c\xe1c-h\xe0m-li\xean-quan",children:"C\xe1c h\xe0m li\xean quan"}),"\n",(0,i.jsx)(n.p,{children:"C\xe1c h\xe0m sau c\xf3 th\u1EC3 h\u1EEFu \xedch, v\xec ch\xfang li\xean quan \u0111\u1EBFn callback n\xe0y theo m\u1ED9t c\xe1ch n\xe0o \u0111\xf3."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../functions/GetVehicleDamageStatus",children:"GetVehicleDamageStatus"}),": L\u1EA5y tr\u1EA1ng th\xe1i h\u01B0 h\u1ECFng c\u1EE7a xe cho t\u1EEBng ph\u1EA7n ri\xeang l\u1EBB."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../functions/UpdateVehicleDamageStatus",children:"UpdateVehicleDamageStatus"}),": C\u1EADp nh\u1EADt tr\u1EA1ng th\xe1i h\u01B0 h\u1ECFng c\u1EE7a xe."]}),"\n"]})]})}function o(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return h}});var c=t(67294);let i={},a=c.createContext(i);function h(e){let n=c.useContext(a);return c.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:h(e.components),c.createElement(a.Provider,{value:n},e.children)}}}]);