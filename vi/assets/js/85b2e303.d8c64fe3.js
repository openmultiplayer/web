"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["6428"],{49723:function(i,n,e){e.r(n),e.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>c,assets:()=>p,toc:()=>s,contentTitle:()=>t});var c=JSON.parse('{"id":"scripting/callbacks/OnPlayerPickupStreamIn","title":"OnPlayerPickupStreamIn","description":"Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi m\u1ED9t pickup c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i v\xe0o ph\u1EA1m vi t\u1EA7m nh\xecn c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i.","source":"@site/i18n/vi/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerPickupStreamIn.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerPickupStreamIn","permalink":"/vi/docs/scripting/callbacks/OnPlayerPickupStreamIn","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerPickupStreamIn.md","tags":[{"inline":true,"label":"player","permalink":"/vi/docs/tags/player"},{"inline":true,"label":"pickup","permalink":"/vi/docs/tags/pickup"},{"inline":true,"label":"playerpickup","permalink":"/vi/docs/tags/playerpickup"}],"version":"current","frontMatter":{"title":"OnPlayerPickupStreamIn","sidebar_label":"OnPlayerPickupStreamIn","description":"Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi m\u1ED9t pickup c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i v\xe0o ph\u1EA1m vi t\u1EA7m nh\xecn c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i.","tags":["player","pickup","playerpickup"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerPickUpPlayerPickup","permalink":"/vi/docs/scripting/callbacks/OnPlayerPickUpPlayerPickup"},"next":{"title":"OnPlayerPickupStreamOut","permalink":"/vi/docs/scripting/callbacks/OnPlayerPickupStreamOut"}}'),a=e("85893"),l=e("50065");let r={title:"OnPlayerPickupStreamIn",sidebar_label:"OnPlayerPickupStreamIn",description:"Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi m\u1ED9t pickup c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i v\xe0o ph\u1EA1m vi t\u1EA7m nh\xecn c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i.",tags:["player","pickup","playerpickup"]},t=void 0,p={},s=[{value:"M\xf4 T\u1EA3",id:"m\xf4-t\u1EA3",level:2},{value:"Tr\u1EA3 V\u1EC1",id:"tr\u1EA3-v\u1EC1",level:2},{value:"V\xed D\u1EE5",id:"v\xed-d\u1EE5",level:2},{value:"Callbacks Li\xean Quan",id:"callbacks-li\xean-quan",level:2},{value:"H\xe0m Li\xean Quan",id:"h\xe0m-li\xean-quan",level:2}];function u(i){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...i.components},{VersionWarn:e}=n;return e||function(i,n){throw Error("Expected "+(n?"component":"object")+" `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e,{name:"callback",version:"omp v1.1.0.2612"}),"\n",(0,a.jsx)(n.h2,{id:"m\xf4-t\u1EA3",children:"M\xf4 T\u1EA3"}),"\n",(0,a.jsx)(n.p,{children:"Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi m\u1ED9t pickup c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i v\xe0o ph\u1EA1m vi t\u1EA7m nh\xecn c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i."}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"T\xean"}),(0,a.jsx)(n.th,{children:"M\xf4 T\u1EA3"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"pickupid"}),(0,a.jsxs)(n.td,{children:["ID c\u1EE7a pickup c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i, tr\u1EA3 v\u1EC1 b\u1EDFi ",(0,a.jsx)(n.a,{href:"../functions/CreatePlayerPickup",children:"CreatePlayerPickup"})]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"playerid"}),(0,a.jsx)(n.td,{children:"ID c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i m\xe0 pickup c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i v\xe0o ph\u1EA1m vi t\u1EA7m nh\xecn."})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"tr\u1EA3-v\u1EC1",children:"Tr\u1EA3 V\u1EC1"}),"\n",(0,a.jsx)(n.p,{children:"Callback n\xe0y lu\xf4n \u0111\u01B0\u1EE3c g\u1ECDi \u0111\u1EA7u ti\xean trong gamemode."}),"\n",(0,a.jsx)(n.h2,{id:"v\xed-d\u1EE5",children:"V\xed D\u1EE5"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:'new g_PlayerPickupHealth[MAX_PLAYERS];\n\npublic OnPlayerConnect(playerid)\n{\n    g_PlayerPickupHealth[playerid] = CreatePlayerPickup(playerid, 1240, 2, 2009.8474, 1218.0459, 10.8175);\n    return 1;\n}\n\npublic OnPlayerPickupStreamIn(pickupid, playerid)\n{\n    if (pickupid == g_PlayerPickupHealth[playerid])\n    {\n        printf("g_PlayerPickupHealth is streamed in for player id %d", playerid);\n    }\n    return 1;\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"callbacks-li\xean-quan",children:"Callbacks Li\xean Quan"}),"\n",(0,a.jsx)(n.p,{children:"C\xe1c callback sau c\xf3 th\u1EC3 h\u1EEFu \xedch, v\xec ch\xfang li\xean quan \u0111\u1EBFn callback n\xe0y theo c\xe1ch n\xe0y hay c\xe1ch kh\xe1c:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"OnPlayerPickUpPlayerPickup",children:"OnPlayerPickUpPlayerPickup"}),": \u0110\u01B0\u1EE3c g\u1ECDi khi m\u1ED9t ng\u01B0\u1EDDi ch\u01A1i nh\u1EB7t pickup c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"OnPlayerPickupStreamOut",children:"OnPlayerPickupStreamOut"}),": \u0110\u01B0\u1EE3c g\u1ECDi khi m\u1ED9t pickup c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i r\u1EDDi kh\u1ECFi ph\u1EA1m vi t\u1EA7m nh\xecn c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"h\xe0m-li\xean-quan",children:"H\xe0m Li\xean Quan"}),"\n",(0,a.jsx)(n.p,{children:"C\xe1c h\xe0m sau c\xf3 th\u1EC3 h\u1EEFu \xedch, v\xec ch\xfang li\xean quan \u0111\u1EBFn callback n\xe0y theo c\xe1ch n\xe0y hay c\xe1ch kh\xe1c:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"../functions/CreatePlayerPickup",children:"CreatePlayerPickup"}),": T\u1EA1o m\u1ED9t pickup ch\u1EC9 hi\u1EC3n th\u1ECB cho m\u1ED9t ng\u01B0\u1EDDi ch\u01A1i."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"../functions/DestroyPlayerPickup",children:"DestroyPlayerPickup"}),": H\u1EE7y b\u1ECF m\u1ED9t pickup c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i."]}),"\n"]})]})}function h(i={}){let{wrapper:n}={...(0,l.a)(),...i.components};return n?(0,a.jsx)(n,{...i,children:(0,a.jsx)(u,{...i})}):u(i)}},50065:function(i,n,e){e.d(n,{Z:function(){return t},a:function(){return r}});var c=e(67294);let a={},l=c.createContext(a);function r(i){let n=c.useContext(l);return c.useMemo(function(){return"function"==typeof i?i(n):{...n,...i}},[n,i])}function t(i){let n;return n=i.disableParentContext?"function"==typeof i.components?i.components(a):i.components||a:r(i.components),c.createElement(l.Provider,{value:n},i.children)}}}]);