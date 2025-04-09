"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["75051"],{65514:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>l,metadata:()=>r,assets:()=>d,toc:()=>o,contentTitle:()=>c});var r=JSON.parse('{"id":"scripting/functions/IsObjectHiddenForPlayer","title":"IsObjectHiddenForPlayer","description":"Checks if an object is hidden for a player.","source":"@site/docs/scripting/functions/IsObjectHiddenForPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsObjectHiddenForPlayer","permalink":"/pl/docs/scripting/functions/IsObjectHiddenForPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/IsObjectHiddenForPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/pl/docs/tags/player"},{"inline":true,"label":"object","permalink":"/pl/docs/tags/object"}],"version":"current","frontMatter":{"title":"IsObjectHiddenForPlayer","sidebar_label":"IsObjectHiddenForPlayer","description":"Checks if an object is hidden for a player.","tags":["player","object"]},"sidebar":"docsSidebar","previous":{"title":"IsNickNameCharacterAllowed","permalink":"/pl/docs/scripting/functions/IsNickNameCharacterAllowed"},"next":{"title":"IsObjectMaterialSlotUsed","permalink":"/pl/docs/scripting/functions/IsObjectMaterialSlotUsed"}}'),i=t("85893"),s=t("50065");let l={title:"IsObjectHiddenForPlayer",sidebar_label:"IsObjectHiddenForPlayer",description:"Checks if an object is hidden for a player.",tags:["player","object"]},c=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function a(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{VersionWarn:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Checks if an object is hidden for a player."}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"playerid"}),(0,i.jsx)(n.td,{children:"The ID of the player."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objectid"}),(0,i.jsx)(n.td,{children:"The ID of the object to check."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"true"})," - Object is hidden for the player."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"false"})," - Object is not hidden for the player."]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'new gObject;\n\npublic OnGameModeInit()\n{\n    gObject = CreateObject(1431, 921.12201, -1206.78613, 16.52670,   0.00000, 0.00000, 90.00000);\n    return 1;\n}\n\npublic OnPlayerConnect(playerid)\n{\n    HideObjectForPlayer(playerid, gObject);\n    return 1;\n}\n\npublic OnPlayerSpawn(playerid)\n{\n    if (IsObjectHiddenForPlayer(playerid, gObject))\n    {\n        printf("Object %d is hidden for player %d", gObject, playerid);\n    }\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["You can hide objects for a specific player with ",(0,i.jsx)(n.a,{href:"HideObjectForPlayer",children:"HideObjectForPlayer"})," function."]})}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"HideObjectForPlayer",children:"HideObjectForPlayer"}),": Hide an object for a player."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"ShowObjectForPlayer",children:"ShowObjectForPlayer"}),": Show an object for a player."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"CreateObject",children:"CreateObject"}),": Create an object."]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return l}});var r=t(67294);let i={},s=r.createContext(i);function l(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);