---
title: OnVehicleMod
description: Callback này được gọi khi một xe được tùy chỉnh.
tags: ["vehicle"]
---

## Mô tả

Callback này được gọi khi một xe được tùy chỉnh.

| Tên          | Mô tả                                                                                       |
|--------------|---------------------------------------------------------------------------------------------|
| playerid     | ID của người lái xe.                                                                        |
| vehicleid    | ID của xe đã được tùy chỉnh.                                                                |
| componentid  | ID của linh kiện đã được thêm vào xe.                                                       |

## Trả về

Luôn được gọi đầu tiên trong gamemode.

## Ví dụ

```c
public OnVehicleMod(playerid, vehicleid, componentid)
{
    printf("Xe %d đã được tùy chỉnh bởi ID %d với componentid %d", vehicleid, playerid, componentid);

    if (GetPlayerInterior(playerid) == 0)
    {
        BanEx(playerid, "Tuning Hacks"); // Kịch bản chống hack tùy chỉnh
        return 0; // Ngăn chặn sự tùy chỉnh xấu không được đồng bộ hóa đến các người chơi khác
        // Đã được kiểm tra và hoạt động ngay cả trên các server cho phép tùy chỉnh xe bằng lệnh, menu, hộp thoại, v.v..
    }
    return 1;
}
```

## Lưu ý

:::tip

Callback này KHÔNG được gọi bởi AddVehicleComponent.

:::

## Các callback liên quan

Các callback sau có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó.

- [OnEnterExitModShop](OnEnterExitModShop): Callback này được gọi khi một xe vào hoặc ra khỏi cửa hàng tùy chỉnh.
- [OnVehiclePaintjob](OnVehiclePaintjob): Callback này được gọi khi lớp sơn của xe được thay đổi.
- [OnVehicleRespray](OnVehicleRespray): Callback này được gọi khi một xe được sơn lại.

## Các hàm liên quan

Các hàm sau có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó.

- [AddVehicleComponent](../functions/AddVehicleComponent): Thêm một linh kiện vào xe.