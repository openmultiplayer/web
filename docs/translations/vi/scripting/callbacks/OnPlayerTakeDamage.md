---
title: OnPlayerTakeDamage
description: Callback này được gọi khi một người chơi bị nhận sát thương.
tags: ["player"]
---

## Mô tả

Callback này được gọi khi một người chơi bị nhận sát thương.

| Tên             | Mô tả                                                                 |
|-----------------|----------------------------------------------------------------------|
| playerid        | ID của người chơi bị nhận sát thương.                                |
| issuerid        | ID của người chơi gây sát thương. INVALID_PLAYER_ID nếu tự gây sát thương. |
| Float:amount    | Lượng sát thương người chơi nhận (kết hợp giữa máu và giáp).          |
| WEAPON:weaponid | ID của vũ khí/lý do gây sát thương.                                  |
| bodypart        | [Phần cơ thể](../resources/bodyparts) bị tấn công.                   |

## Giá trị trả về

1 - Callback sẽ không được gọi trong các filterscripts khác.

0 - Cho phép callback này được gọi trong các filterscripts khác.

Nó luôn được gọi đầu tiên trong filterscripts nên trả về 1 sẽ chặn các filterscripts khác không thấy được nó.

## Ví dụ

```c
public OnPlayerTakeDamage(playerid, issuerid, Float:amount, WEAPON:weaponid, bodypart)
{
    if (issuerid != INVALID_PLAYER_ID) // Nếu không tự gây sát thương
    {
        new
            infoString[128],
            weaponName[24],
            victimName[MAX_PLAYER_NAME],
            attackerName[MAX_PLAYER_NAME];

        GetPlayerName(playerid, victimName, sizeof (victimName));
        GetPlayerName(issuerid, attackerName, sizeof (attackerName));

        GetWeaponName(weaponid, weaponName, sizeof (weaponName));

        format(infoString, sizeof(infoString), "%s đã gây %.0f sát thương cho %s, vũ khí: %s, phần cơ thể: %d", attackerName, amount, victimName, weaponName, bodypart);
        SendClientMessageToAll(-1, infoString);
    }
    return 1;
}
```

<br />

```c
public OnPlayerTakeDamage(playerid, issuerid, Float:amount, WEAPON:weaponid, bodypart)
{
    if (issuerid != INVALID_PLAYER_ID && weaponid == 34 && bodypart == 9)
    {
        // Bắn một phát vào đầu bằng súng bắn tỉa để giết
        SetPlayerHealth(playerid, 0.0);
    }
    return 1;
}
```

## Ghi chú

:::tip

- weaponid sẽ trả về 37 (súng phun lửa) từ bất kỳ nguồn lửa nào (ví dụ: molotov, 18).
- weaponid sẽ trả về 51 từ bất kỳ vũ khí nào tạo ra vụ nổ (ví dụ: RPG, lựu đạn).
- **playerid** là người duy nhất có thể gọi callback này.
- amount luôn là sát thương tối đa mà weaponid có thể gây ra, ngay cả khi máu còn lại ít hơn sát thương tối đa đó. Vì vậy, khi một người chơi có 100.0 máu và bị bắn bằng Desert Eagle với sát thương là 46.2, cần 3 phát bắn để giết người chơi đó. Cả 3 phát bắn đều sẽ hiển thị lượng sát thương là 46.2, mặc dù khi phát bắn cuối cùng trúng đích, người chơi chỉ còn 7.6 máu.

:::

:::warning

- [GetPlayerHealth](../functions/GetPlayerHealth) và [GetPlayerArmour](../functions/GetPlayerArmour) sẽ trả về lượng máu và giáp cũ của người chơi trước khi callback này được gọi.
- Luôn kiểm tra xem issuerid có hợp lệ trước khi sử dụng nó làm chỉ số mảng.

:::

## Các Callbacks liên quan

Các callback sau có thể hữu ích, vì chúng liên quan đến callback này theo một cách nào đó. 

- [OnPlayerGiveDamage](OnPlayerGiveDamage): Callback này được gọi khi một người chơi gây sát thương.
- [OnPlayerWeaponShot](OnPlayerWeaponShot): Callback này được gọi khi một người chơi bắn vũ khí.

## Các Tài Nguyên liên quan

- [Phần Cơ Thể](../resources/bodyparts)