---
title: OnRecordingPlaybackEnd
description: Ovaj callback je pozvan kada snimljeni fajl koji je reproduciran sa "StartRecordingPlayback" došao do kraja.
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3a i ne radi u nižim verzijama!

:::

## Deskripcija

Ovaj callback je pozvan kada snimljeni fajl koji je reproduciran sa "StartRecordingPlayback" došao do kraja.

## Primjeri

```c
public OnRecordingPlaybackEnd()
{
    StartRecordingPlayback(PLAYER_RECORDING_TYPE_DRIVER, "all_around_lv_bus"); //Ovo će pokrenuti snimljeni fajl ponovo nakon što se prestane reproducirati.
}
```

## Related Functions

- [StartRecordingPlayback](StartRecordingPlayback): Počinje da reproducita već snimljeni .rec fajl.
- [StopRecordingPlayback](StopRecordingPlayback): Prestaje da reproducira .rec fajl.
