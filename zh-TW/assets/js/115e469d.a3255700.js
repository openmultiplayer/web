"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["1725"],{53852:function(e,a,r){r.r(a),r.d(a,{default:()=>c,frontMatter:()=>s,metadata:()=>n,assets:()=>o,toc:()=>h,contentTitle:()=>i});var n=JSON.parse('{"id":"scripting/functions/ShowPlayerNameTagForPlayer","title":"ShowPlayerNameTagForPlayer","description":"This functions allows you to toggle the drawing of player nametags, healthbars and armor bars which display above their head.","source":"@site/docs/scripting/functions/ShowPlayerNameTagForPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/ShowPlayerNameTagForPlayer","permalink":"/zh-TW/docs/scripting/functions/ShowPlayerNameTagForPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/ShowPlayerNameTagForPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/zh-TW/docs/tags/player"}],"version":"current","frontMatter":{"title":"ShowPlayerNameTagForPlayer","sidebar_label":"ShowPlayerNameTagForPlayer","description":"This functions allows you to toggle the drawing of player nametags, healthbars and armor bars which display above their head.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"ShowPlayerMarkers","permalink":"/zh-TW/docs/scripting/functions/ShowPlayerMarkers"},"next":{"title":"ShowVehicle","permalink":"/zh-TW/docs/scripting/functions/ShowVehicle"}}'),t=r("85893"),l=r("50065");let s={title:"ShowPlayerNameTagForPlayer",sidebar_label:"ShowPlayerNameTagForPlayer",description:"This functions allows you to toggle the drawing of player nametags, healthbars and armor bars which display above their head.",tags:["player"]},i=void 0,o={},h=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let a={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(a.p,{children:["This functions allows you to toggle the drawing of player nametags, healthbars and armor bars which display above their head. For use of a similar function like this on a global level, ",(0,t.jsx)(a.a,{href:"ShowNameTags",children:"ShowNameTags"})," function."]}),"\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{children:"Name"}),(0,t.jsx)(a.th,{children:"Description"})]})}),(0,t.jsxs)(a.tbody,{children:[(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"playerid"}),(0,t.jsx)(a.td,{children:"Player who will see the results of this function."})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"targetid"}),(0,t.jsx)(a.td,{children:"Player whose name tag will be shown or hidden."})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsxs)(a.td,{children:["bool",":show"]}),(0,t.jsx)(a.td,{children:"'true' for show name tag, 'false' for hide name tag."})]})]})]}),"\n",(0,t.jsx)(a.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"false"})," - The function failed to execute. The player specified does not exist."]}),"\n",(0,t.jsx)(a.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    // The player who typed /nameoff will not be able to see any other players nametag.\n    if (strcmp("/nameoff", cmdtext, true) == 0)\n    {\n        for (new i = 0; i\xa0< MAX_PLAYERS; i++)\n        {\n            ShowPlayerNameTagForPlayer(playerid, i, false);\n        }\n        GameTextForPlayer(playerid, "~W~Nametags ~R~off", 5000, 5);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,t.jsx)(a.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsx)(a.admonition,{type:"tip",children:(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.a,{href:"ShowNameTags",children:"ShowNameTags"})," must be set to 'true' to be able to show name tags with ShowPlayerNameTagForPlayer, that means that in order to be effective you need to ShowPlayerNameTagForPlayer(forplayerid, playerid, 0) ahead of time (",(0,t.jsx)(a.a,{href:"../callbacks/OnPlayerStreamIn",children:"OnPlayerStreamIn"})," is a good spot)."]})}),"\n",(0,t.jsx)(a.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"ShowNameTags",children:"ShowNameTags"}),": Set nametags on or off."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"DisableNameTagLOS",children:"DisableNameTagLOS"}),": Disable nametag Line-Of-Sight checking."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"SetPlayerMarkerForPlayer",children:"SetPlayerMarkerForPlayer"}),": Set a player's marker."]}),"\n"]})]})}function c(e={}){let{wrapper:a}={...(0,l.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},50065:function(e,a,r){r.d(a,{Z:function(){return i},a:function(){return s}});var n=r(67294);let t={},l=n.createContext(t);function s(e){let a=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),n.createElement(l.Provider,{value:a},e.children)}}}]);