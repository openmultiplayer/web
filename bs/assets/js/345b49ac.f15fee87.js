"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["79825"],{61860:function(e,t,i){i.r(t),i.d(t,{default:()=>h,frontMatter:()=>a,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>o});var r=JSON.parse('{"id":"scripting/functions/SetWeather","title":"SetWeather","description":"Postavite vrijeme (weather) za sve igra\u010De.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/SetWeather.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetWeather","permalink":"/bs/docs/scripting/functions/SetWeather","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/SetWeather.md","tags":[],"version":"current","frontMatter":{"title":"SetWeather","sidebar_label":"SetWeather","description":"Postavite vrijeme (weather) za sve igra\u010De.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"SetVehicleZAngle","permalink":"/bs/docs/scripting/functions/SetVehicleZAngle"},"next":{"title":"SetWorldTime","permalink":"/bs/docs/scripting/functions/SetWorldTime"}}'),n=i("85893"),s=i("50065");let a={title:"SetWeather",sidebar_label:"SetWeather",description:"Postavite vrijeme (weather) za sve igra\u010De.",tags:[]},o=void 0,l={},c=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function d(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,n.jsx)(t.p,{children:"Postavite vrijeme (weather) za sve igra\u010De."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Ime"}),(0,n.jsx)(t.th,{children:"Deskripcija"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"weatherid"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:"../resources/weatherid",children:"Vrijeme/weather"})," za postaviti."]})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:"Ova funkcija ne returna (vra\u0107a) nikakve posebne vrijednosti."}),"\n",(0,n.jsx)(t.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:'if (!strcmp(cmdtext, "/sandstorm", true))\n{\n    SetWeather(19);\n    return 1;\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"Ako je omogu\u0107en TogglePlayerClock, vrijeme \u0107e se polahko mijenjati s vremenom, umjesto da se promijeni trenutno. U igri postoje samo va\u017Ee\u0107i 21 vremenski ID (0 - 20), ali igra nema bilo kakav oblik provjere dometa."})}),"\n",(0,n.jsx)(t.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"SetPlayerWeather",children:"SetPlayerWeather"}),": Postavite vrijeme (weather) igra\u010Da."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"SetGravity",children:"SetGravity"}),": Postavite globalnu gravitaciju."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},50065:function(e,t,i){i.d(t,{Z:function(){return o},a:function(){return a}});var r=i(67294);let n={},s=r.createContext(n);function a(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);