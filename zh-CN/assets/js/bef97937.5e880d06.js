"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["12070"],{41611:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>s,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>a});var r=JSON.parse('{"id":"scripting/functions/GetWeaponSlot","title":"GetWeaponSlot","description":"\u83B7\u53D6\u6B66\u5668\u7684\u69FD\u4F4D\u7F16\u53F7\u3002","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/scripting/functions/GetWeaponSlot.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetWeaponSlot","permalink":"/zh-CN/docs/scripting/functions/GetWeaponSlot","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetWeaponSlot.md","tags":[{"inline":true,"label":"\u6B66\u5668","permalink":"/zh-CN/docs/tags/\u6B66\u5668"}],"version":"current","frontMatter":{"title":"GetWeaponSlot","sidebar_label":"GetWeaponSlot","description":"\u83B7\u53D6\u6B66\u5668\u7684\u69FD\u4F4D\u7F16\u53F7\u3002","tags":["\u6B66\u5668"]},"sidebar":"docsSidebar","previous":{"title":"GetWeaponName","permalink":"/zh-CN/docs/scripting/functions/GetWeaponName"},"next":{"title":"GetWeather","permalink":"/zh-CN/docs/scripting/functions/GetWeather"}}'),l=t("85893"),i=t("50065");let s={title:"GetWeaponSlot",sidebar_label:"GetWeaponSlot",description:"\u83B7\u53D6\u6B66\u5668\u7684\u69FD\u4F4D\u7F16\u53F7\u3002",tags:["\u6B66\u5668"]},a=void 0,o={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8FD4\u56DE\u503C",id:"\u8FD4\u56DE\u503C",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u76F8\u5173\u51FD\u6570",id:"\u76F8\u5173\u51FD\u6570",level:2},{value:"\u76F8\u5173\u8D44\u6E90",id:"\u76F8\u5173\u8D44\u6E90",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("versionWarn",{version:"omp v1.1.0.2612"}),"\n",(0,l.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(n.p,{children:"\u83B7\u53D6\u6307\u5B9A\u6B66\u5668\u5BF9\u5E94\u7684\u69FD\u4F4D\u7F16\u53F7\u3002"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u53C2\u6570\u540D"}),(0,l.jsx)(n.th,{children:"\u8BF4\u660E"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:["WEAPON",":weaponid"]}),(0,l.jsx)(n.td,{children:"\u76EE\u6807\u6B66\u5668\u7684 ID \u7F16\u53F7"})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"\u8FD4\u56DE\u503C",children:"\u8FD4\u56DE\u503C"}),"\n",(0,l.jsxs)(n.p,{children:["\u8FD4\u56DE\u5BF9\u5E94\u7684",(0,l.jsx)(n.a,{href:"../resources/weaponslots",children:"\u6B66\u5668\u69FD\u4F4D"}),"\u7F16\u53F7\uFF080 - 12\uFF09"]}),"\n",(0,l.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (strcmp(cmdtext, "/weaponslot", true) == 0)\n    {\n        new WEAPON:weaponid = GetPlayerWeapon(playerid); // \u5B58\u50A8\u73A9\u5BB6\u5F53\u524D\u624B\u6301\u6B66\u5668\u7684ID\n        new WEAPON_SLOT:slot = GetWeaponSlot(weaponid);  // \u5B58\u50A8\u6B66\u5668\u5BF9\u5E94\u7684\u69FD\u4F4D\u7F16\u53F7\n        SendClientMessage(playerid, -1, "\u5F53\u524D\u6B66\u5668\u5360\u7528\u69FD\u4F4D\uFF1A%d", slot); // \u5411\u73A9\u5BB6\u53D1\u9001\u683C\u5F0F\u5316\u6D88\u606F\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u76F8\u5173\u51FD\u6570",children:"\u76F8\u5173\u51FD\u6570"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GetPlayerWeapon",children:"GetPlayerWeapon"}),": \u83B7\u53D6\u73A9\u5BB6\u5F53\u524D\u6301\u6709\u7684\u6B66\u5668 ID"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GetPlayerWeaponData",children:"GetPlayerWeaponData"}),": \u83B7\u53D6\u73A9\u5BB6\u6307\u5B9A\u69FD\u4F4D\u7684\u6B66\u5668\u53CA\u5F39\u836F\u6570\u636E\uFF08\u4F8B\u5982 SMG \u69FD\u4F4D\uFF09"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GetPlayerAmmo",children:"GetPlayerAmmo"}),": \u83B7\u53D6\u73A9\u5BB6\u5F53\u524D\u6B66\u5668\u7684\u5269\u4F59\u5F39\u836F\u91CF"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"SetPlayerArmedWeapon",children:"SetPlayerArmedWeapon"}),": \u8BBE\u7F6E\u73A9\u5BB6\u5207\u6362\u81F3\u5DF2\u6301\u6709\u7684\u6307\u5B9A\u6B66\u5668"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"ResetPlayerWeapons",children:"ResetPlayerWeapon"}),": \u6E05\u7A7A\u73A9\u5BB6\u6240\u6709\u6B66\u5668"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"RemovePlayerWeapon",children:"RemovePlayerWeapon"}),": \u79FB\u9664\u73A9\u5BB6\u6301\u6709\u7684\u6307\u5B9A\u6B66\u5668"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u76F8\u5173\u8D44\u6E90",children:"\u76F8\u5173\u8D44\u6E90"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"../resources/weaponslots",children:"\u6B66\u5668\u69FD\u4F4D\u7CFB\u7EDF"})}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return s}});var r=t(67294);let l={},i=r.createContext(l);function s(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);