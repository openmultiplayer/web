"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["47442"],{13473:function(e,n,l){l.r(n),l.d(n,{default:()=>u,frontMatter:()=>t,metadata:()=>i,assets:()=>s,toc:()=>a,contentTitle:()=>o});var i=JSON.parse('{"id":"scripting/functions/RedirectDownload","title":"RedirectDownload","description":"Redirect a player custom AddCharModel or AddSimpleModel download to a specific HTTP webpage.","source":"@site/docs/scripting/functions/RedirectDownload.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/RedirectDownload","permalink":"/fr/docs/scripting/functions/RedirectDownload","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/RedirectDownload.md","tags":[{"inline":true,"label":"custom model","permalink":"/fr/docs/tags/custom-model"},{"inline":true,"label":"custom skin","permalink":"/fr/docs/tags/custom-skin"},{"inline":true,"label":"simple model","permalink":"/fr/docs/tags/simple-model"}],"version":"current","frontMatter":{"title":"RedirectDownload","sidebar_label":"RedirectDownload","description":"Redirect a player custom AddCharModel or AddSimpleModel download to a specific HTTP webpage.","tags":["custom model","custom skin","simple model"]},"sidebar":"docsSidebar","previous":{"title":"PutPlayerInVehicle","permalink":"/fr/docs/scripting/functions/PutPlayerInVehicle"},"next":{"title":"RemoveBuildingForPlayer","permalink":"/fr/docs/scripting/functions/RemoveBuildingForPlayer"}}'),d=l("85893"),r=l("50065");let t={title:"RedirectDownload",sidebar_label:"RedirectDownload",description:"Redirect a player custom AddCharModel or AddSimpleModel download to a specific HTTP webpage.",tags:["custom model","custom skin","simple model"]},o=void 0,s={},a=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Example Usage from dl_redirect filterscript",id:"example-usage-from-dl_redirect-filterscript",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function c(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{VersionWarn:l}=n;return l||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l,{version:"SA-MP 0.3.DL R1"}),"\n",(0,d.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,d.jsx)(n.p,{children:"Redirect a player custom AddCharModel or AddSimpleModel download to a specific HTTP webpage."}),"\n",(0,d.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Name"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"playerid"}),(0,d.jsx)(n.td,{children:"The ID of the player that requested custom models download."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"const url[]"}),(0,d.jsx)(n.td,{children:"The URL to redirect download"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"return-values",children:"Return Values"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"1:"})," The function executed successfully."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"0:"})," The function failed to execute."]}),"\n",(0,d.jsx)(n.h2,{id:"example-usage-from-dl_redirect-filterscript",children:"Example Usage from dl_redirect filterscript"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-c",children:'new baseurl[] = "https://files.sa-mp.com/server";\n\npublic OnPlayerRequestDownload(playerid, type, crc)\n{\n    if (!IsPlayerConnected(playerid))\n    {\n        return 0;\n    }\n\n    new\n        fullURL[256],\n        fileName[64],\n        foundFileName = 0;\n\n    if (type == DOWNLOAD_REQUEST_TEXTURE_FILE)\n    {\n        foundFileName = FindTextureFileNameFromCRC(crc, fileName, sizeof fileName);\n    }\n    else if (type == DOWNLOAD_REQUEST_MODEL_FILE)\n    {\n        foundFileName = FindModelFileNameFromCRC(crc, fileName, sizeof fileName);\n    }\n\n    if (foundFileName)\n    {\n        format(fullURL, sizeof fullURL, "%s/%s", baseurl, fileName);\n        RedirectDownload(playerid, fullURL);\n    }\n\n    return 0;\n}\n'})}),"\n",(0,d.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"AddCharModel",children:"AddCharModel"}),": Adds a new custom character model for download."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"AddSimpleModel",children:"AddSimpleModel"}),": Adds a new custom simple object model for download."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"AddSimpleModelTimed",children:"AddSimpleModelTimed"}),": Adds a new custom simple object model for download."]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"../callbacks/OnPlayerFinishedDownloading",children:"OnPlayerFinishedDownloading"}),": Called when a player finishes downloading custom models."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},50065:function(e,n,l){l.d(n,{Z:function(){return o},a:function(){return t}});var i=l(67294);let d={},r=i.createContext(d);function t(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);