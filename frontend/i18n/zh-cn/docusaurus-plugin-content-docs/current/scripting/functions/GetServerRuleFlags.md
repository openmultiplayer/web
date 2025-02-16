---
title: GetServerRuleFlags
sidebar_label: GetServerRuleFlags
description: Gets the flags of a server rule.
tags: ["rule"]
---

<VersionWarn version='omp v1.1.0.2612' />

:::warning

This function has not yet been implemented.

:::

## Description

Gets the flags of a server rule.

## Return Values

Returns the server rule flags.

## Examples

```c
public OnGameModeInit()
{
    AddServerRule("discord", "discord.gg/samp");
    SetServerRuleFlags("discord", 1);

    new E_SERVER_RULE_FLAGS:flags = GetServerRuleFlags("discord");
    printf("Flags: %d", _:flags); // Flags: 1
    return 1;
}
```

## Related Functions

- [AddServerRule](AddServerRule): Add a server rule.
- [RemoveServerRule](RemoveServerRule): Remove the server rule.
- [IsValidServerRule](IsValidServerRule): Checks if the given server rule is valid.
- [SetServerRuleFlags](SetServerRuleFlags): Sets the flags of a server rule.
