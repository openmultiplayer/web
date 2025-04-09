"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["87324"],{38059:function(e,t,n){n.r(t),n.d(t,{default:()=>f,frontMatter:()=>l,metadata:()=>i,assets:()=>o,toc:()=>a,contentTitle:()=>s});var i=JSON.parse('{"id":"scripting/functions/db_get_field_int","title":"db_get_field_int","description":"Get the content of a field as an integer from db_query.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/db_get_field_int.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/db_get_field_int","permalink":"/th/docs/scripting/functions/db_get_field_int","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/db_get_field_int.md","tags":[{"inline":true,"label":"sqlite","permalink":"/th/docs/tags/sqlite"}],"version":"current","frontMatter":{"title":"db_get_field_int","sidebar_label":"db_get_field_int","description":"Get the content of a field as an integer from db_query.","tags":["sqlite"]},"sidebar":"docsSidebar","previous":{"title":"db_get_field_float","permalink":"/th/docs/scripting/functions/db_get_field_float"},"next":{"title":"db_get_mem_handle","permalink":"/th/docs/scripting/functions/db_get_mem_handle"}}'),r=n("85893"),d=n("50065");let l={title:"db_get_field_int",sidebar_label:"db_get_field_int",description:"Get the content of a field as an integer from db_query.",tags:["sqlite"]},s=void 0,o={},a=[{value:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",level:2},{value:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",level:2},{value:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",level:2},{value:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",level:2}];function c(e){let t={admonition:"admonition",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.p,{children:"This function starts with lowercase letter."})}),"\n",(0,r.jsx)(t.h2,{id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",children:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22"}),"\n",(0,r.jsx)(t.p,{children:"Get the content of a field as an integer from db_query"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["DBResult",":dbresult"]}),(0,r.jsx)(t.td,{children:"The result to get the data from."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"field=0"}),(0,r.jsx)(t.td,{children:"The field to get the data from."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",children:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19"}),"\n",(0,r.jsx)(t.p,{children:"Retrieved value as integer (number)."}),"\n",(0,r.jsx)(t.h2,{id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",children:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.p,{children:"Using an invalid handle will crash your server! Get a valid handle by using db_query. But it's protected against NULL references."})}),"\n",(0,r.jsx)(t.h2,{id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",children:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"db_open: Open a connection to an SQLite database"}),"\n",(0,r.jsx)(t.li,{children:"db_close: Close the connection to an SQLite database"}),"\n",(0,r.jsx)(t.li,{children:"db_query: Query an SQLite database"}),"\n",(0,r.jsx)(t.li,{children:"db_free_result: Free result memory from a db_query"}),"\n",(0,r.jsx)(t.li,{children:"db_num_rows: Get the number of rows in a result"}),"\n",(0,r.jsx)(t.li,{children:"db_next_row: Move to the next row"}),"\n",(0,r.jsx)(t.li,{children:"db_num_fields: Get the number of fields in a result"}),"\n",(0,r.jsx)(t.li,{children:"db_field_name: Returns the name of a field at a particular index"}),"\n",(0,r.jsx)(t.li,{children:"db_get_field: Get content of field with specified ID from current result row"}),"\n",(0,r.jsx)(t.li,{children:"db_get_field_assoc: Get content of field with specified name from current result row"}),"\n",(0,r.jsx)(t.li,{children:"db_get_field_int: Get content of field as an integer with specified ID from current result row"}),"\n",(0,r.jsx)(t.li,{children:"db_get_field_assoc_int: Get content of field as an integer with specified name from current result row"}),"\n",(0,r.jsx)(t.li,{children:"db_get_field_float: Get content of field as a float with specified ID from current result row"}),"\n",(0,r.jsx)(t.li,{children:"db_get_field_assoc_float: Get content of field as a float with specified name from current result row"}),"\n",(0,r.jsx)(t.li,{children:"db_get_mem_handle: Get memory handle for an SQLite database that was opened with db_open."}),"\n",(0,r.jsx)(t.li,{children:"db_get_result_mem_handle: Get memory handle for an SQLite query that was executed with db_query."}),"\n",(0,r.jsx)(t.li,{children:"db_debug_openfiles"}),"\n",(0,r.jsx)(t.li,{children:"db_debug_openresults"}),"\n"]})]})}function f(e={}){let{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return l}});var i=n(67294);let r={},d=i.createContext(r);function l(e){let t=i.useContext(d);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(d.Provider,{value:t},e.children)}}}]);