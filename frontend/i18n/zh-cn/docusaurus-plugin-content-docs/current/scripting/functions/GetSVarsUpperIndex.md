---
title: GetSVarsUpperIndex
sidebar_label: GetSVarsUpperIndex
description: Each SVar (server-variable) has its own unique identification number for lookup, this function returns the highest ID.
tags: ["server variable", "svar"]
---

## Description

Each SVar (server-variable) has its own unique identification number for lookup, this function returns the highest ID.

## Examples

```c
// Store the upper index in the variable 'SVarUpperIndex' + 1
new SVarUpperIndex = GetSVarsUpperIndex() + 1;

// This sVarCount variable will store how many sVars are set as we count them.
new sVarCount;

new sVarName[128];

for(new i = 0; i != sVarUpperIndex; i++) // Loop through all sVar IDs under the upper index
{
    // At first, we need to get SVar name
    GetSVarNameAtIndex(i, sVarName, sizeof(sVarName));

    // If the var is set (type not 0), increment sVarCount.
    if (GetSVarType(sVarName) != 0)
    {
        sVarCount ++;
    }
}

printf("There are %i server-variables set. Upper index (highest ID): %i.", sVarCount, SVarUpperIndex-1);
```

## Related Functions

- [GetSVarNameAtIndex](GetSVarNameAtIndex): Get the server variable's name from its index.
- [GetSVarType](GetSVarType): Get the type of the server variable.
