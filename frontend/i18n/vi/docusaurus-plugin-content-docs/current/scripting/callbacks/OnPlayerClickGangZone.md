---
title: OnPlayerClickGangZone
description: Callback này được gọi khi một người chơi nhấp chuột vào một gangzone trên bản đồ trong menu tạm dừng (bằng cách nhấp chuột phải).
tags: ["player", "gangzone"]
---

<VersionWarn name='callback' version='omp v1.1.0.2612' />

## Mô Tả

Callback này được gọi khi một người chơi nhấp chuột vào một gangzone trên bản đồ trong menu tạm dừng (bằng cách nhấp chuột phải).

| Tên       | Mô Tả                                                                           |
|-----------|---------------------------------------------------------------------------------|
| playerid  | ID của người chơi đã nhấp vào gangzone                                           |
| zoneid    | ID của gangzone mà người chơi đã nhấp vào                                         |

## Trả Về

Callback này không xử lý trả về.

Callback này luôn được gọi đầu tiên trong gamemode.

## Ví Dụ

```c
public OnPlayerClickGangZone(playerid, zoneid)
{
    new string[128];
    format(string, sizeof(string), "Bạn đã nhấp vào gangzone %i", zoneid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Các Hàm Liên Quan

- [GangZoneCreate](../functions/GangZoneCreate): Tạo một gangzone (khu vực radar có màu).
- [GangZoneDestroy](../functions/GangZoneDestroy): Hủy một gangzone.