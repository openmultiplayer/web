---
title: SetServerRuleFlags
sidebar_label: SetServerRuleFlags
description: Sets the flags of a server rule.
tags: ["rule"]
---

<VersionWarn version='omp v1.1.0.2612' />

:::warning

This function has not yet been implemented.

:::

## Description

Sets the flags of a server rule.

## Parameters

| Name                      | Description           |
|---------------------------|-----------------------|
| const rule[]              | The server rule name. |
| E_SERVER_RULE_FLAGS:flags | The flags to set.     |

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

- [AddServerRule](AddServerRule): Add a server rule.
- [RemoveServerRule](RemoveServerRule): Remove the server rule.
- [IsValidServerRule](IsValidServerRule): Checks if the given server rule is valid.
- [GetServerRuleFlags](GetServerRuleFlags): Gets the flags of a server rule.
