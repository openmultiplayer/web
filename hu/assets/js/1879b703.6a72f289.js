"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["39773"],{86246:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>d,metadata:()=>s,assets:()=>l,toc:()=>a,contentTitle:()=>o});var s=JSON.parse('{"id":"scripting/functions/HTTP","title":"HTTP","description":"Sends a threaded HTTP request.","source":"@site/docs/scripting/functions/HTTP.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/HTTP","permalink":"/hu/docs/scripting/functions/HTTP","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/HTTP.md","tags":[{"inline":true,"label":"http","permalink":"/hu/docs/tags/http"}],"version":"current","frontMatter":{"title":"HTTP","sidebar_label":"HTTP","description":"Sends a threaded HTTP request.","tags":["http"]},"sidebar":"docsSidebar","previous":{"title":"GivePlayerWeapon","permalink":"/hu/docs/scripting/functions/GivePlayerWeapon"},"next":{"title":"HasGameText","permalink":"/hu/docs/scripting/functions/HasGameText"}}'),r=t("85893"),i=t("50065");let d={title:"HTTP",sidebar_label:"HTTP",description:"Sends a threaded HTTP request.",tags:["http"]},o=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Definitions",id:"definitions",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Information",id:"related-information",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Sends a threaded HTTP request."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"index"}),(0,r.jsx)(n.td,{children:"ID used to differentiate requests that are sent to the same callback (useful for playerids)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["HTTP_METHOD",":method"]}),(0,r.jsxs)(n.td,{children:["The ",(0,r.jsx)(n.a,{href:"../resources/http-request-methods",children:"type"})," of request you wish to send."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"const url[]"}),(0,r.jsxs)(n.td,{children:["The URL you want to request. ",(0,r.jsx)(n.strong,{children:"(Without 'http://')"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"const data[]"}),(0,r.jsx)(n.td,{children:"Any POST data you want to send with the request."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"const callback[]"}),(0,r.jsx)(n.td,{children:"Name of the callback function you want to use to handle responses to this request."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:"1 on success, 0 on failure"}),"\n",(0,r.jsx)(n.h2,{id:"definitions",children:"Definitions"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"// HTTP request types\n#define HTTP_GET                               (HTTP_METHOD:1) // Sends a regular HTTP request.\n#define HTTP_POST                              (HTTP_METHOD:2) // Sends a HTTP request with POST data.\n#define HTTP_HEAD                              (HTTP_METHOD:3) // Sends a regular HTTP request, but ignores any response data - returning only the response code.\n\n// HTTP error response codes\n// These codes compliment ordinary HTTP response codes returned in 'response_code'\n#define HTTP_ERROR_BAD_HOST                    (HTTP_ERROR:1)\n#define HTTP_ERROR_NO_SOCKET                   (HTTP_ERROR:2)\n#define HTTP_ERROR_CANT_CONNECT                (HTTP_ERROR:3)\n#define HTTP_ERROR_CANT_WRITE                  (HTTP_ERROR:4)\n#define HTTP_ERROR_CONTENT_TOO_BIG             (HTTP_ERROR:5)\n#define HTTP_ERROR_MALFORMED_RESPONSE          (HTTP_ERROR:6)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'forward MyHttpResponse(index, response_code, data[]);\n\npublic OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp("/hello", cmdtext, true))\n    {\n        HTTP(playerid, HTTP_GET, "assets.open.mp/hello.txt", "", "MyHttpResponse");\n        return 1;\n    }\n    return 0;\n}\n\npublic MyHttpResponse(index, response_code, data[])\n{\n    // In this callback "index" would normally be called "playerid" ( if you didn\'t get it already )\n    new buffer[128];\n\n    if (response_code == 200) // Did the request succeed?\n    {\n        // Yes!\n        format(buffer, sizeof(buffer), "The URL replied: %s", data);\n        SendClientMessage(index, 0xFFFFFFFF, buffer);\n    }\n    else\n    {\n        // No!\n        format(buffer, sizeof(buffer), "The request failed! The response code was: %d", response_code);\n        SendClientMessage(index, 0xFF0000FF, buffer);\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"As well as the response codes listed above, there are also all of the typical HTTP responses such as 404 (Page not found), 500 (Server error) or 403 (forbidden)"})}),"\n",(0,r.jsx)(n.h2,{id:"related-information",children:"Related Information"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../resources/http-request-methods",children:"HTTP Request Methods"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../resources/http-error-response-codes",children:"HTTP Error Response Codes"})}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return d}});var s=t(67294);let r={},i=s.createContext(r);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);