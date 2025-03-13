---
title: AddSimpleModelTimed
sidebar_label: AddSimpleModelTimed
description: 添加具有时间限制的自定义简单物体模型
tags: ["自定义模型", "简单模型"]
---

<VersionWarnZH_CN version='SA-MP 0.3.DL R1' />

## 描述

添加具有时间限制的自定义简单物体模型。模型文件将存储在玩家的「文档\GTA San Andreas User Files\SAMP\cache」目录下，按服务器 IP 和端口分类的文件夹中，并以 CRC 格式文件名保存。

| 参数名                 | 说明                                                                                                     |
| ---------------------- | -------------------------------------------------------------------------------------------------------- |
| virtualWorld           | 模型生效的虚拟世界 ID，使用-1 表示全虚拟世界                                                             |
| baseid                 | 基础物体模型 ID（当下载失败时将使用该原始物体模型）                                                      |
| newid                  | 新物体模型 ID（范围-1000 至-30000，共 29000 个槽位），后续可通过 CreateObject 或 CreatePlayerObject 使用 |
| const dff[]            | .dff 模型碰撞文件名，默认位于服务器的 models 文件夹（可通过 artpath 配置修改路径）                       |
| const textureLibrary[] | .txd 模型贴图文件名，默认位于服务器的 models 文件夹（可通过 artpath 配置修改路径）                       |
| timeOn                 | 模型开始渲染的世界游戏时间（小时）                                                                       |
| timeOff                | 模型停止渲染的世界游戏时间（小时）                                                                       |

## 返回值

**1:** 函数执行成功。

**0:** 函数执行失败。

## 示例

```c
public OnGameModeInit()
{
    // 这面墙仅在上午9点至下午6点间可见
    AddSimpleModelTimed(-1, 19379, -2000, "wallzzz.dff", "wallzzz.txd", 9, 18);
    return 1;
}
```

## 注意事项

:::tip

需先在服务器配置中启用**useartwork**或**artwork.enable**选项才能使本功能生效。

当 virtualworld 参数设置时，模型将在玩家进入指定虚拟世界时自动下载。

:::

:::warning

当前对调用时机没有限制，但请注意：若未在[OnFilterScriptInit](../callbacks/OnFilterScriptInit)/[OnGameModeInit](../callbacks/OnGameModeInit)回调中调用，已连接的玩家可能无法下载这些模型。

:::

## 相关函数

- [IsValidCustomModel](IsValidCustomModel): 验证自定义模型 ID 有效性
- [GetCustomModelPath](GetCustomModelPath): 获取自定义模型路径

## 相关回调

- [OnPlayerFinishedDownloading](../callbacks/OnPlayerFinishedDownloading): 当玩家完成自定义模型下载时触发
