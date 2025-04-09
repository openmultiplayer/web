"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["29293"],{76176:function(e,t,n){n.r(t),n.d(t,{default:()=>c,frontMatter:()=>l,metadata:()=>s,assets:()=>d,toc:()=>o,contentTitle:()=>a});var s=JSON.parse('{"id":"scripting/language/reference/Operators-and-expressions","title":"Operators and expressions","description":"---","source":"@site/docs/scripting/language/reference/07-Operators-and-expressions.md","sourceDirName":"scripting/language/reference","slug":"/scripting/language/reference/Operators-and-expressions","permalink":"/pl/docs/scripting/language/reference/Operators-and-expressions","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/language/reference/07-Operators-and-expressions.md","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"General-syntax","permalink":"/pl/docs/scripting/language/reference/General-syntax"},"next":{"title":"Statements","permalink":"/pl/docs/scripting/language/reference/Statements"}}'),i=n("85893"),r=n("50065");let l={},a="Operators and expressions",d={},o=[{value:"\u2022 Notational conventions",id:"-notational-conventions",level:3},{value:"\u2022 Expressions",id:"-expressions",level:3},{value:"\u2022 Arithmetic",id:"-arithmetic",level:3},{value:"\u2022 Bit manipulation",id:"-bit-manipulation",level:3},{value:"\u2022 Assignment",id:"-assignment",level:3},{value:"\u2022 Relational",id:"-relational",level:3},{value:"\u2022 Boolean",id:"-boolean",level:3},{value:"\u2022 Miscellaneous",id:"-miscellaneous",level:3},{value:"\u2022 Operator precedence",id:"-operator-precedence",level:3}];function h(e){let t={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",header:"header",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"operators-and-expressions",children:"Operators and expressions"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"-notational-conventions",children:"\u2022 Notational conventions"}),"\n",(0,i.jsx)(t.p,{children:"The operation of some operators depends on the specific kinds of operands.\nTherefore, operands are notated thus:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Operators"}),(0,i.jsx)(t.th,{children:"Usage"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"e"}),(0,i.jsx)(t.td,{children:"any expression;"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"v"}),(0,i.jsx)(t.td,{children:"any expression to which a value can be assigned (\u201Clvalue\u201D expressions);"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"a"}),(0,i.jsx)(t.td,{children:"an array;"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"f"}),(0,i.jsx)(t.td,{children:"a function;"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"s"}),(0,i.jsx)(t.td,{children:"a symbol \u2014which is a variable, a constant or a function."})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"-expressions",children:"\u2022 Expressions"}),"\n",(0,i.jsx)(t.p,{children:"An expression consists of one or more operands with an operator. The operand\ncan be a variable, a constant or another expression. An expression followed by\na semicolon is a statement."}),"\n",(0,i.jsx)(t.p,{children:"Listing: examples of expressions"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"\nv++\nf(a1, a2)\nv = (ia1 * ia2) / ia3\n\n"})}),"\n",(0,i.jsx)(t.h3,{id:"-arithmetic",children:"\u2022 Arithmetic"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Sign"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"+"}),(0,i.jsx)(t.td,{children:"e1 + e2"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Results in the addition of e1 and e2"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"-"}),(0,i.jsx)(t.td,{children:"e1 - e2"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Results in sthe subtraction of e1 and e2"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"-e"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Results in the arithmetic negation of a (two\u2019s complement)."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"*"}),(0,i.jsx)(t.td,{children:"e1 * e2"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Results in the multiplication of e1 and e2."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"/"}),(0,i.jsx)(t.td,{children:"e1 / e2"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Results in the division of e1 by e2. The result is truncated to the nearest integral value that is less than or equal to the quotient. Both negative and positive values are rounded down, i.e. towards \u2212\u221E."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"%"}),(0,i.jsx)(t.td,{children:"e1 % e2"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Results in the modulus (remainder of the division) of e1 by e2. The modulus is always a positive value."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"++"}),(0,i.jsx)(t.td,{children:"v++"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"increments v by 1; the result if the expression is the value of v before it is incremented."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"++v"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"increments v by 1; the result if the expression is the value of v after it is incremented."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"--"}),(0,i.jsx)(t.td,{children:"v--"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"decrements v by 1; the result if the expression is the value of v before it is decremented."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"--v"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"decrements v by 1; the result if the expression is the value of v after it is decremented."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Notes:"}),(0,i.jsx)(t.td,{children:"The unary + is not defined in pawn"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"The operators ++ and -- modify the operand. The operand must be an lvalue."})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"-bit-manipulation",children:"\u2022 Bit manipulation"}),"\n",(0,i.jsx)(t.p,{children:"| Sign | Description                                                                                                                                                           |\n| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | --- |\n| ~    | ~e                                                                                                                                                                    |\n|      | results in the one\u2019s complement of e.                                                                                                                                 |\n| >>   | e1 >> e2                                                                                                                                                              |\n|      | results in the arithmetic shift to the right of e1 by e2 bits. The shift operation is signed: the leftmost bit of e1 is copied to vacant bits in the result.          |\n| >>>  | e1 >>> e2                                                                                                                                                             |\n|      | results in the logical shift to the right of e1 by e2 bits. The shift operation is unsigned: the vacant bits of the result are filled with zeros.                     |\n| << | e1 << e2                                                                                                                                                            |\n|      | results in the value of e1 shifted to the left by e2 bits; the rightmost bits are set to zero. There is no distinction between an arithmetic and a logical left shift |\n| &    | eq & e2                                                                                                                                                               |\n|      | results in the bitwise logical \u201Cand\u201D of e1 and e2.                                                                                                                    |\n|      |                                                                                                                                                                       | e1  | e2  |\n|      | results in the bitwise logical \u201Cor\u201D of e1 and e2.                                                                                                                     |\n| ^    | e1 ^ e2                                                                                                                                                               |\n|      | results in the bitwise \u201Cexclusive or\u201D of e1 and e2.                                                                                                                   |"}),"\n",(0,i.jsx)(t.h3,{id:"-assignment",children:"\u2022 Assignment"}),"\n",(0,i.jsx)(t.p,{children:"The result of an assignment expression is the value of the left operand after the assignment. The left operand may not be tagged."}),"\n",(0,i.jsx)(t.p,{children:"| Sign  | Description                                                                                                                                                                                       |\n| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | --- |\n| =     | v = e                                                                                                                                                                                             |\n|       | assigns the value of e to variable v.                                                                                                                                                             |\n|       | If \u201Cv\u201D is an array, it must have an explicit size and \u201Ce\u201D must be an array of the same size; \u201Ce\u201D may be a string or a literal array.                                                              |\n| Note  | the following operators combine an assignment with an arithmetic or a bitwise operation; the result of the expression is the value of the left operand after the arithmetic or bitwise operation. |\n| +=    | v += e                                                                                                                                                                                            |\n|       | increments v with a.                                                                                                                                                                              |\n| -=    | v -= e                                                                                                                                                                                            |\n|       | decrements v with e                                                                                                                                                                               |\n| *=   | v *= e                                                                                                                                                                                           |\n|       | multiplies v with e                                                                                                                                                                               |\n| /=    | v /= e                                                                                                                                                                                            |\n|       | divides v by e.                                                                                                                                                                                   |\n| %=    | v %= e                                                                                                                                                                                            |\n|       | assigns the remainder of the division of v by e to v.                                                                                                                                             |\n| >>=   | v >>= e                                                                                                                                                                                           |\n|       | shifts v arithmetically to the right by e bits.                                                                                                                                                   |\n| >>>=  | v >>>= e                                                                                                                                                                                          |\n|       | shifts v logically to the right by e bits.                                                                                                                                                        |\n| <<= | v <<= e                                                                                                                                                                                         |\n|       | shifts v to the left by e bits.                                                                                                                                                                   |\n| &=    | v &= e                                                                                                                                                                                            |\n|       | applies a bitwise \u201Cand\u201D to v and e and assigns the result to v.                                                                                                                                   |\n|       | =                                                                                                                                                                                                 | v   | = e |\n|       | applies a bitwise \u201Cor\u201D to v and e and assigns the result to v.                                                                                                                                    |\n| ^=    | v ^= e                                                                                                                                                                                            |\n|       | applies a bitwise \u201Cexclusive or\u201D to v and e and assigns the                                                                                                                                       |\n|       | result to v.                                                                                                                                                                                      |"}),"\n",(0,i.jsx)(t.h3,{id:"-relational",children:"\u2022 Relational"}),"\n",(0,i.jsx)(t.p,{children:"A logical \u201Cfalse\u201D is represented by an integer value of 0; a logical \u201Ctrue\u201D is represented by any value other than 0. Value results of relational expressions are either 0 or 1, and their tag is set to \u201Cbool:\u201D."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Sign"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"=="}),(0,i.jsx)(t.td,{children:"e1 == e2"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"results in a logical \u201Ctrue\u201D if e1 is equal to e2."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"!="}),(0,i.jsx)(t.td,{children:"e1 != e2"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"results in a logical \u201Ctrue\u201D if e1 differs from e2."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Note:"}),(0,i.jsx)(t.td,{children:"the following operators may be \u201Cchained\u201D, as in the expression \u201Ce1 <= e2 <= e3\u201D, with the semantics that the result is \u201C1\u201D if all individual comparisons hold and \u201C0\u201D otherwise."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"<"}),(0,i.jsx)(t.td,{children:"e1 < e2"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"results in a logical \u201Ctrue\u201D if e1 is smaller than e2."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"<="}),(0,i.jsx)(t.td,{children:"e1 <= e2"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"results in a logical \u201Ctrue\u201D if e1 is smaller than or equal to e2."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:">"}),(0,i.jsx)(t.td,{children:"e1 > e2"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"results in a logical \u201Ctrue\u201D if e1 is greater than e2."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:">="}),(0,i.jsx)(t.td,{children:"e1 >= e2"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"results in a logical \u201Ctrue\u201D if e1 is greater than or equal to e2."})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"-boolean",children:"\u2022 Boolean"}),"\n",(0,i.jsx)(t.p,{children:"A logical \u201Cfalse\u201D is represented by an integer value of 0; a logical \u201Ctrue\u201D is represented by any value other than 0. Value results of Boolean expressions are either 0 or 1, and their tag is set to \u201Cbool\u201D."}),"\n",(0,i.jsx)(t.p,{children:"| Sign | Description                                                                                                                                    |\n| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------- | --- | --- | --- | --- |\n| !    | !e                                                                                                                                             |\n|      | results to a logical \u201Ctrue\u201D if e was logically \u201Cfalse\u201D.                                                                                        |\n|      |                                                                                                                                                |     | e1  |     | e2  |\n|      | results to a logical \u201Ctrue\u201D if either e1 or e2 (or both) are logically \u201Ctrue\u201D. The expression e2 is only evaluated if e1 is logically \u201Cfalse\u201D. |\n| &&   | e1 && e2                                                                                                                                       |\n|      | results to a logical \u201Ctrue\u201D if both e1 and e2 are logically \u201Ctrue\u201D.                                                                            |\n|      | The expression e2 is only evaluated if e1 is logically \u201Ctrue\u201D.                                                                                 |"}),"\n",(0,i.jsx)(t.h3,{id:"-miscellaneous",children:"\u2022 Miscellaneous"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Sign"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"[]"}),(0,i.jsx)(t.td,{children:"a[e]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"array index: results to cell e from array a."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"{}"}),(0,i.jsx)(t.td,{children:"a{e}"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"array index: results to character e from \u201Cpacked\u201D array a."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"()"}),(0,i.jsx)(t.td,{children:"f(e1,e2,...eN)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"results to the value returned by the function f. The function is called with the arguments e1, e2, . . . eN. The order of evaluation of the arguments is undefined (an implementation may choose to evaluate function arguments in reversed order)."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"? :"}),(0,i.jsx)(t.td,{children:"e1 ? e2 : e3"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"results in either e2 or e3, depending on the value of e1. The conditional expression is a compound expression with a two part operator, \u201C?\u201D and \u201C:\u201D. Expression e2 is evaluated if e1 is logically \u201Ctrue\u201D, e3 is evaluated if e1 is logically \u201Cfalse\u201D."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:":"}),(0,i.jsx)(t.td,{children:"tagname: e"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"tag override; the value of the expression e does not change, but its tag changes. See page 68 for more information."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:","}),(0,i.jsx)(t.td,{children:"e1, e2"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"results in e2, e1 is evaluated before e2. If used in function argument lists or a conditional expression, the comma expression must be surrounded by parentheses."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"defined"}),(0,i.jsx)(t.td,{children:"defined s"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"results in the value 1 if the symbol is defined. The symbol may be a constant (page 98), or a global or local variable."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"The tag of this expression is bool:."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"sizeof"}),(0,i.jsx)(t.td,{children:"sizeof s"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"results in the size in \u201Celements\u201D of the specified variable. For simple variables and for arrays with a single dimension, an element is a cell. For multi-dimensional arrays, the result is the number of array elements in that dimension \u2014append [] to the array name to indicate a lower/more minor dimension. If the size of a variable is unknown, the result is zero."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"When used in a default value for a function argument, the expression is evaluation at the point of the function call, instead of in the function definition."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"state"}),(0,i.jsx)(t.td,{children:"state s"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"where \u201Cs\u201D is the name of a state that is optionally prefixed with the automaton name, this operator results in the value 1 if the automatons is in the indicated state and in 0 otherwise."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"The tag of this expression is bool:."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"tagof"}),(0,i.jsx)(t.td,{children:"tagof s"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"results in the a unique number that represents the tag of the variable, the constant, the function result or the tag label."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"When used in a default value for a function argument, the expression is evaluation at the point of the function call, instead of in the function definition."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"char"}),(0,i.jsx)(t.td,{children:"e char"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"results the number of cells that are needed to hold a packed array of e characters."})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"-operator-precedence",children:"\u2022 Operator precedence"}),"\n",(0,i.jsx)(t.p,{children:"The table beneath groups operators with equal precedence, starting with the\noperator group with the highest precedence at the top of the table."}),"\n",(0,i.jsxs)(t.p,{children:["If the expression evaluation order is not explicitly established by parentheses,\nit is determined by the association rules. For example: a",(0,i.jsx)(t.em,{children:"b/c is\nequivalent with (a"}),"b)/c because of the left-to-right association, and a=b=c is equivalent with a=(b=c)."]}),"\n",(0,i.jsxs)(t.p,{children:["| Sign                                 | Description                                  |               |\n| ------------------------------------ | -------------------------------------------- | ------------- | ------------- | ------------- |\n| ()                                   | function call                                | left-to-right |\n| []                                   | array index (cell)                           |               |\n| ","                                   | array index (character)                      |               |\n| !                                    | logical not                                  | right-to-left |\n| ~                                    | one's complement                             |               |\n| -                                    | two's complement                             |               |\n| ++                                   | increment                                    |               |\n| --                                   | decrement                                    |               |\n| :                                    | tag override                                 |               |\n| char                                 | convert number of packed characters to cells |               |\n| defined                              | symbol definition status                     |               |\n| sizeof                               | symbol size in \"elements\"                    |               |\n| state                                | automaton/state condition                    |               |\n| tagof                                | unique number for the tag                    |               |\n| *                                   | multiplication                               | left-to-right |\n| /                                    | division                                     |               |\n| %                                    | modulus                                      |               |\n| +                                    | addition                                     | left-to-right |\n| -                                    | subtraction                                  |               |\n| >>                                   | shift right                                  | left-to-right |\n| >>>                                  | logical shift right                          |               |\n| <<                                 | shift left                                   |               |\n| &                                    | bitwise and                                  | left-to-right |\n| ^                                    | bitwise exclusive or                         | left-to-right |\n|                                      |                                              | bitwise or    | left-to-right |\n| <                                   | smaller than                                 | left-to-right |\n| <=                                  | smaller than or eaqual to                    |               |\n| >                                    | greater than                                 |               |\n| >=                                   | greater than or eaqual to                    |               |\n| ==                                   | equality                                     | left-to-right |\n| !=                                   | inequality                                   |               |\n| &&                                   | logical and                                  | left-to-right |\n|                                      |                                              |               | logical or    | left-to-right |\n| ? :                                  | conditional                                  | right-to-left |\n| =                                    | assignment                                   | right-to-left |\n| *= /= %= += -= >>= >>>= <<= &= ^= | =                                            |               |               |\n| ,                                    | comma                                        | left-to-right |"]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"Tag names: 68"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"Example: 77"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"See also page 114 for state specifiers"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/pl/docs/scripting/language/reference/Contents",children:"Go Back to Contents"})})]})}function c(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return l}});var s=n(67294);let i={},r=s.createContext(i);function l(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);