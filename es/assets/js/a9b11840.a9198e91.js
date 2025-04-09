"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["84"],{54179:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>s,assets:()=>c,toc:()=>l,contentTitle:()=>a});var s=JSON.parse('{"id":"scripting/functions/EnableZoneNames","title":"EnableZoneNames","description":"This function allows to turn on zone / area names such as the \\"Vinewood\\" or \\"Doherty\\" text at the bottom-right of the screen as they enter the area.","source":"@site/docs/scripting/functions/EnableZoneNames.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/EnableZoneNames","permalink":"/es/docs/scripting/functions/EnableZoneNames","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/EnableZoneNames.md","tags":[],"version":"current","frontMatter":{"title":"EnableZoneNames","sidebar_label":"EnableZoneNames","description":"This function allows to turn on zone / area names such as the \\"Vinewood\\" or \\"Doherty\\" text at the bottom-right of the screen as they enter the area.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"EnableVehicleFriendlyFire","permalink":"/es/docs/scripting/functions/EnableVehicleFriendlyFire"},"next":{"title":"EndObjectEditing","permalink":"/es/docs/scripting/functions/EndObjectEditing"}}'),o=t("85893"),i=t("50065");let r={title:"EnableZoneNames",sidebar_label:"EnableZoneNames",description:'This function allows to turn on zone / area names such as the "Vinewood" or "Doherty" text at the bottom-right of the screen as they enter the area.',tags:[]},a=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(n.p,{children:'This function allows to turn on zone / area names such as the "Vinewood" or "Doherty" text at the bottom-right of the screen as they enter the area. This is a gamemode option and should be set in the callback OnGameModeInit.'}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Name"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsxs)(n.td,{children:["bool",":enable"]}),(0,o.jsx)(n.td,{children:"A toggle option for whether or not you'd like zone names on or off. 'false' is off and 'true' is on."})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsx)(n.p,{children:"This function does not return any specific values."}),"\n",(0,o.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    EnableZoneNames(true);\n    return 1;\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsx)(n.p,{children:"This function was removed in SA-MP 0.3. This was due to crashes it caused."})}),"\n",(0,o.jsxs)(n.admonition,{type:"tip",children:[(0,o.jsxs)(n.p,{children:["You can also enable or disable zone names via ",(0,o.jsx)(n.a,{href:"../../server/config.json",children:"config.json"})]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'"use_zone_names": true,\n'})})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return r}});var s=t(67294);let o={},i=s.createContext(o);function r(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);