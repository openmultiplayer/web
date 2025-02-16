---
title: OnPlayerWeaponShot
sidebar_label: OnPlayerWeaponShot
description: Callback này được gọi khi một người chơi bắn từ một vũ khí.
tags: ["player"]
---

## Mô tả

Callback này được gọi khi một người chơi bắn từ một vũ khí. Chỉ các vũ khí bắn đạn được hỗ trợ. Chỉ hỗ trợ bắn từ ghế hành khách (không hỗ trợ bắn từ ghế lái, và không hỗ trợ bắn từ sea sparrow / hunter).

| Tên                    | Mô tả                                                                                                          |
|-------------------------|----------------------------------------------------------------------------------------------------------------|
| playerid                | ID của người chơi đã bắn vũ khí.                                                                             |
| WEAPON:weaponid         | ID của [vũ khí](../resources/weaponids) mà người chơi đã bắn.                                                   |
| BULLET_HIT_TYPE:hittype | [Loại](../resources/bullethittypes) của mục tiêu bị bắn (không có, người chơi, phương tiện, hoặc (người chơi)đối tượng). |
| hitid                   | ID của người chơi, phương tiện hoặc đối tượng bị bắn trúng.                                                   |
| Float:fX                | Tọa độ X mà viên đạn bắn trúng.                                                                              |
| Float:fY                | Tọa độ Y mà viên đạn bắn trúng.                                                                              |
| Float:fZ                | Tọa độ Z mà viên đạn bắn trúng.                                                                              |

## Giá trị trả về

0 - Ngăn viên đạn gây thiệt hại.

1 - Cho phép viên đạn gây thiệt hại.

Nó luôn được gọi đầu tiên trong filterscripts nên việc trả về 0 cũng sẽ ngăn các script khác thấy nó.

## Ví dụ

```c
public OnPlayerWeaponShot(playerid, WEAPON:weaponid, BULLET_HIT_TYPE:hittype, hitid, Float:fX, Float:fY, Float:fZ)
{
    new string[144];
    format(string, sizeof(string), "Vũ khí %i đã được bắn. loại bắn: %i   hitid: %i   tọa độ: %f, %f, %f", weaponid, hittype, hitid, fX, fY, fZ);
    SendClientMessage(playerid, -1, string);
    return 1;
}
```

## Ghi chú

:::tip

- Callback này chỉ được gọi khi bù trừ độ trễ (lag compensation) được bật. Nếu `hittype` là:
  - `BULLET_HIT_TYPE_NONE`: các tham số fX, fY và fZ là tọa độ bình thường, sẽ trả về 0.0 cho các tọa độ nếu không có gì bị bắn trúng (ví dụ: vật thể ở xa mà viên đạn không thể đến);
  - Các loại khác: fX, fY và fZ là độ dịch chuyển tương đối với `hitid`.

- [GetPlayerLastShotVectors](../functions/GetPlayerLastShotVectors) có thể được sử dụng trong callback này để có thông tin chi tiết về vector viên đạn.

:::

:::warning

- Không được gọi nếu bạn bắn từ xe như là tài xế hoặc nếu bạn đang nhìn ra sau với ngắm mục tiêu bật (bắn lên không trung).
- Nó được gọi với `BULLET_HIT_TYPE_VEHICLE` với `hitid` chính xác (vehicleid của người chơi bị bắn) nếu bạn đang bắn một người chơi đang ở trong xe. Nó sẽ không được gọi với `BULLET_HIT_TYPE_PLAYER` tại tất cả.
- Đã được sửa một phần trong SA-MP 0.3.7: Nếu dữ liệu vũ khí giả được gửi bởi người dùng độc hại, các client của người chơi khác có thể bị treo hoặc bị sập. Để chống lại điều này, hãy kiểm tra xem `weaponid` được báo cáo có thực sự bắn đạn hay không.

:::

## Callbacks liên quan

Các callback sau có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó.

- [OnPlayerGiveDamage](OnPlayerGiveDamage): Callback này được gọi khi một người chơi gây thiệt hại.

## Các hàm liên quan

Các hàm sau có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó.

- [GetPlayerLastShotVectors](../functions/GetPlayerLastShotVectors): Lấy vector của viên đạn cuối cùng mà một người chơi đã bắn.

## Tài nguyên liên quan

- [Bullet Hit Types](../resources/bullethittypes)