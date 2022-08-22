---
title: AddCharModel
description: 添加新的自定义角色模型以供下载。
tags: []
---

<VersionWarnCN version='SA-MP 0.3.DL R1' />

## 描述

添加新的自定义角色模型以供下载。模型文件将以 .CRC 格式存储在玩家的 Documents\GTA San Andreas User Files\SAMP\cache 的服务器 IP 和端口的文件夹中。

| 参数名  | 说明                                                                                  |
| ------- | ------------------------------------------------------------------------------------- |
| baseid  | 要使用的基础皮肤模型 ID(下载失败时要使用的角色和原始角色的行为)。                     |
| newid   | 新的皮肤模型 ID 从 20000 到 30000(共 10000 个插槽)，稍后将与 SetPlayerSkin 一起使用。 |
| dffname | 默认情况下位于服务器的 models 文件夹下的 .dff 模型碰撞文件的名称(artpath 设置)。      |
| txdname | 默认情况下位于服务器的 models 文件夹下的 .txd 模型纹理文件的名称(artpath 设置)。      |

## 返回值

1:函数执行成功。

0:函数执行失败。

## 案例

```c
public OnGameModeInit()
{
    AddCharModel(305, 20001, "lvpdpc2.dff", "lvpdpc2.txd");
    AddCharModel(305, 20002, "lapdpd2.dff", "lapdpd2.txd");
    return 1;
}
```

```c
AddCharModel(305, 20001, "lvpdpc2.dff", "lvpdpc2.txd");
AddCharModel(305, 20002, "lapdpd2.dff", "lapdpd2.txd");
```

## 要点

:::tip

必须首先在服务器设置中启用 useartwork 才能工作

:::

:::warning

目前还没有限制何时可以调用这个函数，但请注意，如果你没有在 OnFilterScriptInit/OnGameModeInit 中调用它们，你就会面临一些已经在服务器上的玩家可能没有下载模型的风险。

:::

## 相关函数

- [SetPlayerSkin](SetPlayerSkin): 设置玩家的皮肤。
