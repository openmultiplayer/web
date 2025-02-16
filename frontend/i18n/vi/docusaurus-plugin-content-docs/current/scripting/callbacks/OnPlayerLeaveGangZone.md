---
title: OnPlayerLeaveGangZone
sidebar_label: OnPlayerLeaveGangZone
description: Callback này được gọi khi một người chơi rời khỏi gangzone.
tags: ["player", "gangzone"]
---

<VersionWarn name='callback' version='omp v1.1.0.2612' />

## Mô Tả

Callback này được gọi khi một người chơi rời khỏi gangzone.

| Tên      | Mô Tả                                                |
| -------- | ---------------------------------------------------- |
| playerid | ID của người chơi đã rời khỏi gangzone.             |
| zoneid   | ID của gangzone mà người chơi đã rời khỏi.           |

## Trả Về

Callback này luôn được gọi đầu tiên trong gamemode.

## Ví Dụ

```c
public OnPlayerLeaveGangZone(playerid, zoneid)
{
    new string[128];
    format(string, sizeof(string), "Bạn đã rời khỏi gangzone %i", zoneid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Callbacks Liên Quan

Các callback sau có thể hữu ích, vì chúng liên quan đến callback này theo cách này hay cách khác:

- [OnPlayerEnterGangZone](OnPlayerEnterGangZone): Callback này được gọi khi một người chơi vào một gangzone.

## Hàm Liên Quan

Các hàm sau có thể hữu ích, vì chúng liên quan đến callback này theo cách này hay cách khác:

- [GangZoneCreate](../functions/GangZoneCreate): Tạo một gangzone (khu vực radar có màu).
- [GangZoneDestroy](../functions/GangZoneDestroy): Xóa một gangzone.