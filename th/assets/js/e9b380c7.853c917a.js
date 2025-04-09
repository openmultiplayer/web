"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["82991"],{14694:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>a,assets:()=>d,toc:()=>c,contentTitle:()=>s});var a=JSON.parse('{"id":"scripting/callbacks/OnPlayerKeyStateChange","title":"OnPlayerKeyStateChange","description":"This callback is called when the state of any supported key is changed (pressed/released).","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerKeyStateChange.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerKeyStateChange","permalink":"/th/docs/scripting/callbacks/OnPlayerKeyStateChange","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerKeyStateChange.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerKeyStateChange","sidebar_label":"OnPlayerKeyStateChange","description":"This callback is called when the state of any supported key is changed (pressed/released).","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerInteriorChange","permalink":"/th/docs/scripting/callbacks/OnPlayerInteriorChange"},"next":{"title":"OnPlayerLeaveCheckpoint","permalink":"/th/docs/scripting/callbacks/OnPlayerLeaveCheckpoint"}}'),l=t("85893"),r=t("50065");let i={title:"OnPlayerKeyStateChange",sidebar_label:"OnPlayerKeyStateChange",description:"This callback is called when the state of any supported key is changed (pressed/released).",tags:["player"]},s=void 0,d={},c=[{value:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",level:2},{value:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",level:2},{value:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",level:2},{value:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",level:2},{value:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",level:2}];function y(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",children:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22"}),"\n",(0,l.jsx)(n.p,{children:"This callback is called when the state of any supported key is changed (pressed/released). Directional keys do not trigger OnPlayerKeyStateChange (up/down/left/right)."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"The ID of the player that pressed or released a key."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"newkeys"}),(0,l.jsx)(n.td,{children:"A map (bitmask) of the keys currently held - see here."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"oldkeys"}),(0,l.jsx)(n.td,{children:"A map (bitmask) of the keys held prior to the current change - see here."})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",children:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19"}),"\n",(0,l.jsx)(n.p,{children:"\u0E21\u0E31\u0E19\u0E16\u0E39\u0E01\u0E40\u0E23\u0E35\u0E22\u0E01\u0E43\u0E19\u0E40\u0E01\u0E21\u0E42\u0E2B\u0E21\u0E14\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E2A\u0E21\u0E2D"}),"\n",(0,l.jsx)(n.h2,{id:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07",children:"\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:"if (newkeys == KEY_FIRE)\nif (newkeys & KEY_FIRE)\nif ((newkeys & KEY_FIRE) &&\xa0!(oldkeys & KEY_FIRE))\nif ((oldkeys & KEY_FIRE) &&\xa0!(newkeys & KEY_FIRE))\nif ((newkeys & KEY_FIRE) && (newkeys & KEY_CROUCH))\nif ((newkeys & KEY_FIRE) &&\xa0!(oldkeys & KEY_FIRE) && (newkeys & KEY_CROUCH) &&\xa0!(oldkeys & KEY_CROUCH))\nif ((newkeys & (KEY_FIRE | KEY_CROUCH)) == (KEY_FIRE | KEY_CROUCH) && (oldkeys & (KEY_FIRE | KEY_CROUCH))\xa0!= (KEY_FIRE | KEY_CROUCH))\n// HOLDING(keys)\n#define HOLDING(%0) \\\n    ((newkeys & (%0)) == (%0))\nif (HOLDING( KEY_FIRE ))\nif (HOLDING( KEY_FIRE | KEY_CROUCH ))\n// PRESSED(keys)\n#define PRESSED(%0) \\\n    (((newkeys & (%0)) == (%0)) && ((oldkeys & (%0))\xa0!= (%0)))\nif (PRESSED( KEY_FIRE ))\nif (PRESSED( KEY_FIRE | KEY_CROUCH ))\n// PRESSING(keyVariable, keys)\n#define PRESSING(%0,%1) \\\n    (%0 & (%1))\nif (PRESSING( newkeys, KEY_FIRE ))\nif (PRESSING( newkeys, KEY_FIRE | KEY_CROUCH ))\n// RELEASED(keys)\n#define RELEASED(%0) \\\n    (((newkeys & (%0))\xa0!= (%0)) && ((oldkeys & (%0)) == (%0)))\nif (RELEASED( KEY_FIRE ))\nif (RELEASED( KEY_FIRE | KEY_CROUCH ))\npublic OnPlayerKeyStateChange(playerid, KEY:newkeys, KEY:oldkeys)\n{\n    if (PRESSED(KEY_FIRE))\n    {\n        if (IsPlayerInAnyVehicle(playerid))\n        {\n            AddVehicleComponent(GetPlayerVehicleID(playerid), 1010);\n        }\n    }\n    return 1;\n}\npublic OnPlayerKeyStateChange(playerid, KEY:newkeys, KEY:oldkeys)\n{\n    if (PRESSED(KEY_JUMP))\n    {\n        new\n            Float:x,\n            Float:y,\n            Float:z;\n        GetPlayerPos(playerid, x, y, z);\n        SetPlayerPos(playerid, x, y, z + 10.0);\n    }\n    return 1;\n}\nnew\n    Float:gPlayerHealth[MAX_PLAYERS];\n\n#if\xa0!defined INFINITY\n    #define INFINITY (Float:0x7F800000)\n#endif\n\npublic OnPlayerKeyStateChange(playerid, KEY:newkeys, KEY:oldkeys)\n{\n    if (PRESSED(KEY_ACTION))\n    {\n        // They just pressed the action key, save their\n        // old health for restoration.\n        GetPlayerHealth(playerid, gPlayerHealth[playerid]);\n        SetPlayerHealth(playerid, INFINITY);\n    }\n    else if (RELEASED(KEY_ACTION))\n    {\n        // They just let go of action - restore\n        // their old health again.\n        SetPlayerHealth(playerid, gPlayerHealth[playerid]);\n    }\n    return 1;\n}\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"0b00001000\n\n0b00100000\n\n0b00101000\n\nnewkeys = 0b00100000\nwanted  = 0b00101000\nANDed   = 0b00100000\n\nnewkeys = 0b00101010\nwanted  = 0b00101000\nANDed   = 0b00101000\n\nnewkeys = 0b00100000\nwanted  = 0b00101000\nANDed   = 0b00100000\n\nnewkeys = 0b00101010\nwanted  = 0b00101000\nANDed   = 0b00101000\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",children:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsx)(n.p,{children:"NPC \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E23\u0E35\u0E22\u0E01 Callback \u0E19\u0E35\u0E49\u0E44\u0E14\u0E49"})}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsx)(n.p,{children:"Directional keys do not trigger OnPlayerKeyStateChange (up/down/left/right). They can only be detected with GetPlayerKeys (in OnPlayerUpdate or a timer)."})}),"\n",(0,l.jsx)(n.h2,{id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",children:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"/th/docs/scripting/functions/GetPlayerKeys",children:"GetPlayerKeys"}),": Check what keys a player is holding."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(y,{...e})}):y(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return i}});var a=t(67294);let l={},r=a.createContext(l);function i(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);