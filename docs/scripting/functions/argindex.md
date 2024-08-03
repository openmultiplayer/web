---
title: argindex
description: Get the name of the argument at the given index after --.
tags: ["arguments", "args"]
---

## Description

Get the name of the argument at the given index after **--**.

| Name                  | Description                                     |
| --------------------- | ----------------------------------------------- |
| index                 | The naught-based offset to the script argument. |
| value[]               | The output string destination.                  |
| size = sizeof (value) | The size of the destination.                    |
| bool:pack = false     | Should the return value be packed?              |

## Returns

**true** - the argument was found, **false** - it wasn't.

## Notes

Separate parameters also count for the index here.

For example with `--load test --run` the argument `--run` is index `2`.

## Related Functions

- [argcount](argcount): Get the number of arguments passed to the script (those after --).
- [argstr](argstr): Get the string value of an argument by name.
- [argvalue](argvalue): Get the number of arguments passed to the script (those after --).
