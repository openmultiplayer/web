"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["3892"],{46471:function(e,n,i){i.r(n),i.d(n,{default:()=>o,frontMatter:()=>a,metadata:()=>l,assets:()=>h,toc:()=>s,contentTitle:()=>r});var l=JSON.parse('{"id":"scripting/callbacks/OnPlayerExitVehicle","title":"OnPlayerExitVehicle","description":"Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi m\u1ED9t ng\u01B0\u1EDDi ch\u01A1i b\u1EAFt \u0111\u1EA7u tho\xe1t kh\u1ECFi m\u1ED9t ph\u01B0\u01A1ng ti\u1EC7n.","source":"@site/i18n/vi/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerExitVehicle.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerExitVehicle","permalink":"/vi/docs/scripting/callbacks/OnPlayerExitVehicle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerExitVehicle.md","tags":[{"inline":true,"label":"player","permalink":"/vi/docs/tags/player"},{"inline":true,"label":"vehicle","permalink":"/vi/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"OnPlayerExitVehicle","sidebar_label":"OnPlayerExitVehicle","description":"Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi m\u1ED9t ng\u01B0\u1EDDi ch\u01A1i b\u1EAFt \u0111\u1EA7u tho\xe1t kh\u1ECFi m\u1ED9t ph\u01B0\u01A1ng ti\u1EC7n.","tags":["player","vehicle"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerEnterVehicle","permalink":"/vi/docs/scripting/callbacks/OnPlayerEnterVehicle"},"next":{"title":"OnPlayerExitedMenu","permalink":"/vi/docs/scripting/callbacks/OnPlayerExitedMenu"}}'),t=i("85893"),c=i("50065");let a={title:"OnPlayerExitVehicle",sidebar_label:"OnPlayerExitVehicle",description:"Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi m\u1ED9t ng\u01B0\u1EDDi ch\u01A1i b\u1EAFt \u0111\u1EA7u tho\xe1t kh\u1ECFi m\u1ED9t ph\u01B0\u01A1ng ti\u1EC7n.",tags:["player","vehicle"]},r=void 0,h={},s=[{value:"M\xf4 T\u1EA3",id:"m\xf4-t\u1EA3",level:2},{value:"Tr\u1EA3 V\u1EC1",id:"tr\u1EA3-v\u1EC1",level:2},{value:"V\xed D\u1EE5",id:"v\xed-d\u1EE5",level:2},{value:"Ghi Ch\xfa",id:"ghi-ch\xfa",level:2},{value:"C\xe1c Callbacks Li\xean Quan",id:"c\xe1c-callbacks-li\xean-quan",level:2},{value:"C\xe1c H\xe0m Li\xean Quan",id:"c\xe1c-h\xe0m-li\xean-quan",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"m\xf4-t\u1EA3",children:"M\xf4 T\u1EA3"}),"\n",(0,t.jsx)(n.p,{children:"Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi m\u1ED9t ng\u01B0\u1EDDi ch\u01A1i b\u1EAFt \u0111\u1EA7u tho\xe1t kh\u1ECFi m\u1ED9t ph\u01B0\u01A1ng ti\u1EC7n."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"T\xean"}),(0,t.jsx)(n.th,{children:"M\xf4 T\u1EA3"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"playerid"}),(0,t.jsx)(n.td,{children:"ID c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i \u0111ang tho\xe1t kh\u1ECFi ph\u01B0\u01A1ng ti\u1EC7n."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vehicleid"}),(0,t.jsx)(n.td,{children:"ID c\u1EE7a ph\u01B0\u01A1ng ti\u1EC7n m\xe0 ng\u01B0\u1EDDi ch\u01A1i \u0111ang tho\xe1t kh\u1ECFi."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"tr\u1EA3-v\u1EC1",children:"Tr\u1EA3 V\u1EC1"}),"\n",(0,t.jsx)(n.p,{children:"Callback n\xe0y lu\xf4n \u0111\u01B0\u1EE3c g\u1ECDi \u0111\u1EA7u ti\xean trong filterscripts."}),"\n",(0,t.jsx)(n.h2,{id:"v\xed-d\u1EE5",children:"V\xed D\u1EE5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'public OnPlayerExitVehicle(playerid, vehicleid)\n{\n    new string[64];\n    format(string, sizeof(string), "INFO: B\u1EA1n \u0111ang tho\xe1t kh\u1ECFi ph\u01B0\u01A1ng ti\u1EC7n %i", vehicleid);\n    SendClientMessage(playerid, 0xFFFFFFFF, string);\n    return 1;\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"ghi-ch\xfa",children:"Ghi Ch\xfa"}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Kh\xf4ng \u0111\u01B0\u1EE3c g\u1ECDi n\u1EBFu ng\u01B0\u1EDDi ch\u01A1i b\u1ECB r\u01A1i kh\u1ECFi xe \u0111\u1EA1p ho\u1EB7c b\u1ECB lo\u1EA1i kh\u1ECFi ph\u01B0\u01A1ng ti\u1EC7n b\u1EB1ng c\xe1c ph\u01B0\u01A1ng ph\xe1p kh\xe1c nh\u01B0 s\u1EED d\u1EE5ng ",(0,t.jsx)(n.a,{href:"../functions/SetPlayerPos",children:"SetPlayerPos"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["B\u1EA1n c\u1EA7n s\u1EED d\u1EE5ng ",(0,t.jsx)(n.a,{href:"OnPlayerStateChange",children:"OnPlayerStateChange"})," v\xe0 ki\u1EC3m tra xem tr\u1EA1ng th\xe1i c\u0169 c\u1EE7a h\u1ECD l\xe0 ",(0,t.jsx)(n.code,{children:"PLAYER_STATE_DRIVER"})," ho\u1EB7c ",(0,t.jsx)(n.code,{children:"PLAYER_STATE_PASSENGER"})," v\xe0 tr\u1EA1ng th\xe1i m\u1EDBi c\u1EE7a h\u1ECD l\xe0 ",(0,t.jsx)(n.code,{children:"PLAYER_STATE_ONFOOT"}),"."]}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{id:"c\xe1c-callbacks-li\xean-quan",children:"C\xe1c Callbacks Li\xean Quan"}),"\n",(0,t.jsx)(n.p,{children:"C\xe1c callback sau \u0111\xe2y c\xf3 th\u1EC3 h\u1EEFu \xedch v\xec ch\xfang li\xean quan \u0111\u1EBFn callback n\xe0y theo m\u1ED9t c\xe1ch n\xe0o \u0111\xf3."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"OnPlayerEnterVehicle",children:"OnPlayerEnterVehicle"}),": Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi m\u1ED9t ng\u01B0\u1EDDi ch\u01A1i b\u1EAFt \u0111\u1EA7u v\xe0o m\u1ED9t ph\u01B0\u01A1ng ti\u1EC7n."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"OnPlayerStateChange",children:"OnPlayerStateChange"}),": Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi m\u1ED9t ng\u01B0\u1EDDi ch\u01A1i thay \u0111\u1ED5i tr\u1EA1ng th\xe1i."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"c\xe1c-h\xe0m-li\xean-quan",children:"C\xe1c H\xe0m Li\xean Quan"}),"\n",(0,t.jsx)(n.p,{children:"C\xe1c h\xe0m sau \u0111\xe2y c\xf3 th\u1EC3 h\u1EEFu \xedch v\xec ch\xfang li\xean quan \u0111\u1EBFn callback n\xe0y theo m\u1ED9t c\xe1ch n\xe0o \u0111\xf3."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../functions/RemovePlayerFromVehicle",children:"RemovePlayerFromVehicle"}),": N\xe9m m\u1ED9t ng\u01B0\u1EDDi ch\u01A1i ra kh\u1ECFi ph\u01B0\u01A1ng ti\u1EC7n c\u1EE7a h\u1ECD."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../functions/GetPlayerVehicleSeat",children:"GetPlayerVehicleSeat"}),": Ki\u1EC3m tra gh\u1EBF m\xe0 ng\u01B0\u1EDDi ch\u01A1i \u0111ang ng\u1ED3i."]}),"\n"]})]})}function o(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return r},a:function(){return a}});var l=i(67294);let t={},c=l.createContext(t);function a(e){let n=l.useContext(c);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),l.createElement(c.Provider,{value:n},e.children)}}}]);