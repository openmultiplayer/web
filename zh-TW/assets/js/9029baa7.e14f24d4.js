"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["22378"],{49734:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>s,metadata:()=>i,assets:()=>a,toc:()=>o,contentTitle:()=>d});var i=JSON.parse('{"id":"scripting/functions/DB_GetFieldString","title":"DB_GetFieldString","description":"Get the content of a field from DB_ExecuteQuery.","source":"@site/docs/scripting/functions/DB_GetFieldString.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/DB_GetFieldString","permalink":"/zh-TW/docs/scripting/functions/DB_GetFieldString","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/DB_GetFieldString.md","tags":[{"inline":true,"label":"sqlite","permalink":"/zh-TW/docs/tags/sqlite"}],"version":"current","frontMatter":{"title":"DB_GetFieldString","sidebar_label":"DB_GetFieldString","description":"Get the content of a field from DB_ExecuteQuery.","keywords":["sqlite"],"tags":["sqlite"]},"sidebar":"docsSidebar","previous":{"title":"DB_GetFieldName","permalink":"/zh-TW/docs/scripting/functions/DB_GetFieldName"},"next":{"title":"DB_GetFieldStringByName","permalink":"/zh-TW/docs/scripting/functions/DB_GetFieldStringByName"}}'),r=t("85893"),l=t("50065");let s={title:"DB_GetFieldString",sidebar_label:"DB_GetFieldString",description:"Get the content of a field from DB_ExecuteQuery.",keywords:["sqlite"],tags:["sqlite"]},d=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Get the content of a field from DB_ExecuteQuery"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["DBResult",":result"]}),(0,r.jsx)(n.td,{children:"The result to get the data from."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"field"}),(0,r.jsx)(n.td,{children:"The field to get the data from."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"output[]"}),(0,r.jsx)(n.td,{children:"The result."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"size = sizeof (output)"}),(0,r.jsx)(n.td,{children:"The max length of the field."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:["Returns ",(0,r.jsx)(n.strong,{children:"true"})," if result set handle is valid and the column is available, otherwise ",(0,r.jsx)(n.strong,{children:"false"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'// examples.inc\n\n// ...\n\nstatic FindFieldIndexByName(DBResult:dbResultSet, const fieldName[])\n{\n    // Return value variable with default return value\n    new ret = -1;\n\n    // Field count\n    new field_count = DB_GetFieldCount(dbResultSet);\n\n    // Current field name\n    new current_field_name[32];\n\n    // Iterate through all fields\n    for (new field_index; field_index < field_count; field_index++)\n    {\n        // Get field name\n        if (DB_GetFieldName(dbResultSet, field_index, current_field_name, sizeof current_field_name))\n        {\n            // Compare searched field name to current field name\n            if (!strcmp(fieldName, current_field_name))\n            {\n                // Success, store field index to return value variable\n                ret = field_index;\n\n                // Break out of the loop\n                break;\n            }\n        }\n    }\n\n    // Return found field index or "-1"\n    return ret;\n}\n\nExamples_ListNames(DB:dbConnectionHandle)\n{\n    // Database result set\n    new DBResult:db_result_set = DB_ExecuteQuery("SELECT `name` FROM `examples`");\n\n    // If database result set is valid\n    if (db_result_set)\n    {\n        // Get target field index\n        new target_field_index = FindFieldIndexByName(db_result_set, "name");\n\n        // Check if field index is valid\n        if (target_field_index >= 0)\n        {\n            // Allocate some memory to store results\n            new result[256];\n\n            // Do operations\n            do\n            {\n                // Add value from "example" field to the return value variable\n                DB_GetFieldString(db_result_set, target_field_index, result, sizeof result);\n            }\n\n            // While next row could be fetched\n            while (DB_SelectNextRow(db_result_set));\n        }\n\n        // Free result set\n        DB_FreeResultSet(db_result_set);\n    }\n}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'// mode.pwn\n\n// ...\n\n#include <examples>\n\nstatic DB:gDBConnectionHandle;\n\n// ...\n\npublic OnGameModeInit()\n{\n    // ...\n\n    // Create a connection to a database\n    gDBConnectionHandle = DB_Open("example.db");\n\n    // If connection to the database exists\n    if (gDBConnectionHandle)\n    {\n        // Successfully created a connection to the database\n        print("Successfully created a connection to database \\"example.db\\".");\n        Examples_ListNames(gDBConnectionHandle);\n    }\n    else\n    {\n        // Failed to create a connection to the database\n        print("Failed to open a connection to database \\"example.db\\".");\n    }\n\n    // ...\n\n    return 1;\n}\n\npublic OnGameModeExit()\n{\n    // Close the connection to the database if connection is open\n    if (DB_Close(gDBConnectionHandle))\n    {\n        // Extra cleanup\n        gDBConnectionHandle = DB:0;\n    }\n\n    // ...\n\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["Using an invalid handle other than zero will crash your server! Get a valid database connection handle by using ",(0,r.jsx)(n.a,{href:"DB_ExecuteQuery",children:"DB_ExecuteQuery"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"DB_Open",children:"DB_Open"}),": Open a connection to an SQLite database"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"DB_Close",children:"DB_Close"}),": Close the connection to an SQLite database"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"DB_ExecuteQuery",children:"DB_ExecuteQuery"}),": Query an SQLite database"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"DB_FreeResultSet",children:"DB_FreeResultSet"}),": Free result memory from a DB_ExecuteQuery"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"DB_GetRowCount",children:"DB_GetRowCount"}),": Get the number of rows in a result"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"DB_SelectNextRow",children:"DB_SelectNextRow"}),": Move to the next row"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"DB_GetFieldCount",children:"DB_GetFieldCount"}),": Get the number of fields in a result"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"DB_GetFieldName",children:"DB_GetFieldName"}),": Returns the name of a field at a particular index"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"DB_GetFieldString",children:"DB_GetFieldString"}),": Get content of field with specified ID from current result row"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"DB_GetFieldStringByName",children:"DB_GetFieldStringByName"}),": Get content of field with specified name from current result row"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"DB_GetFieldInt",children:"DB_GetFieldInt"}),": Get content of field as an integer with specified ID from current result row"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"DB_GetFieldIntByName",children:"DB_GetFieldIntByName"}),": Get content of field as an integer with specified name from current result row"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"DB_GetFieldFloat",children:"DB_GetFieldFloat"}),": Get content of field as a float with specified ID from current result row"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"DB_GetFieldFloatByName",children:"DB_GetFieldFloatByName"}),": Get content of field as a float with specified name from current result row"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"DB_GetMemHandle",children:"DB_GetMemHandle"}),": Get memory handle for an SQLite database that was opened with db_open."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"DB_GetLegacyDBResult",children:"DB_GetLegacyDBResult"}),": Get memory handle for an SQLite query that was executed with DB_ExecuteQuery."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"DB_GetDatabaseConnectionCount",children:"DB_GetDatabaseConnectionCount"}),": The function gets the number of open database connections for debugging purposes."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"DB_GetDatabaseResultSetCount",children:"DB_GetDatabaseResultSetCount"}),": The function gets the number of open database results."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return s}});var i=t(67294);let r={},l=i.createContext(r);function s(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);