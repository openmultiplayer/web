"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["33288"],{46143:function(e,n,r){r.r(n),r.d(n,{default:()=>p,frontMatter:()=>c,metadata:()=>i,assets:()=>s,toc:()=>o,contentTitle:()=>l});var i=JSON.parse('{"id":"scripting/callbacks/OnRecordingPlaybackEnd","title":"OnRecordingPlaybackEnd","description":"Ce rappel est appel\xe9 lorsque qu\'un fichier enregistr\xe9 reproduit avec StartRecordingPlayback a atteint sa fin.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/scripting/callbacks/OnRecordingPlaybackEnd.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnRecordingPlaybackEnd","permalink":"/fr/docs/scripting/callbacks/OnRecordingPlaybackEnd","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnRecordingPlaybackEnd.md","tags":[],"version":"current","frontMatter":{"title":"OnRecordingPlaybackEnd","sidebar_label":"OnRecordingPlaybackEnd","description":"Ce rappel est appel\xe9 lorsque qu\'un fichier enregistr\xe9 reproduit avec StartRecordingPlayback a atteint sa fin.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"OnRconLoginAttempt","permalink":"/fr/docs/scripting/callbacks/OnRconLoginAttempt"},"next":{"title":"OnScriptLoadPlayer","permalink":"/fr/docs/scripting/callbacks/OnScriptLoadPlayer"}}'),t=r("85893"),a=r("50065");let c={title:"OnRecordingPlaybackEnd",sidebar_label:"OnRecordingPlaybackEnd",description:"Ce rappel est appel\xe9 lorsque qu'un fichier enregistr\xe9 reproduit avec StartRecordingPlayback a atteint sa fin.",tags:[]},l=void 0,s={},o=[{value:"Description",id:"description",level:2},{value:"Exemples",id:"exemples",level:2},{value:"Fonctions Relatives",id:"fonctions-relatives",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["Ce rappel est appel\xe9 lorsque qu'un fichier enregistr\xe9 reproduit avec NPC:",(0,t.jsx)(n.a,{href:"../functions/StartRecordingPlayback",children:"StartRecordingPlayback"})," a atteint sa fin."]}),"\n",(0,t.jsx)(n.h2,{id:"exemples",children:"Exemples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'public OnRecordingPlaybackEnd()\n{\n    StartRecordingPlayback(PLAYER_RECORDING_TYPE_DRIVER, "all_around_lv_bus"); // Cela relancera le fichier enregistr\xe9 une fois qu\'il aura fini de se reproduire.\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"fonctions-relatives",children:"Fonctions Relatives"}),"\n",(0,t.jsx)(n.p,{children:"Les fonctions suivantes peuvent \xeatre utiles, car elles sont li\xe9es \xe0 ce rappel d'une mani\xe8re ou d'une autre."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../functions/StartRecordingPlayback",children:"StartRecordingPlayback"}),": Lance la reproduction d'un fichier .rec d\xe9j\xe0 enregistr\xe9."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../functions/StopRecordingPlayback",children:"StopRecordingPlayback"}),": Arr\xeate la reproduction d'un fichier .rec."]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return c}});var i=r(67294);let t={},a=i.createContext(t);function c(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);