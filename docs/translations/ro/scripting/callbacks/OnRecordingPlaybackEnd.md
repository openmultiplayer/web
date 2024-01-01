---
title: OnRecordingPlaybackEnd
description: Acest callback este apelat atunci când un fișier înregistrat care este reprodus cu StartRecordingPlayback a ajuns la final.
tags: []
---

<VersionWarn name='NPC callback' version='SA-MP 0.3a' />

## Descriere

Acest callback este apelat atunci când un fișier înregistrat care este reprodus cu StartRecordingPlayback a ajuns la final.

## Exemple

```c
public OnRecordingPlaybackEnd()
{
    StartRecordingPlayback(PLAYER_RECORDING_TYPE_DRIVER, "all_around_lv_bus"); //Acest lucru ar porni din nou fișierul înregistrat odată ce se termină reproducerea.
}
```