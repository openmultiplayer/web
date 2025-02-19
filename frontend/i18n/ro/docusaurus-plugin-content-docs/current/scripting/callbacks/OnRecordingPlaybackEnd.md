---
title: OnRecordingPlaybackEnd
sidebar_label: OnRecordingPlaybackEnd
description: Acest callback este apelat atunci când un fișier înregistrat care este reprodus cu NPCStartRecordingPlayback a ajuns la final.
tags: []
---

## Descriere

Acest callback este apelat atunci când un fișier înregistrat care este reprodus cu NPCStartRecordingPlayback a ajuns la final.

## Exemple

```c
public OnRecordingPlaybackEnd()
{
    StartRecordingPlayback(PLAYER_RECORDING_TYPE_DRIVER, "all_around_lv_bus"); //Acest lucru ar porni din nou fișierul înregistrat odată ce se termină reproducerea.
}
```