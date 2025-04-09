"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["77914"],{5311:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>i,assets:()=>c,toc:()=>a,contentTitle:()=>s});var i=JSON.parse('{"id":"scripting/functions/DB_GetFieldInt","title":"DB_GetFieldInt","description":"\u901A\u8FC7\u5B57\u6BB5\u7D22\u5F15\u4ECEDB_ExecuteQuery\u7ED3\u679C\u4E2D\u83B7\u53D6\u6574\u6570\u503C\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/DB_GetFieldInt.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/DB_GetFieldInt","permalink":"/zh-CN/docs/scripting/functions/DB_GetFieldInt","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/DB_GetFieldInt.md","tags":[{"inline":true,"label":"sqlite","permalink":"/zh-CN/docs/tags/sqlite"}],"version":"current","frontMatter":{"title":"DB_GetFieldInt","sidebar_label":"DB_GetFieldInt","description":"\u901A\u8FC7\u5B57\u6BB5\u7D22\u5F15\u4ECEDB_ExecuteQuery\u7ED3\u679C\u4E2D\u83B7\u53D6\u6574\u6570\u503C\u3002","keywords":["sqlite"],"tags":["sqlite"]},"sidebar":"docsSidebar","previous":{"title":"DB_GetFieldFloatByName","permalink":"/zh-CN/docs/scripting/functions/DB_GetFieldFloatByName"},"next":{"title":"DB_GetFieldIntByName","permalink":"/zh-CN/docs/scripting/functions/DB_GetFieldIntByName"}}'),l=t("85893"),r=t("50065");let d={title:"DB_GetFieldInt",sidebar_label:"DB_GetFieldInt",description:"\u901A\u8FC7\u5B57\u6BB5\u7D22\u5F15\u4ECEDB_ExecuteQuery\u7ED3\u679C\u4E2D\u83B7\u53D6\u6574\u6570\u503C\u3002",keywords:["sqlite"],tags:["sqlite"]},s=void 0,c={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function o(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsxs)(n.p,{children:["\u8BE5\u51FD\u6570\u7528\u4E8E\u901A\u8FC7\u5B57\u6BB5\u7D22\u5F15\u4ECE",(0,l.jsx)(n.a,{href:"DB_ExecuteQuery",children:"DB_ExecuteQuery"}),"\u5206\u914D\u7684\u67E5\u8BE2\u7ED3\u679C\u4E2D\u83B7\u53D6\u6574\u6570\u503C\u3002"]}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u53C2\u6570\u540D"}),(0,l.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:["DBResult",":result"]}),(0,l.jsxs)(n.td,{children:["\u67E5\u8BE2\u7ED3\u679C\u53E5\u67C4\uFF08\u7531",(0,l.jsx)(n.a,{href:"DB_ExecuteQuery",children:"DB_ExecuteQuery"}),"\u8FD4\u56DE\uFF09"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"field = 0"}),(0,l.jsx)(n.td,{children:"\u76EE\u6807\u5B57\u6BB5\u7D22\u5F15\uFF08\u9ED8\u8BA4\u4ECE 0 \u5F00\u59CB\uFF09"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsx)(n.p,{children:"\u4EE5\u6574\u6570\u5F62\u5F0F\u8FD4\u56DE\u83B7\u53D6\u7684\u5B57\u6BB5\u503C\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'// \u793A\u4F8B\u6A21\u5757\n\n// ...\n\nstatic FindFieldIndexByName(DBResult:dbResultSet, const fieldName[])\n{\n    // \u9ED8\u8BA4\u8FD4\u56DE-1\u8868\u793A\u672A\u627E\u5230\n    new ret = -1;\n\n    // \u83B7\u53D6\u5B57\u6BB5\u603B\u6570\n    new field_count = DB_GetFieldCount(dbResultSet);\n\n    // \u5F53\u524D\u5B57\u6BB5\u540D\u79F0\u7F13\u5B58\n    new current_field_name[32];\n\n    // \u904D\u5386\u6240\u6709\u5B57\u6BB5\n    for (new field_index; field_index < field_count; field_index++)\n    {\n        // \u83B7\u53D6\u5B57\u6BB5\u540D\u79F0\n        if (DB_GetFieldName(dbResultSet, field_index, current_field_name, sizeof current_field_name))\n        {\n            // \u5339\u914D\u76EE\u6807\u5B57\u6BB5\u540D\u79F0\n            if (!strcmp(fieldName, current_field_name))\n            {\n                ret = field_index;  // \u8BB0\u5F55\u5339\u914D\u7684\u7D22\u5F15\n                break;              // \u63D0\u524D\u9000\u51FA\u5FAA\u73AF\n            }\n        }\n    }\n    return ret;\n}\n\nExamples_CalculateSum(DB:dbConnectionHandle)\n{\n    // \u8FD4\u56DE\u503C\u53D8\u91CF\n    new ret;\n\n    // \u6267\u884C\u6570\u636E\u5E93\u67E5\u8BE2\n    new DBResult:db_result_set = DB_ExecuteQuery(dbConnectionHandle, "SELECT `value` FROM `examples`");\n\n    if (db_result_set)\n    {\n        // \u83B7\u53D6\u76EE\u6807\u5B57\u6BB5\u7D22\u5F15\n        new target_field_index = FindFieldIndexByName(db_result_set, "value");\n\n        if (target_field_index >= 0)\n        {\n            // \u904D\u5386\u7ED3\u679C\u96C6\n            do\n            {\n                // \u7D2F\u52A0\u6574\u6570\u503C\n                ret += DB_GetFieldInt(db_result_set, target_field_index);\n            }\n            while (DB_SelectNextRow(db_result_set)); // \u8DF3\u8F6C\u81F3\u4E0B\u4E00\u884C\n        }\n\n        // \u91CA\u653E\u7ED3\u679C\u96C6\n        DB_FreeResultSet(db_result_set);\n    }\n\n    return ret;\n}\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'// \u4E3B\u6E38\u620F\u6A21\u5F0F\u6587\u4EF6\n\n// ...\n\n#include <examples>\n\nstatic DB:gDBConnectionHandle;\n\n// ...\n\npublic OnGameModeInit()\n{\n    // ...\n\n    // \u5EFA\u7ACB\u6570\u636E\u5E93\u8FDE\u63A5\n    gDBConnectionHandle = DB_Open("example.db");\n\n    if (gDBConnectionHandle)\n    {\n        print("\u6210\u529F\u8FDE\u63A5\u6570\u636E\u5E93 \\"example.db\\"");\n        printf("\u8BA1\u7B97\u7ED3\u679C\u603B\u548C: %d", Examples_CalculateSum(gDBConnectionHandle));\n    }\n    else\n    {\n        print("\u65E0\u6CD5\u8FDE\u63A5\u6570\u636E\u5E93 \\"example.db\\"");\n    }\n\n    return 1;\n}\n\npublic OnGameModeExit()\n{\n    // \u5173\u95ED\u6570\u636E\u5E93\u8FDE\u63A5\n    if (DB_Close(gDBConnectionHandle))\n    {\n        gDBConnectionHandle = DB:0; // \u91CD\u7F6E\u53E5\u67C4\n    }\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsxs)(n.p,{children:["\u4F7F\u7528\u975E\u6CD5\u7684\u7ED3\u679C\u96C6\u53E5\u67C4\u5C06\u5BFC\u81F4\u670D\u52A1\u5668\u5D29\u6E83\uFF01\u8BF7\u59CB\u7EC8\u901A\u8FC7",(0,l.jsx)(n.a,{href:"DB_ExecuteQuery",children:"DB_ExecuteQuery"}),"\u83B7\u53D6\u6709\u6548\u7684\u67E5\u8BE2\u7ED3\u679C"]})}),"\n",(0,l.jsx)(n.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"DB_Open",children:"DB_Open"}),": \u5EFA\u7ACB SQLite \u6570\u636E\u5E93\u8FDE\u63A5"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"DB_Close",children:"DB_Close"}),": \u5173\u95ED SQLite \u6570\u636E\u5E93\u8FDE\u63A5"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"DB_ExecuteQuery",children:"DB_ExecuteQuery"}),": \u6267\u884C SQL \u67E5\u8BE2\u8BED\u53E5"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"DB_FreeResultSet",children:"DB_FreeResultSet"}),": \u91CA\u653E\u67E5\u8BE2\u7ED3\u679C\u5185\u5B58"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"DB_GetRowCount",children:"DB_GetRowCount"}),": \u83B7\u53D6\u7ED3\u679C\u96C6\u884C\u6570"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"DB_SelectNextRow",children:"DB_SelectNextRow"}),": \u8DF3\u8F6C\u81F3\u4E0B\u4E00\u884C\u6570\u636E"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"DB_GetFieldCount",children:"DB_GetFieldCount"}),": \u83B7\u53D6\u5B57\u6BB5\u603B\u6570"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"DB_GetFieldName",children:"DB_GetFieldName"}),": \u901A\u8FC7\u7D22\u5F15\u83B7\u53D6\u5B57\u6BB5\u540D\u79F0"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"DB_GetFieldString",children:"DB_GetFieldString"}),": \u901A\u8FC7\u7D22\u5F15\u83B7\u53D6\u5B57\u7B26\u4E32\u6570\u636E"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"DB_GetFieldStringByName",children:"DB_GetFieldStringByName"}),": \u901A\u8FC7\u540D\u79F0\u83B7\u53D6\u5B57\u7B26\u4E32\u6570\u636E"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"DB_GetFieldIntByName",children:"DB_GetFieldIntByName"}),": \u901A\u8FC7\u540D\u79F0\u83B7\u53D6\u6574\u578B\u6570\u636E"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"DB_GetFieldFloat",children:"DB_GetFieldFloat"}),": \u901A\u8FC7\u7D22\u5F15\u83B7\u53D6\u6D6E\u70B9\u6570\u636E"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"DB_GetFieldFloatByName",children:"DB_GetFieldFloatByName"}),": \u901A\u8FC7\u540D\u79F0\u83B7\u53D6\u6D6E\u70B9\u6570\u636E"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"DB_GetMemHandle",children:"DB_GetMemHandle"}),": \u83B7\u53D6\u6570\u636E\u5E93\u5185\u5B58\u53E5\u67C4"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"DB_GetLegacyDBResult",children:"DB_GetLegacyDBResult"}),": \u83B7\u53D6\u4F20\u7EDF\u67E5\u8BE2\u7ED3\u679C\u53E5\u67C4"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"DB_GetDatabaseConnectionCount",children:"DB_GetDatabaseConnectionCount"}),": \u8C03\u8BD5\u7528-\u83B7\u53D6\u6570\u636E\u5E93\u8FDE\u63A5\u6570"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"DB_GetDatabaseResultSetCount",children:"DB_GetDatabaseResultSetCount"}),": \u8C03\u8BD5\u7528-\u83B7\u53D6\u7ED3\u679C\u96C6\u6570\u91CF"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return d}});var i=t(67294);let l={},r=i.createContext(l);function d(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);