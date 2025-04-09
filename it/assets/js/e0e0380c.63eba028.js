"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["9185"],{37404:function(e,t,r){r.r(t),r.d(t,{default:()=>_,frontMatter:()=>i,metadata:()=>n,assets:()=>l,toc:()=>d,contentTitle:()=>a});var n=JSON.parse('{"id":"scripting/resources/damagestatus","title":"Damage Status","description":"Information about vehicle damage status and sample code.","source":"@site/docs/scripting/resources/damagestatus.md","sourceDirName":"scripting/resources","slug":"/scripting/resources/damagestatus","permalink":"/it/docs/scripting/resources/damagestatus","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/resources/damagestatus.md","tags":[],"version":"current","frontMatter":{"title":"Damage Status","sidebar_label":"Damage Status","description":"Information about vehicle damage status and sample code."},"sidebar":"docsSidebar","previous":{"title":"Crime List","permalink":"/it/docs/scripting/resources/crimelist"},"next":{"title":"Dialog Styles","permalink":"/it/docs/scripting/resources/dialogstyles"}}'),s=r("85893"),o=r("50065");let i={title:"Damage Status",sidebar_label:"Damage Status",description:"Information about vehicle damage status and sample code."},a=void 0,l={},d=[];function c(e){let t={a:"a",admonition:"admonition",br:"br",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["Information about vehicle damage status used by ",(0,s.jsx)(t.a,{href:"../functions/GetVehicleDamageStatus",children:"GetVehicleDamageStatus"})," and ",(0,s.jsx)(t.a,{href:"../functions/UpdateVehicleDamageStatus",children:"UpdateVehicleDamageStatus"}),"."]})}),"\n",(0,s.jsxs)(t.p,{children:["Vehicle damage is stored in 4 values: ",(0,s.jsx)(t.strong,{children:"Panels"}),", ",(0,s.jsx)(t.strong,{children:"Doors"}),", ",(0,s.jsx)(t.strong,{children:"Lights"})," and ",(0,s.jsx)(t.strong,{children:"Tires"}),". Each value holds a bit mask of the state of all the panels, doors, lights or tires. This means you need to use bitwise operators to work with them (most of the time)."]}),"\n",(0,s.jsxs)(t.p,{children:["For example, the tires status stores 4 bits for the 4 tires. The value is 1 if the tire is popped, and 0 if it is not popped. So, for example, a value of ",(0,s.jsx)(t.code,{children:"1010"})," means both the front tires are popped, and the rear ones are not."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["For more info on panel states, see ",(0,s.jsx)(t.a,{href:"../resources/panelstates",children:"Panel States"}),".",(0,s.jsx)(t.br,{}),"\n","For more info on door states, see ",(0,s.jsx)(t.a,{href:"../resources/doorstates",children:"Door States"}),".",(0,s.jsx)(t.br,{}),"\n","For more info on light states, see ",(0,s.jsx)(t.a,{href:"../resources/lightstates",children:"Light States"}),".",(0,s.jsx)(t.br,{}),"\n","For more info on tire states, see ",(0,s.jsx)(t.a,{href:"../resources/tirestates",children:"Tire States"}),"."]})}),"\n",(0,s.jsx)(t.p,{children:"To make working with these easier, there are some encoding and decoding functions below."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:"//Panels\ndecode_panels(panels, &front_left_panel, &front_right_panel, &rear_left_panel, &rear_right_panel, &windshield, &front_bumper, &rear_bumper)\n{\n    front_left_panel = panels & 15;\n    front_right_panel = panels >> 4 & 15;\n    rear_left_panel = panels >> 8 & 15;\n    rear_right_panel = panels >> 12 & 15;\n    windshield = panels >> 16 & 15;\n    front_bumper = panels >> 20 & 15;\n    rear_bumper = panels >> 24 & 15;\n}\n\nencode_panels(front_left_panel, front_right_panel, rear_left_panel, rear_right_panel, windshield, front_bumper, rear_bumper)\n{\n    return front_left_panel | (front_right_panel << 4) | (rear_left_panel << 8) | (rear_right_panel << 12) | (windshield << 16) | (front_bumper << 20) | (rear_bumper << 24);\n}\n\n//Doors\ndecode_doors(doors, &bonnet, &boot, &driver_door, &passenger_door)\n{\n    bonnet = doors & 7;\n    boot = doors >> 8 & 7;\n    driver_door = doors >> 16 & 7;\n    passenger_door = doors >> 24 & 7;\n}\n\nencode_doors(bonnet, boot, driver_door, passenger_door)\n{\n    return bonnet | (boot << 8) | (driver_door << 16) | (passenger_door << 24);\n}\n\n//Lights\ndecode_lights(lights, &front_left_light, &front_right_light, &back_lights)\n{\n    front_left_light = lights & 1;\n    front_right_light = lights >> 2 & 1;\n    back_lights = lights >> 6 & 1;\n}\n\nencode_lights(front_left_light, front_right_light, back_lights)\n{\n    return front_left_light | (front_right_light << 2) | (back_lights << 6);\n}\n\n//Tires\ndecode_tires(tires, &rear_right_tire, &front_right_tire, &rear_left_tire, &front_left_tire)\n{\n    rear_right_tire = tires & 1;\n    front_right_tire = tires >> 1 & 1;\n    rear_left_tire = tires >> 2 & 1;\n    front_left_tire = tires >> 3 & 1;\n}\n\nencode_tires(rear_right_tire, front_right_tire, rear_left_tire, front_left_tire)\n{\n	return rear_right_tire | (front_right_tire << 1) | (rear_left_tire << 2) | (front_left_tire << 3);\n}\n"})})]})}function _(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return a},a:function(){return i}});var n=r(67294);let s={},o=n.createContext(s);function i(e){let t=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);