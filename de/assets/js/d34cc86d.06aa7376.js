"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["74174"],{92707:function(e,l,n){n.r(l),n.d(l,{default:()=>u,frontMatter:()=>a,metadata:()=>s,assets:()=>d,toc:()=>o,contentTitle:()=>i});var s=JSON.parse('{"id":"scripting/callbacks/OnPlayerRequestDownload","title":"OnPlayerRequestDownload","description":"This callback is called when a player request for custom model downloads.","source":"@site/docs/scripting/callbacks/OnPlayerRequestDownload.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerRequestDownload","permalink":"/de/docs/scripting/callbacks/OnPlayerRequestDownload","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerRequestDownload.md","tags":[{"inline":true,"label":"player","permalink":"/de/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerRequestDownload","sidebar_label":"OnPlayerRequestDownload","description":"This callback is called when a player request for custom model downloads.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerRequestClass","permalink":"/de/docs/scripting/callbacks/OnPlayerRequestClass"},"next":{"title":"OnPlayerRequestSpawn","permalink":"/de/docs/scripting/callbacks/OnPlayerRequestSpawn"}}'),r=n("85893"),t=n("50065");let a={title:"OnPlayerRequestDownload",sidebar_label:"OnPlayerRequestDownload",description:"This callback is called when a player request for custom model downloads.",tags:["player"]},i=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Resources",id:"related-resources",level:2}];function c(e){let l={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components},{VersionWarn:n}=l;return n||function(e,l){throw Error("Expected "+(l?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{name:"callback",version:"SA-MP 0.3.DL R1"}),"\n",(0,r.jsx)(l.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(l.p,{children:"This callback is called when a player request for custom model downloads."}),"\n",(0,r.jsxs)(l.table,{children:[(0,r.jsx)(l.thead,{children:(0,r.jsxs)(l.tr,{children:[(0,r.jsx)(l.th,{children:"Name"}),(0,r.jsx)(l.th,{children:"Description"})]})}),(0,r.jsxs)(l.tbody,{children:[(0,r.jsxs)(l.tr,{children:[(0,r.jsx)(l.td,{children:"playerid"}),(0,r.jsx)(l.td,{children:"The ID of the player that request custom model download."})]}),(0,r.jsxs)(l.tr,{children:[(0,r.jsxs)(l.td,{children:["DOWNLOAD_REQUEST",":type"]}),(0,r.jsxs)(l.td,{children:["The ",(0,r.jsx)(l.a,{href:"../resources/download-requests",children:"type"})," of the request."]})]}),(0,r.jsxs)(l.tr,{children:[(0,r.jsx)(l.td,{children:"crc"}),(0,r.jsx)(l.td,{children:"The CRC checksum of custom model file."})]})]})]}),"\n",(0,r.jsx)(l.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(l.p,{children:"0 - Deny the download request"}),"\n",(0,r.jsx)(l.p,{children:"1 - Accept the download request"}),"\n",(0,r.jsx)(l.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-c",children:'#define DOWNLOAD_REQUEST_EMPTY        (DOWNLOAD_REQUEST:0)\n#define DOWNLOAD_REQUEST_MODEL_FILE   (DOWNLOAD_REQUEST:1)\n#define DOWNLOAD_REQUEST_TEXTURE_FILE (DOWNLOAD_REQUEST:2)\n\nnew baseUrl[] = "https://assets.open.mp";\n\npublic OnPlayerRequestDownload(playerid, DOWNLOAD_REQUEST:type, crc)\n{\n    if (!IsPlayerConnected(playerid))\n    {\n        return 0;\n    }\n\n    new fullUrl[256 + 1];\n    new dlFileName[64 + 1];\n    new foundFileName = 0;\n\n    if (type == DOWNLOAD_REQUEST_TEXTURE_FILE)\n    {\n        foundFileName = FindTextureFileNameFromCRC(crc, dlFileName, 64);\n    }\n    else if (type == DOWNLOAD_REQUEST_MODEL_FILE)\n    {\n        foundFileName = FindModelFileNameFromCRC(crc, dlFileName, 64);\n    }\n\n    if (foundFileName)\n    {\n        format(fullUrl, sizeof(fullUrl), "%s/%s", baseUrl, dlFileName);\n        RedirectDownload(playerid, fullUrl);\n    }\n\n    return 0;\n}\n'})}),"\n",(0,r.jsx)(l.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,r.jsx)(l.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,r.jsxs)(l.ul,{children:["\n",(0,r.jsxs)(l.li,{children:[(0,r.jsx)(l.a,{href:"OnPlayerFinishedDownloading",children:"OnPlayerFinishedDownloading"}),": This callback is called when a player finishes downloading custom models."]}),"\n"]}),"\n",(0,r.jsx)(l.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,r.jsxs)(l.ul,{children:["\n",(0,r.jsx)(l.li,{children:(0,r.jsx)(l.a,{href:"../resources/download-requests",children:"Download Request Types"})}),"\n"]})]})}function u(e={}){let{wrapper:l}={...(0,t.a)(),...e.components};return l?(0,r.jsx)(l,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,l,n){n.d(l,{Z:function(){return i},a:function(){return a}});var s=n(67294);let r={},t=s.createContext(r);function a(e){let l=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(l):{...l,...e}},[l,e])}function i(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(t.Provider,{value:l},e.children)}}}]);