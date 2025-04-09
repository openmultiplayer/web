"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["15861"],{35973:function(e,t,n){n.r(t),n.d(t,{default:()=>o,frontMatter:()=>s,metadata:()=>a,assets:()=>l,toc:()=>d,contentTitle:()=>c});var a=JSON.parse('{"id":"scripting/functions/SetWeather","title":"SetWeather","description":"Mengatur cuaca untuk semua player.","source":"@site/i18n/id/docusaurus-plugin-content-docs/current/scripting/functions/SetWeather.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetWeather","permalink":"/id/docs/scripting/functions/SetWeather","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetWeather.md","tags":[],"version":"current","frontMatter":{"title":"SetWeather","sidebar_label":"SetWeather","description":"Mengatur cuaca untuk semua player.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"SetVehicleZAngle","permalink":"/id/docs/scripting/functions/SetVehicleZAngle"},"next":{"title":"SetWorldTime","permalink":"/id/docs/scripting/functions/SetWorldTime"}}'),i=n("85893"),r=n("50065");let s={title:"SetWeather",sidebar_label:"SetWeather",description:"Mengatur cuaca untuk semua player.",tags:[]},c=void 0,l={},d=[{value:"Deskripsi",id:"deskripsi",level:2},{value:"Returns",id:"returns",level:2},{value:"Contoh",id:"contoh",level:2},{value:"Catatan",id:"catatan",level:2},{value:"Fungsi Terkait",id:"fungsi-terkait",level:2}];function u(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"deskripsi",children:"Deskripsi"}),"\n",(0,i.jsx)(t.p,{children:"Mengatur cuaca untuk semua player."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Nama"}),(0,i.jsx)(t.th,{children:"Deskripsi"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"weatherid"}),(0,i.jsxs)(t.td,{children:["ID ",(0,i.jsx)(t.a,{href:"../resources/weatherid",children:"cuaca"})]})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"Fungsi ini tidak mengembalikan nilai tertentu."}),"\n",(0,i.jsx)(t.h2,{id:"contoh",children:"Contoh"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'if (!strcmp(cmdtext, "/sandstorm", true))\n{\n    SetWeather(19);\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"catatan",children:"Catatan"}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"Jika TogglePlayerClock menyala, Cuaca perlahan-lahan akan berubah dari waktu ke waktu, alih alih berubah secara instant. Hanya ada 21 ID cuaca yang valid dalam game (0 - 20), Namun game tidak memiliki bentuk cek jangkauan."})}),"\n",(0,i.jsx)(t.h2,{id:"fungsi-terkait",children:"Fungsi Terkait"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetPlayerWeather",children:"SetPlayerWeather"}),": Set cuaca untuk player."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetGravity",children:"SetGravity"}),": Set global gravitasi."]}),"\n"]})]})}function o(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return s}});var a=n(67294);let i={},r=a.createContext(i);function s(e){let t=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);