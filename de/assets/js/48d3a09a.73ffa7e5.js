"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["92998"],{68073:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>o});var s=JSON.parse('{"id":"scripting/language/reference/Pitfalls-differences-from-C","title":"Pitfalls: differences from C","description":"---","source":"@site/docs/scripting/language/reference/11-Pitfalls-differences-from-C.md","sourceDirName":"scripting/language/reference","slug":"/scripting/language/reference/Pitfalls-differences-from-C","permalink":"/de/docs/scripting/language/reference/Pitfalls-differences-from-C","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/language/reference/11-Pitfalls-differences-from-C.md","tags":[],"version":"current","sidebarPosition":11,"frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Proposed-function-library","permalink":"/de/docs/scripting/language/reference/Proposed-function-library"},"next":{"title":"Assorted-tips","permalink":"/de/docs/scripting/language/reference/Assorted-tips"}}'),r=t("85893"),a=t("50065");let i={},o="Pitfalls: differences from C",l={},c=[];function d(e){let n={a:"a",em:"em",h1:"h1",header:"header",hr:"hr",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"pitfalls-differences-from-c",children:"Pitfalls: differences from C"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"PAWN lacks the typing mechanism of C. PAWN is an \u201Cinteger-only\u201D variety of C; there are no structures or unions, and floating point support must be implemented with user-defined operators and the help of native functions."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The accepted syntax for rational numbers is stricter than that of floating point values in C. Values like \u201C.5\u201D and \u201C6.\u201D are acceptable in C, but in PAWN one must write \u201C0.5\u201D and \u201C6.0\u201D respectively. In C, the decimal period is optional if an exponent is included, so one can write \u201C2E8\u201D; PAWN does not accept the upper case \u201CE\u201D (use a lower case \u201Ce\u201D) and it requires the decimal point: e.g. \u201C2.0e8\u201D. See page 98 for more information."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"PAWN does not provide \u201Cpointers\u201D. For the purpose of passing function arguments by reference, PAWN provides a \u201Creference\u201D argument, (page 71). The \u201Cplaceholder\u201D argument replaces some uses of the NULL pointer (page 75)."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Numbers can have hexadecimal, decimal or binary radix. Octal radix is not supported. See \u201CConstants\u201D on page 98. Hexadecimal numbers must start with \u201C0x\u201D (a lower case \u201Cx\u201D), the prefix \u201C0X\u201D is invalid."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Escape sequences (\u201C\\n\u201D, \u201C\\t\u201D, etc.) are the same, except for \u201C\\ddd\u201D where \u201Cddd\u201D represent three decimal digits, instead of the octal digits that C/C++ uses. The backslash (\u201C\\\u201D) may be replaced with another symbol; see #pragma ctrlchar on page 120 \u2014notably, previous versions of PAWN used the caret (\u201C^\u201D) as the escape character."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Cases in a switch statement are not \u201Cfall through\u201D. Only a single instruction may (and must) follow each case label. To execute multiple instructions, you must use a compound statement. The default clause of a switch statement must be the last clause of the switch statement. More on page 115. In C/C++, switch is a \u201Cconditional goto\u201D, akin to Fortran\u2019s calculated labels. In PAWN, switch is a structured \u201Cif\u201D."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"A break statement breaks out of loops only. In C/C\u207A\u207A, the break statement also ends a case in a switch statement. Switch statements are implemented differently in PAWN (see page 115)."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["PAWN supports \u201Carray assignment\u201D, with the restriction that both arrays must have the same size. For example, if \u201Ca\u201D and \u201Cb\u201D are both arrays with 6 cells, the expression \u201Ca = b\u201D is valid. Next to literal strings, PAWN also supports literal arrays, allowing the expression \u201Ca = ",5,"\u201D (where \u201Ca\u201D is an array variable with 6 elements)."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"char"})," is an operator, not a type. See page 110 and the tips on page 137."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"defined"})," is an operator, not a preprocessor directive. The defined operator in PAWN operates on constants (with const and enum), global variables, local variables and functions."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"sizeof"})," operator returns the size of a variable in \u201Celements\u201D, not in \u201Cbytes\u201D. An element may be a cell or a sub-array. See page 109 for details."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The empty instruction is an empty compound block, not a semicolon (page 112). This modification avoids a frequent error."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The compiler directives differ from C\u2019s preprocessor commands. Notably, the #define directive is incompatible with that of C/C\u207A\u207A, and #ifdef and #ifndef are replaced by the more general #if directive (see \u201CDirectives\u201D on page 117). To create numeric constants, see also page 101; to create string constants, see also page 93."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Text substitutions (preprocessor macros; see the #define directive) are not matched across lines. That is, the text that you want to match and replace with a #define macro must appear on a single line. The definition of a #define macro must also appear on a single line."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The direction for truncation for the operator \u201C/\u201D is always towards the smaller value, where -2 is smaller than -1. The \u201C%\u201D operator always gives a positive result, regardless of the signs of the operands. See page 104."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"There is no unary \u201C+\u201D operator, which is a \u201Cno-operation\u201D operator anyway."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Three of the bitwise operators have different precedence than in C. The precedence levels of the \u201C&\u201D, \u201C^\u201D and | operators is higher than the rela- tional operators (Dennis Ritchie explained that these operators got their low precedence levels in C because early C compilers did not yet have the logical \u201C&&\u201D and || operators, so the bitwise \u201C&\u201D and | were used instead)."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The \u201Cextern\u201D keyword does not exist in PAWN; the current implementation of the compiler has no \u201Clinking phase\u201D. To create a program from several source files, add all source files the compilers command line, or create one main project script file that \u201C#include\u2019s\u201D all other source files. The PAWN compiler can optimize out functions and global variables that you do not use. See pages 63 and 84 for details."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"In most situations, forward declarations of functions (i.e., prototypes) are not necessary. PAWN is a two-pass compiler, it will see all functions on the first pass and use them in the second pass. User-defined operators must be declared before use, however."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"If provided, forward declarations must match exactly with the function def-\ninition, parameter names may not be omitted from the prototype or differ\nfrom the function definition. PAWN cares about parameter names in pro-\ntotypes because of the \u201Cnamed parameters\u201D feature. One uses prototypes\nto call forwardly declared functions. When doing so with named param-\neters, the compiler must already know the names of the parameters (and\ntheir position in the parameter list). As a result, the parameter names in a\nprototype must be equal to the ones in the definition."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/de/docs/scripting/language/reference/Contents",children:"Go Back to Contents"})})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return i}});var s=t(67294);let r={},a=s.createContext(r);function i(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);