---
title: OnRecordingPlaybackEnd
description: Ce rappel est appelé lorsque qu'un fichier enregistré reproduit avec StartRecordingPlayback a atteint sa fin.
tags: []
---

<VersionWarn name='Rappel NPC' version='SA-MP 0.3a' />

## Description

Ce rappel est appelé lorsque qu'un fichier enregistré reproduit avec NPC:[StartRecordingPlayback](../functions/StartRecordingPlayback) a atteint sa fin.

## Exemples

```c
public OnRecordingPlaybackEnd()
{
    StartRecordingPlayback(PLAYER_RECORDING_TYPE_DRIVER, "all_around_lv_bus"); // Cela relancera le fichier enregistré une fois qu'il aura fini de se reproduire.
}
```

## Fonctions Relatives

Les fonctions suivantes peuvent être utiles, car elles sont liées à ce rappel d'une manière ou d'une autre.

- [StartRecordingPlayback](../functions/StartRecordingPlayback): Lance la reproduction d'un fichier .rec déjà enregistré.
- [StopRecordingPlayback](../functions/StopRecordingPlayback): Arrête la reproduction d'un fichier .rec.
