"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["13651"],{9519:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>c,metadata:()=>i,assets:()=>a,toc:()=>d,contentTitle:()=>l});var i=JSON.parse('{"id":"scripting/functions/CancelEdit","title":"CancelEdit","description":"Membatalkan mode mengedit objek untuk pemain.","source":"@site/i18n/id/docusaurus-plugin-content-docs/current/scripting/functions/CancelEdit.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/CancelEdit","permalink":"/id/docs/scripting/functions/CancelEdit","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/CancelEdit.md","tags":[],"version":"current","frontMatter":{"title":"CancelEdit","sidebar_label":"CancelEdit","description":"Membatalkan mode mengedit objek untuk pemain.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"CallRemoteFunction","permalink":"/id/docs/scripting/functions/CallRemoteFunction"},"next":{"title":"CancelSelectTextDraw","permalink":"/id/docs/scripting/functions/CancelSelectTextDraw"}}'),r=t("85893"),s=t("50065");let c={title:"CancelEdit",sidebar_label:"CancelEdit",description:"Membatalkan mode mengedit objek untuk pemain.",tags:[]},l=void 0,a={},d=[{value:"Deskripsi",id:"deskripsi",level:2},{value:"Returns",id:"returns",level:2},{value:"Contoh",id:"contoh",level:2},{value:"Fungsi Terkait",id:"fungsi-terkait",level:2}];function o(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"deskripsi",children:"Deskripsi"}),"\n",(0,r.jsx)(n.p,{children:"Membatalkan mode mengedit objek untuk pemain."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Nama"}),(0,r.jsx)(n.th,{children:"Deskripsi"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"ID pemain untuk membatalkan edit."})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:"Fungsi ini tidak mengembalikan nilai spesifik apapun."}),"\n",(0,r.jsx)(n.h2,{id:"contoh",children:"Contoh"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/stopedit", true))\n    {\n        CancelEdit(playerid);\n        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: Anda telah selesai mengedit objek!");\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"fungsi-terkait",children:"Fungsi Terkait"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"SelectObject",children:"SelectObject"}),": Untuk memilih objek."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"EditObject",children:"EditObject"}),": Untuk mengedit objek."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"EditPlayerObject",children:"EditPlayerObject"}),": Untuk mengedit objek"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"EditAttachedObject",children:"EditAttachedObject"}),": Untuk menempelkan objek."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"CreateObject",children:"CreateObject"}),": Untuk membuat object."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"DestroyObject",children:"DestroyObject"}),": Untuk menghapus objek."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"MoveObject",children:"MoveObject"}),": Untuk memindahkan objek."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return c}});var i=t(67294);let r={},s=i.createContext(r);function c(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);