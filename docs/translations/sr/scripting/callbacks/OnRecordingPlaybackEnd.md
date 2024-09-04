---
title: OnRecordingPlaybackEnd
description: Ова повратна функција се позива када снимљена датотека која се репродукује помоћу StartRecordingPlayback достигне крај.
tags: []
---

## Опис

Ова повратна функција се позива када снимљена датотека која се репродукује помоћу NPC:[StartRecordingPlayback](../functions/StartRecordingPlayback) достигне крај.

## Пример

```c
public OnRecordingPlaybackEnd()
{
    StartRecordingPlayback(PLAYER_RECORDING_TYPE_DRIVER, "all_around_lv_bus"); //Ово ће поново покренути снимљену датотеку када заврши репродукцију.
}
```

## Повезане функције

Следеће функције могу бити корисне, јер су на неки начин повезане са овом повратном функцијом.

- [StartRecordingPlayback](../functions/StartRecordingPlayback):  Почиње репродукцију већ снимљене .rec датотеке.
- [StopRecordingPlayback](../functions/StopRecordingPlayback): Прекид репродукције .rec датотеке.
