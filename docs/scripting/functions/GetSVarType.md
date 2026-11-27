---
title: "GetSVarType | open.mp"
description: "Gets the type (integer, float or string) of a server variable."
canonical: https://open.mp/docs/scripting/functions/GetSVarType
language: en
---

# GetSVarType

## Description

Gets the type (integer, float or string) of a server variable.

| Name | Description |
| --- | --- |
| const svar\[\] | The name of the server variable to get the type of. |

## Returns

Returns the [type](https://open.mp/docs/scripting/resources/svartypes) of the SVar.

Returns `SERVER_VARTYPE_NONE` (0) if a server variable with the given name does not exist.

## Examples

```c
stock PrintSVar(varname[])
{
    switch (GetSVarType(varname))
    {
        case SERVER_VARTYPE_NONE:
        {
            return 0;
        }
        case SERVER_VARTYPE_INT:
        {
            printf("Integer SVar '%s': %i", varname, GetSVarInt(varname));
        }
        case SERVER_VARTYPE_FLOAT:
        {
            printf("Float SVar '%s': %f", varname, GetSVarFloat(varname));
        }
        case SERVER_VARTYPE_STRING:
        {
            new varstring[256];
            GetSVarString(varname, varstring);

            printf("String SVar '%s': %s", varname, varstring);
        }
    }
    return 1;
}

public OnGameModeInit()
{
    SetSVarInt("Version", 37);

    PrintSVar("Version"); // Output: "Integer SVar 'Version': 37"
    return 1;
}
```

## Related Functions

-   [SetSVarInt](https://open.mp/docs/scripting/functions/SetSVarInt): Set an integer for a server variable.
-   [GetSVarInt](https://open.mp/docs/scripting/functions/GetSVarInt): Get a player server as an integer.
-   [SetSVarString](https://open.mp/docs/scripting/functions/SetSVarString): Set a string for a server variable.
-   [GetSVarString](https://open.mp/docs/scripting/functions/GetSVarString): Get the previously set string from a server variable.
-   [SetSVarFloat](https://open.mp/docs/scripting/functions/SetSVarFloat): Set a float for a server variable.
-   [GetSVarFloat](https://open.mp/docs/scripting/functions/GetSVarFloat): Get the previously set float from a server variable.
-   [DeleteSVar](https://open.mp/docs/scripting/functions/DeleteSVar): Delete a server variable.

## Related Resources

-   [Server Variable Types](https://open.mp/docs/scripting/resources/svartypes)
