"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["65054"],{78323:function(e,t,n){n.r(t),n.d(t,{default:()=>j,frontMatter:()=>o,metadata:()=>r,assets:()=>a,toc:()=>s,contentTitle:()=>l});var r=JSON.parse('{"id":"scripting/functions/StopPlayerObject","title":"StopPlayerObject","description":"Stop a moving player-object after MovePlayerObject has been used.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/StopPlayerObject.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/StopPlayerObject","permalink":"/th/docs/scripting/functions/StopPlayerObject","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/StopPlayerObject.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"}],"version":"current","frontMatter":{"title":"StopPlayerObject","sidebar_label":"StopPlayerObject","description":"Stop a moving player-object after MovePlayerObject has been used.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"StopPlayerHoldingObject","permalink":"/th/docs/scripting/functions/StopPlayerHoldingObject"},"next":{"title":"StopRecordingPlayback","permalink":"/th/docs/scripting/functions/StopRecordingPlayback"}}'),c=n("85893"),i=n("50065");let o={title:"StopPlayerObject",sidebar_label:"StopPlayerObject",description:"Stop a moving player-object after MovePlayerObject has been used.",tags:["player"]},l=void 0,a={},s=[{value:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",level:2},{value:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",level:2},{value:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",level:2},{value:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",level:2}];function d(e){let t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",children:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22"}),"\n",(0,c.jsx)(t.p,{children:"Stop a moving player-object after MovePlayerObject has been used."}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:"Name"}),(0,c.jsx)(t.th,{children:"Description"})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"playerid"}),(0,c.jsx)(t.td,{children:"The ID of the player whose player-object to stop."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"objectid"}),(0,c.jsx)(t.td,{children:"The ID of the player-object to stop."})]})]})]}),"\n",(0,c.jsx)(t.h2,{id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",children:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19"}),"\n",(0,c.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,c.jsx)(t.h2,{id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",children:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-c",children:"StopPlayerObject(playerid, objectid);\n"})}),"\n",(0,c.jsx)(t.h2,{id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",children:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsx)(t.li,{children:"MovePlayerObject: Move a player object."}),"\n",(0,c.jsx)(t.li,{children:"CreatePlayerObject: Create an object for only one player."}),"\n",(0,c.jsx)(t.li,{children:"DestroyPlayerObject: Destroy a player object."}),"\n",(0,c.jsx)(t.li,{children:"IsValidPlayerObject: Checks if a certain player object is vaild."}),"\n",(0,c.jsx)(t.li,{children:"IsPlayerObjectMoving: Check if the player object is moving."}),"\n",(0,c.jsx)(t.li,{children:"SetPlayerObjectPos: Set the position of a player object."}),"\n",(0,c.jsx)(t.li,{children:"SetPlayerObjectRot: Set the rotation of a player object."}),"\n",(0,c.jsx)(t.li,{children:"GetPlayerObjectPos: Locate a player object."}),"\n",(0,c.jsx)(t.li,{children:"GetPlayerObjectRot: Check the rotation of a player object."}),"\n",(0,c.jsx)(t.li,{children:"AttachPlayerObjectToPlayer: Attach a player object to a player."}),"\n",(0,c.jsx)(t.li,{children:"CreateObject: Create an object."}),"\n",(0,c.jsx)(t.li,{children:"DestroyObject: Destroy an object."}),"\n",(0,c.jsx)(t.li,{children:"IsValidObject: Checks if a certain object is vaild."}),"\n",(0,c.jsx)(t.li,{children:"MoveObject: Move an object."}),"\n",(0,c.jsx)(t.li,{children:"IsObjectMoving: Check if the object is moving."}),"\n",(0,c.jsx)(t.li,{children:"StopObject: Stop an object from moving."}),"\n",(0,c.jsx)(t.li,{children:"SetObjectPos: Set the position of an object."}),"\n",(0,c.jsx)(t.li,{children:"SetObjectRot: Set the rotation of an object."}),"\n",(0,c.jsx)(t.li,{children:"GetObjectPos: Locate an object."}),"\n",(0,c.jsx)(t.li,{children:"GetObjectRot: Check the rotation of an object."}),"\n",(0,c.jsx)(t.li,{children:"AttachObjectToPlayer: Attach an object to a player."}),"\n"]})]})}function j(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return o}});var r=n(67294);let c={},i=r.createContext(c);function o(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);