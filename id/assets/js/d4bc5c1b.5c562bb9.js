"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["23571"],{32210:function(e,n,a){a.r(n),a.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>l,toc:()=>d,contentTitle:()=>o});var r=JSON.parse('{"id":"scripting/functions/ShowNameTags","title":"ShowNameTags","description":"Toggle the drawing of nametags, health bars and armor bars above players.","source":"@site/docs/scripting/functions/ShowNameTags.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/ShowNameTags","permalink":"/id/docs/scripting/functions/ShowNameTags","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/ShowNameTags.md","tags":[],"version":"current","frontMatter":{"title":"ShowNameTags","sidebar_label":"ShowNameTags","description":"Toggle the drawing of nametags, health bars and armor bars above players.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"ShowMenuForPlayer","permalink":"/id/docs/scripting/functions/ShowMenuForPlayer"},"next":{"title":"ShowObjectForPlayer","permalink":"/id/docs/scripting/functions/ShowObjectForPlayer"}}'),s=a("85893"),t=a("50065");let i={title:"ShowNameTags",sidebar_label:"ShowNameTags",description:"Toggle the drawing of nametags, health bars and armor bars above players.",tags:[]},o=void 0,l={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Toggle the drawing of nametags, health bars and armor bars above players."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["bool",":show"]}),(0,s.jsx)(n.td,{children:"'false' to disable, 'true' to enable (enabled by default)."})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:"This function does not return any specific values."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    // This will fully disable all player nametags\n    // (including health and armour bars)\n    ShowNameTags(false);\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["This function can only be used in ",(0,s.jsx)(n.a,{href:"OnGameModeInit",children:"OnGameModeInit"}),". For other times, see ",(0,s.jsx)(n.a,{href:"ShowPlayerNameTagForPlayer",children:"ShowPlayerNameTagForPlayer"}),"."]})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["You can also toggle player nametags via ",(0,s.jsx)(n.a,{href:"../../server/config.json",children:"config.json"})]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"use_nametags": false,\n'})})]}),"\n",(0,s.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DisableNameTagLOS",children:"DisableNameTagLOS"}),": Disable nametag Line-Of-Sight checking."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"ShowPlayerNameTagForPlayer",children:"ShowPlayerNameTagForPlayer"}),": Show or hide a nametag for a certain player."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"ShowPlayerMarkers",children:"ShowPlayerMarkers"}),": Decide if the server should show markers on the radar."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},50065:function(e,n,a){a.d(n,{Z:function(){return o},a:function(){return i}});var r=a(67294);let s={},t=r.createContext(s);function i(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);