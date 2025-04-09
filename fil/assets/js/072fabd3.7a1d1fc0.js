"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["14366"],{19307:function(t,e,n){n.r(e),n.d(e,{default:()=>h,frontMatter:()=>a,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>l});var r=JSON.parse('{"id":"scripting/functions/strins","title":"strins","description":"Insert a string into another string.","source":"@site/docs/scripting/functions/strins.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/strins","permalink":"/fil/docs/scripting/functions/strins","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/strins.md","tags":[{"inline":true,"label":"string","permalink":"/fil/docs/tags/string"}],"version":"current","frontMatter":{"title":"strins","sidebar_label":"strins","description":"Insert a string into another string.","tags":["string"]},"sidebar":"docsSidebar","previous":{"title":"strfloat","permalink":"/fil/docs/scripting/functions/strfloat"},"next":{"title":"strlen","permalink":"/fil/docs/scripting/functions/strlen"}}'),s=n("85893"),i=n("50065");let a={title:"strins",sidebar_label:"strins",description:"Insert a string into another string.",tags:["string"]},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(t){let e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...t.components},{LowercaseNote:n}=e;return n||function(t,e){throw Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{}),"\n",(0,s.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(e.p,{children:"Insert a string into another string."}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Name"}),(0,s.jsx)(e.th,{children:"Description"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"string[]"}),(0,s.jsx)(e.td,{children:"The string you want to insert substr in."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"const substr[]"}),(0,s.jsx)(e.td,{children:"The string you want to insert into string."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"pos"}),(0,s.jsx)(e.td,{children:"The position to start inserting."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"maxlength = sizeof (string)"}),(0,s.jsx)(e.td,{children:"The maximum size to insert."})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(e.p,{children:"This function does not return any specific values."}),"\n",(0,s.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:'// Add an [AFK] tag to the start of players\' names\nnew playerName[MAX_PLAYER_NAME];\nGetPlayerName(playerid, playerName, MAX_PLAYER_NAME);\nif (strlen(playerName) <= 18)\n{\n	strins(playerName, "[AFK]", 0);\n}\nSetPlayerName(playerid, playerName);\n\n// WARNING: Players with names that are 20+ characters long can not have an [AFK] tag, as that would make their name 25 characters long and the limit is 24.\n'})}),"\n",(0,s.jsx)(e.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"strcmp",children:"strcmp"}),": Compare two strings to check if they are the same."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"strfind",children:"strfind"}),": Search for a string in another string."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"strdel",children:"strdel"}),": Delete part of a string."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"strlen",children:"strlen"}),": Get the length of a string."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"strmid",children:"strmid"}),": Extract part of a string into another string."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"strpack",children:"strpack"}),": Pack a string into a destination string."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"strval",children:"strval"}),": Convert a string into an integer."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"strcat",children:"strcat"}),": Concatenate two strings into a destination reference."]}),"\n"]})]})}function h(t={}){let{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(d,{...t})}):d(t)}},50065:function(t,e,n){n.d(e,{Z:function(){return l},a:function(){return a}});var r=n(67294);let s={},i=r.createContext(s);function a(t){let e=r.useContext(i);return r.useMemo(function(){return"function"==typeof t?t(e):{...e,...t}},[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:a(t.components),r.createElement(i.Provider,{value:e},t.children)}}}]);