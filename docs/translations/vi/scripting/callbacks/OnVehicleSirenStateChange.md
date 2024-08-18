---
title: OnVehicleSirenStateChange
description: Callback này được gọi khi còi của một xe được bật hoặc tắt.
tags: ["vehicle"]
---

<VersionWarn name='callback' version='SA-MP 0.3.7' />

## Mô tả

Callback này được gọi khi còi của một xe được bật hoặc tắt.

| Tên        | Mô tả                                                                 |
|------------|-------------------------------------------------------------------------|
| playerid   | ID của người chơi đã bật/tắt còi (người lái).                          |
| vehicleid  | ID của xe mà còi đã được bật/tắt.                                       |
| newstate   | 0 nếu còi được tắt, 1 nếu còi được bật.                                |

## Trả về

1 - Ngăn gamemode nhận callback này.

0 - Cho biết rằng callback này sẽ được chuyển đến gamemode.

Luôn được gọi đầu tiên trong filterscripts.

## Ví dụ

```c
public OnVehicleSirenStateChange(playerid, vehicleid, newstate)
{
    if (newstate)
    {
        GameTextForPlayer(playerid, "~W~Siren ~G~on", 1000, 3);
    }
    else
    {
        GameTextForPlayer(playerid, "~W~Siren ~r~off", 1000, 3);
    }
    return 1;
}
```

## Lưu ý

:::tip

Callback này chỉ được gọi khi còi của xe được bật hoặc tắt, KHÔNG phải khi còi phụ được sử dụng (nhấn giữ còi).

:::

## Các hàm liên quan

Các hàm sau có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó.

- [GetVehicleParamsSirenState](../functions/GetVehicleParamsSirenState): Kiểm tra xem còi của xe đang bật hay tắt.