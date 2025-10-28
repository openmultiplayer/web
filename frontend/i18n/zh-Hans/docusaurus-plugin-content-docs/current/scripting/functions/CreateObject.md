---
title: CreateObject
sidebar_label: CreateObject
description: 在游戏世界指定坐标处创建物体。
tags: ["物体"]
---

## 描述

在三维空间指定位置生成静态/动态物体模型。

| 参数               | 说明                                         |
| ------------------ | -------------------------------------------- |
| modelid            | 模型 ID                                      |
| Float:x            | X 轴坐标                                     |
| Float:y            | Y 轴坐标                                     |
| Float:z            | Z 轴坐标                                     |
| Float:rotationX    | X 轴旋转角度                                 |
| Float:rotationY    | Y 轴旋转角度                                 |
| Float:rotationZ    | Z 轴旋转角度                                 |
| Float:drawDistance | （可选参数）自定义渲染距离（0.0=使用默认值） |

## 应用示例

```c
public OnGameModeInit()
{
    // 默认渲染距离的物体
    CreateObject(2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);
    // 自定义300单位渲染距离的物体
    CreateObject(2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0, 300.0);
    return 1;
}
```

## 注意事项

:::tip

全局物体数量上限为 1000（MAX_OBJECTS），建议使用[流加载插件](https://github.com/samp-incognito/samp-streamer-plugin)突破限制

:::

## 关联函数

- [DestroyObject](DestroyObject): 销毁物体
- [IsValidObject](IsValidObject): 验证物体有效性
- [MoveObject](MoveObject): 移动物体
- [StopObject](StopObject): 停止物体移动
- [SetObjectPos](SetObjectPos): 设置物体坐标
- [SetObjectRot](SetObjectRot): 设置物体旋转
- [GetObjectPos](GetObjectPos): 获取物体坐标
- [GetObjectRot](GetObjectRot): 获取物体旋转角度
- [AttachObjectToPlayer](AttachObjectToPlayer): 绑定物体到玩家
- [SetObjectMaterialText](SetObjectMaterialText): 设置物体材质文字
- [SetObjectMaterial](SetObjectMaterial): 替换物体材质
- [CreatePlayerObject](CreatePlayerObject): 创建玩家私有物体
- [DestroyPlayerObject](DestroyPlayerObject): 销毁私有物体
- [IsValidPlayerObject](IsValidPlayerObject): 验证私有物体有效性
- [MovePlayerObject](MovePlayerObject): 移动私有物体
- [StopPlayerObject](StopPlayerObject): 停止私有物体移动
- [SetPlayerObjectPos](SetPlayerObjectPos): 设置私有物体坐标
- [SetPlayerObjectRot](SetPlayerObjectRot): 设置私有物体旋转
- [GetPlayerObjectPos](GetPlayerObjectPos): 获取私有物体坐标
- [GetPlayerObjectRot](GetPlayerObjectRot): 获取私有物体旋转
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): 绑定私有物体到玩家
- [SetPlayerObjectMaterialText](SetPlayerObjectMaterialText): 设置私有物体材质文字
- [SetPlayerObjectMaterial](SetPlayerObjectMaterial): 替换私有物体材质
