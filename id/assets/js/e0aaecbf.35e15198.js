"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["83846"],{18573:function(e,a,n){n.r(a),n.d(a,{default:()=>o,frontMatter:()=>r,metadata:()=>t,assets:()=>c,toc:()=>d,contentTitle:()=>s});var t=JSON.parse('{"id":"scripting/callbacks/OnPlayerStateChange","title":"OnPlayerStateChange","description":"Callback ini akan terpanggil ketika pemain melakukan perubahan status.","source":"@site/i18n/id/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerStateChange.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerStateChange","permalink":"/id/docs/scripting/callbacks/OnPlayerStateChange","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerStateChange.md","tags":[{"inline":true,"label":"player","permalink":"/id/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerStateChange","sidebar_label":"OnPlayerStateChange","description":"Callback ini akan terpanggil ketika pemain melakukan perubahan status.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerSpawn","permalink":"/id/docs/scripting/callbacks/OnPlayerSpawn"},"next":{"title":"OnPlayerStreamIn","permalink":"/id/docs/scripting/callbacks/OnPlayerStreamIn"}}'),i=n("85893"),l=n("50065");let r={title:"OnPlayerStateChange",sidebar_label:"OnPlayerStateChange",description:"Callback ini akan terpanggil ketika pemain melakukan perubahan status.",tags:["player"]},s=void 0,c={},d=[{value:"Deskripsi",id:"deskripsi",level:2},{value:"Returns",id:"returns",level:2},{value:"Contoh",id:"contoh",level:2},{value:"Catatan",id:"catatan",level:2},{value:"Fungsi Terkait",id:"fungsi-terkait",level:2}];function p(e){let a={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.h2,{id:"deskripsi",children:"Deskripsi"}),"\n",(0,i.jsx)(a.p,{children:"Callback ini akan terpanggil ketika pemain melakukan perubahan status. (misalnya saat player yang sedang mengendarai)"}),"\n",(0,i.jsxs)(a.table,{children:[(0,i.jsx)(a.thead,{children:(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.th,{children:"Nama"}),(0,i.jsx)(a.th,{children:"Deskripsi"})]})}),(0,i.jsxs)(a.tbody,{children:[(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.td,{children:"playerid"}),(0,i.jsx)(a.td,{children:"ID dari pemain yang melakukan perubahan status."})]}),(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.td,{children:"newstate"}),(0,i.jsx)(a.td,{children:"Status baru dari player."})]}),(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.td,{children:"oldstate"}),(0,i.jsx)(a.td,{children:"Status lama dari player."})]})]})]}),"\n",(0,i.jsxs)(a.p,{children:["Pergi ke ",(0,i.jsx)(a.a,{href:"../resources/playerstates",children:"Player States"})," untuk list semua variable player state."]}),"\n",(0,i.jsx)(a.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(a.p,{children:"Selalu terpanggil pertama di filterscripts."}),"\n",(0,i.jsx)(a.h2,{id:"contoh",children:"Contoh"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-c",children:"public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)\n{\n    if (oldstate == PLAYER_STATE_ONFOOT && newstate == PLAYER_STATE_DRIVER) // Pemain menaiki kendaraan (Wajib Mobil) dan menjadi supir\n    {\n        new vehicleid = GetPlayerVehicleID(playerid);\n        AddVehicleComponent(vehicleid, 1010); // Menambahkan NOS ke Kendaraan Anda\n    }\n    return 1;\n}\n"})}),"\n",(0,i.jsx)(a.h2,{id:"catatan",children:"Catatan"}),"\n",(0,i.jsx)(a.admonition,{type:"tip",children:(0,i.jsx)(a.p,{children:"Callback ini juga dipanggil oleh NPC"})}),"\n",(0,i.jsx)(a.h2,{id:"fungsi-terkait",children:"Fungsi Terkait"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.a,{href:"../functions/GetPlayerState",children:"GetPlayerState"}),": Mendapatkan status pemain saat ini"]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.a,{href:"../functions/GetPlayerSpecialAction",children:"GetPlayerSpecialAction"}),": Mendapatkan animasi spesial pemain saat ini."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.a,{href:"../functions/SetPlayerSpecialAction",children:"SetPlayerSpecialAction"}),": Mengatur animasi spesial pemain."]}),"\n"]})]})}function o(e={}){let{wrapper:a}={...(0,l.a)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},50065:function(e,a,n){n.d(a,{Z:function(){return s},a:function(){return r}});var t=n(67294);let i={},l=t.createContext(i);function r(e){let a=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(l.Provider,{value:a},e.children)}}}]);