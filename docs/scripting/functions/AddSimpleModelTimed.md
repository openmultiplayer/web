---
title: "AddSimpleModelTimed | open.mp"
description: "Adds a new custom simple object model for download."
canonical: https://open.mp/docs/scripting/functions/AddSimpleModelTimed
language: en
---

# AddSimpleModelTimed

warning

This function was added in SA-MP 0.3.DL R1 and will not work in earlier versions!

## Description

Adds a new custom simple [object model](https://open.mp/docs/scripting/functions/CreateObject) for download. The model files will be stored in player's `Documents\GTA San Andreas User Files\SAMP\cache` under the Server IP and Port folder in a [CRC-form](https://en.wikipedia.org/wiki/Cyclic_redundancy_check) file name.

| Name | Description |
| --- | --- |
| virtualWorld | The [virtual world ID](https://open.mp/docs/scripting/functions/SetPlayerVirtualWorld) to make the model available at. Use -1 for all worlds. |
| baseid | The base [object model ID](https://models.open.mp/?cat=objects) to use (original object to use when download is failed). |
| newid | The new object model ID ranged from -1000 to -30000 (29000 slots) to be used later with [CreateObject](https://open.mp/docs/scripting/functions/CreateObject) or [CreatePlayerObject](https://open.mp/docs/scripting/functions/CreatePlayerObject). |
| const dff\[\] | Name of the **.dff** model collision file located in `models` server folder by default ([artpath setting](https://open.mp/docs/server/server.cfg#custom-models)). |
| const textureLibrary\[\] | Name of the **.txd** model texture file located in `models` server folder by default ([artpath setting](https://open.mp/docs/server/server.cfg#custom-models)). |
| timeOn | The [world game time (hour)](https://open.mp/docs/scripting/functions/SetWorldTime) this object will appear |
| timeOff | The [world game time (hour)](https://open.mp/docs/scripting/functions/SetWorldTime) this object will disappear |

## Returns

**1:** The function executed successfully.

**0:** The function failed to execute.

## Examples

```c
public OnGameModeInit()
{
    AddSimpleModelTimed(-1, 19379, -2000, "wallzzz.dff", "wallzzz.txd", 9, 18); // This wall only renders from 9:00 am to 6:00 pm
    return 1;
}
```

## Notes

note

-   **useartwork** or **artwork.enable** must be enabled first in [server settings](https://open.mp/docs/server/server.cfg#custom-models) in order for this to work.
-   When `virtualworld` is set, the [models will be downloaded once the player enters the specific world](https://open.mp/docs/scripting/callbacks/OnPlayerFinishedDownloading).

warning

There are currently no restrictions on when you can call this function, but be aware that if you do not call them inside [OnFilterScriptInit](https://open.mp/docs/scripting/callbacks/OnFilterScriptInit)/[OnGameModeInit](https://open.mp/docs/scripting/callbacks/OnGameModeInit), you run the risk that some players, who are already on the server, may not have downloaded the models.

## Related Functions

-   [AddSimpleModel](https://open.mp/docs/scripting/functions/AddSimpleModel): Adds a new custom simple object model for download.
-   [IsValidCustomModel](https://open.mp/docs/scripting/functions/IsValidCustomModel): Checks if a custom model ID is valid.
-   [GetCustomModelPath](https://open.mp/docs/scripting/functions/GetCustomModelPath): Get a custom model path.

## Related Callbacks

-   [OnPlayerFinishedDownloading](https://open.mp/docs/scripting/callbacks/OnPlayerFinishedDownloading): Called when a player finishes downloading custom models.
