"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["18654"],{14228:function(n,e,i){i.r(e),i.d(e,{default:()=>k,frontMatter:()=>r,metadata:()=>t,assets:()=>l,toc:()=>d,contentTitle:()=>c});var t=JSON.parse('{"id":"scripting/callbacks/OnIncomingConnection","title":"OnIncomingConnection","description":"Callback ini akan terpanggil ketika sebuah IP address mencoba untuk koneksi kedalam server.","source":"@site/i18n/id/docusaurus-plugin-content-docs/current/scripting/callbacks/OnIncomingConnection.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnIncomingConnection","permalink":"/id/docs/scripting/callbacks/OnIncomingConnection","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnIncomingConnection.md","tags":[],"version":"current","frontMatter":{"title":"OnIncomingConnection","sidebar_label":"OnIncomingConnection","description":"Callback ini akan terpanggil ketika sebuah IP address mencoba untuk koneksi kedalam server.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"OnGameModeInit","permalink":"/id/docs/scripting/callbacks/OnGameModeInit"},"next":{"title":"OnNPCConnect","permalink":"/id/docs/scripting/callbacks/OnNPCConnect"}}'),a=i("85893"),s=i("50065");let r={title:"OnIncomingConnection",sidebar_label:"OnIncomingConnection",description:"Callback ini akan terpanggil ketika sebuah IP address mencoba untuk koneksi kedalam server.",tags:[]},c=void 0,l={},d=[{value:"Deskripsi",id:"deskripsi",level:2},{value:"Returns",id:"returns",level:2},{value:"Contoh",id:"contoh",level:2},{value:"Fungsi Terkait",id:"fungsi-terkait",level:2}];function o(n){let e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"deskripsi",children:"Deskripsi"}),"\n",(0,a.jsx)(e.p,{children:"Callback ini akan terpanggil ketika sebuah IP address mencoba untuk koneksi kedalam server. Untuk memblokir koneksi yang ingin masuk, gunakan BlockIpAddress."}),"\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"Nama"}),(0,a.jsx)(e.th,{children:"Deskripsi"})]})}),(0,a.jsxs)(e.tbody,{children:[(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"playerid"}),(0,a.jsx)(e.td,{children:"ID dari pemain yang mencoba untuk koneksi"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"ip_address[]"}),(0,a.jsx)(e.td,{children:"IP address dari pemain yang mencoba untuk koneksi"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"port"}),(0,a.jsx)(e.td,{children:"Port dari pembuat koneksi"})]})]})]}),"\n",(0,a.jsx)(e.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(e.p,{children:"0 - Akan melarang filterscript lain untuk menerima callback ini."}),"\n",(0,a.jsx)(e.p,{children:"1 - Mengindikasikan bahwa callback ini akan dilanjutkan ke filtercript lain."}),"\n",(0,a.jsx)(e.p,{children:"Selalu terpanggil pertama di filterscripts."}),"\n",(0,a.jsx)(e.h2,{id:"contoh",children:"Contoh"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-c",children:'public OnIncomingConnection(playerid, ip_address[], port)\n{\n    printf("Pemain ID %d mencoba untuk koneksikan kedalam server [IP/Port: %s:%i]", playerid, ip_address, port);\n    return 1;\n}\n'})}),"\n",(0,a.jsx)(e.h2,{id:"fungsi-terkait",children:"Fungsi Terkait"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.a,{href:"../functions/BlockIpAddress.md",children:"BlockIpAddress"}),": Blokir sebuah IP Address untuk mengkoneksi kedalam server dalam waktu yang ditentukan."]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.a,{href:"../functions/UnBlockIpAddress.md",children:"UnBlockIpAddress"}),": Membuka Blokir sebuah IP Address yang sebelumnya di blokir."]}),"\n"]})]})}function k(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(o,{...n})}):o(n)}},50065:function(n,e,i){i.d(e,{Z:function(){return c},a:function(){return r}});var t=i(67294);let a={},s=t.createContext(a);function r(n){let e=t.useContext(s);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:r(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);