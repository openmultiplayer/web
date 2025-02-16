---
title: OnPlayerInteriorChange
description: Callback này được gọi khi một người chơi thay đổi nội thất.
tags: ["player"]
---

## Mô Tả

Callback này được gọi khi một người chơi thay đổi nội thất. Có thể được kích hoạt bởi `SetPlayerInterior` hoặc khi người chơi vào/ra khỏi một tòa nhà.

| Tên              | Mô Tả                                             |
|-------------------|---------------------------------------------------|
| playerid          | ID của người chơi đã thay đổi nội thất.          |
| newinteriorid     | Nội thất mà người chơi hiện đang ở.              |
| oldinteriorid     | Nội thất mà người chơi đã ở trước đó.            |

## Trả Về

Callback này luôn được gọi đầu tiên trong gamemode.

## Ví Dụ

```c
public OnPlayerInteriorChange(playerid, newinteriorid, oldinteriorid)
{
    new string[42];
    format(string, sizeof(string), "Bạn đã chuyển từ nội thất %d sang nội thất %d!", oldinteriorid, newinteriorid);
    SendClientMessage(playerid, COLOR_ORANGE, string);
    return 1;
}
```

## Các Callbacks Liên Quan

Các callback sau đây có thể hữu ích vì chúng liên quan đến callback này theo một cách nào đó.

- [OnPlayerStateChange](OnPlayerStateChange): Callback này được gọi khi một người chơi thay đổi trạng thái.

## Các Hàm Liên Quan

Các hàm sau đây có thể hữu ích vì chúng liên quan đến callback này theo một cách nào đó.

- [SetPlayerInterior](../functions/SetPlayerInterior): Đặt nội thất của một người chơi.
- [GetPlayerInterior](../functions/GetPlayerInterior): Lấy nội thất hiện tại của một người chơi.
- [LinkVehicleToInterior](../functions/LinkVehicleToInterior): Thay đổi nội thất mà một chiếc xe được nhìn thấy trong đó.
