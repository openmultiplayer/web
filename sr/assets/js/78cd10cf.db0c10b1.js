"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["53230"],{5951:function(e,t,s){s.r(t),s.d(t,{default:()=>a,frontMatter:()=>i,metadata:()=>n,assets:()=>l,toc:()=>h,contentTitle:()=>c});var n=JSON.parse('{"id":"client/ClientCommands","title":"\u041A\u043B\u0438\u0458\u0435\u043D\u0442 \u041A\u043E\u043C\u0430\u043D\u0434\u0435","description":"| \u041A\u043E\u043C\u0430\u043D\u0434\u0430        | \u0414\u0435\u0441\u043A\u0440\u0438\u043F\u0446\u0438\u0458\u0430                                                                                                                                                                                                                                                                                                                   |","source":"@site/i18n/sr/docusaurus-plugin-content-docs/current/client/ClientCommands.md","sourceDirName":"client","slug":"/client/ClientCommands","permalink":"/sr/docs/client/ClientCommands","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/client/ClientCommands.md","tags":[],"version":"current","frontMatter":{"title":"\u041A\u043B\u0438\u0458\u0435\u043D\u0442 \u041A\u043E\u043C\u0430\u043D\u0434\u0435","sidebar_label":"\u041A\u043B\u0438\u0458\u0435\u043D\u0442 \u041A\u043E\u043C\u0430\u043D\u0434\u0435","descripion":"\u041B\u0438\u0441\u0442\u0430 \u0441\u0432\u0438\u0445 \u043A\u043E\u043C\u0430\u043D\u0434\u0438 \u0437\u0430 \u043A\u043B\u0438\u0458\u0435\u043D\u0442."},"sidebar":"docsSidebar","previous":{"title":"server.cfg","permalink":"/sr/docs/server/server.cfg"},"next":{"title":"open.mp client on linux","permalink":"/sr/docs/client/ClientOnLinux"}}'),d=s("85893"),r=s("50065");let i={title:"\u041A\u043B\u0438\u0458\u0435\u043D\u0442 \u041A\u043E\u043C\u0430\u043D\u0434\u0435",sidebar_label:"\u041A\u043B\u0438\u0458\u0435\u043D\u0442 \u041A\u043E\u043C\u0430\u043D\u0434\u0435",descripion:"\u041B\u0438\u0441\u0442\u0430 \u0441\u0432\u0438\u0445 \u043A\u043E\u043C\u0430\u043D\u0434\u0438 \u0437\u0430 \u043A\u043B\u0438\u0458\u0435\u043D\u0442."},c=void 0,l={},h=[{value:"\u0424\u0430\u0458\u043B sa-mp.cfg",id:"\u0444\u0430\u0458\u043B-sa-mpcfg",level:2}];function x(e){let t={a:"a",h2:"h2",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"\u041A\u043E\u043C\u0430\u043D\u0434\u0430"}),(0,d.jsx)(t.th,{children:"\u0414\u0435\u0441\u043A\u0440\u0438\u043F\u0446\u0438\u0458\u0430"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"/quit (/q)"}),(0,d.jsx)(t.td,{children:"\u041E\u0432\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0433\u043E\u0432\u043E\u0440\u0438 \u0441\u0430\u043C\u0430 \u043F\u043E \u0441\u0435\u0431\u0438, \u0438\u0437\u043B\u0430\u0437\u0438 \u0438\u0437 \u0438\u0433\u0440\u0435. \u0422\u0430\u043A\u043E\u0452\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u043A\u043E\u0440\u0438\u0441\u0442\u0438\u0442\u0438 /q, \u0442\u043E \u0458\u0435 \u0438\u0441\u0442\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430, \u0441\u0430\u043C\u043E \u0441\u043A\u0440\u0430\u045B\u0435\u043D\u0430."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"/save"}),(0,d.jsx)(t.td,{children:"/save \u0458\u0435 \u043D\u0430\u0458\u0432\u0435\u0440\u043E\u0432\u0430\u0442\u043D\u0438\u0458\u0435 \u043D\u0430\u0458\u0447\u0435\u0448\u045B\u0435 \u043A\u043E\u0440\u0438\u0448\u045B\u0435\u043D\u0430 \u043F\u043E\u0434\u0440\u0430\u0437\u0443\u043C\u0435\u0432\u0430\u043D\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430, \u0438 \u0432\u0435\u0440\u043E\u0432\u0430\u0442\u043D\u043E \u043D\u0430\u0458\u043A\u043E\u0440\u0438\u0441\u043D\u0438\u0458\u0430. \u041A\u0430\u0434\u0430 \u0443\u043F\u0438\u0448\u0435\u0442\u0435 /save, \u0432\u0430\u0448\u0430 \u0442\u0440\u0435\u043D\u0443\u0442\u043D\u0430 \u043B\u043E\u043A\u0430\u0446\u0438\u0458\u0430 \u0458\u0435 \u0441\u0430\u0447\u0443\u0432\u0430\u043D\u0430 \u0443 savedpositions.txt \u0444\u0430\u0458\u043B\u0443 \u043A\u043E\u0458\u0438 \u0441\u0435 \u043D\u0430\u043B\u0430\u0437\u0438 \u0443 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0438\u0458\u0443\u043C\u0443 \u0432\u0430\u0448\u0438\u0445 \u043A\u043E\u0440\u0438\u0441\u043D\u0438\u0447\u043A\u0438\u0445 \u0434\u0430\u0442\u043E\u0442\u0435\u043A\u0430, \u043A\u043E\u0458\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u043A\u043E\u0440\u0438\u0441\u0442\u0438\u0442\u0438 \u0443 \u0441\u043A\u0440\u0438\u043F\u0442\u0430\u043C\u0430."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"/rs"}),(0,d.jsx)(t.td,{children:"/rs (Raw Save) \u0458\u0435 \u043A\u0430\u043E /save, \u0430\u043B\u0438 \u043E\u0432\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0447\u0443\u0432\u0430 \u0441\u0430\u043C\u043E \u0432\u0430\u0448\u0443 \u0442\u0440\u0435\u043D\u0443\u0442\u043D\u0443 \u043F\u043E\u0437\u0438\u0446\u0438\u0458\u0443 \u0438 \u0443\u0433\u0430\u043E \u043E\u043A\u0440\u0435\u0442\u0430\u045A\u0430 \u0443 \u0444\u0430\u0458\u043B\u0443 rawpositions.txt \u043A\u043E\u0458\u0438 \u0441\u0435 \u043D\u0430\u043B\u0430\u0437\u0438 \u0443 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0438\u0458\u0443\u043C\u0443 \u0432\u0430\u0448\u0438\u0445 \u043A\u043E\u0440\u0438\u0441\u043D\u0438\u0447\u043A\u0438\u0445 \u0434\u0430\u0442\u043E\u0442\u0435\u043A\u0430. \u041D\u0435 \u0447\u0443\u0432\u0430\u0458\u0443 \u0441\u0435 \u0434\u043E\u0434\u0430\u0442\u043D\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0458\u0435 \u043F\u043E\u043F\u0443\u0442 \u043A\u043B\u0430\u0441\u0435 \u0438 \u043E\u0440\u0443\u0436\u0458\u0430."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"/interior"}),(0,d.jsx)(t.td,{children:"\u0414\u0435\u043B\u0438\u043C\u0438\u0447\u043D\u043E \u0432\u0430\u0436\u043D\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043A\u0430\u043E /save, \u043E\u0432\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043F\u0440\u043E\u0441\u0442\u043E \u043F\u0440\u0438\u043A\u0430\u0437\u0443\u0458\u0435 \u0442\u0440\u0435\u043D\u0443\u0442\u043D\u0438 \u0435\u043D\u0442\u0435\u0440\u0438\u0458\u0435\u0440 \u0443 \u045B\u0430\u0441\u043A\u0430\u045A\u0443 (in chat)."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"/fpslimit"}),(0,d.jsx)(t.td,{children:"\u041E\u0432\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043F\u043E\u0441\u0442\u0430\u0432\u0459\u0430 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u045A\u0435 \u0432\u0430\u0448\u0435\u043C FPS-\u0443 (Frames Per Second) \u0437\u0430 \u0432\u0430\u0448\u0443 \u0438\u0433\u0440\u0443. \u0428\u0442\u043E \u0458\u0435 \u0432\u0435\u045B\u0435 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u045A\u0435, \u0432\u0430\u0448\u0430 \u0438\u0433\u0440\u0430 \u0458\u0435 \u0432\u0438\u0448\u0435 \u0433\u043B\u0430\u0442\u043A\u0430. \u041D\u0435\u043C\u0430 \u0435\u0444\u0435\u043A\u0442\u0430 \u0430\u043A\u043E \u0458\u0435 \u043C\u043E\u0433\u0443\u045B\u043D\u043E\u0441\u0442 \u0437\u0430 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u045A\u0435 \u0438\u0441\u043A\u0459\u0443\u0447\u0435\u043D\u043E \u0443 \u0433\u0440\u0430\u0444\u0438\u0447\u043A\u0438\u043C \u043E\u043F\u0446\u0438\u0458\u0430\u043C\u0430. \u041E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u045A\u0435 \u043C\u043E\u0436\u0435 \u0431\u0438\u0442\u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u0459\u0435\u043D\u043E \u0438\u0437\u043C\u0435\u0452\u0443 20 \u0438 90."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"/pagesize"}),(0,d.jsx)(t.td,{children:"/pagesize \u0441\u043B\u0443\u0436\u0438 \u0437\u0430 \u043E\u0434\u0430\u0431\u0438\u0440 \u0431\u0440\u043E\u0458\u0430 \u043B\u0438\u043D\u0438\u0458\u0430 \u0437\u0430 \u045B\u0430\u0441\u043A\u0430\u045A\u0435 (for chat) \u043A\u043E\u0458\u0435 \u045B\u0435 \u0441\u0435 \u043F\u0440\u0438\u043A\u0430\u0437\u0430\u0442\u0438. \u041E\u0432\u043E \u043C\u043E\u0436\u0435 \u0431\u0438\u0442\u0438 \u0441\u0432\u0435 \u043E\u0434 10 \u0434\u043E 20 \u043B\u0438\u043D\u0438\u0458\u0430. Pagesize \u0458\u0435 10 \u043F\u043E\u0434\u0440\u0430\u0437\u0443\u043C\u0435\u0432\u0430\u043D\u043E."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"/headmove"}),(0,d.jsx)(t.td,{children:"\u041E\u0432\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u045B\u0435 \u043E\u043C\u043E\u0433\u0443\u045B\u0438\u0442\u0438/\u043E\u043D\u0435\u043C\u043E\u0433\u0443\u045B\u0438\u0442\u0438 \u043F\u043E\u043A\u0440\u0435\u0442\u0435 \u0433\u043B\u0430\u0432\u0435 \u0438\u0433\u0440\u0430\u0447\u0430, \u043C\u0435\u0452\u0443\u0442\u0438\u043C \u045A\u0438\u043C\u0430 \u0441\u0435 \u0440\u0443\u043A\u0443\u0458\u0435 \u043B\u043E\u043A\u0430\u043B\u043D\u043E, \u0442\u0430\u043A\u043E \u0434\u0430 \u045B\u0435 \u0434\u0440\u0443\u0433\u0438 \u0438\u0433\u0440\u0430\u0447\u0438 \u0438 \u0434\u0430\u0459\u0435 \u0432\u0438\u0434\u0435\u0442\u0438 \u043A\u0430\u043A\u043E \u0441\u0435 \u0432\u0430\u0448\u0430 \u0433\u043B\u0430\u0432\u0430 \u043F\u043E\u043C\u0435\u0440\u0430."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"/timestamp"}),(0,d.jsx)(t.td,{children:"\u041E\u0432\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u045B\u0435 \u043F\u0440\u0438\u043A\u0430\u0437\u0430\u0442\u0438/\u0441\u0430\u043A\u0440\u0438\u0442\u0438 \u0432\u0440\u0435\u043C\u0435 \u043F\u043E\u0440\u0435\u0434 \u0441\u0432\u0438\u0445 \u043F\u043E\u0440\u0443\u043A\u0430 \u0443 \u045B\u0430\u0441\u043A\u0430\u045A\u0443 (in chatbox). \u041F\u0440\u0438\u043A\u0430\u0437\u0430\u043D\u043E \u0432\u0440\u0435\u043C\u0435 \u0458\u0435 \u0432\u0440\u0435\u043C\u0435 \u0440\u0430\u0447\u0443\u043D\u0430\u0440\u0430, \u0430 \u043D\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"/dl"}),(0,d.jsx)(t.td,{children:"DL \u043E\u0437\u043D\u0430\u0447\u0430\u0432\u0430 \u043E\u0437\u043D\u0430\u043A\u0435 \u0437\u0430 \u043E\u0442\u043A\u043B\u0430\u045A\u0430\u045A\u0435 \u0433\u0440\u0435\u0448\u0430\u043A\u0430. \u041E\u0432\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u043F\u0440\u0435\u0431\u0430\u0446\u0443\u0458\u0435 \u043E\u0437\u043D\u0430\u043A\u0435 \u0437\u0430 \u043E\u0442\u043A\u043B\u0430\u045A\u0430\u045A\u0435 \u0433\u0440\u0435\u0448\u0430\u043A\u0430 \u043D\u0430 \u0432\u043E\u0437\u0438\u043B\u0438\u043C\u0430, \u043A\u043E\u0458\u0435 \u043F\u0440\u0438\u043A\u0430\u0437\u0443\u0458\u0443 ID \u0432\u043E\u0437\u0438\u043B\u0430, \u043C\u043E\u0434\u0435\u043B, \u0437\u0434\u0440\u0430\u0432\u0459\u0435, \u0434\u0430 \u043B\u0438 \u0458\u0435 \u0432\u043E\u0437\u0438\u043B\u043E \u0443\u043D\u0430\u043F\u0440\u0435\u0434 \u043E\u043F\u0442\u0435\u0440\u0435\u045B\u0435\u043D\u043E, \u0443\u0434\u0430\u0459\u0435\u043D\u043E\u0441\u0442 \u043E\u0434 \u0438\u0433\u0440\u0430\u0447\u0430, \u043F\u0440\u0438\u043A\u043E\u043B\u0438\u0446\u0443, \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0438\u0432\u0430 \u043C\u0435\u0441\u0442\u0430, \u0442\u0440\u0435\u043D\u0443\u0442\u043D\u0443 \u043F\u043E\u0437\u0438\u0446\u0438\u0458\u0443 \u0438 \u043F\u043E\u043B\u043E\u0436\u0430\u0458 \u043C\u0440\u0438\u0458\u0435\u0441\u0442\u0430 (spawn position)."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"/nametagstatus"}),(0,d.jsx)(t.td,{children:"\u041A\u0430\u0434\u0430 \u0458\u0435 \u043E\u043C\u043E\u0433\u0443\u045B\u0435\u043D\u0430 (\u0448\u0442\u043E \u0458\u0435 \u043F\u043E\u0434\u0440\u0430\u0437\u0443\u043C\u0435\u0432\u0430\u043D\u043E), \u0438\u0433\u0440\u0430\u0447\u0438 \u045B\u0435 \u0432\u0438\u0434\u0435\u0442\u0438 \u043C\u0430\u043B\u0443 \u0438\u043A\u043E\u043D\u0443 \u043F\u0435\u0448\u0447\u0430\u043D\u043E\u0433 \u0441\u0430\u0442\u0430 \u043F\u043E\u0440\u0435\u0434 \u043E\u0437\u043D\u0430\u043A\u0435 \u0438\u043C\u0435\u043D\u0430 \u043F\u0430\u0443\u0437\u0438\u0440\u0430\u043D\u0438\u0445 \u0438\u0433\u0440\u0430\u0447\u0430. \u041E\u0432\u043E \u0443\u043A\u0459\u0443\u0447\u0443\u0458\u0435 \u043C\u0438\u043D\u0438\u043C\u0438\u0437\u0438\u0440\u0430\u045A\u0435 (alt-tab), \u043C\u0435\u043D\u0438 \u0437\u0430 \u043F\u0430\u0443\u0437\u0443 (ESC), \u0438\u0437\u0433\u0443\u0431\u0459\u0435\u043D\u0443 \u0432\u0435\u0437\u0443 (crash/timeout) \u0438 \u043A\u0430\u0434\u0430 \u043F\u0440\u0430\u0432\u0438\u0442\u0435 \u0441\u043D\u0438\u043C\u043A\u0435 \u0435\u043A\u0440\u0430\u043D\u0430 \u043A\u043E\u0458\u0438 \u0437\u0430\u043C\u0440\u0437\u0430\u0432\u0430\u0458\u0443 \u0438\u0433\u0440\u0443 \u0432\u0438\u0448\u0435 \u043E\u0434 3 \u0441\u0435\u043A\u0443\u043D\u0434\u0435."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"/mem"}),(0,d.jsx)(t.td,{children:"\u041F\u0440\u0438\u043A\u0430\u0437\u0443\u0458\u0435 \u0442\u0440\u0435\u043D\u0443\u0442\u043D\u0443 \u043A\u043E\u043B\u0438\u0447\u0438\u043D\u0443 \u043A\u043E\u0440\u0438\u0448\u045B\u0435\u045A\u0430 \u043C\u0435\u043C\u043E\u0440\u0438\u0458\u0435. (\u0418\u0430\u043A\u043E \u0441\u0435 \u043E\u0431\u0438\u0447\u043D\u043E \u0441\u0430\u043C\u043E \u0448\u0442\u0430\u043C\u043F\u0430 128 MB.)"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"/audiomsg"}),(0,d.jsx)(t.td,{children:"\u041E\u043C\u043E\u0433\u0443\u045B\u0430\u0432\u0430/\u043E\u043D\u0435\u043C\u043E\u0433\u0443\u045B\u0430\u0432\u0430 \u043F\u043E\u0440\u0443\u043A\u0443 \u043A\u043E\u0458\u0430 \u0441\u0435 \u0448\u0442\u0430\u043C\u043F\u0430 \u043A\u0430\u0434\u0430 \u0441\u0435 URL \u0441\u0442\u0440\u0438\u043C\u0443\u0458\u0435 \u043D\u0430 \u043A\u043B\u0438\u0458\u0435\u043D\u0442\u0443."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"/fontsize"}),(0,d.jsx)(t.td,{children:"\u041C\u0435\u045A\u0430 \u0432\u0435\u043B\u0438\u0447\u0438\u043D\u0443 \u0444\u043E\u043D\u0442\u0430 UI-a (chat, dialogs etc.). \u0412\u0430\u0436\u0435\u045B\u0430 \u0432\u0435\u043B\u0438\u0447\u0438\u043D\u0430 \u0444\u043E\u043D\u0442\u0430 \u0458\u0435 \u043E\u0434 -3 \u0434\u043E 5."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"/ctd"}),(0,d.jsx)(t.td,{children:"\u041E\u0432\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0458\u0435 \u0434\u043E\u0434\u0430\u0442\u0430 \u0443 SA-MP 0.3.7 RC2 \u0432\u0435\u0440\u0437\u0438\u0458\u0438. \u041E\u043C\u043E\u0433\u0443\u045B\u0430\u0432\u0430 \u043A\u043B\u0438\u0458\u0435\u043D\u0442\u0443 \u043E\u0442\u043A\u043B\u0430\u045A\u0430\u045A\u0435 \u0433\u0440\u0435\u0448\u0430\u043A\u0430 \u0446\u0438\u0459\u0430 \u043A\u0430\u043C\u0435\u0440\u0435 \u0438\u0433\u0440\u0430\u0447\u0430."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"/rcon"}),(0,d.jsxs)(t.td,{children:["\u0412\u0438\u0448\u0435 \u043F\u043E\u0432\u0435\u0437\u0430\u043D\u043E \u0441\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C \u043D\u0435\u0433\u043E \u0441\u0430 \u043A\u043B\u0438\u0458\u0435\u043D\u0442\u043E\u043C. \u041E\u0432\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0441\u0435 \u043A\u043E\u0440\u0438\u0441\u0442\u0438 \u0437\u0430 \u0438\u0437\u0432\u0440\u0448\u0430\u0432\u0430\u045A\u0435 RCON \u043A\u043E\u043C\u0430\u043D\u0434\u0438. RCON \u0458\u0435 \u0443\u0433\u0440\u0430\u0452\u0435\u043D\u0438 \u0441\u0438\u0441\u0442\u0435\u043C \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0458\u0435. RCON \u043E\u0437\u043D\u0430\u0447\u0430\u0432\u0430 \u0437\u0430 ",(0,d.jsx)(t.a,{href:"../server/ControllingServer#using-rcon",children:"Remote Control"}),"."]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"/hudscalefix"}),(0,d.jsx)(t.td,{children:"\u041E\u0432\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0458\u0435 \u0434\u043E\u0434\u0430\u0442\u0430 \u0443 SA-MP 0.3.7 R3. \u041E\u043C\u043E\u0433\u0443\u045B\u0430\u0432\u0430/\u043E\u043D\u0435\u043C\u043E\u0433\u0443\u045B\u0430\u0432\u0430 \u043F\u043E\u043F\u0440\u0430\u0432\u043A\u0443 \u0441\u043A\u0430\u043B\u0435 \u0440\u0430\u0434\u0430\u0440\u0430, \u0442\u0430\u043A\u043E \u0434\u0430 \u0441\u0435 \u0440\u0430\u0434\u0430\u0440 \u0443 \u0438\u0433\u0440\u0438 \u0431\u043E\u0459\u0435 \u0441\u043A\u0430\u043B\u0438\u0440\u0430 \u0443 \u0448\u0438\u0440\u043E\u043A\u0438\u043C \u0440\u0435\u0437\u043E\u043B\u0443\u0446\u0438\u0458\u0430\u043C\u0430 (\u0442\u0458. \u0431\u0435\u0437 \u0432\u0438\u0448\u0435 '\u0458aja \u0437\u0430 \u043F\u0440\u043E\u043D\u0430\u043B\u0430\u0436\u0435\u045A\u0435'). \u041E\u0432\u043E \u043F\u043E\u0434\u0435\u0448\u0430\u0432\u0430 'nohudscale' \u043E\u043F\u0446\u0438\u0458\u0443 \u0443 sa-mp.cfg."})]})]})]}),"\n",(0,d.jsx)(t.h2,{id:"\u0444\u0430\u0458\u043B-sa-mpcfg",children:"\u0424\u0430\u0458\u043B sa-mp.cfg"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"\u041E\u043F\u0446\u0438\u0458\u0430"}),(0,d.jsx)(t.th,{children:"\u0414\u0435\u0441\u043A\u0440\u0438\u043F\u0446\u0438\u0458\u0430"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"pagesize"}),(0,d.jsx)(t.td,{children:"\u0412\u0438\u0434\u0438 /pagesize."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fpslimit"}),(0,d.jsx)(t.td,{children:"\u0412\u0438\u0434\u0438 /fpslimit."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"disableheadmove"}),(0,d.jsx)(t.td,{children:"\u0412\u0438\u0434\u0438 /headmove."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"timestamp"}),(0,d.jsx)(t.td,{children:"\u0412\u0438\u0434\u0438 /timestamp."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"ime"}),(0,d.jsx)(t.td,{children:"\u041E\u0432\u043E \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u0438\u0448\u0435 \u0434\u0430 \u043B\u0438 \u0443\u043D\u043E\u0441 \u0443 \u043F\u0440\u043E\u0437\u043E\u0440\u0443 \u0437\u0430 \u045B\u0430\u0441\u043A\u0430\u045A\u0435 \u043F\u043E\u0434\u0440\u0436\u0430\u0432\u0430 IME (Input Method Editor) \u0442\u0435\u043A\u0441\u0442\u0443\u0430\u043B\u043D\u043E \u0443\u0440\u0435\u0452\u0438\u0432\u0430\u045A\u0435 \u0438 \u043F\u0440\u0435\u0431\u0430\u0446\u0438\u0432\u0430\u045A\u0435 \u0458\u0435\u0437\u0438\u043A\u0430. 1 \u043E\u043C\u043E\u0433\u0443\u045B\u0430\u0432\u0430 IME, 0 \u043E\u043D\u0435\u043C\u043E\u0433\u0443\u045B\u0430\u0432\u0430."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"audiomsgoff"}),(0,d.jsx)(t.td,{children:"\u0412\u0438\u0434\u0438 /audiomsg."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"multicore"}),(0,d.jsx)(t.td,{children:"\u041F\u0440\u0435\u043B\u0430\u0437\u0438 \u043D\u0430 \u0442\u043E \u0434\u0430 \u043B\u0438 SA-MP \u043A\u043B\u0438\u0458\u0435\u043D\u0442 \u043A\u043E\u0440\u0438\u0441\u0442\u0438 \u0432\u0438\u0448\u0435 CPU \u0458\u0435\u0437\u0433\u0430\u0440\u0430 \u043F\u0440\u0438\u043B\u0438\u043A\u043E\u043C \u0440\u0430\u0434\u0430. \u041F\u043E\u0434\u0440\u0430\u0437\u0443\u043C\u0435\u0432\u0430\u043D\u043E \u0458\u0435 1 (\u041A\u041E\u0420\u0418\u0421\u0422\u0418 \u0432\u0438\u0448\u0435 CPU \u0458\u0435\u0437\u0433\u0430\u0440\u0430). \u041F\u043E\u0434\u0435\u0441\u0438\u0442\u0435 \u043D\u0430 0 \u0430\u043A\u043E \u0438\u043C\u0430\u0442\u0435 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0430 \u0441\u0430 \u043C\u0438\u0448\u0435\u043C."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"directmode"}),(0,d.jsx)(t.td,{children:"\u041E\u0432\u043E \u043E\u043C\u043E\u0433\u0443\u045B\u0430\u0432\u0430 \u0438\u0433\u0440\u0430\u0447\u0438\u043C\u0430 \u0441\u0430 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0438\u043C\u0430 \u0443 \u0446\u0440\u0442\u0430\u045A\u0443 \u0442\u0435\u043A\u0441\u0442\u0430 \u0443 \u045B\u0430\u0441\u043A\u0430\u045A\u0443 \u0434\u0430 \u043A\u043E\u0440\u0438\u0441\u0442\u0435 \u0441\u043F\u043E\u0440\u0438\u0458\u0438 \u0434\u0438\u0440\u0435\u043A\u0442\u0430\u043D \u0440\u0435\u0436\u0438\u043C \u0440\u0435\u043D\u0434\u0435\u0440\u043E\u0432\u0430\u045A\u0430 \u0442\u0435\u043A\u0441\u0442\u0430 \u043D\u0430 \u0435\u043A\u0440\u0430\u043D\u0443. 0 \u0437\u0430 \u043E\u043D\u0435\u043C\u043E\u0433\u0443\u045B\u0430\u0432\u0430\u045A\u0435, 1 \u0437\u0430 \u043E\u043C\u043E\u0433\u0443\u045B\u0430\u0432\u0430\u045A\u0435."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"audioproxyoff"}),(0,d.jsx)(t.td,{children:"\u0410\u043A\u043E \u0458\u0435 \u043E\u0432\u0430 \u043E\u043F\u0446\u0438\u0458\u0430 \u043F\u043E\u0434\u0435\u0448\u0435\u043D\u0430 \u043D\u0430 1, \u0438 \u0430\u043A\u043E \u0458\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u0459\u0435\u043D \u043F\u0440\u043E\u043A\u0441\u0438 \u0441\u0435\u0440\u0432\u0435\u0440 \u0443 \u0432\u0430\u0448\u0438\u043C Windows Internet Options, \u043F\u0440\u043E\u043A\u0441\u0438 \u043D\u0435\u045B\u0435 \u0431\u0438\u0442\u0438 \u043A\u043E\u0440\u0438\u0448\u045B\u0435\u043D \u043F\u0440\u0438\u043B\u0438\u043A\u043E\u043C \u0440\u0435\u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0458\u0435 \u0430\u0443\u0434\u0438\u043E \u0441\u0442\u0440\u0438\u043C\u043E\u0432\u0430 \u0443 SA-MP."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"nonametagstatus"}),(0,d.jsx)(t.td,{children:"\u0412\u0438\u0434\u0438 /nametagstatus."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fontface"}),(0,d.jsx)(t.td,{children:'\u041E\u043C\u043E\u0433\u0443\u045B\u0430\u0432\u0430 \u0432\u0430\u043C \u0434\u0430 \u043F\u0440\u043E\u043C\u0435\u043D\u0438\u0442\u0435 \u0444\u043E\u043D\u0442 \u0443 \u045B\u0430\u0441\u043A\u0430\u045A\u0443, \u0434\u0438\u0458\u0430\u043B\u043E\u0437\u0438\u043C\u0430 \u0438 \u0442\u0430\u0431\u043B\u0438 \u0441\u0430 \u0440\u0435\u0437\u0443\u043B\u0442\u0430\u0442\u0438\u043C\u0430. \u041D\u0430 \u043F\u0440\u0438\u043C\u0435\u0440, fontface="Comic Sans MS". \u041D\u0435\u043C\u0430 \u0437\u0432\u0430\u043D\u0438\u0447\u043D\u0443 \u043F\u043E\u0434\u0440\u0448\u043A\u0443 \u0438 \u043C\u043E\u0436\u0435 \u0438\u0437\u0430\u0437\u0432\u0430\u0442\u0438 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0435.'})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"fontweight"}),(0,d.jsx)(t.td,{children:"\u041E\u0432\u0430 \u043E\u043F\u0446\u0438\u0458\u0430 \u043F\u0440\u0435\u043B\u0430\u0437\u0438 \u0434\u0430 \u043B\u0438 \u0458\u0435 \u0444\u043E\u043D\u0442 \u0443 \u045B\u0430\u0441\u043A\u0430\u045A\u0443 \u043F\u043E\u0434\u0435\u0431\u0459\u0430\u043D \u0438\u043B\u0438 \u043D\u0435. 0 = \u041F\u041E\u0414\u0415\u0411\u0409\u0410\u041D (\u043F\u043E\u0434\u0440\u0430\u0437\u0443\u043C\u0435\u0432\u0430\u043D\u043E), \u0430 1 = \u041D\u041E\u0420\u041C\u0410\u041B\u0410\u041D."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"nohudscale"}),(0,d.jsx)(t.td,{children:"\u041E\u0432\u0430 \u043E\u043F\u0446\u0438\u0458\u0430 \u0458\u0435 \u0434\u043E\u0434\u0430\u0442\u0430 \u0443 0.3.7 R3. \u0412\u0438\u0434\u0438 /hudscalefix."})]})]})]})]})}function a(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},50065:function(e,t,s){s.d(t,{Z:function(){return c},a:function(){return i}});var n=s(67294);let d={},r=n.createContext(d);function i(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);