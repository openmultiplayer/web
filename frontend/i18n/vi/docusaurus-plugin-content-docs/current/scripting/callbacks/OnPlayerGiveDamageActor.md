---
title: OnPlayerGiveDamageActor
sidebar_label: OnPlayerGiveDamageActor
description: Callback này được gọi khi một người chơi gây thiệt hại cho một diễn viên.
tags: ["player", "actor"]
---

<VersionWarn name='callback' version='SA-MP 0.3.7' />

## Mô Tả

Callback này được gọi khi một người chơi gây thiệt hại cho một diễn viên.

| Tên              | Mô Tả                                                    |
|-------------------|----------------------------------------------------------|
| playerid          | ID của người chơi đã gây thiệt hại.                     |
| damaged_actorid   | ID của diễn viên nhận thiệt hại.                        |
| Float:amount      | Số lượng máu/giáp mà damaged_actorid đã mất.            |
| WEAPON:weaponid   | Nguyên nhân gây thiệt hại.                               |
| bodypart          | [Phần cơ thể](../resources/bodyparts) bị trúng đạn.      |

## Trả Về

1 - Callback sẽ không được gọi trong các filterscript khác.

0 - Cho phép callback này được gọi trong các filterscript khác.

Callback này luôn được gọi đầu tiên trong filterscripts, vì vậy việc trả về 1 ở đó sẽ ngăn callback được thấy trong các filterscript khác.

## Ví Dụ

```c
public OnPlayerGiveDamageActor(playerid, damaged_actorid, Float:amount, WEAPON:weaponid, bodypart)
{
    new string[128];
    new attackerName[MAX_PLAYER_NAME];
    new weaponName[24];

    GetPlayerName(playerid, attackerName, sizeof(attackerName));
    GetWeaponName(weaponid, weaponName, sizeof(weaponName));

    format(string, sizeof(string), "%s đã gây %.0f thiệt hại cho diễn viên id %d, vũ khí: %s", attackerName, amount, damaged_actorid, weaponName);
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## Ghi Chú

:::tip

Hàm này không được gọi nếu diễn viên được đặt là bất khả xâm phạm (MẶC ĐỊNH LÀ NHƯ VẬY). Xem [SetActorInvulnerable](../functions/SetActorInvulnerable).

:::

## Các Callbacks Liên Quan

Các callback sau đây có thể hữu ích vì chúng liên quan đến callback này theo một cách nào đó.

- [OnActorStreamOut](OnActorStreamOut): Callback này được gọi khi một diễn viên bị stream ra khỏi máy khách của người chơi.
- [OnActorStreamIn](OnActorStreamOut): Callback này được gọi khi một diễn viên được stream vào máy khách của người chơi.

## Các Hàm Liên Quan

Các hàm sau đây có thể hữu ích vì chúng liên quan đến callback này theo một cách nào đó.

- [CreateActor](../functions/CreateActor): Tạo một diễn viên (NPC tĩnh).
- [SetActorInvulnerable](../functions/SetActorInvulnerable): Đặt diễn viên thành bất khả xâm phạm.
- [SetActorHealth](../functions/SetActorHealth): Đặt sức khỏe của một diễn viên.
- [GetActorHealth](../functions/GetActorHealth): Lấy sức khỏe của một diễn viên.
- [IsActorInvulnerable](../functions/IsActorInvulnerable): Kiểm tra xem diễn viên có phải là bất khả xâm phạm không.
- [IsValidActor](../functions/IsValidActor): Kiểm tra xem ID diễn viên có hợp lệ không.

## Tài Nguyên Liên Quan

- [Các Phần Cơ Thể](../resources/bodyparts)