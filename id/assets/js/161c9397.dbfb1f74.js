"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["53692"],{67451:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>i,assets:()=>f,toc:()=>c,contentTitle:()=>s});var i=JSON.parse('{"id":"scripting/functions/ftemp","title":"ftemp","description":"Creates a file in the \\"tmp\\", \\"temp\\" or root directory with random name for reading and writing.","source":"@site/docs/scripting/functions/ftemp.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/ftemp","permalink":"/id/docs/scripting/functions/ftemp","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/functions/ftemp.md","tags":[{"inline":true,"label":"file management","permalink":"/id/docs/tags/file-management"}],"version":"current","frontMatter":{"title":"ftemp","sidebar_label":"ftemp","description":"Creates a file in the \\"tmp\\", \\"temp\\" or root directory with random name for reading and writing.","tags":["file management"]},"sidebar":"docsSidebar","previous":{"title":"ftell","permalink":"/id/docs/scripting/functions/ftell"},"next":{"title":"funcidx","permalink":"/id/docs/scripting/functions/funcidx"}}'),r=t("85893"),l=t("50065");let a={title:"ftemp",sidebar_label:"ftemp",description:'Creates a file in the "tmp", "temp" or root directory with random name for reading and writing.',tags:["file management"]},s=void 0,f={},c=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components},{LowercaseNote:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:'Creates a file in the "tmp", "temp" or root directory with random name for reading and writing. The file is deleted after fclose() is used on the file.'}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'// Create a temporary file stream\nnew File:t_handle = ftemp();\n\n// Declare "handle"\nnew File:handle;\n\n// Declare "g_char"\nnew g_char;\n\n// Check, if temporary file stream is open\nif (t_handle)\n{\n    // Success\n\n    // Open "file.txt" in "read only" mode and check, if the file is open\n    if (handle = fopen("file.txt", io_read))\n    {\n        // Get all the characters from "file.txt"\n        while((g_char = fgetchar(handle, 0, false))\xa0!= EOF)\n        {\n            // Write character in lowercase into the temporary file stream\n            fputchar(t_handle, tolower(g_char), false);\n        }\n\n        // Close "file.txt"\n        fclose(handle);\n\n        // Set the file pointer of the temporary file stream to the first byte\n        fseek(t_handle, _, seek_begin);\n\n        // Open "file1.txt" in "write only" mode, and check, if the file is open\n        if (handle = fopen("file1.txt", io_write))\n        {\n            // Success\n\n            // Get all the characters from the temporary file stream\n            while((g_char = fgetchar(t_handle, 0, false))\xa0!= EOF)\n            {\n                // Write character into "file1.txt"\n                fputchar(handle, g_char, false);\n            }\n\n            // Close "file1.txt"\n            fclose(handle);\n\n            // Set the file pointer of the temporary file stream to the first byte\n            fseek(t_handle, _, seek_begin);\n        }\n        else\n        {\n            // Error\n            print("Failed to open file \\"file1.txt\\".");\n        }\n\n        // Open "file2.txt" in "write only" mode, and check, if the file is open\n        if (handle = fopen("file2.txt", io_write))\n        {\n            // Success\n\n            // Get all the characters from the temporary file stream\n            while((g_char = fgetchar(t_handle, 0, false))\xa0!= EOF)\n            {\n                // Write character into "file2.txt"\n                fputchar(handle, g_char, false);\n            }\n\n            // Close "file2.txt"\n            fclose(handle);\n        }\n        else\n        {\n            // Error\n            print("Failed to open file \\"file2.txt\\".");\n        }\n    }\n    else\n    {\n        // Error\n        print("Failed to open file \\"file.txt\\".");\n    }\n\n    // Close the temporary file stream\n    fclose(t_handle);\n}\nelse\n{\n    // Error\n    print("Failed to create a temporary file stream.");\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"This function can crash the server when the right directory isn't created."})}),"\n",(0,r.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"fopen",children:"fopen"}),": Open a file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"fclose",children:"fclose"}),": Close a file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"fremove",children:"fremove"}),": Remove a file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"fwrite",children:"fwrite"}),": Write to a file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"fread",children:"fread"}),": Read a file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"fputchar",children:"fputchar"}),": Put a character in a file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"fgetchar",children:"fgetchar"}),": Get a character from a file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"fblockwrite",children:"fblockwrite"}),": Write blocks of data into a file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"fblockread",children:"fblockread"}),": Read blocks of data from a file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"fseek",children:"fseek"}),": Jump to a specific character in a file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"flength",children:"flength"}),": Get the file length."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"fexist",children:"fexist"}),": Check, if a file exists."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"fmatch",children:"fmatch"}),": Check, if patterns with a file name matches."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"ftell",children:"ftell"}),": Get the current position in the file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"fflush",children:"fflush"}),": Flush a file to disk (ensure all writes are complete)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"fstat",children:"fstat"}),": Return the size and the timestamp of a file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"frename",children:"frename"}),": Rename a file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"fcopy",children:"fcopy"}),": Copy a file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"filecrc",children:"filecrc"}),": Return the 32-bit CRC value of a file."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"diskfree",children:"diskfree"}),": Returns the free disk space."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"fattrib",children:"fattrib"}),": Set the file attributes."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"fcreatedir",children:"fcreatedir"}),": Create a directory."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return a}});var i=t(67294);let r={},l=i.createContext(r);function a(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);