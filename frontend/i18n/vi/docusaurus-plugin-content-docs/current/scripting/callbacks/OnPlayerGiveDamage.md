---
title: OnPlayerGiveDamage
sidebar_label: OnPlayerGiveDamage
description: Callback này được gọi khi một người chơi gây thiệt hại cho người chơi khác.
tags: ["player"]
---

## Mô Tả

Callback này được gọi khi một người chơi gây thiệt hại cho người chơi khác.

| Tên            | Mô Tả                                                                                  |
|-----------------|----------------------------------------------------------------------------------------|
| playerid        | ID của người chơi đã gây thiệt hại.                                                     |
| damagedid       | ID của người chơi bị thiệt hại.                                                         |
| Float:amount    | Số lượng máu/giáp mà damagedid đã mất (kết hợp).                                        |
| WEAPON:weaponid | Nguyên nhân gây thiệt hại.                                                               |
| bodypart        | [Phần cơ thể](../resources/bodyparts) bị trúng đạn.                                      |

## Trả Về

1 - Callback sẽ không được gọi trong các filterscript khác.

0 - Cho phép callback này được gọi trong các filterscript khác.

Callback này luôn được gọi đầu tiên trong filterscripts, vì vậy việc trả về 1 ở đó sẽ ngăn callback được thấy trong các filterscript khác.

## Ví Dụ

```c
public OnPlayerGiveDamage(playerid, damagedid, Float:amount, WEAPON:weaponid, bodypart)
{
    new string[128], victim[MAX_PLAYER_NAME], attacker[MAX_PLAYER_NAME];
    new weaponname[24];
    GetPlayerName(playerid, attacker, sizeof(attacker));
    GetPlayerName(damagedid, victim, sizeof(victim));

    GetWeaponName(weaponid, weaponname, sizeof(weaponname));
    format(string, sizeof(string), "%s đã gây %.0f thiệt hại cho %s, vũ khí: %s, phần cơ thể: %d", attacker, amount, victim, weaponname, bodypart);
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## Ghi Chú

:::tip

- Lưu ý rằng hàm này có thể không chính xác trong một số trường hợp.
- Nếu bạn muốn ngăn chặn một số người chơi không gây thiệt hại cho nhau, hãy sử dụng [SetPlayerTeam](../functions/SetPlayerTeam).
- weaponid sẽ trả về 37 (súng phun lửa) từ bất kỳ nguồn lửa nào (ví dụ: molotov, 18)
- weaponid sẽ trả về 51 từ bất kỳ vũ khí nào tạo ra vụ nổ (ví dụ: RPG, lựu đạn)
- **playerid** là người duy nhất có thể gọi callback này.
- Số lượng luôn là lượng thiệt hại tối đa mà weaponid có thể gây ra, ngay cả khi sức khỏe còn lại nhỏ hơn lượng thiệt hại tối đa đó. Vì vậy, khi một người chơi có 100.0 máu và bị bắn bởi Desert Eagle có giá trị thiệt hại là 46.2, cần 3 phát bắn để tiêu diệt người chơi đó. Cả 3 phát bắn sẽ hiển thị số lượng 46.2, ngay cả khi khi phát bắn cuối cùng trúng, người chơi chỉ còn 7.6 máu.

:::

## Các Callbacks Liên Quan

Các callback sau đây có thể hữu ích vì chúng liên quan đến callback này theo một cách nào đó.

- [OnPlayerTakeDamage](OnPlayerTakeDamage): Callback này được gọi khi một người chơi nhận thiệt hại.
- [OnPlayerWeaponShot](OnPlayerWeaponShot): Callback này được gọi khi một người chơi bắn vũ khí.

## Tài Nguyên Liên Quan

- [Các Phần Cơ Thể](../resources/bodyparts)