"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["15378"],{4069:function(e,t,i){i.r(t),i.d(t,{default:()=>j,frontMatter:()=>l,metadata:()=>n,assets:()=>d,toc:()=>c,contentTitle:()=>s});var n=JSON.parse('{"id":"scripting/functions/Create3DTextLabel","title":"Create3DTextLabel","description":"Kreira 3D Text Label na odre\u0111enoj lokaciji u svijetu.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/Create3DTextLabel.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/Create3DTextLabel","permalink":"/bs/docs/scripting/functions/Create3DTextLabel","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/Create3DTextLabel.md","tags":[{"inline":true,"label":"3dtextlabel","permalink":"/bs/docs/tags/3-dtextlabel"}],"version":"current","frontMatter":{"title":"Create3DTextLabel","sidebar_label":"Create3DTextLabel","description":"Kreira 3D Text Label na odre\u0111enoj lokaciji u svijetu.","tags":["3dtextlabel"]},"sidebar":"docsSidebar","previous":{"title":"CountRunningTimers","permalink":"/bs/docs/scripting/functions/CountRunningTimers"},"next":{"title":"CreateActor","permalink":"/bs/docs/scripting/functions/CreateActor"}}'),r=i("85893"),a=i("50065");let l={title:"Create3DTextLabel",sidebar_label:"Create3DTextLabel",description:"Kreira 3D Text Label na odre\u0111enoj lokaciji u svijetu.",tags:["3dtextlabel"]},s=void 0,d={},c=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function o(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.p,{children:"Ova funkcija je dodana u SA-MP 0.3.a i ne radi u ni\u017Eim verzijama!"})}),"\n",(0,r.jsx)(t.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,r.jsx)(t.p,{children:"Kreira 3D Text Label na odre\u0111enoj lokaciji u svijetu."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Ime"}),(0,r.jsx)(t.th,{children:"Deskripcija"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"text[]"}),(0,r.jsx)(t.td,{children:"Po\u010Detni tekstualni niz."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"color"}),(0,r.jsx)(t.td,{children:"Boja texta, kao cjelobrojni ili hexadcimalni u RGBA formatu"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"x"}),(0,r.jsx)(t.td,{children:"X-Kordinata"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"y"}),(0,r.jsx)(t.td,{children:"Y-Kordinata"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"z"}),(0,r.jsx)(t.td,{children:"Z-Kordinata"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"DrawDistance"}),(0,r.jsx)(t.td,{children:"Udaljenost od mjesta na kojem mo\u017Eete vidjeti 3D text Label"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"VirtualWorld"}),(0,r.jsx)(t.td,{children:"Virtualni svijet u kojem je mogu\u0107e vidjeti 3d Text"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"testLOS"}),(0,r.jsx)(t.td,{children:"0/1 Testirajte vidokrug tako da se ovaj tekst ne mo\u017Ee vidjeti kroz objekte"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.p,{children:"ID novokreiranog 3D Text Labela, ili INVALID_3DTEXT_ID ako je dostignut 3D Text Label limit (MAX_3DTEXT_GLOBAL)."}),"\n",(0,r.jsx)(t.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    Create3DTextLabel("Ja sam na kordinatama:\\n30.0, 40.0, 50.0", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0, 0);\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"drawdistance se \u010Dini da je mnogo manja prilikom spectateanja"})}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"Upotrijebite ugra\u0111ivanje boja za vi\u0161e boja u tekstu."})}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.p,{children:"Ako je text[] prazan, server/clients pored teksta \u010De mo\u017Eda crashati! Ako je virtualworld postavljen na -1 tekst se ne\u0107e pojaviti."})}),"\n",(0,r.jsx)(t.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"Delete3DTextLabel",children:"Delete3DTextLabel"}),": Obri\u0161i 3D text label."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"Attach3DTextLabelToPlayer",children:"Attach3DTextLabelToPlayer"}),": Prikva\u010Di 3D text label za igra\u010Da."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"Attach3DTextLabelToVehicle",children:"Attach3DTextLabelToVehicle"}),": Prikva\u010Di 3D text label za vozilo."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"Update3DTextLabelText",children:"Update3DTextLabelText"}),": Promijeni tekst 3D text labela."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"CreatePlayer3DTextLabel",children:"CreatePlayer3DTextLabel"}),": Kreiraj 3D text label za jednog igra\u010Da."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"DeletePlayer3DTextLabel",children:"DeletePlayer3DTextLabel"}),": Obri\u0161i igra\u010Dev 3D text label."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"UpdatePlayer3DTextLabelText",children:"UpdatePlayer3DTextLabelText"}),": Promijeni tekst igra\u010Devog 3D text labela."]}),"\n"]})]})}function j(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return s},a:function(){return l}});var n=i(67294);let r={},a=n.createContext(r);function l(e){let t=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);