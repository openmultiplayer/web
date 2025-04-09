"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["1993"],{11541:function(e,i,n){n.r(i),n.d(i,{default:()=>j,frontMatter:()=>l,metadata:()=>r,assets:()=>o,toc:()=>d,contentTitle:()=>s});var r=JSON.parse('{"id":"scripting/functions/SetPlayerSkillLevel","title":"SetPlayerSkillLevel","description":"Postavite nivo vje\u0161tine odre\u0111ene vrste oru\u017Eja za igra\u010Da.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/SetPlayerSkillLevel.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerSkillLevel","permalink":"/bs/docs/scripting/functions/SetPlayerSkillLevel","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetPlayerSkillLevel.md","tags":[{"inline":true,"label":"player","permalink":"/bs/docs/tags/player"}],"version":"current","frontMatter":{"title":"SetPlayerSkillLevel","sidebar_label":"SetPlayerSkillLevel","description":"Postavite nivo vje\u0161tine odre\u0111ene vrste oru\u017Eja za igra\u010Da.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerShopName","permalink":"/bs/docs/scripting/functions/SetPlayerShopName"},"next":{"title":"SetPlayerSkin","permalink":"/bs/docs/scripting/functions/SetPlayerSkin"}}'),t=n("85893"),a=n("50065");let l={title:"SetPlayerSkillLevel",sidebar_label:"SetPlayerSkillLevel",description:"Postavite nivo vje\u0161tine odre\u0111ene vrste oru\u017Eja za igra\u010Da.",tags:["player"]},s=void 0,o={},d=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2},{value:"Srodne Informacije",id:"srodne-informacije",level:2}];function c(e){let i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,t.jsx)(i.p,{children:"Postavite nivo vje\u0161tine odre\u0111ene vrste oru\u017Eja za igra\u010Da."}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Ime"}),(0,t.jsx)(i.th,{children:"Deskripcija"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"playerid"}),(0,t.jsx)(i.td,{children:"ID igra\u010Da za postaviti nivo vje\u0161tine oru\u017Eja."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"skill"}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.a,{href:"../resources/weaponskills",children:"Oru\u017Eje"})," za postaviti vje\u0161tine."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"level"}),(0,t.jsx)(i.td,{children:"Razina vje\u0161tine koju treba postaviti za to oru\u017Eje, u rasponu od 0 do 999. Nivo izvan dosega maksimalizira\u0107e ga."})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(i.p,{children:"Ova funkcija ne returna (vra\u0107a) nikakve posebne vrijednosti."}),"\n",(0,t.jsx)(i.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-c",children:"public OnPlayerSpawn(playerid)\n{\n    SetPlayerSkillLevel(playerid, WEAPONSKILL_SAWNOFF_SHOTGUN, 1);\n    // To \u0107e natjerati igra\u010Da da koristi sawn-off sa jednom rukom.\n    return 1;\n}\n"})}),"\n",(0,t.jsx)(i.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,t.jsx)(i.admonition,{type:"warning",children:(0,t.jsx)(i.p,{children:"Parametar vje\u0161tine NIJE ID oru\u017Eja, to je vrsta vje\u0161tine. Kliknite ovdje za listu vrsta vje\u0161tina."})}),"\n",(0,t.jsx)(i.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"SetPlayerArmedWeapon",children:"SetPlayerArmedWeapon"}),': Postavite igra\u010Devo "armed" oru\u017Eje.']}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"GivePlayerWeapon",children:"GivePlayerWeapon"}),": Daj igra\u010Du oru\u017Eje."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"srodne-informacije",children:"Srodne Informacije"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"../resources/weaponskills#skill-levels",children:"Weapon Skills"}),": Popis oru\u017Eja koje se koriste za postavljanje nivoa vje\u0161tine igra\u010Da."]}),"\n"]})]})}function j(e={}){let{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return s},a:function(){return l}});var r=n(67294);let t={},a=r.createContext(t);function l(e){let i=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(a.Provider,{value:i},e.children)}}}]);