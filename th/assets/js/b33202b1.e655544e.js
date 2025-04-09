"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["93019"],{30377:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>s,metadata:()=>i,assets:()=>o,toc:()=>c,contentTitle:()=>d});var i=JSON.parse('{"id":"scripting/functions/db_num_fields","title":"db_num_fields","description":"Get the number of fields in a result.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/db_num_fields.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/db_num_fields","permalink":"/th/docs/scripting/functions/db_num_fields","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/db_num_fields.md","tags":[{"inline":true,"label":"sqlite","permalink":"/th/docs/tags/sqlite"}],"version":"current","frontMatter":{"title":"db_num_fields","sidebar_label":"db_num_fields","description":"Get the number of fields in a result.","tags":["sqlite"]},"sidebar":"docsSidebar","previous":{"title":"db_next_row","permalink":"/th/docs/scripting/functions/db_next_row"},"next":{"title":"db_num_rows","permalink":"/th/docs/scripting/functions/db_num_rows"}}'),r=t("85893"),l=t("50065");let s={title:"db_num_fields",sidebar_label:"db_num_fields",description:"Get the number of fields in a result.",tags:["sqlite"]},d=void 0,o={},c=[{value:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",level:2},{value:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",level:2},{value:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",level:2},{value:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",level:2},{value:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",level:2}];function a(e){let n={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"This function starts with lowercase letter."})}),"\n",(0,r.jsx)(n.h2,{id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",children:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22"}),"\n",(0,r.jsx)(n.p,{children:"Get the number of fields in a result."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["DBResult",":dbresult"]}),(0,r.jsx)(n.td,{children:"The result of db_query."})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",children:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19"}),"\n",(0,r.jsx)(n.p,{children:"The number of fields in the result."}),"\n",(0,r.jsx)(n.h2,{id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",children:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'// ...\n// Declare "db_result" and select all rows and columns from "spawn_list"\nnew DBResult:db_result = db_query(db_handle, "SELECT * FROM `spawn_list` WHERE 1;");\n\n// Print the amount of columns selected\nprintf("Selected columns: %d", db_num_fields(db_result));\n\n// Do...\ndo\n{\n    // ...\n}\n\n// While next row has been fetched\nwhile(db_next_row(db_handle));\n\n// Frees result\ndb_free_result(db_result);\n// ...\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",children:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"Using an invalid handle will crash your server! Get a valid handle by using db_query. But it's protected against NULL references."})}),"\n",(0,r.jsx)(n.h2,{id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",children:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"db_open: Open a connection to an SQLite database"}),"\n",(0,r.jsx)(n.li,{children:"db_close: Close the connection to an SQLite database"}),"\n",(0,r.jsx)(n.li,{children:"db_query: Query an SQLite database"}),"\n",(0,r.jsx)(n.li,{children:"db_free_result: Free result memory from a db_query"}),"\n",(0,r.jsx)(n.li,{children:"db_num_rows: Get the number of rows in a result"}),"\n",(0,r.jsx)(n.li,{children:"db_next_row: Move to the next row"}),"\n",(0,r.jsx)(n.li,{children:"db_num_fields: Get the number of fields in a result"}),"\n",(0,r.jsx)(n.li,{children:"db_field_name: Returns the name of a field at a particular index"}),"\n",(0,r.jsx)(n.li,{children:"db_get_field: Get content of field with specified ID from current result row"}),"\n",(0,r.jsx)(n.li,{children:"db_get_field_assoc: Get content of field with specified name from current result row"}),"\n",(0,r.jsx)(n.li,{children:"db_get_field_int: Get content of field as an integer with specified ID from current result row"}),"\n",(0,r.jsx)(n.li,{children:"db_get_field_assoc_int: Get content of field as an integer with specified name from current result row"}),"\n",(0,r.jsx)(n.li,{children:"db_get_field_float: Get content of field as a float with specified ID from current result row"}),"\n",(0,r.jsx)(n.li,{children:"db_get_field_assoc_float: Get content of field as a float with specified name from current result row"}),"\n",(0,r.jsx)(n.li,{children:"db_get_mem_handle: Get memory handle for an SQLite database that was opened with db_open."}),"\n",(0,r.jsx)(n.li,{children:"db_get_result_mem_handle: Get memory handle for an SQLite query that was executed with db_query."}),"\n",(0,r.jsx)(n.li,{children:"db_debug_openfiles"}),"\n",(0,r.jsx)(n.li,{children:"db_debug_openresults"}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return s}});var i=t(67294);let r={},l=i.createContext(r);function s(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);