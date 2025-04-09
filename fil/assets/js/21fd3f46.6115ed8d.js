"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["25864"],{62733:function(e,s,t){t.r(s),t.d(s,{default:()=>x,frontMatter:()=>l,metadata:()=>r,assets:()=>c,toc:()=>h,contentTitle:()=>d});var r=JSON.parse('{"id":"scripting/resources/limits","title":"Limits","description":"A list of all limitations imposed by the game/server.","source":"@site/docs/scripting/resources/limits.md","sourceDirName":"scripting/resources","slug":"/scripting/resources/limits","permalink":"/fil/docs/scripting/resources/limits","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/resources/limits.md","tags":[],"version":"current","frontMatter":{"title":"Limits","sidebar_label":"Limits","description":"A list of all limitations imposed by the game/server.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"Light States","permalink":"/fil/docs/scripting/resources/lightstates"},"next":{"title":"Map Icons","permalink":"/fil/docs/scripting/resources/mapicons"}}'),i=t("85893"),n=t("50065");let l={title:"Limits",sidebar_label:"Limits",description:"A list of all limitations imposed by the game/server.",tags:[]},d=void 0,c={},h=[{value:"In-game Entities",id:"in-game-entities",level:2},{value:"Server Properties - SA-MP / omp",id:"server-properties---sa-mp--omp",level:2},{value:"Textdraws",id:"textdraws",level:2},{value:"Dialogs",id:"dialogs",level:2}];function a(e){let s={a:"a",del:"del",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h2,{id:"in-game-entities",children:"In-game Entities"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Limit (0.3.7)"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Players"}),(0,i.jsx)(s.td,{children:"1000"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.a,{href:"../functions/CreateVehicle",children:"Vehicles"}),(0,i.jsx)("sup",{children:"(4)(6)"})]}),(0,i.jsx)(s.td,{children:"2000"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.a,{href:"../functions/CreateVehicle",children:"Vehicle Models"}),(0,i.jsx)("sup",{children:"(1)"})]}),(0,i.jsx)(s.td,{children:"Unlimited"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.a,{href:"../functions/CreateObject",children:"Objects"}),(0,i.jsx)("sup",{children:"(4)(6)"})]}),(0,i.jsx)(s.td,{children:"1000"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"../functions/SetPlayerVirtualWorld",children:"Virtual Worlds"})}),(0,i.jsx)(s.td,{children:"2,147,483,647"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"../functions/SetPlayerInterior",children:"Interiors"})}),(0,i.jsx)(s.td,{children:"256"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"../functions/AddPlayerClass",children:"Classes"})}),(0,i.jsx)(s.td,{children:"320"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.a,{href:"../functions/SetPlayerMapIcon",children:"Map Icons"}),(0,i.jsx)("sup",{children:"(4)"})]}),(0,i.jsx)(s.td,{children:"100"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.a,{href:"../functions/SetPlayerRaceCheckpoint",children:"Race Checkpoints"}),(0,i.jsx)("sup",{children:"(4)"})]}),(0,i.jsx)(s.td,{children:"1"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.a,{href:"../functions/SetPlayerCheckpoint",children:"Checkpoints"}),(0,i.jsx)("sup",{children:"(4)"})]}),(0,i.jsx)(s.td,{children:"1"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.a,{href:"../functions/CreatePickup",children:"Pickups"}),(0,i.jsx)("sup",{children:"(4)"})]}),(0,i.jsx)(s.td,{children:"4096"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.a,{href:"../functions/Create3DTextLabel",children:"Global 3D Labels"}),(0,i.jsx)("sup",{children:"(4)"})]}),(0,i.jsx)(s.td,{children:"1024"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.a,{href:"../functions/CreatePlayer3DTextLabel",children:"Per-player 3D Text Labels"}),(0,i.jsx)("sup",{children:"(4)"})]}),(0,i.jsx)(s.td,{children:"1024"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"../functions/SetPlayerChatBubble",children:"Chat Bubble String"})}),(0,i.jsx)(s.td,{children:"144 characters"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.a,{href:"../functions/SetObjectMaterialText",children:"SetObjectMaterialText"}),", ",(0,i.jsx)(s.a,{href:"../functions/SetPlayerObjectMaterialText",children:"SetPlayerObjectMaterialText"})," Text length"]}),(0,i.jsx)(s.td,{children:"2048 characters"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"../functions/GangZoneCreate",children:"Gangzones"})}),(0,i.jsx)(s.td,{children:"1024"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"../functions/CreatePlayerGangZone",children:"Per-player Gangzones"})}),(0,i.jsx)(s.td,{children:"1024"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"../functions/CreateMenu",children:"Menus"})}),(0,i.jsx)(s.td,{children:"128"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"../functions/SetPlayerAttachedObject",children:"Attached player objects"})}),(0,i.jsx)(s.td,{children:"10"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"../functions/SetPVarInt",children:"Player Variables"})}),(0,i.jsx)(s.td,{children:"800"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"../functions/SetSVarInt",children:"Server Variables (0.3.7 R2/omp)"})}),(0,i.jsx)(s.td,{children:"Unlimited"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:[(0,i.jsx)(s.a,{href:"../functions/CreateActor",children:"Actors"})," (since 0.3.7)",(0,i.jsx)("sup",{children:"(4)(5)"})]}),(0,i.jsx)(s.td,{children:"1000"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.a,{href:"../functions/CreateExplosion",children:"Explosions"})}),(0,i.jsx)(s.td,{children:"10"})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"server-properties---sa-mp--omp",children:"Server Properties - SA-MP / omp"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"SA-MP Limit (0.3.7)"}),(0,i.jsx)(s.th,{children:"omp"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Gamemodes"}),(0,i.jsx)(s.td,{children:"16"}),(0,i.jsx)(s.td,{children:"Unlimited"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Filterscripts"}),(0,i.jsx)(s.td,{children:"16"}),(0,i.jsx)(s.td,{children:"Unlimited"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Text Input (Chat/Commands)"}),(0,i.jsx)(s.td,{children:"128 cells (512 bytes)"}),(0,i.jsx)(s.td,{children:"128 cells (512 bytes)"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Text Output"}),(0,i.jsx)(s.td,{children:"144 cells (576 bytes)"}),(0,i.jsx)(s.td,{children:"128 cells (512 bytes)"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:["Name Length (",(0,i.jsx)(s.a,{href:"../functions/SetPlayerName",children:"SetPlayerName"}),")"]}),(0,i.jsx)(s.td,{children:"24 characters"}),(0,i.jsx)(s.td,{children:"24 characters"})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"textdraws",children:"Textdraws"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Limit (0.3.7)"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:["String Length",(0,i.jsx)("sup",{children:"(2)"})]}),(0,i.jsx)(s.td,{children:"1024 characters"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:["Shown In A Single Client's Screen",(0,i.jsx)("sup",{children:"(3)"})]}),(0,i.jsx)(s.td,{children:"2048 + 256"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Shown In A Single Client's Screen (sprites)"}),(0,i.jsx)(s.td,{children:"100"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Created Serverwise (Global)"}),(0,i.jsx)(s.td,{children:"2048"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Created Serverwise (Per-Player)"}),(0,i.jsx)(s.td,{children:"256"})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"dialogs",children:"Dialogs"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Limit (0.3.7)"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Dialog IDs"}),(0,i.jsx)(s.td,{children:"32768"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Info (Main text)"}),(0,i.jsx)(s.td,{children:"4096"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Caption"}),(0,i.jsx)(s.td,{children:"64"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Input Text Box (DIALOG_STYLE_INPUT/PASSWORD)"}),(0,i.jsx)(s.td,{children:"128"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Tab List Columns (DIALOG_STYLE_TABLIST(_HEADERS))"}),(0,i.jsx)(s.td,{children:"4"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Tab List Column Characters (DIALOG_STYLE_TABLIST(_HEADERS))"}),(0,i.jsx)(s.td,{children:"128"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Tab List Row Characters (DIALOG_STYLE_TABLIST(_HEADERS))"}),(0,i.jsx)(s.td,{children:"256"})]})]})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Notes:"})}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:"Although the vehicle model limit in 0.3 is unlimited, if you use a large amount of vehicle models then it will affect client performance."}),"\n",(0,i.jsxs)(s.li,{children:["Although the textdraw string limit is 1024 characters, if colour codes (e.g. ",(0,i.jsx)(s.del,{children:"r"}),") are used beyond the 255th character it may crash the client."]}),"\n",(0,i.jsx)(s.li,{children:"It is possible to show all Textdraws at the same time for one player, however this is not recommended."}),"\n",(0,i.jsxs)(s.li,{children:["To circumvent these limits, it is possible to use a ",(0,i.jsx)(s.a,{href:"https://github.com/samp-incognito/samp-streamer-plugin",children:"streamer"}),". Streamers work by only creating the entities etc. that are close to players."]}),"\n",(0,i.jsx)(s.li,{children:"Due to client limitations only up to 51 actors may actually be shown at a time."}),"\n",(0,i.jsx)(s.li,{children:"Vehicle IDs start at ID 1 and thus range from 1 to 1999, even if MAX_VEHICLES is 2000. Objects and player objects also start at ID 1."}),"\n"]})]})}function x(e={}){let{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},50065:function(e,s,t){t.d(s,{Z:function(){return d},a:function(){return l}});var r=t(67294);let i={},n=r.createContext(i);function l(e){let s=r.useContext(n);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(n.Provider,{value:s},e.children)}}}]);