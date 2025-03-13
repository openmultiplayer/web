---
title: SetPlayerFacingAngle
sidebar_label: SetPlayerFacingAngle
description: 设置玩家的朝向角度（Z轴旋转）
tags: ["玩家"]
---

## 描述

设置玩家的朝向角度（Z 轴旋转）

| 参数名      | 说明                         |
| ----------- | ---------------------------- |
| playerid    | 要设置朝向角度的玩家 ID      |
| Float:angle | 玩家应朝向的角度值（浮点型） |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（指定玩家不存在）

## 示例

```c
SetPlayerFacingAngle(playerid, 0.0); // 玩家面向北方
```

```
        北方 (0)
           |
(90) 西 -   - 东 (270)      （记忆口诀：Never Eat Shredded Wheat）
           |
        南方 (180)
```

## 注意事项

:::warning

GTA:SA 中的角度方向与现实世界相反：
- 现实中的 90 度对应东方，但在游戏中对应西方
- 北方和南方仍保持 0/360 度和 180 度
转换公式：游戏角度 = 360 - 实际角度

:::

## 相关函数

- [GetPlayerFacingAngle](GetPlayerFacingAngle): 获取玩家当前朝向角度
- [GetPlayerRotationQuat](GetPlayerRotationQuat): 获取玩家的四元数旋转参数
- [SetPlayerPos](SetPlayerPos): 设置玩家坐标
