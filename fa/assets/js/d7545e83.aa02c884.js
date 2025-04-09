"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["55354"],{16436:function(e,s,t){t.r(s),t.d(s,{default:()=>o,frontMatter:()=>c,metadata:()=>i,assets:()=>d,toc:()=>l,contentTitle:()=>a});var i=JSON.parse('{"id":"scripting/resources/pickuptypes","title":"Pickup Types","description":"Available Pickup Types","source":"@site/docs/scripting/resources/pickuptypes.md","sourceDirName":"scripting/resources","slug":"/scripting/resources/pickuptypes","permalink":"/fa/docs/scripting/resources/pickuptypes","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/resources/pickuptypes.md","tags":[],"version":"current","frontMatter":{"title":"Pickup Types","sidebar_label":"Pickup Types"},"sidebar":"docsSidebar","previous":{"title":"Pickup IDs","permalink":"/fa/docs/scripting/resources/pickupids"},"next":{"title":"Player States","permalink":"/fa/docs/scripting/resources/playerstates"}}'),r=t("85893"),n=t("50065");let c={title:"Pickup Types",sidebar_label:"Pickup Types"},a=void 0,d={},l=[{value:"Available Pickup Types",id:"available-pickup-types",level:3}];function p(e){let s={a:"a",admonition:"admonition",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h3,{id:"available-pickup-types",children:"Available Pickup Types"}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["These pickup types are used by ",(0,r.jsx)(s.a,{href:"../functions/CreatePickup",children:"CreatePickup"})," and ",(0,r.jsx)(s.a,{href:"../functions/CreatePlayerPickup",children:"CreatePlayerPickup"}),"."]})}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsx)(s.p,{children:"Most other IDs are either undocumented or are similar to type 1 (but do not use them just because they seem similar to ID 1, they might have side-effects like ID 18 and 20)."})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"ID"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0"}),(0,r.jsxs)(s.td,{children:["It has no special attributes and cannot be picked up. It also does not trigger ",(0,r.jsx)(s.a,{href:"../callbacks/OnPlayerPickUpPickup",children:"OnPlayerPickUpPickup"})," or ",(0,r.jsx)(s.a,{href:"../callbacks/OnPlayerPickUpPlayerPickup",children:"OnPlayerPickUpPlayerPickup"}),", and is not removed when closing the server"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"1"}),(0,r.jsxs)(s.td,{children:["Exists always. Disables pickup scripts such as horseshoes and oysters to allow for scripted actions ONLY. Will trigger ",(0,r.jsx)(s.a,{href:"../callbacks/OnPlayerPickUpPickup",children:"OnPlayerPickUpPickup"})," or ",(0,r.jsx)(s.a,{href:"../callbacks/OnPlayerPickUpPlayerPickup",children:"OnPlayerPickUpPlayerPickup"})," every few seconds. This is likely a SA-MP bug"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"2"}),(0,r.jsx)(s.td,{children:"Disappears after pickup, respawns after 30 seconds if the player is at a distance of at least 15 meters (used for money pickups)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"3"}),(0,r.jsx)(s.td,{children:"Disappears after pickup, respawns after death"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"4"}),(0,r.jsx)(s.td,{children:"Disappears after 20 seconds. Respawns after death"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"5"}),(0,r.jsx)(s.td,{children:"Disappears after 120 seconds. Respawns after death"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"8"}),(0,r.jsx)(s.td,{children:"Disappears after pickup, but has no effect (used for money pickups)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"9"}),(0,r.jsx)(s.td,{children:"Explodes on contact with any ground vehicle in 10 seconds after creation (used for land mines)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"10"}),(0,r.jsx)(s.td,{children:"Explodes on contact with any ground vehicle (used for land mines)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"11"}),(0,r.jsx)(s.td,{children:"Explodes on contact with any vessel in 10 seconds after creation (used for nautical/sea mines)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"12"}),(0,r.jsx)(s.td,{children:"Explodes on contact with any vessel (used for nautical/sea mines)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"13"}),(0,r.jsx)(s.td,{children:"Invisible. Triggers checkpoint sound when picked up with a vehicle, but doesn't trigger OnPlayerPickUpPickup (floating pickup)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"14"}),(0,r.jsx)(s.td,{children:"Disappears after pickup, can only be picked up with a vehicle. Triggers checkpoint sound (floating pickup)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"15"}),(0,r.jsx)(s.td,{children:"Same as type 2, however the pickup will respawn after 12 minutes. If the model ID is a bribe, it will respawn after just 5 minutes."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"18"}),(0,r.jsx)(s.td,{children:"Similar to type 1. Pressing Tab (KEY_ACTION) makes it disappear but the key press doesn't trigger OnPlayerPickUpPickup (used for properties)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"19"}),(0,r.jsx)(s.td,{children:'Disappears after pickup, but doesn\'t respawn. Makes "cash pickup" sound if picked up'})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"20"}),(0,r.jsx)(s.td,{children:'Similar to type 1. Disappears when you take a picture of it with the Camera weapon, which triggers "Snapshot # out of 0" message. Taking a picture doesn\'t trigger OnPlayerPickUpPickup (used for snapshot locations)'})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"22"}),(0,r.jsx)(s.td,{children:"Same as type 3 (used for missions)"})]})]})]})]})}function o(e={}){let{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},50065:function(e,s,t){t.d(s,{Z:function(){return a},a:function(){return c}});var i=t(67294);let r={},n=i.createContext(r);function c(e){let s=i.useContext(n);return i.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(n.Provider,{value:s},e.children)}}}]);