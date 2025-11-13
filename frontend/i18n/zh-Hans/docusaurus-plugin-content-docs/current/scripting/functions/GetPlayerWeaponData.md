---
title: GetPlayerWeaponData
sidebar_label: GetPlayerWeaponData
description: 获取玩家指定武器槽的武器及弹药信息
tags: ["玩家"]
---

## 描述

获取玩家特定武器槽（如'SMG'槽位）中的武器类型及剩余弹药量

| 参数             | 说明                                                    |
| ---------------- | ------------------------------------------------------- |
| playerid         | 需要获取武器数据的玩家 ID                               |
| WEAPON_SLOT:slot | [武器槽编号](../resources/weaponslots)（0-12）          |
| &WEAPON:weapons  | 存储[武器 ID](../resources/weaponids)的变量（引用传递） |
| &ammo            | 存储弹药量的变量（引用传递）                            |

## 返回值

**1** - 函数执行成功

**0** - 函数执行失败（玩家未连接或武器槽编号无效）

## 示例代码

```c
// 常见用法：遍历所有武器槽并将信息存入二维数组
// 数组第一列为武器ID，第二列为弹药量

new weapons[13][2];

for (new i = 0; i <= 12; i++)
{
    GetPlayerWeaponData(playerid, WEAPON_SLOT:i, weapons[i][0], weapons[i][1]);
}
```

另一个示例：

```c
new
    weaponid,
    ammo;

// 获取玩家手枪槽位的武器信息
GetPlayerWeaponData(playerid, WEAPON_SLOT_PISTOL, weaponid, ammo);
```

## 注意事项

:::tip

即使武器弹药已耗尽，仍会返回该武器信息

:::

## 相关函数

- [GetPlayerWeapon](GetPlayerWeapon): 获取玩家当前手持武器
- [GivePlayerWeapon](GivePlayerWeapon): 给予玩家指定武器

## 相关资源

- [武器槽位列表](../resources/weaponslots)
- [武器 ID 对照表](../resources/weaponids)
