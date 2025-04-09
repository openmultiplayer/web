"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["99006"],{5003:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>o});var r=JSON.parse('{"id":"scripting/functions/GetPlayerVersion","title":"GetPlayerVersion","description":"Returns the SA-MP client version, as reported by the player.","source":"@site/docs/scripting/functions/GetPlayerVersion.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerVersion","permalink":"/ta/docs/scripting/functions/GetPlayerVersion","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayerVersion.md","tags":[{"inline":true,"label":"player","permalink":"/ta/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerVersion","sidebar_label":"GetPlayerVersion","description":"Returns the SA-MP client version, as reported by the player.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerVelocity","permalink":"/ta/docs/scripting/functions/GetPlayerVelocity"},"next":{"title":"GetPlayerVirtualWorld","permalink":"/ta/docs/scripting/functions/GetPlayerVirtualWorld"}}'),i=t("85893"),s=t("50065");let l={title:"GetPlayerVersion",sidebar_label:"GetPlayerVersion",description:"Returns the SA-MP client version, as reported by the player.",tags:["player"]},o=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Returns the SA-MP client version, as reported by the player."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"playerid"}),(0,i.jsx)(n.td,{children:"The ID of the player to get the client version of."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"version[]"}),(0,i.jsx)(n.td,{children:"The string to store the player's version in, passed by reference."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"len = sizeof (version)"}),(0,i.jsx)(n.td,{children:"The maximum length of the version."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:"The client version is stored in the specified array."}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'public OnPlayerConnect(playerid)\n{\n    new version[24];\n    GetPlayerVersion(playerid, version, sizeof(version));\n\n    new string[64];\n    format(string, sizeof(string), "Your version of SA-MP: %s", version);\n    SendClientMessage(playerid, 0xFFFFFFFF, string);\n    // Possible text: "Your version of SA-MP: 0.3.7"\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:'A client\'s version can be up to 24 characters long, otherwise the connection will be rejected due to "Invalid client connection". However, normal players can only join with a version length between 5 (0.3.7) and 9 (0.3.DL-R1) characters.'})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"The string the version gets stored in will be empty if playerid is an NPC."})}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"GetPlayerName",children:"GetPlayerName"}),": Get a player's name."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"GetPlayerPing",children:"GetPlayerPing"}),": Get the ping of a player."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"GetPlayerIp",children:"GetPlayerIp"}),": Get a player's IP."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return l}});var r=t(67294);let i={},s=r.createContext(i);function l(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);