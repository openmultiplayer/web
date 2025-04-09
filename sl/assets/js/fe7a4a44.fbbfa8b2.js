"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["37670"],{74381:function(e,i,n){n.r(i),n.d(i,{default:()=>p,frontMatter:()=>l,metadata:()=>t,assets:()=>a,toc:()=>d,contentTitle:()=>s});var t=JSON.parse('{"id":"scripting/callbacks/OnEnterExitModShop","title":"OnEnterExitModShop","description":"Ta povratni klic se pokli\u010De, ko igralec vstopi v mod trgovino ali jo zapusti.","source":"@site/i18n/sl/docusaurus-plugin-content-docs/current/scripting/callbacks/OnEnterExitModShop.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnEnterExitModShop","permalink":"/sl/docs/scripting/callbacks/OnEnterExitModShop","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnEnterExitModShop.md","tags":[],"version":"current","frontMatter":{"title":"OnEnterExitModShop","sidebar_label":"OnEnterExitModShop","description":"Ta povratni klic se pokli\u010De, ko igralec vstopi v mod trgovino ali jo zapusti.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"OnDialogResponse","permalink":"/sl/docs/scripting/callbacks/OnDialogResponse"},"next":{"title":"OnFilterScriptExit","permalink":"/sl/docs/scripting/callbacks/OnFilterScriptExit"}}'),o=n("85893"),r=n("50065");let l={title:"OnEnterExitModShop",sidebar_label:"OnEnterExitModShop",description:"Ta povratni klic se pokli\u010De, ko igralec vstopi v mod trgovino ali jo zapusti.",tags:[]},s=void 0,a={},d=[{value:"Opis",id:"opis",level:2},{value:"Returns",id:"returns",level:2},{value:"Primeri",id:"primeri",level:2},{value:"Opombe",id:"opombe",level:2},{value:"Povezane Funkcijo",id:"povezane-funkcijo",level:2}];function c(e){let i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.h2,{id:"opis",children:"Opis"}),"\n",(0,o.jsx)(i.p,{children:"Ta povratni klic se pokli\u010De, ko igralec vstopi v mod trgovino ali jo zapusti."}),"\n",(0,o.jsxs)(i.table,{children:[(0,o.jsx)(i.thead,{children:(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.th,{children:"Ime"}),(0,o.jsx)(i.th,{children:"Opis"})]})}),(0,o.jsxs)(i.tbody,{children:[(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:"playerid"}),(0,o.jsx)(i.td,{children:"ID predvajalnika, ki je vstopil v modshop ali izstopil iz njega"})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:"enterexit"}),(0,o.jsx)(i.td,{children:"1, \u010De je igralec vnesel 0, \u010De je zapustil modshop"})]}),(0,o.jsxs)(i.tr,{children:[(0,o.jsx)(i.td,{children:"interiorid"}),(0,o.jsx)(i.td,{children:"Modshop notranji ID, ki ga predvajalnik vnese (0, \u010De izstopi)"})]})]})]}),"\n",(0,o.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsx)(i.p,{children:'Vedno je bila povabljena prva v "filterscript".'}),"\n",(0,o.jsx)(i.h2,{id:"primeri",children:"Primeri"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-c",children:'public OnEnterExitModShop(playerid, enterexit, interiorid)\n{\n    if (enterexit == 0) // \u010Ce je enterexit 0, to pomeni, da zapu\u0161\u010Dajo modshop\n    {\n        SendClientMessage(playerid, COLOR_WHITE, "Lep avto! Obdav\u010Deni ste bili 100$.");\n        GivePlayerMoney(playerid, -100);\n    }\n    return 1;\n}\n'})}),"\n",(0,o.jsx)(i.h2,{id:"opombe",children:"Opombe"}),"\n",(0,o.jsx)(i.admonition,{type:"warning",children:(0,o.jsx)(i.p,{children:"Znane napake: igralci tr\u010Dijo, ko vstopijo v isto modshop"})}),"\n",(0,o.jsx)(i.h2,{id:"povezane-funkcijo",children:"Povezane Funkcijo"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.a,{href:"../functions/AddVehicleComponent.md",children:"AddVehicleComponent"}),": V vozilo dodajte komponento."]}),"\n"]})]})}function p(e={}){let{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return s},a:function(){return l}});var t=n(67294);let o={},r=t.createContext(o);function l(e){let i=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);