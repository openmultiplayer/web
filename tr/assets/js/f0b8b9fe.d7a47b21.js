"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["65730"],{82521:function(e,n,r){r.r(n),r.d(n,{default:()=>g,frontMatter:()=>t,metadata:()=>a,assets:()=>s,toc:()=>c,contentTitle:()=>o});var a=JSON.parse('{"id":"scripting/callbacks/OnPlayerEnterPlayerGangZone","title":"OnPlayerEnterPlayerGangZone","description":"Bu geri \xe7a\u011F\u0131rma, bir oyuncu bir player gangzone\'a girdi\u011Finde \xe7a\u011F\u0131r\u0131l\u0131r.","source":"@site/i18n/tr/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerEnterPlayerGangZone.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerEnterPlayerGangZone","permalink":"/tr/docs/scripting/callbacks/OnPlayerEnterPlayerGangZone","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerEnterPlayerGangZone.md","tags":[{"inline":true,"label":"player","permalink":"/tr/docs/tags/player"},{"inline":true,"label":"gangzone","permalink":"/tr/docs/tags/gangzone"}],"version":"current","frontMatter":{"title":"OnPlayerEnterPlayerGangZone","sidebar_label":"OnPlayerEnterPlayerGangZone","description":"Bu geri \xe7a\u011F\u0131rma, bir oyuncu bir player gangzone\'a girdi\u011Finde \xe7a\u011F\u0131r\u0131l\u0131r.","tags":["player","gangzone"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerEnterGangZone","permalink":"/tr/docs/scripting/callbacks/OnPlayerEnterGangZone"},"next":{"title":"OnPlayerEnterRaceCheckpoint","permalink":"/tr/docs/scripting/callbacks/OnPlayerEnterRaceCheckpoint"}}'),l=r("85893"),i=r("50065");let t={title:"OnPlayerEnterPlayerGangZone",sidebar_label:"OnPlayerEnterPlayerGangZone",description:"Bu geri \xe7a\u011F\u0131rma, bir oyuncu bir player gangzone'a girdi\u011Finde \xe7a\u011F\u0131r\u0131l\u0131r.",tags:["player","gangzone"]},o=void 0,s={},c=[{value:"A\xe7\u0131klama",id:"a\xe7\u0131klama",level:2},{value:"\xc7al\u0131\u015F\u0131nca Verece\u011Fi Sonu\xe7lar",id:"\xe7al\u0131\u015F\u0131nca-verece\u011Fi-sonu\xe7lar",level:2},{value:"\xd6rnek",id:"\xf6rnek",level:2},{value:"Ba\u011Flant\u0131l\u0131 Geri \xc7a\u011F\u0131rmalar",id:"ba\u011Flant\u0131l\u0131-geri-\xe7a\u011F\u0131rmalar",level:2},{value:"Ba\u011Flant\u0131l\u0131 Fonksiyonlar",id:"ba\u011Flant\u0131l\u0131-fonksiyonlar",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components},{VersionWarn:r}=n;return r||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r,{name:"callback",version:"omp v1.1.0.2612"}),"\n",(0,l.jsx)(n.h2,{id:"a\xe7\u0131klama",children:"A\xe7\u0131klama"}),"\n",(0,l.jsx)(n.p,{children:"Bu geri \xe7a\u011F\u0131rma, bir oyuncu bir player gangzone'a girdi\u011Finde \xe7a\u011F\u0131r\u0131l\u0131r."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Parametre"}),(0,l.jsx)(n.th,{children:"A\xe7\u0131klama"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"Player gangzone'a giren oyuncunun ID'si"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"zoneid"}),(0,l.jsx)(n.td,{children:"Oyuncunun girdi\u011Fi player gangzone'un ID'si"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\xe7al\u0131\u015F\u0131nca-verece\u011Fi-sonu\xe7lar",children:"\xc7al\u0131\u015F\u0131nca Verece\u011Fi Sonu\xe7lar"}),"\n",(0,l.jsx)(n.p,{children:"Her zaman gamemode'da ilk olarak \xe7a\u011F\u0131r\u0131l\u0131r."}),"\n",(0,l.jsx)(n.h2,{id:"\xf6rnek",children:"\xd6rnek"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'public OnPlayerEnterPlayerGangZone(playerid, zoneid)\n{\n    new string[128];\n    format(string, sizeof(string), "Player gangzone %i\'ye giriyorsunuz", zoneid);\n    SendClientMessage(playerid, 0xFFFFFFFF, string);\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"ba\u011Flant\u0131l\u0131-geri-\xe7a\u011F\u0131rmalar",children:"Ba\u011Flant\u0131l\u0131 Geri \xc7a\u011F\u0131rmalar"}),"\n",(0,l.jsx)(n.p,{children:"A\u015Fa\u011F\u0131daki geri \xe7a\u011F\u0131rmalar bu geri \xe7a\u011F\u0131rma ile bir \u015Fekilde ili\u015Fkilidir ve faydal\u0131 olabilirler."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"OnPlayerLeavePlayerGangZone",children:"OnPlayerLeavePlayerGangZone"}),": Bu geri \xe7a\u011F\u0131rma, bir oyuncu bir player gangzone'dan \xe7\u0131kt\u0131\u011F\u0131nda \xe7a\u011F\u0131r\u0131l\u0131r."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"ba\u011Flant\u0131l\u0131-fonksiyonlar",children:"Ba\u011Flant\u0131l\u0131 Fonksiyonlar"}),"\n",(0,l.jsx)(n.p,{children:"A\u015Fa\u011F\u0131daki fonksiyonlar bu geri \xe7a\u011F\u0131rma ile bir \u015Fekilde ili\u015Fkilidir ve faydal\u0131 olabilirler."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/CreatePlayerGangZone",children:"CreatePlayerGangZone"}),": Player gangzone olu\u015Fturur."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/PlayerGangZoneDestroy",children:"PlayerGangZoneDestroy"}),": Player gangzone'u yok eder."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/UsePlayerGangZoneCheck",children:"UsePlayerGangZoneCheck"}),": Bir oyuncu bu b\xf6lgeye girdi\u011Finde geri \xe7a\u011F\u0131rmay\u0131 etkinle\u015Ftirir."]}),"\n"]})]})}function g(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return t}});var a=r(67294);let l={},i=a.createContext(l);function t(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);