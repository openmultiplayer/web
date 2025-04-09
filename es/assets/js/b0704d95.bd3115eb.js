"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["76293"],{38714:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>d,metadata:()=>s,assets:()=>o,toc:()=>a,contentTitle:()=>l});var s=JSON.parse('{"id":"scripting/functions/db_debug_openresults","title":"db_debug_openresults","description":"Gets the number of open database results","source":"@site/docs/scripting/functions/db_debug_openresults.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/db_debug_openresults","permalink":"/es/docs/scripting/functions/db_debug_openresults","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/db_debug_openresults.md","tags":[],"version":"current","frontMatter":{"title":"db_debug_openresults","sidebar_label":"db_debug_openresults","description":"Gets the number of open database results","keywords":["sqlite"]},"sidebar":"docsSidebar","previous":{"title":"db_debug_openfiles","permalink":"/es/docs/scripting/functions/db_debug_openfiles"},"next":{"title":"db_field_name","permalink":"/es/docs/scripting/functions/db_field_name"}}'),r=n("85893"),i=n("50065");let d={title:"db_debug_openresults",sidebar_label:"db_debug_openresults",description:"Gets the number of open database results",keywords:["sqlite"]},l=void 0,o={},a=[{value:"Description",id:"description",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){let t={a:"a",h2:"h2",li:"li",p:"p",table:"table",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{LowercaseNote:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"The function gets the number of open database results."}),"\n",(0,r.jsx)(t.table,{children:(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"db_open",children:"db_open"}),": Open a connection to an SQLite database"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"db_close",children:"db_close"}),": Close the connection to an SQLite database"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"db_query",children:"db_query"}),": Query an SQLite database"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"db_free_result",children:"db_free_result"}),": Free result memory from a db_query"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"db_num_rows",children:"db_num_rows"}),": Get the number of rows in a result"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"db_next_row",children:"db_next_row"}),": Move to the next row"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"db_num_fields",children:"db_num_fields"}),": Get the number of fields in a result"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"db_field_name",children:"db_field_name"}),": Returns the name of a field at a particular index"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"db_get_field",children:"db_get_field"}),": Get content of field with specified ID from current result row"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"db_get_field_assoc",children:"db_get_field_assoc"}),": Get content of field with specified name from current result row"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"db_get_field_int",children:"db_get_field_int"}),": Get content of field as an integer with specified ID from current result row"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"db_get_field_assoc_int",children:"db_get_field_assoc_int"}),": Get content of field as an integer with specified name from current result row"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"db_get_field_float",children:"db_get_field_float"}),": Get content of field as a float with specified ID from current result row"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"db_get_field_assoc_float",children:"db_get_field_assoc_float"}),": Get content of field as a float with specified name from current result row"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"db_get_mem_handle",children:"db_get_mem_handle"}),": Get memory handle for an SQLite database that was opened with db_open."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"db_get_result_mem_handle",children:"db_get_result_mem_handle"}),": Get memory handle for an SQLite query that was executed with db_query."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"db_debug_openfiles",children:"db_debug_openfiles"}),": The function gets the number of open database connections for debugging purposes."]}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return d}});var s=n(67294);let r={},i=s.createContext(r);function d(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);