---
title: GetPlayerWeaponState
sidebar_label: GetPlayerWeaponState
description: 检查玩家武器的当前状态
tags: ["玩家"]
---

## 描述

获取指定玩家武器的当前状态信息

| 名称     | 说明                      |
| -------- | ------------------------- |
| playerid | 需要获取武器状态的玩家 ID |

## 返回值

玩家的[武器状态编号](../resources/weaponstates)。若指定玩家不存在，返回 **0**

## 示例代码

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/wstate", true))
    {
        new WEAPONSTATE:state = GetPlayerWeaponState(playerid);

        static weaponStates[4][64] =
        {
            "当前武器弹药已耗尽",       // WEAPONSTATE_NO_BULLETS
            "当前武器仅剩最后一发弹药",  // WEAPONSTATE_LAST_BULLET
            "当前武器弹药充足",         // WEAPONSTATE_MORE_BULLETS
            "正在装填当前武器"          // WEAPONSTATE_RELOADING
        };

        new string[144];
        format(string, sizeof(string), "您的武器状态：%s", weaponStates[_:state]);
        SendClientMessage(playerid, -1, string);
        return 1;
    }
    return 0;
}
```

## 相关函数

- [GivePlayerWeapon](GivePlayerWeapon): 给予玩家指定武器

## 相关资源

- [武器状态列表](../resources/weaponstates)
