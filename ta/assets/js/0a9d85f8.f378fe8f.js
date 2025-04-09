"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["88869"],{55663:function(e,t,a){a.r(t),a.d(t,{default:()=>h,frontMatter:()=>i,metadata:()=>l,assets:()=>c,toc:()=>s,contentTitle:()=>d});var l=JSON.parse('{"id":"scripting/functions/GetPlayer3DTextLabelAttachedData","title":"GetPlayer3DTextLabelAttachedData","description":"Gets the player\'s 3D text label attached data.","source":"@site/docs/scripting/functions/GetPlayer3DTextLabelAttachedData.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayer3DTextLabelAttachedData","permalink":"/ta/docs/scripting/functions/GetPlayer3DTextLabelAttachedData","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetPlayer3DTextLabelAttachedData.md","tags":[{"inline":true,"label":"player","permalink":"/ta/docs/tags/player"},{"inline":true,"label":"3dtextlabel","permalink":"/ta/docs/tags/3-dtextlabel"}],"version":"current","frontMatter":{"title":"GetPlayer3DTextLabelAttachedData","sidebar_label":"GetPlayer3DTextLabelAttachedData","description":"Gets the player\'s 3D text label attached data.","tags":["player","3dtextlabel"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayer3DTextLabelAttached","permalink":"/ta/docs/scripting/functions/GetPlayer3DTextLabelAttached"},"next":{"title":"GetPlayer3DTextLabelColor","permalink":"/ta/docs/scripting/functions/GetPlayer3DTextLabelColor"}}'),n=a("85893"),r=a("50065");let i={title:"GetPlayer3DTextLabelAttachedData",sidebar_label:"GetPlayer3DTextLabelAttachedData",description:"Gets the player's 3D text label attached data.",tags:["player","3dtextlabel"]},d=void 0,c={},s=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{VersionWarn:a}=t;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a,{version:"omp v1.1.0.2612"}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Gets the player's 3D text label attached data."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"playerid"}),(0,n.jsx)(t.td,{children:"The ID of the player."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["PlayerText3D",":textid"]}),(0,n.jsx)(t.td,{children:"The ID of the player's 3D text label to get the attached data of."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"&parentPlayerid"}),(0,n.jsx)(t.td,{children:"A variable into which to store the parentPlayerid, passed by reference."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"&parentVehicleid"}),(0,n.jsx)(t.td,{children:"A variable into which to store the parentVehicleid, passed by reference."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(t.p,{children:["An example for ",(0,n.jsx)(t.strong,{children:"parentPlayerid"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:"new PlayerText3D:playerTextId;\nnew Float:X, Float:Y, Float:Z;\nnew attachedplayer = 37; // Attach to player id 37\n\nnew parentPlayerid;\nnew parentVehicleid;\n\nGetPlayerPos(playerid, X, Y, Z);\nplayerTextId = CreatePlayer3DTextLabel(playerid, \"Hello\\nI'm at your position\", 0x008080FF, X, Y, Z, 40.0, attachedplayer, INVALID_VEHICLE_ID);\n\nGetPlayer3DTextLabelAttachedData(playerid, playerTextId, parentPlayerid, parentVehicleid);\n// The `parentPlayerid` will be '37'\n"})}),"\n",(0,n.jsxs)(t.p,{children:["An example for ",(0,n.jsx)(t.strong,{children:"parentVehicleid"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:"new PlayerText3D:gVehicle3dText[MAX_VEHICLES];\nnew gVehicleId;\n\nnew parentPlayerid;\nnew parentVehicleid;\n\ngVehicleId = CreateVehicle(510, 0.0, 0.0, 15.0, 5, 0, 120);\ngVehicle3dText[gVehicleId] = CreatePlayer3DTextLabel(playerid, \"Example Text\", 0xFF0000AA, 0.0, 0.0, 0.0, 50.0, INVALID_PLAYER_ID, gVehicleId);\n\nGetPlayer3DTextLabelAttachedData(playerid, gVehicle3dText[gVehicleId], parentPlayerid, parentVehicleid);\n// The `parentVehicleid` will be the value of 'gVehicleId'\n"})}),"\n",(0,n.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"Get3DTextLabelAttachedData",children:"Get3DTextLabelAttachedData"}),": Gets the 3D text label attached data."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},50065:function(e,t,a){a.d(t,{Z:function(){return d},a:function(){return i}});var l=a(67294);let n={},r=l.createContext(n);function i(e){let t=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),l.createElement(r.Provider,{value:t},e.children)}}}]);