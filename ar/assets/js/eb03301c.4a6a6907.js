"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["64726"],{89141:function(e,n,a){a.r(n),a.d(n,{default:()=>d,frontMatter:()=>s,metadata:()=>t,assets:()=>c,toc:()=>o,contentTitle:()=>l});var t=JSON.parse('{"id":"scripting/resources/start","title":"Scripting Basics","description":"A short tutorial guiding you through the basics of the Pawn language and SA-MP/open.mp APIs.","source":"@site/docs/scripting/resources/start.md","sourceDirName":"scripting/resources","slug":"/scripting/resources/start","permalink":"/ar/docs/scripting/resources/start","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/resources/start.md","tags":[],"version":"current","frontMatter":{"title":"Scripting Basics","sidebar_label":"Scripting Basics","description":"A short tutorial guiding you through the basics of the Pawn language and SA-MP/open.mp APIs."},"sidebar":"docsSidebar","previous":{"title":"SQLite Open Flags","permalink":"/ar/docs/scripting/resources/sqlite-open-flags"},"next":{"title":"Starting IDs","permalink":"/ar/docs/scripting/resources/startingids"}}'),i=a("85893"),r=a("50065");let s={title:"Scripting Basics",sidebar_label:"Scripting Basics",description:"A short tutorial guiding you through the basics of the Pawn language and SA-MP/open.mp APIs."},l=void 0,c={},o=[{value:"Include",id:"include",level:2},{value:"Calls",id:"calls",level:2},{value:"Statements",id:"statements",level:2},{value:"Calling",id:"calling",level:2},{value:"Defining",id:"defining",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Declaration",id:"declaration",level:2},{value:"Setting",id:"setting",level:2},{value:"Arrays",id:"arrays",level:2},{value:"Declaration",id:"declaration-1",level:3},{value:"Accessing",id:"accessing",level:3},{value:"Example",id:"example",level:3},{value:"Strings",id:"strings",level:2},{value:"Basic use",id:"basic-use",level:3},{value:"Escape character",id:"escape-character",level:3},{value:"Tags",id:"tags",level:2},{value:"Scope",id:"scope",level:2},{value:"local",id:"local",level:3},{value:"static local",id:"static-local",level:3},{value:"global",id:"global",level:3},{value:"global static",id:"global-static",level:3}];function h(e){let n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Below is an example of possibly the most basic script you can write:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'#include <a_samp>\n\nmain()\n{\n    print("Hello World!");\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"The various aspects will be covered in turn but we'll start by looking at the first line."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"include",children:"Include"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"#include <a_samp>\n"})}),"\n",(0,i.jsx)(n.p,{children:"This basically loads the code from pawno/includes/a_samp.inc into your script, so everything it has you can use. One of the things it has is:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"#include <core>\n#include <float>\n#include <string>\n#include <file>\n#include <time>\n#include <datagram>\n#include <a_players>\n#include <a_vehicles>\n#include <a_objects>\n#include <a_sampdb>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This includes all the other files in that directory so by adding that one line you have access to all the functions in SA",":MP"," (more on functions later)."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"calls",children:"Calls"}),"\n",(0,i.jsx)(n.p,{children:'The next part has two sides of a function call. main() is a function which you write the code for and is called from elsewhere, print(string[]) is a function with the code elsewhere which you call. Currently all this will do is load, print a string (i.e. print "Hello World!" (without the ""s) (a tradition in all scripting languages)) to the server console and end. The:'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"return 1;\n"})}),"\n",(0,i.jsx)(n.p,{children:"Passes a value (1) back to the place which called main to tell it what happened (the exact value passed here doesn't matter but in other places it does). You now have your first (very basic) script. If you select file->new in pawno it will give you a much bigger start point will all the callbacks in (see below), including main (which isn't technically a callback but acts like one)."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"statements",children:"Statements"}),"\n",(0,i.jsx)(n.p,{children:"The print and return lines have ';' (a semi colon) on them, this just denotes the end of a statement (a statement is a group of one or more functions and operators which together do something, similar to a sentence in common language). Most people put separate statements on separate lines but this is not required, it just makes things clearer, the following is equally valid:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'main() { print("Hello World!"); return 1; }\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The ","s (braces (curly brackets), not parenthesis (brackets)) enclose a group of statements which should be executed together (like a paragraph in common language). If you did:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'main() print("Hello World!"); return 1;\n'})}),"\n",(0,i.jsx)(n.p,{children:"You would get an error because now the \"return 1;\" statement is not grouped so is not part of main. Braces group a set of statements into a single statement (called a compound statement) and functions have a single statement with them. Without the braces print and return are entirely separate statements, so there's two or them so, as a function can only have a single statement, the second is not in a function, which code can't be."}),"\n",(0,i.jsx)(n.p,{children:"But generally, you can expand compound statements with the use of the comma (,) operator but this is not suggested as it is not the best coding practice. An example follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'main() print("Hello World!"), return 1;\n'})}),"\n",(0,i.jsx)(n.h1,{id:"functions",children:"Functions"}),"\n",(0,i.jsx)(n.p,{children:'A function is basically a chunk of code which does something and can be told to do this thing from somewhere else. It can also pass data about what it did back to the place which told it to run (the place which "called" it).'}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"calling",children:"Calling"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'print("Hello World!");\n'})}),"\n",(0,i.jsxs)(n.p,{children:["As described in ",(0,i.jsx)(n.a,{href:"/wiki/Scripting_Basics#Starting_out",title:"Scripting Basics",children:"Starting out"}),', this calls the function called "print" (defined in a_samp.inc, which is why you need to include it) and tells it to display something in the server console (the word hello).']}),"\n",(0,i.jsx)(n.p,{children:"A function consists of the function name (e.g. print), which tells the system which chunk of code you want to call, and a parameter list, enclosed in ()s after the function name, which pass additional data to the function to help it run. If you didn't have parameters you would need millions of functions:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"printa();\nprintaa();\nprintab();\nprintac();\netc...\n"})}),"\n",(0,i.jsx)(n.p,{children:"Functions can have as many parameters as you like, from 0 up (there may be an upper limit but it's at least 128):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'printf("Hello World!", 1, 2, 3, 4, 5, 6);\n'})}),"\n",(0,i.jsx)(n.p,{children:"Don't worry about what that function does for now, just that it has 7 parameters, each separated by a comma."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"defining",children:"Defining"}),"\n",(0,i.jsx)(n.p,{children:"As well as being able to call existing functions you can also write and call your own:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'#include <a_samp>\n\nmain()\n{\n    return MyFunction();\n}\n\nMyFunction()\n{\n    print("Hello World!");\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:'This just does exactly the same as the original code but is arranged differently. When main() is called when the mode is started (it\'s called automatically) it calls the new custom function called MyFunction(). This function prints the message in the server console then returns the number 1 to main(). main() takes the returned value (1) and then returns it to the server itself (i.e. the place which called main in the first place). As "return MyFunction();" is a single statement you could do:'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'#include <a_samp>\n\nmain() return MyFunction();\n\nMyFunction()\n{\n    print("Hello World!");\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"But most people don't for clarity. You can also not use the MyFunction return value at all and do:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'#include <a_samp>\n\nmain()\n{\n    MyFunction();\n    return 1;\n}\n\nMyFunction()\n{\n    print("Hello World!");\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.p,{children:["Parameters are a type of ",(0,i.jsx)(n.a,{href:"/wiki/Scripting_Basics#Variables",title:"Scripting Basics",children:"variable"})," which you don't need to declare as they come from the place which called the function:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'#include <a_samp>\n\nmain()\n{\n    return MyFunction("Hello World!");\n}\n\nMyFunction(string[])\n{\n    print(string);\n    return 1;\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["This code still does the same thing but we're now telling MyFunction() what to display. The call passes the string \"Hello World!\" to the function where it is stored in a variable called string (the [] means it's an ",(0,i.jsx)(n.a,{href:"/wiki/Scripting_Basics#Arrays",title:"Scripting Basics",children:"array"})," as explained later). The print function is the called, passing the contents of the string variable, we know it's a variable because it doesn't have the \"\" any more."]}),"\n",(0,i.jsx)(n.h1,{id:"variables",children:"Variables"}),"\n",(0,i.jsx)(n.p,{children:"A variable is basically a bit of memory, it's where data is stored and can be changed and read as required. Variables are one or more cells, a cell is 32 bits (4 bytes) big and by default signed so they can store from -2147483648 to 2147483647 (although -2147483648 is poorly defined in PAWN and gives odd results if displayed). A variable made from more than one cell is called an array, strings are a special type of array where each cell holds a character of the string (or 4 characters in packed strings, but they're not covered here)."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"declaration",children:"Declaration"}),"\n",(0,i.jsx)(n.p,{children:"To create a new variable you have to declare it:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"new\n    myVariable;\n"})}),"\n",(0,i.jsx)(n.p,{children:"This tells the system to create a new variable called myVariable, the initial value of this variable will be 0."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"setting",children:"Setting"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"new\n    myVariable = 7;\n"})}),"\n",(0,i.jsx)(n.p,{children:"This declares a new variable and sets it's initial value to 7, so printing the variable now will give 7. To display a variable which isn't a string we need to go back to the printf() function mentioned earlier and do:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'new\n    myVariable = 7;\nprintf("%d", myVariable);\n'})}),"\n",(0,i.jsx)(n.p,{children:"Again, for now all you need to know is that this will print the value of myVariable (i.e. 7 at this point) to the server."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'new\n    myVariable = 7;\nprintf("%d", myVariable);\nmyVariable = 8;\nprintf("%d", myVariable);\n'})}),"\n",(0,i.jsx)(n.p,{children:"That code will print 7, change the value of the variable to 8 and display the new value in the server window too. There are many other things you can do to variables, some are listed below, most are listed elsewhere:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"myVariable = myVariable + 4;\n"})}),"\n",(0,i.jsx)(n.p,{children:"Sets the value of myVariable to the old value of myVariable plus 4, i.e. increase it's value by 4. This can also be written as:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"myVariable += 4;\n"})}),"\n",(0,i.jsx)(n.p,{children:'Which just means "increase myVariable by 4".'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"myVariable -= 4;\n"})}),"\n",(0,i.jsx)(n.p,{children:"That will decrease the value by 4."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"myVariable *= 4;\n"})}),"\n",(0,i.jsx)(n.p,{children:"That will multiply the value by 4."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"myVariable /= 4;\n"})}),"\n",(0,i.jsx)(n.p,{children:"That will divide the value by 4."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"arrays",children:"Arrays"}),"\n",(0,i.jsx)(n.h3,{id:"declaration-1",children:"Declaration"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"An array is a variable in which you can store multiple pieces of data at once and access them dynamically. An array is declared to a set size at compile time so you need to know how many pieces of data you need to store in advance, a good example of this is the very common MAX_PLAYERS array, this will have one slot for every possibly connected player, so you know data for one player will not interfere with data for another player (more on defines later)."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"new\n    myArray[5];\n"})}),"\n",(0,i.jsx)(n.p,{children:"That code will declare an array 5 slots big, so you can store 5 pieces of normal data at once in that single what you can't do is something like the following:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"new\n    myVariable = 5,\n    myArray[myVariable];\n"})}),"\n",(0,i.jsx)(n.p,{children:"That code looks like it would create an array the size of whatever number is stored in myVariable (here 5 but it could be anything), but you can't do this. In PAWN the memory for variables is assigned when you compile your code, this means arrays are always one size, you can't set the size to anything you like whenever you like."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"accessing",children:"Accessing"}),"\n",(0,i.jsx)(n.p,{children:"To set a value in an array you need to say which part of the array you want to store the data in, this CAN be done with another variable:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"new\n    myArray[5];\nmyArray[2] = 7;\n"})}),"\n",(0,i.jsx)(n.p,{children:"This will declare an array with 5 slots and give the THIRD slot a value of 7, given that variables always start as 0 this will make the values in the array:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"0, 0, 7, 0, 0\n"})}),"\n",(0,i.jsx)(n.p,{children:"Why is it not:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"0, 7, 0, 0, 0\n"})}),"\n",(0,i.jsx)(n.p,{children:"you're wondering? It's because counting actually starts from the number 0, not 1. Consider the following:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"2, 4, 6, 8\n"})}),"\n",(0,i.jsx)(n.p,{children:"If you go through the list then after the number 2 you have already had one number (the 2), this means that if you are counting the numbers by the time you reach the number 4 you are already at one, you're not at one when you reach the 2, you're at zero. Thus the 2 is at position zero and the 4 is at position one, and thus it follows that the 6 is at position two, which is where the 7 in the first example above is. If we label the slots for the first example we get:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"0 1 2 3 4\n0 0 7 0 0\n"})}),"\n",(0,i.jsx)(n.p,{children:"There are five slots but as you can see, and this is very important, THERE IS NO SLOT FIVE, doing the following could crash your server:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"new\n    myArray[5];\nmyArray[5] = 7;\n"})}),"\n",(0,i.jsx)(n.p,{children:"As mentioned above the array index (the index is the slot to which you're writing) can be anything, a number, a variable, or even a function which returns a value."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"new\n    myArray[5],\n    myIndex = 2;\nmyArray[myIndex] = 7;\n"})}),"\n",(0,i.jsx)(n.p,{children:"Once you have an array and an index you can use that block exactly as if it were any other variable:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"myArray[2] = myArray[2] + 1;\nmyArray[2] += 1;\nmyArray[2]++;\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"As mentioned above a common type of array is the MAX_PLAYERS array. MAX_PLAYERS is not a variable, it's a define which is explained later, but for now accept that it is a constant number equal to the max number of players a server can hold (this by default is 500, even if you change the number in your server.cfg file). The following code uses normal variables to hold data for 4 players and do something with those players in a function (for simplicity's sake assume MAX_PLAYERS is 4 for now):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"new\n    gPlayer0,\n    gPlayer1,\n    gPlayer2,\n    gPlayer3;\n\nSetPlayerValue(playerid, value)\n{\n    switch(playerid)\n    {\n        case 0: gPlayer0 = value; // is the same as doing if (playerid == 0)\n        case 1: gPlayer1 = value; // is the same as doing if (playerid == 1)\n        case 2: gPlayer2 = value; // is the same as doing if (playerid == 2)\n        case 3: gPlayer3 = value; // is the same as doing if (playerid == 3)\n    }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"See the section on control structures for more information on what's going on there, also note this could be done as a switch but that's less clear for the example and effectively the same code anyway."}),"\n",(0,i.jsx)(n.p,{children:"Now compare that to using an array with one slot per player, bearing in mind an array index can be any value:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"new\n    gPlayers[MAX_PLAYERS];\n\nSetPlayerValue(playerid, value)\n{\n    gPlayers[playerid] = value;\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"That will create a global array (see section on scope) with one slot for every player, then the function will assign whatever is in the variable \"value\" to the slot for the player specified. The first example was large with only four players, using 4 lines per player, that's 2000 lines for 500 players (if can be less but it's still a lot), the second version is a single line no matter how many players you have."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"strings",children:"Strings"}),"\n",(0,i.jsx)(n.h3,{id:"basic-use",children:"Basic use"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.p,{children:["A string is a special type of array, one which is used to hold multiple characters to create a word or sentence or other human readable text. A character is one byte big (although there are extended sets where a character is multiple bytes but these are not well defined in SA",":MP",") and by default a character takes up one cell (one normal variable or one array slot). Characters are encoded in a system called ",(0,i.jsx)(n.a,{href:"http://www.asciitable.com/",title:"http://www.asciitable.com/",children:"ASCII"}),', the character "A" is represented by the number 65, telling the system to display a number will give 65, telling the system to display a character will give a capital a. Obviously is a single character takes up a single cell multiple characters (i.e. text) will take up multiple cells, collections of cells, as just explained, are called arrays.']}),"\n",(0,i.jsx)(n.p,{children:'Strings in PAWN (and other languages) are what\'s called "NULL terminated", this means that when 0 is reached, the string ends. This is not the same as the character "0", represented by the number 48, this is the NULL character, represented by the number 0. This means that you can have a string array 20 cells large but only have a string 3 characters long if the fourth character is the NULL character, signalling the end of the string. You can not however have a string 20 characters long as the NULL character MUST be in the string, so in a 20 cell array you can have a 19 character string and a NULL termination character.'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'new\n    myString[16] = "Hello World!";\n'})}),"\n",(0,i.jsx)(n.p,{children:'That code declares a new string with enough space for a 15 character string and sets it initially to the 5 character string "Hello World!", the double quotes around the text indicate that it\'s a string. Internally the array will look like:'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"104 101 108 108 111 0 x x x x x x x x x x\n"})}),"\n",(0,i.jsx)(n.p,{children:"The \"x\"s mean anything, in this example they will all be 0 but as they're after the null character is doesn't matter what they are, they won't affect the string."}),"\n",(0,i.jsx)(n.p,{children:"Strings can be manipulated like normal arrays, for example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'new\n    myString[16] = "Hello World!";\nmyString[1] = 97;\n'})}),"\n",(0,i.jsx)(n.p,{children:'Will change the character in slot 1 to the character represented by the number 97 (a lower case "a"), resulting in the string reading "hallo". This can be written much more readably and easy to edit as:'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"new\n    myString[16] = \"Hello World!\";\nmyString[1] = 'a';\n"})}),"\n",(0,i.jsx)(n.p,{children:"The single quotes around the \"a\" mean it's a character, not a string, characters don't need to be NULL terminated as they're only ever one cell long, they can also be used interchangeably with numbers if you know what they represent."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"new\n    myString[16] = \"Hello World!\";\nmyString[1] = '\\0';\n"})}),"\n",(0,i.jsx)(n.p,{children:"'\\0' is two characters, however the \\ is a special character which modifies the next character, \\0 means NULL, that code is the same as doing:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'new\n    myString[16] = "Hello World!";\nmyString[1] = 0;\n'})}),"\n",(0,i.jsx)(n.p,{children:"But is NOT the same as doing:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"new\n    myString[16] = \"Hello World!\";\nmyString[1] = '0';\n"})}),"\n",(0,i.jsx)(n.p,{children:"The first and second versions will result in the string being simply:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"h\n"})}),"\n",(0,i.jsx)(n.p,{children:"The third version will result in the string being:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"h0llo\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"escape-character",children:"Escape character"}),"\n",(0,i.jsx)(n.p,{children:"As briefly mentioned a backslash is a special character, doing:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"'\\'\n"})}),"\n",(0,i.jsx)(n.p,{children:"or:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'"\\"\n'})}),"\n",(0,i.jsx)(n.p,{children:"Will give a compiler error because the \\ modifies the next character so those constants will not be ended correctly, this can be used to create characters which can't normally be created, for example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'new\n    myString[4] = "\\"";\n'})}),"\n",(0,i.jsx)(n.p,{children:"That code will create a string consisting of only a double quote, normally a double quote signals the end of a written string but the backslash makes the double quote immediately after it a part of the string, and the double quote after that ends the string instead. Other special characters are:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Code"}),(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Purpose"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\\0"}),(0,i.jsx)(n.td,{children:"NULL character"}),(0,i.jsx)(n.td,{children:"Ends a string."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"EOS"}),(0,i.jsx)(n.td,{children:"NULL character"}),(0,i.jsx)(n.td,{children:"(same as above)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\\n"}),(0,i.jsx)(n.td,{children:"Line feed"}),(0,i.jsx)(n.td,{children:"use \\n for a new line in Linux (also works in Windows)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\\r"}),(0,i.jsx)(n.td,{children:"Carriage return"}),(0,i.jsx)(n.td,{children:"Use \\r\\n for a new line in Windows"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\\\\"}),(0,i.jsx)(n.td,{children:"Backslash"}),(0,i.jsx)(n.td,{children:"Used to put an actual backslash in a string"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"'"}),(0,i.jsx)(n.td,{children:"Single quote"}),(0,i.jsx)(n.td,{children:"Used to use an actual single quote as a character in single quotes (use: ''')"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:'"'}),(0,i.jsx)(n.td,{children:"Double quotes"}),(0,i.jsx)(n.td,{children:"Used to put an actual double quote in a string"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\\xNNN;"}),(0,i.jsx)(n.td,{children:"Hex number"}),(0,i.jsx)(n.td,{children:"Used to set the character to the character represented by the hex number specified in place on NNN"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"\\NNN;"}),(0,i.jsx)(n.td,{children:"Number"}),(0,i.jsx)(n.td,{children:"Used to set the character to the character represented by the number specified in place of NNN (see \\0)"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"Used to set the character to the character represented by the number specified in place of NNN (see \\0)"}),"\n",(0,i.jsx)(n.p,{children:"There are others but those are the main ones."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"tags",children:"Tags"}),"\n",(0,i.jsx)(n.p,{children:"A tag is an additional piece of information on a variable which defines where it can be used, providing information about its functionality. Tags can be strong (starting with a capitalized letter) or weak. For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"new\n    Float:a = 6.0;\n"})}),"\n",(0,i.jsx)(n.p,{children:'The "Float" part is the tag, this defines this variable as a float (non-whole/real number) and determines where it can be used.'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"native SetGravity(Float:gravity);\n"})}),"\n",(0,i.jsx)(n.p,{children:"This means the SetGravity function takes a single parameter which has to be a float, for example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"SetGravity(6.0);\nnew\n   Float:fGrav = 5.0;\nSetGravity(fGrav);\n"})}),"\n",(0,i.jsx)(n.p,{children:"That will set the gravity to 6 (6.0 as a float) then 5 (5.0 as a float). Using the wrong tag in the wrong place will often give a tag mismatch:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"SetGravity(MyTag:7);\n"})}),"\n",(0,i.jsx)(n.p,{children:'That will try set the gravity to 7 with the tag "MyTag", that is clearly not a "Float" so is wrong. Also note that tags are case sensitive.'}),"\n",(0,i.jsx)(n.p,{children:"Custom tags can be defined by users:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"new myTag: variable = 0,\n\n    AppleTag: another = 1;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This is perfectly valid, however, when adding these two variables ",(0,i.jsx)(n.em,{children:"directly"}),", you must use '_:' to 'de-tag' them, otherwise the compiler will produce a 'tag mismatch' warning."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"scope",children:"Scope"}),"\n",(0,i.jsx)(n.p,{children:"Scope is where a variable can be used. There are four main scopes: local, local static, global and global static. All variables can only be used after they are declared so this is right:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'new\n    var = 4;\nprintf("%d", var);\n'})}),"\n",(0,i.jsx)(n.p,{children:"This is wrong:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'printf("%d", var);\nnew\n    var = 4;\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"local",children:"local"}),"\n",(0,i.jsx)(n.p,{children:'A local variable is one declared "new" inside a function or part of a function:'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'MyFunc()\n{\n    new\n        var1 = 4;\n    printf("%d", var1);\n    {\n        // var1 still exists as this is a lower level\n        new\n            var2 = 8;\n        printf("%d %d", var1, var2);\n    }\n    // var2 no longer exists as this is a higher level\n}\n// var1 no longer exists\n'})}),"\n",(0,i.jsx)(n.p,{children:"Local variables are reset every time, for example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'for (new i = 0; i < 3; i++)\n{\n    new\n        j = 1;\n    printf("%d", j);\n    j++;\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Will print:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"1\n1\n1\n"})}),"\n",(0,i.jsx)(n.p,{children:"Because j is created, printed, incremented then destroyed, then the code loops."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"static-local",children:"static local"}),"\n",(0,i.jsx)(n.p,{children:"A static local can be used in the same place as a local but doesn't forget it's old value, for example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'MyFunc()\n{\n    static\n        var1 = 4;\n    printf("%d", var1);\n    {\n        // var1 still exists as this is a lower level\n        static\n            var2 = 8;\n        printf("%d %d", var1, var2);\n    }\n    // var2 no longer exists as this is a higher level\n}\n// var1 no longer exists\n'})}),"\n",(0,i.jsx)(n.p,{children:"That code will behave exactly the same as the new example, however this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'for (new i = 0; i < 3; i++)\n{\n    static\n        j = 1;\n    printf("%d", j);\n    j++;\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Will print:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"1\n2\n3\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Because ",(0,i.jsx)(n.code,{children:"j"})," is static so remembers its old value."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"global",children:"global"}),"\n",(0,i.jsx)(n.p,{children:"Global variables are declared outside a function and can be used in any functions:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'new\n    gMyVar = 4;\n\nMyFunc()\n{\n    printf("%d", gMyVar);\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"They are never reset or lost."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"global-static",children:"global static"}),"\n",(0,i.jsx)(n.p,{children:"Global static variables are like normal globals but can only be used in the file in which they are declared:"}),"\n",(0,i.jsx)(n.p,{children:"File1:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'static\n    gsMyVar = 4;\n\nMyFunc()\n{\n    printf("%d", gsMyVar);\n}\n\n#include "File2"\n'})}),"\n",(0,i.jsx)(n.p,{children:"File2:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'MyFunc2()\n{\n    // This is wrong as gsMyVar doesn\'t exist here\n    printf("%d", gsMyVar);\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"static can also be applied to functions in the same way."})]})}function d(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},50065:function(e,n,a){a.d(n,{Z:function(){return l},a:function(){return s}});var t=a(67294);let i={},r=t.createContext(i);function s(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);