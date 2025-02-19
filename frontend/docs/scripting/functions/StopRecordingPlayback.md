---
title: StopRecordingPlayback
sidebar_label: StopRecordingPlayback
description: This will stop the current .rec file which is being ran by the NPC, making it stay idle until some other order is given.
tags: []
---

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

- [StartRecordingPlayback](../functions/StartRecordingPlayback): Stops reproducing a .rec file.
