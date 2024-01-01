---
title: StopRecordingPlayback
description: This will stop the current .rec file which is being ran by the NPC, making it stay idle until some other order is given.
tags: []
---

<VersionWarn name='callback' version='SA-MP 0.3a' />

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

- [StartRecordingPlayback](StartRecordingPlayback): Stops reproducing a .rec file.
