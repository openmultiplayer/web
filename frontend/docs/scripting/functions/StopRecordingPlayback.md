---
title: StopRecordingPlayback
sidebar_label: StopRecordingPlayback
description: This will stop the current .rec file which is being ran by the NPC, making it stay idle until some other order is given.
tags: []
---

:::warning

This function is deprecated. Please see [NPC_StopPlayback](NPC_StopPlayback).

:::

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
