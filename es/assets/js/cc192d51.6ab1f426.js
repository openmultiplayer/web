"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["15559"],{59753:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>a,toc:()=>o,contentTitle:()=>l});var t=JSON.parse('{"id":"scripting/functions/IsBanned","title":"IsBanned","description":"Checks if the given IP address is banned.","source":"@site/docs/scripting/functions/IsBanned.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsBanned","permalink":"/es/docs/scripting/functions/IsBanned","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/IsBanned.md","tags":[{"inline":true,"label":"ip address","permalink":"/es/docs/tags/ip-address"}],"version":"current","frontMatter":{"title":"IsBanned","sidebar_label":"IsBanned","description":"Checks if the given IP address is banned.","tags":["ip address"]},"sidebar":"docsSidebar","previous":{"title":"IsAdminTeleportAllowed","permalink":"/es/docs/scripting/functions/IsAdminTeleportAllowed"},"next":{"title":"IsGangZoneFlashingForPlayer","permalink":"/es/docs/scripting/functions/IsGangZoneFlashingForPlayer"}}'),i=s("85893"),r=s("50065");let d={title:"IsBanned",sidebar_label:"IsBanned",description:"Checks if the given IP address is banned.",tags:["ip address"]},l=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{VersionWarn:s}=n;return s||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Checks if the given IP address is banned."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"const ipAddress[]"}),(0,i.jsx)(n.td,{children:"The IP address to check."})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:["Returns ",(0,i.jsx)(n.strong,{children:"true"})," if the IP address is banned, otherwise ",(0,i.jsx)(n.strong,{children:"false"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'if (IsBanned("255.255.255.255"))\n{\n    // Do something\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["You can see the ban list in the ",(0,i.jsx)(n.strong,{children:"bans.json"})," file."]})}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"BlockIpAddress",children:"BlockIpAddress"}),": Block an IP address from connecting to the server for a set amount of time."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"UnBlockIpAddress",children:"UnBlockIpAddress"}),": Unblock an IP that was previously blocked."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"Ban",children:"Ban"}),": Ban a player from playing on the server."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"BanEx",children:"BanEx"}),": Ban a player with a custom reason."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"Kick",children:"Kick"}),": Kick a player from the server."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"ClearBanList",children:"ClearBanList"}),": Clears the ban list."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return d}});var t=s(67294);let i={},r=t.createContext(i);function d(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);