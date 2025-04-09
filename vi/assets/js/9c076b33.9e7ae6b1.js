"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["55308"],{78261:function(e,n,t){t.r(n),t.d(n,{default:()=>o,frontMatter:()=>r,metadata:()=>c,assets:()=>a,toc:()=>d,contentTitle:()=>s});var c=JSON.parse('{"id":"scripting/callbacks/OnPlayerSelectObject","title":"OnPlayerSelectObject","description":"Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi ng\u01B0\u1EDDi ch\u01A1i ch\u1ECDn m\u1ED9t \u0111\u1ED1i t\u01B0\u1EE3ng sau khi d\xf9ng BeginObjectSelecting.","source":"@site/i18n/vi/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerSelectObject.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerSelectObject","permalink":"/vi/docs/scripting/callbacks/OnPlayerSelectObject","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerSelectObject.md","tags":[{"inline":true,"label":"player","permalink":"/vi/docs/tags/player"},{"inline":true,"label":"object","permalink":"/vi/docs/tags/object"}],"version":"current","frontMatter":{"title":"OnPlayerSelectObject","sidebar_label":"OnPlayerSelectObject","description":"Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi ng\u01B0\u1EDDi ch\u01A1i ch\u1ECDn m\u1ED9t \u0111\u1ED1i t\u01B0\u1EE3ng sau khi d\xf9ng BeginObjectSelecting.","tags":["player","object"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerRequestSpawn","permalink":"/vi/docs/scripting/callbacks/OnPlayerRequestSpawn"},"next":{"title":"OnPlayerSelectedMenuRow","permalink":"/vi/docs/scripting/callbacks/OnPlayerSelectedMenuRow"}}'),i=t("85893"),l=t("50065");let r={title:"OnPlayerSelectObject",sidebar_label:"OnPlayerSelectObject",description:"Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi ng\u01B0\u1EDDi ch\u01A1i ch\u1ECDn m\u1ED9t \u0111\u1ED1i t\u01B0\u1EE3ng sau khi d\xf9ng BeginObjectSelecting.",tags:["player","object"]},s=void 0,a={},d=[{value:"M\xf4 t\u1EA3",id:"m\xf4-t\u1EA3",level:2},{value:"Gi\xe1 tr\u1ECB tr\u1EA3 v\u1EC1",id:"gi\xe1-tr\u1ECB-tr\u1EA3-v\u1EC1",level:2},{value:"V\xed d\u1EE5",id:"v\xed-d\u1EE5",level:2},{value:"C\xe1c H\xe0m li\xean quan",id:"c\xe1c-h\xe0m-li\xean-quan",level:2},{value:"C\xe1c T\xe0i Nguy\xean li\xean quan",id:"c\xe1c-t\xe0i-nguy\xean-li\xean-quan",level:2}];function h(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"m\xf4-t\u1EA3",children:"M\xf4 t\u1EA3"}),"\n",(0,i.jsxs)(n.p,{children:["Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi ng\u01B0\u1EDDi ch\u01A1i ch\u1ECDn m\u1ED9t \u0111\u1ED1i t\u01B0\u1EE3ng sau khi ",(0,i.jsx)(n.a,{href:"../functions/BeginObjectSelecting",children:"BeginObjectSelecting"})," \u0111\xe3 \u0111\u01B0\u1EE3c s\u1EED d\u1EE5ng."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"T\xean"}),(0,i.jsx)(n.th,{children:"M\xf4 t\u1EA3"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"playerid"}),(0,i.jsx)(n.td,{children:"ID c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i \u0111\xe3 ch\u1ECDn m\u1ED9t \u0111\u1ED1i t\u01B0\u1EE3ng"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["SELECT_OBJECT",":type"]}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"../resources/selectobjecttypes",children:"Lo\u1EA1i"})," l\u1EF1a ch\u1ECDn"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objectid"}),(0,i.jsx)(n.td,{children:"ID c\u1EE7a \u0111\u1ED1i t\u01B0\u1EE3ng \u0111\xe3 ch\u1ECDn"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"modelid"}),(0,i.jsx)(n.td,{children:"M\u1EABu c\u1EE7a \u0111\u1ED1i t\u01B0\u1EE3ng \u0111\xe3 ch\u1ECDn"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["Float",":fX"]}),(0,i.jsx)(n.td,{children:"V\u1ECB tr\xed X c\u1EE7a \u0111\u1ED1i t\u01B0\u1EE3ng \u0111\xe3 ch\u1ECDn"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["Float",":fY"]}),(0,i.jsx)(n.td,{children:"V\u1ECB tr\xed Y c\u1EE7a \u0111\u1ED1i t\u01B0\u1EE3ng \u0111\xe3 ch\u1ECDn"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["Float",":fZ"]}),(0,i.jsx)(n.td,{children:"V\u1ECB tr\xed Z c\u1EE7a \u0111\u1ED1i t\u01B0\u1EE3ng \u0111\xe3 ch\u1ECDn"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"gi\xe1-tr\u1ECB-tr\u1EA3-v\u1EC1",children:"Gi\xe1 tr\u1ECB tr\u1EA3 v\u1EC1"}),"\n",(0,i.jsx)(n.p,{children:"1 - S\u1EBD ng\u0103n c\xe1c script kh\xe1c nh\u1EADn callback n\xe0y."}),"\n",(0,i.jsx)(n.p,{children:"0 - Cho bi\u1EBFt callback n\xe0y s\u1EBD \u0111\u01B0\u1EE3c truy\u1EC1n cho script ti\u1EBFp theo."}),"\n",(0,i.jsx)(n.p,{children:"N\xf3 lu\xf4n \u0111\u01B0\u1EE3c g\u1ECDi \u0111\u1EA7u ti\xean trong filterscripts."}),"\n",(0,i.jsx)(n.h2,{id:"v\xed-d\u1EE5",children:"V\xed d\u1EE5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'public OnPlayerSelectObject(playerid, SELECT_OBJECT:type, objectid, modelid, Float:fX, Float:fY, Float:fZ)\n{\n    printf("Player %d selected object %d", playerid, objectid);\n\n    if (type == SELECT_OBJECT_GLOBAL_OBJECT)\n    {\n        BeginObjectEditing(playerid, objectid);\n    }\n    else\n    {\n        BeginPlayerObjectEditing(playerid, objectid);\n    }\n\n    SendClientMessage(playerid, 0xFFFFFFFF, "You now are able to edit your object!");\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"c\xe1c-h\xe0m-li\xean-quan",children:"C\xe1c H\xe0m li\xean quan"}),"\n",(0,i.jsx)(n.p,{children:"C\xe1c h\xe0m sau c\xf3 th\u1EC3 h\u1EEFu \xedch, v\xec ch\xfang li\xean quan \u0111\u1EBFn callback n\xe0y theo m\u1ED9t c\xe1ch n\xe0o \u0111\xf3."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../functions/BeginObjectSelecting",children:"BeginObjectSelecting"}),": Ch\u1ECDn m\u1ED9t \u0111\u1ED1i t\u01B0\u1EE3ng."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"c\xe1c-t\xe0i-nguy\xean-li\xean-quan",children:"C\xe1c T\xe0i Nguy\xean li\xean quan"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"../resources/selectobjecttypes",children:"Select Object Types"})}),"\n"]})]})}function o(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return r}});var c=t(67294);let i={},l=c.createContext(i);function r(e){let n=c.useContext(l);return c.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),c.createElement(l.Provider,{value:n},e.children)}}}]);