"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["20331"],{63061:function(e,t,n){n.r(t),n.d(t,{default:()=>p,frontMatter:()=>c,metadata:()=>s,assets:()=>a,toc:()=>o,contentTitle:()=>d});var s=JSON.parse('{"id":"scripting/functions/sendpacket","title":"sendpacket","description":"Sends a packet. (deprecated function)","source":"@site/docs/scripting/functions/sendpacket.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/sendpacket","permalink":"/sl/docs/scripting/functions/sendpacket","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/sendpacket.md","tags":[{"inline":true,"label":"datagram","permalink":"/sl/docs/tags/datagram"}],"version":"current","frontMatter":{"title":"sendpacket","sidebar_label":"sendpacket","description":"Sends a packet. (deprecated function)","tags":["datagram"]},"sidebar":"docsSidebar","previous":{"title":"random","permalink":"/sl/docs/scripting/functions/random"},"next":{"title":"sendstring","permalink":"/sl/docs/scripting/functions/sendstring"}}'),i=n("85893"),r=n("50065");let c={title:"sendpacket",sidebar_label:"sendpacket",description:"Sends a packet. (deprecated function)",tags:["datagram"]},d=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Related Functions",id:"related-functions",level:2}];function l(e){let t={a:"a",admonition:"admonition",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{LowercaseNote:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsxs)(t.p,{children:["This function is deprecated, Use ",(0,i.jsx)(t.a,{href:"HTTP",children:"HTTP"})," or ",(0,i.jsx)(t.a,{href:"https://github.com/Southclaws/pawn-requests",children:"pawn-requests"})," plugin."]})}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Sends a packet."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"const packet[]"}),(0,i.jsx)(t.td,{children:"The buffer that contains the packet to send."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"size"}),(0,i.jsx)(t.td,{children:"Buffer size."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:'const destination[] = ""'}),(0,i.jsxs)(t.td,{children:["The IP address and port number to which the packet must be sent. If absent or an empty string, this function will broadcast the packet and use the default port number 9930 ",(0,i.jsx)(t.em,{children:'(optional="")'})]})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"return-values",children:"Return Values"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"1"})," on success, ",(0,i.jsx)(t.strong,{children:"0"})," on failure."]}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"@receivepacket",children:"@receivepacket"}),": A packed was received."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"sendstring",children:"sendstring"}),": Sends a packet containing a string."]}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return c}});var s=n(67294);let i={},r=s.createContext(i);function c(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);