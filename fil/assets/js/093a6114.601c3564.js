"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["18921"],{32321:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>r,metadata:()=>a,assets:()=>c,toc:()=>d,contentTitle:()=>s});var a=JSON.parse('{"id":"scripting/functions/CancelSelectTextDraw","title":"CancelSelectTextDraw","description":"Kanselahin ang pagpili ng textdraw gamit ang mouse.","source":"@site/i18n/fil/docusaurus-plugin-content-docs/current/scripting/functions/CancelSelectTextDraw.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/CancelSelectTextDraw","permalink":"/fil/docs/scripting/functions/CancelSelectTextDraw","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/CancelSelectTextDraw.md","tags":[{"inline":true,"label":"textdraw","permalink":"/fil/docs/tags/textdraw"}],"version":"current","frontMatter":{"title":"CancelSelectTextDraw","sidebar_label":"CancelSelectTextDraw","description":"Kanselahin ang pagpili ng textdraw gamit ang mouse.","tags":["textdraw"]},"sidebar":"docsSidebar","previous":{"title":"CancelEdit","permalink":"/fil/docs/scripting/functions/CancelEdit"},"next":{"title":"ChangeVehicleColor","permalink":"/fil/docs/scripting/functions/ChangeVehicleColor"}}'),i=t("85893"),l=t("50065");let r={title:"CancelSelectTextDraw",sidebar_label:"CancelSelectTextDraw",description:"Kanselahin ang pagpili ng textdraw gamit ang mouse.",tags:["textdraw"]},s=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Kanselahin ang pagpili ng textdraw gamit ang mouse."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"playerid"}),(0,i.jsx)(n.td,{children:"Ang id ng player na dapat ma-disable ang textdraw selection"})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:"Ang function na ito ay hindi nagbabalik ng anumang value."}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/cancelselect", true))\n    {\n        CancelSelectTextDraw(playerid);\n        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: TextDraw selection disabled!");\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"*Ang function na ito ay tumatawag sa OnPlayerClickTextDraw na may INVALID_TEXT_DRAW (65535). Ang paggamit ng function na ito sa loob ng OnPlayerClickTextDraw nang hindi nahuhuli ang kasong ito ay magiging sanhi ng mga client na pumunta sa isang walang katapusang loop."})}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"SelectTextDraw",children:"SelectTextDraw"}),": Pinapagana ang mouse, para makapili ang player ng textdraw"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"TextDrawSetSelectable",children:"TextDrawSetSelectable"}),": Itinatakda kung ang isang textdraw ay maaaring piliin sa pamamagitan ng SelectTextDraw"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../callbacks/OnPlayerClickTextDraw",children:"OnPlayerClickTextDraw"}),": Tinatawag kapag nag-click ang isang player sa isang textdraw."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return r}});var a=t(67294);let i={},l=a.createContext(i);function r(e){let n=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);