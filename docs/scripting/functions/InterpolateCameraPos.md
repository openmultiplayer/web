---
title: "InterpolateCameraPos | open.mp"
description: "Move a player's camera from one position to another, within the set time."
canonical: https://open.mp/docs/scripting/functions/InterpolateCameraPos
language: en
---

# InterpolateCameraPos

## Description

Move a player's camera from one position to another, within the set time. Useful for scripted cut scenes

| Name | Description |
| --- | --- |
| playerid | The ID of the player the camera should be moved for |
| Float:fromX | The X position the camera should start to move from |
| Float:fromY | The Y position the camera should start to move from |
| Float:fromZ | The Z position the camera should start to move from |
| Float:toX | The X position the camera should move to |
| Float:toY | The Y position the camera should move to |
| Float:toZ | The Z position the camera should move to |
| time | Time in milliseconds |
| CAM\_MOVE:cut | The [jumpcut](https://open.mp/docs/scripting/resources/cameracutstyles) to use. Defaults to CAMERA\_CUT. Set to CAMERA\_MOVE for a smooth movement |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/moveme", true))
    {
        TogglePlayerSpectating(playerid, true);
        InterpolateCameraPos(playerid, 0.0, 0.0, 10.0, 1000.0, 1000.0, 30.0, 10000, CAMERA_MOVE);
        //Move the player's camera from point A to B in 10000 milliseconds (10 seconds).
        return 1;
    }
    return 0;
}
```

## Notes

tip

-   Use [TogglePlayerSpectating](https://open.mp/docs/scripting/functions/TogglePlayerSpectating) to make objects stream in for the player while the camera is moving and remove the HUD.
-   The player's camera can be reset to behind the player with [SetCameraBehindPlayer](https://open.mp/docs/scripting/functions/SetCameraBehindPlayer).

## Related Functions

-   [InterpolateCameraLookAt](https://open.mp/docs/scripting/functions/InterpolateCameraLookAt): Move a player's camera view from one location to another.
-   [SetPlayerCameraPos](https://open.mp/docs/scripting/functions/SetPlayerCameraPos): Set a player's camera position.
-   [SetPlayerCameraLookAt](https://open.mp/docs/scripting/functions/SetPlayerCameraLookAt): Set where a player's camera should face.

## Related Resources

-   [Camera Cut Styles](https://open.mp/docs/scripting/resources/cameracutstyles)
