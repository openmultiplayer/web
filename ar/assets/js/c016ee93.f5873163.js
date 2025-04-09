"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["28089"],{50042:function(e,r,t){t.r(r),t.d(r,{default:()=>h,frontMatter:()=>o,metadata:()=>n,assets:()=>a,toc:()=>d,contentTitle:()=>l});var n=JSON.parse('{"id":"server/CommonServerIssues","title":"Common Server Issues","description":"Server instantly crashes when started","source":"@site/docs/server/CommonServerIssues.md","sourceDirName":"server","slug":"/server/CommonServerIssues","permalink":"/ar/docs/server/CommonServerIssues","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/server/CommonServerIssues.md","tags":[],"version":"current","frontMatter":{"title":"Common Server Issues","sidebar_label":"Common Server Issues"},"sidebar":"docsSidebar","previous":{"title":"Weather IDs","permalink":"/ar/docs/scripting/resources/weatherid"},"next":{"title":"Controlling a Server","permalink":"/ar/docs/server/ControllingServer"}}'),s=t("85893"),i=t("50065");let o={title:"Common Server Issues",sidebar_label:"Common Server Issues"},l=void 0,a={},d=[{value:"Server instantly crashes when started",id:"server-instantly-crashes-when-started",level:2},{value:"Server is not working - firewall is disabled",id:"server-is-not-working---firewall-is-disabled",level:2},{value:"&#39;Packet was modified&#39;",id:"packet-was-modified",level:2},{value:"&#39;Warning: client exceeded messageslimit&#39;",id:"warning-client-exceeded-messageslimit",level:2},{value:"&#39;Warning: client exceeded ackslimit&#39;",id:"warning-client-exceeded-ackslimit",level:2},{value:"&#39;Warning: client exceeded messageholelimit&#39;",id:"warning-client-exceeded-messageholelimit",level:2},{value:"&#39;Warning: Too many out-of-order messages&#39;",id:"warning-too-many-out-of-order-messages",level:2},{value:"Players constantly getting &quot;Unacceptable NickName&quot; error but it is valid",id:"players-constantly-getting-unacceptable-nickname-error-but-it-is-valid",level:2},{value:"<code>MSVCR___.dll</code>/<code>MSVCP___.dll</code> not found",id:"msvcr___dllmsvcp___dll-not-found",level:2}];function c(e){let r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h2,{id:"server-instantly-crashes-when-started",children:"Server instantly crashes when started"}),"\n",(0,s.jsxs)(r.p,{children:["Most commonly it's an error in your server.cfg file or your gamemode is missing. Check the server_log.txt file and the reason should be located at the bottom. If not, check crashinfo.txt file. The better solution to find out what is causing the crash is using the Crash detect plugin by Zeex/0x5A656578 (",(0,s.jsx)(r.a,{href:"https://github.com/Zeex/samp-plugin-crashdetect",children:"click for link"}),") which will give more information like line numbers, function names, parameter values, etc. If the script is compiled in debug mode (-d3 flag) to make compiler put extra information about all that stuff into the output .amx."]}),"\n",(0,s.jsx)(r.h2,{id:"server-is-not-working---firewall-is-disabled",children:"Server is not working - firewall is disabled"}),"\n",(0,s.jsxs)(r.p,{children:["You will need to forward your ports to allow players to join your server. You can forward your ports using the PF Port Checker. Download it from: ",(0,s.jsx)(r.a,{href:"http://www.portforward.com",children:"www.portforward.com"})," If the ports are not forwarded that means you have to open them in your router. You can check the router list at ",(0,s.jsx)(r.a,{href:"http://portforward.com/english/routers/port_forwarding/routerindex.htm",title:"http://portforward.com/english/routers/port_forwarding/routerindex.htm",children:"http://portforward.com/english/routers/port_forwarding/routerindex.htm"})]}),"\n",(0,s.jsx)(r.p,{children:"It has all the information on how to forward ports."}),"\n",(0,s.jsx)(r.h2,{id:"packet-was-modified",children:"'Packet was modified'"}),"\n",(0,s.jsx)(r.p,{children:"The error commonly shown as:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"[hh:mm:ss] Packet was modified, sent by id: <id>, ip: <ip>:<port>\n"})}),"\n",(0,s.jsx)(r.p,{children:"happens when a player times out or is currently having connection issues."}),"\n",(0,s.jsx)(r.h2,{id:"warning-client-exceeded-messageslimit",children:"'Warning: client exceeded messageslimit'"}),"\n",(0,s.jsx)(r.p,{children:"The error commonly shown as:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"Warning: client exceeded 'messageslimit' (1) <ip>:<port> (<count>) Limit: x/sec\n"})}),"\n",(0,s.jsx)(r.p,{children:"happens when number of messages per second a client sends to the server exceeds."}),"\n",(0,s.jsx)(r.h2,{id:"warning-client-exceeded-ackslimit",children:"'Warning: client exceeded ackslimit'"}),"\n",(0,s.jsx)(r.p,{children:"The error commonly shown as:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"Warning: client exceeded 'ackslimit' <ip>:<port> (<count>) Limit: x/sec\n"})}),"\n",(0,s.jsx)(r.p,{children:"happens when acks limit exceeds."}),"\n",(0,s.jsx)(r.h2,{id:"warning-client-exceeded-messageholelimit",children:"'Warning: client exceeded messageholelimit'"}),"\n",(0,s.jsx)(r.p,{children:"The error commonly shown as:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"Warning: client exceeded 'messageholelimit' (<type>) <ip>:<port> (<count>) Limit: x\n"})}),"\n",(0,s.jsx)(r.p,{children:"happens when message hole limit exceeds."}),"\n",(0,s.jsx)(r.h2,{id:"warning-too-many-out-of-order-messages",children:"'Warning: Too many out-of-order messages'"}),"\n",(0,s.jsx)(r.p,{children:"The error commonly shown as:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:"Warning: Too many out-of-order messages from player <ip>:<port> (<count>) Limit: x (messageholelimit)\n"})}),"\n",(0,s.jsx)(r.p,{children:"Happens when 'out of order messages' reuses messageholelimit setting."}),"\n",(0,s.jsxs)(r.p,{children:["For more information about this, refer to ",(0,s.jsx)(r.a,{href:"ControllingServer#RCON_Commands",children:"this"})]}),"\n",(0,s.jsx)(r.h2,{id:"players-constantly-getting-unacceptable-nickname-error-but-it-is-valid",children:'Players constantly getting "Unacceptable NickName" error but it is valid'}),"\n",(0,s.jsx)(r.p,{children:"If you are sure you use an acceptable name and the server runs on Windows then try to change the compatibility option of the samp-server.exe to Windows 98 and it should be fixed after a server restart."}),"\n",(0,s.jsx)(r.p,{children:"Windows servers with high up time may also cause this issue to occur. This has been noticed of around 50 days of server up time. To resolve it, a reboot is required."}),"\n",(0,s.jsxs)(r.h2,{id:"msvcr___dllmsvcp___dll-not-found",children:[(0,s.jsx)(r.code,{children:"MSVCR___.dll"}),"/",(0,s.jsx)(r.code,{children:"MSVCP___.dll"})," not found"]}),"\n",(0,s.jsx)(r.p,{children:"This problem regularly occurs on Windows servers when trying to load a plugin that was developed using a higher version of the Visual C++ runtime than is currently installed on your computer. To fix this, download the appropriate Microsoft Visual C++ runtime libraries. Note that the SA-MP server is 32 bit, therefore you'll also need to download the 32 bit (x86) version of the runtime, regardless of architecture. The version of the runtime you specifically require is denoted by the numbers in the filename (see the table below), although it does not hurt to install all of them. These libraries do not stack, or in other words: you won't get the runtimes for the 2013 and earlier versions if you only install the 2015 version."}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Version number"}),(0,s.jsx)(r.th,{children:"Runtime"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"10.0"}),(0,s.jsx)(r.td,{children:"Microsoft Visual C++ 2010 x86 Redistributable"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"11.0"}),(0,s.jsx)(r.td,{children:"Microsoft Visual C++ 2012 x86 Redistributable"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"12.0"}),(0,s.jsx)(r.td,{children:"Microsoft Visual C++ 2013 x86 Redistributable"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"14.0"}),(0,s.jsx)(r.td,{children:"Microsoft Visual C++ 2015 x86 Redistributable"})]})]})]})]})}function h(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},50065:function(e,r,t){t.d(r,{Z:function(){return l},a:function(){return o}});var n=t(67294);let s={},i=n.createContext(s);function o(e){let r=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);