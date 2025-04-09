"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["63038"],{28419:function(e,a,n){n.r(a),n.d(a,{default:()=>c,frontMatter:()=>l,metadata:()=>t,assets:()=>o,toc:()=>d,contentTitle:()=>s});var t=JSON.parse('{"id":"scripting/functions/StopAudioStreamForPlayer","title":"StopAudioStreamForPlayer","description":"Ihihinto ang kasalukuyang audio stream para sa isang player.","source":"@site/i18n/fil/docusaurus-plugin-content-docs/current/scripting/functions/StopAudioStreamForPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/StopAudioStreamForPlayer","permalink":"/fil/docs/scripting/functions/StopAudioStreamForPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/StopAudioStreamForPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/fil/docs/tags/player"}],"version":"current","frontMatter":{"title":"StopAudioStreamForPlayer","sidebar_label":"StopAudioStreamForPlayer","description":"Ihihinto ang kasalukuyang audio stream para sa isang player.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"StartRecordingPlayerData","permalink":"/fil/docs/scripting/functions/StartRecordingPlayerData"},"next":{"title":"StopObject","permalink":"/fil/docs/scripting/functions/StopObject"}}'),r=n("85893"),i=n("50065");let l={title:"StopAudioStreamForPlayer",sidebar_label:"StopAudioStreamForPlayer",description:"Ihihinto ang kasalukuyang audio stream para sa isang player.",tags:["player"]},s=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function u(e){let a={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(a.p,{children:"Ihihinto ang kasalukuyang audio stream para sa isang player."}),"\n",(0,r.jsxs)(a.table,{children:[(0,r.jsx)(a.thead,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.th,{children:"Name"}),(0,r.jsx)(a.th,{children:"Description"})]})}),(0,r.jsx)(a.tbody,{children:(0,r.jsxs)(a.tr,{children:[(0,r.jsx)(a.td,{children:"playerid"}),(0,r.jsx)(a.td,{children:"Ang player na gusto mong ihinto ang audio stream."})]})})]}),"\n",(0,r.jsx)(a.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(a.p,{children:"Ang function na ito ay hindi nagbabalik ng anumang value."}),"\n",(0,r.jsx)(a.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-c",children:"public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)\n{\n    // Kung ang manlalaro ay lumabas ng sasakyan\n    if (oldstate == PLAYER_STATE_DRIVER || oldstate == PLAYER_STATE_PASSENGER)\n    {\n        StopAudioStreamForPlayer(playerid); // Itigil ang audio stream\n    }\n    return 1;\n}\n"})}),"\n",(0,r.jsx)(a.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.a,{href:"PlayAudioStreamForPlayer",children:"PlayAudioStreamForPlayer"}),": Nagpe-play ng audio stream para sa isang player."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.a,{href:"PlayerPlaySound",children:"PlayerPlaySound"}),": Magpatugtog ng tunog para sa isang manlalaro."]}),"\n"]})]})}function c(e={}){let{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},50065:function(e,a,n){n.d(a,{Z:function(){return s},a:function(){return l}});var t=n(67294);let r={},i=t.createContext(r);function l(e){let a=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:a},e.children)}}}]);