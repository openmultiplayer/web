---
title: "SetServerRuleFlags | open.mp"
description: "Sets the flags of a server rule."
canonical: https://open.mp/docs/scripting/functions/SetServerRuleFlags
language: en
---

# SetServerRuleFlags

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

warning

This function has not yet been implemented.

## Description

Sets the flags of a server rule.

## Parameters

| Name | Description |
| --- | --- |
| const rule\[\] | The server rule name. |
| E\_SERVER\_RULE\_FLAGS:flags | The flags to set. |

## Returns

Returns **true** if the function executed successfully, otherwise **false**.

## Examples

```c
public OnGameModeInit()
{
    AddServerRule("discord", "discord.gg/samp");
    SetServerRuleFlags("discord", 1);
    return 1;
}
```

## Related Functions

-   [AddServerRule](https://open.mp/docs/scripting/functions/AddServerRule): Add a server rule.
-   [RemoveServerRule](https://open.mp/docs/scripting/functions/RemoveServerRule): Remove the server rule.
-   [IsValidServerRule](https://open.mp/docs/scripting/functions/IsValidServerRule): Checks if the given server rule is valid.
-   [GetServerRuleFlags](https://open.mp/docs/scripting/functions/GetServerRuleFlags): Gets the flags of a server rule.
