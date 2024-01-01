---
title: OnRecordingPlaybackEnd
description: Essa callback é executada quando uma gravação de NPC reproduzida com a função StartRecordingPlayback finaliza sua reprodução.
tags: []
---

<VersionWarn name='NPC callback' version='SA-MP 0.3a' />

## Descrição

Essa callback é executada quando uma gravação de NPC reproduzida com a função StartRecordingPlayback finaliza sua reprodução.

## Exemplos

```c
public OnRecordingPlaybackEnd()
{
    StartRecordingPlayback(PLAYER_RECORDING_TYPE_DRIVER, "all_around_lv_bus"); //Isso fará com que o record seja iniciado novamente ao finalizar sua reprodução.
}
```
