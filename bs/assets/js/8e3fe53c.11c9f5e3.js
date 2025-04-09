"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["38257"],{41497:function(e,t,i){i.r(t),i.d(t,{default:()=>u,frontMatter:()=>a,metadata:()=>n,assets:()=>c,toc:()=>l,contentTitle:()=>o});var n=JSON.parse('{"id":"scripting/functions/NetStats_GetConnectedTime","title":"NetStats_GetConnectedTime","description":"Dobija koli\u010Dinu vremena (u milisekundama) za koje je igra\u010D povezan na server.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/NetStats_GetConnectedTime.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/NetStats_GetConnectedTime","permalink":"/bs/docs/scripting/functions/NetStats_GetConnectedTime","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/NetStats_GetConnectedTime.md","tags":[],"version":"current","frontMatter":{"title":"NetStats_GetConnectedTime","sidebar_label":"NetStats_GetConnectedTime","description":"Dobija koli\u010Dinu vremena (u milisekundama) za koje je igra\u010D povezan na server.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"NetStats_ConnectionStatus","permalink":"/bs/docs/scripting/functions/NetStats_ConnectionStatus"},"next":{"title":"NetStats_GetIpPort","permalink":"/bs/docs/scripting/functions/NetStats_GetIpPort"}}'),s=i("85893"),r=i("50065");let a={title:"NetStats_GetConnectedTime",sidebar_label:"NetStats_GetConnectedTime",description:"Dobija koli\u010Dinu vremena (u milisekundama) za koje je igra\u010D povezan na server.",tags:[]},o=void 0,c={},l=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,s.jsx)(t.p,{children:"Dobija koli\u010Dinu vremena (u milisekundama) za koje je igra\u010D povezan na server."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Ime"}),(0,s.jsx)(t.th,{children:"Deskripcija"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"playerid"}),(0,s.jsx)(t.td,{children:"ID igra\u010Da za dobiti vrijeme konekcije."})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:"Ova funkcija vra\u0107a koli\u010Dinu vremena (u milisekundama) za koje je igra\u010D povezan sa serverom. 0 je vra\u0107eno ako igra\u010D nije konektovan."}),"\n",(0,s.jsx)(t.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid,cmdtext[])\n{\n    if (!strcmp(cmdtext, "/connectedtime"))\n    {\n        new szString[144];\n        format(szString, sizeof(szString), "Konektovan si %i milisekundi na server.", NetStats_GetConnectedTime(playerid));\n        SendClientMessage(playerid, -1, szString);\n    }\n    return 1;\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsx)(t.p,{children:'The return value is not reset to zero after changing the game mode (using the RCON command "gmx").'})}),"\n",(0,s.jsx)(t.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetPlayerNetworkStats",children:"GetPlayerNetworkStats"}),": Dobija mre\u017Ene statistike igra\u010Da i pohranjuje ih u string."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetNetworkStats",children:"GetNetworkStats"}),": Dobija mre\u017Ene statistike servera i sprema ih u string."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"NetStats_MessagesReceived",children:"NetStats_MessagesReceived"}),": Dohvatite broj mre\u017Enih poruka koje je server primio od igra\u010Da."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"NetStats_BytesReceived",children:"NetStats_BytesReceived"}),": Dohvatite koli\u010Dinu informacija (u bajtovima) koju je poslu\u017Eitelj primio od igra\u010Da."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"NetStats_MessagesSent",children:"NetStats_MessagesSent"}),": Dohvatite broj mre\u017Enih poruka koje je server poslao igra\u010Du."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"NetStats_BytesSent",children:"NetStats_BytesSent"}),": Dohvatite koli\u010Dinu informacija (u bajtovima) koje je poslu\u017Eitelj poslao ure\u0111aju za reprodukciju."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"NetStats_MessagesRecvPerSecond",children:"NetStats_MessagesRecvPerSecond"}),": Dohvatite broj mre\u017Enih poruka koje je poslu\u017Eitelj primio od igra\u010Da u posljednjoj sekundi."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"NetStats_PacketLossPercent",children:"NetStats_PacketLossPercent"}),": Dobijte packet loss procenat igra\u010Da."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"NetStats_ConnectionStatus",children:"NetStats_ConnectionStatus"}),": Dohvatite status veze igra\u010Da."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"NetStats_GetIpPort",children:"NetStats_GetIpPort"}),": Nabavite IP adresu i port igra\u010Da."]}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return o},a:function(){return a}});var n=i(67294);let s={},r=n.createContext(s);function a(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);