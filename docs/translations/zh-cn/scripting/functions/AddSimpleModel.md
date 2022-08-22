---
title: AddSimpleModel
description: 添加新的自定义简单物体模型以供下载。
tags: []
---

<VersionWarnCN version='SA-MP 0.3.DL R1' />

## 描述

添加新的自定义简单物体模型以供下载。模型文件将以 .CRC 格式存储在玩家的 Documents\GTA San Andreas User Files\SAMP\cache 的服务器 IP 和端口的文件夹中。

| 参数名       | 说明                                                                                                           |
| ------------ | -------------------------------------------------------------------------------------------------------------- |
| virtualworld | 使模型可用的虚拟世界 ID。使用-1 表示所有世界。                                                                 |
| baseid       | 要使用的基本物体模型 ID(下载失败时使用的原始物体)。                                                            |
| newid        | 新的物体模型 ID，范围从-1000 到-30000(共 29000 个插槽)，稍后将与 CreateObject 或 CreatePlayerObject 一起使用。 |
| dffname      | 默认情况下位于服务器的 models 文件夹下的 .dff 模型碰撞文件的名称(artpath 设置)。                               |
| txdname      | 默认情况下位于服务器的 models 文件夹下的 .txd 模型纹理文件的名称(artpath 设置)。                               |

## 返回值

1:函数执行成功。

0:函数执行失败。

## 案例

```c
public OnGameModeInit()
{
    AddSimpleModel(-1, 19379, -2000, "wallzzz.dff", "wallzzz.txd");
    return 1;
}
```

```c
AddSimpleModel(-1, 19379, -2000, "wallzzz.dff", "wallzzz.txd");
```

## 要点

:::tip

必须首先在服务器设置中启用`useartwork`，这样才能在设置虚拟世界时工作，一旦玩家进入特定的世界，模型就会被下载

:::

:::warning

目前还没有限制何时可以调用这个函数，但请注意，如果你没有在 OnFilterScriptInit/OnGameModeInit 中调用它们，你就会面临一些已经在服务器上的玩家可能没有下载模型的风险。

:::

## 相关函数

- [OnPlayerFinishedDownloading](../callbacks/OnPlayerFinishedDownloading): 当玩家下载完成自定义模型时调用。
