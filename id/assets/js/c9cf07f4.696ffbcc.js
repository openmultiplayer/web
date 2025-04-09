"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["93542"],{54:function(e,t,n){n.r(t),n.d(t,{default:()=>o,frontMatter:()=>s,metadata:()=>a,assets:()=>l,toc:()=>d,contentTitle:()=>c});var a=JSON.parse('{"id":"scripting/functions/MoveObject","title":"MoveObject","description":"Memindahkan Object ke posisi baru dengan kecepatan yang ditentukan.","source":"@site/i18n/id/docusaurus-plugin-content-docs/current/scripting/functions/MoveObject.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/MoveObject","permalink":"/id/docs/scripting/functions/MoveObject","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/MoveObject.md","tags":[],"version":"current","frontMatter":{"title":"MoveObject","sidebar_label":"MoveObject","description":"Memindahkan Object ke posisi baru dengan kecepatan yang ditentukan.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"ManualVehicleEngineAndLights","permalink":"/id/docs/scripting/functions/ManualVehicleEngineAndLights"},"next":{"title":"MovePlayerObject","permalink":"/id/docs/scripting/functions/MovePlayerObject"}}'),i=n("85893"),r=n("50065");let s={title:"MoveObject",sidebar_label:"MoveObject",description:"Memindahkan Object ke posisi baru dengan kecepatan yang ditentukan.",tags:[]},c=void 0,l={},d=[{value:"Deskripsi",id:"deskripsi",level:2},{value:"Returns",id:"returns",level:2},{value:"Contoh",id:"contoh",level:2},{value:"Catatan",id:"catatan",level:2},{value:"Fungsi Terkait",id:"fungsi-terkait",level:2}];function j(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"deskripsi",children:"Deskripsi"}),"\n",(0,i.jsx)(t.p,{children:"Memindahkan Object ke posisi baru dengan kecepatan yang ditentukan. Pemain/kendaraan akan 'menjelajah' Object saat bergerak."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"objectid"}),(0,i.jsx)(t.td,{children:"ID Object yang akan di pindahkan."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":X"]}),(0,i.jsx)(t.td,{children:"Koordinat X untuk memindahkan Object ke."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":Y"]}),(0,i.jsx)(t.td,{children:"Koordinat Y untuk memindahkan Object ke."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":Z"]}),(0,i.jsx)(t.td,{children:"Koordinat Z untuk memindahkan Object ke."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":Speed"]}),(0,i.jsx)(t.td,{children:"Kecepatan gerak Object (satuan per detik)."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":RotX"]}),(0,i.jsx)(t.td,{children:"Rotasi FINAL X (opsional)."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":RotY"]}),(0,i.jsx)(t.td,{children:"Rotasi FINAL Y (opsional)."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":RotZ"]}),(0,i.jsx)(t.td,{children:"Rotasi FINAL Z (opsional)."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"Waktu yang diperlukan benda untuk bergerak dalam milidetik."}),"\n",(0,i.jsx)(t.h2,{id:"contoh",children:"Contoh"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'new gAirportGate; //Di suatu tempat di bagian atas skrip Anda\n\npublic OnGameModeInit()\n{\n    gAirportGate = CreateObject(980, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);\n    return 1;\n}\n\npublic OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (strcmp(cmdtext, "/moveobject", true) == 0)\n    {\n        new\n            string[50],\n            moveTime = MoveObject(gAirportGate, 0, 0, 10, 2.00);\n\n        format(string, sizeof(string), "0bject akan selesai bergerak dalam %d milidetik", moveTime);\n        SendClientMessage(playerid, 0xFF000000, string);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"catatan",children:"Catatan"}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"Function ini dapat digunakan untuk membuat Object berputar dengan lancar. Namun untuk mencapai ini, Object juga harus dipindahkan. Rotasi yang ditentukan adalah rotasi yang akan dimiliki Object setelah gerakan. Oleh karena itu Object tidak akan berputar ketika tidak ada gerakan yang diterapkan. Untuk contoh skrip, lihat skrip filter ferriswheel.pwn yang dibuat oleh Kye yang disertakan dalam paket server (SA-MP 0.3d ke atas). Untuk memahami sepenuhnya catatan di atas, Anda dapat (tetapi tidak terbatas pada) menaikkan posisi z sebesar (+0,001) dan kemudian (-0,001) setelah memindahkannya lagi, karena tidak mengubah X,Y atau Z tidak akan memutar Object."})}),"\n",(0,i.jsx)(t.h2,{id:"fungsi-terkait",children:"Fungsi Terkait"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"CreateObject",children:"CreateObject"}),": Membuat suatu Object."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"DestroyObject",children:"DestroyObject"}),": Menghapus suatu Object."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"IsValidObject",children:"IsValidObject"}),": Memeriksa apakah Object tertentu valid."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"IsObjectMoving",children:"IsObjectMoving"}),": Memeriksa apakah Object tersebut bergerak."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"StopObject",children:"StopObject"}),": Menghentikan suatu Object agar tidak bergerak."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetObjectPos",children:"SetObjectPos"}),": Mengatur posisi suatu Object."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetObjectRot",children:"SetObjectRot"}),": Mengatur rotasi suatu Object."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetObjectPos",children:"GetObjectPos"}),": Mencari Object."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetObjectRot",children:"GetObjectRot"}),": Memeriksa rotasi suatu Object."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"AttachObjectToPlayer",children:"AttachObjectToPlayer"}),": Menambahkan Object ke Player."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"CreatePlayerObject",children:"CreatePlayerObject"}),": Membuat Object hanya untuk satu Player."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"DestroyPlayerObject",children:"DestroyPlayerObject"}),": Menghapus suatu Object dari Player."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"IsValidPlayerObject",children:"IsValidPlayerObject"}),": Memeriksa apakah Object Player tertentu valid."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"MovePlayerObject",children:"MovePlayerObject"}),": Memindahkan Object Player."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"StopPlayerObject",children:"StopPlayerObject"}),": Menghentikan Object Player agar tidak bergerak."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"IsPlayerObjectMoving",children:"IsPlayerObjectMoving"}),": Memeriksa apakah Object Player bergerak."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetPlayerObjectPos",children:"SetPlayerObjectPos"}),": Mengatur posisi Object Player."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetPlayerObjectRot",children:"SetPlayerObjectRot"}),": Mengatur rotasi Object Player."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetPlayerObjectPos",children:"GetPlayerObjectPos"}),": Mencari Object Player."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetPlayerObjectRot",children:"GetPlayerObjectRot"}),": Memeriksa rotasi Object Player."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"AttachPlayerObjectToPlayer",children:"AttachPlayerObjectToPlayer"}),": Menambahkan Object pemain ke Player."]}),"\n"]})]})}function o(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(j,{...e})}):j(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return s}});var a=n(67294);let i={},r=a.createContext(i);function s(e){let t=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);