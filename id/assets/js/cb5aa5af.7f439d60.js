"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["78920"],{86784:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>s,metadata:()=>a,assets:()=>c,toc:()=>d,contentTitle:()=>l});var a=JSON.parse('{"id":"scripting/callbacks/OnActorStreamOut","title":"OnActorStreamOut","description":"Callback ini akan terpanggil ketika sebuah aktor keluar di jangkauan stream dari klien pemain.","source":"@site/i18n/id/docusaurus-plugin-content-docs/current/scripting/callbacks/OnActorStreamOut.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnActorStreamOut","permalink":"/id/docs/scripting/callbacks/OnActorStreamOut","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnActorStreamOut.md","tags":[],"version":"current","frontMatter":{"title":"OnActorStreamOut","sidebar_label":"OnActorStreamOut","description":"Callback ini akan terpanggil ketika sebuah aktor keluar di jangkauan stream dari klien pemain.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"OnActorStreamIn","permalink":"/id/docs/scripting/callbacks/OnActorStreamIn"},"next":{"title":"OnClientCheckResponse","permalink":"/id/docs/scripting/callbacks/OnClientCheckResponse"}}'),i=t("85893"),r=t("50065");let s={title:"OnActorStreamOut",sidebar_label:"OnActorStreamOut",description:"Callback ini akan terpanggil ketika sebuah aktor keluar di jangkauan stream dari klien pemain.",tags:[]},l=void 0,c={},d=[{value:"Deskripsi",id:"deskripsi",level:2},{value:"Returns",id:"returns",level:2},{value:"Contoh",id:"contoh",level:2},{value:"Notes",id:"notes",level:2},{value:"Fungsi Terkait",id:"fungsi-terkait",level:2}];function o(e){let n={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"Fungsi ini telah ditambahkan dalam SA-MP 0.3.7 dan tidak bekerja pada versi dibawahnya!"})}),"\n",(0,i.jsx)(n.h2,{id:"deskripsi",children:"Deskripsi"}),"\n",(0,i.jsx)(n.p,{children:"Callback ini akan terpanggil ketika sebuah aktor keluar di jangkauan stream dari klien pemain."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Nama"}),(0,i.jsx)(n.th,{children:"Deskripsi"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"actorid"}),(0,i.jsx)(n.td,{children:"ID dari aktor yang berada di luar jangakauan stream klien pemain."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"forplayerid"}),(0,i.jsx)(n.td,{children:"ID dari pemain yang berada di luar jangkauan stream aktor."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:"Selalu terpanggil pertama di filterscripts."}),"\n",(0,i.jsx)(n.h2,{id:"contoh",children:"Contoh"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'public OnActorStreamOut(actorid, forplayerid)\n{\n    new string[40];\n    format(string, sizeof(string), "Actor %d telah berada diluar jangkauan anda.", actorid);\n    SendClientMessage(forplayerid, 0xFFFFFFFF, string);\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Callback ini akan terpanggil juga oleh NPC."})}),"\n",(0,i.jsx)(n.h2,{id:"fungsi-terkait",children:"Fungsi Terkait"})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return s}});var a=t(67294);let i={},r=a.createContext(i);function s(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);