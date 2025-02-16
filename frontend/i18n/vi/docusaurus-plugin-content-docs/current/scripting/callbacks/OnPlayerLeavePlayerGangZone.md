---
title: OnPlayerLeavePlayerGangZone
sidebar_label: OnPlayerLeavePlayerGangZone
description: Callback này được gọi khi một người chơi rời khỏi gangzone của người chơi.
tags: ["player", "gangzone"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Mô Tả

Callback này được gọi khi một người chơi rời khỏi gangzone của người chơi.

| Tên      | Mô Tả                                                    |
| -------- | -------------------------------------------------------- |
| playerid | ID của người chơi đã rời khỏi gangzone của người chơi. |
| zoneid   | ID của gangzone của người chơi mà người chơi đã rời khỏi. |

## Trả Về

Callback này luôn được gọi đầu tiên trong gamemode.

## Ví Dụ

```c
public OnPlayerLeavePlayerGangZone(playerid, zoneid)
{
    new string[128];
    format(string, sizeof(string), "Bạn đã rời khỏi gangzone của người chơi %i", zoneid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Callbacks Liên Quan

Các callback sau có thể hữu ích, vì chúng liên quan đến callback này theo cách này hay cách khác:

- [OnPlayerEnterPlayerGangZone](OnPlayerEnterPlayerGangZone): Callback này được gọi khi một người chơi vào một gangzone của người chơi.

## Hàm Liên Quan

Các hàm sau có thể hữu ích, vì chúng liên quan đến callback này theo cách này hay cách khác:

- [CreatePlayerGangZone](../functions/CreatePlayerGangZone): Tạo gangzone của người chơi.
- [PlayerGangZoneDestroy](../functions/PlayerGangZoneDestroy): Xóa gangzone của người chơi.
- [UsePlayerGangZoneCheck](../functions/UsePlayerGangZoneCheck): Kích hoạt callback khi một người chơi rời khỏi gangzone này.