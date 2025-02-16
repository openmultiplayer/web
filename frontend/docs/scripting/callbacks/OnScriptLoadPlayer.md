---
title: OnScriptLoadPlayer
description: This callback is called for each connected player when a script is loaded.
tags: ["player"]
---

<VersionWarn name='callback' version='omp v1.3.1.2748' />

## Description

This callback is called for each connected player when a script is loaded.

| Name               | Description                                                              |
| ------------------ | ------------------------------------------------------------------------ |
| playerid           | The ID of the player that script is loaded for.                          |
| bool:isEntryScript | Determining whether it's an entry script (main script) or a side script. |

## Returns

This callback does not handle returns.

## Examples

```c
public OnScriptLoadPlayer(playerid, bool:isEntryScript)
{
    printf("Script loaded for player ID %d (isEntryScript: %s)", playerid, isEntryScript ? "Yes" : "No");
}
```

## Notes

:::tip

This callback is called when you are **loading** a side script (filterscript) at runtime.

:::

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another.

- [OnScriptUnloadPlayer](OnScriptUnloadPlayer): This callback is called for each connected player when a script is unloaded.
- [OnPlayerConnect](OnPlayerConnect): This callback is called when a player connects to the server.
- [OnPlayerDisconnect](OnPlayerDisconnect): This callback is called when a player leaves the server.
