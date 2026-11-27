---
title: "InterpolateCameraLookAt | open.mp"
description: "Interpolate a player's camera's 'look at' point between two coordinates with a set speed."
canonical: https://open.mp/docs/scripting/functions/InterpolateCameraLookAt
language: en
---

# InterpolateCameraLookAt

## Description

Interpolate a player's camera's 'look at' point between two coordinates with a set speed. Can be be used with [InterpolateCameraPos](https://open.mp/docs/scripting/functions/InterpolateCameraPos).

| Name | Description |
| --- | --- |
| playerid | The ID of the player the camera should be moved for |
| Float:fromX | The X position the camera should start to move from |
| Float:fromY | The Y position the camera should start to move from |
| Float:fromZ | The Z position the camera should start to move from |
| Float:toX | The X position the camera should move to |
| Float:toY | The Y position the camera should move to |
| Float:toZ | The Z position the camera should move to |
| time | Time in milliseconds to complete interpolation |
| CAM\_MOVE:cut | The ['jumpcut'](https://open.mp/docs/scripting/resources/cameracutstyles) to use. Defaults to CAMERA\_CUT (pointless). Set to CAMERA\_MOVE for interpolation. |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/rotateme", true))
    {
        TogglePlayerSpectating(playerid, true);
        InterpolateCameraLookAt(playerid, 50.0, 50.0, 10.0, -50.0, 50.0, 10.0, 10000, CAMERA_MOVE);
        //                                 x1    y1    z1     x2    y2    z2
        // The camera starts off looking at (x1, y1, z1). It will then rotate and after
        // 10000 milliseconds (10 seconds) it will be looking at (x2, y2, z2).
        return 1;
    }
    return 0;
}
```

## Notes

tip

-   Use [TogglePlayerSpectating](https://open.mp/docs/scripting/functions/TogglePlayerSpectating) to make objects stream in for the player while the camera is moving.
-   You can reset the camera behind the player with [SetCameraBehindPlayer](https://open.mp/docs/scripting/functions/SetCameraBehindPlayer).

## Related Functions

-   [InterpolateCameraPos](https://open.mp/docs/scripting/functions/InterpolateCameraPos): Move a player's camera from one location to another.
-   [SetPlayerCameraLookAt](https://open.mp/docs/scripting/functions/SetPlayerCameraLookAt): Set where a player's camera should face.
-   [SetPlayerCameraPos](https://open.mp/docs/scripting/functions/SetPlayerCameraPos): Set a player's camera position.

## Related Resources

-   [Camera Cut Styles](https://open.mp/docs/scripting/resources/cameracutstyles)
