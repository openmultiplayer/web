"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["20215"],{13423:function(e,t,i){i.r(t),i.d(t,{default:()=>d,frontMatter:()=>n,metadata:()=>r,assets:()=>s,toc:()=>o,contentTitle:()=>c});var r=JSON.parse('{"id":"scripting/functions/AttachPlayerObjectToVehicle","title":"AttachPlayerObjectToVehicle","description":"Prikva\u010Di player objekat za vozilo.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/AttachPlayerObjectToVehicle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AttachPlayerObjectToVehicle","permalink":"/bs/docs/scripting/functions/AttachPlayerObjectToVehicle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/AttachPlayerObjectToVehicle.md","tags":[{"inline":true,"label":"player","permalink":"/bs/docs/tags/player"},{"inline":true,"label":"vehicle","permalink":"/bs/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"AttachPlayerObjectToVehicle","sidebar_label":"AttachPlayerObjectToVehicle","description":"Prikva\u010Di player objekat za vozilo.","tags":["player","vehicle"]},"sidebar":"docsSidebar","previous":{"title":"AttachPlayerObjectToPlayer","permalink":"/bs/docs/scripting/functions/AttachPlayerObjectToPlayer"},"next":{"title":"AttachTrailerToVehicle","permalink":"/bs/docs/scripting/functions/AttachTrailerToVehicle"}}'),a=i("85893"),l=i("50065");let n={title:"AttachPlayerObjectToVehicle",sidebar_label:"AttachPlayerObjectToVehicle",description:"Prikva\u010Di player objekat za vozilo.",tags:["player","vehicle"]},c=void 0,s={},o=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function j(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,a.jsx)(t.p,{children:"Attach a player object to a vehicle."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Ime"}),(0,a.jsx)(t.th,{children:"Deskripcija"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"playerid"}),(0,a.jsx)(t.td,{children:"ID igra\u010Da za kojeg je kreiran objekat."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"objectid"}),(0,a.jsx)(t.td,{children:"ID objekta kojeg \u017Eelite prikva\u010Diti za vozilo."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"vehicleid"}),(0,a.jsx)(t.td,{children:"ID vozila za kojeg \u017Eelite prikva\u010Diti objekat."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["Float",":OffsetX"]}),(0,a.jsx)(t.td,{children:"Pomak polo\u017Eaja X za pri\u010Dvr\u0161\u0107ivanje."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["Float",":OffsetY"]}),(0,a.jsx)(t.td,{children:"Pomak polo\u017Eaja Y za pri\u010Dvr\u0161\u0107ivanje."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["Float",":OffsetZ"]}),(0,a.jsx)(t.td,{children:"Pomak polo\u017Eaja Z za pri\u010Dvr\u0161\u0107ivanje."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["Float",":RotX"]}),(0,a.jsx)(t.td,{children:"Pomak rotacije X za pri\u010Dvr\u0161\u0107ivanje."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["Float",":RotY"]}),(0,a.jsx)(t.td,{children:"Pomak rotacije Y za pri\u010Dvr\u0161\u0107ivanje."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["Float",":RotZ"]}),(0,a.jsx)(t.td,{children:"Pomak rotacije Z za pri\u010Dvr\u0161\u0107ivanje."})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(t.p,{children:"Ova funkcija ne returna(vra\u0107a) nikakve posebne vrijednosti."}),"\n",(0,a.jsx)(t.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-c",children:"public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)\n{\n    if (newstate == PLAYER_STATE_DRIVER) // Ako igra\u010D u\u0111e u vozilo\n    {\n        // Prikva\u010Di veliku kravu\n        new cow_object = CreatePlayerObject(playerid, 16442, 0, 0, 0, 0, 0, 0);\n\n        AttachPlayerObjectToVehicle(playerid, cow_object, GetPlayerVehicleID(playerid), 0.0, 0.0, 1.0, 0.0, 0.0, 0.0);\n    }\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsx)(t.p,{children:"Morate da kreirate objekat prije nego poku\u0161ate da ga privka\u010Dite za vozilo."})}),"\n",(0,a.jsx)(t.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"CreatePlayerObject",children:"CreatePlayerObject"}),": Napravi objekat samo za jednog igra\u010Da."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"DestroyPlayerObject",children:"DestroyPlayerObject"}),": Uni\u0161ti player objekat."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"IsValidPlayerObject",children:"IsValidPlayerObject"}),": Provjeri da li je odre\u0111eni player objekat validan."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"MovePlayerObject",children:"MovePlayerObject"}),": Pomjeri player objekat."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"StopPlayerObject",children:"StopPlayerObject"}),": Zaustavi player objekat od kretanja."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"SetPlayerObjectRot",children:"SetPlayerObjectRot"}),": Postavi rotaciju player objekta."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetPlayerObjectPos",children:"GetPlayerObjectPos"}),": Lociraj player objekat."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"SetPlayerObjectPos",children:"SetPlayerObjectPos"}),": Postavi poziciju player objekta."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetPlayerObjectRot",children:"GetPlayerObjectRot"}),": Provjeri rotaciju player objekta."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"AttachPlayerObjectToPlayer",children:"AttachPlayerObjectToPlayer"}),": Prikva\u010Di player objekat za igra\u010Da."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"CreateObject",children:"CreateObject"}),": Kreiraj objekat."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"DestroyObject",children:"DestroyObject"}),": Uni\u0161ti objekat."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"IsValidObject",children:"IsValidObject"}),": Provjerava da li je odre\u0111eni objekat validan."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"MoveObject",children:"MoveObject"}),": Pomjeri objekat."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"StopObject",children:"StopObject"}),": Zaustavi objekat od kretanja."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"SetObjectPos",children:"SetObjectPos"}),": Postavi poziciju objekta."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"SetObjectRot",children:"SetObjectRot"}),": Postavi rotaciju objekta."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetObjectPos",children:"GetObjectPos"}),": Lociraj objekat."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetObjectRot",children:"GetObjectRot"}),": Provjeri rotaciju objekta."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"AttachObjectToPlayer",children:"AttachObjectToPlayer"}),": Prikva\u010Di objekat za igra\u010Da."]}),"\n"]})]})}function d(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(j,{...e})}):j(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return c},a:function(){return n}});var r=i(67294);let a={},l=r.createContext(a);function n(e){let t=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);