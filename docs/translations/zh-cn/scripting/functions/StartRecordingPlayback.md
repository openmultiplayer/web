---
title: StartRecordingPlayback
description: This will run a .rec file which has to be saved in the npcmodes/recordings folder. These files allow the NPC to follow certain actions. Their actions can be recorded manually. For more information, check the related functions.
tags: []
---

## Description

This will run a .rec file which has to be saved in the npcmodes/recordings folder. These files allow the NPC to follow certain actions. Their actions can be recorded manually. For more information, check the related functions.

| Name         | Description                                                     |
| ------------ | --------------------------------------------------------------- |
| playbacktype | The [type](../resources/recordtypes) of recording to be loaded. |
| recordname[] | The filename to be loaded, without the .rec extension.          |

## Examples

```c
public OnNPCEnterVehicle(vehicleid, seatid)
{
    StartRecordingPlayback(PLAYER_RECORDING_TYPE_DRIVER, "at400_lv_to_sf_x1");
}
```

## Related Functions

- [StopRecordingPlayback](../functions/StopRecordingPlayback): Stops reproducing a .rec file.
