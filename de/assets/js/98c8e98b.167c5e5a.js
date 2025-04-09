"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["30522"],{59869:function(e,t,r){r.r(t),r.d(t,{default:()=>h,frontMatter:()=>c,metadata:()=>n,assets:()=>s,toc:()=>a,contentTitle:()=>l});var n=JSON.parse('{"id":"scripting/functions/ShowObjectForPlayer","title":"ShowObjectForPlayer","description":"Show an object for a player.","source":"@site/docs/scripting/functions/ShowObjectForPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/ShowObjectForPlayer","permalink":"/de/docs/scripting/functions/ShowObjectForPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/ShowObjectForPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/de/docs/tags/player"},{"inline":true,"label":"object","permalink":"/de/docs/tags/object"}],"version":"current","frontMatter":{"title":"ShowObjectForPlayer","sidebar_label":"ShowObjectForPlayer","description":"Show an object for a player.","tags":["player","object"]},"sidebar":"docsSidebar","previous":{"title":"ShowNameTags","permalink":"/de/docs/scripting/functions/ShowNameTags"},"next":{"title":"ShowPickupForPlayer","permalink":"/de/docs/scripting/functions/ShowPickupForPlayer"}}'),i=r("85893"),o=r("50065");let c={title:"ShowObjectForPlayer",sidebar_label:"ShowObjectForPlayer",description:"Show an object for a player.",tags:["player","object"]},l=void 0,s={},a=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components},{VersionWarn:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["Show an object for a player that is hidden with ",(0,i.jsx)(t.a,{href:"HideObjectForPlayer",children:"HideObjectForPlayer"})," function."]}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"The ID of the player."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"objectid"}),(0,i.jsx)(t.td,{children:"The ID of the object to show for player."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"true"})," - The function was executed successfully."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"false"})," - The function failed to execute. The playerid or objectid specified does not exist."]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"new gObject;\n\npublic OnGameModeInit()\n{\n    gObject = CreateObject(1431, 921.12201, -1206.78613, 16.52670,   0.00000, 0.00000, 90.00000);\n    return 1;\n}\n\npublic OnPlayerConnect(playerid)\n{\n    HideObjectForPlayer(playerid, gObject);\n    return 1;\n}\n\npublic OnPlayerSpawn(playerid)\n{\n    ShowObjectForPlayer(playerid, gObject);\n    return 1;\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"HideObjectForPlayer",children:"HideObjectForPlayer"}),": Hide an object for a player."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"IsObjectHiddenForPlayer",children:"IsObjectHiddenForPlayer"}),": Checks if an object is hidden for a player."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"CreateObject",children:"CreateObject"}),": Create an object."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return l},a:function(){return c}});var n=r(67294);let i={},o=n.createContext(i);function c(e){let t=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);