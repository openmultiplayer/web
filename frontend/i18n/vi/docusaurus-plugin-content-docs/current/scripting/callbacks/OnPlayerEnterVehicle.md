---
title: OnPlayerEnterVehicle
description: Callback này được gọi khi một người chơi bắt đầu vào một phương tiện, có nghĩa là người chơi chưa vào phương tiện vào thời điểm callback này được gọi.
tags: ["player", "vehicle"]
---

## Mô Tả

Callback này được gọi khi một người chơi bắt đầu vào một phương tiện, có nghĩa là người chơi chưa vào phương tiện vào thời điểm callback này được gọi.

| Tên          | Mô Tả                                                  |
| ------------ | ------------------------------------------------------ |
| playerid     | ID của người chơi đang cố gắng vào một phương tiện.   |
| vehicleid    | ID của phương tiện mà người chơi đang cố gắng vào.   |
| ispassenger  | 0 nếu vào với vai trò tài xế. 1 nếu vào với vai trò hành khách. |

## Trả Về

Callback này luôn được gọi đầu tiên trong filterscripts.

## Ví Dụ

```c
public OnPlayerEnterVehicle(playerid, vehicleid, ispassenger)
{
    new string[128];
    format(string, sizeof(string), "Bạn đang vào phương tiện %i", vehicleid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Ghi Chú

:::tip

- Callback này được gọi khi người chơi BẮT ĐẦU vào một phương tiện, không phải khi họ ĐÃ vào phương tiện. Xem [OnPlayerStateChange](OnPlayerStateChange).
- Callback này vẫn được gọi nếu người chơi bị từ chối vào phương tiện (ví dụ: phương tiện bị khóa hoặc đầy).

:::

## Các Callbacks Liên Quan

Các callback sau đây có thể hữu ích vì chúng liên quan đến callback này theo một cách nào đó.

- [OnPlayerExitVehicle](OnPlayerExitVehicle): Callback này được gọi khi một người chơi rời khỏi một phương tiện.
- [OnPlayerStateChange](OnPlayerStateChange): Callback này được gọi khi một người chơi thay đổi trạng thái.

## Các Hàm Liên Quan

Các hàm sau đây có thể hữu ích vì chúng liên quan đến callback này theo một cách nào đó.

- [PutPlayerInVehicle](../functions/PutPlayerInVehicle): Đưa một người chơi vào một phương tiện.
- [GetPlayerVehicleSeat](../functions/GetPlayerVehicleSeat): Kiểm tra ghế mà người chơi đang ngồi.