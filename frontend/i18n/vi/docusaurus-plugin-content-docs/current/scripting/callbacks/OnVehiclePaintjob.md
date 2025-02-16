---
title: OnVehiclePaintjob
description: Callback này được gọi khi một người chơi xem trước lớp sơn của một xe trong cửa hàng tùy chỉnh.
tags: ["vehicle"]
---

## Mô tả

Callback này được gọi khi một người chơi xem trước lớp sơn của một xe trong cửa hàng tùy chỉnh. Lưu ý, callback này không được gọi khi người chơi mua lớp sơn.

| Tên         | Mô tả                                                                 |
|-------------|-------------------------------------------------------------------------|
| playerid    | ID của người chơi đã thay đổi lớp sơn của xe.                         |
| vehicleid   | ID của xe đã thay đổi lớp sơn.                                         |
| paintjobid  | ID của lớp sơn mới.                                                     |

## Trả về

Luôn được gọi đầu tiên trong gamemode.

## Ví dụ

```c
public OnVehiclePaintjob(playerid, vehicleid, paintjobid)
{
    new string[128];
    format(string, sizeof(string), "Bạn đã thay đổi lớp sơn của xe thành %d!", paintjobid);
    SendClientMessage(playerid, 0x33AA33AA, string);
    return 1;
}
```

## Lưu ý

:::tip

Callback này không được gọi bởi ChangeVehiclePaintjob. Bạn có thể sử dụng OnVehicleChangePaintjob từ vSync để biết khi người chơi mua lớp sơn.

:::

## Các callback liên quan

Các callback sau có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó.

- [OnVehicleRespray](OnVehicleRespray): Callback này được gọi khi một xe được sơn lại.
- [OnVehicleMod](OnVehicleMod): Callback này được gọi khi một xe được tùy chỉnh.

## Các hàm liên quan

Các hàm sau có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó.

- [ChangeVehiclePaintjob](../functions/ChangeVehiclePaintjob): Thay đổi lớp sơn của xe.
- [ChangeVehicleColor](../functions/ChangeVehicleColor): Đặt màu của xe.