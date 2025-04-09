"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["59715"],{56147:function(e,t,l){l.r(t),l.d(t,{default:()=>o,frontMatter:()=>c,metadata:()=>a,assets:()=>s,toc:()=>h,contentTitle:()=>r});var a=JSON.parse('{"id":"scripting/functions/Attach3DTextLabelToVehicle","title":"Attach3DTextLabelToVehicle","description":"Attaches a 3D Text Label to a specific vehicle.","source":"@site/docs/scripting/functions/Attach3DTextLabelToVehicle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/Attach3DTextLabelToVehicle","permalink":"/docs/scripting/functions/Attach3DTextLabelToVehicle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/Attach3DTextLabelToVehicle.md","tags":[{"inline":true,"label":"vehicle","permalink":"/docs/tags/vehicle"},{"inline":true,"label":"3dtextlabel","permalink":"/docs/tags/3-dtextlabel"}],"version":"current","frontMatter":{"title":"Attach3DTextLabelToVehicle","sidebar_label":"Attach3DTextLabelToVehicle","description":"Attaches a 3D Text Label to a specific vehicle.","tags":["vehicle","3dtextlabel"]},"sidebar":"docsSidebar","previous":{"title":"Attach3DTextLabelToPlayer","permalink":"/docs/scripting/functions/Attach3DTextLabelToPlayer"},"next":{"title":"AttachCameraToObject","permalink":"/docs/scripting/functions/AttachCameraToObject"}}'),i=l("85893"),n=l("50065");let c={title:"Attach3DTextLabelToVehicle",sidebar_label:"Attach3DTextLabelToVehicle",description:"Attaches a 3D Text Label to a specific vehicle.",tags:["vehicle","3dtextlabel"]},r=void 0,s={},h=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Attaches a 3D Text Label to a specific vehicle."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Text3D",":textid"]}),(0,i.jsx)(t.td,{children:"The 3D Text Label you want to attach."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"parentid"}),(0,i.jsx)(t.td,{children:"The vehicle you want to attach the 3D Text Label to."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":offsetX"]}),(0,i.jsxs)(t.td,{children:["The Offset-X coordinate of the player vehicle (the vehicle is ",(0,i.jsx)(t.code,{children:"0.0, 0.0, 0.0"}),")."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":offsetY"]}),(0,i.jsxs)(t.td,{children:["The Offset-Y coordinate of the player vehicle (the vehicle is ",(0,i.jsx)(t.code,{children:"0.0, 0.0, 0.0"}),")."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":offsetZ"]}),(0,i.jsxs)(t.td,{children:["The Offset-Z coordinate of the player vehicle (the vehicle is ",(0,i.jsx)(t.code,{children:"0.0, 0.0, 0.0"}),")."]})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'new\n    Text3D:gVehicle3dText[MAX_VEHICLES], // Creating the TextLabel for later use\n    gVehicleId;\n\npublic OnGameModeInit()\n{\n    gVehicleId = CreateVehicle(510, 0.0, 0.0, 15.0, 5, 0, 120); // Creating the Vehicle.\n    gVehicle3dText[gVehicleId] = Create3DTextLabel("Example Text", 0xFF0000AA, 0.0, 0.0, 0.0, 50.0, 0, 1);\n    Attach3DTextLabelToVehicle(gVehicle3dText[gVehicleId], gVehicleId, 0.0, 0.0, 2.0); // Attaching Text Label To Vehicle.\n    return 1;\n}\n\npublic OnGameModeExit()\n{\n    Delete3DTextLabel(gVehicle3dText[gVehicleId]);\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"Create3DTextLabel",children:"Create3DTextLabel"}),": Create a 3D text label."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"Delete3DTextLabel",children:"Delete3DTextLabel"}),": Delete a 3D text label."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"Get3DTextLabelAttachedData",children:"Get3DTextLabelAttachedData"}),": Gets the 3D text label attached data."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"Attach3DTextLabelToPlayer",children:"Attach3DTextLabelToPlayer"}),": Attach a 3D text label to a player."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"Update3DTextLabelText",children:"Update3DTextLabelText"}),": Change the text of a 3D text label."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"CreatePlayer3DTextLabel",children:"CreatePlayer3DTextLabel"}),": Create A 3D text label for one player."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"DeletePlayer3DTextLabel",children:"DeletePlayer3DTextLabel"}),": Delete a player's 3D text label."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"UpdatePlayer3DTextLabelText",children:"UpdatePlayer3DTextLabelText"}),": Change the text of a player's 3D text label."]}),"\n"]})]})}function o(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,t,l){l.d(t,{Z:function(){return r},a:function(){return c}});var a=l(67294);let i={},n=a.createContext(i);function c(e){let t=a.useContext(n);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);