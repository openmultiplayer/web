"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["71385"],{84891:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"scripting/functions/ClearBanList","title":"ClearBanList","description":"Clears the ban list.","source":"@site/docs/scripting/functions/ClearBanList.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/ClearBanList","permalink":"/id/docs/scripting/functions/ClearBanList","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/ClearBanList.md","tags":[],"version":"current","frontMatter":{"title":"ClearBanList","sidebar_label":"ClearBanList","description":"Clears the ban list.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"ClearAnimations","permalink":"/id/docs/scripting/functions/ClearAnimations"},"next":{"title":"ClearPlayerWorldBounds","permalink":"/id/docs/scripting/functions/ClearPlayerWorldBounds"}}'),i=t("85893"),r=t("50065");let l={title:"ClearBanList",sidebar_label:"ClearBanList",description:"Clears the ban list.",tags:[]},a=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{VersionWarn:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Clears the ban list."}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"true"})," - Success."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"false"})," - Failed to execute the function."]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/clearbanlist", true))\n    {\n        if (!IsPlayerAdmin(playerid))\n        {\n            return 1;\n        }\n\n        ClearBanList();\n        SendClientMessage(playerid, -1, "[SERVER]: Ban list cleared.");\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["You can see the ban list in the ",(0,i.jsx)(n.strong,{children:"bans.json"})," file."]})}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"BlockIpAddress",children:"BlockIpAddress"}),": Block an IP address from connecting to the server for a set amount of time."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"UnBlockIpAddress",children:"UnBlockIpAddress"}),": Unblock an IP that was previously blocked."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"Ban",children:"Ban"}),": Ban a player from playing on the server."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"BanEx",children:"BanEx"}),": Ban a player with a custom reason."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"Kick",children:"Kick"}),": Kick a player from the server."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"IsBanned",children:"IsBanned"}),": Checks if the given IP address is banned."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return l}});var s=t(67294);let i={},r=s.createContext(i);function l(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);