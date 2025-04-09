"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["32487"],{45452:function(e,l,n){n.r(l),n.d(l,{default:()=>h,frontMatter:()=>s,metadata:()=>i,assets:()=>c,toc:()=>a,contentTitle:()=>d});var i=JSON.parse('{"id":"scripting/functions/SetPlayerSkillLevel","title":"SetPlayerSkillLevel","description":"\u8BBE\u7F6E\u73A9\u5BB6\u7279\u5B9A\u6B66\u5668\u7C7B\u578B\u7684\u6280\u80FD\u7B49\u7EA7\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/SetPlayerSkillLevel.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerSkillLevel","permalink":"/zh-CN/docs/scripting/functions/SetPlayerSkillLevel","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetPlayerSkillLevel.md","tags":[{"inline":true,"label":"\u73A9\u5BB6","permalink":"/zh-CN/docs/tags/\u73A9\u5BB6"}],"version":"current","frontMatter":{"title":"SetPlayerSkillLevel","sidebar_label":"SetPlayerSkillLevel","description":"\u8BBE\u7F6E\u73A9\u5BB6\u7279\u5B9A\u6B66\u5668\u7C7B\u578B\u7684\u6280\u80FD\u7B49\u7EA7\u3002","tags":["\u73A9\u5BB6"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerShopName","permalink":"/zh-CN/docs/scripting/functions/SetPlayerShopName"},"next":{"title":"SetPlayerSkin","permalink":"/zh-CN/docs/scripting/functions/SetPlayerSkin"}}'),t=n("85893"),r=n("50065");let s={title:"SetPlayerSkillLevel",sidebar_label:"SetPlayerSkillLevel",description:"\u8BBE\u7F6E\u73A9\u5BB6\u7279\u5B9A\u6B66\u5668\u7C7B\u578B\u7684\u6280\u80FD\u7B49\u7EA7\u3002",tags:["\u73A9\u5BB6"]},d=void 0,c={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u91CD\u8981\u8BF4\u660E",id:"\u91CD\u8981\u8BF4\u660E",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2},{value:"\u76F8\u5173\u4FE1\u606F",id:"\u76F8\u5173\u4FE1\u606F",level:2}];function o(e){let l={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(l.p,{children:"\u8BBE\u7F6E\u73A9\u5BB6\u7279\u5B9A\u6B66\u5668\u7C7B\u578B\u7684\u6280\u80FD\u7B49\u7EA7\u3002"}),"\n",(0,t.jsxs)(l.table,{children:[(0,t.jsx)(l.thead,{children:(0,t.jsxs)(l.tr,{children:[(0,t.jsx)(l.th,{children:"\u53C2\u6570\u540D"}),(0,t.jsx)(l.th,{children:"\u63CF\u8FF0"})]})}),(0,t.jsxs)(l.tbody,{children:[(0,t.jsxs)(l.tr,{children:[(0,t.jsx)(l.td,{children:"playerid"}),(0,t.jsx)(l.td,{children:"\u8981\u8BBE\u7F6E\u6B66\u5668\u6280\u80FD\u7684\u73A9\u5BB6 ID"})]}),(0,t.jsxs)(l.tr,{children:[(0,t.jsxs)(l.td,{children:["WEAPONSKILL",":skill"]}),(0,t.jsxs)(l.td,{children:["\u8981\u8BBE\u7F6E\u7684",(0,t.jsx)(l.a,{href:"../resources/weaponskills",children:"\u6B66\u5668\u6280\u80FD\u7C7B\u578B"})]})]}),(0,t.jsxs)(l.tr,{children:[(0,t.jsx)(l.td,{children:"level"}),(0,t.jsx)(l.td,{children:"\u6280\u80FD\u7B49\u7EA7\u503C\uFF080-999\uFF09\uFF0C\u8D85\u51FA\u8303\u56F4\u7684\u6570\u503C\u4F1A\u81EA\u52A8\u53D6\u6781\u503C"})]})]})]}),"\n",(0,t.jsx)(l.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,t.jsx)(l.p,{children:"\u672C\u51FD\u6570\u6CA1\u6709\u8FD4\u56DE\u503C\u3002"}),"\n",(0,t.jsx)(l.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-c",children:"public OnPlayerSpawn(playerid)\n{\n    // \u4F7F\u73A9\u5BB6\u4F7F\u7528\u5355\u624B\u6301\u77ED\u7BA1\u9730\u5F39\u67AA\n    SetPlayerSkillLevel(playerid, WEAPONSKILL_SAWNOFF_SHOTGUN, 1);\n    return 1;\n}\n"})}),"\n",(0,t.jsx)(l.h2,{id:"\u91CD\u8981\u8BF4\u660E",children:"\u91CD\u8981\u8BF4\u660E"}),"\n",(0,t.jsx)(l.admonition,{type:"warning",children:(0,t.jsxs)(l.p,{children:["skill \u53C2\u6570\u4E0D\u662F\u6B66\u5668 ID\uFF0C\u800C\u662F\u6280\u80FD\u7C7B\u578B\u3002",(0,t.jsx)(l.a,{href:"../resources/weaponskills",children:"\u70B9\u51FB\u6B64\u5904"}),"\u67E5\u770B\u6280\u80FD\u7C7B\u578B\u5217\u8868\u3002"]})}),"\n",(0,t.jsx)(l.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,t.jsxs)(l.ul,{children:["\n",(0,t.jsxs)(l.li,{children:[(0,t.jsx)(l.a,{href:"GetPlayerSkillLevel",children:"GetPlayerSkillLevel"}),": \u83B7\u53D6\u73A9\u5BB6\u6B66\u5668\u6280\u80FD\u7B49\u7EA7"]}),"\n",(0,t.jsxs)(l.li,{children:[(0,t.jsx)(l.a,{href:"SetPlayerArmedWeapon",children:"SetPlayerArmedWeapon"}),": \u8BBE\u7F6E\u73A9\u5BB6\u624B\u6301\u6B66\u5668"]}),"\n",(0,t.jsxs)(l.li,{children:[(0,t.jsx)(l.a,{href:"GivePlayerWeapon",children:"GivePlayerWeapon"}),": \u7ED9\u4E88\u73A9\u5BB6\u6B66\u5668"]}),"\n"]}),"\n",(0,t.jsx)(l.h2,{id:"\u76F8\u5173\u4FE1\u606F",children:"\u76F8\u5173\u4FE1\u606F"}),"\n",(0,t.jsxs)(l.ul,{children:["\n",(0,t.jsxs)(l.li,{children:[(0,t.jsx)(l.a,{href:"../resources/weaponskills#skill-levels",children:"\u6B66\u5668\u6280\u80FD\u7CFB\u7EDF"}),": \u7528\u4E8E\u8BBE\u7F6E\u73A9\u5BB6\u6280\u80FD\u7B49\u7EA7\u7684\u6B66\u5668\u6280\u80FD\u5217\u8868"]}),"\n"]})]})}function h(e={}){let{wrapper:l}={...(0,r.a)(),...e.components};return l?(0,t.jsx)(l,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},50065:function(e,l,n){n.d(l,{Z:function(){return d},a:function(){return s}});var i=n(67294);let t={},r=i.createContext(t);function s(e){let l=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(l):{...l,...e}},[l,e])}function d(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(r.Provider,{value:l},e.children)}}}]);