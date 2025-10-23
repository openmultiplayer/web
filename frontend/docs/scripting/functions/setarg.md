---
title: setarg
sidebar_label: setarg
description: Set an argument that was passed to a function.
tags: ["core", "arguments", "args"]
---

<LowercaseNote />

## Description

Set an argument that was passed to a function.

| Name  | Description                                                 |
| ----- | ----------------------------------------------------------- |
| arg   | The argument sequence number. Use 0 for the first argument. |
| index | The index (if the argument is an array) _(optional=0)_      |
| value | The value to set the argument to.                           |

## Returns

**1** on success and **0** if the argument or the index are invalid.

## Related Functions

- [getarg](getarg): Retrieve an argument from a variable argument list.
- [numargs](numargs): Return the number of arguments.
