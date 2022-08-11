---
title: "Scripting: Errors and Warnings list"
description: The most common Errors and Warnings produced by the PAWN Compiler
---

<br />When the compiler finds an error in a file, it outputs a message giving, in this order:

- the name of the file
- the line number were the compiler detected the error between parentheses, directly behind the filename
- the error class (error, fatal error or warning)
- an error number
- a descriptive error message

For example:
```
hello.pwn(3) : error 001: expected token: ";", but found "{"
```
**Note**: The error may be on the line ABOVE the line that is shown, since the compiler cannot always establish an error before having analyzed the complete expression.

***Error categories***<br />
----------------------------------------------------------------------------------------
Errors are separated into three classes:<br />

**Errors**<br />
- Describe situations where the compiler is unable to generate appropriate code.<br />
- Errors messages are numbered from 1 to 99.<br />

**Fatal errors**<br />
- Fatal errors describe errors from which the compiler cannot recover.<br />
- Parsing is aborted.<br />
- Fatal error messages are numbered from 100 to 199.<br />

**Warnings**<br />
- Warnings are displayed for unintended compiler assumptions and common mistakes.<br />
- Warning messages are numbered from 200 to 299.<br />

***Common Errors***<br />
----------------------------------------------------------------------------------------
**001: expected token**<br />
A required token is missing.<br />

Example:
```
error 001: expected token: ";", but found "return"
```
```pawn
main()
{
    print("test") // This line is missing a semi-colon. That is the token it is expecting.
    return 1; // The error states that it found "return", this is this line it is referring to,
    // as it is after the point at which the missing token (in this case the semi-colon) should be.
}
```
**002: only a single statement (or expression) can follow each “case”**<br />
Every case in a switch statement can hold exactly one statement.
To put multiple statements in a case, enclose these statements
between braces (which creates a compound statement).

Example:
```
error 002: only a single statement (or expression) can follow each "case"
```
```pawn
main()
{
    switch(x)
    {
        case 0: print("hello"); print("hello");
    }
    return 1;
}
```
The above code also produces other warnings/errors:<br />
```
error 002: only a single statement (or expression) can follow each "case"
warning 215: expression has no effect
error 010: invalid function or declaration
```
Fixed:
```pawn
main()
{
    switch(x)
    {
        case 0:
        {
            print("hello");
            print("hello");
        }
    }
    return 1;
}
```
**004: function "x" is not implemented**<br />
Most often caused by a missing brace in the function above.<br />

**025: function heading differs from prototype**<br />
This usually happen when new sa-mp version comes with new addition of argument to a function, like OnPlayerGiveDamage from 0.3x to 0.3z. The scripter must add "bodypart" argument to OnPlayerGiveDamage callback on their script.

Caused by either the number of arguments or the argument name is different.

Example:
```pawn
forward MyFunction(playerid);
 
public MyFunction(player, vehicleid)
```
Fixed:
```pawn
forward MyFunction(playerid, vehicleid);
 
public MyFunction(playerid, vehicleid)
```
**035: argument type mismatch (argument x)**<br />
An argument passed to a function is of the wrong 'type'. For example, passing a string where you should be passing an integer.<br />

Example:
```
error 035: argument type mismatch (argument 1)
```
```pawn
Kick("playerid"); // We are passing a STRING, we should be passing an INTEGER
```
Fixed:
```pawn
Kick(playerid);
```

**036: empty statement**<br />
Caused by a rogue semicolon (;), usually inadvertently placed behind an if-statement.

**046: unknown array size (variable x)**<br />
For array assignment, the size of both arrays must be explicitly defined, also if they are passed as function arguments.

Example:
```pawn
new string[];
string = "hello";
```
Fixed:
```pawn
new string[6];
string = "hello";
```

**047: array sizes do not match, or destination array is too small**<br />
For array assignment, the arrays on the left and the right side of the assignment operator must have the same number of dimensions. In addition:

for multi-dimensional arrays, both arrays must have the same size;
for single arrays with a single dimension, the array on the left side of the assignment operator must have a size that is equal or bigger than the one on the right side.
new destination[8];
new msg[] = "Hello World!";
 
destination = msg;
In the above code, we try to fit 12 characters in an array that can only support 8. By increasing the array size of the destination, we can solve this. Note that a string also requires a null terminator so the total length of "Hello World!" plus the null terminator is, in fact, 13.

new destination[13];
new msg[] = "Hello World!";
 
destination = msg;
055: start of function body without function header
This error usually indicates an erroneously placed semicolon at the end of the function header.

Common Fatal Errors
100: cannot read from file: "<file>"
The compiler cannot find, or read from, the specified file. Make sure that the file you are trying to include is in the proper directory (default: <server directory>\pawno\include).

Tip
Image:Light_bulb_icon.png

Multiple copies of pawno can lead to this problem. If this is the case, don't double click on a .pwn file to open it. Open your editor first, then open the file through the editor.

