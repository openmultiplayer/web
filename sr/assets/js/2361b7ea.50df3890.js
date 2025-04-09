"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["89859"],{99425:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>s,metadata:()=>i,assets:()=>o,toc:()=>a,contentTitle:()=>l});var i=JSON.parse('{"id":"scripting/callbacks/OnNPCModeExit","title":"OnNPCModeExit","description":"\u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043A\u0430\u0434\u0430 \u0441\u0435 NPC \u0441\u043A\u0440\u0438\u043F\u0442\u0430 \u0438\u0441\u043A\u0459\u0443\u0447\u0438.","source":"@site/i18n/sr/docusaurus-plugin-content-docs/current/scripting/callbacks/OnNPCModeExit.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnNPCModeExit","permalink":"/sr/docs/scripting/callbacks/OnNPCModeExit","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnNPCModeExit.md","tags":[{"inline":true,"label":"npc","permalink":"/sr/docs/tags/npc"}],"version":"current","frontMatter":{"title":"OnNPCModeExit","sidebar_label":"OnNPCModeExit","description":"\u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043A\u0430\u0434\u0430 \u0441\u0435 NPC \u0441\u043A\u0440\u0438\u043F\u0442\u0430 \u0438\u0441\u043A\u0459\u0443\u0447\u0438.","tags":["npc"]},"sidebar":"docsSidebar","previous":{"title":"OnNPCExitVehicle","permalink":"/sr/docs/scripting/callbacks/OnNPCExitVehicle"},"next":{"title":"OnNPCModeInit.","permalink":"/sr/docs/scripting/callbacks/OnNPCModeInit"}}'),r=t("85893"),c=t("50065");let s={title:"OnNPCModeExit",sidebar_label:"OnNPCModeExit",description:"\u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043A\u0430\u0434\u0430 \u0441\u0435 NPC \u0441\u043A\u0440\u0438\u043F\u0442\u0430 \u0438\u0441\u043A\u0459\u0443\u0447\u0438.",tags:["npc"]},l=void 0,o={},a=[{value:"\u041E\u043F\u0438\u0441",id:"\u043E\u043F\u0438\u0441",level:2},{value:"\u041F\u0440\u0438\u043C\u0435\u0440",id:"\u043F\u0440\u0438\u043C\u0435\u0440",level:2},{value:"\u041F\u043E\u0432\u0435\u0437\u0430\u043D\u0435 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435",id:"\u043F\u043E\u0432\u0435\u0437\u0430\u043D\u0435-\u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0435-\u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u043E\u043F\u0438\u0441",children:"\u041E\u043F\u0438\u0441"}),"\n",(0,r.jsx)(n.p,{children:"\u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043A\u0430\u0434\u0430 \u0441\u0435 NPC \u0441\u043A\u0440\u0438\u043F\u0442\u0430 \u0438\u0441\u043A\u0459\u0443\u0447\u0438."}),"\n",(0,r.jsx)(n.h2,{id:"\u043F\u0440\u0438\u043C\u0435\u0440",children:"\u041F\u0440\u0438\u043C\u0435\u0440"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'public OnNPCModeExit()\n{\n    print("NPC script unloaded");\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u043F\u043E\u0432\u0435\u0437\u0430\u043D\u0435-\u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0435-\u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435",children:"\u041F\u043E\u0432\u0435\u0437\u0430\u043D\u0435 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435"}),"\n",(0,r.jsx)(n.p,{children:"\u0421\u043B\u0435\u0434\u0435\u045B\u0435 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435 \u043C\u043E\u0433\u0443 \u0431\u0438\u0442\u0438 \u043A\u043E\u0440\u0438\u0441\u043D\u0435, \u0458\u0435\u0440 \u0441\u0443 \u043D\u0430 \u043D\u0435\u043A\u0438 \u043D\u0430\u0447\u0438\u043D \u043F\u043E\u0432\u0435\u0437\u0430\u043D\u0435 \u0441\u0430 \u043E\u0432\u043E\u043C \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u043E\u043C \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u043E\u043C."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"OnNPCModeInit",children:"OnNPCModeInit"}),": \u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043A\u0430\u0434\u0430 \u0441\u0435 NPC \u0441\u043A\u0440\u0438\u043F\u0442 \u0443\u0447\u0438\u0442\u0430."]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return s}});var i=t(67294);let r={},c=i.createContext(r);function s(e){let n=i.useContext(c);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);