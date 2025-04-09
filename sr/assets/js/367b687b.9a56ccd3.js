"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["51271"],{86580:function(e,t,n){n.r(t),n.d(t,{default:()=>p,frontMatter:()=>l,metadata:()=>i,assets:()=>o,toc:()=>c,contentTitle:()=>a});var i=JSON.parse('{"id":"scripting/functions/gpci","title":"gpci","description":"Fetch the CI (computer/client identification) of a user, this is linked to their SAMP/GTA on their computer.","source":"@site/docs/scripting/functions/gpci.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/gpci","permalink":"/sr/docs/scripting/functions/gpci","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/gpci.md","tags":[],"version":"current","frontMatter":{"title":"gpci","sidebar_label":"gpci","description":"Fetch the CI (computer/client identification) of a user, this is linked to their SAMP/GTA on their computer.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"gettime","permalink":"/sr/docs/scripting/functions/gettime"},"next":{"title":"heapspace","permalink":"/sr/docs/scripting/functions/heapspace"}}'),r=n("85893"),s=n("50065");let l={title:"gpci",sidebar_label:"gpci",description:"Fetch the CI (computer/client identification) of a user, this is linked to their SAMP/GTA on their computer.",tags:[]},a=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{LowercaseNote:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Fetch the CI of a user, this is linked to their SAMP/GTA on their computer."}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.p,{children:"A player's CI is NOT UNIQUE, some players may have similar or the same CI, don't ban solely due to a CI match."})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"playerid"}),(0,r.jsx)(t.td,{children:"The ID of the player to fetch their CI."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"serial[]"}),(0,r.jsx)(t.td,{children:"String to store the fetched CI in."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"len = sizeof (serial)"}),(0,r.jsx)(t.td,{children:"Assigned size of the string."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"return-values",children:"Return Values"}),"\n",(0,r.jsx)(t.p,{children:"This function will return the string value of a user's CI."}),"\n",(0,r.jsx)(t.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"SA-MP server:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'#include <a_samp>\n\n#if !defined gpci\n    native gpci(playerid, serial[], len);\n#endif\n\npublic OnPlayerConnect(playerid)\n{\n    new serial[41]; // 40 + \\0\n    gpci(playerid, serial, sizeof(serial));\n\n    new string[128];\n    format(string, sizeof(string), "Your CI Serial: %s", serial);\n    SendClientMessage(playerid, -1, string);\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"open.mp server:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'#include <open.mp>\n\npublic OnPlayerConnect(playerid)\n{\n    new serial[41]; // 40 + \\0\n    GPCI(playerid, serial, sizeof(serial));\n    SendClientMessage(playerid, -1, "Your CI Serial: %s", serial);\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.p,{children:"In SA-MP server you must add 'native gpci(playerid, serial[], len);' at the top of your script before using any CI functions."})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetNetworkStats",children:"GetNetworkStats"}),": Gets the servers networkstats and saves it into a string."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetPlayerNetworkStats",children:"GetPlayerNetworkStats"}),": Gets a player networkstats and saves it into a string."]}),"\n"]})]})}function p(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return l}});var i=n(67294);let r={},s=i.createContext(r);function l(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);