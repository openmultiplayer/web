"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["22485"],{44766:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>i,assets:()=>o,toc:()=>a,contentTitle:()=>l});var i=JSON.parse('{"id":"scripting/functions/db_field_name","title":"db_field_name","description":"Returns the name of the field at the specified index.","source":"@site/docs/scripting/functions/db_field_name.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/db_field_name","permalink":"/ro/docs/scripting/functions/db_field_name","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/db_field_name.md","tags":[],"version":"current","frontMatter":{"title":"db_field_name","sidebar_label":"db_field_name","description":"Returns the name of the field at the specified index.","keywords":["sqlite"]},"sidebar":"docsSidebar","previous":{"title":"db_debug_openresults","permalink":"/ro/docs/scripting/functions/db_debug_openresults"},"next":{"title":"db_free_result","permalink":"/ro/docs/scripting/functions/db_free_result"}}'),d=t("85893"),s=t("50065");let r={title:"db_field_name",sidebar_label:"db_field_name",description:"Returns the name of the field at the specified index.",keywords:["sqlite"]},l=void 0,o={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{LowercaseNote:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t,{}),"\n",(0,d.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,d.jsx)(n.p,{children:"Returns the name of a field at a particular index."}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Name"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:["DBResult",":dbresult"]}),(0,d.jsxs)(n.td,{children:["The result to get the data from; returned by ",(0,d.jsx)(n.a,{href:"db_query",children:"db_query"}),"."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"field"}),(0,d.jsx)(n.td,{children:"The index of the field to get the name of."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"result[]"}),(0,d.jsx)(n.td,{children:"The result."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"maxlength"}),(0,d.jsx)(n.td,{children:"The max length of the field."})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,d.jsx)(n.p,{children:"Returns 1 if result set handle is valid, otherwise 0."}),"\n",(0,d.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-c",children:'static DB:gDBConnectionHandle;\n\npublic OnGameModeInit()\n{\n    // ...\n\n    // Create a connection to a database\n    gDBConnectionHandle = db_open("example.db");\n\n    // If connection to the database exists\n    if (gDBConnectionHandle)\n    {\n        // Select first entry in table "join_log"\n        new DBResult:db_result_set = db_query(g_DBConnection, "SELECT * FROM `join_log` LIMIT 1");\n\n        // If result set handle is valid\n        if (db_result_set)\n        {\n            // Get the number of fields from result set\n            new columns = db_num_fields(db_result_set);\n\n            // Allocate some memory for storing field names\n            new field_name[32];\n\n            // Iterate through all column indices\n            for (new column_index; index < column_index; index++)\n            {\n                // Store the name of the i indexed column name into "field_name"\n                db_field_name(db_result_set, index, field_name, sizeof field_name);\n\n                // Print "field_name"\n                printf("Field name at index %d: \\"%s\\"", index, field_name);\n            }\n\n            // Frees the result set\n            db_free_result(db_result_set);\n        }\n    }\n    else\n    {\n        // Failed to create a connection to the database\n        print("Failed to open a connection to database \\"example.db\\".");\n    }\n}\n\npublic OnGameModeExit()\n{\n    // Close the connection to the database if connection is open\n    if (db_close(gDBConnectionHandle))\n    {\n        // Extra cleanup\n        gDBConnectionHandle = DB:0;\n    }\n\n    // ...\n\n    return 1;\n}\n'})}),"\n",(0,d.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,d.jsx)(n.admonition,{type:"warning",children:(0,d.jsxs)(n.p,{children:["Using an invalid handle other than zero will crash your server! Get a valid database connection handle by using ",(0,d.jsx)(n.a,{href:"db_query",children:"db_query"}),"."]})}),"\n",(0,d.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"db_open",children:"db_open"}),": Open a connection to an SQLite database"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"db_close",children:"db_close"}),": Close the connection to an SQLite database"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"db_query",children:"db_query"}),": Query an SQLite database"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"db_free_result",children:"db_free_result"}),": Free result memory from a db_query"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"db_num_rows",children:"db_num_rows"}),": Get the number of rows in a result"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"db_next_row",children:"db_next_row"}),": Move to the next row"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"db_num_fields",children:"db_num_fields"}),": Get the number of fields in a result"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"db_get_field",children:"db_get_field"}),": Get content of field with specified ID from current result row"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"db_get_field_assoc",children:"db_get_field_assoc"}),": Get content of field with specified name from current result row"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"db_get_field_int",children:"db_get_field_int"}),": Get content of field as an integer with specified ID from current result row"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"db_get_field_assoc_int",children:"db_get_field_assoc_int"}),": Get content of field as an integer with specified name from current result row"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"db_get_field_float",children:"db_get_field_float"}),": Get content of field as a float with specified ID from current result row"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"db_get_field_assoc_float",children:"db_get_field_assoc_float"}),": Get content of field as a float with specified name from current result row"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"db_get_mem_handle",children:"db_get_mem_handle"}),": Get memory handle for an SQLite database that was opened with db_open."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"db_get_result_mem_handle",children:"db_get_result_mem_handle"}),": Get memory handle for an SQLite query that was executed with db_query."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"db_debug_openfiles",children:"db_debug_openfiles"}),": The function gets the number of open database connections for debugging purposes."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"db_debug_openresults",children:"db_debug_openresults"}),": The function gets the number of open database results."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var i=t(67294);let d={},s=i.createContext(d);function r(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);