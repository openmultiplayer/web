"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["50184"],{45642:function(e,r,t){t.r(r),t.d(r,{default:()=>p,frontMatter:()=>l,metadata:()=>i,assets:()=>c,toc:()=>o,contentTitle:()=>a});var i=JSON.parse('{"id":"scripting/functions/PlayCrimeReportForPlayer","title":"PlayCrimeReportForPlayer","description":"This function plays a crime report for a player - just like in single-player when CJ commits a crime.","source":"@site/docs/scripting/functions/PlayCrimeReportForPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/PlayCrimeReportForPlayer","permalink":"/docs/scripting/functions/PlayCrimeReportForPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/PlayCrimeReportForPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/docs/tags/player"}],"version":"current","frontMatter":{"title":"PlayCrimeReportForPlayer","sidebar_label":"PlayCrimeReportForPlayer","description":"This function plays a crime report for a player - just like in single-player when CJ commits a crime.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"PlayAudioStreamForPlayer","permalink":"/docs/scripting/functions/PlayAudioStreamForPlayer"},"next":{"title":"PlayerGangZoneDestroy","permalink":"/docs/scripting/functions/PlayerGangZoneDestroy"}}'),n=t("85893"),s=t("50065");let l={title:"PlayCrimeReportForPlayer",sidebar_label:"PlayCrimeReportForPlayer",description:"This function plays a crime report for a player - just like in single-player when CJ commits a crime.",tags:["player"]},a=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function d(e){let r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(r.p,{children:"This function plays a crime report for a player - just like in single-player when CJ commits a crime."}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"playerid"}),(0,n.jsx)(r.td,{children:"The ID of the player that will hear the crime report."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"suspectid"}),(0,n.jsx)(r.td,{children:"The ID of the suspect player whom will be described in the crime report."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"crime"}),(0,n.jsxs)(r.td,{children:["The ",(0,n.jsx)(r.a,{href:"../resources/crimelist",children:"crime ID"}),", which will be reported as a 10-code (i.e. 10-16 if 16 was passed as the crimeid)."]})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"true"})," - The function was executed successfully."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"false"})," - The function failed to execute. This means the player specified does not exist."]}),"\n",(0,n.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/suspect"))\n    {\n        PlayCrimeReportForPlayer(playerid, 0, 16);\n        SendClientMessage(playerid, 0xFFFFFFFF, "ID 0 committed a crime (10-16).");\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,n.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"PlayerPlaySound",children:"PlayerPlaySound"}),": Play a sound for a player."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"../resources/crimelist",children:"Crime IDs"})}),"\n"]})]})}function p(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},50065:function(e,r,t){t.d(r,{Z:function(){return a},a:function(){return l}});var i=t(67294);let n={},s=i.createContext(n);function l(e){let r=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);