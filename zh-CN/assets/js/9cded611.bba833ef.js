"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["75322"],{63147:function(e,n,d){d.r(n),d.d(n,{default:()=>a,frontMatter:()=>s,metadata:()=>i,assets:()=>c,toc:()=>_,contentTitle:()=>r});var i=JSON.parse('{"id":"scripting/functions/db_get_field_assoc_int","title":"db_get_field_assoc_int","description":"\u901A\u8FC7\u5B57\u6BB5\u540D\u79F0\u83B7\u53D6\u5F53\u524D\u7ED3\u679C\u884C\u7684\u6574\u6570\u503C\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/db_get_field_assoc_int.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/db_get_field_assoc_int","permalink":"/zh-CN/docs/scripting/functions/db_get_field_assoc_int","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/db_get_field_assoc_int.md","tags":[],"version":"current","frontMatter":{"title":"db_get_field_assoc_int","sidebar_label":"db_get_field_assoc_int","description":"\u901A\u8FC7\u5B57\u6BB5\u540D\u79F0\u83B7\u53D6\u5F53\u524D\u7ED3\u679C\u884C\u7684\u6574\u6570\u503C\u3002","keywords":["sqlite"]},"sidebar":"docsSidebar","previous":{"title":"db_get_field_assoc_float","permalink":"/zh-CN/docs/scripting/functions/db_get_field_assoc_float"},"next":{"title":"db_get_field_float","permalink":"/zh-CN/docs/scripting/functions/db_get_field_float"}}'),t=d("85893"),l=d("50065");let s={title:"db_get_field_assoc_int",sidebar_label:"db_get_field_assoc_int",description:"\u901A\u8FC7\u5B57\u6BB5\u540D\u79F0\u83B7\u53D6\u5F53\u524D\u7ED3\u679C\u884C\u7684\u6574\u6570\u503C\u3002",keywords:["sqlite"]},r=void 0,c={},_=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function o(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{LowercaseNoteZH_CN:d}=n;return d||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNoteZH_CN",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d,{}),"\n",(0,t.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(n.p,{children:"\u901A\u8FC7\u5B57\u6BB5\u540D\u79F0\u4ECE\u5F53\u524D\u7ED3\u679C\u884C\u4E2D\u83B7\u53D6\u6574\u6570\u503C\u3002"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u53C2\u6570\u540D"}),(0,t.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["DBResult",":dbresult"]}),(0,t.jsxs)(n.td,{children:["\u67E5\u8BE2\u7ED3\u679C\u53E5\u67C4\uFF08\u7531",(0,t.jsx)(n.a,{href:"db_query",children:"db_query"}),"\u8FD4\u56DE\uFF09"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"field[]"}),(0,t.jsx)(n.td,{children:"\u76EE\u6807\u5B57\u6BB5\u540D\u79F0"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,t.jsx)(n.p,{children:"\u4EE5\u6574\u6570\u5F62\u5F0F\u8FD4\u56DE\u83B7\u53D6\u7684\u5B57\u6BB5\u503C\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'// \u793A\u4F8B\u6A21\u5757\n\n// ...\n\nExamples_CalculateSum(DB:dbConnectionHandle)\n{\n    // \u8FD4\u56DE\u503C\u53D8\u91CF\n    new ret;\n\n    // \u6267\u884C\u6570\u636E\u5E93\u67E5\u8BE2\n    new DBResult:db_result_set = db_query(dbConnectionHandle, "SELECT `value` FROM `examples`");\n\n    if (db_result_set)\n    {\n        // \u904D\u5386\u7ED3\u679C\u96C6\n        do\n        {\n            // \u5C06\'value\'\u5B57\u6BB5\u7684\u6574\u6570\u503C\u7D2F\u52A0\u5230\u8FD4\u56DE\u503C\n            ret += db_get_field_assoc_int(db_result_set, "value");\n        }\n        while (db_next_row(db_result_set));  // \u8DF3\u8F6C\u81F3\u4E0B\u4E00\u884C\n\n        // \u91CA\u653E\u7ED3\u679C\u96C6\n        db_free_result(db_result_set);\n    }\n\n    return ret;\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'// \u4E3B\u6E38\u620F\u6A21\u5F0F\u6587\u4EF6\n\n// ...\n\n#include <examples>\n\nstatic DB:gDBConnectionHandle;\n\n// ...\n\npublic OnGameModeInit()\n{\n    // ...\n\n    // \u5EFA\u7ACB\u6570\u636E\u5E93\u8FDE\u63A5\n    gDBConnectionHandle = db_open("example.db");\n\n    if (gDBConnectionHandle)\n    {\n        print("\u6210\u529F\u8FDE\u63A5\u6570\u636E\u5E93 \\"example.db\\"");\n        printf("\u8BA1\u7B97\u7ED3\u679C\u603B\u548C: %d", Examples_CalculateSum(gDBConnectionHandle));\n    }\n    else\n    {\n        print("\u65E0\u6CD5\u8FDE\u63A5\u6570\u636E\u5E93 \\"example.db\\"");\n    }\n\n    return 1;\n}\n\npublic OnGameModeExit()\n{\n    // \u5173\u95ED\u6570\u636E\u5E93\u8FDE\u63A5\n    if (db_close(gDBConnectionHandle))\n    {\n        gDBConnectionHandle = DB:0;  // \u91CD\u7F6E\u53E5\u67C4\n    }\n    return 1;\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["\u4F7F\u7528\u975E\u6CD5\u7684\u7ED3\u679C\u96C6\u53E5\u67C4\u5C06\u5BFC\u81F4\u670D\u52A1\u5668\u5D29\u6E83\uFF01\u8BF7\u59CB\u7EC8\u901A\u8FC7",(0,t.jsx)(n.a,{href:"db_query",children:"db_query"}),"\u83B7\u53D6\u6709\u6548\u7684\u67E5\u8BE2\u7ED3\u679C"]})}),"\n",(0,t.jsx)(n.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"db_open",children:"db_open"}),": \u5EFA\u7ACB SQLite \u6570\u636E\u5E93\u8FDE\u63A5"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"db_close",children:"db_close"}),": \u5173\u95ED SQLite \u6570\u636E\u5E93\u8FDE\u63A5"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"db_query",children:"db_query"}),": \u6267\u884C SQL \u67E5\u8BE2\u8BED\u53E5"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"db_free_result",children:"db_free_result"}),": \u91CA\u653E\u67E5\u8BE2\u7ED3\u679C\u5185\u5B58"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"db_num_rows",children:"db_num_rows"}),": \u83B7\u53D6\u7ED3\u679C\u96C6\u884C\u6570"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"db_next_row",children:"db_next_row"}),": \u8DF3\u8F6C\u81F3\u4E0B\u4E00\u884C\u6570\u636E"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"db_num_fields",children:"db_num_fields"}),": \u83B7\u53D6\u7ED3\u679C\u96C6\u5B57\u6BB5\u6570\u91CF"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"db_field_name",children:"db_field_name"}),": \u901A\u8FC7\u7D22\u5F15\u83B7\u53D6\u5B57\u6BB5\u540D\u79F0"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"db_get_field",children:"db_get_field"}),": \u901A\u8FC7\u5B57\u6BB5\u7D22\u5F15\u83B7\u53D6\u5F53\u524D\u884C\u6570\u636E"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"db_get_field_assoc",children:"db_get_field_assoc"}),": \u901A\u8FC7\u5B57\u6BB5\u540D\u79F0\u83B7\u53D6\u5F53\u524D\u884C\u6570\u636E"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"db_get_field_int",children:"db_get_field_int"}),": \u901A\u8FC7\u5B57\u6BB5\u7D22\u5F15\u83B7\u53D6\u6574\u578B\u6570\u636E"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"db_get_field_float",children:"db_get_field_float"}),": \u901A\u8FC7\u5B57\u6BB5\u7D22\u5F15\u83B7\u53D6\u6D6E\u70B9\u6570\u636E"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"db_get_field_assoc_float",children:"db_get_field_assoc_float"}),": \u901A\u8FC7\u5B57\u6BB5\u540D\u79F0\u83B7\u53D6\u6D6E\u70B9\u6570\u636E"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"db_get_mem_handle",children:"db_get_mem_handle"}),": \u83B7\u53D6\u6570\u636E\u5E93\u5185\u5B58\u53E5\u67C4"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"db_get_result_mem_handle",children:"db_get_result_mem_handle"}),": \u83B7\u53D6\u67E5\u8BE2\u7ED3\u679C\u5185\u5B58\u53E5\u67C4"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"db_debug_openfiles",children:"db_debug_openfiles"}),": \u8C03\u8BD5\u6570\u636E\u5E93\u8FDE\u63A5\u6570"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"db_debug_openresults",children:"db_debug_openresults"}),": \u8C03\u8BD5\u67E5\u8BE2\u7ED3\u679C\u6570"]}),"\n"]})]})}function a(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},50065:function(e,n,d){d.d(n,{Z:function(){return r},a:function(){return s}});var i=d(67294);let t={},l=i.createContext(t);function s(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);