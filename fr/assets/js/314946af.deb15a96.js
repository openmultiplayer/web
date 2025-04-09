"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["42345"],{5117:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>i,assets:()=>o,toc:()=>a,contentTitle:()=>d});var i=JSON.parse('{"id":"scripting/functions/db_close","title":"db_close","description":"Closes a SQLite database connection that was opened with `db_open`.","source":"@site/docs/scripting/functions/db_close.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/db_close","permalink":"/fr/docs/scripting/functions/db_close","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/db_close.md","tags":[{"inline":true,"label":"sqlite","permalink":"/fr/docs/tags/sqlite"}],"version":"current","frontMatter":{"title":"db_close","sidebar_label":"db_close","description":"Closes a SQLite database connection that was opened with `db_open`.","keywords":["sqlite"],"tags":["sqlite"]},"sidebar":"docsSidebar","previous":{"title":"clamp","permalink":"/fr/docs/scripting/functions/clamp"},"next":{"title":"db_debug_openfiles","permalink":"/fr/docs/scripting/functions/db_debug_openfiles"}}'),s=t("85893"),r=t("50065");let l={title:"db_close",sidebar_label:"db_close",description:"Closes a SQLite database connection that was opened with `db_open`.",keywords:["sqlite"],tags:["sqlite"]},d=void 0,o={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Modern SQLite Functions",id:"modern-sqlite-functions",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{LowercaseNote:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Closes a SQLite database connection that was opened with ",(0,s.jsx)(n.a,{href:"db_open",children:"db_open"}),"."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["DB",":db"]}),(0,s.jsxs)(n.td,{children:["The handle of the database connection to close (returned by ",(0,s.jsx)(n.a,{href:"db_open",children:"db_open"}),")."]})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"false"})," - The function failed to execute. This could mean that the database connection handle is invalid."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'static DB:gDBConnectionHandle;\n\n// ...\n\npublic OnGameModeInit()\n{\n    // ...\n\n    // Create a connection to a database\n    gDBConnectionHandle = db_open("example.db");\n\n    // If connection to the database exists\n    if (gDBConnectionHandle)\n    {\n        // Successfully created a connection to the database\n        print("Successfully created a connection to database \\"example.db\\".");\n    }\n    else\n    {\n        // Failed to create a connection to the database\n        print("Failed to open a connection to database \\"example.db\\".");\n    }\n\n    // ...\n\n    return 1;\n}\n\npublic OnGameModeExit()\n{\n    // Close the connection to the database if connection is open\n    if (db_close(gDBConnectionHandle))\n    {\n        // Extra cleanup\n        gDBConnectionHandle = DB:0;\n    }\n\n    // ...\n\n    return 1;\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["Using an invalid handle other than zero will crash your server! Get a valid database connection handle by using ",(0,s.jsx)(n.a,{href:"db_open",children:"db_open"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"db_open",children:"db_open"}),": Open a connection to an SQLite database"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"db_close",children:"db_close"}),": Close the connection to an SQLite database"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"db_query",children:"db_query"}),": Query an SQLite database"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"db_free_result",children:"db_free_result"}),": Free result memory from a db_query"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"db_num_rows",children:"db_num_rows"}),": Get the number of rows in a result"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"db_next_row",children:"db_next_row"}),": Move to the next row"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"db_num_fields",children:"db_num_fields"}),": Get the number of fields in a result"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"db_field_name",children:"db_field_name"}),": Returns the name of a field at a particular index"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"db_get_field",children:"db_get_field"}),": Get content of field with specified ID from current result row"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"db_get_field_assoc",children:"db_get_field_assoc"}),": Get content of field with specified name from current result row"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"db_get_field_int",children:"db_get_field_int"}),": Get content of field as an integer with specified ID from current result row"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"db_get_field_assoc_int",children:"db_get_field_assoc_int"}),": Get content of field as an integer with specified name from current result row"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"db_get_field_float",children:"db_get_field_float"}),": Get content of field as a float with specified ID from current result row"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"db_get_field_assoc_float",children:"db_get_field_assoc_float"}),": Get content of field as a float with specified name from current result row"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"db_get_mem_handle",children:"db_get_mem_handle"}),": Get memory handle for an SQLite database that was opened with db_open."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"db_get_result_mem_handle",children:"db_get_result_mem_handle"}),": Get memory handle for an SQLite query that was executed with db_query."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"db_debug_openfiles",children:"db_debug_openfiles"}),": The function gets the number of open database connections for debugging purposes."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"db_debug_openresults",children:"db_debug_openresults"}),": The function gets the number of open database results."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"modern-sqlite-functions",children:"Modern SQLite Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_Open",children:"DB_Open"}),": Open a connection to an SQLite database"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_Close",children:"DB_Close"}),": Close the connection to an SQLite database"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_ExecuteQuery",children:"DB_ExecuteQuery"}),": Query an SQLite database"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_FreeResultSet",children:"DB_FreeResultSet"}),": Free result memory from a DB_ExecuteQuery"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_GetRowCount",children:"DB_GetRowCount"}),": Get the number of rows in a result"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_SelectNextRow",children:"DB_SelectNextRow"}),": Move to the next row"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_GetFieldCount",children:"DB_GetFieldCount"}),": Get the number of fields in a result"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_GetFieldName",children:"DB_GetFieldName"}),": Returns the name of a field at a particular index"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_GetFieldString",children:"DB_GetFieldString"}),": Get content of field with specified ID from current result row"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_GetFieldStringByName",children:"DB_GetFieldStringByName"}),": Get content of field with specified name from current result row"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_GetFieldInt",children:"DB_GetFieldInt"}),": Get content of field as an integer with specified ID from current result row"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_GetFieldIntByName",children:"DB_GetFieldIntByName"}),": Get content of field as an integer with specified name from current result row"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_GetFieldFloat",children:"DB_GetFieldFloat"}),": Get content of field as a float with specified ID from current result row"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_GetFieldFloatByName",children:"DB_GetFieldFloatByName"}),": Get content of field as a float with specified name from current result row"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_GetMemHandle",children:"DB_GetMemHandle"}),": Get memory handle for an SQLite database that was opened with db_open."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_GetLegacyDBResult",children:"DB_GetLegacyDBResult"}),": Get memory handle for an SQLite query that was executed with DB_ExecuteQuery."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_GetDatabaseConnectionCount",children:"DB_GetDatabaseConnectionCount"}),": The function gets the number of open database connections for debugging purposes."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_GetDatabaseResultSetCount",children:"DB_GetDatabaseResultSetCount"}),": The function gets the number of open database results."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return l}});var i=t(67294);let s={},r=i.createContext(s);function l(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);