"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["28121"],{44996:function(e,n,s){s.r(n),s.d(n,{default:()=>p,frontMatter:()=>d,metadata:()=>t,assets:()=>c,toc:()=>a,contentTitle:()=>l});var t=JSON.parse('{"id":"scripting/functions/UnBlockIpAddress","title":"UnBlockIpAddress","description":"Unblock an IP address that was previously blocked using BlockIpAddress.","source":"@site/docs/scripting/functions/UnBlockIpAddress.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/UnBlockIpAddress","permalink":"/zh-TW/docs/scripting/functions/UnBlockIpAddress","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/UnBlockIpAddress.md","tags":[{"inline":true,"label":"administration","permalink":"/zh-TW/docs/tags/administration"},{"inline":true,"label":"ip address","permalink":"/zh-TW/docs/tags/ip-address"}],"version":"current","frontMatter":{"title":"UnBlockIpAddress","sidebar_label":"UnBlockIpAddress","description":"Unblock an IP address that was previously blocked using BlockIpAddress.","tags":["administration","ip address"]},"sidebar":"docsSidebar","previous":{"title":"ToggleVehicleSirenEnabled","permalink":"/zh-TW/docs/scripting/functions/ToggleVehicleSirenEnabled"},"next":{"title":"Update3DTextLabelText","permalink":"/zh-TW/docs/scripting/functions/Update3DTextLabelText"}}'),i=s("85893"),r=s("50065");let d={title:"UnBlockIpAddress",sidebar_label:"UnBlockIpAddress",description:"Unblock an IP address that was previously blocked using BlockIpAddress.",tags:["administration","ip address"]},l=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function o(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["Unblock an IP address that was previously blocked using ",(0,i.jsx)(n.a,{href:"BlockIpAddress",children:"BlockIpAddress"}),"."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"const ipAddress[]"}),(0,i.jsx)(n.td,{children:"The IP address to unblock."})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:"This function does not return any specific values."}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    UnBlockIpAddress("127.0.0.1");\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"BlockIpAddress",children:"BlockIpAddress"}),": Block an IP address from connecting to the server for a set amount of time."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"IsBanned",children:"IsBanned"}),": Checks if the given IP address is banned."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../callbacks/OnIncomingConnection",children:"OnIncomingConnection"}),": Called when a player is attempting to connect to the server."]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return d}});var t=s(67294);let i={},r=t.createContext(i);function d(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);