"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["99595"],{58496:function(e,r,t){t.r(r),t.d(r,{default:()=>h,frontMatter:()=>a,metadata:()=>n,assets:()=>o,toc:()=>c,contentTitle:()=>l});var n=JSON.parse('{"id":"scripting/functions/GetSVarString","title":"GetSVarString","description":"Gets a string server variable\'s value.","source":"@site/docs/scripting/functions/GetSVarString.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetSVarString","permalink":"/tr/docs/scripting/functions/GetSVarString","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetSVarString.md","tags":[{"inline":true,"label":"server variable","permalink":"/tr/docs/tags/server-variable"},{"inline":true,"label":"svar","permalink":"/tr/docs/tags/svar"}],"version":"current","frontMatter":{"title":"GetSVarString","sidebar_label":"GetSVarString","description":"Gets a string server variable\'s value.","tags":["server variable","svar"]},"sidebar":"docsSidebar","previous":{"title":"GetSVarNameAtIndex","permalink":"/tr/docs/scripting/functions/GetSVarNameAtIndex"},"next":{"title":"GetSVarType","permalink":"/tr/docs/scripting/functions/GetSVarType"}}'),i=t("85893"),s=t("50065");let a={title:"GetSVarString",sidebar_label:"GetSVarString",description:"Gets a string server variable's value.",tags:["server variable","svar"]},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{VersionWarn:t}=r;return t||function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{version:"SA-MP 0.3.7 R2"}),"\n",(0,i.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(r.p,{children:"Gets a string server variable's value."}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Name"}),(0,i.jsx)(r.th,{children:"Description"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"const svar[]"}),(0,i.jsxs)(r.td,{children:["The name of the server variable (case-insensitive).",(0,i.jsx)("br",{}),"Assigned in ",(0,i.jsx)(r.a,{href:"SetSVarString",children:"SetSVarString"}),"."]})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"output[]"}),(0,i.jsx)(r.td,{children:"The array in which to store the string value in, passed by reference."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"len = sizeof (output)"}),(0,i.jsx)(r.td,{children:"The maximum length of the returned string."})]})]})]}),"\n",(0,i.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(r.p,{children:"The length of the string."}),"\n",(0,i.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-c",children:'// set "Version"\nSetSVarString("Version", "0.3.7");\n\n// will print version that server has\nnew string[5 + 1];\nGetSVarString("Version", string, sizeof(string));\nprintf("Version: %s", string);\n'})}),"\n",(0,i.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"SetSVarInt",children:"SetSVarInt"}),": Set an integer for a server variable."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"GetSVarInt",children:"GetSVarInt"}),": Get a player server as an integer."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"SetSVarString",children:"SetSVarString"}),": Set a string for a server variable."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"SetSVarFloat",children:"SetSVarFloat"}),": Set a float for a server variable."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"GetSVarFloat",children:"GetSVarFloat"}),": Get the previously set float from a server variable."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"DeleteSVar",children:"DeleteSVar"}),": Delete a server variable."]}),"\n"]})]})}function h(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,r,t){t.d(r,{Z:function(){return l},a:function(){return a}});var n=t(67294);let i={},s=n.createContext(i);function a(e){let r=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);