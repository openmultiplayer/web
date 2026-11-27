---
title: "StopRecordingPlayback | open.mp"
description: "This will stop the current .rec file which is being ran by the NPC, making it stay idle until some other order is given."
canonical: https://open.mp/docs/scripting/functions/StopRecordingPlayback
language: en
---

# StopRecordingPlayback

warning

This function is deprecated. Please see [NPC\_StopPlayback](https://open.mp/docs/scripting/functions/NPC_StopPlayback).

## Description

This will stop the current .rec file which is being ran by the NPC, making it stay idle until some other order is given.

## Examples

```c
public OnNPCExitVehicle(vehicleid, seatid)
{
    StopRecordingPlayback();
}
```

## Related Functions

-   [StartRecordingPlayback](https://open.mp/docs/scripting/functions/StartRecordingPlayback): Stops reproducing a .rec file.
