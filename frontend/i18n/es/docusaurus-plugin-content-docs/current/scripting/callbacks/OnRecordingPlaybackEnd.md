---
título: OnRecordingPlaybackEnd
descripción: Este callback se llama cuando un archivo grabado siendo reproduciendo con NPCStartRecordingPlayback llega a su fin.
tags: []
---

## Description

Este callback se llama cuando un archivo grabado siendo reproduciendo con NPCStartRecordingPlayback llega a su fin.

## Ejemplos

```c
public OnRecordingPlaybackEnd()
{
    StartRecordingPlayback(PLAYER_RECORDING_TYPE_DRIVER, "all_around_lv_bus"); //Esto iniciaría el archivo grabado nuevamente una vez que termine de reproducirse.
}
```
