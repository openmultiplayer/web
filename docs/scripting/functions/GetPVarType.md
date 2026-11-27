---
title: "GetPVarType | open.mp"
description: "Gets the type (integer, float or string) of a player variable."
canonical: https://open.mp/docs/scripting/functions/GetPVarType
language: en
---

# GetPVarType

## Description

Gets the type (integer, float or string) of a player variable.

| Name | Description |
| --- | --- |
| playerid | The ID of the player whose player variable to get the type of. |
| const pvar\[\] | The name of the player variable to get the type of. |

## Returns

Returns the [type](https://open.mp/docs/scripting/resources/pvartypes) of the PVar.

Returns `PLAYER_VARTYPE_NONE` (0) if a player variable with the given name does not exist.

## Examples

```c
stock PrintPVar(playerid, varname[])
{
    switch (GetPVarType(playerid, varname))
    {
        case PLAYER_VARTYPE_NONE:
        {
            return 0;
        }
        case PLAYER_VARTYPE_INT:
        {
            printf("Integer PVar '%s': %i", varname, GetPVarInt(playerid, varname));
        }
        case PLAYER_VARTYPE_FLOAT:
        {
            printf("Float PVar '%s': %f", varname, GetPVarFloat(playerid, varname));
        }
        case PLAYER_VARTYPE_STRING:
        {
            new varstring[256];
            GetPVarString(playerid, varname, varstring);

            printf("String PVar '%s': %s", varname, varstring);
        }
    }
    return 1;
}

public OnPlayerConnect(playerid)
{
    SetPVarInt(playerid, "Level", 20);

    PrintPVar(playerid, "Level"); // Output: "Integer PVar 'Level': 20"
    return 1;
}
```

## Related Functions

-   [SetPVarInt](https://open.mp/docs/scripting/functions/SetPVarInt): Set an integer for a player variable.
-   [GetPVarInt](https://open.mp/docs/scripting/functions/GetPVarInt): Get the previously set integer from a player variable.
-   [SetPVarString](https://open.mp/docs/scripting/functions/SetPVarString): Set a string for a player variable.
-   [GetPVarString](https://open.mp/docs/scripting/functions/GetPVarString): Get the previously set string from a player variable.
-   [SetPVarFloat](https://open.mp/docs/scripting/functions/SetPVarFloat): Set a float for a player variable.
-   [GetPVarFloat](https://open.mp/docs/scripting/functions/GetPVarFloat): Get the previously set float from a player variable.
-   [DeletePVar](https://open.mp/docs/scripting/functions/DeletePVar): Delete a player variable.

## Related Resources

-   [Player Variable Types](https://open.mp/docs/scripting/resources/pvartypes)
