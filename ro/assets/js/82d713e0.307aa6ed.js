"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["34397"],{55828:function(e,n,t){t.r(n),t.d(n,{default:()=>o,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>l,contentTitle:()=>d});var s=JSON.parse('{"id":"scripting/language/reference/General-syntax","title":"General syntax","description":"---","source":"@site/docs/scripting/language/reference/06-General-syntax.md","sourceDirName":"scripting/language/reference","slug":"/scripting/language/reference/General-syntax","permalink":"/ro/docs/scripting/language/reference/General-syntax","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/language/reference/06-General-syntax.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"The-preprocessor","permalink":"/ro/docs/scripting/language/reference/The-preprocessor"},"next":{"title":"Operators-and-expressions","permalink":"/ro/docs/scripting/language/reference/Operators-and-expressions"}}'),r=t("85893"),a=t("50065");let i={},d="General syntax",c={},l=[];function h(e){let n={a:"a",code:"code",em:"em",h1:"h1",header:"header",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"general-syntax",children:"General syntax"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Format"})}),"\n",(0,r.jsx)(n.p,{children:"Identifiers, numbers and tokens are separated by spaces, tabs, carriage\nreturns and \u201Cform feeds\u201D. Series of one or more of these separators are\ncalled white space."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Optional semicolons"})}),"\n",(0,r.jsx)(n.p,{children:"Semicolons (to end a statement) are optional if they occur at the end\nof a line. Semicolons are required to separate multiple statements on\na single line. An expression may still wrap over multiple lines, but\npostfix operators (++, -- and char) must appear on the same line as their operand."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Comments"})}),"\n",(0,r.jsx)(n.p,{children:"Text between the tokens /_ and _/ (both tokens may be at the same\nline or at different lines) and text behind // (up to the end of the line)\nis a programming comment. The parser treats a comment as white\nspace. Comments may not be nested."}),"\n",(0,r.jsx)(n.p,{children:"A comment that starts with \u201C/*_ \u201D (two stars and white-space behind\nthe second star) and ends with \u201C_/\u201D is a documentation comment.\nA comment that starts with \u201C/// \u201D (three slashes and white-space\nbehind the third slash) is also a documentation comment. The parser\nmay treat documentation comments in a special way; for example, it\nmay construct on-line help from it."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Identifiers"})}),"\n",(0,r.jsx)(n.p,{children:"Names of variables, functions and constants. Identifiers consist of the\ncharacters a. . . z, A. . . Z, 0. . . 9, _ or @; the first character may not be\na digit. The characters @ and _ by themselves are not valid identifiers,"}),"\n",(0,r.jsxs)(n.p,{children:["i.e. \u201C",(0,r.jsx)(n.em,{children:"Up\u201D is a valid identifier, but \u201C"}),"\u201D is not."]}),"\n",(0,r.jsx)(n.p,{children:"pawn is case sensitive."}),"\n",(0,r.jsx)(n.p,{children:"A parser may truncate an identifier after a maximum length. The\nnumber of significant characters is implementation defined, but should\nbe at least 16 characters."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Reserved words (keywords)"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Statements"}),(0,r.jsx)(n.th,{children:"Operators"}),(0,r.jsx)(n.th,{children:"Directives"}),(0,r.jsx)(n.th,{children:"Other"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"assert"}),(0,r.jsx)(n.td,{children:"char"}),(0,r.jsx)(n.td,{children:"#assert"}),(0,r.jsx)(n.td,{children:"const"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"break"}),(0,r.jsx)(n.td,{children:"defined"}),(0,r.jsx)(n.td,{children:"#define"}),(0,r.jsx)(n.td,{children:"enum"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"case"}),(0,r.jsx)(n.td,{children:"sizeof"}),(0,r.jsx)(n.td,{children:"#else"}),(0,r.jsx)(n.td,{children:"forward"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"continue"}),(0,r.jsx)(n.td,{children:"state"}),(0,r.jsx)(n.td,{children:"#elseif"}),(0,r.jsx)(n.td,{children:"native"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"default"}),(0,r.jsx)(n.td,{children:"tagof"}),(0,r.jsx)(n.td,{children:"#emit"}),(0,r.jsx)(n.td,{children:"new"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"do"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"#endif"}),(0,r.jsx)(n.td,{children:"operator"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"else"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"#endinput"}),(0,r.jsx)(n.td,{children:"public"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"exit"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"#endscript"}),(0,r.jsx)(n.td,{children:"static"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"for"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"#error"}),(0,r.jsx)(n.td,{children:"stock"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"goto"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"#file"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"if"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"#if"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"return"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"#include"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sleep"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"#line"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"state"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"#pragma"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"switch"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"#section"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"while"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"#tryinclude"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"#undef"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Next to reserved words, pawn also has several predefined constants,\nyou cannot use the symbol names of the predefined constants for vari-\nable or function names."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Constants (literals)"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Integer numeric constants"}),"\n. ",(0,r.jsx)(n.strong,{children:"binary"}),"\n0b followed by a series of the digits 0 and 1.\n. ",(0,r.jsx)(n.strong,{children:"decimal"}),"\na series of digits between 0 and 9.\n. ",(0,r.jsx)(n.strong,{children:"hexadecimal"}),"\n0x followed by a series of digits between 0 and 9 and the letters a to f."]}),"\n",(0,r.jsx)(n.p,{children:"In all number radices, an underscore may be used to sepa-\nrate groups of (hexa-)decimal digits. Underscore characters\nbetween the digits are ignored."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Rational number constants"})}),"\n",(0,r.jsx)(n.p,{children:"A rational number is a number with a fractional part. A ra-\ntional number starts with one or more digits, contains a dec-\nimal point and has at least one digit following the decimal\npoint. For example, \u201C12.0\u201D and \u201C0.75\u201D are valid rational num-\nbers. Optionally, an exponent may be appended to the rational\nnumber; the exponent notation is the letter \u201Ce\u201D (lower case)\nfollowed by a signed integer numeric constant. For example,\n\u201C3.12e4\u201D is a valid rational number with an exponent."}),"\n",(0,r.jsx)(n.p,{children:"Support for rational numbers must be enabled with #pragma\nrational directive. Depending on the options set with this\ndirective, the rational number represents a floating point or a\nfixed point number."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Character constants"})}),"\n",(0,r.jsx)(n.p,{children:"A single ASCII character surrounded by single quotes is a char-\nacter constant (for example: \u2019a\u2019, \u20197\u2019, \u2019$\u2019). Character con-\nstants are assumed to be numeric constants."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Escape sequences"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u2019\\a\u2019"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Audible alarm (beep)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u2019\\b\u2019"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Backspace"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u2019\\e\u2019"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Escape"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u2019\\f\u2019"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Formfeed"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u2019\\n\u2019"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Newline"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u2019\\r\u2019"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Carriage Return"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u2019\\t\u2019"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Horizontal tab"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u2019\\v\u2019"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"Vertical tab"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u2019\\\u2019"}),(0,r.jsx)(n.td,{children:"\\"}),(0,r.jsx)(n.td,{children:"the escape character"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u2019\\\u2019\u2019"}),(0,r.jsx)(n.td,{children:"\u2019"}),(0,r.jsx)(n.td,{children:"single quote"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:'\u2019"\u2019'}),(0,r.jsx)(n.td,{children:'"'}),(0,r.jsx)(n.td,{children:"double quote"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u2019%"}),(0,r.jsx)(n.td,{children:"%"}),(0,r.jsx)(n.td,{children:"percent sign"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u2019\\ddd;\u2019"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"character code with decimal code \u201Cddd\u201D"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u2019\\xhhh;\u2019"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"character code with hexadecimal code \u201Chhh\u201D"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"The semicolon after the ddd; and xhhh; codes is optional.\nIts purpose is to give the escape sequence sequence an explicit\ntermination symbol when it is used in a string constant."}),"\n",(0,r.jsx)(n.p,{children:"The backslash (\u201C\\\u201D) is the default \u201Cescape\u201D character. You can\nset a different escape character with the #pragma ctrlchar\ndirective (page 120)."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"String constants"})}),"\n",(0,r.jsx)(n.p,{children:"String constants are assumed to be arrays with a size that is\nsufficient to hold all characters plus a terminating \u2019\\0\u2019.\nEach string is stored at a unique position in memory; there is no\nelimination of duplicate strings."}),"\n",(0,r.jsx)(n.p,{children:"An unpacked string is a series of zero or more ASCII characters\nsurrounded by double quotes. Each array element contains a\nsingle character. An unpacked string can hold characters in a\nmulti-byte character set, such as Unicode or UCS-4."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"unpacked string constant:"})}),"\n",(0,r.jsx)(n.p,{children:'"the quick brown fox..."'}),"\n",(0,r.jsx)(n.p,{children:"A packed string literal follows the syntax for an unpacked\nstring, but a \u201C!\u201D precedes the first double quote."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"packed string constant:"})}),"\n",(0,r.jsx)(n.p,{children:'!"...packed and sacked the lazy dog"'}),"\n",(0,r.jsx)(n.p,{children:"In the case of a packed string, the parser packs as many char-\nacters in a cell as will fit. A character is not addressable as a\nsingle unit, instead each element of the array contains multiple\ncharacters. The first character in a \u201Cpack\u201D occupies the highest\nbits of the array element. In environments that store memory\nwords with the high byte at the lower address (Big Endian,\nor Motorola format), the individual characters are stored in\nthe memory cells in the same order as they are in the string.\nA packed string ends with a zero character and the string is\npadded (with zero bytes) to a multiple of cells."}),"\n",(0,r.jsx)(n.p,{children:"A packed string can only hold characters from a single-byte\ncharacter set, such as ascii or one of the extended ascii sets\nfrom the ISO 8859 norm."}),"\n",(0,r.jsx)(n.p,{children:"Escape sequences may be used within strings. See the section\non character constants (page 99) for a list of escape sequences."}),"\n",(0,r.jsx)(n.p,{children:"There is an alternative syntax for \u201Cplain strings\u201D. In a plain\nstring, every character is taken as-is and escape sequences\nare not recognized. Plain strings are convenient to store file/\nresource names, especially in the case where the escape charac-\nter is also used as a special character by the operating system\nor host application."}),"\n",(0,r.jsx)(n.p,{children:"The syntax for a plain string is the escape character followed by\nthe string in double quotes. The backslash (\u201C\\\u201D) is the default"}),"\n",(0,r.jsx)(n.p,{children:"\u201Cescape\u201D character. You cannot enter escape sequences in a\nplain string: all characters will be taken literally."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"plain string constant:"})}),"\n",(0,r.jsx)(n.p,{children:'"C:\\all my work\\novel.rtf"'}),"\n",(0,r.jsx)(n.p,{children:"In the above example, the occurrences of \u201C\\a\u201D and \u201C\\n\u201D do\nnot indicate escape sequences, but rather the literal character\npairs \u201C\\\u201D and \u201Ca\u201D, and \u201C\\\u201D and \u201Cn\u201D."}),"\n",(0,r.jsx)(n.p,{children:"A packed plain string has both the \u201C!\u201D and the escape character\nprefixing the opening double quote. Both strings below are"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"packed plain strings:"})}),"\n",(0,r.jsx)(n.p,{children:'!"C:\\all my work\\novel.rtf"'}),"\n",(0,r.jsx)(n.p,{children:'!"C:\\all my work\\novel.rtf"'}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Array constants"})}),"\n",(0,r.jsx)(n.p,{children:"A series of numeric constants between braces is an array con-\nstant. Array constants can be used to initialize array variables\nwith (see page 65) and they can be passed as function argu-\nments (see page 71)."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Symbolic constants"})}),"\n",(0,r.jsx)(n.p,{children:"A source file declares symbolic constants with the const and the enum\ninstructions. The const keyword declares a single constant and the\nenum defines a list of \u2014usually\u2014 sequential constants sharing the same tag name."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"const"})," ",(0,r.jsx)(n.em,{children:"identifier = constant expression"})]}),"\n",(0,r.jsx)(n.p,{children:"Creates a symbolic constant with the value of the constant\nexpression on the right hand of the assignment operator. The\nconstant can be used at any place where a literal number is\nvalid (for example: in expressions, in array declarations and in\ndirectives like \u201C#if\u201D and \u201C#assert\u201D)."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"enum"})," ",(0,r.jsx)(n.em,{children:"name (increment) { constant list }"})]}),"\n",(0,r.jsx)(n.p,{children:"The enum instruction creates a series of constants with incre-\nmenting values. The constant list is a series of identifiers sep-\narated by commas. Unless overruled, the first constant of an\nenum list has the value 0 and every subsequent constant has\nthe value of its predecessor plus 1."}),"\n",(0,r.jsx)(n.p,{children:"Both the value of a constant and the increment value can be\nset by appending the value to the constant\u2019s identifier. To set\na value, use"}),"\n",(0,r.jsx)(n.p,{children:"name = value"}),"\n",(0,r.jsx)(n.p,{children:"in the constant list. To set the increment, use:"}),"\n",(0,r.jsx)(n.p,{children:"name [ increment ]"}),"\n",(0,r.jsx)(n.p,{children:"The increment value is reset to 1 after every constant symbol\ndeclaration in the constant list."}),"\n",(0,r.jsx)(n.p,{children:"If both an increment and a value should be set for a constant,\nthe increment (\u201C[. . . ]\u201D notation) should precede the value (\u201C=\u201D\nnotation."}),"\n",(0,r.jsx)(n.p,{children:"The symbols in the constant list may have an explicit tag,\nwhich should precede the symbol name."}),"\n",(0,r.jsx)(n.p,{children:"The name token that follows the enum keyword is optional. If it\nis included, and if the symbol names does not have an explicit\ntag, this name is used as the tag name for every symbol in the\nconstant list. In addition, the enum command creates an extra\nconstant with name for the constant name and the tag name.\nThe value of the last constant is the value of the last symbol in\nthe constant list plus the increment value of that last constant."}),"\n",(0,r.jsx)(n.p,{children:"The increment token that follows the optional name token is\nalso optional. If included, it specifies a different post-increment\nrule. By default, an enum increments the value of every succe-\nsive constant with 1, but you may specify a different rule with\nthe syntax \u201C(operator constant)\u201D, where operator must be +=,"}),"\n",(0,r.jsx)(n.p,{children:"*= or <<=. The += operator creates an additive increment, the"}),"\n",(0,r.jsx)(n.p,{children:"*= and <<= create a multiplicative increment. The constant\nmay be a literal value or a symbolic constant. The increment\nrule must be enclosed in parentheses. If no increment rule is\nspecified, the parenthese may be omitted as well."}),"\n",(0,r.jsx)(n.p,{children:"A symbolic constant that is defined locally, is valid throughout the\nblock. A local symbolic constant may not have the same name as\na variable (local or global), a function, or another constant (local or\nglobal)."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Predefined constants"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cellbits"}),(0,r.jsx)(n.td,{children:"The size of a cell in bits; usually 32."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cellmax"}),(0,r.jsx)(n.td,{children:"The largest valid positive value that a cell can hold; usually 2147483647."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cellmin"}),(0,r.jsx)(n.td,{children:"The largest valid negative value that a cell can hold; usually -2147483648."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"charbits"}),(0,r.jsx)(n.td,{children:"The size of a packed character in bits; usually 8."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"charmax"}),(0,r.jsx)(n.td,{children:"The largest valid packed character value; usually a packed character is 8-bit and the maximum valid value is thus 255."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"charmin"}),(0,r.jsx)(n.td,{children:"The smallest valid character value, for both packed and unpacked values; currently set to zero (0)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"debug"}),(0,r.jsx)(n.td,{children:"The debug level: 2 if the parser creates full symbolic information plus run-time bounds checking, 1 if the parser generates run-time checking only (assertions and array bounds checks), and 0 (zero) if all debug support and run-time checking was turned off."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"false"}),(0,r.jsx)(n.td,{children:"0 (this constant is tagged as bool:)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"__Pawn"}),(0,r.jsx)(n.td,{children:"The version number of the pawn compiler in Binary Coded Decimals (BCD) \u2014that is, for version 2.8.1 the constant is \u201C0x281\u201D."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"true"}),(0,r.jsx)(n.td,{children:"1 (this constant is tagged as bool:)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ucharmax"}),(0,r.jsx)(n.td,{children:"The largest unpacked character value, its value depends on the size of a cell. A typical use for this constant is in checking whether a string is packed or unpacked, see page 137."})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Tag names"})}),"\n",(0,r.jsx)(n.p,{children:"A tag consists of an identifier followed by a colon. There may be no white space between the identifier and the colon."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Predefined tag names"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"bool:"}),(0,r.jsx)(n.td,{children:"For \u201Ctrue/false\u201D flags. The predefined constants true and false have this tag."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Fixed:"}),(0,r.jsx)(n.td,{children:"Rational numbers typically have this tag when fixed point support is enabled (page 121)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Float:"}),(0,r.jsx)(n.td,{children:"Rational numbers typically have this tag when floating point support is enabled (page 121)."})]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Optional semicolons: 122"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Predefined constants: 102"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Rational numbers are also called \u201Creal numbers\u201D or \u201Cfloating point numbers\u201D"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"#pragma rational: 121"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"The syntaxes for packed literal strings and unpacked literal strings can be swapped with the \u201C#pragma pack\u201D directive, see page 121"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Examples: 21, 26"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Examples: 9, 21"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Identifiers: 97"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"See page 68 for examples of the \u201Cenum\u201D constant declarations"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"See page 26 for an example of a custom increment rule"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Identifiers: 97"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/ro/docs/scripting/language/reference/Contents",children:"Go Back to Contents"})})]})}function o(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return i}});var s=t(67294);let r={},a=s.createContext(r);function i(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);