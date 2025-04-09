"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["65982"],{9671:function(e,n,t){t.r(n),t.d(n,{default:()=>f,frontMatter:()=>r,metadata:()=>i,assets:()=>a,toc:()=>o,contentTitle:()=>s});var i=JSON.parse('{"id":"scripting/functions/db_get_field_float","title":"db_get_field_float","description":"Gets the content of a field as a floating point number with the specified field index.","source":"@site/docs/scripting/functions/db_get_field_float.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/db_get_field_float","permalink":"/tr/docs/scripting/functions/db_get_field_float","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/db_get_field_float.md","tags":[],"version":"current","frontMatter":{"title":"db_get_field_float","sidebar_label":"db_get_field_float","description":"Gets the content of a field as a floating point number with the specified field index.","keywords":["sqlite"]},"sidebar":"docsSidebar","previous":{"title":"db_get_field_assoc_int","permalink":"/tr/docs/scripting/functions/db_get_field_assoc_int"},"next":{"title":"db_get_field_int","permalink":"/tr/docs/scripting/functions/db_get_field_int"}}'),d=t("85893"),l=t("50065");let r={title:"db_get_field_float",sidebar_label:"db_get_field_float",description:"Gets the content of a field as a floating point number with the specified field index.",keywords:["sqlite"]},s=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{LowercaseNote:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t,{}),"\n",(0,d.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,d.jsx)(n.p,{children:"The function gets the content of a field as a floating point number with the specified field index."}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Name"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsxs)(n.td,{children:["DBResult",":dbresult"]}),(0,d.jsx)(n.td,{children:"The result to get the data from."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"field = 0"}),(0,d.jsx)(n.td,{children:"The field to get the data from."})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,d.jsx)(n.p,{children:"Retrieved value as a floating point number."}),"\n",(0,d.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-c",children:'// examples.inc\n\n// ...\n\nstatic FindFieldIndexByName(DBResult:dbResultSet, const fieldName[])\n{\n    // Return value variable with default return value\n    new ret = -1;\n\n    // Field count\n    new field_count = db_num_fields(dbResultSet);\n\n    // Current field name\n    new current_field_name[32];\n\n    // Iterate through all fields\n    for (new field_index; field_index < field_count; field_index++)\n    {\n        // Get field name\n        if (db_field_name(dbResultSet, field_index, current_field_name, sizeof current_field_name))\n        {\n            // Compare searched field name to current field name\n            if (!strcmp(fieldName, current_field_name))\n            {\n                // Success, store field index to return value variable\n                ret = field_index;\n\n                // Break out of the loop\n                break;\n            }\n        }\n    }\n\n    // Return found field index or "-1"\n    return ret;\n}\n\nFloat:Examples_CalculateSum(DB:dbConnectionHandle)\n{\n    // Return value variable\n    new Float:ret;\n\n    // Database result set\n    new DBResult:db_result_set = db_query("SELECT `value` FROM `examples`");\n\n    // If database result set is valid\n    if (db_result_set)\n    {\n        // Get target field index\n        new target_field_index = FindFieldIndexByName(db_result_set, "value");\n\n        // Check if field index is valid\n        if (target_field_index >= 0)\n        {\n            // Do operations\n            do\n            {\n                // Add value from "example" field to the return value variable\n                ret += db_get_field_float(db_result_set, target_field_index);\n            }\n\n            // While next row could be fetched\n            while (db_next_row(db_result_set));\n        }\n\n        // Free result set\n        db_free_result(db_result_set);\n    }\n\n    // Return calculated sum\n    return ret;\n}\n'})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-c",children:'// mode.pwn\n\n// ...\n\n#include <examples>\n\nstatic DB:gDBConnectionHandle;\n\n// ...\n\npublic OnGameModeInit()\n{\n    // ...\n\n    // Create a connection to a database\n    gDBConnectionHandle = db_open("example.db");\n\n    // If connection to the database exists\n    if (gDBConnectionHandle)\n    {\n        // Successfully created a connection to the database\n        print("Successfully created a connection to database \\"example.db\\".");\n        printf("Calculated sum: %f", Examples_CalculateSum(gDBConnectionHandle));\n    }\n    else\n    {\n        // Failed to create a connection to the database\n        print("Failed to open a connection to database \\"example.db\\".");\n    }\n\n    // ...\n\n    return 1;\n}\n\npublic OnGameModeExit()\n{\n    // Close the connection to the database if connection is open\n    if (db_close(gDBConnectionHandle))\n    {\n        // Extra cleanup\n        gDBConnectionHandle = DB:0;\n    }\n\n    // ...\n\n    return 1;\n}\n'})}),"\n",(0,d.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,d.jsx)(n.admonition,{type:"warning",children:(0,d.jsxs)(n.p,{children:["Using an invalid handle other than zero will crash your server! Get a valid database connection handle by using ",(0,d.jsx)(n.a,{href:"db_query",children:"db_query"}),"."]})}),"\n",(0,d.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"db_open",children:"db_open"}),": Open a connection to an SQLite database"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"db_close",children:"db_close"}),": Close the connection to an SQLite database"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"db_query",children:"db_query"}),": Query an SQLite database"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"db_free_result",children:"db_free_result"}),": Free result memory from a db_query"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"db_num_rows",children:"db_num_rows"}),": Get the number of rows in a result"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"db_next_row",children:"db_next_row"}),": Move to the next row"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"db_num_fields",children:"db_num_fields"}),": Get the number of fields in a result"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"db_field_name",children:"db_field_name"}),": Returns the name of a field at a particular index"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"db_get_field",children:"db_get_field"}),": Get content of field with specified ID from current result row"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"db_get_field_assoc",children:"db_get_field_assoc"}),": Get content of field with specified name from current result row"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"db_get_field_int",children:"db_get_field_int"}),": Get content of field as an integer with specified ID from current result row"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"db_get_field_assoc_int",children:"db_get_field_assoc_int"}),": Get content of field as an integer with specified name from current result row"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"db_get_field_assoc_float",children:"db_get_field_assoc_float"}),": Get content of field as a float with specified name from current result row"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"db_get_mem_handle",children:"db_get_mem_handle"}),": Get memory handle for an SQLite database that was opened with db_open."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"db_get_result_mem_handle",children:"db_get_result_mem_handle"}),": Get memory handle for an SQLite query that was executed with db_query."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"db_debug_openfiles",children:"db_debug_openfiles"}),": The function gets the number of open database connections for debugging purposes."]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"db_debug_openresults",children:"db_debug_openresults"}),": The function gets the number of open database results."]}),"\n"]})]})}function f(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return r}});var i=t(67294);let d={},l=i.createContext(d);function r(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);