---
title: argvalue
sidebar_label: argvalue
description: Get the number of arguments passed to the script (those after --).
tags: ["arguments", "args"]
---

## Description

Get the number of arguments passed to the script (those after **--**).

| Name                  | Description                                                       |
| --------------------- | ----------------------------------------------------------------- |
| skip = 0              | The number of arguments (with potentially the same name) to skip. |
| const argument[] = "" | The name of the argument, including `-`s and `/`s.                |
| &value = cellmin      | The output destination.                                           |

## Returns

**true** - the argument was found with value, **false** - it wasn't.

## Notes

Separate parameters also count for the index here.

For example with `--load test --run` the argument `--run` is index `2`.

## Related Functions

- [argcount](argcount): Get the number of arguments passed to the script (those after --).
- [argindex](argindex): Get the name of the argument at the given index after --.
- [argstr](argstr): Get the string value of an argument by name.
