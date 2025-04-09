"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["70921"],{67747:function(e,t,n){n.r(t),n.d(t,{default:()=>c,frontMatter:()=>i,metadata:()=>s,assets:()=>a,toc:()=>h,contentTitle:()=>d});var s=JSON.parse('{"id":"scripting/resources/doorstates","title":"Door States","description":"Information about byte size and its corresponding door state bits.","source":"@site/docs/scripting/resources/doorstates.md","sourceDirName":"scripting/resources","slug":"/scripting/resources/doorstates","permalink":"/ar/docs/scripting/resources/doorstates","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/resources/doorstates.md","tags":[],"version":"current","frontMatter":{"title":"Door States","sidebar_label":"Door States","description":"Information about byte size and its corresponding door state bits."},"sidebar":"docsSidebar","previous":{"title":"Dialog Styles","permalink":"/ar/docs/scripting/resources/dialogstyles"},"next":{"title":"Download Request Types","permalink":"/ar/docs/scripting/resources/download-requests"}}'),o=n("85893"),r=n("50065");let i={title:"Door States",sidebar_label:"Door States",description:"Information about byte size and its corresponding door state bits."},d=void 0,a={},h=[{value:"Which bit stores what?",id:"which-bit-stores-what",level:2},{value:"Which byte stores what?",id:"which-byte-stores-what",level:2},{value:"Example",id:"example",level:2},{value:"Info table",id:"info-table",level:2},{value:"Wrapper",id:"wrapper",level:2},{value:"Example usage",id:"example-usage",level:2},{value:"See also",id:"see-also",level:2}];function l(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["Door states are used by natives such as ",(0,o.jsx)(t.a,{href:"../functions/GetVehicleDamageStatus",children:"GetVehicleDamageStatus"})," and ",(0,o.jsx)(t.a,{href:"../functions/UpdateVehicleDamageStatus",children:"UpdateVehicleDamageStatus"}),"."]})}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["The states of the 2 back doors can not be handled by ",(0,o.jsx)(t.a,{href:"../functions/GetVehicleDamageStatus",children:"GetVehicleDamageStatus"})," and ",(0,o.jsx)(t.a,{href:"../functions/UpdateVehicleDamageStatus",children:"UpdateVehicleDamageStatus"}),"."]})}),"\n",(0,o.jsx)(t.h2,{id:"which-bit-stores-what",children:"Which bit stores what?"}),"\n",(0,o.jsx)(t.p,{children:"The damage of each door (note that the hood and the trunk are also doors) will be saved in 1 byte (which is 8 bits). You can only change the state of one bit for every door at each time, so you have to call the function twice if you want to the door to be damaged and opened at the same time."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["The ",(0,o.jsx)(t.strong,{children:"first bit"})," stores whether the door is ",(0,o.jsx)(t.strong,{children:"opened (value 1)"})," or ",(0,o.jsx)(t.strong,{children:"not (value 0)"}),". The door will still lock (and change the first bit to 0) if open, it's just open."]}),"\n",(0,o.jsxs)(t.li,{children:["The ",(0,o.jsx)(t.strong,{children:"second bit"})," stores whether the door is ",(0,o.jsx)(t.strong,{children:"damaged (value 1)"})," or ",(0,o.jsx)(t.strong,{children:"not (value 0)"}),". If you want a damaged door to turn normal you have to remove and re-attach it undamaged."]}),"\n",(0,o.jsxs)(t.li,{children:["The ",(0,o.jsx)(t.strong,{children:"third bit"})," stores whether the door is ",(0,o.jsx)(t.strong,{children:"removed (value 1)"})," or ",(0,o.jsx)(t.strong,{children:"not (value 0)"}),"."]}),"\n",(0,o.jsx)(t.li,{children:"The rest of the bits are empty."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"It seems like there is no bit which stores if the door will lock or not."}),"\n",(0,o.jsx)(t.p,{children:"Notice that the bits are counted from behind, so the first bit is the rightmost bit."}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h2,{id:"which-byte-stores-what",children:"Which byte stores what?"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["The ",(0,o.jsx)(t.strong,{children:"first byte"})," stores the state of the ",(0,o.jsx)(t.strong,{children:"hood"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["The ",(0,o.jsx)(t.strong,{children:"second byte"})," stores the state of the ",(0,o.jsx)(t.strong,{children:"trunk"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["The ",(0,o.jsx)(t.strong,{children:"third byte"})," stores the state of the ",(0,o.jsx)(t.strong,{children:"drivers' door"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["The ",(0,o.jsx)(t.strong,{children:"fourth byte"})," stores the state of the ",(0,o.jsx)(t.strong,{children:"co-drivers' door"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Notice that the bytes are counted from behind, so the first byte is the rightmost byte."}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(t.p,{children:"The following code tells that the hood is removed, the front left door is damaged, the front right door is opened and the trunk is damaged and opened:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.code,{children:"00000001 00000010 00000011 00000100"})}),"\n",(0,o.jsx)(t.p,{children:"However, SA-MP returns a decimal number so you have to convert it to a binary number first to get a result like above. What SA-MP would return given the example above is this:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.code,{children:"16909060"})}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h2,{id:"info-table",children:"Info table"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Legend:"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"Static        Doors                    Hood / Trunk\n\n\xb0 - Light      | - healthy, closed     -- - healthy, closed\n              -- - healthy, opened     [] - healthy, opened\n               \xa7 - damaged, closed     ~~ - damaged, closed\n              ww - damaged, opened     {} - damaged, opened\n                 - missing                - missing\n"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"First byte (hood):"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"0 (000)   1 (001)   2 (010)   3 (011)   4 (100)   5 (101)   6 (110)   7 (111)\n  \xb0--\xb0      \xb0[]\xb0      \xb0~~\xb0      \xb0{}\xb0      \xb0  \xb0      \xb0  \xb0      \xb0  \xb0      \xb0  \xb0\n  |  |      |  |      |  |      |  |      |  |      |  |      |  |      |  |\n  \xb0--\xb0      \xb0--\xb0      \xb0--\xb0      \xb0--\xb0      \xb0--\xb0      \xb0--\xb0      \xb0--\xb0      \xb0--\xb0\n"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Second byte (trunk):"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"0 (000)   1 (001)   2 (010)   3 (011)   4 (100)   5 (101)   6 (110)   7 (111)\n  \xb0--\xb0      \xb0--\xb0      \xb0--\xb0      \xb0--\xb0      \xb0--\xb0      \xb0--\xb0      \xb0--\xb0      \xb0--\xb0\n  |  |      |  |      |  |      |  |      |  |      |  |      |  |      |  |\n  \xb0--\xb0      \xb0[]\xb0      \xb0--\xb0      \xb0{}\xb0      \xb0  \xb0      \xb0  \xb0      \xb0  \xb0      \xb0  \xb0\n"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Third byte (drivers' door):"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"0 (000)   1 (001)   2 (010)   3 (011)   4 (100)   5 (101)   6 (110)   7 (111)\n  \xb0--\xb0      \xb0--\xb0      \xb0--\xb0      \xb0--\xb0      \xb0--\xb0      \xb0--\xb0      \xb0--\xb0      \xb0--\xb0\n  |  |     --  |      \xa7  |     ww  |         |         |         |         |\n  \xb0--\xb0      \xb0--\xb0      \xb0--\xb0      \xb0--\xb0      \xb0--\xb0      \xb0--\xb0      \xb0--\xb0      \xb0--\xb0\n"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Fourth byte (co-drivers' door):"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"0 (000)   1 (001)   2 (010)   3 (011)   4 (100)   5 (101)   6 (110)   7 (111)\n  \xb0--\xb0      \xb0--\xb0      \xb0--\xb0      \xb0--\xb0      \xb0--\xb0      \xb0--\xb0      \xb0--\xb0      \xb0--\xb0\n  |  |      |  --     |  \xa7      |  ww     |         |         |         |\n  \xb0--\xb0      \xb0--\xb0      \xb0--\xb0      \xb0--\xb0      \xb0--\xb0      \xb0--\xb0      \xb0--\xb0      \xb0--\xb0\n"})}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h2,{id:"wrapper",children:"Wrapper"}),"\n",(0,o.jsx)(t.p,{children:"Useful little snippet to avoid working with the bits and bytes too much."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-c",children:"enum Door\n{\n    DOOR_HOOD,\n    DOOR_TRUNK,\n    DOOR_DRIVER,\n    DOOR_PASSENGER\n}\n\nenum DoorState(<<= 1)\n{\n    IS_OPENED = 1,\n    IS_DAMAGED,\n    IS_REMOVED\n}\n\nstock GetDoorState(doorStates, Door:door, DoorState:doorState)\n{\n    return (doorStates >>> (8 * door)) & doorState;\n}\n"})}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h2,{id:"example-usage",children:"Example usage"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-c",children:'new\n	VEHICLE_PANEL_STATUS:panels,\n	VEHICLE_DOOR_STATUS:doors,\n	VEHICLE_LIGHT_STATUS:lights,\n	VEHICLE_TIRE_STATUS:tires;\n\nGetVehicleDamageStatus(vehicleid, panels, doors, lights, tires);\n\n// Single state\nif (GetDoorState(_:doors, DOOR_DRIVER, IS_DAMAGED))\n{\n    SendClientMessage(playerid, -1, "The drivers\' door of your vehicle is damaged!");\n}\n\n// Combined state\nif (GetDoorState(_:doors, DOOR_HOOD, IS_OPENED | IS_DAMAGED))\n{\n    SendClientMessage(playerid, -1, "The hood of your vehicle is both opened and damaged!");\n}\n'})}),"\n",(0,o.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"../resources/vehicle-door-status",children:"Vehicle Door Status"})}),"\n"]})]})}function c(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return i}});var s=n(67294);let o={},r=s.createContext(o);function i(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);