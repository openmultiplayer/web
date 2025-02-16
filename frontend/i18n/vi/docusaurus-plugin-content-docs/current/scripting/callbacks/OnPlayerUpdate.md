---
title: OnPlayerUpdate
sidebar_label: OnPlayerUpdate
description: Callback này được gọi mỗi khi một client/người chơi cập nhật trạng thái của mình với server.
tags: ["player"]
---

## Mô tả

Callback này được gọi mỗi khi một client/người chơi cập nhật trạng thái của mình với server. Nó thường được sử dụng để tạo các callback tùy chỉnh cho các cập nhật từ client mà không được server theo dõi tích cực, chẳng hạn như cập nhật sức khỏe hoặc áo giáp hoặc khi người chơi thay đổi vũ khí.

| Tên       | Mô tả                                               |
| --------- | --------------------------------------------------- |
| playerid  | ID của người chơi gửi gói cập nhật.                |

## Giá trị trả về

0 - Cập nhật từ người chơi này sẽ không được nhân rộng cho các client khác.

1 - Chỉ ra rằng cập nhật này có thể được xử lý bình thường và gửi đến các người chơi khác.

Nó luôn được gọi đầu tiên trong filterscripts.

## Ví dụ

**Ví dụ 1**

```c
new WEAPON:gPlayerCurrentWeapon[MAX_PLAYERS];

public OnPlayerUpdate(playerid)
{
    new WEAPON:weapon = GetPlayerWeapon(playerid); // Trả về vũ khí hiện tại của người chơi
    if (weapon != gPlayerCurrentWeapon[playerid]) // Nếu anh ta đã thay đổi vũ khí kể từ lần cập nhật trước
    {
        // Gọi một callback có tên là OnPlayerWeaponChange
        CallLocalFunction("OnPlayerWeaponChange", "iii", playerid, gPlayerCurrentWeapon[playerid], weapon);
        gPlayerCurrentWeapon[playerid] = weapon; // Cập nhật biến vũ khí
    }
    return 1; // Gửi cập nhật này cho các người chơi khác.
}

forward OnPlayerWeaponChange(playerid, WEAPON:oldWeapon, WEAPON:newWeapon);
public OnPlayerWeaponChange(playerid, WEAPON:oldWeapon, WEAPON:newWeapon)
{
    new 
        string[128],
        oldWeaponName[24],
        newWeaponName[24];

    GetWeaponName(oldWeapon, oldWeaponName, sizeof(oldWeaponName));
    GetWeaponName(newWeapon, newWeaponName, sizeof(newWeaponName));

    format(string, sizeof(string), "Bạn đã thay đổi vũ khí từ %s sang %s!", oldWeaponName, newWeaponName);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

**Ví dụ 2**

```c
public OnPlayerUpdate(playerid)
{
    new Float:fHealth;
    GetPlayerHealth(playerid, fHealth);

    if (fHealth != GetPVarFloat(playerid, "faPlayerHealth"))
    {
        // Sức khỏe của người chơi đã thay đổi kể từ lần cập nhật trước -> server, vì vậy rõ ràng đây là điều đã được cập nhật.
        // Thực hiện các kiểm tra thêm để xem anh ta đã mất hoặc tăng sức khỏe, chống gian lận sức khỏe? ;)

        if (fHealth > GetPVarFloat(playerid, "faPlayerHealth"))
        {
            /* Anh ta đã tăng sức khỏe! Gian lận? Viết các script của bạn ở đây để tìm ra cách mà người chơi đã
            tăng sức khỏe! */
        }
        else
        {
            /* Anh ta đã mất sức khỏe! */
        }

        SetPVarFloat(playerid, "faPlayerHealth", fHealth);
    }
}
```

## Ghi chú

<TipNPCCallbacks />

:::warning

Callback này được gọi, trung bình, 30 lần mỗi giây, mỗi người chơi; chỉ sử dụng nó khi bạn biết mục đích của nó (hoặc quan trọng hơn là những gì nó KHÔNG được dùng cho). Tần suất mà callback này được gọi cho mỗi người chơi thay đổi tùy thuộc vào những gì người chơi đang làm. Lái xe hoặc bắn sẽ kích hoạt nhiều cập nhật hơn so với việc đứng im.

:::