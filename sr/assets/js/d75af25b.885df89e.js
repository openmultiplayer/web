"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["5325"],{28269:function(e,t,r){r.r(t),r.d(t,{default:()=>p,frontMatter:()=>i,metadata:()=>n,assets:()=>s,toc:()=>d,contentTitle:()=>c});var n=JSON.parse('{"id":"scripting/functions/GetPlayerObjectModel","title":"GetPlayerObjectModel","description":"Retrieve the model ID of a player-object.","source":"@site/docs/scripting/functions/GetPlayerObjectModel.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerObjectModel","permalink":"/sr/docs/scripting/functions/GetPlayerObjectModel","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerObjectModel.md","tags":[{"inline":true,"label":"player","permalink":"/sr/docs/tags/player"},{"inline":true,"label":"object","permalink":"/sr/docs/tags/object"},{"inline":true,"label":"playerobject","permalink":"/sr/docs/tags/playerobject"}],"version":"current","frontMatter":{"title":"GetPlayerObjectModel","sidebar_label":"GetPlayerObjectModel","description":"Retrieve the model ID of a player-object.","tags":["player","object","playerobject"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerObjectMaterialText","permalink":"/sr/docs/scripting/functions/GetPlayerObjectMaterialText"},"next":{"title":"GetPlayerObjectMoveSpeed","permalink":"/sr/docs/scripting/functions/GetPlayerObjectMoveSpeed"}}'),l=r("85893"),o=r("50065");let i={title:"GetPlayerObjectModel",sidebar_label:"GetPlayerObjectModel",description:"Retrieve the model ID of a player-object.",tags:["player","object","playerobject"]},c=void 0,s={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function a(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components},{VersionWarn:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r,{version:"SA-MP 0.3.7"}),"\n",(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(t.p,{children:"Retrieve the model ID of a player-object."}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"playerid"}),(0,l.jsx)(t.td,{children:"The ID of the player whose player-object to get the model of"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"objectid"}),(0,l.jsx)(t.td,{children:"The ID of the player-object of which to retrieve the model ID"})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(t.p,{children:"The model ID of the player object."}),"\n",(0,l.jsxs)(t.p,{children:["If the player or object don't exist, it will return ",(0,l.jsx)(t.strong,{children:"-1"})," or ",(0,l.jsx)(t.strong,{children:"0"})," if the player or object does not exist."]}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:'public OnPlayerConnect(playerid)\n{\n    new objectid = CreatePlayerObject(playerid, 19609, 666.57239, 1750.79749, 4.95627,   0.00000, 0.00000, -156.00000);\n\n    new modelid = GetPlayerObjectModel(playerid, objectid);\n    printf("Object model: %d", modelid); // Output: "Object model: 19609"\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"GetObjectModel",children:"GetObjectModel"}),": Get the model ID of an object."]}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return c},a:function(){return i}});var n=r(67294);let l={},o=n.createContext(l);function i(e){let t=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);