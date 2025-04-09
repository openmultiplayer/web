"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["49597"],{95675:function(e,n,i){i.r(n),i.d(n,{default:()=>p,frontMatter:()=>s,metadata:()=>t,assets:()=>o,toc:()=>d,contentTitle:()=>a});var t=JSON.parse('{"id":"scripting/callbacks/OnDialogResponse","title":"OnDialogResponse","description":"\u042D\u0442\u043E\u0442 \u043A\u043E\u043B\u043B\u0431\u044D\u043A \u0432\u044B\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F, \u043A\u043E\u0433\u0434\u0430 \u0438\u0433\u0440\u043E\u043A \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0441 \u0434\u0438\u0430\u043B\u043E\u0433\u043E\u043C, \u043F\u043E\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u043C \u0435\u043C\u0443 \u0447\u0435\u0440\u0435\u0437 ShowPlayerDialog.","source":"@site/i18n/ru/docusaurus-plugin-content-docs/current/scripting/callbacks/OnDialogResponse.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnDialogResponse","permalink":"/ru/docs/scripting/callbacks/OnDialogResponse","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnDialogResponse.md","tags":[],"version":"current","frontMatter":{"title":"OnDialogResponse","sidebar_label":"OnDialogResponse","description":"\u042D\u0442\u043E\u0442 \u043A\u043E\u043B\u043B\u0431\u044D\u043A \u0432\u044B\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F, \u043A\u043E\u0433\u0434\u0430 \u0438\u0433\u0440\u043E\u043A \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0441 \u0434\u0438\u0430\u043B\u043E\u0433\u043E\u043C, \u043F\u043E\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u043C \u0435\u043C\u0443 \u0447\u0435\u0440\u0435\u0437 ShowPlayerDialog.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"OnClientMessage","permalink":"/ru/docs/scripting/callbacks/OnClientMessage"},"next":{"title":"OnEnterExitModShop","permalink":"/ru/docs/scripting/callbacks/OnEnterExitModShop"}}'),l=i("85893"),r=i("50065");let s={title:"OnDialogResponse",sidebar_label:"OnDialogResponse",description:"\u042D\u0442\u043E\u0442 \u043A\u043E\u043B\u043B\u0431\u044D\u043A \u0432\u044B\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F, \u043A\u043E\u0433\u0434\u0430 \u0438\u0433\u0440\u043E\u043A \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0441 \u0434\u0438\u0430\u043B\u043E\u0433\u043E\u043C, \u043F\u043E\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u043C \u0435\u043C\u0443 \u0447\u0435\u0440\u0435\u0437 ShowPlayerDialog.",tags:[]},a=void 0,o={},d=[{value:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",id:"\u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",level:2},{value:"\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442",id:"\u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442",level:2},{value:"\u041F\u0440\u0438\u043C\u0435\u0440",id:"\u043F\u0440\u0438\u043C\u0435\u0440",level:2},{value:"\u041F\u0440\u0438\u043C\u0435\u0447\u0430\u043D\u0438\u044F",id:"\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u043D\u0438\u044F",level:2},{value:"\u0424\u0443\u043D\u043A\u0446\u0438\u0438",id:"\u0444\u0443\u043D\u043A\u0446\u0438\u0438",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{VersionWarn:i}=n;return i||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{name:"callback",version:"SA-MP 0.3.7"}),"\n",(0,l.jsx)(n.h2,{id:"\u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",children:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"}),"\n",(0,l.jsx)(n.p,{children:"\u042D\u0442\u043E\u0442 \u043A\u043E\u043B\u043B\u0431\u044D\u043A \u0432\u044B\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F, \u043A\u043E\u0433\u0434\u0430 \u0438\u0433\u0440\u043E\u043A \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0441 \u0434\u0438\u0430\u043B\u043E\u0433\u043E\u043C, \u043F\u043E\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u043C \u0435\u043C\u0443 \u0447\u0435\u0440\u0435\u0437 ShowPlayerDialog."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u0410\u0440\u0433\u0443\u043C\u0435\u043D\u0442"}),(0,l.jsx)(n.th,{children:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"ID \u0438\u0433\u0440\u043E\u043A\u0430, \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0433\u043E \u0441 \u0434\u0438\u0430\u043B\u043E\u0433\u043E\u043C."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"dialogid"}),(0,l.jsx)(n.td,{children:"ID \u0434\u0438\u0430\u043B\u043E\u0433\u0430, \u043F\u043E\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u0433\u043E \u0447\u0435\u0440\u0435\u0437 ShowPlayerDialog, \u0441 \u043A\u043E\u0442\u043E\u0440\u044B\u043C \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0438\u0433\u0440\u043E\u043A."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"response"}),(0,l.jsx)(n.td,{children:"1 - \u043D\u0430\u0436\u0430\u0442\u0438\u0435 \u043D\u0430 \u043B\u0435\u0432\u0443\u044E \u043A\u043D\u043E\u043F\u043A\u0443 \u0434\u0438\u0430\u043B\u043E\u0433\u0430 (Enter), 0 \u043D\u0430\u0436\u0430\u0442\u0438\u0435 \u043D\u0430 \u043F\u0440\u0430\u0432\u0443\u044E \u043A\u043D\u043E\u043F\u043A\u0443 \u0434\u0438\u0430\u043B\u043E\u0433\u0430 (ESC) (\u0432\u0441\u0435\u0433\u0434\u0430 1, \u0435\u0441\u043B\u0438 \u043F\u043E\u043A\u0430\u0437\u0430\u043D\u0430 \u0442\u043E\u043B\u044C\u043A\u043E 1 \u043A\u043D\u043E\u043F\u043A\u0430)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"listitem"}),(0,l.jsx)(n.td,{children:"ID \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0441\u043F\u0438\u0441\u043A\u0430, \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u0438\u0433\u0440\u043E\u043A\u043E\u043C (\u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u0441 0) (\u0435\u0441\u043B\u0438 \u0443 \u0434\u0438\u0430\u043B\u043E\u0433\u0430 \u0432\u044B\u0431\u0440\u0430\u043D \u0441\u0442\u0438\u043B\u044C \u0441\u043F\u0438\u0441\u043A\u0430, \u0438\u043D\u0430\u0447\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 \u0431\u0443\u0434\u0435\u0442 -1)."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"inputtext[]"}),(0,l.jsx)(n.td,{children:"\u0422\u0435\u043A\u0441\u0442, \u0432\u0432\u0435\u0434\u0451\u043D\u043D\u044B\u0439 \u0438\u0433\u0440\u043E\u043A\u043E\u043C \u0432 \u0434\u0438\u0430\u043B\u043E\u0433 \u0438\u043B\u0438 \u0442\u0435\u043A\u0441\u0442 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0441\u043F\u0438\u0441\u043A\u0430, \u0435\u0441\u043B\u0438 \u0443 \u0434\u0438\u0430\u043B\u043E\u0433\u0430 \u0432\u044B\u0431\u0440\u0430\u043D \u0441\u0442\u0438\u043B\u044C \u0441\u043F\u0438\u0441\u043A\u0430."})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442",children:"\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442"}),"\n",(0,l.jsxs)(n.p,{children:["\u041A\u043E\u043B\u043B\u0431\u044D\u043A \u0432\u0441\u0435\u0433\u0434\u0430 \u0441\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u0442 \u0432 filterscript'\u0430\u0445 \u043F\u0435\u0440\u0432\u0435\u0435, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 ",(0,l.jsx)(n.code,{children:"return 1"})," \u043D\u0435 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0434\u0440\u0443\u0433\u0438\u043C \u0444\u0438\u043B\u044C\u0442\u0440\u0441\u043A\u0440\u0438\u043F\u0442\u0430\u043C \u0432\u044B\u0437\u0432\u0430\u0442\u044C \u044D\u0442\u043E\u0442 \u043A\u043E\u043B\u043B\u0431\u044D\u043A"]}),"\n",(0,l.jsx)(n.h2,{id:"\u043F\u0440\u0438\u043C\u0435\u0440",children:"\u041F\u0440\u0438\u043C\u0435\u0440"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'// \u041C\u0430\u043A\u0440\u043E\u0441 ID \u0434\u0438\u0430\u043B\u043E\u0433\u0430, \u0441 \u043A\u043E\u0442\u043E\u0440\u044B\u043C \u0431\u0443\u0434\u0435\u0442 \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435\n#define DIALOG_RULES 1\n\n// \u0412 \u043A\u0430\u043A\u043E\u043C-\u043B\u0438\u0431\u043E \u043C\u0435\u0441\u0442\u0435 \u043A\u043E\u0434\u0430\nShowPlayerDialog(playerid, DIALOG_RULES, DIALOG_STYLE_MSGBOX, "\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430", "- \u041D\u0435\u0442 \u0447\u0438\u0442\u0430\u043C!\\n- \u041D\u0435 \u0441\u043F\u0430\u043C\u0438\u0442\u044C\\n- \u0423\u0432\u0430\u0436\u0430\u0442\u044C \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438\\n\\n\u0412\u044B \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u0430?", "\u0414\u0430", "\u041D\u0435\u0442");\n\npublic OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])\n{\n    if (dialogid == DIALOG_RULES)\n    {\n        if (response) // \u0415\u0441\u043B\u0438 \u0438\u0433\u0440\u043E\u043A \u043D\u0430\u0436\u0430\u043B \u043D\u0430 \'\u0414\u0430\' \u0438\u043B\u0438 \u043D\u0430\u0436\u0430\u043B Enter\n        {\n            SendClientMessage(playerid, COLOR_GREEN, "Thank you for agreeing to the server rules!");\n        }\n        else // \u0415\u0441\u043B\u0438 \u0438\u0433\u0440\u043E\u043A \u043D\u0430\u0436\u0430\u043B \u043D\u0430 \'\u041D\u0435\u0442\' \u0438\u043B\u0438 \u043D\u0430\u0436\u0430\u043B Esc\n        {\n            Kick(playerid);\n        }\n        return 1; // \u041C\u044B \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0430\u043B\u0438 \u0434\u0438\u0430\u043B\u043E\u0433, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043C 1. \u041F\u0440\u044F\u043C\u043E \u043A\u0430\u043A \u0432 OnPlayerCommandText.\n    }\n\n    return 0; // \u0412\u044B \u0414\u041E\u041B\u0416\u041D\u042B \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044C 0 \u0437\u0434\u0435\u0441\u044C! \u041F\u0440\u044F\u043C\u043E \u043A\u0430\u043A \u0432 OnPlayerCommandText.\n}\n\n#define DIALOG_LOGIN 2\n\n// \u0412 \u043A\u0430\u043A\u043E\u043C-\u043B\u0438\u0431\u043E \u043C\u0435\u0441\u0442\u0435 \u043A\u043E\u0434\u0430\nShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u043F\u0430\u0440\u043E\u043B\u044C:", "\u0412\u043E\u0439\u0442\u0438", "\u041E\u0442\u043C\u0435\u043D\u0430");\n\npublic OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])\n{\n    if (dialogid == DIALOG_LOGIN)\n    {\n        if (!response) // \u0415\u0441\u043B\u0438 \u0438\u0433\u0440\u043E\u043A \u043D\u0430\u0436\u0430\u043B \'\u041E\u0442\u043C\u0435\u043D\u0430\' \u0438\u043B\u0438 Esc\n        {\n            Kick(playerid);\n        }\n        else // \u0415\u0441\u043B\u0438 \u0438\u0433\u0440\u043E\u043A \u043D\u0430\u0436\u0430\u043B \'\u0412\u043E\u0439\u0442\u0438\' \u0438\u043B\u0438 Enter\n        {\n            if (CheckPassword(playerid, inputtext))\n            {\n                SendClientMessage(playerid, COLOR_RED, "\u0412\u044B \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u043B\u0438\u0441\u044C!");\n            }\n            else\n            {\n                SendClientMessage(playerid, COLOR_RED, "\u041D\u0415 \u0423\u0414\u0410\u041B\u041E\u0421\u042C \u0410\u0412\u0422\u041E\u0420\u0418\u0417\u041E\u0412\u0410\u0422\u042C\u0421\u042F.");\n\n                // \u041F\u043E\u043A\u0430\u0437 \u0434\u0438\u0430\u043B\u043E\u0433\u0430 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u0437\u0430\u043D\u043E\u0432\u043E\n                ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u043F\u0430\u0440\u043E\u043B\u044C:", "\u0412\u043E\u0439\u0442\u0438", "\u041E\u0442\u043C\u0435\u043D\u0430");\n            }\n        }\n        return 1; // \u041C\u044B \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0430\u043B\u0438 \u0434\u0438\u0430\u043B\u043E\u0433, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043C 1. \u041F\u0440\u044F\u043C\u043E \u043A\u0430\u043A \u0432 OnPlayerCommandText.\n    }\n\n    return 0; // \u0412\u044B \u0414\u041E\u041B\u0416\u041D\u042B \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044C 0 \u0437\u0434\u0435\u0441\u044C! \u041F\u0440\u044F\u043C\u043E \u043A\u0430\u043A \u0432 OnPlayerCommandText.\n}\n#define DIALOG_WEAPONS 3\n\n// In some command\nShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_LIST, "\u041E\u0440\u0443\u0436\u0438\u0435", "Desert Eagle\\nAK-47\\n\u0411\u043E\u0435\u0432\u043E\u0439 \u0434\u0440\u043E\u0431\u043E\u0432\u0438\u043A", "\u0412\u044B\u0431\u0440\u0430\u0442\u044C", "\u0417\u0430\u043A\u0440\u044B\u0442\u044C");\n\npublic OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])\n{\n    if (dialogid == DIALOG_WEAPONS)\n    {\n        if (response) // \u0415\u0441\u043B\u0438 \u0438\u0433\u0440\u043E\u043A \u043D\u0430\u0436\u0430\u043B \'\u0412\u044B\u0431\u0440\u0430\u0442\u044C\' \u0438\u043B\u0438 \u0441\u0434\u0435\u043B\u0430\u043B \u0434\u0432\u043E\u0439\u043D\u043E\u0439 \u043A\u043B\u0438\u043A \u043F\u043E \u043E\u0440\u0443\u0436\u0438\u044E\n        {\n            // \u0412\u044B\u0434\u0430\u0451\u043C \u0435\u043C\u0443 \u043E\u0440\u0443\u0436\u0438\u0435\n            switch(listitem)\n            {\n                case 0: GivePlayerWeapon(playerid, WEAPON_DEAGLE, 14); // \u0412\u044B\u0434\u0430\u0451\u043C desert eagle\n                case 1: GivePlayerWeapon(playerid, WEAPON_AK47, 120); // \u0412\u044B\u0434\u0430\u0451\u043C AK-47\n                case 2: GivePlayerWeapon(playerid, WEAPON_SHOTGSPA, 28); // \u0412\u044B\u0434\u0430\u0451\u043C \u0411\u043E\u0435\u0432\u043E\u0439 \u0434\u0440\u043E\u0431\u043E\u0432\u0438\u043A\n            }\n        }\n        return 1; // \u041C\u044B \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0430\u043B\u0438 \u0434\u0438\u0430\u043B\u043E\u0433, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043C 1. \u041F\u0440\u044F\u043C\u043E \u043A\u0430\u043A \u0432 OnPlayerCommandText.\n    }\n\n    return 0;// \u0412\u044B \u0414\u041E\u041B\u0416\u041D\u042B \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044C 0 \u0437\u0434\u0435\u0441\u044C! \u041F\u0440\u044F\u043C\u043E \u043A\u0430\u043A \u0432 OnPlayerCommandText.\n}\n#define DIALOG_WEAPONS 3\n\n// In some command\nShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_LIST, "Weapons",\n"Weapon\\tAmmo\\tPrice\\n\\\nM4\\t120\\t500\\n\\\nMP5\\t90\\t350\\n\\\nAK-47\\t120\\t400",\n"\u0412\u044B\u0431\u0440\u0430\u0442\u044C", "\u0417\u0430\u043A\u0440\u044B\u0442\u044C");\n\npublic OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])\n{\n    if (dialogid == DIALOG_WEAPONS)\n    {\n        if (response) // \u0415\u0441\u043B\u0438 \u0438\u0433\u0440\u043E\u043A \u043D\u0430\u0436\u0430\u043B \'\u0412\u044B\u0431\u0440\u0430\u0442\u044C\' \u0438\u043B\u0438 \u0441\u0434\u0435\u043B\u0430\u043B \u0434\u0432\u043E\u0439\u043D\u043E\u0439 \u043A\u043B\u0438\u043A \u043F\u043E \u043E\u0440\u0443\u0436\u0438\u044E\n        {\n            // \u0412\u044B\u0434\u0430\u0451\u043C \u0435\u043C\u0443 \u043E\u0440\u0443\u0436\u0438\u0435\n            switch(listitem)\n            {\n                case 0: GivePlayerWeapon(playerid, WEAPON_M4, 120); // \u0412\u044B\u0434\u0430\u0451\u043C M4\n                case 1: GivePlayerWeapon(playerid, WEAPON_MP5, 90); // \u0412\u044B\u0434\u0430\u0451\u043C MP5\n                case 2: GivePlayerWeapon(playerid, WEAPON_AK47, 120); // \u0412\u044B\u0434\u0430\u0451\u043C AK-47\n            }\n        }\n        return 1; // \u041C\u044B \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0430\u043B\u0438 \u0434\u0438\u0430\u043B\u043E\u0433, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043C 1. \u041F\u0440\u044F\u043C\u043E \u043A\u0430\u043A \u0432 OnPlayerCommandText.\n    }\n\n    return 0; // \u0412\u044B \u0414\u041E\u041B\u0416\u041D\u042B \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044C 0 \u0437\u0434\u0435\u0441\u044C! \u041F\u0440\u044F\u043C\u043E \u043A\u0430\u043A \u0432 OnPlayerCommandText.\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u043F\u0440\u0438\u043C\u0435\u0447\u0430\u043D\u0438\u044F",children:"\u041F\u0440\u0438\u043C\u0435\u0447\u0430\u043D\u0438\u044F"}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsxs)(n.p,{children:["\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u043C\u043E\u0433\u0443\u0442 \u043E\u0442\u043B\u0438\u0447\u0430\u0442\u044C\u0441\u044F \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438 \u043E\u0442 \u0441\u0442\u0438\u043B\u044F \u0434\u0438\u0430\u043B\u043E\u0433\u0430 (",(0,l.jsx)(n.a,{href:"../resources/dialogstyles.md",children:"\u0441\u043C. \u0431\u043E\u043B\u044C\u0448\u0435 \u043F\u0440\u0438\u043C\u0435\u0440\u043E\u0432"}),")."]})}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsx)(n.p,{children:"\u042D\u0442\u043E \u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u043E \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0430\u0442\u044C\u0441\u044F \u043C\u0435\u0436\u0434\u0443 \u0434\u0438\u0430\u043B\u043E\u0433\u0430\u043C\u0438, \u0435\u0441\u043B\u0438 \u0443 \u0432\u0430\u0441 \u0438\u0445 \u043C\u043D\u043E\u0433\u043E."})}),"\n",(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsx)(n.p,{children:'\u0414\u0438\u0430\u043B\u043E\u0433, \u043F\u043E\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0439 \u0438\u0433\u0440\u043E\u043A\u0443, \u043D\u0435 \u0441\u043A\u0440\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u0440\u0435\u0441\u0442\u0430\u0440\u0442\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u0447\u0442\u043E \u043F\u0440\u0438\u0432\u043E\u0434\u0438\u0442 \u043A \u043F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u044E: "Warning: PlayerDialogResponse PlayerId: 0 dialog ID doesn\'t match last sent dialog ID" if a player responded to this dialog after restart."'})}),"\n",(0,l.jsx)(n.h2,{id:"\u0444\u0443\u043D\u043A\u0446\u0438\u0438",children:"\u0424\u0443\u043D\u043A\u0446\u0438\u0438"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/ShowPlayerDialog.md",children:"ShowPlayerDialog"}),": \u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0434\u0438\u0430\u043B\u043E\u0433 \u0438\u0433\u0440\u043E\u043A\u0443."]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return s}});var t=i(67294);let l={},r=t.createContext(l);function s(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);