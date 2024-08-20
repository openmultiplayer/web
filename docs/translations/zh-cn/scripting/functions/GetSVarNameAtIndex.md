---
title: GetSVarNameAtIndex
description: Retrieve the name of a sVar via the index.
tags: ["server variable", "svar"]
---

## Description

Retrieve the name of a sVar via the index.

| Name                   | Description                                                |
| ---------------------- | ---------------------------------------------------------- |
| index                  | The index of the sVar.                                     |
| output[]               | A string to store the sVar's name in, passed by reference. |
| size = sizeof (output) | The max length of the returned string.                     |

## Returns

This function does not return any specific values.

## Related Functions

- [GetSVarType](GetSVarType): Get the type of the server variable.
- [GetSVarInt](GetSVarInt): Get a player server as an integer.
- [GetSVarFloat](GetSVarFloat): Get the previously set float from a server variable.
- [GetSVarString](GetSVarString): Get the previously set string from a server variable.
