"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["61746"],{83962:function(e,n,a){a.r(n),a.d(n,{default:()=>d,frontMatter:()=>r,metadata:()=>t,assets:()=>c,toc:()=>l,contentTitle:()=>o});var t=JSON.parse('{"id":"scripting/language/reference/Assorted-tips","title":"Assorted tips","description":"---","source":"@site/docs/scripting/language/reference/12-Assorted-tips.md","sourceDirName":"scripting/language/reference","slug":"/scripting/language/reference/Assorted-tips","permalink":"/sr/docs/scripting/language/reference/Assorted-tips","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/language/reference/12-Assorted-tips.md","tags":[],"version":"current","sidebarPosition":12,"frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Pitfalls-differences-from-C","permalink":"/sr/docs/scripting/language/reference/Pitfalls-differences-from-C"},"next":{"title":"Appendices","permalink":"/sr/docs/scripting/language/reference/Appendices"}}'),i=a("85893"),s=a("50065");let r={},o="Assorted tips",c={},l=[{value:"\u2022 Working with characters and strings",id:"-working-with-characters-and-strings",level:3},{value:"\u2022 Internationalization",id:"-internationalization",level:3},{value:"\u2217 Codepage 1252 is not exactly the same as Latin-1; Microsoft extended the standardized set to include glyphs at code positions that Latin-1 marks as \u201Creserved\u201D.",id:"-codepage-1252-is-not-exactly-the-same-as-latin-1-microsoft-extended-the-standardized-set-to-include-glyphs-at-code-positions-that-latin-1-marks-as-reserved",level:6},{value:"\u2020 If Unicode encodes characters, an \u201CUnicode font\u201D is a contradictio in terminis \u2014because a font encodes glyphs.",id:"-if-unicode-encodes-characters-an-unicode-font-is-a-contradictio-in-terminis-because-a-font-encodes-glyphs",level:6},{value:"\u2022 Working with tags",id:"-working-with-tags",level:3},{value:"\u2022 Concatenating lines",id:"-concatenating-lines",level:3},{value:"\u2022 A program that generates its own source code",id:"-a-program-that-generates-its-own-source-code",level:3}];function h(e){let n={a:"a",br:"br",code:"code",h1:"h1",h3:"h3",h6:"h6",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"assorted-tips",children:"Assorted tips"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"-working-with-characters-and-strings",children:"\u2022 Working with characters and strings"}),"\n",(0,i.jsx)(n.p,{children:"Strings can be in packed or in unpacked format. In the packed format, each\ncell will typically hold four characters (in common implementations, a cell is\n32-bit and a character is 8 bit). In this configuration, the first character\nin a \u201Cpack\u201D of four is the highest byte of a cell and the fourth character is in the\nlowest byte of each cell."}),"\n",(0,i.jsx)(n.p,{children:"A string must be stored in an array. For an unpacked string, the array must\nbe large enough to hold all characters in the string plus a terminating zero\ncell. That is, in the example below, the variable ustring is defined as having five\ncells, which is just enough to contain the string with which it is initialized:"}),"\n",(0,i.jsx)(n.p,{children:"Listing: unpacked string"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'\nnew ustring[5] = "test"\n\n'})}),"\n",(0,i.jsx)(n.p,{children:"In a packed string, each cell contains several characters and the string\nends with a zero character. The char operator helps with declaring the array size\nto contain the required number of characters . The example below will allocate\nenough cells to hold five packed characters. In a typical implementation, there\nwill be two cells in the array."}),"\n",(0,i.jsx)(n.p,{children:"Listing: packed string"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'\nnew pstring[5 char] = !"test"\n\n'})}),"\n",(0,i.jsx)(n.p,{children:"In other words, the char operators divides its left operand by the number of\nbytes that fit in a cell and rounds upwards. Again, in a typical implementation,\nthis means dividing by four and rounding upwards."}),"\n",(0,i.jsx)(n.p,{children:"You can design routines that work on strings in both packed and unpacked formats.\nTo find out whether a string is packed or unpacked, look at the first\ncell of a string. If its value is either negative or higher than the maximum possible\nvalue of an unpacked character, the string is a packed string. Otherwise it\nis an unpacked string."}),"\n",(0,i.jsx)(n.p,{children:"The code snippet below returns true if the input string is packed and false otherwise:"}),"\n",(0,i.jsx)(n.p,{children:"Listing: ispacked function"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"\nbool: ispacked(string[])\n    return !(0 <= string[0] <= ucharmax)\n\n"})}),"\n",(0,i.jsxs)(n.p,{children:["An unpacked string ends with a full zero cell. The end of a packed string is\nmarked with only a zero character. Since there may be up to four characters\nin a 32-bit cell, this zero character may occur at any of the four positions in\nthe \u201Cpack\u201D. The "," operator extracts a character from a cell in an\narray. Basically, one uses the cell index operator (\u201C[ ]\u201D) for unpacked strings and\nthe character index operator (\u201C","\u201D) to work on packed strings."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, a routine that returns the length in characters of any",(0,i.jsx)(n.br,{}),"\n","string (packed or unpacked) is:"]}),"\n",(0,i.jsx)(n.p,{children:"Listing: my strlen function"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"\nmy_strlen(string[])\n{\n    new len = 0\n    if (ispacked(string))\n        while (string{len} != EOS)              /* get character from pack */\n            ++len\n    else\n        while (string[len] != EOS)              /* get cell */\n            ++len\n    return len\n}\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"If you make functions to work exclusively on either packed or unpacked strings,\nit is a good idea to add an assertion to enforce this condition:"}),"\n",(0,i.jsx)(n.p,{children:"Listing: strupper function"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"\nstrupper(string[])\n{\n    assert ispacked(string)\n\n    for (new i=0; string{i} != EOS; ++i)\n        string{i} = toupper(string{i})\n}\n\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Although, in preceding paragraphs we have assumed that a cell is 32",(0,i.jsx)(n.br,{}),"\n","bits wide and a character is 8 bits, this should not be relied upon. The\nsize of a cell is implementation defined; the maximum and minimum values are",(0,i.jsx)(n.br,{}),"\n","in the predefined constants cellmax and cellmin. There are similar predefined\nconstants for characters. One may safely assume, however, that both the size\nof a character in bytes and the size of a cell in bytes are powers of two."]}),"\n",(0,i.jsx)(n.p,{children:"The char operator allows you to determine how many packed characters fit in\na cell. For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"\n#if     4 char == 1\n    /* code that assumes 4 packed characters per cell */\n#elseif 4 char == 2\n    /* code that assumes 2 packed characters per cell */\n#elseif 4 char == 4\n    /* code that assumes 1 packed character per cell */\n#else\n    #assert 0 /* unsupported cell/character size */\n#endif\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"-internationalization",children:"\u2022 Internationalization"}),"\n",(0,i.jsx)(n.p,{children:"Programming examples in this manual have used the English language for\nall output (prompts, messages, . . . ), and a Latin character set. This\nis not necessarily so; one can, for example, modify the first \u201Chello world\u201D program on page 5 to:"}),"\n",(0,i.jsx)(n.p,{children:"Listing: \u201Chello world\u201D in Greek"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'\nmain()\n    printf "\x82\x84\x83\x86\x85\u02D9 \x87\x89\x88\x8b\x8a\x8d\x8c\x8f\x8e \u02D9\x8a\x89\x88\x89\x90\x8b\x8a\x84\x91\\n"\n\n'})}),"\n",(0,i.jsx)(n.p,{children:"PAWN has basic support for non-Latin alphabets, but it only accepts non-Latin\ncharacters in strings and character constants. The PAWN language\nrequires that all keywords and symbols (names of functions, variables, tags and other\nelements) be encoded in the ascii character set."}),"\n",(0,i.jsx)(n.p,{children:"For languages whose required character set is relatively small, a common solution\nis to use an 8-bit extended ascii character set (the ascii character set is\n7-bit, holding 128 characters). The upper 128 codes of the extended set contain\nglyphs specific for the language. For Western European languages, a well\nknown character set is \u201CLatin-1\u201D, which is standardized as ISO 8859-1 \u2014the\nsame set also goes by the name \u201Ccodepage 1252\u201D, at least for Microsoft Windows.\u2217\nCodepages have been defined for many languages; for example, ISO\n8859-2 (\u201CLatin-2\u201D) has glyphs used in Central and Eastern Europe, and ISO\n8859-7 contains the Greek alphabet in the upper half of the extended ascii set."}),"\n",(0,i.jsxs)(n.p,{children:["Unfortunately, codepage selection can by confusing, as vendors of operating\nsystems typically created their own codepages irrespective of what",(0,i.jsx)(n.br,{}),"\n","already existed. As a result, for most character sets there exist multiple incompatible codepages"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h6,{id:"-codepage-1252-is-not-exactly-the-same-as-latin-1-microsoft-extended-the-standardized-set-to-include-glyphs-at-code-positions-that-latin-1-marks-as-reserved",children:"\u2217 Codepage 1252 is not exactly the same as Latin-1; Microsoft extended the standardized set to include glyphs at code positions that Latin-1 marks as \u201Creserved\u201D."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.p,{children:["For example, codepage 1253 for Microsoft Windows also encodes\nthe Greek alphabet, but it is incompatible with ISO 8859-7. When writing\ntexts in Greek, it now becomes important to check what encoding is",(0,i.jsx)(n.br,{}),"\n","used, because many Microsoft Windows applications support both."]}),"\n",(0,i.jsxs)(n.p,{children:["When the character set for a language exceeds 256 glyphs, a codepage does\nnot suffice. Traditionally, the codepage technique was extended by reserving\nspecial \u201Cshift\u201D codes in the base character set that switch to a new set of\nglyphs. The next character then indicates the specific glyph. In effect, the glyph is\nnow identified by a 2-byte index. On the other hand, some characters (especially\nthe 7-bit ascii set) can still be indicated by a single byte. The",(0,i.jsx)(n.br,{}),"\n","\u201CShift-JIS\u201D standard, for the Japanese character set, is an example for the variable length encoding."]}),"\n",(0,i.jsx)(n.p,{children:"Codepages become problematic when interchanging documents or data with\npeople in regions that use a different codepage, or when using different\nlanguages in the same document. Codepages that use \u201Cshift\u201D characters complicate\nthe matter further, because text processing must now take into account\nthat a character may take either one or two bytes. Scanning through a string\nfrom right to left may even become impossible, as a byte may either indicate a\nglyph from the base set (\u201Cunshifted\u201D) or it may be a glyph from a shifted set\n-in the latter case the preceding byte indicates the shift set, but the meaning\nof the preceding character depends on the character before that."}),"\n",(0,i.jsx)(n.p,{children:"The ISO/IEC 10646 \u201CUniversal Character Set\u201D (UCS) standard has the ambitious\ngoal to eventually include all characters used in all the written\nlanguages in the world, using a 31-bit character set. This solves both of the problems\nrelated to codepages and \u201Cshifted\u201D character sets. However, the ISO/IEC body\ncould not produce a standard in time, and therefore a consortium of mainly\nAmerican software manufacturers started working in parallel on a simplified\n16-bit character set called \u201CUnicode\u201D. The rationale behind Unicode was that"}),"\n",(0,i.jsxs)(n.p,{children:["it would encode abstract characters, not glyphs, and that therefore 65,536 would\nbe sufficient.\u2020 In practice, though, Unicode does encode glyphs and not long\nafter it appeared, it became apparent that 65,536 code points would not be\nenough. To counter this, later Unicode versions were extended with multiple\n\u201Cplanes\u201D and special codes that select a plane. The combination of a",(0,i.jsx)(n.br,{}),"\n","plane selector and the code pointer inside that plane is called a \u201Csurrogate pair\u201D."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h6,{id:"-if-unicode-encodes-characters-an-unicode-font-is-a-contradictio-in-terminis-because-a-font-encodes-glyphs",children:"\u2020 If Unicode encodes characters, an \u201CUnicode font\u201D is a contradictio in terminis \u2014because a font encodes glyphs."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"The first 65,536 code points are in the \u201CBasic Multilingual Plane\u201D (BMP) and\ncharacters in this set do not need a plane selector."}),"\n",(0,i.jsxs)(n.p,{children:["Essentially, the introduction of surrogate pairs in the Unicode",(0,i.jsx)(n.br,{}),"\n","standard is equivalent to the shift codes of earlier character sets \u2014and it carries some of\nthe problems that Unicode was intended to solve. The UCS-4 encoding by\nISO/IEC 10646 does not have/need surrogate pairs."]}),"\n",(0,i.jsxs)(n.p,{children:["Support for Unicode/UCS-4 in (host) applications and operating systems has\nemerged in two different ways: either the internal representation of characters\nis multi-byte (typically 16-bit, or 2-byte), or the application stores strings\ninternally in UTF-8 format, and these strings are converted to the proper glyphs\nonly when displaying or printing them. Recent versions of Microsoft Windows\nuse Unicode internally; The Plan-9 operating system pioneered the UTF-8 encoding\napproach, which is now widely used in Unix/Linux. The",(0,i.jsx)(n.br,{}),"\n","advantage of UTF-8 encoding as an internal representation is that it is physically an 8-\nbit encoding, and therefore compatible with nearly all existing databases, file\nformats and libraries. This circumvents the need for double entry-points for\nfunctions that take string parameters \u2014as is the case in Microsoft Windows,\nwhere many functions exist in an \u201CA\u201Dnsi and a \u201CW\u201Dide version. A disadvantage of UTF-8\nis that it is a variable length encoding, and many in-memory\nstring operations are therefore clumsy (and inefficient). That said, with the\nappearance of surrogate pairs, Unicode has now also become a variable length\nencoding."]}),"\n",(0,i.jsx)(n.p,{children:"The PAWN language requires that its keywords and symbols names are in ascii,\nand it allows non-ascii characters in strings. There are five ways that a host\napplication could support non-ascii characters in strings and character\nliterals:"}),"\n",(0,i.jsx)(n.p,{children:"1 Support codepages: in this strategy the entire complexity of choosing the\ncorrect glyphs and fonts is delegated to the host application. The codepage\nsupport is based on codepage mapping files with a file format of the \u201Ccross\nmapping tables\u201D distributed by the Unicode consortium."}),"\n",(0,i.jsx)(n.p,{children:"2 Support Unicode or UCS-4 and let the PAWN compiler convert scripts that\nwere written using a codepage to \u201Cwide\u201D characters: for this strategy, you\nneed to set #pragma codepage or use the equivalent compiler option. The\ncompiler will only correctly translate characters in unpacked strings."}),"\n",(0,i.jsx)(n.p,{children:"3 Support Unicode or UCS-4 and let the PAWN compiler convert scripts encoded\nin UTF-8 to \u201Cwide\u201D characters: when the source file for the PAWN\ncompiler is in UTF-8 encoding, the compiler expands characters to Unicode/UCS-4 in unpacked strings."}),"\n",(0,i.jsx)(n.p,{children:"4 Support UTF-8 encoding internally (in the host application) and write the\nsource file in UTF-8 too: all strings should now be packed strings to avoid\nthe compiler to convert them."}),"\n",(0,i.jsx)(n.p,{children:"For most internationalization strategies, as you can see, the host application\nneeds to support Unicode or UCS-4. As a side note, the PAWN compiler does not\ngenerate Unicode surrogate pairs. If characters outside the BMP are needed"}),"\n",(0,i.jsx)(n.p,{children:"and the host application (or operating system) does not support the full UCS-4\nencoding, the host application must split the 32-bit character cell provided\nby the PAWN compiler into a surrogate pair."}),"\n",(0,i.jsxs)(n.p,{children:["The PAWN compiler accepts a source file as an UTF-8 encoded text file \u2014see\npage 168. When the source file is in UTF-8 encoding, \u201Cwide\u201D characters in\nan unpacked string are stored as multi-byte Unicode/UCS-4 characters; wide\ncharacters in a packed string remain in UTF-8 encoding. To write",(0,i.jsx)(n.br,{}),"\n","source files in UTF-8 encoding, you need, of course, a (programmer\u2019s) editor",(0,i.jsx)(n.br,{}),"\n","that supports UTF-8. Codepage translation does not apply for files that",(0,i.jsx)(n.br,{}),"\n","are in UTF-8 encoding."]}),"\n",(0,i.jsxs)(n.p,{children:["For an occasional Unicode character in a literal string, an alternative is that\nyou use an escape sequence. As Unicode character tables\nare usually documented with hexadecimal glyph indices, the xhhh; sequence is probably the",(0,i.jsx)(n.br,{}),"\n","more convenient specification of a random Unicode character. For example,",(0,i.jsx)(n.br,{}),"\n","the escape sequence \u201C\\x2209\u201D stands for the \u201C6\u2208\u201D character."]}),"\n",(0,i.jsx)(n.p,{children:"There is a lot more to internationalization than just basic support for extended\ncharacter sets, such as formatting date & time fields, reading order\n(left-to-right or right-to-left) and locale-driven translation of system messages. The\nPAWN toolkit delegates these issues to the host application."}),"\n",(0,i.jsx)(n.h3,{id:"-working-with-tags",children:"\u2022 Working with tags"}),"\n",(0,i.jsx)(n.p,{children:"The tag name system was invented to add a \u201Cusage checking\u201D mechanism to PAWN.\nA tag denotes a \u201Cpurpose\u201D of a value or variable, and the PAWN compiler\nissues a diagnostic message when the tag of an expression does not match the\nrequired tag for the context of the expression."}),"\n",(0,i.jsx)(n.p,{children:"Many modern computer languages offer variable types, where a type specifies\nthe memory layout and the purpose of the variable. The programming language"}),"\n",(0,i.jsx)(n.p,{children:"then checks the type equivalence; the pascal language is very strict at checking\ntype equality, whereas the C programming language is more forgiving. The\nPAWN language does not have types: all variables have the size and the layout\nof a cell, although bit representations in the cell may depend on the purpose\nof the variable. In summary:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"a type specifies the memory layout and the range of variables and function results"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"a tagname labels the purpose of variables, constants and function results"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Tags in PAWN are mostly optional. A program that was \u201Cfortified\u201D with tag\nnames on the variable and constant declarations will function identically when\nall tag names are removed. One exception is formed by user-defined operators:\nthe PAWN compiler uses the tags of the operands to choose between any user-\ndefined operators and the standard operator."}),"\n",(0,i.jsx)(n.p,{children:"The snippet below declares three variables and does three assignments, two of\nwhich give a \u201Ctag mismatch\u201D diagnostic message:"}),"\n",(0,i.jsx)(n.p,{children:"Listing: comparing apples to oranges"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'\nnew apple:elstar                /* variable "elstar" with tag "apple" */\nnew orange:valencia             /* variable "valencia" with tag "orange" */\nnew x                           /* untagged variable "x" */\n\nelstar = valencia               /* tag mismatch */\nelstar = x                      /* tag mismatch */\nx = valencia                    /* ok */\n\n'})}),"\n",(0,i.jsx)(n.p,{children:"The first assignment causes a \u201Ctag mismatch\u201D diagnostic as it assigns an \u201Corange\u201D\ntagged variable to a variable with an \u201Capple\u201D tag. The second assignment\nputs the untagged value of x into a tagged variable, which causes again a diagnostic.\nWhen the untagged variable is on the left hand of the assignment\noperator, as in the third assignment, there is no warning or error message. As\nvariable x is untagged, it can accept a value of any weak tag."}),"\n",(0,i.jsx)(n.p,{children:"The same mechanism applies to passing variables or expressions to functions\nas function operands \u2014see page 78 for an example. In short, when a function\nexpects a particular tag name on an argument, you must pass an expression/\nvariable with a matching tag to that function; but if the function expects an\nuntagged argument, you may pass in arguments with any weak tag."}),"\n",(0,i.jsx)(n.p,{children:"On occasion, it is necessary to temporarily change the tag of an expression.\nFor example, with the declarations of the previous code snippet, if you would\nwish to compare apples with oranges (recent research indicates that comparing\napples to oranges is not as absurd than popular belief holds), you could use:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"\nif (apple:valencia < elstar)\n    valencia = orange:elstar\n\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The test expression of the if statement (between parentheses) compares the\nvariable valencia to the variable elstar. To avoid a \u201Ctag mismatch\u201D diagnostic,\nit puts a tag override apple: on valencia \u2014after that, the expressions\non the left and the right hands of the > operator have the same tag\nname: \u201Capple:\u201D. The second line, the assignment of elstar to valencia, overrides\nthe tag name of elstar or orange: before the assignment. In an assignment,\nyou cannot override the tag name of the destination; i.e., the left hand of\nthe = operator. It is an error to write \u201Capple",":valencia"," = elstar\u201D. In the assignment,\nvalencia is an \u201Clvalue\u201D and you cannot override the tag name of an\nlvalue."]}),"\n",(0,i.jsx)(n.p,{children:"As shown earlier, when the left hand of an assignment holds an\nuntagged variable, the expression on the right hand may have any weak tag name. When\nused as an lvalue, an untagged variable is compatible with all weak tag names.\nOr rather, a weak tag is silently dropped when it is assigned to an untagged\nvariable or when it is passed to a function that expects an untagged argument.\nWhen a tag name indicates the bit pattern of a cell, silently dropping a weak\ntag can hide errors. For example, the snippet below has an error that is not\nimmediately obvious:"}),"\n",(0,i.jsx)(n.p,{children:"Listing: bad way of using tags"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'\n#pragma rational float\n\nnew limit = -5.0\nnew value = -1.0\n\nif (value < limit)\n    printf("Value %f below limit %f\\n", value, limit)\nelse\n    printf("Value above limit\\n")\n\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Through the \u201C#pragma rational\u201D, all rational numbers receive the \u201Cfloat\u201D\ntag name and these numbers are encoded in the 4-byte IEEE 754 format. The\nsnippet declares two variables, limit and value, both of which are untagged\n(this is the error). Although the literal values -5.0 and -1.0 are implicitly\ntagged with float:, this weak tag is silently dropped when the values",(0,i.jsx)(n.br,{}),"\n","get assigned to the untagged symbols limit and value. Now, the if statement\ncompares value to limit as integers, using the built-in standard < operator\n(a user-defined operator would be more appropriate to compare two IEEE 754\nencoded values). When run, this code snippet tells us that \u201CValue -1.000000\nbelow limit -5.000000\u201D \u2014which is incorrect, of course."]}),"\n",(0,i.jsx)(n.p,{children:"To avoid such subtle errors to go undetected, one should use strong tags. A\nstrong tag is merely a tag name that starts with an upper case letter, such\nas Float: instead of float:. A strong tag is never automatically \u201Cdropped\u201D,\nbut it may still be explicitly overridden. Below is a modified code snippet\nwith the proposed adaptations:"}),"\n",(0,i.jsx)(n.p,{children:"Listing: strong tags are safer"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'\n#pragma rational Float\n\nnew Float:limit = -5.0\nnew Float:value = -1.0\n\nif (value < limit)\n    printf("Value %f below limit %f\\n", _:value, _:limit)\nelse\n    printf("Value above limit\\n")\n\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Forgetting the Float: tag name in the declaration of the variables",(0,i.jsx)(n.br,{}),"\n","limit or value immediately gives a \u201Ctag mismatch\u201D diagnostic, because the literal\nvalues -5.0 and -1.0 now have a strong tag name."]}),"\n",(0,i.jsx)(n.p,{children:"printf is a general purpose function that can print strings and values in\nvarious formats. To be general purpose, printf accepts arguments with any weak tag\nname, be it apple:\u2019s, orange:\u2019s, or something else. The printf\nfunction does this by accepting untagged arguments \u2014weak tags are dropped when an\nuntagged argument is expected. Strong tags, however, are never dropped, and\nin the above snippet (which uses the original definition of printf), I\nneeded to put an empty tag override, \u201C_:\u201D, before the variables value and limit in\nthe first printf call."}),"\n",(0,i.jsx)(n.p,{children:"There is an alternative to untagging expressions with strong tag names in general\npurpose functions: adjust the definition of the function to accept both\nall weak tags and a selective set of strong tag names. The PAWN language supports\nmultiple tag names for every function arguments. The original definition of printf (from the file console.inc) is:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"\nnative printf(const format[], ...);\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"By adding both a Float: tag and an empty tag in front of the ellipsis (\u201C...\u201D),\nprintf will accept arguments with the Float: tag name, arguments without\na tag name and arguments that have a weak tag name. To specify plural tag\nnames, enclose all tag names without their final colon between braces with a\ncomma separating the tag names (see the example below). It is necessary to\nadd the empty tag specification to the list of tag names, because printf would\notherwise only accept arguments with a Float: tag name. Below is the new\ndefinition of the function printf:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"\nnative printf(const format[], {Float, _}: ...);\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"Plural tags allow you to write a single function that accepts cells with a precisely\nspecified subset of tags (strong and/or weak). While a function argument\nmay accept being passed actual arguments with diverse tags, a variable can\nonly have a single tag \u2014and a formal function argument is a local variable in\nthe body of the function. In the presence of plural tags, the formal function\nargument takes on the tag that is listed first."}),"\n",(0,i.jsx)(n.p,{children:"On occasion, you may want to check which tag an actual function argument\nhad, when the argument accepts plural tags. Checking the tag of the formal\nargument (in the body of the function) is of no avail, because it will always\nhave the first tag in the tag list in the declaration of the function argument.\nYou can check the tag of the actual argument by adding an extra argument\nto the function, and set its default value to be the \u201Ctagof\u201D of the argument\nin question. Similar to the sizeof operator, the tagof operator has a special\nmeaning when it is applied in a default value of\na function argument: the expression is evaluated at the point of the function call,\ninstead of at the function definition.\nThis means that the \u201Cdefault value\u201D of the function argument is\nthe actual tag of the parameter passed to the function."}),"\n",(0,i.jsx)(n.p,{children:"Inside the body of the function, you can compare the tag to known tags by,\nagain, using the tagof operator."}),"\n",(0,i.jsx)(n.h3,{id:"-concatenating-lines",children:"\u2022 Concatenating lines"}),"\n",(0,i.jsx)(n.p,{children:"PAWN is a free format language, but the parser directives must be on a single line.\nStrings may not run over several lines either. When this is inconvenient,\nyou can use a backslash character (\u201C\\\u201D) at the end of a line to \u201Cglue\u201D that\nline with the next line."}),"\n",(0,i.jsx)(n.p,{children:"For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"\n#define             max_path max_drivename + max_directorystring + \\\n                    max_filename + max_extension\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"You also use the concatenation character to cut long literal strings over\nmultiple lines. Note that the \u201C\\\u201D eats up all trailing white space that comes after it\nand leading white space on the next line. The example below prints \u201CHello\nworld\u201D with one space between the two words (because there is a space between\n\u201DHello\u201D and the backslash):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'\nprint("Hello \\\n      world")\n\n'})}),"\n",(0,i.jsx)(n.h3,{id:"-a-program-that-generates-its-own-source-code",children:"\u2022 A program that generates its own source code"}),"\n",(0,i.jsxs)(n.p,{children:["An odd, slightly academic, criterion to quantify the \u201Cexpressiveness\u201D of a programming\nlanguage is size of the smallest program that, upon execution, re-\ngenerates its own source code. The rationale behind this criterion",(0,i.jsx)(n.br,{}),"\n","is that the shorter the self-generating program, the more flexible and expressive the\nlanguage must be. Programs of this kind have been created for many programming\nlanguages \u2014sometimes surprisingly small, as for languages that have a\nbuilt-in reflective capabilities."]}),"\n",(0,i.jsxs)(n.p,{children:["Self-generating programs are called \u201Cquines\u201D, in honour of the",(0,i.jsx)(n.br,{}),"\n","philosopher Willard Van Orman Quine who wrote self-creating phrases in natural language.\nThe work of Van Orman Quine became well known through the books \u201CG\xa8odel,\nEscher, Bach\u201D and \u201CMetamagical Themas\u201D by Douglas Hofstadter."]}),"\n",(0,i.jsx)(n.p,{children:"The PAWN quine is in the example below; it is modelled after the famous \u201CC\u201D\nquine (of which many variations exist). At 77 characters, it is amongst the\nsmallest versions for the class of imperative programming languages, and the\nsize can be reduced to 73 characters by removing four \u201Cspace\u201D characters that\nwere left in for readability."}),"\n",(0,i.jsx)(n.p,{children:"Listing: quine.p"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'\n    new s[]="new s[]=%c%s%c; main() printf s,34,s,34"; main() printf s,34,s,34\n\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"See the separate application note for proposed native functions that operate on both packed and unpacked strings"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"EOS: predefined constant to mark the End Of String; it has the value \u2019\\0\u2019"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"Predefined constants: 102"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"Packed & unpacked strings: 99"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"Escape sequence: 99"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"Tag names: 68"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"User-defined operators: 86"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"More tag name rules: 68"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"lvalue (definition of ~): 104"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"Directives: 77"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"Directives: 117"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/sr/docs/scripting/language/reference/Contents",children:"Go Back to Contents"})})]})}function d(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},50065:function(e,n,a){a.d(n,{Z:function(){return o},a:function(){return r}});var t=a(67294);let i={},s=t.createContext(i);function r(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);