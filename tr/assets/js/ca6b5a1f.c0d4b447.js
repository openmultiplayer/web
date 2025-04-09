"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["41767"],{24446:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>t,metadata:()=>a,assets:()=>s,toc:()=>c,contentTitle:()=>o});var a=JSON.parse('{"id":"scripting/callbacks/OnPlayerEnterGangZone","title":"OnPlayerEnterGangZone","description":"Bu geri \xe7a\u011F\u0131rma, bir oyuncu bir gangzone\'a girdi\u011Finde \xe7a\u011Fr\u0131l\u0131r.","source":"@site/i18n/tr/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerEnterGangZone.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerEnterGangZone","permalink":"/tr/docs/scripting/callbacks/OnPlayerEnterGangZone","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerEnterGangZone.md","tags":[{"inline":true,"label":"player","permalink":"/tr/docs/tags/player"},{"inline":true,"label":"gangzone","permalink":"/tr/docs/tags/gangzone"}],"version":"current","frontMatter":{"title":"OnPlayerEnterGangZone","sidebar_label":"OnPlayerEnterGangZone","description":"Bu geri \xe7a\u011F\u0131rma, bir oyuncu bir gangzone\'a girdi\u011Finde \xe7a\u011Fr\u0131l\u0131r.","tags":["player","gangzone"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerEnterCheckpoint","permalink":"/tr/docs/scripting/callbacks/OnPlayerEnterCheckpoint"},"next":{"title":"OnPlayerEnterPlayerGangZone","permalink":"/tr/docs/scripting/callbacks/OnPlayerEnterPlayerGangZone"}}'),i=r("85893"),l=r("50065");let t={title:"OnPlayerEnterGangZone",sidebar_label:"OnPlayerEnterGangZone",description:"Bu geri \xe7a\u011F\u0131rma, bir oyuncu bir gangzone'a girdi\u011Finde \xe7a\u011Fr\u0131l\u0131r.",tags:["player","gangzone"]},o=void 0,s={},c=[{value:"A\xe7\u0131klama",id:"a\xe7\u0131klama",level:2},{value:"\xc7al\u0131\u015F\u0131nca Verece\u011Fi Sonu\xe7lar",id:"\xe7al\u0131\u015F\u0131nca-verece\u011Fi-sonu\xe7lar",level:2},{value:"\xd6rnek",id:"\xf6rnek",level:2},{value:"Ba\u011Flant\u0131l\u0131 Geri \xc7a\u011F\u0131rmalar",id:"ba\u011Flant\u0131l\u0131-geri-\xe7a\u011F\u0131rmalar",level:2},{value:"Ba\u011Flant\u0131l\u0131 Fonksiyonlar",id:"ba\u011Flant\u0131l\u0131-fonksiyonlar",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{VersionWarn:r}=n;return r||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{name:"callback",version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(n.h2,{id:"a\xe7\u0131klama",children:"A\xe7\u0131klama"}),"\n",(0,i.jsx)(n.p,{children:"Bu geri \xe7a\u011F\u0131rma, bir oyuncu bir gangzone'a girdi\u011Finde \xe7a\u011Fr\u0131l\u0131r."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parametre"}),(0,i.jsx)(n.th,{children:"A\xe7\u0131klama"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"playerid"}),(0,i.jsx)(n.td,{children:"Gangzone'a giren oyuncunun ID'si"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"zoneid"}),(0,i.jsx)(n.td,{children:"Oyuncunun girdi\u011Fi gangzone'un ID'si"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"\xe7al\u0131\u015F\u0131nca-verece\u011Fi-sonu\xe7lar",children:"\xc7al\u0131\u015F\u0131nca Verece\u011Fi Sonu\xe7lar"}),"\n",(0,i.jsx)(n.p,{children:"Her zaman gamemode'da ilk olarak \xe7a\u011Fr\u0131l\u0131r."}),"\n",(0,i.jsx)(n.h2,{id:"\xf6rnek",children:"\xd6rnek"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'public OnPlayerEnterGangZone(playerid, zoneid)\n{\n    new string[128];\n    format(string, sizeof(string), "Gangzone %i\'ye giriyorsunuz", zoneid);\n    SendClientMessage(playerid, 0xFFFFFFFF, string);\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"ba\u011Flant\u0131l\u0131-geri-\xe7a\u011F\u0131rmalar",children:"Ba\u011Flant\u0131l\u0131 Geri \xc7a\u011F\u0131rmalar"}),"\n",(0,i.jsx)(n.p,{children:"A\u015Fa\u011F\u0131daki geri \xe7a\u011F\u0131rmalar bu geri \xe7a\u011F\u0131rma ile bir \u015Fekilde ili\u015Fkilidir ve faydal\u0131 olabilirler."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"OnPlayerLeaveGangZone",children:"OnPlayerLeaveGangZone"}),": Bu geri \xe7a\u011F\u0131rma, bir oyuncu bir gangzone'dan \xe7\u0131kt\u0131\u011F\u0131nda \xe7a\u011Fr\u0131l\u0131r."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"ba\u011Flant\u0131l\u0131-fonksiyonlar",children:"Ba\u011Flant\u0131l\u0131 Fonksiyonlar"}),"\n",(0,i.jsx)(n.p,{children:"A\u015Fa\u011F\u0131daki fonksiyonlar bu geri \xe7a\u011F\u0131rma ile bir \u015Fekilde ili\u015Fkilidir ve faydal\u0131 olabilirler."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../functions/GangZoneCreate",children:"GangZoneCreate"}),": Bir gangzone (renkli radar alan\u0131) olu\u015Fturur."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../functions/GangZoneDestroy",children:"GangZoneDestroy"}),": Bir gangzone'u yok eder."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../functions/UseGangZoneCheck",children:"UseGangZoneCheck"}),": Bir oyuncu bu b\xf6lgeye girdi\u011Finde geri \xe7a\u011F\u0131rmay\u0131 etkinle\u015Ftirir."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return t}});var a=r(67294);let i={},l=a.createContext(i);function t(e){let n=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);