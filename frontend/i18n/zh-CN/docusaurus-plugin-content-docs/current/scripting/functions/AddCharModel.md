---
title: AddCharModel
sidebar_label: AddCharModel
description: 添加可供下载的新自定义角色模型
tags: ["自定义皮肤", "角色模型"]
---

<VersionWarnZH_CN version='SA-MP 0.3.DL R1' />

## 描述

添加可供下载的新自定义角色模型。模型文件将存储在玩家的「文档\GTA San Andreas User Files\SAMP\cache」目录下，按服务器 IP 和端口分类的文件夹中，并以 CRC 格式文件名保存。

| 参数                   | 说明                                                                                 |
| ---------------------- | ------------------------------------------------------------------------------------ |
| baseid                 | 基础皮肤模型 ID（用于定义角色行为特性，当下载失败时将使用该原始角色模型）。          |
| newid                  | 新皮肤模型 ID（范围 20001-30000，共 10000 个槽位），后续可通过 SetPlayerSkin 使用    |
| const dff[]            | .dff 模型碰撞文件名，默认位于服务器的 models 文件夹（可通过 artpath 配置修改路径）。 |
| const textureLibrary[] | .txd 模型贴图文件名，默认位于服务器的 models 文件夹（可通过 artpath 配置修改路径）。 |

## 返回值

**1:** 函数执行成功。

**0:** 函数执行失败。

## 示例

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

## 注意事项

:::tip

需先在服务器配置中启用**useartwork**或**artwork.enable**选项才能使此函数生效。

:::

:::warning

当前对调用时机没有限制，但请注意：若未在[OnFilterScriptInit](../callbacks/OnFilterScriptInit)/[OnGameModeInit](../callbacks/OnGameModeInit)回调中调用，已连接的玩家可能无法下载这些模型。

:::

## 相关函数

- [SetPlayerSkin](SetPlayerSkin): 设置玩家皮肤。
