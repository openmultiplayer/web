"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["51123"],{67024:function(e,n,i){i.r(n),i.d(n,{default:()=>a,frontMatter:()=>l,metadata:()=>d,assets:()=>c,toc:()=>o,contentTitle:()=>s});var d=JSON.parse('{"id":"scripting/functions/db_free_result","title":"db_free_result","description":"\u91CA\u653E\u7531db_query\u5206\u914D\u7684\u67E5\u8BE2\u7ED3\u679C\u5185\u5B58\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/db_free_result.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/db_free_result","permalink":"/zh-CN/docs/scripting/functions/db_free_result","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/db_free_result.md","tags":[],"version":"current","frontMatter":{"title":"db_free_result","sidebar_label":"db_free_result","description":"\u91CA\u653E\u7531db_query\u5206\u914D\u7684\u67E5\u8BE2\u7ED3\u679C\u5185\u5B58\u3002","keywords":["sqlite"]},"sidebar":"docsSidebar","previous":{"title":"db_field_name","permalink":"/zh-CN/docs/scripting/functions/db_field_name"},"next":{"title":"db_get_field","permalink":"/zh-CN/docs/scripting/functions/db_get_field"}}'),r=i("85893"),t=i("50065");let l={title:"db_free_result",sidebar_label:"db_free_result",description:"\u91CA\u653E\u7531db_query\u5206\u914D\u7684\u67E5\u8BE2\u7ED3\u679C\u5185\u5B58\u3002",keywords:["sqlite"]},s=void 0,c={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2}];function _(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components},{LowercaseNoteZH_CN:i}=n;return i||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNoteZH_CN",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i,{}),"\n",(0,r.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,r.jsxs)(n.p,{children:["\u91CA\u653E\u7531",(0,r.jsx)(n.a,{href:"db_query",children:"db_query"}),"\u5206\u914D\u7684\u67E5\u8BE2\u7ED3\u679C\u5185\u5B58\u3002"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u53C2\u6570\u540D"}),(0,r.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["DBResult",":dbresult"]}),(0,r.jsxs)(n.td,{children:["\u8981\u91CA\u653E\u7684\u67E5\u8BE2\u7ED3\u679C\u53E5\u67C4\uFF08\u7531",(0,r.jsx)(n.a,{href:"db_query",children:"db_query"}),"\u5206\u914D\uFF09"]})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"1"})," - \u7ED3\u679C\u96C6\u53E5\u67C4\u6709\u6548\u4E14\u64CD\u4F5C\u6210\u529F"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"0"})," - \u7ED3\u679C\u96C6\u53E5\u67C4\u65E0\u6548\u6216\u64CD\u4F5C\u5931\u8D25"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'// \u5B9E\u4F53\u5B58\u50A8\u6A21\u5757\n\nEntityStorage_SpawnAll(DB:connectionHandle)\n{\n    // \u4ECE"entities"\u8868\u4E2D\u9009\u62E9\u6240\u6709\u6761\u76EE\n    new DBResult:db_result_set = db_query(connectionHandle, "SELECT * FROM `entities`");\n\n    // \u9A8C\u8BC1\u7ED3\u679C\u96C6\u6709\u6548\u6027\n    if (db_result_set)\n    {\n        // \u6267\u884C\u76F8\u5173\u64CD\u4F5C...\n\n        // \u91CA\u653E\u7ED3\u679C\u96C6\u5185\u5B58\n        db_free_result(db_result_set);\n    }\n}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'// \u6E38\u620F\u6A21\u5F0F\u4E3B\u6587\u4EF6\n\n#include <entity_storage>\n\nstatic DB:gDBConnectionHandle;\n\n// ...\n\npublic OnGameModeInit()\n{\n    // ...\n\n    // \u5EFA\u7ACB\u6570\u636E\u5E93\u8FDE\u63A5\n    gDBConnectionHandle = db_open("example.db");\n\n    if (gDBConnectionHandle)\n    {\n        print("\u6210\u529F\u8FDE\u63A5\u6570\u636E\u5E93 \\"example.db\\"");\n        EntityStorage_SpawnAll(gDBConnectionHandle);\n    }\n    else\n    {\n        print("\u65E0\u6CD5\u8FDE\u63A5\u6570\u636E\u5E93 \\"example.db\\"");\n    }\n\n    return 1;\n}\n\npublic OnGameModeExit()\n{\n    // \u5173\u95ED\u6570\u636E\u5E93\u8FDE\u63A5\n    if (db_close(gDBConnectionHandle))\n    {\n        gDBConnectionHandle = DB:0; // \u91CD\u7F6E\u53E5\u67C4\n    }\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["\u4F7F\u7528\u975E\u6CD5\u7684\u7ED3\u679C\u96C6\u53E5\u67C4\u5C06\u5BFC\u81F4\u670D\u52A1\u5668\u5D29\u6E83\uFF01\u8BF7\u59CB\u7EC8\u901A\u8FC7",(0,r.jsx)(n.a,{href:"db_query",children:"db_query"}),"\u83B7\u53D6\u6709\u6548\u7684\u67E5\u8BE2\u7ED3\u679C"]})}),"\n",(0,r.jsx)(n.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"db_open",children:"db_open"}),": \u5EFA\u7ACB SQLite \u6570\u636E\u5E93\u8FDE\u63A5"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"db_close",children:"db_close"}),": \u5173\u95ED SQLite \u6570\u636E\u5E93\u8FDE\u63A5"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"db_query",children:"db_query"}),": \u6267\u884C SQL \u67E5\u8BE2\u8BED\u53E5"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"db_num_rows",children:"db_num_rows"}),": \u83B7\u53D6\u7ED3\u679C\u96C6\u884C\u6570"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"db_next_row",children:"db_next_row"}),": \u8DF3\u8F6C\u81F3\u4E0B\u4E00\u884C\u6570\u636E"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"db_num_fields",children:"db_num_fields"}),": \u83B7\u53D6\u7ED3\u679C\u96C6\u5B57\u6BB5\u6570\u91CF"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"db_field_name",children:"db_field_name"}),": \u901A\u8FC7\u7D22\u5F15\u83B7\u53D6\u5B57\u6BB5\u540D\u79F0"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"db_get_field",children:"db_get_field"}),": \u901A\u8FC7\u5B57\u6BB5\u7D22\u5F15\u83B7\u53D6\u5F53\u524D\u884C\u6570\u636E"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"db_get_field_assoc",children:"db_get_field_assoc"}),": \u901A\u8FC7\u5B57\u6BB5\u540D\u79F0\u83B7\u53D6\u5F53\u524D\u884C\u6570\u636E"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"db_get_field_int",children:"db_get_field_int"}),": \u901A\u8FC7\u5B57\u6BB5\u7D22\u5F15\u83B7\u53D6\u6574\u578B\u6570\u636E"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"db_get_field_assoc_int",children:"db_get_field_assoc_int"}),": \u901A\u8FC7\u5B57\u6BB5\u540D\u79F0\u83B7\u53D6\u6574\u578B\u6570\u636E"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"db_get_field_float",children:"db_get_field_float"}),": \u901A\u8FC7\u5B57\u6BB5\u7D22\u5F15\u83B7\u53D6\u6D6E\u70B9\u6570\u636E"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"db_get_field_assoc_float",children:"db_get_field_assoc_float"}),": \u901A\u8FC7\u5B57\u6BB5\u540D\u79F0\u83B7\u53D6\u6D6E\u70B9\u6570\u636E"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"db_get_mem_handle",children:"db_get_mem_handle"}),": \u83B7\u53D6\u6570\u636E\u5E93\u5185\u5B58\u53E5\u67C4"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"db_get_result_mem_handle",children:"db_get_result_mem_handle"}),": \u83B7\u53D6\u67E5\u8BE2\u7ED3\u679C\u5185\u5B58\u53E5\u67C4"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"db_debug_openfiles",children:"db_debug_openfiles"}),": \u8C03\u8BD5\u6570\u636E\u5E93\u8FDE\u63A5\u6570"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"db_debug_openresults",children:"db_debug_openresults"}),": \u8C03\u8BD5\u67E5\u8BE2\u7ED3\u679C\u6570"]}),"\n"]})]})}function a(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(_,{...e})}):_(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return s},a:function(){return l}});var d=i(67294);let r={},t=d.createContext(r);function l(e){let n=d.useContext(t);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),d.createElement(t.Provider,{value:n},e.children)}}}]);