"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["74639"],{65298:function(e,i,n){n.r(i),n.d(i,{default:()=>h,frontMatter:()=>r,metadata:()=>c,assets:()=>p,toc:()=>s,contentTitle:()=>t});var c=JSON.parse('{"id":"scripting/callbacks/OnPlayerPickUpPlayerPickup","title":"OnPlayerPickUpPlayerPickup","description":"Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi m\u1ED9t ng\u01B0\u1EDDi ch\u01A1i nh\u1EB7t pickup c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i \u0111\u01B0\u1EE3c t\u1EA1o ra b\u1EB1ng CreatePlayerPickup.","source":"@site/i18n/vi/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerPickUpPlayerPickup.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerPickUpPlayerPickup","permalink":"/vi/docs/scripting/callbacks/OnPlayerPickUpPlayerPickup","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerPickUpPlayerPickup.md","tags":[{"inline":true,"label":"player","permalink":"/vi/docs/tags/player"},{"inline":true,"label":"pickup","permalink":"/vi/docs/tags/pickup"},{"inline":true,"label":"playerpickup","permalink":"/vi/docs/tags/playerpickup"}],"version":"current","frontMatter":{"title":"OnPlayerPickUpPlayerPickup","sidebar_label":"OnPlayerPickUpPlayerPickup","description":"Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi m\u1ED9t ng\u01B0\u1EDDi ch\u01A1i nh\u1EB7t pickup c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i \u0111\u01B0\u1EE3c t\u1EA1o ra b\u1EB1ng CreatePlayerPickup.","tags":["player","pickup","playerpickup"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerPickUpPickup","permalink":"/vi/docs/scripting/callbacks/OnPlayerPickUpPickup"},"next":{"title":"OnPlayerPickupStreamIn","permalink":"/vi/docs/scripting/callbacks/OnPlayerPickupStreamIn"}}'),a=n("85893"),l=n("50065");let r={title:"OnPlayerPickUpPlayerPickup",sidebar_label:"OnPlayerPickUpPlayerPickup",description:"Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi m\u1ED9t ng\u01B0\u1EDDi ch\u01A1i nh\u1EB7t pickup c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i \u0111\u01B0\u1EE3c t\u1EA1o ra b\u1EB1ng CreatePlayerPickup.",tags:["player","pickup","playerpickup"]},t=void 0,p={},s=[{value:"M\xf4 T\u1EA3",id:"m\xf4-t\u1EA3",level:2},{value:"Tr\u1EA3 V\u1EC1",id:"tr\u1EA3-v\u1EC1",level:2},{value:"V\xed D\u1EE5",id:"v\xed-d\u1EE5",level:2},{value:"Callbacks Li\xean Quan",id:"callbacks-li\xean-quan",level:2},{value:"H\xe0m Li\xean Quan",id:"h\xe0m-li\xean-quan",level:2}];function u(e){let i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{VersionWarn:n}=i;return n||function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n,{name:"callback",version:"omp v1.1.0.2612"}),"\n",(0,a.jsx)(i.h2,{id:"m\xf4-t\u1EA3",children:"M\xf4 T\u1EA3"}),"\n",(0,a.jsxs)(i.p,{children:["Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi m\u1ED9t ng\u01B0\u1EDDi ch\u01A1i nh\u1EB7t pickup c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i \u0111\u01B0\u1EE3c t\u1EA1o ra b\u1EB1ng ",(0,a.jsx)(i.a,{href:"../functions/CreatePlayerPickup",children:"CreatePlayerPickup"}),"."]}),"\n",(0,a.jsxs)(i.table,{children:[(0,a.jsx)(i.thead,{children:(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.th,{children:"T\xean"}),(0,a.jsx)(i.th,{children:"M\xf4 T\u1EA3"})]})}),(0,a.jsxs)(i.tbody,{children:[(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"playerid"}),(0,a.jsx)(i.td,{children:"ID c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i \u0111\xe3 nh\u1EB7t pickup c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i."})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"pickupid"}),(0,a.jsxs)(i.td,{children:["ID c\u1EE7a pickup c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i, tr\u1EA3 v\u1EC1 b\u1EDFi ",(0,a.jsx)(i.a,{href:"../functions/CreatePlayerPickup",children:"CreatePlayerPickup"})]})]})]})]}),"\n",(0,a.jsx)(i.h2,{id:"tr\u1EA3-v\u1EC1",children:"Tr\u1EA3 V\u1EC1"}),"\n",(0,a.jsx)(i.p,{children:"Callback n\xe0y lu\xf4n \u0111\u01B0\u1EE3c g\u1ECDi \u0111\u1EA7u ti\xean trong gamemode."}),"\n",(0,a.jsx)(i.h2,{id:"v\xed-d\u1EE5",children:"V\xed D\u1EE5"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-c",children:"new player_pickup_Cash[MAX_PLAYERS];\nnew player_pickup_Health[MAX_PLAYERS];\n\npublic OnPlayerConnect(playerid)\n{\n    player_pickup_Cash[playerid] = CreatePlayerPickup(playerid, 1274, 2, 2009.8658, 1220.0293, 10.8206, -1);\n    player_pickup_Health[playerid] = CreatePlayerPickup(playerid, 1240, 2, 2009.8474, 1218.0459, 10.8175, -1);\n    return 1;\n}\n\npublic OnPlayerPickUpPlayerPickup(playerid, pickupid)\n{\n    if (pickupid == player_pickup_Cash[playerid])\n    {\n        GivePlayerMoney(playerid, 1000);\n    }\n    else if (pickupid == player_pickup_Health[playerid])\n    {\n        SetPlayerHealth(playerid, 100.0);\n    }\n    return 1;\n}\n"})}),"\n",(0,a.jsx)(i.h2,{id:"callbacks-li\xean-quan",children:"Callbacks Li\xean Quan"}),"\n",(0,a.jsx)(i.p,{children:"C\xe1c callback sau c\xf3 th\u1EC3 h\u1EEFu \xedch, v\xec ch\xfang li\xean quan \u0111\u1EBFn callback n\xe0y theo c\xe1ch n\xe0y hay c\xe1ch kh\xe1c:"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.a,{href:"OnPlayerPickupStreamIn",children:"OnPlayerPickupStreamIn"}),": \u0110\u01B0\u1EE3c g\u1ECDi khi m\u1ED9t pickup c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i v\xe0o ph\u1EA1m vi t\u1EA7m nh\xecn c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.a,{href:"OnPlayerPickupStreamOut",children:"OnPlayerPickupStreamOut"}),": \u0110\u01B0\u1EE3c g\u1ECDi khi m\u1ED9t pickup c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i r\u1EDDi kh\u1ECFi ph\u1EA1m vi t\u1EA7m nh\xecn c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i."]}),"\n"]}),"\n",(0,a.jsx)(i.h2,{id:"h\xe0m-li\xean-quan",children:"H\xe0m Li\xean Quan"}),"\n",(0,a.jsx)(i.p,{children:"C\xe1c h\xe0m sau c\xf3 th\u1EC3 h\u1EEFu \xedch, v\xec ch\xfang li\xean quan \u0111\u1EBFn callback n\xe0y theo c\xe1ch n\xe0y hay c\xe1ch kh\xe1c:"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.a,{href:"../functions/CreatePlayerPickup",children:"CreatePlayerPickup"}),": T\u1EA1o m\u1ED9t pickup ch\u1EC9 hi\u1EC3n th\u1ECB cho m\u1ED9t ng\u01B0\u1EDDi ch\u01A1i."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.a,{href:"../functions/DestroyPlayerPickup",children:"DestroyPlayerPickup"}),": H\u1EE7y b\u1ECF m\u1ED9t pickup c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i."]}),"\n"]})]})}function h(e={}){let{wrapper:i}={...(0,l.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return t},a:function(){return r}});var c=n(67294);let a={},l=c.createContext(a);function r(e){let i=c.useContext(l);return c.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function t(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),c.createElement(l.Provider,{value:i},e.children)}}}]);