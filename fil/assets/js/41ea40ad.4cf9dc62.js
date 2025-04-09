"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["11853"],{240:function(e,t,a){a.r(t),a.d(t,{default:()=>o,frontMatter:()=>i,metadata:()=>l,assets:()=>c,toc:()=>d,contentTitle:()=>s});var l=JSON.parse('{"id":"scripting/functions/Attach3DTextLabelToPlayer","title":"Attach3DTextLabelToPlayer","description":"Mag-attach ng 3D text label sa isang player.","source":"@site/i18n/fil/docusaurus-plugin-content-docs/current/scripting/functions/Attach3DTextLabelToPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/Attach3DTextLabelToPlayer","permalink":"/fil/docs/scripting/functions/Attach3DTextLabelToPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/Attach3DTextLabelToPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/fil/docs/tags/player"},{"inline":true,"label":"3dtextlabel","permalink":"/fil/docs/tags/3-dtextlabel"}],"version":"current","frontMatter":{"title":"Attach3DTextLabelToPlayer","sidebar_label":"Attach3DTextLabelToPlayer","description":"Mag-attach ng 3D text label sa isang player.","tags":["player","3dtextlabel"]},"sidebar":"docsSidebar","previous":{"title":"ArePlayerWeaponsAllowed","permalink":"/fil/docs/scripting/functions/ArePlayerWeaponsAllowed"},"next":{"title":"Attach3DTextLabelToVehicle","permalink":"/fil/docs/scripting/functions/Attach3DTextLabelToVehicle"}}'),n=a("85893"),r=a("50065");let i={title:"Attach3DTextLabelToPlayer",sidebar_label:"Attach3DTextLabelToPlayer",description:"Mag-attach ng 3D text label sa isang player.",tags:["player","3dtextlabel"]},s=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function x(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Mag-attach ng 3D text label sa isang player."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["Text3D",":textid"]}),(0,n.jsx)(t.td,{children:"Ang ID ng 3D text label na isasama. Ibinalik ng Create3DTextLabel."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"playerid"}),(0,n.jsx)(t.td,{children:"Ang ID ng player kung saan kalakip ang label."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"OffsetX"}),(0,n.jsx)(t.td,{children:"Ang X offset mula sa player."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"OffsetY"}),(0,n.jsx)(t.td,{children:"Ang Y offset mula sa player."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"OffsetZ"}),(0,n.jsx)(t.td,{children:"Ang Z offset mula sa player."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:"1: Matagumpay na naisakatuparan ang function."}),"\n",(0,n.jsx)(t.p,{children:"0: Nabigo ang function na isagawa. Nangangahulugan ito na ang player at/o label ay wala."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:'public OnPlayerConnect(playerid)\n{\n    new Text3D:textLabel = Create3DTextLabel("Hello, I am new here!", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0);\n    Attach3DTextLabelToPlayer(textLabel, playerid, 0.0, 0.0, 0.7);\n    return 1;\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"Create3DTextLabel",children:"Create3DTextLabel"}),": Gumawa ng 3D text label."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"Delete3DTextLabel",children:"Delete3DTextLabel"}),": Magtanggal ng 3D text label."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"Attach3DTextLabelToVehicle",children:"Attach3DTextLabelToVehicle"}),": Maglakip ng 3D text label sa isang sasakyan."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"Update3DTextLabelText",children:"Update3DTextLabelText"}),": Baguhin ang text ng isang 3D text label."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"CreatePlayer3DTextLabel",children:"CreatePlayer3DTextLabel"}),": Gumawa ng 3D text label para sa isang player."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"DeletePlayer3DTextLabel",children:"DeletePlayer3DTextLabel"}),": Tanggalin ang 3D text label ng player."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"UpdatePlayer3DTextLabelText",children:"UpdatePlayer3DTextLabelText"}),": Baguhin ang text ng 3D text label ng player."]}),"\n"]})]})}function o(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},50065:function(e,t,a){a.d(t,{Z:function(){return s},a:function(){return i}});var l=a(67294);let n={},r=l.createContext(n);function i(e){let t=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),l.createElement(r.Provider,{value:t},e.children)}}}]);