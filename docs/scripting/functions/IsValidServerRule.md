---
title: "IsValidServerRule | open.mp"
description: "Checks if the given server rule is valid."
canonical: https://open.mp/docs/scripting/functions/IsValidServerRule
language: en
---

# IsValidServerRule

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Checks if the given server rule is valid.

| Name | Description |
| --- | --- |
| const rule\[\] | The server rule name to check. |

## Returns

Returns true if the server rule is valid, otherwise false.

## Examples

```c
if (IsValidServerRule("version"))
{
    // Server rule is valid
}
else
{
    // Server rule is not valid
}
```

## Related Functions

-   [AddServerRule](https://open.mp/docs/scripting/functions/AddServerRule): Add a server rule.
-   [RemoveServerRule](https://open.mp/docs/scripting/functions/RemoveServerRule): Remove the server rule.
