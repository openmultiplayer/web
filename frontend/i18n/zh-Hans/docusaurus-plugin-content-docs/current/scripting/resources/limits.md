---
title: 限制
sidebar_label: 限制
description: 游戏/服务器施加的所有限制列表。
tags: []
---

## 游戏内实体

| 类型                                                                                                                                          | 限制 (0.3.7)  |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| 玩家                                                                                                                                          | 1000          |
| [车辆](../functions/CreateVehicle)<sup>(4)(6)</sup>                                                                                           | 2000          |
| [车辆模型](../functions/CreateVehicle)<sup>(1)</sup>                                                                                          | 无限制        |
| [物体](../functions/CreateObject)<sup>(4)(6)</sup>                                                                                            | 1000          |
| [虚拟世界](../functions/SetPlayerVirtualWorld)                                                                                                | 2,147,483,647 |
| [室内场景](../functions/SetPlayerInterior)                                                                                                    | 256           |
| [角色职业](../functions/AddPlayerClass)                                                                                                       | 320           |
| [地图图标](../functions/SetPlayerMapIcon)<sup>(4)</sup>                                                                                       | 100           |
| [竞速检查点](../functions/SetPlayerRaceCheckpoint)<sup>(4)</sup>                                                                              | 1             |
| [检查点](../functions/SetPlayerCheckpoint)<sup>(4)</sup>                                                                                      | 1             |
| [拾取物](../functions/CreatePickup)<sup>(4)</sup>                                                                                             | 4096          |
| [全局 3D 标签](../functions/Create3DTextLabel)<sup>(4)</sup>                                                                                  | 1024          |
| [玩家专属 3D 文本标签](../functions/CreatePlayer3DTextLabel)<sup>(4)</sup>                                                                    | 1024          |
| [聊天泡泡字符串](../functions/SetPlayerChatBubble)                                                                                            | 144 字符      |
| [SetObjectMaterialText](../functions/SetObjectMaterialText), [SetPlayerObjectMaterialText](../functions/SetPlayerObjectMaterialText) 文本长度 | 2048 字符     |
| [帮派区域](../functions/GangZoneCreate)                                                                                                       | 1024          |
| [玩家专属帮派区域](../functions/CreatePlayerGangZone)                                                                                         | 1024          |
| [菜单](../functions/CreateMenu)                                                                                                               | 128           |
| [玩家附加物体](../functions/SetPlayerAttachedObject)                                                                                          | 10            |
| [玩家变量](../functions/SetPVarInt)                                                                                                           | 800           |
| [服务器变量 (0.3.7 R2/omp)](../functions/SetSVarInt)                                                                                          | 无限制        |
| [角色](../functions/CreateActor) (0.3.7 起)<sup>(4)(5)</sup>                                                                                  | 1000          |
| [爆炸效果](../functions/CreateExplosion)                                                                                                      | 10            |

## 服务器属性 - SA-MP / omp

| 类型                                                   | SA-MP 限制 (0.3.7)  | omp                 |
| ------------------------------------------------------ | ------------------- | ------------------- |
| 游戏模式                                               | 16                  | 无限制              |
| 滤镜脚本                                               | 16                  | 无限制              |
| 文本输入（聊天/指令）                                  | 128 单元 (512 字节) | 128 单元 (512 字节) |
| 文本输出                                               | 144 单元 (576 字节) | 128 单元 (512 字节) |
| 名称长度 ([SetPlayerName](../functions/SetPlayerName)) | 24 字符             | 24 字符             |

## 文本绘图

| 类型                                 | 限制 (0.3.7) |
| ------------------------------------ | ------------ |
| 字符串长度<sup>(2)</sup>             | 1024 字符    |
| 单个客户端屏幕显示数量<sup>(3)</sup> | 2048 + 256   |
| 单个客户端屏幕精灵图显示数量         | 100          |
| 服务器全局创建数量                   | 2048         |
| 玩家专属创建数量                     | 256          |

## 对话框

| 类型                                                 | 限制 (0.3.7) |
| ---------------------------------------------------- | ------------ |
| 对话框 ID                                            | 32768        |
| 信息（主文本）                                       | 4096         |
| 标题                                                 | 64           |
| 输入文本框 (DIALOG_STYLE_INPUT/PASSWORD)             | 128          |
| 选项卡列表列数 (DIALOG_STYLE_TABLIST(\_HEADERS))     | 4            |
| 选项卡列表列字符数 (DIALOG_STYLE_TABLIST(\_HEADERS)) | 128          |
| 选项卡列表行字符数 (DIALOG_STYLE_TABLIST(\_HEADERS)) | 256          |

**注意事项:**

1. 虽然 0.3 版本中车辆模型数量无限制，但使用大量车辆模型会影响客户端性能
2. 尽管文本绘图字符串限制为 1024 字符，若在 255 字符后使用颜色代码（如~r~）可能导致客户端崩溃
3. 理论上可为单个玩家同时显示所有文本绘图，但不建议这样做
4. 可通过[流加载插件](https://github.com/samp-incognito/samp-streamer-plugin)突破这些限制，该插件通过仅在玩家附近创建实体等方式工作
5. 受客户端限制，实际最多仅能显示 51 个角色
6. 车辆 ID 从 1 开始编号，因此实际范围为 1-1999（即使 MAX_VEHICLES 设为 2000），物体和玩家专属物体 ID 编号规则相同
