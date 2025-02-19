---
title: NPC:OnRecordingPlaybackEnd
sidebar_label: NPC:OnRecordingPlaybackEnd
description: Cette callback est appelée lorsqu'un fichier enregistré en cours de reproduction avec NPC:StartRecordingPlayback a atteint sa fin.
tags: []
---

## Paramètres

Cette callback est appelée lorsqu'un fichier enregistré en cours de reproduction avec NPC:StartRecordingPlayback a atteint sa fin.

## Description

```c
public OnRecordingPlaybackEnd()
{
    StartRecordingPlayback(PLAYER_RECORDING_TYPE_DRIVER, "all_around_lv_bus"); //Cela redémarrerait le fichier enregistré une fois la reproduction terminée.
}
```
