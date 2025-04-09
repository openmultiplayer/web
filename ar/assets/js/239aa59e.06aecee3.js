"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["88135"],{92435:function(e,t,s){s.r(t),s.d(t,{default:()=>o,frontMatter:()=>n,metadata:()=>r,assets:()=>c,toc:()=>d,contentTitle:()=>l});var r=JSON.parse('{"id":"scripting/resources/playerstates","title":"Player States","description":"A list of all the player states used by GetPlayerState function or OnPlayerStateChange callback.","source":"@site/docs/scripting/resources/playerstates.md","sourceDirName":"scripting/resources","slug":"/scripting/resources/playerstates","permalink":"/ar/docs/scripting/resources/playerstates","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/resources/playerstates.md","tags":[{"inline":true,"label":"player","permalink":"/ar/docs/tags/player"}],"version":"current","frontMatter":{"title":"Player States","sidebar_label":"Player States","description":"A list of all the player states used by GetPlayerState function or OnPlayerStateChange callback.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"Pickup Types","permalink":"/ar/docs/scripting/resources/pickuptypes"},"next":{"title":"Pvar Types","permalink":"/ar/docs/scripting/resources/pvartypes"}}'),a=s("85893"),i=s("50065");let n={title:"Player States",sidebar_label:"Player States",description:"A list of all the player states used by GetPlayerState function or OnPlayerStateChange callback.",tags:["player"]},l=void 0,c={},d=[{value:"States",id:"states",level:2}];function h(e){let t={a:"a",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["This page compiles the list of all the player states used by ",(0,a.jsx)(t.a,{href:"../functions/GetPlayerState",children:"GetPlayerState"})," function or ",(0,a.jsx)(t.a,{href:"../callbacks/OnPlayerStateChange",children:"OnPlayerStateChange"})," callback. Both pages contain examples on how to use the values below."]}),"\n",(0,a.jsx)(t.p,{children:'From a server developer standpoint having both "player states" and "special actions" may seem confusing. The main difference between the two is that the former is used for synchronization purposes (and there are packets associated with some of them), and is used for more "generic" actions. The "special actions" don\'t have any packets associated with them and cover more "specific" actions, and obviously have little to do with the current state of a player.'}),"\n",(0,a.jsx)(t.h2,{id:"states",children:"States"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"ID"}),(0,a.jsx)(t.th,{children:"Macro"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"0"}),(0,a.jsx)(t.td,{children:"PLAYER_STATE_NONE"}),(0,a.jsx)(t.td,{children:"The default player state which is used while initializing"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"1"}),(0,a.jsx)(t.td,{children:"PLAYER_STATE_ONFOOT"}),(0,a.jsx)(t.td,{children:"The player is on foot"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"2"}),(0,a.jsx)(t.td,{children:"PLAYER_STATE_DRIVER"}),(0,a.jsx)(t.td,{children:"The player is driving a vehicle"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"3"}),(0,a.jsx)(t.td,{children:"PLAYER_STATE_PASSENGER"}),(0,a.jsx)(t.td,{children:"The player is in a vehicle as a passenger"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"4"}),(0,a.jsx)(t.td,{children:"PLAYER_STATE_EXIT_VEHICLE"}),(0,a.jsx)(t.td,{children:"The player is exiting a vehicle. It is primarily used internally"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"5"}),(0,a.jsx)(t.td,{children:"PLAYER_STATE_ENTER_VEHICLE_DRIVER"}),(0,a.jsx)(t.td,{children:"The player is entering a vehicle as the driver. It is primarily used internally"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"6"}),(0,a.jsx)(t.td,{children:"PLAYER_STATE_ENTER_VEHICLE_PASSENGER"}),(0,a.jsx)(t.td,{children:"The player is entering a vehicle as the passenger. It is primarily used internally"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"7"}),(0,a.jsx)(t.td,{children:"PLAYER_STATE_WASTED"}),(0,a.jsx)(t.td,{children:"The player is either dead or in class selection"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"8"}),(0,a.jsx)(t.td,{children:"PLAYER_STATE_SPAWNED"}),(0,a.jsx)(t.td,{children:"The player is just spawned"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"9"}),(0,a.jsx)(t.td,{children:"PLAYER_STATE_SPECTATING"}),(0,a.jsx)(t.td,{children:"The player is in spectator mode"})]})]})]})]})}function o(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},50065:function(e,t,s){s.d(t,{Z:function(){return l},a:function(){return n}});var r=s(67294);let a={},i=r.createContext(a);function n(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);