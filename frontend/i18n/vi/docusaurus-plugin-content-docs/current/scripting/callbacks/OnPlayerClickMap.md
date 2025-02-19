---
title: OnPlayerClickMap
sidebar_label: OnPlayerClickMap
description: Callback này được gọi khi một người chơi đặt mục tiêu/điểm đến trên bản đồ trong menu tạm dừng (bằng cách nhấp chuột phải).
tags: ["player"]
---

## Mô Tả

Callback này được gọi khi một người chơi đặt mục tiêu/điểm đến trên bản đồ trong menu tạm dừng (bằng cách nhấp chuột phải).

| Tên       | Mô Tả                                                                           |
|-----------|---------------------------------------------------------------------------------|
| playerid  | ID của người chơi đã đặt mục tiêu/điểm đến                                       |
| Float:fX  | Tọa độ X float nơi người chơi nhấp chuột                                         |
| Float:fY  | Tọa độ Y float nơi người chơi nhấp chuột                                         |
| Float:fZ  | Tọa độ Z float nơi người chơi nhấp chuột (không chính xác - xem ghi chú bên dưới) |

## Trả Về

1 - Sẽ ngăn các filterscript khác nhận được callback này.

0 - Cho biết rằng callback này sẽ được chuyển cho filterscript tiếp theo.

Callback này luôn được gọi đầu tiên trong gamemode.

## Ví Dụ

```c
public OnPlayerClickMap(playerid, Float:fX, Float:fY, Float:fZ)
{
    SetPlayerPosFindZ(playerid, fX, fY, fZ);
    return 1;
}
```

## Ghi Chú

:::tip

Như tên callback đã nói, nó chỉ được gọi khi người chơi nhấp chuột để đánh dấu mục tiêu chứ không phải khi nhấn phím. Giá trị Z trả về sẽ là 0 (không hợp lệ) nếu khu vực nhấp chuột trên bản đồ cách xa người chơi; sử dụng plugin [MapAndreas](https://github.com/philip1337/samp-plugin-mapandreas) hoặc [ColAndreas](https://github.com/Pottus/ColAndreas) để có tọa độ Z chính xác hơn.

:::

## Các Hàm Liên Quan

- [GetPlayerPos](../functions/GetPlayerPos): Lấy vị trí của người chơi.
- [SetPlayerPos](../functions/SetPlayerPos): Đặt vị trí của người chơi.
- [SetPlayerPosFindZ](../functions/SetPlayerPosFindZ): Đặt vị trí của người chơi và tìm mặt đất.