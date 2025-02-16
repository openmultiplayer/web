---
title: OnEnterExitModShop
description: Callback này được gọi khi một người chơi vào hoặc ra khỏi cửa hàng độ xe.
tags: ["player"]
---

## Mô Tả

Callback này được gọi khi một người chơi vào hoặc ra khỏi cửa hàng độ xe.

| Tên         | Mô Tả                                                                                     |
| ------------ | ----------------------------------------------------------------------------------------- |
| playerid     | ID của người chơi đã vào hoặc ra khỏi cửa hàng độ xe.                                    |
| enterexit    | 1 nếu người chơi vào hoặc 0 nếu họ ra khỏi cửa hàng độ xe                                 |
| interiorid   | ID của nội thất của cửa hàng độ xe mà người chơi đang vào (hoặc 0 nếu đang ra ngoài)       |

## Trả Về

Callback này luôn được gọi đầu tiên trong filterscripts.

## Ví Dụ

```c
public OnEnterExitModShop(playerid, enterexit, interiorid)
{
    if (enterexit == 0) // Nếu enterexit là 0, điều này có nghĩa là họ đang ra ngoài
    {
        SendClientMessage(playerid, COLOR_WHITE, "Xe của bạn rất đẹp! Bạn đã bị đánh thuế $100.");
        GivePlayerMoney(playerid, -100);
    }
    return 1;
}
```

## Ghi Chú

:::warning

Lỗi Đã Biết:

- Người chơi va chạm khi họ vào cùng một cửa hàng độ xe.

:::

## Các Callback Liên Quan

Các callback sau đây có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó.

- [OnVehicleMod](OnVehicleMod): Callback này được gọi khi một phương tiện được độ.
- [OnVehicleRespray](OnVehicleRespray): Callback này được gọi khi một người chơi ra khỏi cửa hàng độ xe, ngay cả khi màu sắc không thay đổi.
- [OnVehiclePaintjob](OnVehiclePaintjob): Callback này được gọi khi một người chơi xem trước một lớp sơn cho phương tiện trong cửa hàng độ xe.

## Các Hàm Liên Quan

Các hàm sau đây có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó.

- [IsPlayerInModShop](../functions/IsPlayerInModShop): Kiểm tra xem người chơi có đang ở trong cửa hàng độ xe không.
- [AddVehicleComponent](../functions/AddVehicleComponent): Thêm một thành phần vào một phương tiện.