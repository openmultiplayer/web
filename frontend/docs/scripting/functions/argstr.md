---
title: argstr
sidebar_label: argstr
description: Get the string value of an argument by name.
tags: ["arguments", "args"]
---

## Description

Get the string value of an argument by name.

| Name                  | Description                                                       |
| --------------------- | ----------------------------------------------------------------- |
| skip = 0              | The number of arguments (with potentially the same name) to skip. |
| const argument[] = "" | The name of the argument, including `-`s and `/`s.                |
| value[] = ""          | The output string destination.                                    |
| size = sizeof (value) | The size of the destination.                                      |
| bool:pack = false     | Should the return value be packed?                                |

## Returns

**true** - the argument was found, **false** - it wasn't.

## Related Functions

- [argcount](argcount): Get the number of arguments passed to the script (those after --).
- [argindex](argindex): Get the name of the argument at the given index after --.
- [argvalue](argvalue): Get the number of arguments passed to the script (those after --).
