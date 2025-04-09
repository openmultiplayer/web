"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["97010"],{62432:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>a,metadata:()=>s,assets:()=>o,toc:()=>l,contentTitle:()=>c});var s=JSON.parse('{"id":"scripting/functions/NetStats_ConnectionStatus","title":"NetStats_ConnectionStatus","description":"Gets the player\'s current connection status.","source":"@site/docs/scripting/functions/NetStats_ConnectionStatus.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/NetStats_ConnectionStatus","permalink":"/pt-BR/docs/scripting/functions/NetStats_ConnectionStatus","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/NetStats_ConnectionStatus.md","tags":[{"inline":true,"label":"network monitoring","permalink":"/pt-BR/docs/tags/network-monitoring"}],"version":"current","frontMatter":{"title":"NetStats_ConnectionStatus","sidebar_label":"NetStats_ConnectionStatus","description":"Gets the player\'s current connection status.","tags":["network monitoring"]},"sidebar":"docsSidebar","previous":{"title":"NetStats_BytesSent","permalink":"/pt-BR/docs/scripting/functions/NetStats_BytesSent"},"next":{"title":"NetStats_GetConnectedTime","permalink":"/pt-BR/docs/scripting/functions/NetStats_GetConnectedTime"}}'),r=n("85893"),i=n("50065");let a={title:"NetStats_ConnectionStatus",sidebar_label:"NetStats_ConnectionStatus",description:"Gets the player's current connection status.",tags:["network monitoring"]},c=void 0,o={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Resources",id:"related-resources",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Gets the player's current connection status."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"playerid"}),(0,r.jsx)(t.td,{children:"The ID of the player to get the connection status of."})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.p,{children:["The player's ",(0,r.jsx)(t.a,{href:"../resources/connectionstatus",children:"connection status"}),", as an integer value."]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/connectionstatus"))\n    {\n        static ConnectionStatuses[9][48] = \n        {\n            "No Action",\n            "Disconnect ASAP",\n            "Disconnect ASAP Silently",\n            "Disconnect On No Ack",\n            "Requested Connection",\n            "Handling Connection Request",\n            "Unverified Sender",\n            "Set Encryption On Multiple 16 Byte Packet",\n            "Connected"\n        };\n\n        new connectionStatus = NetStats_ConnectionStatus(playerid);\n\n        new string[144];\n        format(string, sizeof(string), "Your current connection status: %s", ConnectionStatuses[connectionStatus]);\n        SendClientMessage(playerid, -1, string);\n    }\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetPlayerNetworkStats",children:"GetPlayerNetworkStats"}),": Gets a player's networkstats and saves it into a string."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetNetworkStats",children:"GetNetworkStats"}),": Gets the server's networkstats and saves it into a string."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"NetStats_GetConnectedTime",children:"NetStats_GetConnectedTime"}),": Get the time that a player has been connected for."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"NetStats_MessagesReceived",children:"NetStats_MessagesReceived"}),": Get the number of network messages the server has received from the player."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"NetStats_BytesReceived",children:"NetStats_BytesReceived"}),": Get the amount of information (in bytes) that the server has received from the player."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"NetStats_MessagesSent",children:"NetStats_MessagesSent"}),": Get the number of network messages the server has sent to the player."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"NetStats_BytesSent",children:"NetStats_BytesSent"}),": Get the amount of information (in bytes) that the server has sent to the player."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"NetStats_MessagesRecvPerSecond",children:"NetStats_MessagesRecvPerSecond"}),": Get the number of network messages the server has received from the player in the last second."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"NetStats_PacketLossPercent",children:"NetStats_PacketLossPercent"}),": Get a player's packet loss percent."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"NetStats_GetIpPort",children:"NetStats_GetIpPort"}),": Get a player's IP and port."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"IsPlayerConnected",children:"IsPlayerConnected"}),": Check if a player is connected to the server."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"../callbacks/OnPlayerConnect",children:"OnPlayerConnect"}),": Called when a player connects to the server."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"../callbacks/OnPlayerDisconnect",children:"OnPlayerDisconnect"}),": Called when a player leaves the server."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"../resources/connectionstatus",children:"Connection Status"})}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return a}});var s=n(67294);let r={},i=s.createContext(r);function a(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);