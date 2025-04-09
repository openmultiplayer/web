"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["18555"],{75023:function(e,a,t){t.r(a),t.d(a,{default:()=>d,frontMatter:()=>l,metadata:()=>n,assets:()=>s,toc:()=>o,contentTitle:()=>c});var n=JSON.parse('{"id":"scripting/callbacks/OnPlayerUpdate","title":"OnPlayerUpdate","description":"Acest callback este apelat de fiecare dat\u0103 c\xe2nd un client/juc\u0103tor actualizeaz\u0103 serverul cu starea lor.","source":"@site/i18n/ro/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerUpdate.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerUpdate","permalink":"/ro/docs/scripting/callbacks/OnPlayerUpdate","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerUpdate.md","tags":[{"inline":true,"label":"player","permalink":"/ro/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerUpdate","sidebar_label":"OnPlayerUpdate","description":"Acest callback este apelat de fiecare dat\u0103 c\xe2nd un client/juc\u0103tor actualizeaz\u0103 serverul cu starea lor.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerText","permalink":"/ro/docs/scripting/callbacks/OnPlayerText"},"next":{"title":"OnPlayerWeaponShot","permalink":"/ro/docs/scripting/callbacks/OnPlayerWeaponShot"}}'),r=t("85893"),i=t("50065");let l={title:"OnPlayerUpdate",sidebar_label:"OnPlayerUpdate",description:"Acest callback este apelat de fiecare dat\u0103 c\xe2nd un client/juc\u0103tor actualizeaz\u0103 serverul cu starea lor.",tags:["player"]},c=void 0,s={},o=[{value:"Descriere",id:"descriere",level:2},{value:"Return\u0103ri",id:"return\u0103ri",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Note",id:"note",level:2},{value:"Func\u021Bii similare",id:"func\u021Bii-similare",level:2}];function u(e){let a={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components},{TipNPCCallbacks:t}=a;return t||function(e,a){throw Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("TipNPCCallbacks",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h2,{id:"descriere",children:"Descriere"}),"\n",(0,r.jsx)(a.p,{children:"Acest callback este apelat de fiecare dat\u0103 c\xe2nd un client/juc\u0103tor actualizeaz\u0103 serverul cu starea lor. Este adesea folosit pentru a crea apeluri personalizate pentru actualiz\u0103rile clientului care nu sunt urm\u0103rite activ de server, cum ar fi actualiz\u0103rile de s\u0103n\u0103tate sau armuri sau juc\u0103torii care schimb\u0103 arme."}),"\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:"Name"}),(0,r.jsx)(a.th,{children:"Descriere"})]})}),(0,r.jsx)(a.tbody,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"playerid"}),(0,r.jsx)(a.td,{children:"ID-ul juc\u0103torului care trimite un pachet de actualizare."})]})})]}),"\n",(0,r.jsx)(a.h2,{id:"return\u0103ri",children:"Return\u0103ri"}),"\n",(0,r.jsx)(a.p,{children:"0 - Actualizarea de la acest player nu va fi replicat\u0103 altor clien\u021Bi."}),"\n",(0,r.jsx)(a.p,{children:"1 - Indic\u0103 faptul c\u0103 aceast\u0103 actualizare poate fi procesat\u0103 normal \u0219i trimis\u0103 altor juc\u0103tori."}),"\n",(0,r.jsx)(a.p,{children:"Este \xeentotdeauna numit primul \xeen filterscript-uri."}),"\n",(0,r.jsx)(a.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-c",children:'public OnPlayerUpdate(playerid)\n{\n    nou iCurWeap = GetPlayerWeapon(playerid); // Returneaz\u0103 arma curent\u0103 a juc\u0103torului\n    if (iCurWeap != GetPVarInt(playerid, "iCurrentWeapon")) // Dac\u0103 a schimbat armele de la ultima actualizare\n    {\n        // S\u0103 apel\u0103m un apel invers numit OnPlayerChangeWeapon\n        OnPlayerChangeWeapon(playerid, GetPVarInt(playerid, "iCurrentWeapon"), iCurWeap);\n        SetPVarInt(playerid, "iCurrentWeapon", iCurWeap);//Actualizeaz\u0103 variabila arm\u0103\n    }\n    return 1; // Trimite aceast\u0103 actualizare altor juc\u0103tori.\n}\n\nstock OnPlayerChangeWeapon(playerid, oldweapon, newweapon)\n{\n    new     s[128],\n        oWeapon[24],\n        nWeapon[24];\n\n    GetWeaponName(oldweapon, oWeapon, sizeof(oWeapon));\n    GetWeaponName(newweapon, nWeapon, sizeof(nWeapon));\n\n    format(s, sizeof(s), "Ai schimbat arma din %s \xeen %s!", oWeapon, nWeapon);\n\n    SendClientMessage(playerid, 0xFFFFFFFF, s);\n}\npublic OnPlayerUpdate(playerid)\n{\n    nou Float:fHealth;\n\n    GetPlayerHealth(playerid, fHealth);\n\n    if (fHealth != GetPVarFloat(playerid, "faPlayerHealth"))\n    {\n        // S\u0103n\u0103tatea juc\u0103torului s-a schimbat de la ultima actualizare -> server, a\u0219a c\u0103, evident, acesta este lucrul actualizat.\n        // S\u0103 facem verific\u0103ri suplimentare s\u0103 vedem dac\u0103 \u0219i-a pierdut sau a c\xe2\u0219tigat s\u0103n\u0103tatea, tri\u0219are anti-s\u0103n\u0103tate? ;)\n\n        if (fHealth > GetPVarFloat(playerid, "faPlayerHealth"))\n        {\n            /* A c\u0103p\u0103tat s\u0103n\u0103tate! \xcen\u0219el\u0103ciune? Scrie-\u021Bi propriile scripturi aici pentru a-\u021Bi da seama cum este un juc\u0103tor\n            a castigat sanatate! */\n        }\n        else\n        {\n            /* A pierdut s\u0103n\u0103tatea! */\n        }\n\n        SetPVarFloat(playerid, "faPlayerHealth", fHealth);\n    }\n}\n'})}),"\n",(0,r.jsx)(a.h2,{id:"note",children:"Note"}),"\n",(0,r.jsx)(t,{}),"\n",(0,r.jsx)(a.admonition,{type:"warning",children:(0,r.jsx)(a.p,{children:"Acest callback este apelat, \xeen medie, de 30 de ori pe secund\u0103, per juc\u0103tor; folose\u0219te-l doar atunci c\xe2nd \u0219tii la ce este destinat (sau mai important pentru ce NU este destinat). Frecven\u021Ba cu care acest apel invers este apelat pentru fiecare juc\u0103tor variaz\u0103, \xeen func\u021Bie de ceea ce face juc\u0103torul. Conducerea sau fotografierea va declan\u0219a mult mai multe actualiz\u0103ri dec\xe2t la ralanti."})}),"\n",(0,r.jsx)(a.h2,{id:"func\u021Bii-similare",children:"Func\u021Bii similare"})]})}function d(e={}){let{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},50065:function(e,a,t){t.d(a,{Z:function(){return c},a:function(){return l}});var n=t(67294);let r={},i=n.createContext(r);function l(e){let a=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(i.Provider,{value:a},e.children)}}}]);