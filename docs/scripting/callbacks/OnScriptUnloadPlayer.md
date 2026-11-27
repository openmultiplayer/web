---
title: "OnScriptUnloadPlayer | open.mp"
description: "This callback is called for each connected player when a script is unloaded."
canonical: https://open.mp/docs/scripting/callbacks/OnScriptUnloadPlayer
language: en
---

# OnScriptUnloadPlayer

warning

This callback was added in omp v1.3.1.2748 and will not work in earlier versions!

## Description

This callback is called for each connected player when a script is unloaded.

| Name | Description |
| --- | --- |
| playerid | The ID of the player that script is unloaded for. |
| bool:isEntryScript | Determining whether it's an entry script (main script) or a side script. |

## Returns

This callback does not handle returns.

## Examples

```c
public OnScriptUnloadPlayer(playerid, bool:isEntryScript)
{
    printf("Script unloaded for player ID %d (isEntryScript: %s)", playerid, isEntryScript ? "Yes" : "No");
}
```

## Notes

note

This callback is called when you are **unloading** a side script (filterscript) at runtime.

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another.

-   [OnScriptLoadPlayer](https://open.mp/docs/scripting/callbacks/OnScriptLoadPlayer): This callback is called for each connected player when a script is loaded.
-   [OnPlayerConnect](https://open.mp/docs/scripting/callbacks/OnPlayerConnect): This callback is called when a player connects to the server.
-   [OnPlayerDisconnect](https://open.mp/docs/scripting/callbacks/OnPlayerDisconnect): This callback is called when a player leaves the server.
