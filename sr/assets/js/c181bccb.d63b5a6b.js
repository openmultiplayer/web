"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["28936"],{82266:function(e,n,i){i.r(n),i.d(n,{default:()=>p,frontMatter:()=>a,metadata:()=>l,assets:()=>o,toc:()=>d,contentTitle:()=>t});var l=JSON.parse('{"id":"scripting/callbacks/OnDialogResponse","title":"OnDialogResponse","description":"\u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043A\u0430\u0434\u0430 \u0438\u0433\u0440\u0430\u0447 \u043E\u0434\u0433\u043E\u0432\u043E\u0440\u0438 \u043D\u0430 \u0434\u0438\u0458\u0430\u043B\u043E\u0433 \u043A\u043E\u0458\u0438 \u0458\u0435 \u043F\u0440\u0438\u043A\u0430\u0437\u0430\u043D \u043A\u043E\u0440\u0438\u0448\u045B\u0435\u045A\u0435\u043C ShowPlayerDialog, \u0431\u0438\u043B\u043E \u0434\u0430 \u043A\u043B\u0438\u043A\u043D\u0435 \u043D\u0430 \u0434\u0443\u0433\u043C\u0435, \u043F\u0440\u0438\u0442\u0438\u0441\u043D\u0435 ENTER/ESC, \u0438\u043B\u0438 \u0434\u0432\u043E\u0441\u0442\u0440\u0443\u043A\u043E \u043A\u043B\u0438\u043A\u043D\u0435 \u043D\u0430 \u0441\u0442\u0430\u0432\u043A\u0443 \u043B\u0438\u0441\u0442\u0435 (\u0430\u043A\u043E \u043A\u043E\u0440\u0438\u0441\u0442\u0438\u0442\u0435 \u0434\u0438\u0458\u0430\u043B\u043E\u0433 \u0441\u0442\u0438\u043Ba \u043B\u0438\u0441\u0442\u0435).","source":"@site/i18n/sr/docusaurus-plugin-content-docs/current/scripting/callbacks/OnDialogResponse.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnDialogResponse","permalink":"/sr/docs/scripting/callbacks/OnDialogResponse","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnDialogResponse.md","tags":[{"inline":true,"label":"dialog","permalink":"/sr/docs/tags/dialog"}],"version":"current","frontMatter":{"title":"OnDialogResponse","sidebar_label":"OnDialogResponse","description":"\u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043A\u0430\u0434\u0430 \u0438\u0433\u0440\u0430\u0447 \u043E\u0434\u0433\u043E\u0432\u043E\u0440\u0438 \u043D\u0430 \u0434\u0438\u0458\u0430\u043B\u043E\u0433 \u043A\u043E\u0458\u0438 \u0458\u0435 \u043F\u0440\u0438\u043A\u0430\u0437\u0430\u043D \u043A\u043E\u0440\u0438\u0448\u045B\u0435\u045A\u0435\u043C ShowPlayerDialog, \u0431\u0438\u043B\u043E \u0434\u0430 \u043A\u043B\u0438\u043A\u043D\u0435 \u043D\u0430 \u0434\u0443\u0433\u043C\u0435, \u043F\u0440\u0438\u0442\u0438\u0441\u043D\u0435 ENTER/ESC, \u0438\u043B\u0438 \u0434\u0432\u043E\u0441\u0442\u0440\u0443\u043A\u043E \u043A\u043B\u0438\u043A\u043D\u0435 \u043D\u0430 \u0441\u0442\u0430\u0432\u043A\u0443 \u043B\u0438\u0441\u0442\u0435 (\u0430\u043A\u043E \u043A\u043E\u0440\u0438\u0441\u0442\u0438\u0442\u0435 \u0434\u0438\u0458\u0430\u043B\u043E\u0433 \u0441\u0442\u0438\u043Ba \u043B\u0438\u0441\u0442\u0435).","tags":["dialog"]},"sidebar":"docsSidebar","previous":{"title":"OnClientMessage","permalink":"/sr/docs/scripting/callbacks/OnClientMessage"},"next":{"title":"OnEnterExitModShop","permalink":"/sr/docs/scripting/callbacks/OnEnterExitModShop"}}'),s=i("85893"),r=i("50065");let a={title:"OnDialogResponse",sidebar_label:"OnDialogResponse",description:"\u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043A\u0430\u0434\u0430 \u0438\u0433\u0440\u0430\u0447 \u043E\u0434\u0433\u043E\u0432\u043E\u0440\u0438 \u043D\u0430 \u0434\u0438\u0458\u0430\u043B\u043E\u0433 \u043A\u043E\u0458\u0438 \u0458\u0435 \u043F\u0440\u0438\u043A\u0430\u0437\u0430\u043D \u043A\u043E\u0440\u0438\u0448\u045B\u0435\u045A\u0435\u043C ShowPlayerDialog, \u0431\u0438\u043B\u043E \u0434\u0430 \u043A\u043B\u0438\u043A\u043D\u0435 \u043D\u0430 \u0434\u0443\u0433\u043C\u0435, \u043F\u0440\u0438\u0442\u0438\u0441\u043D\u0435 ENTER/ESC, \u0438\u043B\u0438 \u0434\u0432\u043E\u0441\u0442\u0440\u0443\u043A\u043E \u043A\u043B\u0438\u043A\u043D\u0435 \u043D\u0430 \u0441\u0442\u0430\u0432\u043A\u0443 \u043B\u0438\u0441\u0442\u0435 (\u0430\u043A\u043E \u043A\u043E\u0440\u0438\u0441\u0442\u0438\u0442\u0435 \u0434\u0438\u0458\u0430\u043B\u043E\u0433 \u0441\u0442\u0438\u043Ba \u043B\u0438\u0441\u0442\u0435).",tags:["dialog"]},t=void 0,o={},d=[{value:"\u041E\u043F\u0438\u0441",id:"\u043E\u043F\u0438\u0441",level:2},{value:"\u0412\u0440\u0430\u045B\u0430",id:"\u0432\u0440\u0430\u045B\u0430",level:2},{value:"\u041F\u0440\u0438\u043C\u0435\u0440\u0438",id:"\u043F\u0440\u0438\u043C\u0435\u0440\u0438",level:2},{value:"\u041F\u0440\u0438\u043C\u0435\u0440\u0438",id:"\u043F\u0440\u0438\u043C\u0435\u0440\u0438-1",level:2},{value:"\u041F\u043E\u0432\u0435\u0437\u0430\u043D\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435",id:"\u043F\u043E\u0432\u0435\u0437\u0430\u043D\u0435-\u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u043E\u043F\u0438\u0441",children:"\u041E\u043F\u0438\u0441"}),"\n",(0,s.jsxs)(n.p,{children:["\u041E\u0432\u0430 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0430 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0430 \u0441\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043A\u0430\u0434\u0430 \u0438\u0433\u0440\u0430\u0447 \u043E\u0434\u0433\u043E\u0432\u043E\u0440\u0438 \u043D\u0430 \u0434\u0438\u0458\u0430\u043B\u043E\u0433 \u043A\u043E\u0458\u0438 \u0458\u0435 \u043F\u0440\u0438\u043A\u0430\u0437\u0430\u043D \u043A\u043E\u0440\u0438\u0448\u045B\u0435\u045A\u0435\u043C ",(0,s.jsx)(n.code,{children:"ShowPlayerDialog"}),", \u0431\u0438\u043B\u043E \u0434\u0430 \u043A\u043B\u0438\u043A\u043D\u0435 \u043D\u0430 \u0434\u0443\u0433\u043C\u0435, \u043F\u0440\u0438\u0442\u0438\u0441\u043D\u0435 ENTER/ESC, \u0438\u043B\u0438 \u0434\u0432\u043E\u0441\u0442\u0440\u0443\u043A\u043E \u043A\u043B\u0438\u043A\u043D\u0435 \u043D\u0430 \u0441\u0442\u0430\u0432\u043A\u0443 \u043B\u0438\u0441\u0442\u0435 (\u0430\u043A\u043E \u043A\u043E\u0440\u0438\u0441\u0442\u0438\u0442\u0435 \u0434\u0438\u0458\u0430\u043B\u043E\u0433 \u0441\u0442\u0438\u043Ba \u043B\u0438\u0441\u0442\u0435)."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u0418\u043C\u0435"}),(0,s.jsx)(n.th,{children:"\u041E\u043F\u0438\u0441"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"playerid"}),(0,s.jsx)(n.td,{children:"ID \u0438\u0433\u0440\u0430\u0447\u0430 \u043A\u043E\u0458\u0438 \u043E\u0434\u0433\u043E\u0432\u0430\u0440\u0430 \u043D\u0430 \u0434\u0438\u0458\u0430\u043B\u043E\u0433."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"dialogid"}),(0,s.jsx)(n.td,{children:"ID \u0434\u0438\u0458\u0430\u043B\u043E\u0433\u0430 \u043D\u0430 \u043A\u043E\u0458\u0438 \u0458\u0435 \u0438\u0433\u0440\u0430\u0447 \u043E\u0434\u0433\u043E\u0432\u043E\u0440\u0438\u043E, \u0434\u043E\u0434\u0435\u0459\u0435\u043D \u0443 ShowPlayerDialog."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"response"}),(0,s.jsx)(n.td,{children:"1 \u0437\u0430 \u043B\u0435\u0432\u0438 \u0434\u0443\u0433\u043C\u0435 \u0438 0 \u0437\u0430 \u0434\u0435\u0441\u043D\u043E \u0434\u0443\u0433\u043C\u0435 (\u0430\u043A\u043E \u0458\u0435 \u043F\u0440\u0438\u043A\u0430\u0437\u0430\u043D \u0441\u0430\u043C\u043E \u0458\u0435\u0434\u0430\u043D \u0434\u0443\u0433\u043C\u0435, \u0443\u0432\u0435\u043A 1)."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"listitem"}),(0,s.jsx)(n.td,{children:"ID \u0441\u0442\u0430\u0432\u043A\u0435 \u043B\u0438\u0441\u0442\u0435 \u043A\u043E\u0458\u0443 \u0458\u0435 \u0438\u0433\u0440\u0430\u0447 \u0438\u0437\u0430\u0431\u0440\u0430\u043E (\u043F\u043E\u0447\u0438\u045A\u0435 \u043E\u0434 0) (\u0441\u0430\u043C\u043E \u0430\u043A\u043E \u0441\u0435 \u043A\u043E\u0440\u0438\u0441\u0442\u0438 \u0434\u0438\u0458\u0430\u043B\u043E\u0433 \u0441\u0442\u0438\u043Ba \u043B\u0438\u0441\u0442\u0435, \u0443 \u0441\u0443\u043F\u0440\u043E\u0442\u043D\u043E\u043C \u045B\u0435 \u0431\u0438\u0442\u0438 -1)."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"inputtext[]"}),(0,s.jsx)(n.td,{children:"\u0422\u0435\u043A\u0441\u0442 \u043A\u043E\u0458\u0438 \u0458\u0435 \u0438\u0433\u0440\u0430\u0447 \u0443\u043D\u0435\u043E \u0443 \u0443\u043B\u0430\u0437\u043D\u043E \u043F\u043E\u0459\u0435 \u0438\u043B\u0438 \u0442\u0435\u043A\u0441\u0442 \u0438\u0437\u0430\u0431\u0440\u0430\u043D\u0435 \u0441\u0442\u0430\u0432\u043A\u0435 \u043B\u0438\u0441\u0442\u0435."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u0432\u0440\u0430\u045B\u0430",children:"\u0412\u0440\u0430\u045B\u0430"}),"\n",(0,s.jsx)(n.p,{children:"\u0423\u0432\u0435\u043A \u0441\u0435 \u043F\u043E\u0437\u0438\u0432\u0430 \u043F\u0440\u0432\u0430 \u0443 \u0444\u0438\u043B\u0442\u0435\u0440 \u0441\u043A\u0440\u0438\u043F\u0442\u0430\u043C\u0430, \u043F\u0430 \u0432\u0440\u0430\u045B\u0430\u045A\u0435 1 \u0442\u0430\u043C\u043E \u0431\u043B\u043E\u043A\u0438\u0440\u0430 \u0434\u0440\u0443\u0433\u0435 \u0444\u0438\u043B\u0442\u0435\u0440 \u0441\u043A\u0440\u0438\u043F\u0442\u0435 \u043E\u0434 \u043F\u0440\u0438\u043C\u0430\u045A\u0430 \u0442\u0435 \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435."}),"\n",(0,s.jsx)(n.h2,{id:"\u043F\u0440\u0438\u043C\u0435\u0440\u0438",children:"\u041F\u0440\u0438\u043C\u0435\u0440\u0438"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"DIALOG_STYLE_MSGBOX"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'// \u0414\u0435\u0444\u0438\u043D\u0438\u0448\u0438\u0442\u0435 ID \u0434\u0438\u0458\u0430\u043B\u043E\u0433\u0430 \u043A\u0430\u043A\u043E \u0431\u0438\u0441\u043C\u043E \u043C\u043E\u0433\u043B\u0438 \u0434\u0430 \u043E\u0431\u0440\u0430\u0434\u0438\u043C\u043E \u043E\u0434\u0433\u043E\u0432\u043E\u0440\u0435.\n#define DIALOG_RULES 1\n\n// \u0423 \u043D\u0435\u043A\u043E\u0458 \u043A\u043E\u043C\u0430\u043D\u0434\u0438\nShowPlayerDialog(playerid, DIALOG_RULES, DIALOG_STYLE_MSGBOX, "Server Rules", "- No Cheating\\n- No Spamming\\n- Respect Admins\\n\\nDo you agree to these rules?", "Yes", "No");\n\npublic OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])\n{\n    if (dialogid == DIALOG_RULES)\n    {\n        if (response) // \u0410\u043A\u043E \u0441\u0443 \u043A\u043B\u0438\u043A\u043D\u0443\u043B\u0438 \u043D\u0430 \'\u0414\u0430\' \u0438\u043B\u0438 \u043F\u0440\u0438\u0442\u0438\u0441\u043D\u0443\u043B\u0438 ENTER\n        {\n            SendClientMessage(playerid, COLOR_GREEN, "Thank you for agreeing to the server rules!");\n        }\n        else // \u041F\u0440\u0438\u0442\u0438\u0441\u043D\u0443\u043B\u0438 ESC \u0438\u043B\u0438 \u043A\u043B\u0438\u043A\u043D\u0443\u043B\u0438 \u043D\u0430 \u043E\u0442\u043A\u0430\u0437\u0438\u0432\u0430\u045A\u0435\n        {\n            Kick(playerid);\n        }\n        return 1; // \u041E\u0431\u0440\u0430\u0434\u0438\u043B\u0438 \u0441\u043C\u043E \u0434\u0438\u0458\u0430\u043B\u043E\u0433, \u043F\u0430 \u0432\u0440\u0430\u0442\u0438\u0442\u0435 1. \u0411\u0430\u0448 \u043A\u0430\u043E \u0443 OnPlayerCommandText.\n    }\n\n    return 0; // \u041C\u041E\u0420\u0410\u0422\u0415 \u0432\u0440\u0430\u0442\u0438\u0442\u0438 0 \u043E\u0432\u0434\u0435! \u0411\u0430\u0448 \u043A\u0430\u043E \u0443 OnPlayerCommandText.\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"DIALOG_STYLE_INPUT"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'#define DIALOG_LOGIN 2\n\n// \u0423 \u043D\u0435\u043A\u043E\u0458 \u043A\u043E\u043C\u0430\u043D\u0434\u0438\nShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Login", "Please enter your password:", "Login", "Cancel");\n\npublic OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])\n{\n    if (dialogid == DIALOG_LOGIN)\n    {\n        if (!response) // \u0410\u043A\u043E \u0441\u0443 \u043A\u043B\u0438\u043A\u043D\u0443\u043B\u0438 \u043D\u0430 \'\u041E\u0442\u043A\u0430\u0436\u0438\' \u0438\u043B\u0438 \u043F\u0440\u0438\u0442\u0438\u0441\u043D\u0443\u043B\u0438 ESC\n        {\n            Kick(playerid);\n        }\n        else // \u041F\u0440\u0438\u0442\u0438\u0441\u043D\u0443\u043B\u0438 ENTER \u0438\u043B\u0438 \u043A\u043B\u0438\u043A\u043D\u0443\u043B\u0438 \u043D\u0430 \u0434\u0443\u0433\u043C\u0435 \'\u041F\u0440\u0438\u0458\u0430\u0432\u0438 \u0441\u0435\'\n        {\n            if (CheckPassword(playerid, inputtext))\n            {\n                SendClientMessage(playerid, COLOR_RED, "You are now logged in!");\n            }\n            else\n            {\n                SendClientMessage(playerid, COLOR_RED, "LOGIN FAILED.");\n\n                // \u041F\u043E\u043D\u043E\u0432\u043E \u043F\u0440\u0438\u043A\u0430\u0436\u0438\u0442\u0435 \u0434\u0438\u0458\u0430\u043B\u043E\u0433 \u0437\u0430 \u043F\u0440\u0438\u0458\u0430\u0432\u0443\n                ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Login", "Please enter your password:", "Login", "Cancel");\n            }\n        }\n        return 1; // \u041E\u0431\u0440\u0430\u0434\u0438\u043B\u0438 \u0441\u043C\u043E \u0434\u0438\u0458\u0430\u043B\u043E\u0433, \u043F\u0430 \u0432\u0440\u0430\u0442\u0438\u0442\u0435 1. \u0411\u0430\u0448 \u043A\u0430\u043E \u0443 OnPlayerCommandText.\n    }\n\n    return 0; // \u041C\u041E\u0420\u0410\u0422\u0415 \u0432\u0440\u0430\u0442\u0438\u0442\u0438 0 \u043E\u0432\u0434\u0435! \u0411\u0430\u0448 \u043A\u0430\u043E \u0443 OnPlayerCommandText.\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"DIALOG_STYLE_LIST"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'#define DIALOG_WEAPONS 3\n\n// \u0423 \u043D\u0435\u043A\u043E\u0458 \u043A\u043E\u043C\u0430\u043D\u0434\u0438\nShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_LIST, "Weapons", "Desert Eagle\\nAK-47\\nCombat Shotgun", "Select", "Close");\n\npublic OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])\n{\n    if (dialogid == DIALOG_WEAPONS)\n    {\n        if (response) // \u0410\u043A\u043E \u0441\u0443 \u043A\u043B\u0438\u043A\u043D\u0443\u043B\u0438 \u043D\u0430 \'\u0418\u0437\u0430\u0431\u0435\u0440\u0438\' \u0438\u043B\u0438 \u0434\u0432\u043E\u0441\u0442\u0440\u0443\u043A\u043E \u043A\u043B\u0438\u043A\u043D\u0443\u043B\u0438 \u043D\u0430 \u043E\u0440\u0443\u0436\u0458\u0435\n        {\n            // \u0414\u0430\u0458\u0442\u0435 \u0438\u043C \u043E\u0440\u0443\u0436\u0458\u0435\n            switch (listitem)\n            {\n                case 0:\n                {\n                    GivePlayerWeapon(playerid, WEAPON_DEAGLE, 14); // \u0414\u0430\u0458\u0442\u0435 \u0438\u043C Desert Eagle\n                }\n                case 1:\n                {\n                    GivePlayerWeapon(playerid, WEAPON_AK47, 120); // \u0414\u0430\u0458\u0442\u0435 \u0438\u043C AK-47\n                }\n                case 2:\n                {\n                    GivePlayerWeapon(playerid, WEAPON_SHOTGSPA, 28); // \u0414\u0430\u0458\u0442\u0435 \u0438\u043C Combat Shotgun\n                }\n            }\n        }\n        return 1; // \u041E\u0431\u0440\u0430\u0434\u0438\u043B\u0438 \u0441\u043C\u043E \u0434\u0438\u0458\u0430\u043B\u043E\u0433, \u043F\u0430 \u0432\u0440\u0430\u0442\u0438\u0442\u0435 1. \u0411\u0430\u0448 \u043A\u0430\u043E \u0443 OnPlayerCommandText.\n    }\n\n    return 0; // \u041C\u041E\u0420\u0410\u0422\u0415 \u0432\u0440\u0430\u0442\u0438\u0442\u0438 0 \u043E\u0432\u0434\u0435! \u0411\u0430\u0448 \u043A\u0430\u043E \u0443 OnPlayerCommandText.\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"DIALOG_STYLE_TABLIST"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'#define DIALOG_WEAPONS 3\n\n// \u0423 \u043D\u0435\u043A\u043E\u0458 \u043A\u043E\u043C\u0430\u043D\u0434\u0438\nShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_TABLIST, "Weapons",\n"Weapon\\tAmmo\\tPrice\\n\\\nM4\\t120\\t500\\n\\\nMP5\\t90\\t350\\n\\\nAK-47\\t120\\t400",\n"Select", "Close");\n\npublic OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])\n{\n    if (dialogid == DIALOG_WEAPONS)\n    {\n        if (response) // \u0410\u043A\u043E \u0441\u0443 \u043A\u043B\u0438\u043A\u043D\u0443\u043B\u0438 \u043D\u0430 \'\u0418\u0437\u0430\u0431\u0435\u0440\u0438\' \u0438\u043B\u0438 \u0434\u0432\u043E\u0441\u0442\u0440\u0443\u043A\u043E \u043A\u043B\u0438\u043A\u043D\u0443\u043B\u0438 \u043D\u0430 \u043E\u0440\u0443\u0436\u0458\u0435\n        {\n            // \u0414\u0430\u0458\u0442\u0435 \u0438\u043C \u043E\u0440\u0443\u0436\u0458\u0435\n            switch (listitem)\n            {\n                case 0:\n                {\n                    GivePlayerWeapon(playerid, WEAPON_M4, 120); // \u0414\u0430\u0458\u0442\u0435 \u0438\u043C \u041C4\n                }\n                case 1:\n                {\n                    GivePlayerWeapon(playerid, WEAPON_MP5, 90); // \u0414\u0430\u0458\u0442\u0435 \u0438\u043C \u041C\u041F5\n                }\n                case 2:\n                {\n                    GivePlayerWeapon(playerid, WEAPON_AK47, 120); // \u0414\u0430\u0458\u0442\u0435 \u0438\u043C \u0410\u041A-47\n                }\n            }\n        }\n        return 1; // \u041E\u0431\u0440\u0430\u0434\u0438\u043B\u0438 \u0441\u043C\u043E \u0434\u0438\u0458\u0430\u043B\u043E\u0433, \u043F\u0430 \u0432\u0440\u0430\u0442\u0438\u0442\u0435 1. \u0411\u0430\u0448 \u043A\u0430\u043E \u0443 OnPlayerCommandText.\n    }\n\n    return 0; // \u041C\u041E\u0420\u0410\u0422\u0415 \u0432\u0440\u0430\u0442\u0438\u0442\u0438 0 \u043E\u0432\u0434\u0435! \u0411\u0430\u0448 \u043A\u0430\u043E \u0443 OnPlayerCommandText.\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u043F\u0440\u0438\u043C\u0435\u0440\u0438-1",children:"\u041F\u0440\u0438\u043C\u0435\u0440\u0438"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0438 \u043C\u043E\u0433\u0443 \u0441\u0430\u0434\u0440\u0436\u0430\u0442\u0438 \u0440\u0430\u0437\u043B\u0438\u0447\u0438\u0442\u0435 \u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442\u0438, \u0443 \u0437\u0430\u0432\u0438\u0441\u043D\u043E\u0441\u0442\u0438 \u043E\u0434 \u0441\u0442\u0438\u043B\u0430 \u0434\u0438\u0458\u0430\u043B\u043E\u0433\u0430 (",(0,s.jsx)(n.a,{href:"../resources/dialogstyles",children:"\u043A\u043B\u0438\u043A\u043D\u0438\u0442\u0435 \u0437\u0430 \u0432\u0438\u0448\u0435 \u043F\u0440\u0438\u043C\u0435\u0440\u0430"}),")."]})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"\u041F\u0440\u0435\u043F\u043E\u0440\u0443\u0447\u0459\u0438\u0432\u043E \u0458\u0435 \u0434\u0430 \u043A\u043E\u0440\u0438\u0441\u0442\u0438\u0442\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0443 switch \u0443\u043A\u043E\u043B\u0438\u043A\u043E \u0438\u043C\u0430\u0442\u0435 \u043C\u043D\u043E\u0433\u043E \u0434\u0438\u0458\u0430\u043B\u043E\u0433\u0430."})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:'\u0414\u0438\u0458\u0430\u043B\u043E\u0433 \u0438\u0433\u0440\u0430\u0447\u0430 \u043D\u0435 \u043D\u0435\u0441\u0442\u0430\u0458\u0435 \u043A\u0430\u0434\u0430 \u0441\u0435 \u0433\u0430\u043C\u0435\u043C\u043E\u0434\u0435 \u0440\u0435\u0441\u0442\u0430\u0440\u0442\u0443\u0458\u0435, \u0448\u0442\u043E \u0443\u0437\u0440\u043E\u043A\u0443\u0458\u0435 \u0434\u0430 \u0441\u0435\u0440\u0432\u0435\u0440 \u0438\u0441\u043F\u0438\u0448\u0435 "Warning: PlayerDialogResponse PlayerId: 0 dialog ID doesn\'t match last sent dialog ID" \u0430\u043A\u043E \u0438\u0433\u0440\u0430\u0447 \u043E\u0434\u0433\u043E\u0432\u043E\u0440\u0438 \u043D\u0430 \u043E\u0432\u0430\u0458 \u0434\u0438\u0458\u0430\u043B\u043E\u0433 \u043D\u0430\u043A\u043E\u043D \u0440\u0435\u0441\u0442\u0430\u0440\u0442\u0430.'})}),"\n",(0,s.jsx)(n.h2,{id:"\u043F\u043E\u0432\u0435\u0437\u0430\u043D\u0435-\u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435",children:"\u041F\u043E\u0432\u0435\u0437\u0430\u043D\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435"}),"\n",(0,s.jsx)(n.p,{children:"\u0421\u043B\u0435\u0434\u0435\u045B\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u0435 \u043C\u043E\u0433\u0443 \u0431\u0438\u0442\u0438 \u043A\u043E\u0440\u0438\u0441\u043D\u0435, \u0458\u0435\u0440 \u0441\u0443 \u043D\u0430 \u043D\u0435\u043A\u0438 \u043D\u0430\u0447\u0438\u043D \u043F\u043E\u0432\u0435\u0437\u0430\u043D\u0435 \u0441\u0430 \u043E\u0432\u043E\u043C \u043F\u043E\u0432\u0440\u0430\u0442\u043D\u043E\u043C \u0444\u0443\u043D\u043A\u0446\u0438\u0458\u043E\u043C."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"../functions/ShowPlayerDialog",children:"ShowPlayerDialog"}),": \u041F\u0440\u0438\u043A\u0430\u0436\u0438\u0442\u0435 \u0434\u0438\u0458\u0430\u043B\u043E\u0433 \u0438\u0433\u0440\u0430\u0447\u0443."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"../functions/GetPlayerDialogID",children:"GetPlayerDialogID"}),": \u0414\u043E\u0431\u0438\u0442\u0435 ID \u0434\u0438\u0458\u0430\u043B\u043E\u0433\u0430 \u043A\u043E\u0458\u0438 \u0458\u0435 \u0442\u0440\u0435\u043D\u0443\u0442\u043D\u043E \u043F\u0440\u0438\u043A\u0430\u0437\u0430\u043D \u0438\u0433\u0440\u0430\u0447\u0443."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"../functions/GetPlayerDialogData",children:"GetPlayerDialogData"}),": \u0414\u043E\u0431\u0438\u0442\u0435 \u043F\u043E\u0434\u0430\u0442\u043A\u0435 \u0434\u0438\u0458\u0430\u043B\u043E\u0433\u0430 \u043A\u043E\u0458\u0438 \u0458\u0435 \u0442\u0440\u0435\u043D\u0443\u0442\u043D\u043E \u043F\u0440\u0438\u043A\u0430\u0437\u0430\u043D \u0438\u0433\u0440\u0430\u0447\u0443."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"../functions/HidePlayerDialog",children:"HidePlayerDialog"}),": \u0421\u043A\u0440\u0438\u0458\u0442\u0435 \u0434\u0438\u0458\u0430\u043B\u043E\u0433 \u043A\u043E\u0458\u0438 \u0458\u0435 \u0442\u0440\u0435\u043D\u0443\u0442\u043D\u043E \u043F\u0440\u0438\u043A\u0430\u0437\u0430\u043D \u0438\u0433\u0440\u0430\u0447\u0443."]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return t},a:function(){return a}});var l=i(67294);let s={},r=l.createContext(s);function a(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);