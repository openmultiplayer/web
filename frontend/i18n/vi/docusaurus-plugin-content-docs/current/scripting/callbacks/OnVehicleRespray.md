---
title: OnVehicleRespray
sidebar_label: OnVehicleRespray
description: Callback này được gọi khi một người chơi rời khỏi cửa hàng tùy chỉnh, ngay cả khi không thay đổi màu sắc.
tags: ["vehicle"]
---

## Mô tả

Callback này được gọi khi một người chơi rời khỏi cửa hàng tùy chỉnh, ngay cả khi màu sắc của xe không thay đổi. Lưu ý, tên của callback này có thể gây hiểu lầm, các cửa hàng Pay 'n' Spray không gọi callback này.

| Tên        | Mô tả                                         |
| ---------- | --------------------------------------------- |
| playerid   | ID của người chơi đang lái xe.                |
| vehicleid  | ID của xe đã được sơn lại.                    |
| color1     | Màu sắc mà màu chính của xe đã được thay đổi. |
| color2     | Màu sắc mà màu phụ của xe đã được thay đổi.   |

## Trả về

Luôn được gọi đầu tiên trong gamemode.

## Ví dụ

```c
public OnVehicleRespray(playerid, vehicleid, color1, color2)
{
    new string[48];
    format(string, sizeof(string), "Bạn đã sơn lại xe %d thành màu %d và %d!", vehicleid, color1, color2);
    SendClientMessage(playerid, COLOR_GREEN, string);
    return 1;
}
```

## Lưu ý

:::tip

Callback này không được gọi bởi ChangeVehicleColor. Tên của callback này có thể gây hiểu lầm, và nó không được gọi cho các cửa hàng Pay 'n' Spray (chỉ các cửa hàng tùy chỉnh).

Fix ở đây: https://pastebin.com/G81da7N1

:::

:::warning

Lỗi đã biết:

- Xem trước một thành phần bên trong cửa hàng tùy chỉnh có thể gọi callback này.

:::

## Các callback liên quan

Các callback sau có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó.

- [OnVehiclePaintjob](OnVehiclePaintjob): Callback này được gọi khi lớp sơn của một xe bị thay đổi.
- [OnVehicleMod](OnVehicleMod): Callback này được gọi khi một xe được tùy chỉnh.
- [OnEnterExitModShop](OnEnterExitModShop): Callback này được gọi khi một xe vào hoặc rời khỏi cửa hàng tùy chỉnh.

## Các hàm liên quan

Các hàm sau có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó.

- [ChangeVehicleColor](../functions/ChangeVehicleColor): Đặt màu của một xe.
- [ChangeVehiclePaintjob](../functions/ChangeVehiclePaintjob): Thay đổi lớp sơn của một xe.