"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["8693"],{11497:function(e,i,n){n.r(i),n.d(i,{default:()=>j,frontMatter:()=>d,metadata:()=>r,assets:()=>a,toc:()=>o,contentTitle:()=>c});var r=JSON.parse('{"id":"scripting/functions/memcpy","title":"memcpy","description":"Kopirajte bajtove s jedne lokacije na drugu.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/memcpy.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/memcpy","permalink":"/bs/docs/scripting/functions/memcpy","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/memcpy.md","tags":[],"version":"current","frontMatter":{"title":"memcpy","sidebar_label":"memcpy","description":"Kopirajte bajtove s jedne lokacije na drugu.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"max","permalink":"/bs/docs/scripting/functions/max"},"next":{"title":"min","permalink":"/bs/docs/scripting/functions/min"}}'),t=n("85893"),s=n("50065");let d={title:"memcpy",sidebar_label:"memcpy",description:"Kopirajte bajtove s jedne lokacije na drugu.",tags:[]},c=void 0,a={},o=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function l(e){let i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.admonition,{type:"warning",children:(0,t.jsx)(i.p,{children:"Ova funkcija zapo\u010Dinje malim slovom."})}),"\n",(0,t.jsx)(i.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,t.jsx)(i.p,{children:"Kopirajte bajtove s jedne lokacije na drugu."}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Ime"}),(0,t.jsx)(i.th,{children:"Deskripcija"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"dest[]"}),(0,t.jsx)(i.td,{children:"Niz u koji se kopiraju bajtovi iz izvora."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"const source[]"}),(0,t.jsx)(i.td,{children:"Izvorni niz."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"index"}),(0,t.jsx)(i.td,{children:"Po\u010Detni indeks u bajtovima u odredi\u0161nom nizu u koji treba kopirati podatke."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"numbytes"}),(0,t.jsx)(i.td,{children:"Broj bajtova (ne \u0107elija) za kopiranje."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"maxlength=sizeof dest"}),(0,t.jsx)(i.td,{children:"Maksimalan broj \u0107elija koje se uklapaju u odredi\u0161ni me\u0111uspremnik."})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(i.p,{children:"True/ta\u010Dno pri uspje\u0161nom, false/neta\u010Dno pri gre\u0161ci."}),"\n",(0,t.jsx)(i.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-c",children:'//Spojite dva stinga s memcpy\nnew\n    destination[64] = "Ovo je ",\n    source[] = "niz u 32-bitnom nizu";\n\nmemcpy(destination, source, strlen(destination) * 4, sizeof source * 4, sizeof destination);\nprint(destination);\n//Izlaz: Ovo je niz u 32-bitnom nizu\n'})}),"\n",(0,t.jsx)(i.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"strcmp",children:"strcmp"}),": Uporedite dva stringa da biste vidjeli jesu li isti."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"strfind",children:"strfind"}),": Potra\u017Eite podstring u stringu."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"strdel",children:"strdel"}),": Izbri\u0161i dio/cijeli string."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"strins",children:"strins"}),": Stavite string u drugi string."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"strlen",children:"strlen"}),": Provjeri du\u017Einu stringa."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"strmid",children:"strmid"}),": Izdvoji znakove iz stringa."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"strpack",children:"strpack"}),": Spakujte string u odredi\u0161te."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"strval",children:"strval"}),": Prona\u0111i vrijednost strina."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"strcat",children:"strcat"}),": Spoji dva stringa."]}),"\n"]})]})}function j(e={}){let{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},50065:function(e,i,n){n.d(i,{Z:function(){return c},a:function(){return d}});var r=n(67294);let t={},s=r.createContext(t);function d(e){let i=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(s.Provider,{value:i},e.children)}}}]);