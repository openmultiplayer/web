---
title: OnRecordingPlaybackEnd
sidebar_label: OnRecordingPlaybackEnd
description: Deze callback wordt aangeroepen wanneer een opgenomen bestand dat wordt afgespeeld met StartRecordingPlayback het einde heeft bereikt.
tags: []
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een .rec bestand, dat wordt afgespeeld met [StartRecordingPlayback](../functions/StartRecordingPlayback), het einde heeft bereikt.

## Voorbeelden

```c
public OnRecordingPlaybackEnd()
{
    StartRecordingPlayback(PLAYER_RECORDING_TYPE_DRIVER, "all_around_lv_bus"); // Dit speelt de opname opnieuw af zodra het einde is bereikt.
}
```

## Gerelateerde Functies

- [StartRecordingPlayback](../functions/StartRecordingPlayback): Start het afspelen van een al opgenomen .rec bestand.
- [StopRecordingPlayback](../functions/StopRecordingPlayback): Stop het afspelen van een .rec bestand.
