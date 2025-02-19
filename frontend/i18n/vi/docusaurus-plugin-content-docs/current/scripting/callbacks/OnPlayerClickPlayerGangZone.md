---
title: OnPlayerClickPlayerGangZone
sidebar_label: OnPlayerClickPlayerGangZone
description: Callback này được gọi khi một người chơi nhấp vào gangzone của người chơi trên bản đồ trong menu tạm dừng (bằng cách nhấp chuột phải).
tags: ["player", "gangzone"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Mô Tả

Callback này được gọi khi một người chơi nhấp vào gangzone của người chơi trên bản đồ trong menu tạm dừng (bằng cách nhấp chuột phải).

| Tên       | Mô Tả                                                                                   |
|-----------|-----------------------------------------------------------------------------------------|
| playerid  | ID của người chơi đã nhấp vào gangzone của người chơi                                   |
| zoneid    | ID của gangzone của người chơi mà người chơi đã nhấp vào                                 |

## Trả Về

Callback này không xử lý trả về.

Callback này luôn được gọi đầu tiên trong gamemode.

## Ví Dụ

```c
public OnPlayerClickPlayerGangZone(playerid, zoneid)
{
    new string[128];
    format(string, sizeof(string), "Bạn đã nhấp vào gangzone của người chơi %i", zoneid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Các Hàm Liên Quan

- [CreatePlayerGangZone](../functions/CreatePlayerGangZone): Tạo một gangzone của người chơi.
- [PlayerGangZoneDestroy](../functions/PlayerGangZoneDestroy): Hủy một gangzone của người chơi.