Common Warnings
202: number of arguments does not match definition
The description of this warning is pretty self-explanatory. You've passed either too few or too many parameters to a function. This is usually an indication that the function is used incorrectly. Refer to the documentation to figure out the correct usage of the function.

This usually happen on GetPlayerHealth function with PAWNO function auto completion as it confuses with the NPC GetPlayerHealth function that only has 'playerid' argument.

Example:

GetPlayerHealth(playerid);
Fixed:

new Float:health;
GetPlayerHealth(playerid, health);
203: symbol is never used: "symbol"
You have created a variable or a function, but you're not using it. Delete the variable or function if you don't intend to use it. This warning is relatively safe to ignore.

The stock keyword will prevent this warning from being shown, as variables/functions with the stock keyword are not compiled unless they are used.

stock SomeFunction()
{
    // Blah
}
 
// There will be no warning if this function is never used
204: symbol is assigned a value that is never used: "symbol"
Similar to the previous warning. You created a variable and assigned it a value, but you're not using that value anywhere. Use the variable, or delete it. This warning, too, is relatively safe to ignore.

209: function should return a value
You have created a function without a return value

SomeFunction()
{
     // Blah
}
but you used it to assign on variable or function argument,

new result = SomeFunction(); // expected value = 1
Fixed:

SomeFunction()
{
     // Blah
     return 1;
}
211: possibly unintended assignment
The assignment operator (=) was found in an if-statement, instead of the equality operator (==). If the assignment is intended, the expression must be wrapped in parentheses. Example:

if(vehicle = GetPlayerVehicleID(playerid)) // warning
if(vehicle == GetPlayerVehicleID(playerid)) // no warning
if((vehicle = GetPlayerVehicleID(playerid))) // no warning; the value returned by the function will be assigned to the variable and the expression is then evaluated.
213: tag mismatch
A tag mismatch occurs when:

Assigning to a tagged variable a value that is untagged or that has a different tag
The expressions on either side of a binary operator have different tags
In a function call, passing an argument that is untagged or that has a different tag than what the function argument was defined with
Indexing an array which requires a tagged index with no tag or a wrong tag name
Usually happen on a new variable created with missing tag on the required function such as Float:, Text3D:, Text:, etc. Example,

Bad:
new health;
GetPlayerHealth(playerid, health);
Good:
new Float:health;
GetPlayerHealth(playerid, health);
217: loose indentation
The compiler will issue this warning if the code indentation is 'loose', example:

Good:

if(condition)
{
    action();
    result();
}
Bad:

if(condition)
{
    action();
  result();
}
Indentation means to push (indent) text along from the left of the page (by pressing the TAB key). This is common practice in programming to make code easier to read. This warning also exists to avoid dangling-else problem.

219: local variable "foo" shadows a variable at a preceding level
A local variable, i.e. a variable that is created within a function or callback, cannot have the same name as a global variable, an enum specifier, a function, or a variable declared higher up in the same function. The compiler cannot tell which variable you're trying to alter.

It is customary to prefix global variables with 'g' (e.g. gTeam). However, global variables should be avoided where possible.

new team[MAX_PLAYERS]; // variable declared in the global scape
 
function(playerid)
{
    new team[MAX_PLAYERS]; // declared in the local scope, shadows the variable in the global scope, warning 219
    team[playerid] = random(5); // which variable are we trying to update here?
}
225: unreachable code
The indicated code will never run, because an instruction before (above) it causes a jump out of the function, out of a loop or elsewhere. Look for return, break, continue and goto instructions above the indicated line. Unreachable code can also be caused by an endless loop above the indicated line.

Example:

CMD:jetpack(playerid, params[])
{
	#pragma unused params
	if(IsPlayerAdmin(playerid))
	{
	    SetPlayerSpecialAction(playerid, SPECIAL_ACTION_USEJETPACK);
	    return 1; // jumps out the command
	}
	else
	{
	    SendClientMessage(playerid, -1, "You are not admin!");
	    return 1; // jumps out the command
	}
	SendClientMessage(playerid, -1, "You typed command /jp"); // this code is not reachable and will not run.
}
Fixed:

CMD:jetpack(playerid, params[])
{
	#pragma unused params
	if(IsPlayerAdmin(playerid))
	{
	    SetPlayerSpecialAction(playerid, SPECIAL_ACTION_USEJETPACK);
	}
	else
	{
	    SendClientMessage(playerid, -1, "You are not admin!");
	}
	SendClientMessage(playerid, -1, "You typed command /jp"); // this code will run.
	return 1; // jumps out the command
}
235: public function lacks forward declaration (symbol "symbol")
Your public function is missing a forward declaration.

Bad:

public MyFunction()
{
    // blah
}
Good:

forward MyFunction();
 
public MyFunction()
{
    // blah
}
