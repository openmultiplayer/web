---

title: OnUnoccupiedVehicleUpdate
description: Callback này được gọi khi client của người chơi cập nhật/sync vị trí của một chiếc xe mà họ không lái.
tags: ["vehicle"]
---

## Mô tả

Callback này được gọi khi client của người chơi cập nhật/sync vị trí của một chiếc xe mà họ không lái. Điều này có thể xảy ra khi người chơi không ở trong xe hoặc khi người chơi là hành khách của một chiếc xe không có tài xế.

| Tên            | Mô tả                                                                                                               |
|-----------------|---------------------------------------------------------------------------------------------------------------------|
| vehicleid       | ID của xe có vị trí được cập nhật.                                                                                  |
| playerid        | ID của người chơi đã gửi cập nhật vị trí xe.                                                                         |
| passenger_seat  | ID của ghế nếu người chơi là hành khách. 0=không ở trong xe, 1=ghế hành khách phía trước, 2=ghế phía sau bên trái, 3=ghế phía sau bên phải, 4+ là ghế của xe buýt/coach có nhiều ghế hành khách. |
| Float:new_x     | Tọa độ X mới của xe.                                                                                                 |
| Float:new_y     | Tọa độ Y mới của xe.                                                                                                 |
| Float:new_z     | Tọa độ Z mới của xe.                                                                                                 |
| Float:vel_x     | Vận tốc X mới của xe.                                                                                               |
| Float:vel_y     | Vận tốc Y mới của xe.                                                                                               |
| Float:vel_z     | Vận tốc Z mới của xe.                                                                                               |

## Trả về

0 - Hủy bỏ bất kỳ cập nhật nào về vị trí xe từ những người chơi khác. Cập nhật vẫn được gửi đến người chơi đang gửi cập nhật.

1 - Xử lý cập nhật vị trí xe bình thường và đồng bộ hóa giữa tất cả các người chơi.

## Ví dụ

```c
public OnUnoccupiedVehicleUpdate(vehicleid, playerid, passenger_seat, Float:new_x, Float:new_y, Float:new_z, Float:vel_x, Float:vel_y, Float:vel_z)
{
    // Kiểm tra nếu xe đã di chuyển xa
    if (GetVehicleDistanceFromPoint(vehicleid, new_x, new_y, new_z) > 50.0)
    {
        // Từ chối cập nhật
        return 0;
    }

    return 1;
}
```

## Lưu ý

:::warning

- Callback này được gọi rất thường xuyên mỗi giây cho mỗi xe không có người lái. Bạn nên tránh thực hiện các phép toán tính toán nặng hoặc các thao tác ghi/đọc file nặng trong callback này.
- [GetVehiclePos](../functions/GetVehiclePos) sẽ trả về tọa độ cũ của xe trước khi cập nhật này.

:::

## Các callback liên quan

Các callback sau có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó.

- [OnTrailerUpdate](OnTrailerUpdate): Được gọi khi vị trí của trailer được đồng bộ bởi một client.