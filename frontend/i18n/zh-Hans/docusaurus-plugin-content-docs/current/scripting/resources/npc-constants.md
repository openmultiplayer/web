---
title: NPC 常量
sidebar_label: NPC 常量
description: NPC 函数和回调中使用的常量。
tags: ["npc", "常量"]
---

本页面列出了 open.mp 中所有 NPC 函数特有的常量。

## 限制

| 值   | 常量          | 说明         |
| ---- | ------------- | ------------ |
| 1000 | MAX_NPCS      | NPC 最大数量 |
| 64   | NPC_MAX_NODES | 最大节点数量 |

## 无效常量

| 值  | 常量              | 说明          |
| --- | ----------------- | ------------- |
| -1  | INVALID_NPC_ID    | 无效的 NPC ID |
| -1  | INVALID_PATH_ID   | 无效的路径 ID |
| -1  | INVALID_NODE_ID   | 无效的节点 ID |
| -1  | INVALID_RECORD_ID | 无效的录制 ID |

## 移动类型

用于 [NPC_Move](../functions/NPC_Move)、[NPC_MoveByPath](../functions/NPC_MoveByPath)、[NPC_EnterVehicle](../functions/NPC_EnterVehicle) 和 [NPC_PlayNode](../functions/NPC_PlayNode) 等函数。

| 值  | 常量                  | 说明                                   |
| --- | --------------------- | -------------------------------------- |
| -1  | UNKNOWN_NPC_MOVE_TYPE | 未知移动类型                           |
| 0   | NPC_MOVE_TYPE_NONE    | 无移动                                 |
| 1   | NPC_MOVE_TYPE_WALK    | NPC 步行前往目标                       |
| 2   | NPC_MOVE_TYPE_JOG     | NPC 慢跑前往目标（大多数函数的默认值） |
| 3   | NPC_MOVE_TYPE_SPRINT  | NPC 冲刺前往目标                       |
| 4   | NPC_MOVE_TYPE_DRIVE   | NPC 驾驶前往目标（车辆移动）           |
| 5   | NPC_MOVE_TYPE_AUTO    | 自动移动类型                           |

## 移动速度

用于移动函数以控制 NPC 速度。

| 值        | 常量                  | 说明                   |
| --------- | --------------------- | ---------------------- |
| -1.0      | NPC_MOVE_SPEED_AUTO   | 基于移动类型的自动速度 |
| 0.1552086 | NPC_MOVE_SPEED_WALK   | 步行速度               |
| 0.56444   | NPC_MOVE_SPEED_JOG    | 慢跑速度               |
| 0.926784  | NPC_MOVE_SPEED_SPRINT | 冲刺速度               |

## 实体检查标志

用于 [NPC_AimAt](../functions/NPC_AimAt)、[NPC_AimAtPlayer](../functions/NPC_AimAtPlayer) 和 [NPC_Shoot](../functions/NPC_Shoot) 的碰撞检测。

| 值  | 常量                          | 说明                         |
| --- | ----------------------------- | ---------------------------- |
| 0   | NPC_ENTITY_CHECK_NONE         | 无碰撞检查                   |
| 1   | NPC_ENTITY_CHECK_PLAYER       | 检查与玩家的碰撞             |
| 2   | NPC_ENTITY_CHECK_NPC          | 检查与其他 NPC 的碰撞        |
| 4   | NPC_ENTITY_CHECK_ACTOR        | 检查与演员的碰撞             |
| 8   | NPC_ENTITY_CHECK_VEHICLE      | 检查与车辆的碰撞             |
| 16  | NPC_ENTITY_CHECK_OBJECT       | 检查与物体的碰撞             |
| 32  | NPC_ENTITY_CHECK_POBJECT_ORIG | 检查与玩家物体的碰撞（原始） |
| 64  | NPC_ENTITY_CHECK_POBJECT_TARG | 检查与玩家物体的碰撞（目标） |
| 128 | NPC_ENTITY_CHECK_MAP          | 检查与地图的碰撞             |
| 255 | NPC_ENTITY_CHECK_ALL          | 检查与所有实体的碰撞         |

## 子弹命中类型

用于 [NPC_Shoot](../functions/NPC_Shoot) 以指定命中的目标类型。

| 常量                   | 说明       |
| ---------------------- | ---------- |
| BULLET_HIT_TYPE_NONE   | 无特定目标 |
| BULLET_HIT_TYPE_PLAYER | 玩家目标   |

