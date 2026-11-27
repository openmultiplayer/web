---
title: "AddCharModel | open.mp"
description: "Adds a new custom character model for download."
canonical: https://open.mp/docs/scripting/functions/AddCharModel
language: en
---

# AddCharModel

warning

This function was added in SA-MP 0.3.DL R1 and will not work in earlier versions!

## Description

Adds a new custom [character model](https://open.mp/docs/scripting/functions/SetPlayerSkin) for download. The model files will be stored in player's `Documents\GTA San Andreas User Files\SAMP\cache` under the Server IP and Port folder in a [CRC-form](https://en.wikipedia.org/wiki/Cyclic_redundancy_check) file name.

| Name | Description |
| --- | --- |
| baseid | The base [skin model ID](https://open.mp/docs/scripting/resources/skins) to use (behavior of the character & original character to use when download is failed). |
| newid | The new skin model ID ranged from 20001 to 30000 (10000 slots) to be used later with [SetPlayerSkin](https://open.mp/docs/scripting/functions/SetPlayerSkin) |
| const dff\[\] | Name of the **.dff** model collision file located in `models` server folder by default ([artpath setting](https://open.mp/docs/server/server.cfg#custom-models)). |
| const textureLibrary\[\] | Name of the **.txd** model texture file located in `models` server folder by default ([artpath setting](https://open.mp/docs/server/server.cfg#custom-models)). |

## Returns

**1:** The function executed successfully.

**0:** The function failed to execute.

## Examples

```c
public OnGameModeInit()
{
    AddCharModel(305, 20001, "lvpdpc2.dff", "lvpdpc2.txd");
    AddCharModel(305, 20002, "lapdpd2.dff", "lapdpd2.txd");
    return 1;
}
```

## Notes

note

**useartwork** or **artwork.enable** must be enabled first in [server settings](https://open.mp/docs/server/server.cfg#custom-models) in order for this to work.

warning

There are currently no restrictions on when you can call this function, but be aware that if you do not call them inside [OnFilterScriptInit](https://open.mp/docs/scripting/callbacks/OnFilterScriptInit)/[OnGameModeInit](https://open.mp/docs/scripting/callbacks/OnGameModeInit), you run the risk that some players, who are already on the server, may not have downloaded the models.

## Related Functions

-   [SetPlayerSkin](https://open.mp/docs/scripting/functions/SetPlayerSkin): Set a player's skin.
