"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["50898"],{14735:function(e,i,t){t.r(i),t.d(i,{default:()=>p,frontMatter:()=>s,metadata:()=>n,assets:()=>u,toc:()=>o,contentTitle:()=>l});var n=JSON.parse('{"id":"scripting/functions/DestroyPickup","title":"DestroyPickup","description":"L\xf6scht ein mit CreatePickup erstelltes Pickup.","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/scripting/functions/DestroyPickup.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/DestroyPickup","permalink":"/de/docs/scripting/functions/DestroyPickup","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/DestroyPickup.md","tags":[],"version":"current","frontMatter":{"title":"DestroyPickup","sidebar_label":"DestroyPickup","description":"L\xf6scht ein mit CreatePickup erstelltes Pickup.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"DestroyObject","permalink":"/de/docs/scripting/functions/DestroyObject"},"next":{"title":"DestroyPlayerObject","permalink":"/de/docs/scripting/functions/DestroyPlayerObject"}}'),r=t("85893"),c=t("50065");let s={title:"DestroyPickup",sidebar_label:"DestroyPickup",description:"L\xf6scht ein mit CreatePickup erstelltes Pickup.",tags:[]},l=void 0,u={},o=[{value:"Beschreibung",id:"beschreibung",level:2},{value:"R\xfcckgabe(return value)",id:"r\xfcckgabereturn-value",level:2},{value:"Beispiel",id:"beispiel",level:2},{value:"\xc4hnliche Funktionen",id:"\xe4hnliche-funktionen",level:2}];function a(e){let i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"beschreibung",children:"Beschreibung"}),"\n",(0,r.jsx)(i.p,{children:"L\xf6scht ein mit CreatePickup erstelltes Pickup."}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Name"}),(0,r.jsx)(i.th,{children:"Beschreibung"})]})}),(0,r.jsx)(i.tbody,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"pickup"}),(0,r.jsx)(i.td,{children:"Die ID des Pickups, dass gel\xf6scht wird (R\xfcckgabewert bei CreatePickup)."})]})})]}),"\n",(0,r.jsx)(i.h2,{id:"r\xfcckgabereturn-value",children:"R\xfcckgabe(return value)"}),"\n",(0,r.jsx)(i.p,{children:"Diese Funktion hat keinen R\xfcckgabewert."}),"\n",(0,r.jsx)(i.h2,{id:"beispiel",children:"Beispiel"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-c",children:"// Erstelle ein Pickup f\xfcr Armor (R\xfcstung). ID wird in pickup_armor gespeichert.\npickup_armour = CreatePickup ( 1242, 2, 1503.3359, 1432.3585, 10.1191 );\n\n//L\xf6sche das Pickup \xfcber die gespeicherte ID wieder...\nDestroyPickup(pickup_armour);\n"})}),"\n",(0,r.jsx)(i.h2,{id:"\xe4hnliche-funktionen",children:"\xc4hnliche Funktionen"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"CreatePickup",children:"CreatePickup"}),": Erstelle ein Pickup."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"../callbacks/OnPlayerPickUpPickup",children:"OnPlayerPickUpPickup"}),": Wird aufgerufen wenn ein Spieler ein Pickup aufhebt."]}),"\n"]})]})}function p(e={}){let{wrapper:i}={...(0,c.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},50065:function(e,i,t){t.d(i,{Z:function(){return l},a:function(){return s}});var n=t(67294);let r={},c=n.createContext(r);function s(e){let i=n.useContext(c);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(c.Provider,{value:i},e.children)}}}]);