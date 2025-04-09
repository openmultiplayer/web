"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["34537"],{96672:function(e,t,r){r.r(t),r.d(t,{default:()=>x,frontMatter:()=>s,metadata:()=>n,assets:()=>o,toc:()=>d,contentTitle:()=>i});var n=JSON.parse('{"id":"scripting/functions/TextDrawShowForAll","title":"TextDrawShowForAll","description":"Shows a textdraw for all players.","source":"@site/docs/scripting/functions/TextDrawShowForAll.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/TextDrawShowForAll","permalink":"/sl/docs/scripting/functions/TextDrawShowForAll","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/TextDrawShowForAll.md","tags":[{"inline":true,"label":"textdraw","permalink":"/sl/docs/tags/textdraw"}],"version":"current","frontMatter":{"title":"TextDrawShowForAll","sidebar_label":"TextDrawShowForAll","description":"Shows a textdraw for all players.","tags":["textdraw"]},"sidebar":"docsSidebar","previous":{"title":"TextDrawSetStringForPlayer","permalink":"/sl/docs/scripting/functions/TextDrawSetStringForPlayer"},"next":{"title":"TextDrawShowForPlayer","permalink":"/sl/docs/scripting/functions/TextDrawShowForPlayer"}}'),l=r("85893"),a=r("50065");let s={title:"TextDrawShowForAll",sidebar_label:"TextDrawShowForAll",description:"Shows a textdraw for all players.",tags:["textdraw"]},i=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(t.p,{children:"Shows a textdraw for all players."}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsx)(t.tbody,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Text",":textid"]}),(0,l.jsxs)(t.td,{children:["The ID of the textdraw to show.",(0,l.jsx)("br",{}),"Returned by ",(0,l.jsx)(t.a,{href:"TextDrawCreate",children:"TextDrawCreate"}),"."]})]})})]}),"\n",(0,l.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"false"})," - The function failed to execute. This means the textdraw specified does not exist."]}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:'new Text:gMyTextdraw;\n\npublic OnGameModeInit()\n{\n    gMyTextdraw = TextDrawCreate(240.0, 580.0, "Example Text");\n    return 1;\n}\n\npublic OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/showtd", true))\n    {\n        TextDrawShowForAll(gMyTextdraw);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,l.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"TextDrawShowForPlayer",children:"TextDrawShowForPlayer"}),": Show a textdraw for a certain player."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"TextDrawHideForPlayer",children:"TextDrawHideForPlayer"}),": Hide a textdraw for a certain player."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"TextDrawHideForAll",children:"TextDrawHideForAll"}),": Hide a textdraw for all players."]}),"\n"]})]})}function x(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return i},a:function(){return s}});var n=r(67294);let l={},a=n.createContext(l);function s(e){let t=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);