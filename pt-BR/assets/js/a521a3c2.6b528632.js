"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["85749"],{84070:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>o,metadata:()=>i,assets:()=>a,toc:()=>c,contentTitle:()=>l});var i=JSON.parse('{"id":"scripting/functions/listenport","title":"listenport","description":"Sets up the port number to listen at.","source":"@site/docs/scripting/functions/listenport.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/listenport","permalink":"/pt-BR/docs/scripting/functions/listenport","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/listenport.md","tags":[{"inline":true,"label":"datagram","permalink":"/pt-BR/docs/tags/datagram"}],"version":"current","frontMatter":{"title":"listenport","sidebar_label":"listenport","description":"Sets up the port number to listen at.","tags":["datagram"]},"sidebar":"docsSidebar","previous":{"title":"ispacked","permalink":"/pt-BR/docs/scripting/functions/ispacked"},"next":{"title":"max","permalink":"/pt-BR/docs/scripting/functions/max"}}'),s=n("85893"),r=n("50065");let o={title:"listenport",sidebar_label:"listenport",description:"Sets up the port number to listen at.",tags:["datagram"]},l=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",admonition:"admonition",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{LowercaseNote:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsxs)(t.p,{children:["This function is deprecated, Use ",(0,s.jsx)(t.a,{href:"HTTP",children:"HTTP"})," or ",(0,s.jsx)(t.a,{href:"https://github.com/Southclaws/pawn-requests",children:"pawn-requests"})," plugin."]})}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Sets up the port number to listen at."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"port"}),(0,s.jsx)(t.td,{children:"The number of the port to listen at.  This must be a value between 1 and 65535, but you should probably avoid to use any of the reserved port numbers."})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"return-values",children:"Return Values"}),"\n",(0,s.jsxs)(t.p,{children:["This function always returns ",(0,s.jsx)(t.strong,{children:"0"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["You must call this function ",(0,s.jsx)(t.strong,{children:"before"})," receiving the first packet. In other words, you should set up a port in main."]}),"\n",(0,s.jsxs)(t.li,{children:["If no port number has been explicitily chosen, the module will listen at port ",(0,s.jsx)(t.strong,{children:"9930"}),"."]}),"\n"]})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"@receivestring",children:"@receivestring"}),": A packed was received."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"sendstring",children:"sendstring"}),": Sends a packet containing a string."]}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return o}});var i=n(67294);let s={},r=i.createContext(s);function o(e){let t=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);