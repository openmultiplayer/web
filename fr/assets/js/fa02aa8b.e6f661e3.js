"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["17447"],{5402:function(e,n,i){i.r(n),i.d(n,{default:()=>c,frontMatter:()=>s,metadata:()=>r,assets:()=>a,toc:()=>d,contentTitle:()=>o});var r=JSON.parse('{"id":"scripting/functions/fopen","title":"fopen","description":"Open a file (to read from or write to).","source":"@site/docs/scripting/functions/fopen.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/fopen","permalink":"/fr/docs/scripting/functions/fopen","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/fopen.md","tags":[{"inline":true,"label":"file management","permalink":"/fr/docs/tags/file-management"}],"version":"current","frontMatter":{"title":"fopen","sidebar_label":"fopen","description":"Open a file (to read from or write to).","tags":["file management"]},"sidebar":"docsSidebar","previous":{"title":"fmatch","permalink":"/fr/docs/scripting/functions/fmatch"},"next":{"title":"format","permalink":"/fr/docs/scripting/functions/format"}}'),t=i("85893"),l=i("50065");let s={title:"fopen",sidebar_label:"fopen",description:"Open a file (to read from or write to).",tags:["file management"]},o=void 0,a={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function f(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components},{LowercaseNote:i}=n;return i||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i,{}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Open a file (to read from or write to)."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"const filename[]"}),(0,t.jsx)(n.td,{children:"The path to the file to open (if just a filename is specified, it will open the file with the name specified in the 'scriptfiles' folder)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsxs)(n.a,{href:"../resources/file-modes",children:["filemode",":mode"]})}),(0,t.jsx)(n.td,{children:"The mode to open the file with (default: io_readwrite)."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:"Returns the file handle. This handle is used for reading and writing."}),"\n",(0,t.jsx)(n.p,{children:"0 if failed to open file."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"io_read mode:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'// Open "file.txt" in "read only" mode\nnew File:handle = fopen("file.txt", io_read);\n\n// Initialize "buf"\nnew buf[128];\n\n// Check, if the file is opened\nif (handle)\n{\n    // Success\n\n    // Read the whole file\n    while(fread(handle, buf))\n    {\n        print(buf);\n    }\n\n    // Close the file\n    fclose(handle);\n}\nelse\n{\n    // Error\n    print("The file \\"file.txt\\" does not exists, or can\'t be opened.");\n}\n'})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"io_write mode:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'// Open "file.txt" in "write only" mode\nnew File:handle = fopen("file.txt", io_write);\n\n// Check, if file is open\nif (handle)\n{\n    // Success\n\n    // Write "I just wrote here!" into this file\n    fwrite(handle, "I just wrote here!");\n\n    // Close the file\n    fclose(handle);\n}\nelse\n{\n    // Error\n    print("Failed to open file \\"file.txt\\".");\n}\n\n'})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"io_readwrite mode:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'// Open "file.txt" in "read and write" mode\n\nnew File:handle = fopen("file.txt", io_readwrite);\n\n// Initialize "buf"\nnew buf[128];\n\n// Check, if file is open\nif (handle)\n{\n    // Success\n\n    // Read the whole file\n    while(fread(handle, buf))\n    {\n        print(buf);\n    }\n\n    // Set the file pointer to the first byte\n    fseek(handle, _, seek_begin);\n\n    // Write "I just wrote here!" into this file\n    fwrite(handle, "I just wrote here!");\n\n    // Close the file\n    fclose(handle);\n}\nelse\n{\n    // Error\n    print("The file \\"file.txt\\" does not exists, or can\'t be opened.");\n}\n'})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"io_append mode:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'// Open "file.txt" in "append only" mode\nnew File:handle = fopen("file.txt", io_append);\n\n// Check, if file is open\nif (handle)\n{\n    // Success\n\n    // Append "This is a text.\\r\\n"\n    fwrite(handle, "This is a text.\\r\\n");\n\n    // Close the file\n    fclose(handle);\n}\nelse\n{\n    // Error\n    print("Failed to open file \\"file.txt\\".");\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["If you use ",(0,t.jsx)(n.code,{children:"io_read"})," and the file doesn't exist, it will return a NULL reference. Using invalid references on file functions will crash your server!"]})}),"\n",(0,t.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"fclose",children:"fclose"}),": Close a file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"ftemp",children:"ftemp"}),": Create a temporary file stream."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"fremove",children:"fremove"}),": Remove a file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"fwrite",children:"fwrite"}),": Write to a file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"fread",children:"fread"}),": Read a file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"fputchar",children:"fputchar"}),": Put a character in a file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"fgetchar",children:"fgetchar"}),": Get a character from a file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"fblockwrite",children:"fblockwrite"}),": Write blocks of data into a file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"fblockread",children:"fblockread"}),": Read blocks of data from a file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"fseek",children:"fseek"}),": Jump to a specific character in a file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"flength",children:"flength"}),": Get the file length."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"fexist",children:"fexist"}),": Check, if a file exists."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"fmatch",children:"fmatch"}),": Check, if patterns with a file name matches."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"ftell",children:"ftell"}),": Get the current position in the file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"fflush",children:"fflush"}),": Flush a file to disk (ensure all writes are complete)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"fstat",children:"fstat"}),": Return the size and the timestamp of a file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"frename",children:"frename"}),": Rename a file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"fcopy",children:"fcopy"}),": Copy a file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"filecrc",children:"filecrc"}),": Return the 32-bit CRC value of a file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"diskfree",children:"diskfree"}),": Returns the free disk space."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"fattrib",children:"fattrib"}),": Set the file attributes."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"fcreatedir",children:"fcreatedir"}),": Create a directory."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"../resources/file-modes",children:"File Modes"})}),"\n"]})]})}function c(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return s}});var r=i(67294);let t={},l=r.createContext(t);function s(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);