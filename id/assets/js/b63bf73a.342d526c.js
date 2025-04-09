"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["41162"],{75028:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>i,assets:()=>a,toc:()=>d,contentTitle:()=>r});var i=JSON.parse('{"id":"scripting/callbacks/OnClientCheckResponse","title":"OnClientCheckResponse","description":"This callback is called when a SendClientCheck request completes","source":"@site/i18n/id/docusaurus-plugin-content-docs/current/scripting/callbacks/OnClientCheckResponse.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnClientCheckResponse","permalink":"/id/docs/scripting/callbacks/OnClientCheckResponse","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnClientCheckResponse.md","tags":[],"version":"current","frontMatter":{"title":"OnClientCheckResponse","sidebar_label":"OnClientCheckResponse","description":"This callback is called when a SendClientCheck request completes","tags":[]},"sidebar":"docsSidebar","previous":{"title":"OnActorStreamOut","permalink":"/id/docs/scripting/callbacks/OnActorStreamOut"},"next":{"title":"OnClientMessage","permalink":"/id/docs/scripting/callbacks/OnClientMessage"}}'),s=t("85893"),l=t("50065");let c={title:"OnClientCheckResponse",sidebar_label:"OnClientCheckResponse",description:"This callback is called when a SendClientCheck request completes",tags:[]},r=void 0,a={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Contoh",id:"contoh",level:2},{value:"Catatan",id:"catatan",level:2},{value:"Fungsi Terkait",id:"fungsi-terkait",level:2}];function o(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"This callback is called when a SendClientCheck request completes."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"playerid"}),(0,s.jsx)(n.td,{children:"ID player yang dicek."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"actionid"}),(0,s.jsx)(n.td,{children:"Tipe cek yang dilakukan."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"memaddr"}),(0,s.jsx)(n.td,{children:"'address' yang diminta."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"retndata"}),(0,s.jsx)(n.td,{children:"Hasil dari cek tersebut."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:"Selalu terpanggil pertama kali di filterscripts."}),"\n",(0,s.jsx)(n.h2,{id:"contoh",children:"Contoh"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'public OnPlayerConnect(playerid)\n{\n    SendClientCheck(playerid, 0x48, 0, 0, 2);\n    return 1;\n}\n\npublic OnClientCheckResponse(playerid, actionid, memaddr, retndata)\n{\n    if(actionid == 0x48) // or 72\n    {\n        print("The player is connecting using the PC client.");\n    }\n    return 1;\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"catatan",children:"Catatan"}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"Callback ini hanya terpanggil di filterscripts."})}),"\n",(0,s.jsx)(n.h2,{id:"fungsi-terkait",children:"Fungsi Terkait"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"../functions/SendClientCheck",children:"SendClientCheck"}),": Melakukan memory check kepada client."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return c}});var i=t(67294);let s={},l=i.createContext(s);function c(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);