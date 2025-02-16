---
title: OnPlayerEnterPlayerGangZone
sidebar_label: OnPlayerEnterPlayerGangZone
description: Callback này được gọi khi một người chơi vào khu vực băng nhóm của người chơi.
tags: ["player", "gangzone"]
---

<VersionWarn name='callback' version='omp v1.1.0.2612' />

## Mô Tả

Callback này được gọi khi một người chơi vào khu vực băng nhóm của người chơi.

| Tên       | Mô Tả                                              |
| --------- | -------------------------------------------------- |
| playerid  | ID của người chơi đã vào khu vực băng nhóm của người chơi. |
| zoneid    | ID của khu vực băng nhóm của người chơi mà người chơi vào. |

## Trả Về

Callback này luôn được gọi đầu tiên trong gamemode.

## Ví Dụ

```c
public OnPlayerEnterPlayerGangZone(playerid, zoneid)
{
    new string[128];
    format(string, sizeof(string), "Bạn đã vào khu vực băng nhóm của người chơi %i", zoneid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Các Callbacks Liên Quan

Các callback sau đây có thể hữu ích vì chúng liên quan đến callback này theo một cách nào đó.

- [OnPlayerLeavePlayerGangZone](OnPlayerLeavePlayerGangZone): Callback này được gọi khi một người chơi rời khỏi khu vực băng nhóm của người chơi.

## Các Hàm Liên Quan

Các hàm sau đây có thể hữu ích vì chúng liên quan đến callback này theo một cách nào đó.

- [CreatePlayerGangZone](../functions/CreatePlayerGangZone): Tạo khu vực băng nhóm của người chơi.
- [PlayerGangZoneDestroy](../functions/PlayerGangZoneDestroy): Hủy bỏ khu vực băng nhóm của người chơi.
- [UsePlayerGangZoneCheck](../functions/UsePlayerGangZoneCheck): Kích hoạt callback khi một người chơi vào khu vực này.