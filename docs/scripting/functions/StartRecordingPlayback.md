---
title: "StartRecordingPlayback | open.mp"
description: "This will run a .rec file which has to be saved in the npcmodes/recordings folder."
canonical: https://open.mp/docs/scripting/functions/StartRecordingPlayback
language: en
---

# StartRecordingPlayback

warning

This function is deprecated. Please see [NPC\_StartPlayback](https://open.mp/docs/scripting/functions/NPC_StartPlayback).

## Description

This will run a .rec file which has to be saved in the `npcmodes/recordings` folder. These files allow the NPC to follow certain actions. Their actions can be recorded manually. For more information, check the related functions.

| Name | Description |
| --- | --- |
| playbacktype | The [type](https://open.mp/docs/scripting/resources/recordtypes) of recording to be loaded. |
| recordname\[\] | The filename to be loaded, without the .rec extension. |

## Examples

```c
public OnNPCEnterVehicle(vehicleid, seatid)
{
    StartRecordingPlayback(PLAYER_RECORDING_TYPE_DRIVER, "at400_lv_to_sf_x1");
}
```

## Related Functions

-   [StopRecordingPlayback](https://open.mp/docs/scripting/functions/StopRecordingPlayback): Stops reproducing a .rec file.
