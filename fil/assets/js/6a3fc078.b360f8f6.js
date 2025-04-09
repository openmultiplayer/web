"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["76090"],{60135:function(e,n,a){a.r(n),a.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>t,assets:()=>c,toc:()=>o,contentTitle:()=>s});var t=JSON.parse('{"id":"scripting/functions/GetPlayerState","title":"GetPlayerState","description":"Kunin ang kasalukuyang estado ng isang manlalaro.","source":"@site/i18n/fil/docusaurus-plugin-content-docs/current/scripting/functions/GetPlayerState.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerState","permalink":"/fil/docs/scripting/functions/GetPlayerState","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerState.md","tags":[{"inline":true,"label":"player","permalink":"/fil/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerState","sidebar_label":"GetPlayerState","description":"Kunin ang kasalukuyang estado ng isang manlalaro.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerSpectateType","permalink":"/fil/docs/scripting/functions/GetPlayerSpectateType"},"next":{"title":"GetPlayerSurfingObjectID","permalink":"/fil/docs/scripting/functions/GetPlayerSurfingObjectID"}}'),i=a("85893"),r=a("50065");let l={title:"GetPlayerState",sidebar_label:"GetPlayerState",description:"Kunin ang kasalukuyang estado ng isang manlalaro.",tags:["player"]},s=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Kunin ang kasalukuyang estado ng isang manlalaro."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"playerid"}),(0,i.jsx)(n.td,{children:"Ang ID ng player para makuha ang kasalukuyang estado."})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:["Ang kasalukuyang estado ng manlalaro bilang isang integer (tingnan ang: ",(0,i.jsx)(n.a,{href:"../resources/playerstates",children:"Player States"}),")."]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"public OnPlayerDeath(playerid, killerid, WEAPON:reason)\n{\n    new playerState = GetPlayerState(killerid); // Kunin ang estado ng pumatay\n\n    if (playerState == PLAYER_STATE_DRIVER) // Kung ang pumatay ay nasa sasakyan\n    {\n        // Ito ay isang driver drive-by, kumuha ng pera\n        GivePlayerMoney(killerid, -10000);\n    }\n    return 1;\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"GetPlayerSpecialAction",children:"GetPlayerSpecialAction"}),": Kunin ang kasalukuyang special action ng manlalaro."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"SetPlayerSpecialAction",children:"SetPlayerSpecialAction"}),": Magtakda ng special action ng manlalaro."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../callbacks/OnPlayerStateChange",children:"OnPlayerStateChange"}),": Tinatawag kapag binago ng player ang estado."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,n,a){a.d(n,{Z:function(){return s},a:function(){return l}});var t=a(67294);let i={},r=t.createContext(i);function l(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);