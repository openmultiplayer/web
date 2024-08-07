---
title: OnPlayerExitVehicle
description: Callback này được gọi khi một người chơi bắt đầu thoát khỏi một phương tiện.
tags: ["player", "vehicle"]
---

## Mô Tả

Callback này được gọi khi một người chơi bắt đầu thoát khỏi một phương tiện.

| Tên        | Mô Tả                                             |
| ---------- | ------------------------------------------------- |
| playerid   | ID của người chơi đang thoát khỏi phương tiện.   |
| vehicleid  | ID của phương tiện mà người chơi đang thoát khỏi.|

## Trả Về

Callback này luôn được gọi đầu tiên trong filterscripts.

## Ví Dụ

```c
public OnPlayerExitVehicle(playerid, vehicleid)
{
    new string[64];
    format(string, sizeof(string), "INFO: Bạn đang thoát khỏi phương tiện %i", vehicleid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Ghi Chú

:::warning

- Không được gọi nếu người chơi bị rơi khỏi xe đạp hoặc bị loại khỏi phương tiện bằng các phương pháp khác như sử dụng [SetPlayerPos](../functions/SetPlayerPos).
- Bạn cần sử dụng [OnPlayerStateChange](OnPlayerStateChange) và kiểm tra xem trạng thái cũ của họ là `PLAYER_STATE_DRIVER` hoặc `PLAYER_STATE_PASSENGER` và trạng thái mới của họ là `PLAYER_STATE_ONFOOT`.

:::

## Các Callbacks Liên Quan

Các callback sau đây có thể hữu ích vì chúng liên quan đến callback này theo một cách nào đó.

- [OnPlayerEnterVehicle](OnPlayerEnterVehicle): Callback này được gọi khi một người chơi bắt đầu vào một phương tiện.
- [OnPlayerStateChange](OnPlayerStateChange): Callback này được gọi khi một người chơi thay đổi trạng thái.

## Các Hàm Liên Quan

Các hàm sau đây có thể hữu ích vì chúng liên quan đến callback này theo một cách nào đó.

- [RemovePlayerFromVehicle](../functions/RemovePlayerFromVehicle): Ném một người chơi ra khỏi phương tiện của họ.
- [GetPlayerVehicleSeat](../functions/GetPlayerVehicleSeat): Kiểm tra ghế mà người chơi đang ngồi.