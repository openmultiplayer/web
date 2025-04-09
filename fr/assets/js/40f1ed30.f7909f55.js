"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["2090"],{78263:function(e,n,i){i.r(n),i.d(n,{default:()=>p,frontMatter:()=>s,metadata:()=>t,assets:()=>a,toc:()=>c,contentTitle:()=>o});var t=JSON.parse('{"id":"scripting/functions/EnableTirePopping","title":"EnableTirePopping","description":"With this function you can enable or disable tire popping.","source":"@site/docs/scripting/functions/EnableTirePopping.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/EnableTirePopping","permalink":"/fr/docs/scripting/functions/EnableTirePopping","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/EnableTirePopping.md","tags":[],"version":"current","frontMatter":{"title":"EnableTirePopping","sidebar_label":"EnableTirePopping","description":"With this function you can enable or disable tire popping.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"EnableStuntBonusForPlayer","permalink":"/fr/docs/scripting/functions/EnableStuntBonusForPlayer"},"next":{"title":"EnableVehicleFriendlyFire","permalink":"/fr/docs/scripting/functions/EnableVehicleFriendlyFire"}}'),r=i("85893"),l=i("50065");let s={title:"EnableTirePopping",sidebar_label:"EnableTirePopping",description:"With this function you can enable or disable tire popping.",tags:[]},o=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"With this function you can enable or disable tire popping."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["bool",":enable"]}),(0,r.jsx)(n.td,{children:"'true' to enable, 'false' to disable tire popping."})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:"This function does not return any specific values."}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    // This will disable tire popping on your gamemode.\n    EnableTirePopping(false);\n    return 1;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"This function was removed in SA-MP 0.3."}),"\n",(0,r.jsx)(n.li,{children:"Tire popping is enabled by default."}),"\n",(0,r.jsxs)(n.li,{children:["If you want to disable tire popping, you'll have to manually script it using ",(0,r.jsx)(n.a,{href:"OnVehicleDamageStatusUpdate",children:"OnVehicleDamageStatusUpdate"}),"."]}),"\n"]})}),"\n",(0,r.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"SetPlayerTeam",children:"SetPlayerTeam"}),": Set a player's team."]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return s}});var t=i(67294);let r={},l=t.createContext(r);function s(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);