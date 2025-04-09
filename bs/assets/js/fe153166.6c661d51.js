"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["92284"],{58318:function(e,n,i){i.r(n),i.d(n,{default:()=>d,frontMatter:()=>a,metadata:()=>r,assets:()=>s,toc:()=>o,contentTitle:()=>l});var r=JSON.parse('{"id":"scripting/callbacks/OnPlayerEnterRaceCheckpoint","title":"OnPlayerEnterRaceCheckpoint","description":"Ovaj callback je pozvan kada igra\u010D u\u0111e u trka\u010Dki checkpoint.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerEnterRaceCheckpoint.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerEnterRaceCheckpoint","permalink":"/bs/docs/scripting/callbacks/OnPlayerEnterRaceCheckpoint","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/callbacks/OnPlayerEnterRaceCheckpoint.md","tags":[{"inline":true,"label":"player","permalink":"/bs/docs/tags/player"},{"inline":true,"label":"checkpoint","permalink":"/bs/docs/tags/checkpoint"},{"inline":true,"label":"racecheckpoint","permalink":"/bs/docs/tags/racecheckpoint"}],"version":"current","frontMatter":{"title":"OnPlayerEnterRaceCheckpoint","sidebar_label":"OnPlayerEnterRaceCheckpoint","description":"Ovaj callback je pozvan kada igra\u010D u\u0111e u trka\u010Dki checkpoint.","tags":["player","checkpoint","racecheckpoint"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerEnterPlayerGangZone","permalink":"/bs/docs/scripting/callbacks/OnPlayerEnterPlayerGangZone"},"next":{"title":"OnPlayerEnterVehicle","permalink":"/bs/docs/scripting/callbacks/OnPlayerEnterVehicle"}}'),c=i("85893"),t=i("50065");let a={title:"OnPlayerEnterRaceCheckpoint",sidebar_label:"OnPlayerEnterRaceCheckpoint",description:"Ovaj callback je pozvan kada igra\u010D u\u0111e u trka\u010Dki checkpoint.",tags:["player","checkpoint","racecheckpoint"]},l=void 0,s={},o=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function p(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,c.jsx)(n.p,{children:"Ovaj callback je pozvan kada igra\u010D u\u0111e u trka\u010Dki checkpoint."}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Ime"}),(0,c.jsx)(n.th,{children:"Deskripcija"})]})}),(0,c.jsx)(n.tbody,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"playerid"}),(0,c.jsx)(n.td,{children:"ID igra\u010Da koji je u\u0161ao u trka\u010Dki checkpoint."})]})})]}),"\n",(0,c.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,c.jsx)(n.p,{children:"Uvijek je pozvana prva u filterskripti."}),"\n",(0,c.jsx)(n.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-c",children:'public OnPlayerEnterRaceCheckpoint(playerid)\n{\n    printf("Igrac %d je usao u trkacki checkpoint!", playerid);\n    return 1;\n}\n'})}),"\n",(0,c.jsx)(n.admonition,{type:"tip",children:(0,c.jsx)(n.p,{children:"Ovaj callback pozvat \u0107e i NPC."})}),"\n",(0,c.jsx)(n.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"/bs/docs/scripting/functions/SetPlayerCheckpoint",children:"SetPlayerCheckpoint"}),": Kreiraj checkpoint za igra\u010Da."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"/bs/docs/scripting/functions/DisablePlayerCheckpoint",children:"DisablePlayerCheckpoint"}),": Onesposobi igra\u010Dev trenutni checkpoint."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"/bs/docs/scripting/functions/IsPlayerInRaceCheckpoint",children:"IsPlayerInCheckpoint"}),": Provjeri da li je igra\u010D u checkpointu."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"/bs/docs/scripting/functions/SetPlayerRaceCheckpoint",children:"SetPlayerRaceCheckpoint"}),": Kreiraj trka\u010Dki checkpoint."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"/bs/docs/scripting/functions/DisablePlayerRaceCheckpoint",children:"DisablePlayerRaceCheckpoint"}),": Onesposobi igra\u010Dev trenutni trka\u010Dki checkpoint."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"/bs/docs/scripting/functions/IsPlayerInRaceCheckpoint",children:"IsPlayerInRaceCheckpoint"}),": Provjeri da li je igra\u010D u trka\u010Dkom checkpointu."]}),"\n"]})]})}function d(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(p,{...e})}):p(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return a}});var r=i(67294);let c={},t=r.createContext(c);function a(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);