"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["98923"],{23217:function(e,i,n){n.r(i),n.d(i,{default:()=>f,frontMatter:()=>l,metadata:()=>t,assets:()=>a,toc:()=>d,contentTitle:()=>c});var t=JSON.parse('{"id":"scripting/functions/diskfree","title":"diskfree","description":"Returns the free disk space.","source":"@site/docs/scripting/functions/diskfree.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/diskfree","permalink":"/vi/docs/scripting/functions/diskfree","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/diskfree.md","tags":[{"inline":true,"label":"file management","permalink":"/vi/docs/tags/file-management"}],"version":"current","frontMatter":{"title":"diskfree","sidebar_label":"diskfree","description":"Returns the free disk space.","tags":["file management"]},"sidebar":"docsSidebar","previous":{"title":"deleteproperty","permalink":"/vi/docs/scripting/functions/deleteproperty"},"next":{"title":"existproperty","permalink":"/vi/docs/scripting/functions/existproperty"}}'),r=n("85893"),s=n("50065");let l={title:"diskfree",sidebar_label:"diskfree",description:"Returns the free disk space.",tags:["file management"]},c=void 0,a={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){let i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{LowercaseNote:n,VersionWarn:t}=i;return n||h("LowercaseNote",!0),t||h("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,r.jsx)(i.admonition,{type:"warning",children:(0,r.jsx)(i.p,{children:"This function has not yet been implemented."})}),"\n",(0,r.jsx)(n,{}),"\n",(0,r.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(i.p,{children:"Returns the free disk space."}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Name"}),(0,r.jsx)(i.th,{children:"Description"})]})}),(0,r.jsx)(i.tbody,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:'const volume[] = ""'}),(0,r.jsx)(i.td,{children:"The name of the volume on systems that support multiple disks or multiple memory cards.  On single-volume systems, it is optional."})]})})]}),"\n",(0,r.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(i.p,{children:"The amount of free space in KiB."}),"\n",(0,r.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-c",children:'new freeSpace = diskfree();\n\nprintf("freeSpace = %d KiB", freeSpace);\n'})}),"\n",(0,r.jsx)(i.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(i.admonition,{type:"tip",children:(0,r.jsx)(i.p,{children:"The maximum size that can be supported 2048 GiB (2 terabyte)."})}),"\n",(0,r.jsx)(i.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"fopen",children:"fopen"}),": Open a file."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"fclose",children:"fclose"}),": Close a file."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"ftemp",children:"ftemp"}),": Create a temporary file stream."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"fremove",children:"fremove"}),": Remove a file."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"fwrite",children:"fwrite"}),": Write to a file."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"fputchar",children:"fputchar"}),": Put a character in a file."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"fgetchar",children:"fgetchar"}),": Get a character from a file."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"fblockwrite",children:"fblockwrite"}),": Write blocks of data into a file."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"fblockread",children:"fblockread"}),": Read blocks of data from a file."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"fseek",children:"fseek"}),": Jump to a specific character in a file."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"flength",children:"flength"}),": Get the file length."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"fexist",children:"fexist"}),": Check, if a file exists."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"fmatch",children:"fmatch"}),": Check, if patterns with a file name matches."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"ftell",children:"ftell"}),": Get the current position in the file."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"fflush",children:"fflush"}),": Flush a file to disk (ensure all writes are complete)."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"fstat",children:"fstat"}),": Return the size and the timestamp of a file."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"frename",children:"frename"}),": Rename a file."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"fcopy",children:"fcopy"}),": Copy a file."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"filecrc",children:"filecrc"}),": Return the 32-bit CRC value of a file."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"fattrib",children:"fattrib"}),": Set the file attributes."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"fcreatedir",children:"fcreatedir"}),": Create a directory."]}),"\n"]})]})}function f(e={}){let{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}function h(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},50065:function(e,i,n){n.d(i,{Z:function(){return c},a:function(){return l}});var t=n(67294);let r={},s=t.createContext(r);function l(e){let i=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);