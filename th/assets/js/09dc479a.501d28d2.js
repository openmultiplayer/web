"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["48746"],{30659:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>a,metadata:()=>r,assets:()=>c,toc:()=>d,contentTitle:()=>l});var r=JSON.parse('{"id":"scripting/functions/GetSVarString","title":"GetSVarString","description":"Gets a string server variable\'s value.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/GetSVarString.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetSVarString","permalink":"/th/docs/scripting/functions/GetSVarString","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetSVarString.md","tags":[],"version":"current","frontMatter":{"title":"GetSVarString","sidebar_label":"GetSVarString","description":"Gets a string server variable\'s value.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"GetSVarNameAtIndex","permalink":"/th/docs/scripting/functions/GetSVarNameAtIndex"},"next":{"title":"GetSVarType","permalink":"/th/docs/scripting/functions/GetSVarType"}}'),i=n("85893"),s=n("50065");let a={title:"GetSVarString",sidebar_label:"GetSVarString",description:"Gets a string server variable's value.",tags:[]},l=void 0,c={},d=[{value:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",level:2},{value:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",level:2},{value:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",level:2},{value:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",level:2}];function o(e){let t={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"This function was added in SA-MP 0.3.7 R2 and will not work in earlier versions!"})}),"\n",(0,i.jsx)(t.h2,{id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",children:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22"}),"\n",(0,i.jsx)(t.p,{children:"Gets a string server variable's value."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"varname"}),(0,i.jsx)(t.td,{children:"The name of the server variable (case-insensitive). Assigned in SetSVarString."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"string_return"}),(0,i.jsx)(t.td,{children:"The array in which to store the string value in, passed by reference."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"len"}),(0,i.jsx)(t.td,{children:"The maximum length of the returned string."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",children:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19"}),"\n",(0,i.jsx)(t.p,{children:"The length of the string."}),"\n",(0,i.jsx)(t.h2,{id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",children:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'// set "Version"\nSetSVarString("Version", "0.3.7");\n// will print version that server has\nnew string[5 + 1];\nGetSVarString("Version", string, sizeof(string));\nprintf("Version: %s", string);\n'})}),"\n",(0,i.jsx)(t.h2,{id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",children:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"SetSVarInt: Set an integer for a server variable."}),"\n",(0,i.jsx)(t.li,{children:"GetSVarInt: Get a player server as an integer."}),"\n",(0,i.jsx)(t.li,{children:"SetSVarString: Set a string for a server variable."}),"\n",(0,i.jsx)(t.li,{children:"SetSVarFloat: Set a float for a server variable."}),"\n",(0,i.jsx)(t.li,{children:"GetSVarFloat: Get the previously set float from a server variable."}),"\n",(0,i.jsx)(t.li,{children:"DeleteSVar: Delete a server variable."}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return a}});var r=n(67294);let i={},s=r.createContext(i);function a(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);