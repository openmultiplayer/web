"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["39047"],{81720:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>l,metadata:()=>s,assets:()=>a,toc:()=>d,contentTitle:()=>o});var s=JSON.parse('{"id":"scripting/functions/CreateExplosionForPlayer","title":"CreateExplosionForPlayer","description":"Creates an explosion that is only visible to a single player.","source":"@site/docs/scripting/functions/CreateExplosionForPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/CreateExplosionForPlayer","permalink":"/pt-BR/docs/scripting/functions/CreateExplosionForPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/CreateExplosionForPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/pt-BR/docs/tags/player"}],"version":"current","frontMatter":{"title":"CreateExplosionForPlayer","sidebar_label":"CreateExplosionForPlayer","description":"Creates an explosion that is only visible to a single player.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"CreateExplosion","permalink":"/pt-BR/docs/scripting/functions/CreateExplosion"},"next":{"title":"CreateMenu","permalink":"/pt-BR/docs/scripting/functions/CreateMenu"}}'),i=t("85893"),r=t("50065");let l={title:"CreateExplosionForPlayer",sidebar_label:"CreateExplosionForPlayer",description:"Creates an explosion that is only visible to a single player.",tags:["player"]},o=void 0,a={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"See Also",id:"see-also",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Creates an explosion that is only visible to a single player. This can be used to isolate explosions from other players or to make them only appear in specific virtual worlds."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"playerid"}),(0,i.jsx)(n.td,{children:"The ID of the player to create the explosion for."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["Float",":x"]}),(0,i.jsx)(n.td,{children:"The X coordinate of the explosion."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["Float",":y"]}),(0,i.jsx)(n.td,{children:"The Y coordinate of the explosion."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["Float",":z"]}),(0,i.jsx)(n.td,{children:"The Z coordinate of the explosion."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"type"}),(0,i.jsxs)(n.td,{children:["The ",(0,i.jsx)(n.a,{href:"../resources/explosionlist",children:"type"})," of the explosion."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["Float",":radius"]}),(0,i.jsx)(n.td,{children:"The radius of the explosion."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:["This function always returns ",(0,i.jsx)(n.strong,{children:"true"}),", even if the function failed to excute (player doesn't exist, invalid radius, or invalid explosion type)."]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (strcmp(cmdtext, "/burnme", true) == 0)\n    {\n        new Float:x, Float:y, Float:z;\n        GetPlayerPos(playerid, x, y, z);\n        CreateExplosionForPlayer(playerid, x, y, z, 1, 10.0);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"There is a limit as to how many explosions can be seen at once by a player. This is roughly 10."})}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"CreateExplosion",children:"CreateExplosion"}),": Create an explosion which is visible for all players."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"see-also",children:"See Also"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../resources/explosionlist",children:"Explosion Types"}),": A list of all the explosion types."]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return l}});var s=t(67294);let i={},r=s.createContext(i);function l(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);