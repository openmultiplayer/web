"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["76926"],{94411:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>a,metadata:()=>t,assets:()=>l,toc:()=>p,contentTitle:()=>o});var t=JSON.parse('{"id":"scripting/functions/GetSVarsUpperIndex","title":"GetSVarsUpperIndex","description":"Each SVar (server-variable) has its own unique identification number for lookup, this function returns the highest ID.","source":"@site/docs/scripting/functions/GetSVarsUpperIndex.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetSVarsUpperIndex","permalink":"/zh-TW/docs/scripting/functions/GetSVarsUpperIndex","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/GetSVarsUpperIndex.md","tags":[{"inline":true,"label":"server variable","permalink":"/zh-TW/docs/tags/server-variable"},{"inline":true,"label":"svar","permalink":"/zh-TW/docs/tags/svar"}],"version":"current","frontMatter":{"title":"GetSVarsUpperIndex","sidebar_label":"GetSVarsUpperIndex","description":"Each SVar (server-variable) has its own unique identification number for lookup, this function returns the highest ID.","tags":["server variable","svar"]},"sidebar":"docsSidebar","previous":{"title":"GetSVarType","permalink":"/zh-TW/docs/scripting/functions/GetSVarType"},"next":{"title":"GetServerRuleFlags","permalink":"/zh-TW/docs/scripting/functions/GetServerRuleFlags"}}'),i=r("85893"),s=r("50065");let a={title:"GetSVarsUpperIndex",sidebar_label:"GetSVarsUpperIndex",description:"Each SVar (server-variable) has its own unique identification number for lookup, this function returns the highest ID.",tags:["server variable","svar"]},o=void 0,l={},p=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Each SVar (server-variable) has its own unique identification number for lookup, this function returns the highest ID."}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"// Store the upper index in the variable 'SVarUpperIndex' + 1\nnew SVarUpperIndex = GetSVarsUpperIndex() + 1;\n\n// This sVarCount variable will store how many sVars are set as we count them.\nnew sVarCount;\n\nnew sVarName[128];\n\nfor(new i = 0; i != sVarUpperIndex; i++) // Loop through all sVar IDs under the upper index\n{\n    // At first, we need to get SVar name\n    GetSVarNameAtIndex(i, sVarName, sizeof(sVarName));\n\n    // If the var is set (type not 0), increment sVarCount.\n    if (GetSVarType(sVarName) != 0)\n    {\n        sVarCount ++;\n    }\n}\n\nprintf(\"There are %i server-variables set. Upper index (highest ID): %i.\", sVarCount, SVarUpperIndex-1);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"GetSVarNameAtIndex",children:"GetSVarNameAtIndex"}),": Get the server variable's name from its index."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"GetSVarType",children:"GetSVarType"}),": Get the type of the server variable."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return a}});var t=r(67294);let i={},s=t.createContext(i);function a(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);