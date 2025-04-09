"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["33595"],{34264:function(e,n,s){s.r(n),s.d(n,{default:()=>d,frontMatter:()=>l,metadata:()=>t,assets:()=>h,toc:()=>o,contentTitle:()=>r});var t=JSON.parse('{"id":"scripting/callbacks/OnPlayerKeyStateChange","title":"OnPlayerKeyStateChange","description":"This callback is called when the state of any supported key is changed (pressed/released).","source":"@site/docs/scripting/callbacks/OnPlayerKeyStateChange.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerKeyStateChange","permalink":"/sl/docs/scripting/callbacks/OnPlayerKeyStateChange","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerKeyStateChange.md","tags":[{"inline":true,"label":"player","permalink":"/sl/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerKeyStateChange","sidebar_label":"OnPlayerKeyStateChange","description":"This callback is called when the state of any supported key is changed (pressed/released).","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerInteriorChange","permalink":"/sl/docs/scripting/callbacks/OnPlayerInteriorChange"},"next":{"title":"OnPlayerLeaveCheckpoint","permalink":"/sl/docs/scripting/callbacks/OnPlayerLeaveCheckpoint"}}'),a=s("85893"),i=s("50065");let l={title:"OnPlayerKeyStateChange",sidebar_label:"OnPlayerKeyStateChange",description:"This callback is called when the state of any supported key is changed (pressed/released).",tags:["player"]},r=void 0,h={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Additional Information",id:"additional-information",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Parameters",id:"parameters",level:3},{value:"How to NOT to check for a key",id:"how-to-not-to-check-for-a-key",level:3},{value:"How to check for a key",id:"how-to-check-for-a-key",level:3},{value:"How to check for a key that has been pressed",id:"how-to-check-for-a-key-that-has-been-pressed",level:3},{value:"How to check for a key being released",id:"how-to-check-for-a-key-being-released",level:3},{value:"How to check for multiple keys",id:"how-to-check-for-multiple-keys",level:3},{value:"Simplification",id:"simplification",level:2},{value:"Detecting holding a key",id:"detecting-holding-a-key",level:3},{value:"Detecting first pressing a key",id:"detecting-first-pressing-a-key",level:3},{value:"Detecting if a player is pressing a key currently",id:"detecting-if-a-player-is-pressing-a-key-currently",level:3},{value:"Detecting releasing a key",id:"detecting-releasing-a-key",level:3},{value:"Examples",id:"examples",level:2},{value:"Attach NOS when the player presses fire",id:"attach-nos-when-the-player-presses-fire",level:3},{value:"Super jump",id:"super-jump",level:3},{value:"God mode while holding use",id:"god-mode-while-holding-use",level:3},{value:"Explanation",id:"explanation",level:3}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["This callback is called when the state of any ",(0,a.jsx)(n.a,{href:"../resources/keys",children:"supported"})," key is changed (pressed/released).",(0,a.jsx)("br",{}),"Directional keys do not trigger OnPlayerKeyStateChange (up/down/left/right)."]}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Name"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"playerid"}),(0,a.jsx)(n.td,{children:"The ID of the player that pressed or released a key."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"newkeys"}),(0,a.jsxs)(n.td,{children:["A map (bitmask) of the keys currently held - ",(0,a.jsx)(n.a,{href:"../resources/keys",children:"see here"})]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"oldkeys"}),(0,a.jsxs)(n.td,{children:["A map (bitmask) of the keys held prior to the current change - ",(0,a.jsx)(n.a,{href:"../resources/keys",children:"see here"}),"."]})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"This callback does not handle returns."}),"\n",(0,a.jsx)(n.li,{children:"It is always called first in gamemode."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:"This callback can also be called by NPC."})}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Directional keys do not trigger OnPlayerKeyStateChange (up/down/left/right).",(0,a.jsx)("br",{}),"They can only be detected with ",(0,a.jsx)(n.a,{href:"../functions/GetPlayerKeys",children:"GetPlayerKeys"})," (in ",(0,a.jsx)(n.a,{href:"../callbacks/OnPlayerUpdate",children:"OnPlayerUpdate"})," or a timer)."]})}),"\n",(0,a.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsx)(n.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"../functions/GetPlayerKeys",children:"GetPlayerKeys"}),": Check what keys a player is holding."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"additional-information",children:"Additional Information"}),"\n",(0,a.jsx)(n.h3,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsxs)(n.p,{children:["This callback is called whenever a player presses or releases one of the supported keys (see ",(0,a.jsx)(n.a,{href:"../resources/keys",children:"Keys"}),").",(0,a.jsx)("br",{}),"The keys which are supported are not actual keyboard keys, but San Andreas mapped function keys, this means that, for example, you can't detect when someone presses the ",(0,a.jsx)("strong",{children:"spacebar"}),", but can detect when they press their sprint key (which may, or may not, be assigned to the spacebar (it is by default))."]}),"\n",(0,a.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsx)(n.p,{children:"The parameters to this function are a list of all keys currently being held down and all the keys held down a moment ago. The callback is called when a key state changes (that is, when a key is either pressed or released) and passes the states or all keys before and after this change. This information can be used to see exactly what happened but the variables can not be used directly in the same way as parameters to other functions. To reduce the number of variables only a single BIT is used to represent a key, this means that one variable may contain multiple keys at once and simply comparing values will not always work."}),"\n",(0,a.jsx)(n.h3,{id:"how-to-not-to-check-for-a-key",children:"How to NOT to check for a key"}),"\n",(0,a.jsx)(n.p,{children:"Let's presume that you want to detect when a player presses their FIRE button, the obvious code would be:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"if (newkeys == KEY_FIRE)\n"})}),"\n",(0,a.jsx)(n.p,{children:'This code may even work in your testing, but it is wrong and your testing is insufficient. Try crouching and pressing fire - your code will instantly stop working. Why? Because "newkeys" is no longer the same as "KEY_FIRE", it is the same as "KEY_FIRE" COMBINED WITH "KEY_CROUCH".'}),"\n",(0,a.jsx)(n.h3,{id:"how-to-check-for-a-key",children:"How to check for a key"}),"\n",(0,a.jsx)(n.p,{children:"So, if the variable can contain multiple keys at once, how do you check for just a single one? The answer is bit masking. Each key has its own bit in the variable (some keys have the same bit, but they are onfoot/incar keys, so can never be pressed at the same time anyway) and you need to check for just that single bit:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"if (newkeys & KEY_FIRE)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Note that the single ",(0,a.jsx)("strong",{children:"&"})," is correct - this is a bitwise AND, not a logical AND, which is what the two ampersands are called."]}),"\n",(0,a.jsx)(n.p,{children:"Now if you test this code it will work whether you are crouching or standing when you press the fire key. However there is still one slight problem - it will fire as long as you are holding the key. OnPlayerKeyStateChange is called every time a key changes and that code is true whenever the the fire key is held down. If you press fire the code will fire, if that key is held and you press crouch - that code will fire again because a key (crouch) has changed and fire is still held down How do you detect when a key is first pressed, but not trigger again when it's still held and another key changes?"}),"\n",(0,a.jsx)(n.h3,{id:"how-to-check-for-a-key-that-has-been-pressed",children:"How to check for a key that has been pressed"}),"\n",(0,a.jsx)(n.p,{children:'This is where "oldkeys" comes in. To check if a key has just been pressed you need to first check whether it is set in "newkeys" - meaning it\'s held down, and then check that it\'s NOT in "oldkeys" - meaning it\'s only just been held down. The following code does this:'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"if ((newkeys & KEY_FIRE) && !(oldkeys & KEY_FIRE))\n"})}),"\n",(0,a.jsx)(n.p,{children:"That will ONLY be true when the FIRE key is first pressed, not when it's held and another key changes."}),"\n",(0,a.jsx)(n.h3,{id:"how-to-check-for-a-key-being-released",children:"How to check for a key being released"}),"\n",(0,a.jsx)(n.p,{children:"Exactly the same principle as above, but reversed:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"if ((oldkeys & KEY_FIRE) && !(newkeys & KEY_FIRE))\n"})}),"\n",(0,a.jsx)(n.h3,{id:"how-to-check-for-multiple-keys",children:"How to check for multiple keys"}),"\n",(0,a.jsx)(n.p,{children:"If you want to check for players HOLDING crouch and fire then the following code will work fine:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"if ((newkeys & KEY_FIRE) && (newkeys & KEY_CROUCH))\n"})}),"\n",(0,a.jsx)(n.p,{children:"However if you want to detect when they FIRST press fire and crouch the following code WILL NOT work. It will work if they manage to press the two keys at exactly the same time, but if they're fractionally out (far less than half a second) it won't:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"if ((newkeys & KEY_FIRE) && !(oldkeys & KEY_FIRE) && (newkeys & KEY_CROUCH) && !(oldkeys & KEY_CROUCH))\n"})}),"\n",(0,a.jsx)(n.p,{children:'Why not? Because OnPlayerKeyStateChange is called every time a single key changes. So they press "KEY_FIRE" - OnPlayerKeyStateChange is called with "KEY_FIRE" in "newkeys" and not in "oldkeys", then they press "KEY_CROUCH" - OnPlayerKeyStateChange is called with "KEY_CROUCH" and "KEY_FIRE" in "newkeys", but "KEY_FIRE" is now also in "oldkeys" as it\'s already been pressed, so "!(oldkeys & KEY_FIRE)" will fail. Fortunately the solution is very simple (in fact simpler than the original code):'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"if ((newkeys & (KEY_FIRE | KEY_CROUCH)) == (KEY_FIRE | KEY_CROUCH) && (oldkeys & (KEY_FIRE | KEY_CROUCH)) != (KEY_FIRE | KEY_CROUCH))\n"})}),"\n",(0,a.jsx)(n.p,{children:'This may look complicated, but it checks that both keys are set in "newkeys" and that both the keys were not set in "oldkeys", if one of them was set in "oldkeys" that doesn\'t matter as not both of them were. All these things can be simplified greatly with defines.'}),"\n",(0,a.jsx)(n.h2,{id:"simplification",children:"Simplification"}),"\n",(0,a.jsx)(n.h3,{id:"detecting-holding-a-key",children:"Detecting holding a key"}),"\n",(0,a.jsx)(n.p,{children:"The define:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"// HOLDING(keys)\n#define HOLDING(%0) \\\n	((newkeys & (%0)) == (%0))\n"})}),"\n",(0,a.jsx)(n.p,{children:"Holding one key:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"if (HOLDING( KEY_FIRE ))\n"})}),"\n",(0,a.jsx)(n.p,{children:"Holding multiple keys:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"if (HOLDING( KEY_FIRE | KEY_CROUCH ))\n"})}),"\n",(0,a.jsx)(n.h3,{id:"detecting-first-pressing-a-key",children:"Detecting first pressing a key"}),"\n",(0,a.jsx)(n.p,{children:"The define:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"// PRESSED(keys)\n#define PRESSED(%0) \\\n	(((newkeys & (%0)) == (%0)) && ((oldkeys & (%0)) != (%0)))\n"})}),"\n",(0,a.jsx)(n.p,{children:"Pressed one key:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"if (PRESSED( KEY_FIRE ))\n"})}),"\n",(0,a.jsx)(n.p,{children:"Pressed multiple keys:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"if (PRESSED( KEY_FIRE | KEY_CROUCH ))\n"})}),"\n",(0,a.jsx)(n.h3,{id:"detecting-if-a-player-is-pressing-a-key-currently",children:"Detecting if a player is pressing a key currently"}),"\n",(0,a.jsx)(n.p,{children:"The define:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"// PRESSING(keyVariable, keys)\n#define PRESSING(%0,%1) \\\n	(%0 & (%1))\n"})}),"\n",(0,a.jsx)(n.p,{children:"Pressing one key:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"if (PRESSING( newkeys, KEY_FIRE ))\n"})}),"\n",(0,a.jsx)(n.p,{children:"Pressing multiple keys:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"if (PRESSING( newkeys, KEY_FIRE | KEY_CROUCH ))\n"})}),"\n",(0,a.jsx)(n.h3,{id:"detecting-releasing-a-key",children:"Detecting releasing a key"}),"\n",(0,a.jsx)(n.p,{children:"The define:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"// RELEASED(keys)\n#define RELEASED(%0) \\\n	(((newkeys & (%0)) != (%0)) && ((oldkeys & (%0)) == (%0)))\n"})}),"\n",(0,a.jsx)(n.p,{children:"Released one key:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"if (RELEASED( KEY_FIRE ))\n"})}),"\n",(0,a.jsx)(n.p,{children:"Released multiple keys:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"if (RELEASED( KEY_FIRE | KEY_CROUCH ))\n"})}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.h3,{id:"attach-nos-when-the-player-presses-fire",children:"Attach NOS when the player presses fire"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"public OnPlayerKeyStateChange(playerid, KEY:newkeys, KEY:oldkeys)\n{\n	if (PRESSED(KEY_FIRE))\n	{\n		if (IsPlayerInAnyVehicle(playerid))\n		{\n			AddVehicleComponent(GetPlayerVehicleID(playerid), 1010);\n		}\n	}\n	return 1;\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"super-jump",children:"Super jump"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"public OnPlayerKeyStateChange(playerid, KEY:newkeys, KEY:oldkeys)\n{\n	if (PRESSED(KEY_JUMP))\n	{\n		new\n			Float:x,\n			Float:y,\n			Float:z;\n		GetPlayerPos(playerid, x, y, z);\n		SetPlayerPos(playerid, x, y, z + 10.0);\n	}\n	return 1;\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"god-mode-while-holding-use",children:"God mode while holding use"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"new\n	Float:gPlayerHealth[MAX_PLAYERS];\n\n#if !defined INFINITY\n	#define INFINITY (Float:0x7F800000)\n#endif\n\npublic OnPlayerKeyStateChange(playerid, KEY:newkeys, KEY:oldkeys)\n{\n	if (PRESSED(KEY_ACTION))\n	{\n		// They just pressed the action key, save their\n		// old health for restoration.\n		GetPlayerHealth(playerid, gPlayerHealth[playerid]);\n		SetPlayerHealth(playerid, INFINITY);\n	}\n	else if (RELEASED(KEY_ACTION))\n	{\n		// They just let go of action - restore\n		// their old health again.\n		SetPlayerHealth(playerid, gPlayerHealth[playerid]);\n	}\n	return 1;\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"explanation",children:"Explanation"}),"\n",(0,a.jsx)(n.p,{children:"You don't need to worry about HOW it's done, just that it is. HOLDING detects if they're pressing a key (or keys), regardless of wether they were pressing it before, PRESSED detects if they only just pressed the key(s) and RELEASED detects if they just released a key(s). However if you want to know more - read on."}),"\n",(0,a.jsx)(n.p,{children:"The reason why you need to do it this way, not just using & or ==, is to detect exactly the keys you want while ignoring others which may or may not be pressed. In binary KEY_SPRINT is:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"0b00001000\n"})}),"\n",(0,a.jsx)(n.p,{children:"and KEY_JUMP is:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"0b00100000\n"})}),"\n",(0,a.jsx)(n.p,{children:"thus ORing them into the wanted keys (we could also add them in this example but that's not always the case) gives:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"0b00101000\n"})}),"\n",(0,a.jsx)(n.p,{children:"If we were only using & and OnPlayerKeyStateChange was called for a player pressing jump we would get the following code:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"newkeys = 0b00100000\nwanted  = 0b00101000\nANDed   = 0b00100000\n"})}),"\n",(0,a.jsx)(n.p,{children:"The AND of the two numbers is not 0, thus the result of the check is true, which isn't what we want."}),"\n",(0,a.jsx)(n.p,{children:"If we only used == the two numbers are clearly not the same thus the check would fail, which is what we want."}),"\n",(0,a.jsx)(n.p,{children:"If the player was pressing jump, sprint and crouch we would get the following code:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"newkeys = 0b00101010\nwanted  = 0b00101000\nANDed   = 0b00101000\n"})}),"\n",(0,a.jsx)(n.p,{children:"The ANDed version is the same as the required keys and also not 0, thus will give the correct answer, however the two original numbers are not the same so == will fail. In both the examples one of the two has given the right answer and one has given the wrong answer. If we compare the first one using & and == we get:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"newkeys = 0b00100000\nwanted  = 0b00101000\nANDed   = 0b00100000\n"})}),"\n",(0,a.jsx)(n.p,{children:"Obviously wanted and ANDed are not the same so the check fails, which is correct. For the second example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"newkeys = 0b00101010\nwanted  = 0b00101000\nANDed   = 0b00101000\n"})}),"\n",(0,a.jsx)(n.p,{children:"Wanted and ANDed are the same so comparing them as equal will result in a true result, which again is correct."}),"\n",(0,a.jsx)(n.p,{children:"So using this method we can accurately check if certain keys are pressed ignoring all other keys which may or may not be pressed. the oldkeys check just uses != instead of == to ensure that the required keys were not previously pressed, so we know one of them was just pressed."})]})}function d(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return l}});var t=s(67294);let a={},i=t.createContext(a);function l(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);