---
id: Style
title: "Pawn Style Guide" 
description: A short guide on the generally accepted naming conventions and other aspects of Pawn source code to aid easier communication of intent and streamline debugging and sharing of code.
---

Ang documentation na ito a maikli lang para sa general accepted naming convensions (Please sumunod sa mga naming convensions para madali matrack ang mga variables or macros mo) at iba

Tignan den ang mga ito:

- [Modern Pawn](https://github.com/Southclaws/sampctl/wiki/Modern-Pawn)
- [Pawn Package](https://github.com/Southclaws/sampctl/wiki/Packages)

## Terminology

### Statement

Ang `statement` ay isang pirasong code na nagsasabi sa host program na gawen ang isang bagay. And `statement` ay isang valid na pirasong code na naghahawak ng isang result/resulta.

```c
a = b + c;
```

Eto ang isang statement na kinokompose ng variable na nakaassign dito ang isang resulta na tinatawag na [#Expression]

```c
SetPlayerColor(playerid, 0xFF4700FF);
```

Eto ay statement na nagsasabi sa program na tumawag ng function na may arugmento.

```c
x + 8
```

Ang isang to ay _HINDI_ statement kasi yung resulta ay hindi naman ginagamit kahit saan, eto ay isang [#Expression] lamang.

### Compound Statement

Ang compound statement ay isang collection ng mga statements na pinapalibutan ng braces

```c
    new message[] = "Magandang Umaga!";
    print(message);
```

Eto ay isang compound statement na kinokompose ng dalawang statement.

```c
if (a == b)
{
    print("Kamusta ka?");
}
```

Eto ay isang compound statement na may `if` condition, eto ay usually na tinatawag na "if statement".

```c
return Function1(), Function2(), Function3();
```

Eto ay _HINDI_ compound statement, eto ay chain ng statements na pinag hihiwalay ng commas `,`, Eto ay form ng chaining statements ay kinokonsinderang bad practice para sa mga baguhan sa Pawn.

### Expression

Ang expression ay isang pirasong syntax na naghahawak ng value/halaga, Eto ay hindi valid statement unless ang tagapaghawak na value ay ginamit sa ibang pamamaraan.

Expressions ay madalas na kinokompose para makabuo ng statements.

```c
a + b
```

Eto ay isang madaling addition expression na kumukuha ng dalawang values/halaga at inaapply ang add operator sakanila.

## Guidelines

### Braces

Allman braces ay recomendado:

```pawn
function()
{
    //
}
```

Sapagkat, kung di kaya ng muscle memory mo, K&R braces ay pwede rin sa Pawn:

```pawn
function() {
    //
}
```

### Switches

Switches ay dapat merong dalawang indent levels, isa para sa `switch` block at yung isa ay para sa bawa `case` statement o compound statement.

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

Blocks ay dapat palaging gumagamit ng braces, kahit eto ay isang line of code lang ang nag-eexist sa block. Eto ay nag-aapply sa lahat ng level kahit eto pa ay function.

```pawn
func()
{
    singleLineExpr();
}
```

```pawn
func()
{
    if ()
    {
        singleLineExpr();
    }
}
```

```pawn
func()
{
    if ()
    {
        singleLineExpr();
    }
    else if ()
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
(Utang na loob please gumamit kayo neto).

### Functions

Functions ay dapat gumamit ng `PascalCase`.

### Global Variables

Global variables declared gamit ang `new` dapat ay palaging merong `g~` prefixed PascalCase. example ay `new g_VariableName`, Pero kung ikaw ay gumamit ng `static` eto ay dapat merong `s_` prefixed PascalCase, example `static s_VariableName`

Constant globals ay dapat gumamit ng `SCREAMING_SNAKE_CASE`. 

#### Local Variables

Local variables ay dapat palaging gumamit ng `camelCase` at dapat wag na wag kang gumamit ng single letter names, except sa:

- `i`, `j`, `k`, eto para sa `for` loops.
- `x`, `y`, `z`, etc para sa mathematical contexts

#### Enumerators
Enumerators, kung pangalan, ay dapat gumamit ng prefix na `E_` (isang strong tag) or `e_` (isang weak tag)

Enumerator fields ay dapat `SCREAMING_SNAKE_CASE` at ang gamit ng enumerator name para sa prefix.

```pawn
static enum E_PLAYER_DATA
{
    E_PLAYER_CASH, 
    Float:E_PLAYER_HEALTH,
}
```

Paggumamit ng weak tag

```pawn
static enum e_PLAYER_DATA
{
    E_PLAYER_CASH,
    Float:E_PLAYER_HEALTH,
}
```

Non-named enumerator fields ay dapat ding `SCREAMING_SNAKE_CASE` at dapat ginagamit ang enumerator name as a prefix.

```pawn
static enum
{
    ENUMATOR_INTEGER, 
    Float:ENUMATOR_FLOAT,
}
```

Enumerators ay dapat palaging declared `static`
except ay gagamitin eto sa labas ng module.

#### Macros and Pre-Processor Definitions

Macros ay dapat palaging gumamit ng `SCREAMING_SNAKE_CASE` regardless sa paggamit nila.

Pre-Processor definitions (constant definitions)
ay dapat gumagamit ng `SCREAMING_SNAKE_CASE`.

Eto ay makakatulong idifferentiate sa pagitan ng variables at constants included dito ang functions at macros.

Eto ay generally advised para maiwasan ang paggawa ng syntactical elements para maprevent ang confusion para sa newcomers as to which words ay parte ng language (Pawn) at which words ay galing sa libraries (Mga nadodownload na .inc).

Pero, ang ibang matatandang libraries ginagawa to at hindi nila mabago dahil sa backwards compatibility.

### Documentation

Palaging document exported functions na may simpleng linya comment sa format `// FunctionName does X, Y and Z and returns A` saan ang unang word ay ang pangalan ng function itself kasunod ang description na ano ang ginagawa netong function na it. Hindi na kelangan magsayang ng oras sapagdedescribe para sa bawat individual parameter.
Example:

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

Bawat package ay dapat merong `README.md` at, kung necessary, bawat isang module ay dapat merong comment sa pinaka unang line na nagdedescribe na anong mga pwede ibigay ng module na to.

Ikaw ay binabati ko at ikaw ay meron nang alam tungkol sa Pawn language.