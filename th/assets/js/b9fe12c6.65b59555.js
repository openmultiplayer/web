"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["56624"],{76072:function(e,n,a){a.r(n),a.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>t,assets:()=>l,toc:()=>d,contentTitle:()=>o});var t=JSON.parse('{"id":"scripting/functions/ShowNameTags","title":"ShowNameTags","description":"Toggle the drawing of nametags, health bars and armor bars above players.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/ShowNameTags.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/ShowNameTags","permalink":"/th/docs/scripting/functions/ShowNameTags","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/ShowNameTags.md","tags":[],"version":"current","frontMatter":{"title":"ShowNameTags","sidebar_label":"ShowNameTags","description":"Toggle the drawing of nametags, health bars and armor bars above players.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"ShowMenuForPlayer","permalink":"/th/docs/scripting/functions/ShowMenuForPlayer"},"next":{"title":"ShowObjectForPlayer","permalink":"/th/docs/scripting/functions/ShowObjectForPlayer"}}'),r=a("85893"),i=a("50065");let s={title:"ShowNameTags",sidebar_label:"ShowNameTags",description:"Toggle the drawing of nametags, health bars and armor bars above players.",tags:[]},o=void 0,l={},d=[{value:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",level:2},{value:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",level:2},{value:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",level:2},{value:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",level:2},{value:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",level:2}];function c(e){let n={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",children:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22"}),"\n",(0,r.jsx)(n.p,{children:"Toggle the drawing of nametags, health bars and armor bars above players."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"enabled"}),(0,r.jsx)(n.td,{children:"0 to disable, 1 to enable (enabled by default)."})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",children:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19"}),"\n",(0,r.jsx)(n.p,{children:"This function does not return any specific values."}),"\n",(0,r.jsx)(n.h2,{id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",children:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    // This will fully disable all player nametags\n    // (including health and armour bars)\n    ShowNameTags(0);\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",children:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"This function can only be used in OnGameModeInit. For other times, see ShowPlayerNameTagForPlayer."})}),"\n",(0,r.jsx)(n.h2,{id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",children:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"DisableNameTagLOS: Disable nametag Line-Of-Sight checking."}),"\n",(0,r.jsx)(n.li,{children:"ShowPlayerNameTagForPlayer: Show or hide a nametag for a certain player."}),"\n",(0,r.jsx)(n.li,{children:"ShowPlayerMarkers: Decide if the server should show markers on the radar."}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,n,a){a.d(n,{Z:function(){return o},a:function(){return s}});var t=a(67294);let r={},i=t.createContext(r);function s(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);