"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["92701"],{85366:function(e,l,r){r.r(l),r.d(l,{default:()=>p,frontMatter:()=>t,metadata:()=>n,assets:()=>c,toc:()=>d,contentTitle:()=>s});var n=JSON.parse('{"id":"scripting/callbacks/OnPlayerClickPlayer","title":"OnPlayerClickPlayer","description":"Kli\u010De se, ko igralec dvakrat klikne na igralca na semaforju (TAB).","source":"@site/i18n/sl/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerClickPlayer.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerClickPlayer","permalink":"/sl/docs/scripting/callbacks/OnPlayerClickPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerClickPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/sl/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerClickPlayer","sidebar_label":"OnPlayerClickPlayer","description":"Kli\u010De se, ko igralec dvakrat klikne na igralca na semaforju (TAB).","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerClickMap","permalink":"/sl/docs/scripting/callbacks/OnPlayerClickMap"},"next":{"title":"OnPlayerClickPlayerGangZone","permalink":"/sl/docs/scripting/callbacks/OnPlayerClickPlayerGangZone"}}'),i=r("85893"),a=r("50065");let t={title:"OnPlayerClickPlayer",sidebar_label:"OnPlayerClickPlayer",description:"Kli\u010De se, ko igralec dvakrat klikne na igralca na semaforju (TAB).",tags:["player"]},s=void 0,c={},d=[{value:"Opis",id:"opis",level:2},{value:"Returns",id:"returns",level:2},{value:"Primeri",id:"primeri",level:2},{value:"Opombe",id:"opombe",level:2},{value:"Srodne Funkcijo",id:"srodne-funkcijo",level:2}];function o(e){let l={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.h2,{id:"opis",children:"Opis"}),"\n",(0,i.jsx)(l.p,{children:"Kli\u010De se, ko igralec dvakrat klikne na igralca na semaforju (TAB)."}),"\n",(0,i.jsxs)(l.table,{children:[(0,i.jsx)(l.thead,{children:(0,i.jsxs)(l.tr,{children:[(0,i.jsx)(l.th,{children:"Ime"}),(0,i.jsx)(l.th,{children:"Opis"})]})}),(0,i.jsxs)(l.tbody,{children:[(0,i.jsxs)(l.tr,{children:[(0,i.jsx)(l.td,{children:"playerid"}),(0,i.jsx)(l.td,{children:"ID igralec, ki je kliknil na igralca na semaforju."})]}),(0,i.jsxs)(l.tr,{children:[(0,i.jsx)(l.td,{children:"clickedplayerid"}),(0,i.jsx)(l.td,{children:"ID igralec, na katerega se klikne."})]}),(0,i.jsxs)(l.tr,{children:[(0,i.jsx)(l.td,{children:"source"}),(0,i.jsx)(l.td,{children:"Vir klika predvajalnika."})]})]})]}),"\n",(0,i.jsx)(l.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(l.p,{children:'1 - Prepre\u010Dil bo druge "filterskript" prejeli to "callback".'}),"\n",(0,i.jsx)(l.p,{children:'0 - Pomeni, da bo ta "callback" se posreduje na naslednjo "filterskripte".'}),"\n",(0,i.jsx)(l.p,{children:'Vedno je bila povabljena prva v "filterscript".'}),"\n",(0,i.jsx)(l.h2,{id:"primeri",children:"Primeri"}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-c",children:'public OnPlayerClickPlayer(playerid, clickedplayerid, CLICK_SOURCE:source)\n{\n    new message[32];\n    format(message, sizeof(message), "Kliknili ste na predvajalnik %d", clickedplayerid);\n    SendClientMessage(playerid, 0xFFFFFFFF, message);\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(l.h2,{id:"opombe",children:"Opombe"}),"\n",(0,i.jsx)(l.admonition,{type:"tip",children:(0,i.jsx)(l.p,{children:"Trenutno je na voljo samo ena 'source' (0 - CLICK_SOURCE_SCOREBOARD). Vztrajnost tega argumenta ka\u017Ee, da bo v prihodnosti morda podprtih ve\u010D virov."})}),"\n",(0,i.jsx)(l.h2,{id:"srodne-funkcijo",children:"Srodne Funkcijo"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.a,{href:"OnPlayerClickTextDraw.md",children:"OnPlayerClickTextDraw"}),": Povabljen, ko igralec klikne risanje besedila."]}),"\n"]})]})}function p(e={}){let{wrapper:l}={...(0,a.a)(),...e.components};return l?(0,i.jsx)(l,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},50065:function(e,l,r){r.d(l,{Z:function(){return s},a:function(){return t}});var n=r(67294);let i={},a=n.createContext(i);function t(e){let l=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(l):{...l,...e}},[l,e])}function s(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),n.createElement(a.Provider,{value:l},e.children)}}}]);