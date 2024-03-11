---
title: AddSimpleModel
description: Adds a new custom simple object model for download.
tags: ["custom model", "simple model"]
---

<VersionWarn version='SA-MP 0.3.DL R1' />

## Description

Adds a new custom simple object model for download. The model files will be stored in player's Documents\GTA San Andreas User Files\SAMP\cache under the Server IP and Port folder in a CRC-form file name.

| Name                   | Description                                                                                                                 |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| virtualWorld           | The virtual world ID to make the model available at. Use -1 for all worlds.                                                 |
| baseid                 | The base object model ID to use (original object to use when download is failed).                                           |
| newid                  | The new object model ID ranged from -1000 to -30000 (29000 slots) to be used later with CreateObject or CreatePlayerObject. |
| const dff[]            | Name of the .dff model collision file located in models server folder by default (artpath setting)                          |
| const textureLibrary[] | Name of the .txd model texture file located in models server folder by default (artpath setting).                           |

## Returns

**1:** The function executed successfully.

**0:** The function failed to execute.

## Examples

```c
public OnGameModeInit()
{
    AddSimpleModel(-1, 19379, -2000, "wallzzz.dff", "wallzzz.txd");
    return 1;
}
```

```c
AddSimpleModel(-1, 19379, -2000, "wallzzz.dff", "wallzzz.txd");
```

## Notes

:::tip

**useartwork** or **artwork.enable** must be enabled first in server settings in order for this to work.

When `virtualworld` is set, the models will be downloaded once the player enters the specific world.

:::

:::warning

There are currently no restrictions on when you can call this function, but be aware that if you do not call them inside [OnFilterScriptInit](../callbacks/OnFilterScriptInit)/[OnGameModeInit](../callbacks/OnGameModeInit), you run the risk that some players, who are already on the server, may not have downloaded the models.

:::

## Related Functions

- [IsValidCustomModel](IsValidCustomModel): Checks if a custom model ID is valid.
- [GetCustomModelPath](GetCustomModelPath): Get a custom model path.

## Related Callbacks

- [OnPlayerFinishedDownloading](../callbacks/OnPlayerFinishedDownloading): Called when a player finishes downloading custom models.
