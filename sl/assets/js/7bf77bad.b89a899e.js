"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["2893"],{70018:function(e,n,t){t.r(n),t.d(n,{default:()=>p,frontMatter:()=>i,metadata:()=>r,assets:()=>c,toc:()=>h,contentTitle:()=>o});var r=JSON.parse('{"id":"scripting/language/reference/The-preprocessor","title":"The preprocessor","description":"---","source":"@site/docs/scripting/language/reference/05-The-preprocessor.md","sourceDirName":"scripting/language/reference","slug":"/scripting/language/reference/The-preprocessor","permalink":"/sl/docs/scripting/language/reference/The-preprocessor","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/language/reference/05-The-preprocessor.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Functions","permalink":"/sl/docs/scripting/language/reference/Functions"},"next":{"title":"General-syntax","permalink":"/sl/docs/scripting/language/reference/General-syntax"}}'),s=t("85893"),a=t("50065");let i={},o="The preprocessor",c={},h=[];function l(e){let n={a:"a",br:"br",code:"code",h1:"h1",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"the-preprocessor",children:"The preprocessor"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.p,{children:["The first phase of compiling a pawn source file to the executable",(0,s.jsx)(n.br,{}),"\n","P-code is \u201Cpreprocessing\u201D: a general purpose text filter that modifies/cleans up the text\nbefore it is fed into the parser. The preprocessing phase removes comments,\nstrips out \u201Cconditionally compiled\u201D blocks, processes the compiler directives\nand performs find-&-replace operations on the text of the source file. The\ncompiler directives are summarized on page 117 and the text substitution\n(\u201Cfind-&-replace\u201D) is the topic of this chapter."]}),"\n",(0,s.jsx)(n.p,{children:"The preprocessor is a process that is invoked on all source lines immediately\nafter they are read. No syntax checking is performed during the text substitu-\ntions. While the preprocessor allows powerful tricks in the pawn language, it\nis also easy to shoot yourself in the foot with it."}),"\n",(0,s.jsx)(n.p,{children:"In this chapter, I will refer to the C/C\u207A\u207A language on several occasions because\npawn\u2019s preprocessor is similar to the one in C/C++. That said, the pawn\npreprocessor is incompatible with the C/C\u207A\u207A preprocessor."}),"\n",(0,s.jsx)(n.p,{children:"The #define directive defines the preprocessor macros. Simple macros are:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'\n#define maxsprites          25\n#define CopyRightString     "(c) Copyright 2004 by me"\n\n'})}),"\n",(0,s.jsx)(n.p,{children:"In the pawn script, you can then use them as you would use constants. For\nexample:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'\n#define maxsprites          25\n#define CopyRightString     "(c) Copyright 2004 by me"\nmain()\n{\n    print( Copyright )\n    new sprites[maxsprites]\n}\n\n'})}),"\n",(0,s.jsx)(n.p,{children:"By the way, for these simple macros there are equivalent pawn constructs:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'\nconst maxsprites = 25\n\nstock const CopyRightString[] = "(c) Copyright 2004 by me"\n\n'})}),"\n",(0,s.jsxs)(n.p,{children:["These constant declarations have the advantage of better error checking and\nthe ability to create tagged constants. The syntax for a string",(0,s.jsx)(n.br,{}),"\n","constant is an array variable that is declared both \u201Cconst\u201D and \u201Cstock\u201D. The",(0,s.jsx)(n.br,{}),"\n","const attribute prohibits any change to the string and the stock attribute makes\nthe declaration \u201Cdisappear\u201D if it is never referred to."]}),"\n",(0,s.jsx)(n.p,{children:"Substitution macros can take up to 10 parameters. A typical use for parame-\nterized macros is to simulate tiny functions:"}),"\n",(0,s.jsx)(n.p,{children:"Listing: the \u201Cmin\u201D macro"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"\n#define min(%1,%2) ((%1) < (%2) ? (%1) : (%2))\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"If you know C/C\u207A\u207A, you will recognize the habit of enclosing each argument\nand the whole substitution expression in parentheses."}),"\n",(0,s.jsx)(n.p,{children:"If you use the above macro in a script in the following way:"}),"\n",(0,s.jsx)(n.p,{children:"Listing: bad usage of the \u201Cmin\u201D macro"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"\nnew a = 1, b = 4\nnew min = min(++a,b)\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"the preprocessor translates it to:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"\nnew a = 1, b = 4\nnew min = ((++a) < (b) ? (++a) : (b))\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"which causes \u201Ca\u201D to possibly be incremented twice. This is one of the traps\nthat you can trip into when using substitution macros (this particular problem\nis well known to C/C++ programmers). Therefore, it may be a good idea to\nuse a naming convention to distinguish macros from functions. In C/C\u207A\u207A it is\ncommon practice to write preprocessor macros in all upper case."}),"\n",(0,s.jsx)(n.p,{children:"To show why enclosing macro arguments in parentheses is a good idea, consider\nthe macro:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"\n#define ceil_div(%1,%2) (%1 + %2 - 1) / %2\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"This macro divides the first argument by the second argument, but rounding\nupwards to the nearest integer (the divide operator, \u201C/\u201D, rounds downwards).\nIf you use it as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"\nnew a = 5\nnew b = ceil_div(8, a - 2)\n\n"})}),"\n",(0,s.jsxs)(n.p,{children:["the second line expands to \u201Cnew b = (8 + a - 2 - 1) / a - 2\u201D,\nwhich, considering the precedence levels of the pawn operators, leads to \u201Cb\u201D",(0,s.jsx)(n.br,{}),"\n","being set to zero (if \u201Ca\u201D is 5). What you would have expected from looking at the\nmacro invocation is eight divided by three (\u201Ca - 2\u201D), rounded upwards \u2014\nhence, that \u201Cb\u201D would be set to the value 3. Changing the macro to enclose\neach parameter in parentheses solves the problem. For similar reasons, it is\nalso advised to enclose the complete replacement text in parentheses. Below\nis the ceil_div macro modified accordingly:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"\n#define ceil_div(%1,%2) ( ((%1) + (%2) - 1) / (%2) )\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"The pattern matching is subtler than matching strings that look like function\ncalls. The pattern matches text literally, but accepts arbitrary text where the\npattern specifies a parameter. You can create patterns like:"}),"\n",(0,s.jsx)(n.p,{children:"Listing: macro that translates a syntax for array access to a function call"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"\n#define Object[%1] CallObject(%1)\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"When the expansion of a macro contains text that matches other macros, the\nexpansion is performed at invocation time, not at definition time. Thus the code:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"\n#define a(%1)       (1+b(%1))\n#define b(%1)       (2\\*(%1))\nnew c = a(8)\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"will evaluate to \u201Cnew c = (1+(2*(8)))\u201D, even though the macro \u201Cb\u201D was not\ndefined at the time of the definition of \u201Ca\u201D."}),"\n",(0,s.jsx)(n.p,{children:"The pattern matching is constrained to the following rules:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"There may be no space characters in the pattern. If you must match a space, you need to use the \u201C\\32;\u201D escape sequence. The substitution text, on the other hand, may contain space characters. Due to the matching rules of the macro pattern (explained below), matching a space character is rarely needed."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"As evidenced in the preceding line, escape sequences may appear in the pattern (they are not very useful, though, except perhaps for matching a literal \u201C%\u201D character)."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The pattern may not end with a parameter; a pattern like \u201Cset:%1=%2\u201D is illegal. If you wish to match with the end of a statement, you can add a semicolon at the end of the pattern. If semicolons are optional at the end of each statement, the semicolon will also match a newline in the source."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The pattern must start with a letter, an underscore, or an \u201C@\u201D character The first part of the pattern that consists of alphanumeric characters (plus the \u201C_\u201D and/\u201C@\u201D) is the \u201Cname\u201D or the \u201Cprefix\u201D of the macro. On the defined operator and the #undef directive, you specify the macro prefix."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["When matching a pattern, the preprocessor ignores white space between nonalphanumeric symbols and white space between an alphanumeric symbol and a non-alphanumeric one, with one exception: between two identical symbols, white space is not ignored. Therefore: ",(0,s.jsx)(n.code,{children:"the pattern abc(+-) matches \u201Cabc ( + - )\u201D the pattern abc(--) matches \u201Cabc ( -- )\u201D"})," but does not match ",(0,s.jsx)(n.code,{children:"\u201Cabc(- -)\u201D"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"There are up to 10 parameters, denoted with a \u201C%\u201D and a single digit (1 to 9 and 0). The order of the parameters in a pattern is not important."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The #define symbol is a parser directive. As with all parser directives, the pattern definition must fit on a single line. You can circumvent this with a \u201C\\\u201D on the end of the line. The text to match must also fit on a single line."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Note that in the presence of (parameterized) macros, lines of source code may\nnot be what they appear: what looks like an array access may be \u201Cprepro\ncessed\u201D to a function call, and vice versa."}),"\n",(0,s.jsx)(n.p,{children:"A host application that embeds the pawn parser may provide an option to let\nyou check the result of text substitution through macros. If you are using the\nstandard pawn toolset, you will find instructions of how to use the compiler\nand run-time in the companion booklet \u201CThe pawn booklet \u2014 Implementor\u2019s Guide\u201D."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Operator precedence: 110"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"Directives: 117"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/sl/docs/scripting/language/reference/Contents",children:"Go Back to Contents"})})]})}function p(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return i}});var r=t(67294);let s={},a=r.createContext(s);function i(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);