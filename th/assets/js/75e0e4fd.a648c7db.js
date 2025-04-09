"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["19611"],{23709:function(e,d,s){s.r(d),s.d(d,{default:()=>j,frontMatter:()=>i,metadata:()=>n,assets:()=>c,toc:()=>h,contentTitle:()=>l});var n=JSON.parse('{"id":"scripting/resources/keys","title":"Keys","description":"To be used with GetPlayerKeys and OnPlayerKeyStateChange.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/resources/keys.md","sourceDirName":"scripting/resources","slug":"/scripting/resources/keys","permalink":"/th/docs/scripting/resources/keys","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/resources/keys.md","tags":[],"version":"current","frontMatter":{"title":"Keys","sidebar_label":"Keys"},"sidebar":"docsSidebar","previous":{"title":"Interior IDs","permalink":"/th/docs/scripting/resources/interiorids"},"next":{"title":"Vehicle Landing Gear States","permalink":"/th/docs/scripting/resources/landinggearstate"}}'),r=s("85893"),t=s("50065");let i={title:"Keys",sidebar_label:"Keys"},l=void 0,c={},h=[];function x(e){let d={a:"a",admonition:"admonition",code:"code",del:"del",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(d.admonition,{type:"note",children:[(0,r.jsxs)(d.p,{children:["To be used with ",(0,r.jsx)(d.a,{href:"../functions/GetPlayerKeys",children:"GetPlayerKeys"})," and ",(0,r.jsx)(d.a,{href:"../callbacks/OnPlayerKeyStateChange",children:"OnPlayerKeyStateChange"}),"."]}),(0,r.jsxs)(d.p,{children:["SA-MP uses bitmasking to determine which keys are pressed and which are not. Here's an article on bitmasking: ",(0,r.jsx)(d.a,{href:"http://en.wikipedia.org/wiki/Mask_(computing)",children:"http://en.wikipedia.org/wiki/Mask_(computing)"})]})]}),"\n",(0,r.jsxs)(d.table,{children:[(0,r.jsx)(d.thead,{children:(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.th,{children:"Macro"}),(0,r.jsx)(d.th,{children:"Value"}),(0,r.jsx)(d.th,{children:"Embedding Code (On Foot) (7)"}),(0,r.jsx)(d.th,{children:"Embedding Code (In Vehicle) (7)"}),(0,r.jsx)(d.th,{children:"Default Key (On Foot)"}),(0,r.jsx)(d.th,{children:"Default Key (In Vehicle)"})]})}),(0,r.jsxs)(d.tbody,{children:[(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"KEY_ACTION"}),(0,r.jsx)(d.td,{children:"1"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.del,{children:"k~~PED_ANSWER_PHONE"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.del,{children:"k~~VEHICLE_FIREWEAPON_ALT"})}),(0,r.jsx)(d.td,{children:"TAB"}),(0,r.jsx)(d.td,{children:"ALT GR / LCTRL / NUM0"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"KEY_CROUCH"}),(0,r.jsx)(d.td,{children:"2"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.del,{children:"k~~PED_DUCK"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.del,{children:"k~~VEHICLE_HORN"})}),(0,r.jsx)(d.td,{children:"C"}),(0,r.jsx)(d.td,{children:"H / CAPSLOCK"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"KEY_FIRE"}),(0,r.jsx)(d.td,{children:"4"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.del,{children:"k~~PED_FIREWEAPON"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.del,{children:"k~~VEHICLE_FIREWEAPON"})}),(0,r.jsx)(d.td,{children:"LCTRL / LMB (Left Mouse Button)"}),(0,r.jsx)(d.td,{children:"LALT"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"KEY_SPRINT"}),(0,r.jsx)(d.td,{children:"8"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.del,{children:"k~~PED_SPRINT"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.del,{children:"k~~VEHICLE_ACCELERATE"})}),(0,r.jsx)(d.td,{children:"SPACE"}),(0,r.jsx)(d.td,{children:"W"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"KEY_SECONDARY_ATTACK"}),(0,r.jsx)(d.td,{children:"16"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.del,{children:"k~~VEHICLE_ENTER_EXIT"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.del,{children:"k~~VEHICLE_ENTER_EXIT"})}),(0,r.jsx)(d.td,{children:"ENTER"}),(0,r.jsx)(d.td,{children:"ENTER"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"KEY_JUMP"}),(0,r.jsx)(d.td,{children:"32"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.del,{children:"k~~PED_JUMPING"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.del,{children:"k~~VEHICLE_BRAKE"})}),(0,r.jsx)(d.td,{children:"LSHIFT"}),(0,r.jsx)(d.td,{children:"S"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"KEY_LOOK_RIGHT"}),(0,r.jsx)(d.td,{children:"64"}),(0,r.jsx)(d.td,{children:"-"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.del,{children:"k~~VEHICLE_LOOKRIGHT"})}),(0,r.jsx)(d.td,{children:"-"}),(0,r.jsx)(d.td,{children:"E"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"KEY_HANDBRAKE/KEY_AIM(1)"}),(0,r.jsx)(d.td,{children:"128"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.del,{children:"k~~PED_LOCK_TARGET"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.del,{children:"k~~VEHICLE_HANDBRAKE"})}),(0,r.jsx)(d.td,{children:"RMB (Right Mouse Button)"}),(0,r.jsx)(d.td,{children:"SPACE"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"KEY_LOOK_LEFT"}),(0,r.jsx)(d.td,{children:"256"}),(0,r.jsx)(d.td,{children:"-"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.del,{children:"k~~VEHICLE_LOOKLEFT"})}),(0,r.jsx)(d.td,{children:"-"}),(0,r.jsx)(d.td,{children:"Q"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"KEY_LOOK_BEHIND"}),(0,r.jsx)(d.td,{children:"512"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.del,{children:"k~~PED_LOOKBEHIND"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.del,{children:"k~~VEHICLE_LOOKBEHIND"})}),(0,r.jsx)(d.td,{children:"NUM1 / MMB (Middle Mouse Button - Click the mouse wheel)"}),(0,r.jsx)(d.td,{children:"2"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"KEY_SUBMISSION"}),(0,r.jsx)(d.td,{children:"512"}),(0,r.jsx)(d.td,{children:"-"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.del,{children:"k~~TOGGLE_SUBMISSIONS"})}),(0,r.jsx)(d.td,{children:"NUM1 / MMB (Middle Mouse Button - Click the mouse wheel)"}),(0,r.jsx)(d.td,{children:"2 / NUMPAD +"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"KEY_WALK"}),(0,r.jsx)(d.td,{children:"1024"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.del,{children:"k~~SNEAK_ABOUT"})}),(0,r.jsx)(d.td,{children:"-"}),(0,r.jsx)(d.td,{children:"LALT"}),(0,r.jsx)(d.td,{children:"-"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"KEY_ANALOG_UP"}),(0,r.jsx)(d.td,{children:"2048"}),(0,r.jsx)(d.td,{children:"-"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.del,{children:"k~~VEHICLE_TURRETUP"})}),(0,r.jsx)(d.td,{children:"NUM8(6)"}),(0,r.jsx)(d.td,{children:"NUM8"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"KEY_ANALOG_DOWN"}),(0,r.jsx)(d.td,{children:"4096"}),(0,r.jsx)(d.td,{children:"-"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.del,{children:"k~~VEHICLE_TURRETDOWN"})}),(0,r.jsx)(d.td,{children:"NUM2(6)"}),(0,r.jsx)(d.td,{children:"NUM2"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"KEY_ANALOG_LEFT"}),(0,r.jsx)(d.td,{children:"8192"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.del,{children:"k~~VEHICLE_LOOKLEFT"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.del,{children:"k~~VEHICLE_TURRETLEFT"})}),(0,r.jsx)(d.td,{children:"NUM4"}),(0,r.jsx)(d.td,{children:"NUM4"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"KEY_ANALOG_RIGHT"}),(0,r.jsx)(d.td,{children:"16384"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.del,{children:"k~~VEHICLE_LOOKRIGHT"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.del,{children:"k~~VEHICLE_TURRETRIGHT"})}),(0,r.jsx)(d.td,{children:"NUM6"}),(0,r.jsx)(d.td,{children:"NUM6"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"KEY_YES(2)"}),(0,r.jsx)(d.td,{children:"65536"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.del,{children:"k~~CONVERSATION_YES"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.del,{children:"k~~CONVERSATION_YES"})}),(0,r.jsx)(d.td,{children:"Y"}),(0,r.jsx)(d.td,{children:"Y"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"KEY_NO(2)"}),(0,r.jsx)(d.td,{children:"131072"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.del,{children:"k~~CONVERSATION_NO"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.del,{children:"k~~CONVERSATION_NO"})}),(0,r.jsx)(d.td,{children:"N"}),(0,r.jsx)(d.td,{children:"N"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"KEY_CTRL_BACK(2)"}),(0,r.jsx)(d.td,{children:"262144(4)"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.del,{children:"k~~GROUP_CONTROL_BWD"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.del,{children:"k~~GROUP_CONTROL_BWD"})}),(0,r.jsx)(d.td,{children:"H"}),(0,r.jsx)(d.td,{children:"H"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"UNDEFINED(3)"}),(0,r.jsx)(d.td,{children:"-"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.del,{children:"k~~GROUP_CONTROL_FWD"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.del,{children:"k~~GROUP_CONTROL_FWD"})}),(0,r.jsx)(d.td,{children:"G"}),(0,r.jsx)(d.td,{children:"G"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"KEY_UP"}),(0,r.jsx)(d.td,{children:"-128"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.del,{children:"k~~GO_FORWARD"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.del,{children:"k~~VEHICLE_STEERUP"})}),(0,r.jsx)(d.td,{children:"UP"}),(0,r.jsx)(d.td,{children:"UP"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"KEY_DOWN"}),(0,r.jsx)(d.td,{children:"128"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.del,{children:"k~~GO_BACK"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.del,{children:"k~~VEHICLE_STEERDOWN"})}),(0,r.jsx)(d.td,{children:"DOWN"}),(0,r.jsx)(d.td,{children:"DOWN"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"KEY_LEFT"}),(0,r.jsx)(d.td,{children:"-128"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.del,{children:"k~~GO_LEFT"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.del,{children:"k~~VEHICLE_STEERLEFT"})}),(0,r.jsx)(d.td,{children:"LEFT"}),(0,r.jsx)(d.td,{children:"LEFT"})]}),(0,r.jsxs)(d.tr,{children:[(0,r.jsx)(d.td,{children:"KEY_RIGHT"}),(0,r.jsx)(d.td,{children:"128"}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.del,{children:"k~~GO_RIGHT"})}),(0,r.jsx)(d.td,{children:(0,r.jsx)(d.del,{children:"k~~VEHICLE_STEERRIGHT"})}),(0,r.jsx)(d.td,{children:"RIGHT"}),(0,r.jsx)(d.td,{children:"RIGHT"})]})]})]}),"\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.strong,{children:"(1)"})," Key not defined in SA",":MP"," includes. You must"]}),"\n",(0,r.jsx)(d.pre,{children:(0,r.jsx)(d.code,{className:"language-c",children:"#define KEY_AIM KEY_HANDBRAKE\n"})}),"\n",(0,r.jsx)(d.p,{children:"or use KEY_HANDBRAKE."}),"\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.strong,{children:"(2)"})," Supported since 0.3d. Not detectable in earlier versions. This key can not be detected when the player is in ",(0,r.jsx)(d.a,{href:"../functions/TogglePlayerSpectating",children:"spectator mode"}),"."]}),"\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.strong,{children:"(3)"})," GROUP_CONTROL_FWD cannot be detected in SA-MP, as it used internally to enter vehicles as passenger. However, the gametext definition still exists."]}),"\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.strong,{children:"(4)"}),' If the key number "262144" does not work, just use key number "2".']}),"\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.strong,{children:"(6)"}),' Only detected when "JOYPAD" configuration is selected for controller.']}),"\n",(0,r.jsxs)(d.p,{children:[(0,r.jsx)(d.strong,{children:"(7)"})," Embedding codes only work for ",(0,r.jsx)(d.a,{href:"../functions/SendDeathMessage",children:"client messages"}),", ",(0,r.jsx)(d.a,{href:"../functions/TextDrawCreate",children:"textdraws"})," and ",(0,r.jsx)(d.a,{href:"../functions/GameTextForPlayer",children:"gametexts"}),"."]})]})}function j(e={}){let{wrapper:d}={...(0,t.a)(),...e.components};return d?(0,r.jsx)(d,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},50065:function(e,d,s){s.d(d,{Z:function(){return l},a:function(){return i}});var n=s(67294);let r={},t=n.createContext(r);function i(e){let d=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(d):{...d,...e}},[d,e])}function l(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(t.Provider,{value:d},e.children)}}}]);