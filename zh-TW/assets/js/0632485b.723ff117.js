"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([["99897"],{60639:function(e,n,a){a.r(n),a.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>i,assets:()=>c,toc:()=>o,contentTitle:()=>r});var i=JSON.parse('{"id":"scripting/language/Initialisers","title":"Keywords: Initialisers","description":"const","source":"@site/docs/scripting/language/Initialisers.md","sourceDirName":"scripting/language","slug":"/scripting/language/Initialisers","permalink":"/zh-TW/docs/scripting/language/Initialisers","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/edit/master/frontend/docs/scripting/language/Initialisers.md","tags":[],"version":"current","frontMatter":{"title":"Keywords: Initialisers","sidebar_label":"Keywords: Initialisers"},"sidebar":"docsSidebar","previous":{"title":"Keywords: Directives","permalink":"/zh-TW/docs/scripting/language/Directives"},"next":{"title":"Keywords: Operators","permalink":"/zh-TW/docs/scripting/language/Operators"}}'),s=a("85893"),t=a("50065");let l={title:"Keywords: Initialisers",sidebar_label:"Keywords: Initialisers"},r=void 0,c={},o=[{value:"<code>const</code>",id:"const",level:2},{value:"<code>enum</code>",id:"enum",level:2},{value:"<code>forward</code>",id:"forward",level:2},{value:"<code>native</code>",id:"native",level:2},{value:"<code>new</code>",id:"new",level:2},{value:"<code>operator</code>",id:"operator",level:2},{value:"<code>public</code>",id:"public",level:2},{value:"<code>static</code>",id:"static",level:2},{value:"<code>stock</code>",id:"stock",level:2}];function d(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"const",children:(0,s.jsx)(n.code,{children:"const"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"new const\n    MY_CONSTANT[] =  {1, 2, 3};\n"})}),"\n",(0,s.jsx)(n.p,{children:"const is not widerly used however it declares a variable which can not be modified by code. There are a few uses for this - functions with const array parameters can sometimes be compiled more efficiently or you may want something like a define but which is an array. const is a modifier, it must go with new or another variable declarator. If you try modify a const variable the compiler will complain."}),"\n",(0,s.jsx)(n.h2,{id:"enum",children:(0,s.jsx)(n.code,{children:"enum"})}),"\n",(0,s.jsx)(n.p,{children:"Enumerations are a very useful system for representing large groups of data and modifying constants quickly. There are a few main uses - replacing large sets of define statements, symbolically representing array slots (these are actually the same thing but they look different) and creating new tags."}),"\n",(0,s.jsx)(n.p,{children:"By far the most common use is as array definitions:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"enum E_MY_ARRAY\n{\n    E_MY_ARRAY_MONEY,\n    E_MY_ARRAY_GUN\n}\n\nnew\n    gPlayerData[MAX_PLAYERS][E_MY_ARRAY];\n\npublic OnPlayerConnect(playerid)\n{\n    gPlayerData[playerid][E_MY_ARRAY_MONEY] = 0;\n    gPlayerData[playerid][E_MY_ARRAY_GUN] = 5;\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"That will create an array with two slots for every player. Into the one referenced by E_MY_ARRAY_MONEY it'll put 0 when a player connects and 5 into E_MY_ARRAY_GUN. Without an enum this would look like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"new\n    gPlayerData[MAX_PLAYERS][2];\n\npublic OnPlayerConnect(playerid)\n{\n    gPlayerData[playerid][0] = 0;\n    gPlayerData[playerid][1] = 5;\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"And that is how the first compiles. This is OK, however it's less readable - what is slot 0 for and what is slot 1 for? And it's less flexible, what if you want to add another slot between 0 and 1, you have to rename all your 1s to 2s, add the new one and hope you didn't miss anything, wheras with an enum you would just do:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"enum E_MY_ARRAY\n{\n    E_MY_ARRAY_MONEY,\n    E_MY_ARRAY_AMMO,\n    E_MY_ARRAY_GUN\n}\n\nnew\n    gPlayerData[MAX_PLAYERS][E_MY_ARRAY];\n\npublic OnPlayerConnect(playerid)\n{\n    gPlayerData[playerid][E_MY_ARRAY_MONEY] = 0;\n    gPlayerData[playerid][E_MY_ARRAY_AMMO] = 100;\n    gPlayerData[playerid][E_MY_ARRAY_GUN] = 5;\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Recompile and everything will be updated for you."}),"\n",(0,s.jsx)(n.p,{children:"So how does an enum know what values to give things? The full format of an enum is:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"enum NAME (modifier)\n{\n    NAME_ENTRY_1 = value,\n    NAME_ENTRY_2 = value,\n    ...\n    NAME_ENTRY_N = value\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"However much of this is implied. By default, if you don't specify a modifier it becomes (+= 1), this means that every value in the enum is the last value in the enum + 1, so for:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"enum E_EXAMPLE\n{\n    E_EXAMPLE_0,\n    E_EXAMPLE_1,\n    E_EXAMPLE_2\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"The first value (E_EXAMPLE_0) is 0 (by default if no other value is specified), so the second value (E_EXAMPLE_1) is 1 (0 + 1) and the third value (E_EXAMPLE_2) is 2 (1 + 1). This makes the value of E_EXAMPLE 3 (2 + 1), the name of the enum is also the last value in the enum. If we change the modifier we get different values:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"enum E_EXAMPLE (+= 5)\n{\n    E_EXAMPLE_0,\n    E_EXAMPLE_1,\n    E_EXAMPLE_2\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"In that example every value is the last value + 5 so, starting from 0 again, we get: E_EXAMPLE_0 = 0, E_EXAMPLE_1 = 5, E_EXAMPLE_2 = 10, E_EXAMPLE = 15. If you were to declare an array of:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"new\n    gEnumArray[E_EXAMPLE];\n"})}),"\n",(0,s.jsx)(n.p,{children:"You would get an array 15 cells big however you would only be able to access cells 0, 5 and 10 using the enum values (you could however still use normal numbers). Lets look at another example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"enum E_EXAMPLE (*= 2)\n{\n    E_EXAMPLE_0,\n    E_EXAMPLE_1,\n    E_EXAMPLE_2\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"In this all the values are 0. Why? Well the first value by default is 0, then 0 _ 2 = 0, then 0 _ 2 = 0 and 0 * 2 = 0. So how do we correct this? This is what custom values are for:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"enum E_EXAMPLE (*= 2)\n{\n    E_EXAMPLE_0 = 1,\n    E_EXAMPLE_1,\n    E_EXAMPLE_2\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"That sets the first value to 1, so you end up with 1, 2, 4 and 8. Creating an array with that would give you an 8 cell array with named access to cells 1, 2 and 4. You can set whichever values you like and as many values as you like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"enum E_EXAMPLE (*= 2)\n{\n    E_EXAMPLE_0,\n    E_EXAMPLE_1 = 1,\n    E_EXAMPLE_2\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Gives:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"0, 1, 2, 4\n"})}),"\n",(0,s.jsx)(n.p,{children:"While:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"enum E_EXAMPLE (*= 2)\n{\n    E_EXAMPLE_0 = 1,\n    E_EXAMPLE_1 = 1,\n    E_EXAMPLE_2 = 1\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Gives:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"1, 1, 1, 2\n"})}),"\n",(0,s.jsx)(n.p,{children:"It's not advised to use anything but += 1 for arrays."}),"\n",(0,s.jsx)(n.p,{children:"You can also use arrays in enums:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"enum E_EXAMPLE\n{\n    E_EXAMPLE_0[10],\n    E_EXAMPLE_1,\n    E_EXAMPLE_2\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"That would make E_EXAMPLE_0 = 0, E_EXAMPLE_1 = 10, E_EXAMPLE_2 = 11 and E_EXAMPLE = 12, contrary to the popular belief of 0, 1, 2 and 3."}),"\n",(0,s.jsx)(n.p,{children:"enums items can also have tags, so for out original example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"enum E_MY_ARRAY\n{\n    E_MY_ARRAY_MONEY,\n    E_MY_ARRAY_AMMO,\n    Float:E_MY_ARRAY_HEALTH,\n    E_MY_ARRAY_GUN\n}\n\nnew\n    gPlayerData[MAX_PLAYERS][E_MY_ARRAY];\n\npublic OnPlayerConnect(playerid)\n{\n    gPlayerData[playerid][E_MY_ARRAY_MONEY] = 0;\n    gPlayerData[playerid][E_MY_ARRAY_AMMO] = 100;\n    gPlayerData[playerid][E_MY_ARRAY_GUN] = 5;\n    gPlayerData[playerid][E_MY_ARRAY_HEALTH] = 50.0;\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"That will not give a tag mismatch."}),"\n",(0,s.jsx)(n.p,{children:"Enums can also be used as tags themselves:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"enum E_MY_TAG (<<= 1)\n{\n    E_MY_TAG_NONE,\n    E_MY_TAG_VAL_1 = 1,\n    E_MY_TAG_VAL_2,\n    E_MY_TAG_VAL_3,\n    E_MY_TAG_VAL_4\n}\n\nnew\n    E_MY_TAG:gMyTagVar = E_MY_TAG_VAL_2 | E_MY_TAG_VAL_3;\n"})}),"\n",(0,s.jsx)(n.p,{children:"That will create a new variable and assign it the value 6 (4 | 2), and it will have a custom tag so doing:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"gMyTagVar = 7;\n"})}),"\n",(0,s.jsx)(n.p,{children:"Will generate a tag mismatch warning, although you can use tag overwrites to bypass it:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"gMyTagVar = E_MY_TAG:7;\n"})}),"\n",(0,s.jsx)(n.p,{children:"This can be very useful for flag data (i.e. one bit for some data), or even combined data:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"enum E_MY_TAG (<<= 1)\n{\n    E_MY_TAG_NONE,\n    E_MY_TAG_MASK = 0xFF,\n    E_MY_TAG_VAL_1 = 0x100,\n    E_MY_TAG_VAL_2,\n    E_MY_TAG_VAL_3,\n    E_MY_TAG_VAL_4\n}\n\nnew\n    E_MY_TAG:gMyTagVar = E_MY_TAG_VAL_2 | E_MY_TAG_VAL_3 | (E_MY_TAG:7 & E_MY_TAG_MASK);\n"})}),"\n",(0,s.jsx)(n.p,{children:"Which will produce a value of 1543 (0x0607)."}),"\n",(0,s.jsx)(n.p,{children:"Finally, as stated originally, enums can be used to replace defines by ommitting the name:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"#define TEAM_NONE   0\n#define TEAM_COP    1\n#define TEAM_ROBBER 2\n#define TEAM_CIV    3\n#define TEAM_CLERK  4\n#define TEAM_DRIVER 5\n"})}),"\n",(0,s.jsx)(n.p,{children:"I'm sure many of you have seen loads of things like that to define teams. It's all well and good but it's very static. That can easilly be replaced by an enum to handle numeric assignments automatically:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"enum\n{\n    TEAM_NONE,\n    TEAM_COP,\n    TEAM_ROBBER,\n    TEAM_CIV,\n    TEAM_CLERK,\n    TEAM_DRIVER\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Those all have the same values as they had before, and can be used in exactly the same way:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"new\n    gPlayerTeam[MAX_PLAYERS] = {TEAM_NONE, ...};\n\npublic OnPlayerConnect(playerid)\n{\n    gPlayerTeam[playerid] = TEAM_NONE;\n}\n\npublic OnPlayerRequestSpawn(playerid)\n{\n    if (gPlayerSkin[playerid] == gCopSkin)\n    {\n        gPlayerTeam[playerid] = TEAM_COP;\n    }\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"While we're on the subject there is a much better way of defining teams based on this method:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"enum (<<= 1)\n{\n    TEAM_NONE,\n    TEAM_COP = 1,\n    TEAM_ROBBER,\n    TEAM_CIV,\n    TEAM_CLERK,\n    TEAM_DRIVER\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now TEAM_COP is 1, TEAM_ROBBER is 2, TEAM_CIV is 4 etc, which in binary is 0b00000001, 0b00000010 and 0b00000100. This means that if a player's team is 3 then they are in both the cop team and the robber team. That may sound pointless but it does open up possibilities:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"enum (<<= 1)\n{\n    TEAM_NONE,\n    TEAM_COP = 1,\n    TEAM_ROBBER,\n    TEAM_CIV,\n    TEAM_CLERK,\n    TEAM_DRIVER,\n    TEAM_ADMIN\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Using that you can be in both a normal team and the admin team using only a single variable. Obviously a little code modification is required but that's easy:"}),"\n",(0,s.jsx)(n.p,{children:"To add a player to a team:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"gPlayerTeam[playerid] |= TEAM_COP;\n"})}),"\n",(0,s.jsx)(n.p,{children:"To remove a player from a team:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"gPlayerTeam[playerid] &= ~TEAM_COP;\n"})}),"\n",(0,s.jsx)(n.p,{children:"To check if a player is in a team:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"if (gPlayerTeam[playerid] & TEAM_COP)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Very simple and very useful."}),"\n",(0,s.jsx)(n.h2,{id:"forward",children:(0,s.jsx)(n.code,{children:"forward"})}),"\n",(0,s.jsx)(n.p,{children:'forward tells the compiler that a function is coming later. It is required for all public functions however can be used in other places. It\'s use is "forward" followed by the full name and parameters of the function you want to forward, followed by a semicolon:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"forward MyPublicFunction(playerid, const string[]);\n\npublic MyPublicFunction(playerid, const string[])\n{\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"As well as being required for all publics forward can be used to fix a rare warning when a function which returns a tag result (e.g. a float) is used before it's declared."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"main()\n{\n    new\n        Float:myVar = MyFloatFunction();\n}\n\nFloat:MyFloatFunction()\n{\n    return 5.0;\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"This will give a reparse warning because the compiler doesn't know how to convert the return of the function to a float because it doesn't know if the function returns a normal number or a float. Clearly in this example it returns a float. This can either be solved by putting the function at a point in the code before it's used:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"Float:MyFloatFunction()\n{\n    return 5.0;\n}\n\nmain()\n{\n    new\n        Float:myVar = MyFloatFunction();\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Or by forwarding the function so the compiler knows what to do:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"forward Float:MyFloatFunction();\n\nmain()\n{\n    new\n        Float:myVar = MyFloatFunction();\n}\n\nFloat:MyFloatFunction()\n{\n    return 5.0;\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Note the forward includes the return tag too."}),"\n",(0,s.jsx)(n.h2,{id:"native",children:(0,s.jsx)(n.code,{children:"native"})}),"\n",(0,s.jsxs)(n.p,{children:["A native function is one defined in the virtual machine (i.e. the thing which runs the script), not in the script itself. You can only define native functions if they're coded into SA",":MP"," or a plugin, however you can create fake natives. Because the native functions from .inc files are detected by pawno and listed in the box on the right hand side of pawno it can be useful to use native to get your own custom functions listed there. A normal native declaration could look like:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"native printf(const format[], \\{Float, _\\}:...);\n"})}),"\n",(0,s.jsx)(n.p,{children:"If you want your own functions to appear without being declared native you can do:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"/*\nnative MyFunction(playerid);\n*/\n"})}),"\n",(0,s.jsx)(n.p,{children:"PAWNO doesn't recognise comments like that so will add the function to the list but the compiler does recognise comments like that so will ignore the declaration."}),"\n",(0,s.jsx)(n.p,{children:"The other interesting thing you can do with native is rename/overload functions:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"native my_print(const string[]) = print;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now the function print doesn't actually exist. It is still in SA",":MP",", and the compiler knows it's real name thanks to the \"= print\" part, but if you try call it in PAWN you will get an error as you have renamed print internally to my_print. As print now doesn't exist you can define it just like any other function:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'print(const string[])\n{\n    my_print("Someone called print()");\n    my_print(string);\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Now whenever print() is used in a script your function will be called instead of the original and you can do what you like. In this case another message is printed first then the original message."}),"\n",(0,s.jsx)(n.h2,{id:"new",children:(0,s.jsx)(n.code,{children:"new"})}),"\n",(0,s.jsx)(n.p,{children:"This is the core of variables, one of the most important keywords about. new declares a new variable:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"new\n    myVar = 5;\n"})}),"\n",(0,s.jsx)(n.p,{children:"That will create a variable, name it myVar and assign it the value of 5. By default all variables are 0 if nothing is specified:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'new\n    myVar;\n\nprintf("%d", myVar);\n'})}),"\n",(0,s.jsx)(n.p,{children:'Will give "0".'}),"\n",(0,s.jsxs)(n.p,{children:["A variable's scope is where it can be used. Scope is restricted by braces (the curly brackets - "," ), any variable declared inside a set of braces can only be used within those braces."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'if (a == 1)\n{\n    // Braces start the line above this one\n    new\n        myVar = 5;\n\n    // This printf is in the same braces so can use myVar.\n    printf("%d", myVar);\n\n    // This if statement is also within the braces, so it and everything in it can use myVar\n    if (myVar == 1)\n    {\n        printf("%d", myVar);\n    }\n    // The braces end the line below this\n}\n// This is outside the braces so will give an error\nprintf("%d", myVar);\n'})}),"\n",(0,s.jsx)(n.p,{children:"The example above also shows why correct indentation is so important."}),"\n",(0,s.jsx)(n.p,{children:"If a global variable (i.e. one declared outside a function) is declared new, it can be used everywhere after the declaration:"}),"\n",(0,s.jsx)(n.p,{children:"File1.pwn:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'MyFunc1()\n{\n    // Error, gMyVar doesn\'t exist yet\n    printf("%d", gMyVar);\n}\n\n// gMyVar is declared here\nnew\n    gMyVar = 10;\n\nMuFunc2()\n{\n    // Fine as gMyVar now exists\n    printf("%d", gMyVar);\n}\n\n// Include another file here\n#include "file2.pwn"\n'})}),"\n",(0,s.jsx)(n.p,{children:"file2.pwn:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'MyFunc3()\n{\n    // This is also fine as this file is included in the first file after the declaration and new is not file restricted\n    printf("%d", gMyVar);\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"operator",children:(0,s.jsx)(n.code,{children:"operator"})}),"\n",(0,s.jsx)(n.p,{children:"This allows you to overload operators for custom tags. For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'stock BigEndian:operator=(b)\n{\n    return BigEndian:(((b >>> 24) & 0x000000FF) | ((b >>> 8) & 0x0000FF00) | ((b << 8) & 0x00FF0000) | ((b << 24) & 0xFF000000));\n}\n\nmain()\n{\n    new\n        BigEndian:a = 7;\n    printf("%d", _:a);\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Normal pawn numbers are stored in what's called little endian. This operator allows you to define an assignment to convert a normal number to a big endian number. The difference between big endian and little endian is the byte order. 7 in little endian is stored as:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"07 00 00 00\n"})}),"\n",(0,s.jsx)(n.p,{children:"7 in big endian is stored as:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"00 00 00 07\n"})}),"\n",(0,s.jsx)(n.p,{children:"Therefore if you print the contents of a big endian stored number it will try read it as a little endian number and get it backwards, thus printing the numer 0x07000000, aka 117440512, which is what you will get if you run this code."}),"\n",(0,s.jsx)(n.p,{children:"You can overload the following operators:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"+, -, *, /, %, ++, --, ==, !=, <, >, <=, >=, ! and =\n"})}),"\n",(0,s.jsx)(n.p,{children:"Also note that you can make them do whatever you like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'stock BigEndian:operator+(BigEndian:a, BigEndian:b)\n{\n    return BigEndian:42;\n}\n\nmain()\n{\n    new\n        BigEndian:a = 7,\n        BigEndian:b = 199;\n    printf("%d", _:(a + b));\n'})}),"\n",(0,s.jsx)(n.p,{children:"Will simply give 42, nothing to do with addition."}),"\n",(0,s.jsx)(n.h2,{id:"public",children:(0,s.jsx)(n.code,{children:"public"})}),"\n",(0,s.jsxs)(n.p,{children:["public is used to make a function visible to the Virtual Machine, i.e. it allows the SA",":MP"," server to call the function directly, instead of only allowing the function to be called from inside the PAWN script. You can also make variables public to read and write their values from the server, however this is never used in SA",":MP"," (although you may be able to utilise it from a plugin, I've never tried) (you can also combine this with const to make a variable which can ONLY be modified from the server)."]}),"\n",(0,s.jsx)(n.p,{children:"A public function has it's textual name stored in the amx file, unlike normal functions which only have their address stored for jumps, which is another drawback to decompilation. This is so that you can call the function by name from outside the script, it also allows you to call functions by name from inside the script by leaving and re-entering it. A native function call is almost the opposite of a public function call, it calls a function outside the script from inside the script as opposed to calling a function inside the script from outside the script. If you combine the two you get functions like SetTimer, SetTimerEx, CallRemoteFunction and CallLocalFunction which call functions by name, not address."}),"\n",(0,s.jsx)(n.p,{children:"Calling a function by name:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'forward MyPublicFunc();\n\nmain()\n{\n    CallLocalFunction("MyPublicFunc", "");\n}\n\npublic MyPublicFunc()\n{\n    printf("Hello");\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:'public functions prefixed by either "public" or "@" and, as mentioned in the forward section, all require forwarding:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'forward MyPublicFunc();\nforward @MyOtherPublicFunc(var);\n\nmain()\n{\n    CallLocalFunction("MyPublicFunc", "");\n    SetTimerEx("@MyOtherPublicFunc", 5000, 0, "i", 7);\n}\n\npublic MyPublicFunc()\n{\n    printf("Hello");\n}\n\n@MyOtherPublicFunc(var)\n{\n    printf("%d", var);\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:'Obviously that example introduced SetTimerEx to call "MyOtherPublicFunc" after 5 seconds and pass it the integer value 7 to print.'}),"\n",(0,s.jsx)(n.p,{children:"main, used in most of these examples, is similar to a public function in that it can be called from outside the script, however it is not a public function - it just has a special known address so the server knows where to jump to to run it."}),"\n",(0,s.jsxs)(n.p,{children:["All SA",":MP"," callbacks are public and called from outside the script automatically:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'public OnPlayerConnect(playerid)\n{\n    printf("%d connected", playerid);\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"When someone joins the server it will automatically look up this public function in all scripts (gamemode first then filterscripts) and if it finds it, calls it."}),"\n",(0,s.jsx)(n.p,{children:"If you want to call a public function from inside the script however you do not have to call it by name, public functions also behave as normal functions too:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'forward MyPublicFunc();\n\nmain()\n{\n    MyPublicFunc();\n}\n\npublic MyPublicFunc()\n{\n    printf("Hello");\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"This is obviously much faster than using CallLocalFunction or another native."}),"\n",(0,s.jsx)(n.h2,{id:"static",children:(0,s.jsx)(n.code,{children:"static"})}),"\n",(0,s.jsx)(n.p,{children:'A static variable is like a global new variable but with a more limited scope. When static is used globally the resulting created variables are limited to only the section in which they were created (see #section). So taking the earlier "new" example:'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"file1.pwn"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'MyFunc1()\n{\n    // Error, gMyVar doesn\'t exist yet\n    printf("%d", gMyVar);\n}\n\n// gMyVar is declared here\nnew\n    gMyVar = 10;\n\nMuFunc2()\n{\n    // Fine as gMyVar now exists\n    printf("%d", gMyVar);\n}\n\n// Include another file here\n#include "file2.pwn"\n'})}),"\n",(0,s.jsx)(n.p,{children:"file2.pwn"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'MyFunc3()\n{\n    // This is also fine as this file is included in the first file after the declaration and new is not file restricted\n    printf("%d", gMyVar);\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"And modifying it for static would give:"}),"\n",(0,s.jsx)(n.p,{children:"file1.pwn"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'MyFunc1()\n{\n    // Error, g_sMyVar doesn\'t exist yet\n    printf("%d", g_sMyVar);\n}\n\n// g_sMyVar is declared here\nstatic\n    g_sMyVar = 10;\n\nMuFunc2()\n{\n    // Fine as _sgMyVar now exists\n    printf("%d", g_sMyVar);\n}\n\n// Include another file here\n#include "file2.pwn"\n'})}),"\n",(0,s.jsx)(n.p,{children:"file2.pwn"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'MyFunc3()\n{\n    // Error, g_sMyVar is limited to only the file (or section) in which it was declared, this is a different file\n    printf("%d", g_sMyVar);\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"This means you can have two globals of the same name in different files."}),"\n",(0,s.jsx)(n.p,{children:'If you use static locally (i.e. in a function) then the variable, like local variables created with new, can only be used within the scope (based on braces - see the section on "new") in which it was declared. However unlike "new" variables "static" variables do not loose their value between calls.'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'main()\n{\n    for (new loopVar = 0; loopVar < 4; loopVar++)\n    {\n        MyFunc();\n    }\n}\n\nMyFunc()\n{\n    new\n        i = 0;\n    printf("%d", i);\n    i++;\n    printf("%d", i);\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Every time the function is called i is reset to 0, so the resulting output will be:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"0\n1\n0\n1\n0\n1\n0\n1\n"})}),"\n",(0,s.jsx)(n.p,{children:'If we replace the "new" with "static" we get:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'main()\n{\n    for (new loopVar = 0; loopVar < 4; loopVar++)\n    {\n        MyFunc();\n    }\n}\n\nMyFunc()\n{\n    static\n        i = 0;\n    printf("%d", i);\n    i++;\n    printf("%d", i);\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"And, as static locals keep their value between calls, the resulting output it:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"0\n1\n1\n2\n2\n3\n3\n4\n"})}),"\n",(0,s.jsx)(n.p,{children:'The value given in the declaration (if one is given, like new, static variables default to 0) is the value assigned to the variable the first time the function is called. So if "static i = 5;" were used instead the result would be:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"5\n6\n6\n7\n7\n8\n8\n9\n"})}),"\n",(0,s.jsx)(n.p,{children:"Because of the way static variables are stored, they are in fact global variables, the compiler checks they are used in the correct place. As a result decompiled scripts cannot distinguish between normal globals, global statics and local statics and they are all given as normal globals."}),"\n",(0,s.jsx)(n.p,{children:"You can also have static functions which can only be called from the file in which they are declared. This is useful for private style functions."}),"\n",(0,s.jsx)(n.h2,{id:"stock",children:(0,s.jsx)(n.code,{children:"stock"})}),"\n",(0,s.jsx)(n.p,{children:"stock is used to declare variables and functions which may not be used but which you don't want to generate unused warnings for. With variables stock is like const in that it is a modifier, not a full declaration, so you could have:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"new stock\n    gMayBeUsedVar;\n\nstatic stock\n    g_sMayBeUsedVar;\n"})}),"\n",(0,s.jsx)(n.p,{children:"If the variable or function is used the compiler will include it, if it is not used it will exclude it. This is different to using #pragma unused (symbol) as that will simply surpress (i.e. hide) the warning and include the information anyway, stock will entirely ignore the unused data."}),"\n",(0,s.jsx)(n.p,{children:"stock is most commonly used for custom libraries. If you write a library you provide a whole load of functions for other people to use but you've no idea if they'll use them or not. If your code gives loads of warnings for every function a person doesn't use people will complain (unless it's on purpose as they HAVE to use that function (e.g. for initialising variables). Having said that however, going from personal experience with YSI people will complain anyway."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'main()\n{\n    Func1();\n}\n\nFunc1()\n{\n    printf("Hello");\n}\n\nFunc2()\n{\n    printf("Hi");\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Here Func2 is never called so the compiler will give a warning. This may be useful as you may have forgotten to call it, as is generally the case in a straight script, however if Func1 and Func2 are in a library the user may simply not need Func2 so you do:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'main()\n{\n    Func1();\n}\n\nstock Func1()\n{\n    printf("Hello");\n}\n\nstock Func2()\n{\n    printf("Hi");\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"And the function won't be compiled and the warning removed."})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,n,a){a.d(n,{Z:function(){return r},a:function(){return l}});var i=a(67294);let s={},t=i.createContext(s);function l(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);