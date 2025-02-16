---
title: OnRecordingPlaybackEnd
description: Ovaj callback je pozvan kada snimljeni fajl koji je reproduciran sa "NPCStartRecordingPlayback" došao do kraja.
tags: []
---

## Deskripcija

Ovaj callback je pozvan kada snimljeni fajl koji je reproduciran sa "NPCStartRecordingPlayback" došao do kraja.

## Primjeri

```c
public OnRecordingPlaybackEnd()
{
    StartRecordingPlayback(PLAYER_RECORDING_TYPE_DRIVER, "all_around_lv_bus"); //Ovo će pokrenuti snimljeni fajl ponovo nakon što se prestane reproducirati.
}
```

## Related Functions

- [NPC:StartRecordingPlayback](NPC:StartRecordingPlayback.md): Počinje da reproducita već snimljeni .rec fajl.
- [NPC:StopRecordingPlayback](NPC:StopRecordingPlayback.md): Prestaje da reproducira .rec fajl.
