"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["82721"],{31753:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>a,assets:()=>r,toc:()=>o,contentTitle:()=>c});var a=JSON.parse('{"id":"scripting/language/Style","title":"Pawn Style Guide","description":"A short guide on the generally accepted naming conventions and other aspects of Pawn source code to aid easier communication of intent and streamline debugging and sharing of code.","source":"@site/docs/scripting/language/Style.md","sourceDirName":"scripting/language","slug":"/scripting/language/Style","permalink":"/fr/docs/scripting/language/Style","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/language/Style.md","tags":[],"version":"current","frontMatter":{"title":"Pawn Style Guide","sidebar_label":"Pawn Style Guide","description":"A short guide on the generally accepted naming conventions and other aspects of Pawn source code to aid easier communication of intent and streamline debugging and sharing of code."},"sidebar":"docsSidebar","previous":{"title":"Keywords: Statements","permalink":"/fr/docs/scripting/language/Statements"},"next":{"title":"Scripting: Tags","permalink":"/fr/docs/scripting/language/Tags"}}'),i=s("85893"),t=s("50065");let l={title:"Pawn Style Guide",sidebar_label:"Pawn Style Guide",description:"A short guide on the generally accepted naming conventions and other aspects of Pawn source code to aid easier communication of intent and streamline debugging and sharing of code."},c=void 0,r={},o=[{value:"Terminology",id:"terminology",level:2},{value:"Statement",id:"statement",level:3},{value:"Compound Statement",id:"compound-statement",level:3},{value:"Expression",id:"expression",level:3},{value:"Guidelines",id:"guidelines",level:2},{value:"Braces",id:"braces",level:3},{value:"Switches",id:"switches",level:3},{value:"Compound Statements (Blocks)",id:"compound-statements-blocks",level:3},{value:"Naming",id:"naming",level:3},{value:"Functions",id:"functions",level:4},{value:"Global Variables",id:"global-variables",level:4},{value:"Local Variables",id:"local-variables",level:4},{value:"Enumerators",id:"enumerators",level:4},{value:"Macros and Pre-Processor Definitions",id:"macros-and-pre-processor-definitions",level:4},{value:"Documentation",id:"documentation",level:3}];function d(e){let n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"This document is a short guide on the generally accepted naming conventions and other aspects of Pawn source code to aid easier communication of intent and streamline debugging and sharing of code."}),"\n",(0,i.jsx)(n.p,{children:"See also:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/Southclaws/sampctl/wiki/Modern-Pawn",children:"Modern Pawn"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/Southclaws/sampctl/wiki/Packages",children:"Pawn Package"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"terminology",children:"Terminology"}),"\n",(0,i.jsx)(n.h3,{id:"statement",children:"Statement"}),"\n",(0,i.jsx)(n.p,{children:"A statement is a piece of code that imperatively tells the host program to do something. A statement is a valid piece of code that yields some result."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"a = b + c;\n"})}),"\n",(0,i.jsx)(n.p,{children:"This is a statement composed of a variable being assigned the result of an [#Expression]."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"SetPlayerColor(playerid, 0xFF4700FF);\n"})}),"\n",(0,i.jsx)(n.p,{children:"This is a statement telling the program to call a function with some arguments."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"x + 8\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This is ",(0,i.jsx)(n.em,{children:"not"})," a statement as the result is not used anywhere, this is just an [#Expression]."]}),"\n",(0,i.jsx)(n.h3,{id:"compound-statement",children:"Compound Statement"}),"\n",(0,i.jsx)(n.p,{children:"A compound statement is a collection of statements surrounded by braces."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'{\n    new message[] = "hi!";\n    print(message);\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"This is a compound statement composed of two statements."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'if (a == b)\n{\n    print("hello!");\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["This is a compound statement with an ",(0,i.jsx)(n.code,{children:"if"}),' condition, this is usually referred to as an "if statement".']}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"return Function1(), Function2(), Function3();\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This is ",(0,i.jsx)(n.em,{children:"not"})," a compound statement, it's a chain of statements separated by commas. This form of chaining statements is considered bad practice."]}),"\n",(0,i.jsx)(n.h3,{id:"expression",children:"Expression"}),"\n",(0,i.jsx)(n.p,{children:"An expression is a piece of syntax that yields a value, it's not a valid statement unless the yielded value is used in some way."}),"\n",(0,i.jsx)(n.p,{children:"Expressions are often composed to form statements."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"a + b\n"})}),"\n",(0,i.jsx)(n.p,{children:"This is a simple addition expression that takes two values and applies the add operator to them."}),"\n",(0,i.jsx)(n.h2,{id:"guidelines",children:"Guidelines"}),"\n",(0,i.jsx)(n.h3,{id:"braces",children:"Braces"}),"\n",(0,i.jsx)(n.p,{children:"Allman braces are preferred:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-pawn",children:"function()\n{\n    //\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"However, if you can't shake the muscle memory, K&R braces are also valid Pawn:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-pawn",children:"function() {\n    //\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"switches",children:"Switches"}),"\n",(0,i.jsxs)(n.p,{children:["Switches must use two indent levels, one for the ",(0,i.jsx)(n.code,{children:"switch"})," block and another for each ",(0,i.jsx)(n.code,{children:"case"})," statement or compound statement."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-pawn",children:"switch (variable)\n{\n    case 0:\n        return 0;\n    case 1:\n        return 1;\n    case 2:\n        return 2;\n    default:\n        return -1;\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-pawn",children:"switch (variable)\n{\n    case 0:\n    {\n        // code...\n        return 0;\n    }\n    case 1:\n    {\n        // code...\n        return 1;\n    }\n    case 2:\n    {\n        // code...\n        return 2;\n    }\n    default:\n    {\n        // code...\n        return -1;\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"compound-statements-blocks",children:"Compound Statements (Blocks)"}),"\n",(0,i.jsx)(n.p,{children:"Blocks must always use braces, even if only a single line of code exists within a block. This applies to all levels including functions."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-pawn",children:"func()\n{\n    singleLineExpr();\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-pawn",children:"func()\n{\n    if ()\n    {\n        singleLineExpr();\n    }\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-pawn",children:"func()\n{\n    if ()\n    {\n        singleLineExpr();\n    }\n    else if ()\n    {\n        //\n    }\n    else\n    {\n        //\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"naming",children:"Naming"}),"\n",(0,i.jsx)(n.h4,{id:"functions",children:"Functions"}),"\n",(0,i.jsxs)(n.p,{children:["Functions must be named with ",(0,i.jsx)(n.code,{children:"PascalCase"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"global-variables",children:"Global Variables"}),"\n",(0,i.jsxs)(n.p,{children:["Global variables declared using ",(0,i.jsx)(n.code,{children:"new"})," must always use ",(0,i.jsx)(n.code,{children:"g_"})," prefixed PascalCase, so ",(0,i.jsx)(n.code,{children:"g_VariableName"}),", however if they are declared using ",(0,i.jsx)(n.code,{children:"static"})," they must always use ",(0,i.jsx)(n.code,{children:"s_"})," prefixed PascalCase, so ",(0,i.jsx)(n.code,{children:"s_VariableName"})]}),"\n",(0,i.jsxs)(n.p,{children:["Constant globals must use ",(0,i.jsx)(n.code,{children:"SCREAMING_SNAKE_CASE"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"local-variables",children:"Local Variables"}),"\n",(0,i.jsxs)(n.p,{children:["Local variables must always use ",(0,i.jsx)(n.code,{children:"camelCase"})," and must never use single letter names, apart from:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"i"}),", ",(0,i.jsx)(n.code,{children:"j"}),", ",(0,i.jsx)(n.code,{children:"k"}),", etc in ",(0,i.jsx)(n.code,{children:"for"})," loops"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"x"}),", ",(0,i.jsx)(n.code,{children:"y"}),", ",(0,i.jsx)(n.code,{children:"z"}),", etc in mathematical contexts"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"enumerators",children:"Enumerators"}),"\n",(0,i.jsxs)(n.p,{children:["Enumerators, if named, must be prefixed with ",(0,i.jsx)(n.code,{children:"E_"})," (a strong tag) or ",(0,i.jsx)(n.code,{children:"e_"})," (a weak tag)"]}),"\n",(0,i.jsxs)(n.p,{children:["Enumerator fields must also be ",(0,i.jsx)(n.code,{children:"SCREAMING_SNAKE_CASE"})," and use the enumerator name as a prefix."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-pawn",children:"static enum E_PLAYER_DATA {\n    E_PLAYER_CASH,\n    Float:E_PLAYER_HEALTH,\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Using a weak tag"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-pawn",children:"static enum e_PLAYER_DATA {\n    E_PLAYER_CASH,\n    Float:E_PLAYER_HEALTH,\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Non-named enumerator fields must also be ",(0,i.jsx)(n.code,{children:"SCREAMING_SNAKE_CASE"})," and use the enumerator name as a prefix."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-pawn",children:"static enum {\n    ENUMATOR_INTEGER,\n    Float:ENUMATOR_FLOAT,\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Enumerators must always be declared ",(0,i.jsx)(n.code,{children:"static"})," unless used outside the module."]}),"\n",(0,i.jsx)(n.h4,{id:"macros-and-pre-processor-definitions",children:"Macros and Pre-Processor Definitions"}),"\n",(0,i.jsxs)(n.p,{children:["Macros must always use ",(0,i.jsx)(n.code,{children:"SCREAMING_SNAKE_CASE"})," regardless of their usage."]}),"\n",(0,i.jsxs)(n.p,{children:["Pre-Processor definitions (constant definitions) must also use ",(0,i.jsx)(n.code,{children:"SCREAMING_SNAKE_CASE"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"This helps differentiate between variables and constants as well as functions and macros."}),"\n",(0,i.jsx)(n.p,{children:"It's generally advised to avoid inventing new syntactical elements in order to prevent confusion among newcomers as to which words are part of the language and which words are from libraries."}),"\n",(0,i.jsx)(n.p,{children:"However, some older libraries do this and cannot change because of backwards compatibility."}),"\n",(0,i.jsx)(n.h3,{id:"documentation",children:"Documentation"}),"\n",(0,i.jsxs)(n.p,{children:["Always document exported functions with a simple line comment in the format ",(0,i.jsx)(n.code,{children:"// FunctionName does X, Y and Z and returns A"})," where the first word is the name of the function itself followed by a brief description of what it does. No need to waste time describing each individual parameter. For example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-pawn",children:"// LoadPlayerAccount is called to initiate the account load process. This\n// function will trigger HTTP calls to get player data, it will display dialogs\n// to the player and eventually, once the process has completed, the event\n// `OnPlayerLogin` is emitted on success. On failure, the player is kicked.\nstock Error:LoadPlayerAccount(playerid)\n{\n    // code...\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Each package should have a ",(0,i.jsx)(n.code,{children:"README"})," and, if necessary, each module should have a comment on the very first line describing what that module provides."]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return l}});var a=s(67294);let i={},t=a.createContext(i);function l(e){let n=a.useContext(t);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);