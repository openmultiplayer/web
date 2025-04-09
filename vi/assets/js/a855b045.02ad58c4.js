"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["68021"],{38832:function(n,e,c){c.r(e),c.d(e,{default:()=>d,frontMatter:()=>l,metadata:()=>i,assets:()=>s,toc:()=>o,contentTitle:()=>r});var i=JSON.parse('{"id":"scripting/callbacks/OnPlayerEnterGangZone","title":"OnPlayerEnterGangZone","description":"Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi m\u1ED9t ng\u01B0\u1EDDi ch\u01A1i v\xe0o m\u1ED9t khu v\u1EF1c b\u0103ng nh\xf3m.","source":"@site/i18n/vi/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerEnterGangZone.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerEnterGangZone","permalink":"/vi/docs/scripting/callbacks/OnPlayerEnterGangZone","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerEnterGangZone.md","tags":[{"inline":true,"label":"player","permalink":"/vi/docs/tags/player"},{"inline":true,"label":"gangzone","permalink":"/vi/docs/tags/gangzone"}],"version":"current","frontMatter":{"title":"OnPlayerEnterGangZone","sidebar_label":"OnPlayerEnterGangZone","description":"Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi m\u1ED9t ng\u01B0\u1EDDi ch\u01A1i v\xe0o m\u1ED9t khu v\u1EF1c b\u0103ng nh\xf3m.","tags":["player","gangzone"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerEnterCheckpoint","permalink":"/vi/docs/scripting/callbacks/OnPlayerEnterCheckpoint"},"next":{"title":"OnPlayerEnterPlayerGangZone","permalink":"/vi/docs/scripting/callbacks/OnPlayerEnterPlayerGangZone"}}'),t=c("85893"),a=c("50065");let l={title:"OnPlayerEnterGangZone",sidebar_label:"OnPlayerEnterGangZone",description:"Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi m\u1ED9t ng\u01B0\u1EDDi ch\u01A1i v\xe0o m\u1ED9t khu v\u1EF1c b\u0103ng nh\xf3m.",tags:["player","gangzone"]},r=void 0,s={},o=[{value:"M\xf4 T\u1EA3",id:"m\xf4-t\u1EA3",level:2},{value:"Tr\u1EA3 V\u1EC1",id:"tr\u1EA3-v\u1EC1",level:2},{value:"V\xed D\u1EE5",id:"v\xed-d\u1EE5",level:2},{value:"C\xe1c Callbacks Li\xean Quan",id:"c\xe1c-callbacks-li\xean-quan",level:2},{value:"C\xe1c H\xe0m Li\xean Quan",id:"c\xe1c-h\xe0m-li\xean-quan",level:2}];function h(n){let e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...n.components},{VersionWarn:c}=e;return c||function(n,e){throw Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c,{name:"callback",version:"omp v1.1.0.2612"}),"\n",(0,t.jsx)(e.h2,{id:"m\xf4-t\u1EA3",children:"M\xf4 T\u1EA3"}),"\n",(0,t.jsx)(e.p,{children:"Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi m\u1ED9t ng\u01B0\u1EDDi ch\u01A1i v\xe0o m\u1ED9t khu v\u1EF1c b\u0103ng nh\xf3m."}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"T\xean"}),(0,t.jsx)(e.th,{children:"M\xf4 T\u1EA3"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"playerid"}),(0,t.jsx)(e.td,{children:"ID c\u1EE7a ng\u01B0\u1EDDi ch\u01A1i \u0111\xe3 v\xe0o khu v\u1EF1c b\u0103ng nh\xf3m."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"zoneid"}),(0,t.jsx)(e.td,{children:"ID c\u1EE7a khu v\u1EF1c b\u0103ng nh\xf3m m\xe0 ng\u01B0\u1EDDi ch\u01A1i v\xe0o."})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"tr\u1EA3-v\u1EC1",children:"Tr\u1EA3 V\u1EC1"}),"\n",(0,t.jsx)(e.p,{children:"Callback n\xe0y lu\xf4n \u0111\u01B0\u1EE3c g\u1ECDi \u0111\u1EA7u ti\xean trong gamemode."}),"\n",(0,t.jsx)(e.h2,{id:"v\xed-d\u1EE5",children:"V\xed D\u1EE5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:'public OnPlayerEnterGangZone(playerid, zoneid)\n{\n    new string[128];\n    format(string, sizeof(string), "B\u1EA1n \u0111\xe3 v\xe0o khu v\u1EF1c b\u0103ng nh\xf3m %i", zoneid);\n    SendClientMessage(playerid, 0xFFFFFFFF, string);\n    return 1;\n}\n'})}),"\n",(0,t.jsx)(e.h2,{id:"c\xe1c-callbacks-li\xean-quan",children:"C\xe1c Callbacks Li\xean Quan"}),"\n",(0,t.jsx)(e.p,{children:"C\xe1c callback sau \u0111\xe2y c\xf3 th\u1EC3 h\u1EEFu \xedch v\xec ch\xfang li\xean quan \u0111\u1EBFn callback n\xe0y theo m\u1ED9t c\xe1ch n\xe0o \u0111\xf3."}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"OnPlayerLeaveGangZone",children:"OnPlayerLeaveGangZone"}),": Callback n\xe0y \u0111\u01B0\u1EE3c g\u1ECDi khi m\u1ED9t ng\u01B0\u1EDDi ch\u01A1i r\u1EDDi kh\u1ECFi khu v\u1EF1c b\u0103ng nh\xf3m."]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"c\xe1c-h\xe0m-li\xean-quan",children:"C\xe1c H\xe0m Li\xean Quan"}),"\n",(0,t.jsx)(e.p,{children:"C\xe1c h\xe0m sau \u0111\xe2y c\xf3 th\u1EC3 h\u1EEFu \xedch v\xec ch\xfang li\xean quan \u0111\u1EBFn callback n\xe0y theo m\u1ED9t c\xe1ch n\xe0o \u0111\xf3."}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"../functions/GangZoneCreate",children:"GangZoneCreate"}),": T\u1EA1o m\u1ED9t khu v\u1EF1c b\u0103ng nh\xf3m (khu v\u1EF1c m\xe0u tr\xean radar)."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"../functions/GangZoneDestroy",children:"GangZoneDestroy"}),": H\u1EE7y b\u1ECF m\u1ED9t khu v\u1EF1c b\u0103ng nh\xf3m."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"../functions/UseGangZoneCheck",children:"UseGangZoneCheck"}),": K\xedch ho\u1EA1t callback khi m\u1ED9t ng\u01B0\u1EDDi ch\u01A1i v\xe0o khu v\u1EF1c n\xe0y."]}),"\n"]})]})}function d(n={}){let{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}},50065:function(n,e,c){c.d(e,{Z:function(){return r},a:function(){return l}});var i=c(67294);let t={},a=i.createContext(t);function l(n){let e=i.useContext(a);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),i.createElement(a.Provider,{value:e},n.children)}}}]);