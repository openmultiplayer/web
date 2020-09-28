---
id: Style
title: "Pawn Style Guide"
description: A short guide on the generally accepted naming conventions and other aspects of Pawn source code to aid easier communication of intent and streamline debugging and sharing of code.
---

This document is a short guide on the generally accepted naming conventions and other aspects of Pawn source code to aid easier communication of intent and streamline debugging and sharing of code.

See also:

- [Modern Pawn](https://github.com/Southclaws/sampctl/wiki/Modern-Pawn)
- [Pawn Package](https://github.com/Southclaws/sampctl/wiki/Packages)

## Terminology

### Modules

A **Module** is a single Pawn source file, with an `.inc` extension.

Some internal functions can not use `static` if they are used across different modules in the same package. When this occurs, functions must use a name style to indicate that they are _private_. See the [function style](#functions) section for details.

Modules should avoid exposing global variables. Functions must be used instead with, where appropriate, bounds checking and validity checks.

### Statement

(TODO)

### Compound Statement

(TODO)

### Expression

(TODO)

## Guidelines

### Braces

Allman braces are preferred:

```pawn
function()
{
    //
}
```

However, if you can't shake the muscle memory, K&R braces are also valid Pawn:

```pawn
function()
{
    //
}
```

### Switches

Switches must use two indent levels, one for the `switch` block and another for each `case` statement or compound statement.

```pawn
switch (variable)
{
    case 0:
        return 0;
    case 1:
        return 1;
    case 2:
        return 2;
    default:
        return -1;
}
```

```pawn
switch (variable)
{
    case 0:
    {
        // code...
        return 0;
    }
    case 1:
    {
        // code...
        return 1;
    }
    case 2:
    {
        // code...
        return 2;
    }
    default:
    {
        // code...
        return -1;
    }
}
```

### Compound Statements (Blocks)

Blocks must always use braces, even if only a single line of code exists within a block. This applies to all levels including functions.

```pawn
func()
{
    singleLineExpr();
}
```

```pawn
func()
{
    if()
    {
        singleLineExpr();
    }
}
```

```pawn
func()
{
    if()
    {
        singleLineExpr();
    }
    else if()
    {
        //
    }
    else
    {
        //
    }
}
```

### Naming

#### Functions

Functions must be named with either:

- `PascalCase` if they are used externally
- `camelCase` if `static` or only used internally within the same package

This makes it easy to tell whether a function call is to another package or within the same package.

#### Global Variables

Global variables must always use `g` prefixed PascalCase, so `gVariableName` and should generally always be `static`.

Constant globals must use `SCREAMING_SNAKE_CASE`.

#### Local Variables

Local variables must always use `camelCase` and must never use single letter names, apart from:

- `i`, `j`, `k`, etc in `for` loops
- `x`, `y`, `z`, etc in mathematical contexts

#### Enumerators

Enumerators, if named, must be prefixed with `E_` and use `SCREAMING_SNAKE_CASE`. The one exception is when avoiding a `Index tag mismatch` warning, in which case an `e_` prefix may be used. `SCREAMING_SNAKE_CASE` must still be used even with the lower case `e_` prefix.

Enumerator fields must also be `SCREAMING_SNAKE_CASE` and use the enumerator name as a prefix.

```pawn
static enum E_PLAYER {
    E_PLAYER_CASH,
    Float:E_PLAYER_HEALTH,
}
```

To avoid index tag warnings in some cases:

```pawn
static enum e_PLAYER {
    e_PLAYER_CASH,
    Float:e_PLAYER_HEALTH,
}
```

Enumerators must always be declared `static` unless used outside the module.

#### Macros and Pre-Processor Definitions

Macros must always use `SCREAMING_SNAKE_CASE` regardless of their usage.

Pre-Processor definitions (constant definitions) must also use `SCREAMING_SNAKE_CASE`.

This helps differentiate between variables and constants as well as functions and macros.

It's generally advised to avoid inventing new syntactical elements in order to prevent confusion among newcomers as to which words are part of the language and which words are from libraries.

However, some older libraries do this and cannot change because of backwards compatibility.

### Documentation

Always document exported functions with a simple line comment in the format `// FunctionName does X, Y and Z and returns A` where the first word is the name of the function itself followed by a brief description of what it does. No need to waste time describing each individual parameter. For example:

```pawn
// LoadPlayerAccount is called to initiate the account load process. This
// function will trigger HTTP calls to get player data, it will display dialogs
// to the player and eventually, once the process has completed, the event
// `OnPlayerLogin` is emitted on success. On failure, the player is kicked.
stock Error:LoadPlayerAccount(playerid)
{
    // code...
}
```

Each package should have a `README.md` and, if necessary, each module should have a comment on the very first line describing what that module provides.
