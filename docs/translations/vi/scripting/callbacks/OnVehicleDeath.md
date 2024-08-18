---

title: OnVehicleDeath
description: Callback này được gọi khi một xe bị phá hủy - có thể là do nổ hoặc bị ngập trong nước.
tags: ["vehicle"]
---

## Mô tả

Callback này được gọi khi một xe bị phá hủy - có thể là do nổ hoặc bị ngập trong nước.

| Tên        | Mô tả                                                                                                                                                            |
|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| vehicleid   | ID của xe đã bị phá hủy.                                                                                                                                          |
| killerid    | ID của người chơi đã báo cáo (đồng bộ hóa) sự phá hủy của xe (tên có thể gây nhầm lẫn). Thông thường là người lái hoặc hành khách (nếu có) hoặc người chơi gần nhất. |

## Trả về

Luôn được gọi đầu tiên trong filterscripts.

## Ví dụ

```c
public OnVehicleDeath(vehicleid, killerid)
{
    new string[64];
    format(string, sizeof(string), "Xe %i đã bị phá hủy. Được báo cáo bởi người chơi %i.", vehicleid, killerid);
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## Lưu ý

:::tip

- Callback này cũng sẽ được gọi khi một xe vào nước, nhưng xe có thể được cứu khỏi sự phá hủy bằng cách dịch chuyển hoặc lái ra (nếu chỉ bị ngập một phần).
- Callback sẽ không được gọi lần thứ hai, và xe có thể biến mất khi người lái thoát ra hoặc sau một khoảng thời gian ngắn.

:::

## Các callback liên quan

Các callback sau có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó.

- [OnVehicleSpawn](OnVehicleSpawn): Callback này được gọi khi một xe tái sinh.

## Các hàm liên quan

Các hàm sau có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó.

- [SetVehicleHealth](../functions/SetVehicleHealth): Đặt sức khỏe của xe.