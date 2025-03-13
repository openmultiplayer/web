---
title: OnPlayerUpdate
sidebar_label: OnPlayerUpdate
description: 当客户端/玩家向服务器发送状态更新时触发该回调函数。
tags: ["玩家"]
---

## 描述

每当客户端/玩家向服务器发送状态更新时触发该回调函数。常用于创建服务器未主动追踪的客户端状态更新回调，例如生命值/护甲更新或武器切换。

| 参数名   | 说明                   |
| -------- | ---------------------- |
| playerid | 发送更新数据包的玩家ID |

## 返回值

0 - 阻止该玩家的更新同步到其他客户端

1 - 表示该更新可正常处理并发送给其他玩家

该回调始终在滤镜脚本中优先触发。

## 示例

**示例 1**

```c
new WEAPON:gPlayerCurrentWeapon[MAX_PLAYERS];

public OnPlayerUpdate(playerid)
{
    new WEAPON:weapon = GetPlayerWeapon(playerid); // 获取玩家当前武器
    if (weapon != gPlayerCurrentWeapon[playerid]) // 检测武器变更
    {
        // 调用自定义回调 OnPlayerWeaponChange
        CallLocalFunction("OnPlayerWeaponChange", "iii", playerid, gPlayerCurrentWeapon[playerid], weapon);
        gPlayerCurrentWeapon[playerid] = weapon; // 更新武器记录
    }
    return 1; // 允许更新同步给其他玩家
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

    format(string, sizeof(string), "您已将武器从 %s 切换为 %s！", oldWeaponName, newWeaponName);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

**示例 2**

```c
public OnPlayerUpdate(playerid)
{
    new Float:fHealth;
    GetPlayerHealth(playerid, fHealth);

    if (fHealth != GetPVarFloat(playerid, "faPlayerHealth"))
    {
        // 检测生命值变化，可用于反作弊检测
        if (fHealth > GetPVarFloat(playerid, "faPlayerHealth"))
        {
            /* 生命值异常增加，可能作弊 */
        }
        else
        {
            /* 正常生命值减少 */
        }

        SetPVarFloat(playerid, "faPlayerHealth", fHealth);
    }
}
```

## 注意事项

<TipNPCCallbacksZH_CN />

:::warning

本回调函数平均每秒触发30次/玩家，请谨慎使用。触发频率会根据玩家行为变化：驾驶或射击时更新频率远高于静止状态。

:::

## 相关回调

以下回调可能与该回调存在关联：

- [OnPlayerWeaponShot](OnPlayerWeaponShot): 当玩家发射武器时触发

## 相关函数

以下函数可能与该回调存在关联：

- [GetPlayerWeapon](../functions/GetPlayerWeapon): 获取玩家当前武器
- [GetPlayerHealth](../functions/GetPlayerHealth): 获取玩家生命值
- [SetPlayerHealth](../functions/SetPlayerHealth): 设置玩家生命值

## 相关资源

- [武器ID列表](../resources/weaponids)
