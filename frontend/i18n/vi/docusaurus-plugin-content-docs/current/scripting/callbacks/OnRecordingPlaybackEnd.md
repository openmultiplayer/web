---
title: OnRecordingPlaybackEnd
sidebar_label: OnRecordingPlaybackEnd
description: Callback này được gọi khi một tập tin đã được ghi lại và phát lại bằng StartRecordingPlayback đã đến cuối.
tags: []
---

## Mô tả

Callback này được gọi khi một tập tin đã được ghi lại và phát lại bằng NPC:[StartRecordingPlayback](../functions/StartRecordingPlayback) đã đến cuối.

## Ví dụ

```c
public OnRecordingPlaybackEnd()
{
    StartRecordingPlayback(PLAYER_RECORDING_TYPE_DRIVER, "all_around_lv_bus"); // Điều này sẽ bắt đầu lại tập tin đã ghi khi nó kết thúc phát lại.
}
```

## Các hàm liên quan

Các hàm sau có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó.

- [StartRecordingPlayback](../functions/StartRecordingPlayback): Bắt đầu phát lại một tập tin .rec đã được ghi lại.
- [StopRecordingPlayback](../functions/StopRecordingPlayback): Dừng phát lại một tập tin .rec.