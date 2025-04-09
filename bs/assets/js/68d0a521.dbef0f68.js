"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["61727"],{70829:function(e,t,n){n.r(t),n.d(t,{default:()=>j,frontMatter:()=>d,metadata:()=>i,assets:()=>o,toc:()=>l,contentTitle:()=>s});var i=JSON.parse('{"id":"scripting/functions/EndObjectEditing","title":"EndObjectEditing","description":"Cancel object edition mode for a player.","source":"@site/docs/scripting/functions/EndObjectEditing.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/EndObjectEditing","permalink":"/bs/docs/scripting/functions/EndObjectEditing","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/EndObjectEditing.md","tags":[{"inline":true,"label":"object","permalink":"/bs/docs/tags/object"}],"version":"current","frontMatter":{"title":"EndObjectEditing","sidebar_label":"EndObjectEditing","description":"Cancel object edition mode for a player.","tags":["object"]},"sidebar":"docsSidebar","previous":{"title":"EnableZoneNames","permalink":"/bs/docs/scripting/functions/EnableZoneNames"},"next":{"title":"FindModelFileNameFromCRC","permalink":"/bs/docs/scripting/functions/FindModelFileNameFromCRC"}}'),r=n("85893"),c=n("50065");let d={title:"EndObjectEditing",sidebar_label:"EndObjectEditing",description:"Cancel object edition mode for a player.",tags:["object"]},s=void 0,o={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function a(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Cancel object edition mode for a player"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"playerid"}),(0,r.jsx)(t.td,{children:"The ID of the player to cancel edition for"})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/stopedit", true))\n    {\n        EndObjectEditing(playerid);\n        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: You stopped editing the object!");\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"BeginObjectSelecting",children:"BeginObjectSelecting"}),": Select an object."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"BeginObjectEditing",children:"BeginObjectEditing"}),": Edit an object."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"BeginPlayerObjectEditing",children:"BeginPlayerObjectEditing"}),": Edit an player-object."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"EditAttachedObject",children:"EditAttachedObject"}),": Edit an attached object."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"CreateObject",children:"CreateObject"}),": Create an object."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"DestroyObject",children:"DestroyObject"}),": Destroy an object."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"MoveObject",children:"MoveObject"}),": Move an object."]}),"\n"]})]})}function j(e={}){let{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return d}});var i=n(67294);let r={},c=i.createContext(r);function d(e){let t=i.useContext(c);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(c.Provider,{value:t},e.children)}}}]);