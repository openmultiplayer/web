---
title: SetPlayerObjectMaterial
sidebar_label: SetPlayerObjectMaterial
description: 替换玩家专属物体的纹理为游戏内其他模型的纹理
tags: ["玩家", "物体", "玩家物体"]
---

## 描述

将玩家专属物体的纹理替换为游戏内其他模型的纹理

| 参数名                 | 说明                                                                   |
| ---------------------- | ---------------------------------------------------------------------- |
| playerid               | 所属玩家 ID                                                            |
| objectid               | 要替换纹理的物体 ID                                                    |
| materialIndex          | 要修改的材质索引（0-15）                                               |
| modelid                | 目标纹理所在的模型 ID。0 表示透明通道，-1 表示仅修改材质颜色不改变纹理 |
| const textureLibrary[] | 包含替换纹理的 txd 文件名称（若无需求使用"none"）                      |
| const textureName[]    | 要使用的替换纹理名称（若无需求使用"none"）                             |
| materialColour         | 材质颜色（ARGB 格式整型或十六进制）。0 表示保留原色                    |

## 返回值

本函数没有特定返回值

## 示例

```c
public OnPlayerCommandText(playerid,cmdtext[])
{
    if (!strcmp(cmdtext, "/objmat", true))
    {
        new
            Float:x, Float:y, Float:z,
            myObject;

        GetPlayerPos(playerid, x, y, z);
        myObject = CreatePlayerObject(playerid, 19371, x, y, z+0.5, 0.0, 0.0, 0.0, 300.0);
        SetPlayerObjectMaterial(playerid, myObject, 0, 19341, "egg_texts", "easter_egg01", 0xFFFFFFFF);
        // 将玩家专属物体的纹理替换为模型19341的纹理
        return 1;
    }
    return 0;
}
```

## 注意事项

:::tip

修改材质颜色会导致物体顶点光照效果消失

:::

:::warning

必须使用 ARGB 颜色格式，而非客户端消息中常用的 RGBA 格式

:::

## 相关函数

- [SetObjectMaterial](SetObjectMaterial): 替换全局物体的纹理

## 高级地图编辑器

- [Texture Studio](https://github.com/Pottus/Texture-Studio) 作者：Pottus
- [Ultimate Creator](https://github.com/NexiusTailer/Ultimate-Creator) 作者：Nexius
- [Fusez's Map Editor](https://github.com/fusez/Map-Editor-V3) 作者：RedFusion
