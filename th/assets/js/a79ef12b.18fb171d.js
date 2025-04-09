"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["32427"],{44358:function(e,r,i){i.r(r),i.d(r,{default:()=>u,frontMatter:()=>s,metadata:()=>t,assets:()=>d,toc:()=>c,contentTitle:()=>l});var t=JSON.parse('{"id":"scripting/functions/LimitPlayerMarkerRadius","title":"LimitPlayerMarkerRadius","description":"Set the player marker radius.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/LimitPlayerMarkerRadius.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/LimitPlayerMarkerRadius","permalink":"/th/docs/scripting/functions/LimitPlayerMarkerRadius","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/LimitPlayerMarkerRadius.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"}],"version":"current","frontMatter":{"title":"LimitPlayerMarkerRadius","sidebar_label":"LimitPlayerMarkerRadius","description":"Set the player marker radius.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"LimitGlobalChatRadius","permalink":"/th/docs/scripting/functions/LimitGlobalChatRadius"},"next":{"title":"LinkVehicleToInterior","permalink":"/th/docs/scripting/functions/LinkVehicleToInterior"}}'),n=i("85893"),a=i("50065");let s={title:"LimitPlayerMarkerRadius",sidebar_label:"LimitPlayerMarkerRadius",description:"Set the player marker radius.",tags:["player"]},l=void 0,d={},c=[{value:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",level:2},{value:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",level:2},{value:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",level:2},{value:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",level:2}];function o(e){let r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",children:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22"}),"\n",(0,n.jsx)(r.p,{children:"Set the player marker radius."}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["Float",":marker_radius"]}),(0,n.jsx)(r.td,{children:"The radius that markers will show at"})]})})]}),"\n",(0,n.jsx)(r.h2,{id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",children:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19"}),"\n",(0,n.jsx)(r.p,{children:"This function does not return any specific values."}),"\n",(0,n.jsx)(r.h2,{id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",children:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    LimitPlayerMarkerRadius(100.0);\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",children:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/th/docs/scripting/functions/ShowPlayerMarkers",children:"ShowPlayerMarkers"}),": Decide if the server should show markers on the radar."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/th/docs/scripting/functions/SetPlayerMarkerForPlayer",children:"SetPlayerMarkerForPlayer"}),": Set a player's marker."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/th/docs/scripting/functions/LimitGlobalChatRadius",children:"LimitGlobalChatRadius"}),": Limit the distance between players needed to see their chat."]}),"\n"]})]})}function u(e={}){let{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},50065:function(e,r,i){i.d(r,{Z:function(){return l},a:function(){return s}});var t=i(67294);let n={},a=t.createContext(n);function s(e){let r=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);