"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["95862"],{3085:function(e,t,l){l.r(t),l.d(t,{default:()=>x,frontMatter:()=>i,metadata:()=>a,assets:()=>c,toc:()=>d,contentTitle:()=>s});var a=JSON.parse('{"id":"scripting/functions/UpdatePlayer3DTextLabelText","title":"UpdatePlayer3DTextLabelText","description":"Updates a player 3D Text Label\'s text and color.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/UpdatePlayer3DTextLabelText.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/UpdatePlayer3DTextLabelText","permalink":"/th/docs/scripting/functions/UpdatePlayer3DTextLabelText","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/UpdatePlayer3DTextLabelText.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"},{"inline":true,"label":"3dtextlabel","permalink":"/th/docs/tags/3-dtextlabel"}],"version":"current","frontMatter":{"title":"UpdatePlayer3DTextLabelText","sidebar_label":"UpdatePlayer3DTextLabelText","description":"Updates a player 3D Text Label\'s text and color.","tags":["player","3dtextlabel"]},"sidebar":"docsSidebar","previous":{"title":"Update3DTextLabelText","permalink":"/th/docs/scripting/functions/Update3DTextLabelText"},"next":{"title":"UpdateVehicleDamageStatus","permalink":"/th/docs/scripting/functions/UpdateVehicleDamageStatus"}}'),n=l("85893"),r=l("50065");let i={title:"UpdatePlayer3DTextLabelText",sidebar_label:"UpdatePlayer3DTextLabelText",description:"Updates a player 3D Text Label's text and color.",tags:["player","3dtextlabel"]},s=void 0,c={},d=[{value:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",level:2},{value:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",level:2},{value:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",level:2},{value:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",level:2}];function o(e){let t={a:"a",admonition:"admonition",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22",children:"\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22"}),"\n",(0,n.jsx)(t.p,{children:"Updates a player 3D Text Label's text and color"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"playerid"}),(0,n.jsx)(t.td,{children:"The ID of the player for which the 3D Text Label was created."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["PlayerText3D",":textid"]}),(0,n.jsx)(t.td,{children:"The 3D Text Label you want to update."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"color"}),(0,n.jsx)(t.td,{children:"The color the 3D Text Label should have from now on."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"text[]"}),(0,n.jsx)(t.td,{children:"The new text which the 3D Text Label should have from now on."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19",children:"\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19"}),"\n",(0,n.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,n.jsx)(t.h2,{id:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",children:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01"}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"If text[] is empty, the server/clients next to the text might crash!"})}),"\n",(0,n.jsx)(t.h2,{id:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19",children:"\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/th/docs/scripting/functions/Create3DTextLabel",children:"Create3DTextLabel"}),": Create a 3D text label."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/th/docs/scripting/functions/Delete3DTextLabel",children:"Delete3DTextLabel"}),": Delete a 3D text label."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/th/docs/scripting/functions/Attach3DTextLabelToPlayer",children:"Attach3DTextLabelToPlayer"}),": Attach a 3D text label to a player."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/th/docs/scripting/functions/Attach3DTextLabelToVehicle",children:"Attach3DTextLabelToVehicle"}),": Attach a 3D text label to a vehicle."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/th/docs/scripting/functions/Update3DTextLabelText",children:"Update3DTextLabelText"}),": Change the text of a 3D text label."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/th/docs/scripting/functions/CreatePlayer3DTextLabel",children:"CreatePlayer3DTextLabel"}),": Create A 3D text label for one player."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/th/docs/scripting/functions/DeletePlayer3DTextLabel",children:"DeletePlayer3DTextLabel"}),": Delete a player's 3D text label."]}),"\n"]})]})}function x(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},50065:function(e,t,l){l.d(t,{Z:function(){return s},a:function(){return i}});var a=l(67294);let n={},r=a.createContext(n);function i(e){let t=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);