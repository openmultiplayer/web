---
title: ApplyAnimation
sidebar_label: ApplyAnimation
description: 为玩家应用指定的动画效果
tags: ["玩家", "动画"]
---

## 描述

为指定玩家应用动画效果。

| 参数                     | 说明                                                                                                                |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| playerid                 | 需要应用动画的玩家 ID                                                                                               |
| const animationLibrary[] | [动画资源库](../resources/animations)名称                                                                           |
| const animationName[]    | 动画名称（需在指定资源库中存在）                                                                                    |
| Float:delta              | 动画播放速度（建议使用 4.1）                                                                                        |
| bool:loop                | 是否循环播放：'true'循环播放，'false'单次播放                                                                       |
| bool:lockX               | X 轴位置锁定：'false'在动画结束后恢复原始 X 坐标（适用于移动类动画），'true'保持动画结束时的位置                    |
| bool:lockY               | Y 轴位置锁定（参数设置应与 lockX 保持一致）                                                                         |
| bool:freeze              | 动画结束后冻结玩家：'true'冻结玩家，'false'不冻结                                                                   |
| time                     | 动画持续时间（毫秒），0 表示无限循环                                                                                |
| FORCE_SYNC:forceSync     | 同步模式：1-向流式范围内的所有玩家同步动画（可选）；2-仅同步给其他可见玩家（适用于 NPC 动画或需要持久化动画的场景） |

## 返回值

此函数始终返回 true（即使玩家不存在或参数无效）。

## 示例

```c
ApplyAnimation(playerid, "PED", "WALK_DRUNK", 4.1, true, true, true, true, 1, 1);
```

open.mp 扩展示例：

```c
ApplyAnimation(playerid, "PED", "WALK_DRUNK", 4.1, true, true, true, true, 1, SYNC_NONE);
// SYNC_NONE: 不向其他玩家同步

ApplyAnimation(playerid, "PED", "WALK_DRUNK", 4.1, true, true, true, true, 1, SYNC_ALL);
// SYNC_ALL: 同步给所有可见玩家

ApplyAnimation(playerid, "PED", "WALK_DRUNK", 4.1, true, true, true, true, 1, SYNC_OTHER);
// SYNC_OTHER: 仅同步给其他玩家（自身不同步）
```

## 注意事项

:::tip

- forceSync 参数默认值为 0（SYNC_NONE），通常无需设置，玩家会自动同步动画
- 强制同步模式适用于玩家无法自主同步的特殊场景（如暂停状态）

:::

:::warning

使用无效的动画资源库会导致玩家游戏崩溃（该问题已在 open.mp 中修复）

:::

## 相关函数

- [ClearAnimations](ClearAnimations): 清除玩家当前动画
- [SetPlayerSpecialAction](SetPlayerSpecialAction): 设置玩家特殊动作
- [GetPlayerAnimFlags](GetPlayerAnimFlags): 获取动画标志位
- [IsValidAnimationLibrary](IsValidAnimationLibrary): 验证动画资源库有效性
- [EnableAllAnimations](EnableAllAnimations): 启用缺失版本动画支持

## 相关资源

- [动画资源列表](../resources/animations)
