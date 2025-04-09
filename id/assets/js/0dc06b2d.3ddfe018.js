"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["89725"],{78889:function(e,a,n){n.r(a),n.d(a,{default:()=>o,frontMatter:()=>l,metadata:()=>i,assets:()=>d,toc:()=>c,contentTitle:()=>s});var i=JSON.parse('{"id":"scripting/callbacks/OnPlayerStreamOut","title":"OnPlayerStreamOut","description":"Callback ini akan terpanggil ketika pemain lain keluar dari jangkauan stream dari klien pemain.","source":"@site/i18n/id/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerStreamOut.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerStreamOut","permalink":"/id/docs/scripting/callbacks/OnPlayerStreamOut","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerStreamOut.md","tags":[{"inline":true,"label":"player","permalink":"/id/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerStreamOut","sidebar_label":"OnPlayerStreamOut","description":"Callback ini akan terpanggil ketika pemain lain keluar dari jangkauan stream dari klien pemain.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerStreamIn","permalink":"/id/docs/scripting/callbacks/OnPlayerStreamIn"},"next":{"title":"OnPlayerTakeDamage","permalink":"/id/docs/scripting/callbacks/OnPlayerTakeDamage"}}'),t=n("85893"),r=n("50065");let l={title:"OnPlayerStreamOut",sidebar_label:"OnPlayerStreamOut",description:"Callback ini akan terpanggil ketika pemain lain keluar dari jangkauan stream dari klien pemain.",tags:["player"]},s=void 0,d={},c=[{value:"Deskripsi",id:"deskripsi",level:2},{value:"Returns",id:"returns",level:2},{value:"Contoh",id:"contoh",level:2},{value:"Catatan",id:"catatan",level:2},{value:"Fungsi Terkait",id:"fungsi-terkait",level:2}];function u(e){let a={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h2,{id:"deskripsi",children:"Deskripsi"}),"\n",(0,t.jsx)(a.p,{children:"Callback ini akan terpanggil ketika pemain lain keluar dari jangkauan stream dari klien pemain."}),"\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{children:"Nama"}),(0,t.jsx)(a.th,{children:"Deskripsi"})]})}),(0,t.jsxs)(a.tbody,{children:[(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"playerid"}),(0,t.jsx)(a.td,{children:"ID dari pemain lain yang keluar jangakauan stream klien pemain."})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"forplayerid"}),(0,t.jsx)(a.td,{children:"ID dari pemain yang berada di luar jangkauan stream pemain lain."})]})]})]}),"\n",(0,t.jsx)(a.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(a.p,{children:"Ini akan selalu terpanggil pertama di filterscripts"}),"\n",(0,t.jsx)(a.h2,{id:"contoh",children:"Contoh"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-c",children:'public OnPlayerStreamOut(playerid, forplayerid)\n{\n    new string[80];\n    format(string, sizeof(string), "Pemain ID %d telah menjauhimu.", playerid);\n    SendClientMessage(forplayerid, 0xFF0000FF, string);\n    return 1;\n}\n'})}),"\n",(0,t.jsx)(a.h2,{id:"catatan",children:"Catatan"}),"\n",(0,t.jsx)(a.admonition,{type:"tip",children:(0,t.jsx)(a.p,{children:"Callback ini akan terpanggil juga oleh NPC."})}),"\n",(0,t.jsx)(a.h2,{id:"fungsi-terkait",children:"Fungsi Terkait"})]})}function o(e={}){let{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},50065:function(e,a,n){n.d(a,{Z:function(){return s},a:function(){return l}});var i=n(67294);let t={},r=i.createContext(t);function l(e){let a=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:a},e.children)}}}]);