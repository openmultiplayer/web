"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["78630"],{55448:function(e,n,i){i.r(n),i.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>r,assets:()=>d,toc:()=>c,contentTitle:()=>s});var r=JSON.parse('{"id":"scripting/functions/HideMenuForPlayer","title":"HideMenuForPlayer","description":"Sakriva meni za igra\u010Da.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/HideMenuForPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/HideMenuForPlayer","permalink":"/bs/docs/scripting/functions/HideMenuForPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/HideMenuForPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/bs/docs/tags/player"},{"inline":true,"label":"menu","permalink":"/bs/docs/tags/menu"}],"version":"current","frontMatter":{"title":"HideMenuForPlayer","sidebar_label":"HideMenuForPlayer","description":"Sakriva meni za igra\u010Da.","tags":["player","menu"]},"sidebar":"docsSidebar","previous":{"title":"HideGameTextForPlayer","permalink":"/bs/docs/scripting/functions/HideGameTextForPlayer"},"next":{"title":"HideObjectForPlayer","permalink":"/bs/docs/scripting/functions/HideObjectForPlayer"}}'),t=i("85893"),a=i("50065");let l={title:"HideMenuForPlayer",sidebar_label:"HideMenuForPlayer",description:"Sakriva meni za igra\u010Da.",tags:["player","menu"]},s=void 0,d={},c=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function o(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,t.jsx)(n.p,{children:"Sakriva meni za igra\u010Da."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Ime"}),(0,t.jsx)(n.th,{children:"Deskripcija"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"menuid"}),(0,t.jsx)(n.td,{children:"ID menija za sakriti. Vra\u0107en od CreateMenu i proslije\u0111en do OnPlayerSelectedMenuRow."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"playerid"}),(0,t.jsx)(n.td,{children:"ID igra\u010Da za kojeg \u0107e meni biti sakriven."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:"1: Funkcija uspje\u0161no izvr\u0161ena."}),"\n",(0,t.jsx)(n.p,{children:"0: Funkcija neuspje\u0161no izvr\u0161ena."}),"\n",(0,t.jsx)(n.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'if (strcmp(cmdtext, "/menuhide", true) == 0)\n{\n    new Menu: myMenu = GetPlayerMenu(playerid);\n    HideMenuForPlayer(myMenu, playerid);\n    return 1;\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Ru\u0161i/crasha i server i igra\u010Da ako je dat neva\u017Ee\u0107i ID menija."})}),"\n",(0,t.jsx)(n.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"CreateMenu",children:"CreateMenu"}),": Kreiraj meni."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"AddMenuItem",children:"AddMenuItem"}),": Dodaje artikal u odre\u0111eni meni."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"SetMenuColumnHeader",children:"SetMenuColumnHeader"}),": Postavi zaglavlje za jednu kolonu u meniju."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"ShowMenuForPlayer",children:"ShowMenuForPlayer"}),": Prika\u017Ei meni za igra\u010Da."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return s},a:function(){return l}});var r=i(67294);let t={},a=r.createContext(t);function l(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);