## 示例

### 移动类型

```c
// 让 NPC 缓慢步行
NPC_Move(npcid, x, y, z, NPC_MOVE_TYPE_WALK);

// 让 NPC 慢跑（默认速度）
NPC_Move(npcid, x, y, z, NPC_MOVE_TYPE_JOG);

// 让 NPC 快速冲刺
NPC_Move(npcid, x, y, z, NPC_MOVE_TYPE_SPRINT);

// 让 NPC 驾驶前往位置
NPC_Move(npcid, x, y, z, NPC_MOVE_TYPE_DRIVE);

// 使用自动移动类型
NPC_Move(npcid, x, y, z, NPC_MOVE_TYPE_AUTO);
```

### 移动速度

```c
// 使用自动速度
NPC_Move(npcid, x, y, z, NPC_MOVE_TYPE_WALK, NPC_MOVE_SPEED_AUTO);

// 使用特定步行速度
NPC_Move(npcid, x, y, z, NPC_MOVE_TYPE_WALK, NPC_MOVE_SPEED_WALK);

// 使用特定慢跑速度
NPC_Move(npcid, x, y, z, NPC_MOVE_TYPE_JOG, NPC_MOVE_SPEED_JOG);

// 使用特定冲刺速度
NPC_Move(npcid, x, y, z, NPC_MOVE_TYPE_SPRINT, NPC_MOVE_SPEED_SPRINT);
```

### 实体检查标志

```c
// 瞄准时不进行碰撞检查
NPC_AimAt(npcid, x, y, z, true, 1000, true, 0.0, 0.0, 0.6, NPC_ENTITY_CHECK_NONE);

// 瞄准时进行完整碰撞检查
NPC_AimAt(npcid, x, y, z, true, 1000, true, 0.0, 0.0, 0.6, NPC_ENTITY_CHECK_ALL);

// 仅检查与玩家的碰撞
NPC_AimAt(npcid, x, y, z, true, 1000, true, 0.0, 0.0, 0.6, NPC_ENTITY_CHECK_PLAYER);

// 检查与玩家和车辆的碰撞
NPC_AimAt(npcid, x, y, z, true, 1000, true, 0.0, 0.0, 0.6,
         NPC_ENTITY_CHECK_PLAYER | NPC_ENTITY_CHECK_VEHICLE);

// 仅检查与物体的碰撞
NPC_AimAt(npcid, x, y, z, true, 1000, true, 0.0, 0.0, 0.6, NPC_ENTITY_CHECK_OBJECT);
```

### 子弹命中类型

```c
// 向特定位置射击（无目标）
NPC_Shoot(npcid, INVALID_PLAYER_ID, BULLET_HIT_TYPE_NONE, WEAPON_SNIPER,
         x, y, z, 0.0, 0.0, 0.0, false);

// 向玩家射击
NPC_Shoot(npcid, playerid, BULLET_HIT_TYPE_PLAYER, WEAPON_M4,
         x, y, z, 0.0, 0.0, 0.0, true);
```

### 无效常量

```c
// 检查 NPC ID 是否有效
new npcid = NPC_Create("Bot");
if (npcid != INVALID_NPC_ID)
{
    // NPC 创建成功
    NPC_Spawn(npcid);
}

// 检查路径 ID 是否有效
new pathid = NPC_CreatePath();
if (pathid != INVALID_PATH_ID)
{
    // 路径创建成功
    NPC_AddPointToPath(pathid, 0.0, 0.0, 3.0, 0.2);
}

// 在 NPC_Kill 中检查无效玩家
NPC_Kill(npcid, INVALID_PLAYER_ID, REASON_SUICIDE);
```

### 限制

```c
// 遍历所有可能的 NPC
for (new i = 0; i < MAX_NPCS; i++)
{
    if (NPC_IsValid(i))
    {
        // 处理有效的 NPC
    }
}

// 使用 NPC_MAX_NODES 的示例
for (new i = 0; i < NPC_MAX_NODES; i++)
{
    if (NPC_IsNodeOpen(i))
    {
        // 处理打开节点
        NPC_CloseNode(i);
    }
}
```

## 相关页面

- [武器常量](constants#weapon-constants) - 用于 NPC 的武器 ID
- [玩家状态](playerstates) - 可能适用于 NPC 的玩家状态常量
- [车辆 ID](vehicleid) - NPC 车辆函数中使用的车辆模型 ID
