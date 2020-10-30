---
title: OnRecordingPlaybackEnd
description: This callback is called when a recorded file being reproduced with NPCStartRecordingPlayback has reached to its end.
tags: []
---

import T from '../../../src/components/templates.js'

<T.VersionWarn name='NPC callback' version='SA-MP 0.3a' />

## Description

This callback is called when a recorded file being reproduced with NPC:StartRecordingPlayback has reached to its end.

## Examples

```c
public OnRecordingPlaybackEnd()
{
    StartRecordingPlayback(PLAYER_RECORDING_TYPE_DRIVER, "all_around_lv_bus"); //This would start the recorded file again once it finishes reproducing.
}
```
