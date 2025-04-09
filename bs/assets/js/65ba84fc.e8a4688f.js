"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["42599"],{99255:function(e,t,i){i.r(t),i.d(t,{default:()=>j,frontMatter:()=>s,metadata:()=>r,assets:()=>d,toc:()=>c,contentTitle:()=>l});var r=JSON.parse('{"id":"scripting/functions/SetPlayerObjectMaterialText","title":"SetPlayerObjectMaterialText","description":"Zamijeni teksturu player objekta sa tekstom.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/SetPlayerObjectMaterialText.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerObjectMaterialText","permalink":"/bs/docs/scripting/functions/SetPlayerObjectMaterialText","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetPlayerObjectMaterialText.md","tags":[{"inline":true,"label":"player","permalink":"/bs/docs/tags/player"}],"version":"current","frontMatter":{"title":"SetPlayerObjectMaterialText","sidebar_label":"SetPlayerObjectMaterialText","description":"Zamijeni teksturu player objekta sa tekstom.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerObjectMaterial","permalink":"/bs/docs/scripting/functions/SetPlayerObjectMaterial"},"next":{"title":"SetPlayerObjectMoveSpeed","permalink":"/bs/docs/scripting/functions/SetPlayerObjectMoveSpeed"}}'),n=i("85893"),a=i("50065");let s={title:"SetPlayerObjectMaterialText",sidebar_label:"SetPlayerObjectMaterialText",description:"Zamijeni teksturu player objekta sa tekstom.",tags:["player"]},l=void 0,d={},c=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2},{value:"Filterskripte koje podr\u017Eavaju teksturisanje/text",id:"filterskripte-koje-podr\u017Eavaju-teksturisanjetext",level:2}];function o(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,n.jsx)(t.p,{children:"Zamijeni teksturu player objekta sa tekstom."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Ime"}),(0,n.jsx)(t.th,{children:"Deskripcija"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"playerid"}),(0,n.jsx)(t.td,{children:"ID igra\u010Da \u010Dijem player-objektu \u017Eelite promijeniti teksturu."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"objectid"}),(0,n.jsx)(t.td,{children:"ID objekta na kojeg \u017Eelite postaviti tekst."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"text"}),(0,n.jsx)(t.td,{children:"Tekst za postaviti."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"materialindex"}),(0,n.jsx)(t.td,{children:"Index materijala za zamijeniti sa tekstom (DEFAULT: 0)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"materialsize"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:"../resources/materialtextsizes",children:"Veli\u010Dina"})," materijala (DEFAULT: 256x128)."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fontface"}),(0,n.jsx)(t.td,{children:"Font za koristiti (DEFAULT: Arial)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fontsize"}),(0,n.jsx)(t.td,{children:"Veli\u010Dina teksta (DEFAULT: 24) (MAX 255)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"bold"}),(0,n.jsx)(t.td,{children:"Bold text. Postavi na 1 za bold (deblje), 0 za ne (DEFAULT: 1)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fontcolor"}),(0,n.jsx)(t.td,{children:"Boja teksta (DEFAULT: White)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"backcolor"}),(0,n.jsx)(t.td,{children:"Boja pozadine (DEFAULT: Ni\u0161ta (transparent))."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"textalignment"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:"../resources/materialtextsizes",children:"Poravnanje"})," teksta (DEFAULT: Left)."]})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:"Ova funkcija ne returna (vra\u0107a) nikakve posebne vrijednosti."}),"\n",(0,n.jsx)(t.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:'if (strcmp("/text", cmdtext, true) == 0)\n{\n    new myObject = CreatePlayerObject(playerid, 19353, 0, 0, 10, 0.0, 0.0, 90.0); // kreiraj objekat\n    SetPlayerObjectMaterialText(playerid, myObject, "SA-MP {FFFFFF}0.3{008500}e {FF8200}RC7", 0, OBJECT_MATERIAL_SIZE_256x128,\\\n"Arial", 28, 0, 0xFFFF8200, 0xFF000000, OBJECT_MATERIAL_TEXT_ALIGN_CENTER);\n    // napi\u0161i "SA-MP 0.3e RC7" na objekat, sa narand\u017Eastom bojom fonta i crnom pozadinom\nreturn 1;\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"Ugradnja boja mo\u017Ee se koristiti za vi\u0161e boja u tekstu."})}),"\n",(0,n.jsx)(t.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"SetObjectMaterialText",children:"SetObjectMaterialText"}),": Zamijeni teksturu objekta sa tekstom."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"SetPlayerObjectMaterial",children:"SetPlayerObjectMaterial"}),": Zamijeni teksturu player objekta sa teksturom drugog modela iz igre."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"filterskripte-koje-podr\u017Eavaju-teksturisanjetext",children:"Filterskripte koje podr\u017Eavaju teksturisanje/text"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Ultimate Creator od Nexius"}),"\n",(0,n.jsx)(t.li,{children:"Texture Studio od [uL]Pottus"}),"\n",(0,n.jsx)(t.li,{children:"Fusez's Map Editor od RedFusion"}),"\n",(0,n.jsx)(t.li,{children:"Map Editor I od adri1"}),"\n"]})]})}function j(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return l},a:function(){return s}});var r=i(67294);let n={},a=r.createContext(n);function s(e){let t=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);