"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["97176"],{47691:function(n,e,a){a.r(e),a.d(e,{default:()=>m,frontMatter:()=>o,metadata:()=>t,assets:()=>r,toc:()=>d,contentTitle:()=>l});var t=JSON.parse('{"id":"scripting/functions/SendRconCommand","title":"SendRconCommand","description":"Nagpapadala ng command na RCON (Remote Console).","source":"@site/i18n/fil/docusaurus-plugin-content-docs/current/scripting/functions/SendRconCommand.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SendRconCommand","permalink":"/fil/docs/scripting/functions/SendRconCommand","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SendRconCommand.md","tags":[{"inline":true,"label":"administration","permalink":"/fil/docs/tags/administration"}],"version":"current","frontMatter":{"title":"SendRconCommand","sidebar_label":"SendRconCommand","description":"Nagpapadala ng command na RCON (Remote Console).","tags":["administration"]},"sidebar":"docsSidebar","previous":{"title":"SendPlayerMessageToPlayer","permalink":"/fil/docs/scripting/functions/SendPlayerMessageToPlayer"},"next":{"title":"Set3DTextLabelDrawDistance","permalink":"/fil/docs/scripting/functions/Set3DTextLabelDrawDistance"}}'),i=a("85893"),s=a("50065");let o={title:"SendRconCommand",sidebar_label:"SendRconCommand",description:"Nagpapadala ng command na RCON (Remote Console).",tags:["administration"]},l=void 0,r={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function c(n){let e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(e.p,{children:"Nagpapadala ng command na RCON (Remote Console)."}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Name"}),(0,i.jsx)(e.th,{children:"Description"})]})}),(0,i.jsx)(e.tbody,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"command[]"}),(0,i.jsx)(e.td,{children:"Ang RCON command na ma e-execute"})]})})]}),"\n",(0,i.jsx)(e.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(e.p,{children:"Ang function na ito ay palaging rereturn ng 1."}),"\n",(0,i.jsx)(e.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(e.admonition,{type:"warning",children:(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Hindi sinusuportahan ang pag-login, dahil sa kakulangan ng parameter na 'playerid'."}),"\n",(0,i.jsx)(e.li,{children:"Tatanggalin ng 'password 0' ang password ng server kung nakatakda ang isa."}),"\n",(0,i.jsx)(e.li,{children:"Ang function na ito ay magreresulta sa OnRconCommand na tinatawag."}),"\n"]})}),"\n",(0,i.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-c",children:'SendRconCommand("gmx");\n// Ito ay isang scripted na bersyon ng pag-type ng "/rcon gmx" in-game.\n// Ni-restart ng GMX ang mode ng laro.\n\n// Halimbawa gamit ang format()\nnew szMapName[] = "Los Santos";\nnew szCmd[64];\nformat(szCmd, sizeof(szCmd), "mapname %s", szMapName);\nSendRconCommand(szCmd);\n'})}),"\n",(0,i.jsx)(e.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"IsPlayerAdmin",children:"IsPlayerAdmin"}),": Sinusuri kung ang isang manlalaro ay naka-log in sa RCON."]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"../callbacks/OnRconCommand",children:"OnRconCommand"}),": Tinatawag kapag ipinadala ang isang utos ng RCON."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"../callbacks/OnRconLoginAttempt",children:"OnRconLoginAttempt"}),": Tinatawag kapag may ginawang pagtatangkang mag-log in sa RCON."]}),"\n"]})]})}function m(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},50065:function(n,e,a){a.d(e,{Z:function(){return l},a:function(){return o}});var t=a(67294);let i={},s=t.createContext(i);function o(n){let e=t.useContext(s);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);