---
title: OnPlayerEnterGangZone
sidebar_label: OnPlayerEnterGangZone
description: Callback này được gọi khi một người chơi vào một khu vực băng nhóm.
tags: ["player", "gangzone"]
---

<VersionWarn name='callback' version='omp v1.1.0.2612' />

## Mô Tả

Callback này được gọi khi một người chơi vào một khu vực băng nhóm.

| Tên       | Mô Tả                                      |
| --------- | ------------------------------------------ |
| playerid  | ID của người chơi đã vào khu vực băng nhóm. |
| zoneid    | ID của khu vực băng nhóm mà người chơi vào. |

## Trả Về

Callback này luôn được gọi đầu tiên trong gamemode.

## Ví Dụ

```c
public OnPlayerEnterGangZone(playerid, zoneid)
{
    new string[128];
    format(string, sizeof(string), "Bạn đã vào khu vực băng nhóm %i", zoneid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Các Callbacks Liên Quan

Các callback sau đây có thể hữu ích vì chúng liên quan đến callback này theo một cách nào đó.

- [OnPlayerLeaveGangZone](OnPlayerLeaveGangZone): Callback này được gọi khi một người chơi rời khỏi khu vực băng nhóm.

## Các Hàm Liên Quan

Các hàm sau đây có thể hữu ích vì chúng liên quan đến callback này theo một cách nào đó.

- [GangZoneCreate](../functions/GangZoneCreate): Tạo một khu vực băng nhóm (khu vực màu trên radar).
- [GangZoneDestroy](../functions/GangZoneDestroy): Hủy bỏ một khu vực băng nhóm.
- [UseGangZoneCheck](../functions/UseGangZoneCheck): Kích hoạt callback khi một người chơi vào khu vực này.