"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["56950"],{97158:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>i,metadata:()=>c,assets:()=>a,toc:()=>d,contentTitle:()=>s});var c=JSON.parse('{"id":"scripting/functions/SelectObject","title":"SelectObject","description":"Display the cursor and allow the player to select an object.","source":"@site/docs/scripting/functions/SelectObject.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SelectObject","permalink":"/fr/docs/scripting/functions/SelectObject","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SelectObject.md","tags":[],"version":"current","frontMatter":{"title":"SelectObject","sidebar_label":"SelectObject","description":"Display the cursor and allow the player to select an object.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"SHA256_PassHash","permalink":"/fr/docs/scripting/functions/SHA256_PassHash"},"next":{"title":"SelectTextDraw","permalink":"/fr/docs/scripting/functions/SelectTextDraw"}}'),l=n("85893"),r=n("50065");let i={title:"SelectObject",sidebar_label:"SelectObject",description:"Display the cursor and allow the player to select an object.",tags:[]},s=void 0,a={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(t.p,{children:"Display the cursor and allow the player to select an object. OnPlayerSelectObject is called when the player selects an object."}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsx)(t.tbody,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"playerid"}),(0,l.jsx)(t.td,{children:"The ID of the player that should be able to select the object"})]})})]}),"\n",(0,l.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/select", true))\n    {\n        SelectObject(playerid);\n        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: Please select the object you\'d like to edit!");\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,l.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"CreateObject",children:"CreateObject"}),": Create an object."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"DestroyObject",children:"DestroyObject"}),": Destroy an object."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"MoveObject",children:"MoveObject"}),": Move an object."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"EditObject",children:"EditObject"}),": Edit an object."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"EditPlayerObject",children:"EditPlayerObject"}),": Edit an object."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"EditAttachedObject",children:"EditAttachedObject"}),": Edit an attached object."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"CancelEdit",children:"CancelEdit"}),": Cancel the edition of an object."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"../callbacks/OnPlayerSelectObject",children:"OnPlayerSelectObject"}),": Called when a player selected an object."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return i}});var c=n(67294);let l={},r=c.createContext(l);function i(e){let t=c.useContext(r);return c.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),c.createElement(r.Provider,{value:t},e.children)}}}]);