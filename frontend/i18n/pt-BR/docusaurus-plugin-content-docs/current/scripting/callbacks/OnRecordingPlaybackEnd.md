---
title: OnRecordingPlaybackEnd
sidebar_label: OnRecordingPlaybackEnd
description: Essa callback é executada quando uma gravação de NPC reproduzida com a função StartRecordingPlayback finaliza sua reprodução.
tags: []
---

## Descrição

Essa callback é executada quando uma gravação de NPC reproduzida com a função StartRecordingPlayback finaliza sua reprodução.

## Exemplos

```c
public OnRecordingPlaybackEnd()
{
    StartRecordingPlayback(PLAYER_RECORDING_TYPE_DRIVER, "all_around_lv_bus"); //Isso fará com que o record seja iniciado novamente ao finalizar sua reprodução.
}
```
