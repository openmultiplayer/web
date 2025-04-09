"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["13571"],{13797:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>s,metadata:()=>a,assets:()=>c,toc:()=>d,contentTitle:()=>r});var a=JSON.parse('{"id":"scripting/callbacks/OnClientMessage","title":"OnClientMessage","description":"Bu geri \xe7a\u011F\u0131rma, NPC bir ClientMessage alg\u0131land\u0131\u011F\u0131nda tetiklenir.","source":"@site/i18n/tr/docusaurus-plugin-content-docs/current/scripting/callbacks/OnClientMessage.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnClientMessage","permalink":"/tr/docs/scripting/callbacks/OnClientMessage","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnClientMessage.md","tags":[],"version":"current","frontMatter":{"title":"OnClientMessage","sidebar_label":"OnClientMessage","description":"Bu geri \xe7a\u011F\u0131rma, NPC bir ClientMessage alg\u0131land\u0131\u011F\u0131nda tetiklenir.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"OnClientCheckResponse","permalink":"/tr/docs/scripting/callbacks/OnClientCheckResponse"},"next":{"title":"OnDialogResponse","permalink":"/tr/docs/scripting/callbacks/OnDialogResponse"}}'),i=t("85893"),l=t("50065");let s={title:"OnClientMessage",sidebar_label:"OnClientMessage",description:"Bu geri \xe7a\u011F\u0131rma, NPC bir ClientMessage alg\u0131land\u0131\u011F\u0131nda tetiklenir.",tags:[]},r=void 0,c={},d=[{value:"A\xe7\u0131klama",id:"a\xe7\u0131klama",level:2},{value:"\xc7al\u0131\u015F\u0131nca Verece\u011Fi Sonu\xe7lar",id:"\xe7al\u0131\u015F\u0131nca-verece\u011Fi-sonu\xe7lar",level:2},{value:"\xd6rnek",id:"\xf6rnek",level:2},{value:"Ba\u011Flant\u0131l\u0131 Fonksiyonlar",id:"ba\u011Flant\u0131l\u0131-fonksiyonlar",level:2}];function o(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"a\xe7\u0131klama",children:"A\xe7\u0131klama"}),"\n",(0,i.jsxs)(n.p,{children:["Bu geri \xe7a\u011F\u0131rma, NPC bir ClientMessage alg\u0131land\u0131\u011F\u0131nda tetiklenir. Bu, \xf6rne\u011Fin bir SendClientMessageToAll fonksiyonu g\xf6nderdi\u011Finizde oyuncuya SendClientMessage fonksiyonu yans\u0131d\u0131\u011F\u0131 anda tetiklenecektir. Birisi chat'e mesaj g\xf6nderdi\u011Fi zaman tetiklenmeyecek fakat bunu yapmak isterseniz bkz. NPC",":OnPlayerText"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parametre"}),(0,i.jsx)(n.th,{children:"A\xe7\u0131klama"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"color"}),(0,i.jsx)(n.td,{children:"ClientMessage rengi."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"text[]"}),(0,i.jsx)(n.td,{children:"G\xf6nderilen mesaj i\xe7eri\u011Fi."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"\xe7al\u0131\u015F\u0131nca-verece\u011Fi-sonu\xe7lar",children:"\xc7al\u0131\u015F\u0131nca Verece\u011Fi Sonu\xe7lar"}),"\n",(0,i.jsx)(n.p,{children:"Bu geri \xe7a\u011F\u0131rma herhangi bir sonu\xe7 vermez."}),"\n",(0,i.jsx)(n.h2,{id:"\xf6rnek",children:"\xd6rnek"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'public OnClientMessage(color, text[])\n{\n    if(strfind(text,"Banka Paras\u0131: $0")\xa0!= -1) SendChat("Ben fakirim.\xa0:(");\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"ba\u011Flant\u0131l\u0131-fonksiyonlar",children:"Ba\u011Flant\u0131l\u0131 Fonksiyonlar"})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return s}});var a=t(67294);let i={},l=a.createContext(i);function s(e){let n=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);