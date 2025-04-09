"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["11137"],{6576:function(e,t,l){l.r(t),l.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>n,assets:()=>r,toc:()=>a,contentTitle:()=>o});var n=JSON.parse('{"id":"scripting/functions/AddSimpleModel","title":"AddSimpleModel","description":"Adds a new custom simple object model for download.","source":"@site/docs/scripting/functions/AddSimpleModel.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AddSimpleModel","permalink":"/ta/docs/scripting/functions/AddSimpleModel","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/AddSimpleModel.md","tags":[{"inline":true,"label":"custom model","permalink":"/ta/docs/tags/custom-model"},{"inline":true,"label":"simple model","permalink":"/ta/docs/tags/simple-model"}],"version":"current","frontMatter":{"title":"AddSimpleModel","sidebar_label":"AddSimpleModel","description":"Adds a new custom simple object model for download.","tags":["custom model","simple model"]},"sidebar":"docsSidebar","previous":{"title":"AddServerRule","permalink":"/ta/docs/scripting/functions/AddServerRule"},"next":{"title":"AddSimpleModelTimed","permalink":"/ta/docs/scripting/functions/AddSimpleModelTimed"}}'),d=l("85893"),i=l("50065");let s={title:"AddSimpleModel",sidebar_label:"AddSimpleModel",description:"Adds a new custom simple object model for download.",tags:["custom model","simple model"]},o=void 0,r={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function c(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{VersionWarn:l}=t;return l||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l,{version:"SA-MP 0.3.DL R1"}),"\n",(0,d.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,d.jsx)(t.p,{children:"Adds a new custom simple object model for download. The model files will be stored in player's Documents\\GTA San Andreas User Files\\SAMP\\cache under the Server IP and Port folder in a CRC-form file name."}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"virtualWorld"}),(0,d.jsx)(t.td,{children:"The virtual world ID to make the model available at. Use -1 for all worlds."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"baseid"}),(0,d.jsx)(t.td,{children:"The base object model ID to use (original object to use when download is failed)."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"newid"}),(0,d.jsx)(t.td,{children:"The new object model ID ranged from -1000 to -30000 (29000 slots) to be used later with CreateObject or CreatePlayerObject."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"const dff[]"}),(0,d.jsx)(t.td,{children:"Name of the .dff model collision file located in models server folder by default (artpath setting)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"const textureLibrary[]"}),(0,d.jsx)(t.td,{children:"Name of the .txd model texture file located in models server folder by default (artpath setting)."})]})]})]}),"\n",(0,d.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.strong,{children:"1:"})," The function executed successfully."]}),"\n",(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.strong,{children:"0:"})," The function failed to execute."]}),"\n",(0,d.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    AddSimpleModel(-1, 19379, -2000, "wallzzz.dff", "wallzzz.txd");\n    return 1;\n}\n'})}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-c",children:'AddSimpleModel(-1, 19379, -2000, "wallzzz.dff", "wallzzz.txd");\n'})}),"\n",(0,d.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,d.jsxs)(t.admonition,{type:"tip",children:[(0,d.jsxs)(t.p,{children:[(0,d.jsx)(t.strong,{children:"useartwork"})," or ",(0,d.jsx)(t.strong,{children:"artwork.enable"})," must be enabled first in server settings in order for this to work."]}),(0,d.jsxs)(t.p,{children:["When ",(0,d.jsx)(t.code,{children:"virtualworld"})," is set, the models will be downloaded once the player enters the specific world."]})]}),"\n",(0,d.jsx)(t.admonition,{type:"warning",children:(0,d.jsxs)(t.p,{children:["There are currently no restrictions on when you can call this function, but be aware that if you do not call them inside ",(0,d.jsx)(t.a,{href:"../callbacks/OnFilterScriptInit",children:"OnFilterScriptInit"}),"/",(0,d.jsx)(t.a,{href:"../callbacks/OnGameModeInit",children:"OnGameModeInit"}),", you run the risk that some players, who are already on the server, may not have downloaded the models."]})}),"\n",(0,d.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,d.jsxs)(t.ul,{children:["\n",(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.a,{href:"IsValidCustomModel",children:"IsValidCustomModel"}),": Checks if a custom model ID is valid."]}),"\n",(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.a,{href:"GetCustomModelPath",children:"GetCustomModelPath"}),": Get a custom model path."]}),"\n"]}),"\n",(0,d.jsx)(t.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,d.jsxs)(t.ul,{children:["\n",(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.a,{href:"../callbacks/OnPlayerFinishedDownloading",children:"OnPlayerFinishedDownloading"}),": Called when a player finishes downloading custom models."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},50065:function(e,t,l){l.d(t,{Z:function(){return o},a:function(){return s}});var n=l(67294);let d={},i=n.createContext(d);function s(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);