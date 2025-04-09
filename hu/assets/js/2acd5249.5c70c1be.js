"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["93469"],{81172:function(e,t,l){l.r(t),l.d(t,{default:()=>x,frontMatter:()=>i,metadata:()=>a,assets:()=>c,toc:()=>d,contentTitle:()=>s});var a=JSON.parse('{"id":"scripting/functions/DeletePlayer3DTextLabel","title":"DeletePlayer3DTextLabel","description":"Destroy a 3D text label that was created using CreatePlayer3DTextLabel.","source":"@site/docs/scripting/functions/DeletePlayer3DTextLabel.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/DeletePlayer3DTextLabel","permalink":"/hu/docs/scripting/functions/DeletePlayer3DTextLabel","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/DeletePlayer3DTextLabel.md","tags":[{"inline":true,"label":"player","permalink":"/hu/docs/tags/player"},{"inline":true,"label":"3dtextlabel","permalink":"/hu/docs/tags/3-dtextlabel"}],"version":"current","frontMatter":{"title":"DeletePlayer3DTextLabel","sidebar_label":"DeletePlayer3DTextLabel","description":"Destroy a 3D text label that was created using CreatePlayer3DTextLabel.","tags":["player","3dtextlabel"]},"sidebar":"docsSidebar","previous":{"title":"DeletePVar","permalink":"/hu/docs/scripting/functions/DeletePVar"},"next":{"title":"DeleteSVar","permalink":"/hu/docs/scripting/functions/DeleteSVar"}}'),n=l("85893"),r=l("50065");let i={title:"DeletePlayer3DTextLabel",sidebar_label:"DeletePlayer3DTextLabel",description:"Destroy a 3D text label that was created using CreatePlayer3DTextLabel.",tags:["player","3dtextlabel"]},s=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Destroy a 3D text label that was created using CreatePlayer3DTextLabel."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"playerid"}),(0,n.jsx)(t.td,{children:"The ID of the player whose 3D text label to delete."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["PlayerText3D",":textid"]}),(0,n.jsx)(t.td,{children:"The ID of the player's 3D text label to delete."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"false"})," - The function failed to execute. This means the label specified doesn't exist."]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:'new PlayerText3D:playerTextId[MAX_PLAYERS];\n\npublic OnPlayerSpawn(playerid)\n{\n    new\n        name[MAX_PLAYER_NAME],\n        Float:x, Float:y, Float:z,\n        string[64];\n\n    GetPlayerName(playerid, name, sizeof(name));\n    GetPlayerPos(playerid, x, y, z);\n\n    format(string, sizeof(string), "Hello %s!\\nI\'m at your position", name);\n    playerTextId[playerid] = CreatePlayer3DTextLabel(playerid, string, 0x008080FF, x, y, z, 40.0);\n    return 1;\n}\n\npublic OnPlayerDisconnect(playerid, reason)\n{\n    DeletePlayer3DTextLabel(playerid, playerTextId[playerid]);\n    return 1;\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"Create3DTextLabel",children:"Create3DTextLabel"}),": Create a 3D text label."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"Attach3DTextLabelToPlayer",children:"Attach3DTextLabelToPlayer"}),": Attach a 3D text label to a player."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"Attach3DTextLabelToVehicle",children:"Attach3DTextLabelToVehicle"}),": Attach a 3D text label to a vehicle."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"Update3DTextLabelText",children:"Update3DTextLabelText"}),": Change the text of a 3D text label."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"CreatePlayer3DTextLabel",children:"CreatePlayer3DTextLabel"}),": Create A 3D text label for one player."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"UpdatePlayer3DTextLabelText",children:"UpdatePlayer3DTextLabelText"}),": Change the text of a player's 3D text label."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"IsValidPlayer3DTextLabel",children:"IsValidPlayer3DTextLabel"}),": Checks if a player's 3D text label is valid."]}),"\n"]})]})}function x(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},50065:function(e,t,l){l.d(t,{Z:function(){return s},a:function(){return i}});var a=l(67294);let n={},r=a.createContext(n);function i(e){let t=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);