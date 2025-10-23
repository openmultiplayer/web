---
title: 武器状态
sidebar_label: 武器状态
description: 武器状态常量。
---

以下为 [GetPlayerWeaponState](../functions/GetPlayerWeaponState) 函数使用的武器状态定义：

| ID  | 定义                     | 描述                                                                                                          |
| --- | ------------------------ | ------------------------------------------------------------------------------------------------------------- |
| -1  | WEAPONSTATE_UNKNOWN      | 未知状态（当玩家处于车辆中、观战状态或[玩家状态](../functions/GetPlayerState)为 PLAYER_STATE_SPAWNED 时触发） |
| 0   | WEAPONSTATE_NO_BULLETS   | 玩家当前武器弹药已耗尽                                                                                        |
| 1   | WEAPONSTATE_LAST_BULLET  | 玩家当前武器仅剩最后一发弹药                                                                                  |
| 2   | WEAPONSTATE_MORE_BULLETS | 玩家当前武器存有多发弹药                                                                                      |
| 3   | WEAPONSTATE_RELOADING    | 玩家正在为当前武器装填弹药                                                                                    |
