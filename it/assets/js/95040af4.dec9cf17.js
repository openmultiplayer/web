"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["98577"],{90689:function(e,n,i){i.r(n),i.d(n,{default:()=>f,frontMatter:()=>s,metadata:()=>t,assets:()=>c,toc:()=>o,contentTitle:()=>a});var t=JSON.parse('{"id":"scripting/functions/fblockread","title":"fblockread","description":"This function allows you to read data from a file, without encoding and line terminators.","source":"@site/docs/scripting/functions/fblockread.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/fblockread","permalink":"/it/docs/scripting/functions/fblockread","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/fblockread.md","tags":[{"inline":true,"label":"file management","permalink":"/it/docs/tags/file-management"}],"version":"current","frontMatter":{"title":"fblockread","sidebar_label":"fblockread","description":"This function allows you to read data from a file, without encoding and line terminators.","tags":["file management"]},"sidebar":"docsSidebar","previous":{"title":"fattrib","permalink":"/it/docs/scripting/functions/fattrib"},"next":{"title":"fblockwrite","permalink":"/it/docs/scripting/functions/fblockwrite"}}'),r=i("85893"),l=i("50065");let s={title:"fblockread",sidebar_label:"fblockread",description:"This function allows you to read data from a file, without encoding and line terminators.",tags:["file management"]},a=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{LowercaseNote:i}=n;return i||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i,{}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"This function allows you to read data from a file, without encoding and line terminators"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["File",":handle"]}),(0,r.jsx)(n.td,{children:"File handle to use, opened by fopen()"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"buffer"}),(0,r.jsx)(n.td,{children:"The buffer to save the read data in."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"size = sizeof (buffer)"}),(0,r.jsx)(n.td,{children:"The number of cells to read."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:"The number of cells read. Zero, if the file end has been reached."}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'// Define "some_enum"\nenum _:some_enum\n{\n    some_data1,\n    some_data2[20],\n    Float:some_data3\n}\n\n// Declare "some_data"\nnew some_data[some_enum];\n\n// ...\n\n// Open "file.bin" in "read only" mode\nnew File:handle = fopen("file.bin", io_read);\n\n// Declare "file_len"\nnew file_len;\n\n// Check, if "file.bin" is open\nif (handle)\n{\n    // Success\n\n    // Get the file length of "file.bin"\n    file_len = flength(handle);\n\n    // If file is equally larger than the array\n    if (file_len == (some_enum*4))\n    {\n        // Success\n\n        // Read from "file.bin" into "some_data"\n        fblockread(handle, some_data);\n    }\n    else\n    {\n        // Error\n        print("\\"file.bin\\" is not compatible with the array.");\n    }\n\n    // Close "file.bin"\n    fclose(handle);\n}\nelse\n{\n    // Error\n    print("Failed to open \\"file.bin\\".");\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["Using an invalid handle will crash your server! Get a valid handle by using ",(0,r.jsx)(n.a,{href:"fopen",children:"fopen"})," or ",(0,r.jsx)(n.a,{href:"ftemp",children:"ftemp"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"fopen",children:"fopen"}),": Open a file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"fclose",children:"fclose"}),": Close a file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"ftemp",children:"ftemp"}),": Create a temporary file stream."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"fremove",children:"fremove"}),": Remove a file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"fwrite",children:"fwrite"}),": Write to a file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"fread",children:"fread"}),": Read a file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"fputchar",children:"fputchar"}),": Put a character in a file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"fgetchar",children:"fgetchar"}),": Get a character from a file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"fblockwrite",children:"fblockwrite"}),": Write blocks of data into a file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"fseek",children:"fseek"}),": Jump to a specific character in a file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"flength",children:"flength"}),": Get the file length."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"fexist",children:"fexist"}),": Check, if a file exists."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"fmatch",children:"fmatch"}),": Check, if patterns with a file name matches."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"ftell",children:"ftell"}),": Get the current position in the file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"fflush",children:"fflush"}),": Flush a file to disk (ensure all writes are complete)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"fstat",children:"fstat"}),": Return the size and the timestamp of a file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"frename",children:"frename"}),": Rename a file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"fcopy",children:"fcopy"}),": Copy a file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"filecrc",children:"filecrc"}),": Return the 32-bit CRC value of a file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"diskfree",children:"diskfree"}),": Returns the free disk space."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"fattrib",children:"fattrib"}),": Set the file attributes."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"fcreatedir",children:"fcreatedir"}),": Create a directory."]}),"\n"]})]})}function f(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return s}});var t=i(67294);let r={},l=t.createContext(r);function s(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);