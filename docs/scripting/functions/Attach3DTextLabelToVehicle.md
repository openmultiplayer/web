---
title: "Attach3DTextLabelToVehicle | open.mp"
description: "Attaches a 3D Text Label to a specific vehicle."
canonical: https://open.mp/docs/scripting/functions/Attach3DTextLabelToVehicle
language: en
---

# Attach3DTextLabelToVehicle

## Description

Attaches a 3D Text Label to a specific vehicle.

| Name | Description |
| --- | --- |
| Text3D:textid | The 3D Text Label you want to attach. |
| parentid | The vehicle you want to attach the 3D Text Label to. |
| Float:offsetX | The Offset-X coordinate of the player vehicle (the vehicle is `0.0, 0.0, 0.0`). |
| Float:offsetY | The Offset-Y coordinate of the player vehicle (the vehicle is `0.0, 0.0, 0.0`). |
| Float:offsetZ | The Offset-Z coordinate of the player vehicle (the vehicle is `0.0, 0.0, 0.0`). |

## Returns

This function does not return any specific values.

## Examples

```c
new
    Text3D:gVehicle3dText[MAX_VEHICLES], // Creating the TextLabel for later use
    gVehicleId;

public OnGameModeInit()
{
    gVehicleId = CreateVehicle(510, 0.0, 0.0, 15.0, 5, 0, 120); // Creating the Vehicle.
    gVehicle3dText[gVehicleId] = Create3DTextLabel("Example Text", 0xFF0000AA, 0.0, 0.0, 0.0, 50.0, 0, 1);
    Attach3DTextLabelToVehicle(gVehicle3dText[gVehicleId], gVehicleId, 0.0, 0.0, 2.0); // Attaching Text Label To Vehicle.
    return 1;
}

public OnGameModeExit()
{
    Delete3DTextLabel(gVehicle3dText[gVehicleId]);
    return 1;
}
```

## Related Functions

-   [Create3DTextLabel](https://open.mp/docs/scripting/functions/Create3DTextLabel): Create a 3D text label.
-   [Delete3DTextLabel](https://open.mp/docs/scripting/functions/Delete3DTextLabel): Delete a 3D text label.
-   [Get3DTextLabelAttachedData](https://open.mp/docs/scripting/functions/Get3DTextLabelAttachedData): Gets the 3D text label attached data.
-   [Attach3DTextLabelToPlayer](https://open.mp/docs/scripting/functions/Attach3DTextLabelToPlayer): Attach a 3D text label to a player.
-   [Update3DTextLabelText](https://open.mp/docs/scripting/functions/Update3DTextLabelText): Change the text of a 3D text label.
-   [CreatePlayer3DTextLabel](https://open.mp/docs/scripting/functions/CreatePlayer3DTextLabel): Create A 3D text label for one player.
-   [DeletePlayer3DTextLabel](https://open.mp/docs/scripting/functions/DeletePlayer3DTextLabel): Delete a player's 3D text label.
-   [UpdatePlayer3DTextLabelText](https://open.mp/docs/scripting/functions/UpdatePlayer3DTextLabelText): Change the text of a player's 3D text label.
