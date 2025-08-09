---
title: OnRecordingPlaybackEnd
sidebar_label: OnRecordingPlaybackEnd
description: این کالبک زمانی فراخوانده می‌شود که فایل ضبط شده در حال بازپخش با StartRecordingPlayback به انتها برسد.
tags: []
---

## توضیحات

این کالبک زمانی فراخوانده می‌شود که فایل .rec در حال بازپخش با [StartRecordingPlayback](../functions/StartRecordingPlayback) به انتها برسد.

## مثال‌ها

```c
public OnRecordingPlaybackEnd()
{
    StartRecordingPlayback(PLAYER_RECORDING_TYPE_DRIVER, "all_around_lv_bus"); // This will play the recording again once it has reached its end.
}
```

## توابع مرتبط

توابع زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [StartRecordingPlayback](../functions/StartRecordingPlayback): شروع بازپخش فایل .rec از قبل ضبط شده.
- [StopRecordingPlayback](../functions/StopRecordingPlayback): توقف بازپخش فایل .rec.