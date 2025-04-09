"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["85235"],{45251:function(n,e,a){a.r(e),a.d(e,{default:()=>d,frontMatter:()=>r,metadata:()=>c,assets:()=>s,toc:()=>o,contentTitle:()=>t});var c=JSON.parse('{"id":"scripting/callbacks/OnPlayerEnterPlayerGangZone","title":"OnPlayerEnterPlayerGangZone","description":"Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi m\u1ED9t ng\u01B0\u1EDDi ch\u01A1i v\xe0o khu v\u1EF1c b\u0103ng nh\xf3m c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i.","source":"@site/i18n/vi/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerEnterPlayerGangZone.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerEnterPlayerGangZone","permalink":"/vi/docs/scripting/callbacks/OnPlayerEnterPlayerGangZone","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerEnterPlayerGangZone.md","tags":[{"inline":true,"label":"player","permalink":"/vi/docs/tags/player"},{"inline":true,"label":"gangzone","permalink":"/vi/docs/tags/gangzone"}],"version":"current","frontMatter":{"title":"OnPlayerEnterPlayerGangZone","sidebar_label":"OnPlayerEnterPlayerGangZone","description":"Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi m\u1ED9t ng\u01B0\u1EDDi ch\u01A1i v\xe0o khu v\u1EF1c b\u0103ng nh\xf3m c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i.","tags":["player","gangzone"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerEnterGangZone","permalink":"/vi/docs/scripting/callbacks/OnPlayerEnterGangZone"},"next":{"title":"OnPlayerEnterRaceCheckpoint","permalink":"/vi/docs/scripting/callbacks/OnPlayerEnterRaceCheckpoint"}}'),i=a("85893"),l=a("50065");let r={title:"OnPlayerEnterPlayerGangZone",sidebar_label:"OnPlayerEnterPlayerGangZone",description:"Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi m\u1ED9t ng\u01B0\u1EDDi ch\u01A1i v\xe0o khu v\u1EF1c b\u0103ng nh\xf3m c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i.",tags:["player","gangzone"]},t=void 0,s={},o=[{value:"M\xf4 T\u1EA3",id:"m\xf4-t\u1EA3",level:2},{value:"Tr\u1EA3 V\u1EC1",id:"tr\u1EA3-v\u1EC1",level:2},{value:"V\xed D\u1EE5",id:"v\xed-d\u1EE5",level:2},{value:"C\xe1c Callbacks Li\xean Quan",id:"c\xe1c-callbacks-li\xean-quan",level:2},{value:"C\xe1c H\xe0m Li\xean Quan",id:"c\xe1c-h\xe0m-li\xean-quan",level:2}];function h(n){let e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...n.components},{VersionWarn:a}=e;return a||function(n,e){throw Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a,{name:"callback",version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(e.h2,{id:"m\xf4-t\u1EA3",children:"M\xf4 T\u1EA3"}),"\n",(0,i.jsx)(e.p,{children:"Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi m\u1ED9t ng\u01B0\u1EDDi ch\u01A1i v\xe0o khu v\u1EF1c b\u0103ng nh\xf3m c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i."}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"T\xean"}),(0,i.jsx)(e.th,{children:"M\xf4 T\u1EA3"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"playerid"}),(0,i.jsx)(e.td,{children:"ID c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i \u0111\xe3 v\xe0o khu v\u1EF1c b\u0103ng nh\xf3m c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i."})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"zoneid"}),(0,i.jsx)(e.td,{children:"ID c\u1EE7a khu v\u1EF1c b\u0103ng nh\xf3m c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i m\xe0 ng\u01B0\u1EDDi ch\u01A1i v\xe0o."})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"tr\u1EA3-v\u1EC1",children:"Tr\u1EA3 V\u1EC1"}),"\n",(0,i.jsx)(e.p,{children:"Callback n\xe0y lu\xf4n \u0111\u01B0\u1EE3c g\u1ECDi \u0111\u1EA7u ti\xean trong gamemode."}),"\n",(0,i.jsx)(e.h2,{id:"v\xed-d\u1EE5",children:"V\xed D\u1EE5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-c",children:'public OnPlayerEnterPlayerGangZone(playerid, zoneid)\n{\n    new string[128];\n    format(string, sizeof(string), "B\u1EA1n \u0111\xe3 v\xe0o khu v\u1EF1c b\u0103ng nh\xf3m c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i %i", zoneid);\n    SendClientMessage(playerid, 0xFFFFFFFF, string);\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(e.h2,{id:"c\xe1c-callbacks-li\xean-quan",children:"C\xe1c Callbacks Li\xean Quan"}),"\n",(0,i.jsx)(e.p,{children:"C\xe1c callback sau \u0111\xe2y c\xf3 th\u1EC3 h\u1EEFu \xedch v\xec ch\xfang li\xean quan \u0111\u1EBFn callback n\xe0y theo m\u1ED9t c\xe1ch n\xe0o \u0111\xf3."}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"OnPlayerLeavePlayerGangZone",children:"OnPlayerLeavePlayerGangZone"}),": Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi m\u1ED9t ng\u01B0\u1EDDi ch\u01A1i r\u1EDDi kh\u1ECFi khu v\u1EF1c b\u0103ng nh\xf3m c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i."]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"c\xe1c-h\xe0m-li\xean-quan",children:"C\xe1c H\xe0m Li\xean Quan"}),"\n",(0,i.jsx)(e.p,{children:"C\xe1c h\xe0m sau \u0111\xe2y c\xf3 th\u1EC3 h\u1EEFu \xedch v\xec ch\xfang li\xean quan \u0111\u1EBFn callback n\xe0y theo m\u1ED9t c\xe1ch n\xe0o \u0111\xf3."}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"../functions/CreatePlayerGangZone",children:"CreatePlayerGangZone"}),": T\u1EA1o khu v\u1EF1c b\u0103ng nh\xf3m c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"../functions/PlayerGangZoneDestroy",children:"PlayerGangZoneDestroy"}),": H\u1EE7y b\u1ECF khu v\u1EF1c b\u0103ng nh\xf3m c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"../functions/UsePlayerGangZoneCheck",children:"UsePlayerGangZoneCheck"}),": K\xedch ho\u1EA1t callback khi m\u1ED9t ng\u01B0\u1EDDi ch\u01A1i v\xe0o khu v\u1EF1c n\xe0y."]}),"\n"]})]})}function d(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},50065:function(n,e,a){a.d(e,{Z:function(){return t},a:function(){return r}});var c=a(67294);let i={},l=c.createContext(i);function r(n){let e=c.useContext(l);return c.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),c.createElement(l.Provider,{value:e},n.children)}}}]);