"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["78559"],{48215:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>i,assets:()=>a,toc:()=>o,contentTitle:()=>r});var i=JSON.parse('{"id":"scripting/callbacks/OnIncomingConnection","title":"OnIncomingConnection","description":"This callback is called when an IP address attempts a connection to the server.","source":"@site/docs/scripting/callbacks/OnIncomingConnection.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnIncomingConnection","permalink":"/pl/docs/scripting/callbacks/OnIncomingConnection","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnIncomingConnection.md","tags":[],"version":"current","frontMatter":{"title":"OnIncomingConnection","sidebar_label":"OnIncomingConnection","description":"This callback is called when an IP address attempts a connection to the server.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"OnGameModeInit","permalink":"/pl/docs/scripting/callbacks/OnGameModeInit"},"next":{"title":"OnNPCConnect","permalink":"/pl/docs/scripting/callbacks/OnNPCConnect"}}'),s=t("85893"),c=t("50065");let l={title:"OnIncomingConnection",sidebar_label:"OnIncomingConnection",description:"This callback is called when an IP address attempts a connection to the server.",tags:[]},r=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"This callback is called when an IP address attempts a connection to the server. To block incoming connections, use BlockIpAddress."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"playerid"}),(0,s.jsx)(n.td,{children:"The ID of the player attempting to connect"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ip_address[]"}),(0,s.jsx)(n.td,{children:"The IP address of the player attempting to connect"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"port"}),(0,s.jsx)(n.td,{children:"The port of the attempted connection"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:"1 - Will prevent other filterscripts from receiving this callback."}),"\n",(0,s.jsx)(n.p,{children:"0 - Indicates that this callback will be passed to the next filterscript."}),"\n",(0,s.jsx)(n.p,{children:"It is always called first in filterscripts."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'public OnIncomingConnection(playerid, ip_address[], port)\n{\n    printf("Incoming connection for player ID %i [IP/port: %s:%i]", playerid, ip_address, port);\n    return 1;\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,s.jsx)(n.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"OnPlayerConnect",children:"OnPlayerConnect"}),": This callback is called when a player connects to the server."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"OnPlayerDisconnect",children:"OnPlayerDisconnect"}),": This callback is called when a player disconnects from the server."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"OnPlayerFinishedDownloading",children:"OnPlayerFinishedDownloading"}),": This callback is called when a player finishes downloading custom models."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsx)(n.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"../functions/BlockIpAddress",children:"BlockIpAddress"}),": Block an IP address from connecting to the server for a set amount of time."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"../functions/UnBlockIpAddress",children:"UnBlockIpAddress"}),": Unblock an IP that was previously blocked."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return l}});var i=t(67294);let s={},c=i.createContext(s);function l(e){let n=i.useContext(c);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);