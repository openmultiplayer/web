"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["57797"],{81602:function(e,t,i){i.r(t),i.d(t,{default:()=>c,frontMatter:()=>s,metadata:()=>r,assets:()=>o,toc:()=>d,contentTitle:()=>l});var r=JSON.parse('{"id":"scripting/functions/SetPlayerObjectMaterial","title":"SetPlayerObjectMaterial","description":"Zamijeni teksturu player-objekta sa teksturom drugog modela u igri.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/SetPlayerObjectMaterial.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerObjectMaterial","permalink":"/bs/docs/scripting/functions/SetPlayerObjectMaterial","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetPlayerObjectMaterial.md","tags":[{"inline":true,"label":"player","permalink":"/bs/docs/tags/player"}],"version":"current","frontMatter":{"title":"SetPlayerObjectMaterial","sidebar_label":"SetPlayerObjectMaterial","description":"Zamijeni teksturu player-objekta sa teksturom drugog modela u igri.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerName","permalink":"/bs/docs/scripting/functions/SetPlayerName"},"next":{"title":"SetPlayerObjectMaterialText","permalink":"/bs/docs/scripting/functions/SetPlayerObjectMaterialText"}}'),n=i("85893"),a=i("50065");let s={title:"SetPlayerObjectMaterial",sidebar_label:"SetPlayerObjectMaterial",description:"Zamijeni teksturu player-objekta sa teksturom drugog modela u igri.",tags:["player"]},l=void 0,o={},d=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2},{value:"Filterskripte koje podr\u017Eavaju teksturisanje/text",id:"filterskripte-koje-podr\u017Eavaju-teksturisanjetext",level:2}];function j(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,n.jsx)(t.p,{children:"Zamijeni teksturu player-objekta sa teksturom drugog modela u igri."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Ime"}),(0,n.jsx)(t.th,{children:"Deskripcija"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"playerid"}),(0,n.jsx)(t.td,{children:"ID igra\u010Da za kojeg je objekat povezan/asociran."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"objectid"}),(0,n.jsx)(t.td,{children:"ID objekta za zamijeniti teksturu."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"materialindex"}),(0,n.jsx)(t.td,{children:"Index materijala na objektu za zamijeniti (od 0 do 15)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"modelid"}),(0,n.jsx)(t.td,{children:"ID modela na kome se nalazi zamjenska tekstura. Koristite 0 za alfa. Koristite -1 za promjenu boje materijala bez mijenjanja postoje\u0107e teksture."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"txdname"}),(0,n.jsx)(t.td,{children:'Ime txd fatoteke koja sadr\u017Ei zamjensku teksturu (koristi "none" ako nije potrebno)'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"texturename"}),(0,n.jsx)(t.td,{children:'Ime teksture za koristiti kao zamjensku (koristi "none" ako nije potrebno)'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"materialcolor"}),(0,n.jsx)(t.td,{children:"Boja objekta za postaviti, kao cijeli broj ili hex u ARGB formatu. Kori\u0161tenjem 0 \u010Duva trenutnu boju materijala."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:"Ova funkcija ne returna (vra\u0107a) nikakve posebne vrijednosti."}),"\n",(0,n.jsx)(t.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid,cmdtext[])\n{\n    if (!strcmp(cmdtext,"/objmat",true))\n    {\n        new\n            Float:X, Float:Y, Float:Z,\n            myObject;\n\n        GetPlayerPos(playerid, X, Y, Z);\n        myObject = CreatePlayerObject(playerid, 19371, X, Y, Z+0.5, 0.0, 0.0, 0.0, 300.0);\n        SetPlayerObjectMaterial(playerid, myObject, 0, 19341, "egg_texts", "easter_egg01", 0xFFFFFFFF);\n        // Mijenja teksturu na\u0161eg player-objekta sa teksturom modela 19341\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"Vertex (vrhovno) osvjetljenje objekta \u0107e nestati ako se promijeni boja materijala."})}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"MORA\u0160 koristiti ARGB format boje, ne RGBA kao u client porukama itd."})}),"\n",(0,n.jsx)(t.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"SetObjectMaterial",children:"SetObjectMaterial"}),": Zamijeni teksturu objekta sa teksturom drugog modela iz igre."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"filterskripte-koje-podr\u017Eavaju-teksturisanjetext",children:"Filterskripte koje podr\u017Eavaju teksturisanje/text"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Ultimate Creator od Nexius"}),"\n",(0,n.jsx)(t.li,{children:"Texture Studio od [uL]Pottus"}),"\n",(0,n.jsx)(t.li,{children:"Fusez's Map Editor od RedFusion"}),"\n",(0,n.jsx)(t.li,{children:"Map Editor I od adri1"}),"\n"]})]})}function c(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(j,{...e})}):j(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return l},a:function(){return s}});var r=i(67294);let n={},a=r.createContext(n);function s(e){let t=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);