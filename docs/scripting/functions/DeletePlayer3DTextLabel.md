---
title: "DeletePlayer3DTextLabel | open.mp"
description: "Destroy a 3D text label that was created using CreatePlayer3DTextLabel."
canonical: https://open.mp/docs/scripting/functions/DeletePlayer3DTextLabel
language: en
---

# DeletePlayer3DTextLabel

## Description

Destroy a 3D text label that was created using [CreatePlayer3DTextLabel](https://open.mp/docs/scripting/functions/CreatePlayer3DTextLabel).

| Name | Description |
| --- | --- |
| playerid | The ID of the player whose 3D text label to delete. |
| PlayerText3D:textid | The ID of the player's 3D text label to delete. |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. This means the label specified doesn't exist.

## Examples

```c
new PlayerText3D:playerTextId[MAX_PLAYERS];

public OnPlayerSpawn(playerid)
{
    new
        name[MAX_PLAYER_NAME],
        Float:x, Float:y, Float:z,
        string[64];

    GetPlayerName(playerid, name, sizeof(name));
    GetPlayerPos(playerid, x, y, z);

    format(string, sizeof(string), "Hello %s!\nI'm at your position", name);
    playerTextId[playerid] = CreatePlayer3DTextLabel(playerid, string, 0x008080FF, x, y, z, 40.0);
    return 1;
}

public OnPlayerDisconnect(playerid, reason)
{
    DeletePlayer3DTextLabel(playerid, playerTextId[playerid]);
    return 1;
}
```

## Related Functions

-   [Create3DTextLabel](https://open.mp/docs/scripting/functions/Create3DTextLabel): Create a 3D text label.
-   [Attach3DTextLabelToPlayer](https://open.mp/docs/scripting/functions/Attach3DTextLabelToPlayer): Attach a 3D text label to a player.
-   [Attach3DTextLabelToVehicle](https://open.mp/docs/scripting/functions/Attach3DTextLabelToVehicle): Attach a 3D text label to a vehicle.
-   [Update3DTextLabelText](https://open.mp/docs/scripting/functions/Update3DTextLabelText): Change the text of a 3D text label.
-   [CreatePlayer3DTextLabel](https://open.mp/docs/scripting/functions/CreatePlayer3DTextLabel): Create A 3D text label for one player.
-   [UpdatePlayer3DTextLabelText](https://open.mp/docs/scripting/functions/UpdatePlayer3DTextLabelText): Change the text of a player's 3D text label.
-   [IsValidPlayer3DTextLabel](https://open.mp/docs/scripting/functions/IsValidPlayer3DTextLabel): Checks if a player's 3D text label is valid.
