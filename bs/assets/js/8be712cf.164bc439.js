"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["33172"],{67810:function(e,n,i){i.r(n),i.d(n,{default:()=>c,frontMatter:()=>s,metadata:()=>r,assets:()=>d,toc:()=>u,contentTitle:()=>o});var r=JSON.parse('{"id":"scripting/functions/DisableMenuRow","title":"DisableMenuRow","description":"Onemogu\u0107ite odre\u0111eni red u meniju za sve igra\u010De.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/DisableMenuRow.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/DisableMenuRow","permalink":"/bs/docs/scripting/functions/DisableMenuRow","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/DisableMenuRow.md","tags":[{"inline":true,"label":"menu","permalink":"/bs/docs/tags/menu"}],"version":"current","frontMatter":{"title":"DisableMenuRow","sidebar_label":"DisableMenuRow","description":"Onemogu\u0107ite odre\u0111eni red u meniju za sve igra\u010De.","tags":["menu"]},"sidebar":"docsSidebar","previous":{"title":"DisableMenu","permalink":"/bs/docs/scripting/functions/DisableMenu"},"next":{"title":"DisableNameTagLOS","permalink":"/bs/docs/scripting/functions/DisableNameTagLOS"}}'),a=i("85893"),t=i("50065");let s={title:"DisableMenuRow",sidebar_label:"DisableMenuRow",description:"Onemogu\u0107ite odre\u0111eni red u meniju za sve igra\u010De.",tags:["menu"]},o=void 0,d={},u=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function l(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,a.jsx)(n.p,{children:"Onemogu\u0107ite odre\u0111eni red u meniju za sve igra\u010De. Bit \u0107e zasjenjeno i igra\u010Di ga ne\u0107e mo\u0107i odabrati."}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Ime"}),(0,a.jsx)(n.th,{children:"Deskripcija"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsxs)(n.td,{children:["Menu",":menuid"]}),(0,a.jsx)(n.td,{children:"ID menija za onemogu\u0107avanje reda. Uvjerite se da je ovo valjano, jer \u0107e neva\u017Ee\u0107i ID izbornika sru\u0161iti cijeli server."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"row"}),(0,a.jsx)(n.td,{children:"ID reda za onemogu\u0107avanje (redovi po\u010Dinju sa 0)."})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(n.p,{children:"Ova funkcija uvijek returna (vra\u0107a) 1, bilo i da funkcija ne uspije. Ako je naveden nevaljani redak, ni\u0161ta se ne\u0107e dogoditi. Ako je naveden neva\u017Ee\u0107i ID menija, server \u0107e crashovati."}),"\n",(0,a.jsx)(n.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:'new Menu:WeaponMenu;\n\nWeaponMenu = CreateMenu("Weapons", 1, 50.0, 180.0, 200.0, 200.0);\nAddMenuItem(WeaponMenu, 0, "Rocket Launcher");\nAddMenuItem(WeaponMenu, 0, "Flamethrower");\nAddMenuItem(WeaponMenu, 0, "Minigun");\nAddMenuItem(WeaponMenu, 0, "Grenades");\nif (!strcmp(cmdtext, "/disablemenu", true))\n{\n    DisableMenuRow(WeaponMenu, 2); //Disable the "Minigun" row\n    return 1;\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"Ru\u0161i se kada se proslijedi neva\u017Ee\u0107i ID menija. Ova je funkcija onemogu\u0107ila navedeni red menija za sve igra\u010De. Ne postoji funkcija za onemogu\u0107avanje reda menija za odre\u0111enog igra\u010Da. Morali biste stvoriti dva menija - jedan s onemogu\u0107enim redom i jedan bez. Ili po jedan po igra\u010Du."})}),"\n",(0,a.jsx)(n.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"CreateMenu",children:"CreateMenu"}),": Kreiraj meni."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"DestroyMenu",children:"DestroyMenu"}),": Uni\u0161ti meni."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"AddMenuItem",children:"AddMenuItem"}),": Dodaj artikal u meni."]}),"\n"]})]})}function c(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return s}});var r=i(67294);let a={},t=r.createContext(a);function s(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);