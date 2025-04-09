"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["25450"],{83947:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>l,assets:()=>s,toc:()=>o,contentTitle:()=>c});var l=JSON.parse('{"id":"scripting/callbacks/OnPlayerRequestDownload","title":"OnPlayerRequestDownload","description":"Acest callback este apelat atunci c\xe2nd un juc\u0103tor solicit\u0103 desc\u0103rcarea unui model personalizat.","source":"@site/i18n/ro/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerRequestDownload.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerRequestDownload","permalink":"/ro/docs/scripting/callbacks/OnPlayerRequestDownload","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerRequestDownload.md","tags":[{"inline":true,"label":"player","permalink":"/ro/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerRequestDownload","sidebar_label":"OnPlayerRequestDownload","description":"Acest callback este apelat atunci c\xe2nd un juc\u0103tor solicit\u0103 desc\u0103rcarea unui model personalizat.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerRequestClass","permalink":"/ro/docs/scripting/callbacks/OnPlayerRequestClass"},"next":{"title":"OnPlayerRequestSpawn","permalink":"/ro/docs/scripting/callbacks/OnPlayerRequestSpawn"}}'),i=r("85893"),t=r("50065");let a={title:"OnPlayerRequestDownload",sidebar_label:"OnPlayerRequestDownload",description:"Acest callback este apelat atunci c\xe2nd un juc\u0103tor solicit\u0103 desc\u0103rcarea unui model personalizat.",tags:["player"]},c=void 0,s={},o=[{value:"Descriere",id:"descriere",level:2},{value:"Return\u0103ri",id:"return\u0103ri",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Func\u021Bii similare",id:"func\u021Bii-similare",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components},{VersionWarn:r}=n;return r||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{name:"callback",version:"SA-MP 0.3.DL R1"}),"\n",(0,i.jsx)(n.h2,{id:"descriere",children:"Descriere"}),"\n",(0,i.jsx)(n.p,{children:"Acest callback este apelat atunci c\xe2nd un juc\u0103tor solicit\u0103 desc\u0103rcarea unui model personalizat."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Nume"}),(0,i.jsx)(n.th,{children:"Descriere"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"playerid"}),(0,i.jsx)(n.td,{children:"ID-ul juc\u0103torului care solicit\u0103 desc\u0103rcarea modelului personalizat."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"type"}),(0,i.jsx)(n.td,{children:"Tipul cererii (vezi mai jos)."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"crc"}),(0,i.jsx)(n.td,{children:"Suma de control CRC a fi\u0219ierului model personalizat."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"return\u0103ri",children:"Return\u0103ri"}),"\n",(0,i.jsx)(n.p,{children:"0 - Respinge solicitarea de desc\u0103rcare"}),"\n",(0,i.jsx)(n.p,{children:"1 - Accepta\u021Bi cererea de desc\u0103rcare"}),"\n",(0,i.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'#define DOWNLOAD_REQUEST_EMPTY        (0)\n#define DOWNLOAD_REQUEST_MODEL_FILE   (1)\n#define DOWNLOAD_REQUEST_TEXTURE_FILE (2)\nnew baseurl[] = "https://files.sa-mp.com/server";\n\npublic OnPlayerRequestDownload(playerid, type, crc)\n{\n    new fullurl[256+1];\n    new dlfilename[64+1];\n    new foundfilename=0;\n\n    if (!IsPlayerConnected(playerid)) return 0;\n\n    if (type == DOWNLOAD_REQUEST_TEXTURE_FILE) {\n        foundfilename = FindTextureFileNameFromCRC(crc,dlfilename,64);\n    }\n    else if (type == DOWNLOAD_REQUEST_MODEL_FILE) {\n        foundfilename = FindModelFileNameFromCRC(crc,dlfilename,64);\n    }\n\n    if (foundfilename) {\n        format(fullurl,256,"%s/%s",baseurl,dlfilename);\n        RedirectDownload(playerid,fullurl);\n    }\n\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"func\u021Bii-similare",children:"Func\u021Bii similare"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"OnPlayerFinishedDownloading",children:"OnPlayerFinishedDownloading"}),": Apelat c\xe2nd un juc\u0103tor termin\u0103 desc\u0103rcarea modelelor personalizate."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return a}});var l=r(67294);let i={},t=l.createContext(i);function a(e){let n=l.useContext(t);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);