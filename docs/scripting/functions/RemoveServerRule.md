---
title: "RemoveServerRule | open.mp"
description: "Remove the server rule."
canonical: https://open.mp/docs/scripting/functions/RemoveServerRule
language: en
---

# RemoveServerRule

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Remove the server rule.

| Name | Description |
| --- | --- |
| const rule\[\] | The server rule name to remove. |

## Returns

Returns true if the function executed successfully, otherwise false.

## Examples

```c
RemoveServerRule("rule");
```

## Related Functions

-   [AddServerRule](https://open.mp/docs/scripting/functions/AddServerRule): Add a server rule.
-   [IsValidServerRule](https://open.mp/docs/scripting/functions/IsValidServerRule): Checks if the given server rule is valid.
