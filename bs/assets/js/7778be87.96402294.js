"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["17954"],{30994:function(e,t,r){r.r(t),r.d(t,{default:()=>c,frontMatter:()=>o,metadata:()=>i,assets:()=>l,toc:()=>d,contentTitle:()=>s});var i=JSON.parse('{"id":"scripting/functions/StopAudioStreamForPlayer","title":"StopAudioStreamForPlayer","description":"Zaustavlja trenutni audio tok za igra\u010Da.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/StopAudioStreamForPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/StopAudioStreamForPlayer","permalink":"/bs/docs/scripting/functions/StopAudioStreamForPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/StopAudioStreamForPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/bs/docs/tags/player"}],"version":"current","frontMatter":{"title":"StopAudioStreamForPlayer","sidebar_label":"StopAudioStreamForPlayer","description":"Zaustavlja trenutni audio tok za igra\u010Da.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"StartRecordingPlayerData","permalink":"/bs/docs/scripting/functions/StartRecordingPlayerData"},"next":{"title":"StopObject","permalink":"/bs/docs/scripting/functions/StopObject"}}'),n=r("85893"),a=r("50065");let o={title:"StopAudioStreamForPlayer",sidebar_label:"StopAudioStreamForPlayer",description:"Zaustavlja trenutni audio tok za igra\u010Da.",tags:["player"]},s=void 0,l={},d=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function u(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,n.jsx)(t.p,{children:"Zaustavlja trenutni audio tok za igra\u010Da."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Ime"}),(0,n.jsx)(t.th,{children:"Deskripcija"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"playerid"}),(0,n.jsx)(t.td,{children:"Igra\u010D kojem \u017Eelite zaustaviti trenutni audio tok."})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:"Ova funkcija ne returna (vra\u0107a) nikakve posebne vrijednosti."}),"\n",(0,n.jsx)(t.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:"public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)\n{\n    // Ako igra\u010D napusti vozilo\n    if (oldstate == PLAYER_STATE_DRIVER || oldstate == PLAYER_STATE_PASSENGER)\n    {\n        StopAudioStreamForPlayer(playerid); // Zaustavi audio stream\n    }\n    return 1;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayAudioStreamForPlayer",children:"PlayAudioStreamForPlayer"}),": Reprodukuje audio tok za igra\u010Da."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerPlaySound",children:"PlayerPlaySound"}),": Reprodukujte zvuk za igra\u010Da."]}),"\n"]})]})}function c(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},50065:function(e,t,r){r.d(t,{Z:function(){return s},a:function(){return o}});var i=r(67294);let n={},a=i.createContext(n);function o(e){let t=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);