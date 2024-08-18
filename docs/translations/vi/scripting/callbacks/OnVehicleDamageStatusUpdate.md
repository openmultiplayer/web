---

title: OnVehicleDamageStatusUpdate
description: Callback này được gọi khi một phần tử của xe như cửa, lốp, tấm chắn hoặc đèn thay đổi trạng thái hư hỏng của chúng.
tags: ["vehicle"]
---

:::tip

Để biết thêm các hàm hữu ích liên quan đến giá trị hư hỏng của xe, xem [tại đây](../resources/damagestatus).

:::

## Mô tả

Callback này được gọi khi một phần tử của xe như cửa, lốp, tấm chắn hoặc đèn thay đổi trạng thái hư hỏng của chúng.

| Tên        | Mô tả                                                                                                   |
|------------|---------------------------------------------------------------------------------------------------------|
| vehicleid   | ID của xe đã thay đổi trạng thái hư hỏng.                                                               |
| playerid    | ID của người chơi đã đồng bộ hóa sự thay đổi trong trạng thái hư hỏng (người đã làm hư xe hoặc sửa chữa). |

## Trả về

**1** - Sẽ ngăn các filterscript khác nhận được callback này.

**0** - Cho biết rằng callback này sẽ được truyền đến filterscript tiếp theo.

## Ví dụ

```c
public OnVehicleDamageStatusUpdate(vehicleid, playerid)
{
    // Lấy trạng thái hư hỏng của tất cả các thành phần
    new 
        VEHICLE_PANEL_STATUS:panels,
        VEHICLE_DOOR_STATUS:doors,
        VEHICLE_LIGHT_STATUS:lights,
        VEHICLE_TYRE_STATUS:tyres;

    GetVehicleDamageStatus(vehicleid, panels, doors, lights, tyres);

    // Đặt lốp xe thành 0, có nghĩa là không có lốp bị nổ
    tyres = VEHICLE_TYRE_STATUS_NONE;

    // Cập nhật trạng thái hư hỏng của xe với lốp không bị nổ
    UpdateVehicleDamageStatus(vehicleid, panels, doors, lights, tyres);
    return 1;
}
```

## Lưu ý

:::tip

Điều này không bao gồm thay đổi sức khỏe của xe.

:::

## Các hàm liên quan

Các hàm sau có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó.

- [GetVehicleDamageStatus](../functions/GetVehicleDamageStatus): Lấy trạng thái hư hỏng của xe cho từng phần riêng lẻ.
- [UpdateVehicleDamageStatus](../functions/UpdateVehicleDamageStatus): Cập nhật trạng thái hư hỏng của xe.