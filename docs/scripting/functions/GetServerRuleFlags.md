---
title: "GetServerRuleFlags | open.mp"
description: "Gets the flags of a server rule."
canonical: https://open.mp/docs/scripting/functions/GetServerRuleFlags
language: en
---

# GetServerRuleFlags

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

warning

This function has not yet been implemented.

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

-   [AddServerRule](https://open.mp/docs/scripting/functions/AddServerRule): Add a server rule.
-   [RemoveServerRule](https://open.mp/docs/scripting/functions/RemoveServerRule): Remove the server rule.
-   [IsValidServerRule](https://open.mp/docs/scripting/functions/IsValidServerRule): Checks if the given server rule is valid.
-   [SetServerRuleFlags](https://open.mp/docs/scripting/functions/SetServerRuleFlags): Sets the flags of a server rule.
