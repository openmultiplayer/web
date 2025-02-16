---
title: GetSVarType
description: Gets the type (integer, float or string) of a server variable.
tags: []
---

## คำอธิบาย

Gets the type (integer, float or string) of a server variable.

| Name    | Description                                         |
| ------- | --------------------------------------------------- |
| varname | The name of the server variable to get the type of. |

## ส่งคืน

Returns the type of the SVar. See table below.

## ตัวอย่าง

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

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- SetSVarInt: Set an integer for a server variable.
- GetSVarInt: Get a player server as an integer.
- SetSVarString: Set a string for a server variable.
- GetSVarString: Get the previously set string from a server variable.
- SetSVarFloat: Set a float for a server variable.
- GetSVarFloat: Get the previously set float from a server variable.
- DeleteSVar: Delete a server variable.
