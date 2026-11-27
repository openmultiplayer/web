---
title: "AttachPlayerObjectToVehicle | open.mp"
description: "Attach a player object to a vehicle."
canonical: https://open.mp/docs/scripting/functions/AttachPlayerObjectToVehicle
language: en
---

# AttachPlayerObjectToVehicle

## Description

Attach a player object to a vehicle.

| Name | Description |
| --- | --- |
| playerid | The ID of the player the object was created for. |
| objectid | The ID of the object to attach to the vehicle. |
| parentid | The ID of the vehicle to attach the object to. |
| Float:offsetX | The X position offset for attachment. |
| Float:offsetY | The Y position offset for attachment. |
| Float:offsetZ | The Z position offset for attachment. |
| Float:rotationX | The X rotation offset for attachment. |
| Float:rotationY | The Y rotation offset for attachment. |
| Float:rotationZ | The Z rotation offset for attachment. |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)
{
    if (newstate == PLAYER_STATE_DRIVER) // If player enters vehicle
    {
        // Attach massive cow.
        new cowObject = CreatePlayerObject(playerid, 16442, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
        new vehicleid = GetPlayerVehicleID(playerid);

        AttachPlayerObjectToVehicle(playerid, cowObject, vehicleid, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0);
    }
    return 1;
}
```

## Notes

note

You need to [create](https://open.mp/docs/scripting/functions/CreatePlayerObject) the object before attempting to attach it to a vehicle.

## Related Functions

-   [CreatePlayerObject](https://open.mp/docs/scripting/functions/CreatePlayerObject): Create an object for only one player.
-   [DestroyPlayerObject](https://open.mp/docs/scripting/functions/DestroyPlayerObject): Destroy a player object.
-   [IsValidPlayerObject](https://open.mp/docs/scripting/functions/IsValidPlayerObject): Checks if a certain player object is vaild.
-   [MovePlayerObject](https://open.mp/docs/scripting/functions/MovePlayerObject): Move a player object.
-   [StopPlayerObject](https://open.mp/docs/scripting/functions/StopPlayerObject): Stop a player object from moving.
-   [SetPlayerObjectRot](https://open.mp/docs/scripting/functions/SetPlayerObjectRot): Set the rotation of a player object.
-   [GetPlayerObjectPos](https://open.mp/docs/scripting/functions/GetPlayerObjectPos): Locate a player object.
-   [SetPlayerObjectPos](https://open.mp/docs/scripting/functions/SetPlayerObjectPos): Set the position of a player object.
-   [GetPlayerObjectRot](https://open.mp/docs/scripting/functions/GetPlayerObjectRot): Check the rotation of a player object.
-   [AttachPlayerObjectToPlayer](https://open.mp/docs/scripting/functions/AttachPlayerObjectToPlayer): Attach a player object to a player
-   [CreateObject](https://open.mp/docs/scripting/functions/CreateObject): Create an object.
-   [DestroyObject](https://open.mp/docs/scripting/functions/DestroyObject): Destroy an object.
-   [IsValidObject](https://open.mp/docs/scripting/functions/IsValidObject): Checks if a certain object is vaild.
-   [MoveObject](https://open.mp/docs/scripting/functions/MoveObject): Move a object.
-   [StopObject](https://open.mp/docs/scripting/functions/StopObject): Stop an object from moving.
-   [SetObjectPos](https://open.mp/docs/scripting/functions/SetObjectPos): Set the position of an object.
-   [SetObjectRot](https://open.mp/docs/scripting/functions/SetObjectRot): Set the rotation of an object.
-   [GetObjectPos](https://open.mp/docs/scripting/functions/GetObjectPos): Locate an object.
-   [GetObjectRot](https://open.mp/docs/scripting/functions/GetObjectRot): Check the rotation of an object.
-   [AttachObjectToPlayer](https://open.mp/docs/scripting/functions/AttachObjectToPlayer): Attach an object to a player.
