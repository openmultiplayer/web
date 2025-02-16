---
title: OnTrailerUpdate
description: Callback này được gọi khi một người chơi gửi cập nhật về trailer.
tags: ["vehicle"]
---

## Mô tả

Callback này được gọi khi một người chơi gửi cập nhật về trailer.

| Tên       | Mô tả                                              |
|-----------|----------------------------------------------------|
| playerid  | ID của người chơi gửi cập nhật trailer              |
| vehicleid | ID của trailer được cập nhật                        |

## Trả về

0 - Hủy bỏ bất kỳ cập nhật trailer nào được gửi đến các người chơi khác. Cập nhật vẫn được gửi đến người chơi đang cập nhật.

1 - Xử lý cập nhật trailer theo cách bình thường và đồng bộ hóa giữa tất cả các người chơi.

## Ví dụ

```c
public OnTrailerUpdate(playerid, vehicleid)
{
    DetachTrailerFromVehicle(GetPlayerVehicleID(playerid));
    return 0;
}
```

## Lưu ý

:::warning

Callback này được gọi rất thường xuyên mỗi giây cho mỗi trailer. Bạn nên tránh thực hiện các phép toán tính toán nặng hoặc các thao tác ghi/đọc file nặng trong callback này.

:::

## Các hàm liên quan

Các hàm sau có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó.

- [OnUnoccupiedVehicleUpdate](OnUnoccupiedVehicleUpdate): Callback này được gọi khi vị trí của một xe không có người lái được đồng bộ bởi một khách hàng.

- [GetVehicleTrailer](../functions/GetVehicleTrailer): Kiểm tra trailer mà một xe đang kéo.
- [IsTrailerAttachedToVehicle](../functions/IsTrailerAttachedToVehicle): Kiểm tra xem một trailer có được gắn vào xe hay không.
- [AttachTrailerToVehicle](../functions/AttachTrailerToVehicle): Gắn trailer vào xe.
- [DetachTrailerFromVehicle](../functions/DetachTrailerFromVehicle): Tháo trailer khỏi xe.