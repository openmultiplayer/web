---
id: GetSVarType
title: GetSVarType
description: Gets the type (integer, float or string) of a server variable.
tags: []
---

## Description

Gets the type (integer, float or string) of a server variable.

| Name    | Description                                         |
| ------- | --------------------------------------------------- |
| varname | The name of the server variable to get the type of. |

## Returns

Returns the type of the SVar. See table below.

## Examples

```c
stock PrintSVar(varname[])
{
    switch(GetSVarType(varname))
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
```

## Related Functions

- [SetSVarInt](SetSVarInt.md): Set an integer for a server variable.
- [GetSVarInt](GetSVarInt.md): Get a player server as an integer.
- [SetSVarString](SetSVarString.md): Set a string for a server variable.
- [GetSVarString](GetSVarString.md): Get the previously set string from a server variable.
- [SetSVarFloat](SetSVarFloat.md): Set a float for a server variable.
- [GetSVarFloat](GetSVarFloat.md): Get the previously set float from a server variable.
- [DeleteSVar](DeleteSVar.md): Delete a server variable.
