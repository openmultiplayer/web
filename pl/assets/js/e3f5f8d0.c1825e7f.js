"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["66383"],{63375:function(e,t,a){a.r(t),a.d(t,{default:()=>x,frontMatter:()=>i,metadata:()=>n,assets:()=>c,toc:()=>d,contentTitle:()=>s});var n=JSON.parse('{"id":"scripting/functions/Attach3DTextLabelToPlayer","title":"Attach3DTextLabelToPlayer","description":"Przyczepia tekst 3D do gracza.","source":"@site/i18n/pl/docusaurus-plugin-content-docs/current/scripting/functions/Attach3DTextLabelToPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/Attach3DTextLabelToPlayer","permalink":"/pl/docs/scripting/functions/Attach3DTextLabelToPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/Attach3DTextLabelToPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/pl/docs/tags/player"},{"inline":true,"label":"3dtextlabel","permalink":"/pl/docs/tags/3-dtextlabel"}],"version":"current","frontMatter":{"title":"Attach3DTextLabelToPlayer","sidebar_label":"Attach3DTextLabelToPlayer","description":"Przyczepia tekst 3D do gracza.","tags":["player","3dtextlabel"]},"sidebar":"docsSidebar","previous":{"title":"ArePlayerWeaponsAllowed","permalink":"/pl/docs/scripting/functions/ArePlayerWeaponsAllowed"},"next":{"title":"Attach3DTextLabelToVehicle","permalink":"/pl/docs/scripting/functions/Attach3DTextLabelToVehicle"}}'),r=a("85893"),l=a("50065");let i={title:"Attach3DTextLabelToPlayer",sidebar_label:"Attach3DTextLabelToPlayer",description:"Przyczepia tekst 3D do gracza.",tags:["player","3dtextlabel"]},s=void 0,c={},d=[{value:"Opis",id:"opis",level:2},{value:"Zwracane warto\u015Bci",id:"zwracane-warto\u015Bci",level:2},{value:"Przyk\u0142ady",id:"przyk\u0142ady",level:2},{value:"Powi\u0105zane funkcje",id:"powi\u0105zane-funkcje",level:2}];function o(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"opis",children:"Opis"}),"\n",(0,r.jsx)(t.p,{children:"Przyczepia tekst 3D do gracza."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Nazwa"}),(0,r.jsx)(t.th,{children:"Opis"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Text3D",":textid"]}),(0,r.jsx)(t.td,{children:"ID tekstu 3D do przyczepienia. Zwracane przez Create3DTextLabel."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"playerid"}),(0,r.jsx)(t.td,{children:"ID gracza, do kt\xf3rego tekst 3D ma zosta\u0107 przyczepiony."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"OffsetX"}),(0,r.jsx)(t.td,{children:"Offset X gracza."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"OffsetY"}),(0,r.jsx)(t.td,{children:"Offset Y gracza."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"OffsetZ"}),(0,r.jsx)(t.td,{children:"Offset Z gracza."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"zwracane-warto\u015Bci",children:"Zwracane warto\u015Bci"}),"\n",(0,r.jsx)(t.p,{children:"1: Funkcja wykona\u0142a si\u0119 prawid\u0142owo."}),"\n",(0,r.jsx)(t.p,{children:"0: Funkcja nie wykona\u0142a si\u0119 prawid\u0142owo. Oznacza to, \u017Ce gracz i/lub tekst 3D nie istniej\u0105."}),"\n",(0,r.jsx)(t.h2,{id:"przyk\u0142ady",children:"Przyk\u0142ady"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'public OnPlayerConnect(playerid)\n{\n    new Text3D:textLabel = Create3DTextLabel("Hej, jestem tu nowy!", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0);\n    Attach3DTextLabelToPlayer(textLabel, playerid, 0.0, 0.0, 0.7);\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"powi\u0105zane-funkcje",children:"Powi\u0105zane funkcje"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"Create3DTextLabel.md",children:"Create3DTextLabel"}),": Tworzy tekst 3D."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"Delete3DTextLabel.md",children:"Delete3DTextLabel"}),": Kasuje tekst 3D."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/pl/docs/scripting/functions/Attach3DTextLabelToVehicle",children:"Attach3DTextLabelToVehicle"}),": Przyczepia tekst 3D do pojazdu."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"Update3DTextLabelText.md",children:"Update3DTextLabelText"}),": Zmienia tre\u015B\u0107 tekstu 3D."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"CreatePlayer3DTextLabel.md",children:"CreatePlayer3DTextLabel"}),": Tworzy tekst 3D dla konkretnego gracza."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"DeletePlayer3DTextLabel.md",children:"DeletePlayer3DTextLabel"}),": Kasuje tekst 3D danego gracza."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"UpdatePlayer3DTextLabel.md",children:"UpdatePlayer3DTextLabelText"}),": Zmienia tre\u015B\u0107 tekstu 3D danego gracza."]}),"\n"]})]})}function x(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},50065:function(e,t,a){a.d(t,{Z:function(){return s},a:function(){return i}});var n=a(67294);let r={},l=n.createContext(r);function i(e){let t=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);