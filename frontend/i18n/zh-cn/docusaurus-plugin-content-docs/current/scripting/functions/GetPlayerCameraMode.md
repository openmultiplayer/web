---
title: GetPlayerCameraMode
sidebar_label: GetPlayerCameraMode
description: Returns the current GTA camera mode for the requested player.
tags: ["player", "camera"]
---

## Description

Returns the current GTA [camera mode](../resources/cameramodes) for the requested player. The camera modes are useful in determining whether a player is aiming, doing a passenger driveby etc.

| Name     | Description                                        |
| -------- | -------------------------------------------------- |
| playerid | The ID of the player whose camera mode to retrieve |

## Returns

The camera mode as an integer (or -1 if player is not connected)

## Examples

```c
/* when the player types 'cameramode' in to the chat box, they'll see this. */
public OnPlayerText(playerid, text[])
{
    if (strcmp(text, "cameramode", true) == 0)
    {
        new string[48];
        format(string, sizeof(string), "Your camera mode: %d", GetPlayerCameraMode(playerid));
        SendClientMessage(playerid, 0xA9C4E4FF, string);
    }
    return 0;
}
```

## Related Functions

- [GetPlayerCameraPos](GetPlayerCameraPos): Find out where the player's camera is.
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): Get the player's camera front vector
- [SetPlayerCameraPos](SetPlayerCameraPos): Set a player's camera position.
- [SetPlayerCameraLookAt](SetPlayerCameraLookAt): Set where a player's camera should face.
- [SetCameraBehindPlayer](SetCameraBehindPlayer): Set a player's camera behind them.

## Related Resources

- [Camera Modes](../resources/cameramodes)
