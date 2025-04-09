"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["59072"],{25821:function(e,n,t){t.r(n),t.d(n,{default:()=>d,frontMatter:()=>o,metadata:()=>s,assets:()=>a,toc:()=>u,contentTitle:()=>i});var s=JSON.parse('{"id":"scripting/functions/EnableStuntBonusForAll","title":"EnableStuntBonusForAll","description":"Enables or disables stunt bonuses for all players.","source":"@site/docs/scripting/functions/EnableStuntBonusForAll.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/EnableStuntBonusForAll","permalink":"/docs/scripting/functions/EnableStuntBonusForAll","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/EnableStuntBonusForAll.md","tags":[],"version":"current","frontMatter":{"title":"EnableStuntBonusForAll","sidebar_label":"EnableStuntBonusForAll","description":"Enables or disables stunt bonuses for all players.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"EnablePlayerCameraTarget","permalink":"/docs/scripting/functions/EnablePlayerCameraTarget"},"next":{"title":"EnableStuntBonusForPlayer","permalink":"/docs/scripting/functions/EnableStuntBonusForPlayer"}}'),l=t("85893"),r=t("50065");let o={title:"EnableStuntBonusForAll",sidebar_label:"EnableStuntBonusForAll",description:"Enables or disables stunt bonuses for all players.",tags:[]},i=void 0,a={},u=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"Enables or disables stunt bonuses for all players. If enabled, players will receive monetary rewards when performing a stunt in a vehicle (e.g. a wheelie)."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:["bool",":enable"]}),(0,l.jsx)(n.td,{children:"'true' to enable stunt bonuses or 'false' to disable them."})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:"This function does not return any specific values."}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    EnableStuntBonusForAll(false);\n    return 1;\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,l.jsxs)(n.admonition,{type:"tip",children:[(0,l.jsxs)(n.p,{children:["You can also toggle stunt bonuses via ",(0,l.jsx)(n.a,{href:"../../server/config.json",children:"config.json"})]}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'"use_stunt_bonuses": false,\n'})})]}),"\n",(0,l.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"EnableStuntBonusForPlayer",children:"EnableStuntBonusForPlayer"}),": Toggle stunt bonuses for a player."]}),"\n"]})]})}function d(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return o}});var s=t(67294);let l={},r=s.createContext(l);function o(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);