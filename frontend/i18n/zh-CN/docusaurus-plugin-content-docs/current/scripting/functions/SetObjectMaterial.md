---
title: SetObjectMaterial
sidebar_label: SetObjectMaterial
description: 用游戏中其他模型的纹理替换物体的材质。
tags: ["物体"]
---

## 描述

使用游戏中其他模型的纹理替换指定物体的材质。

| 参数                   | 说明                                                                     |
| ---------------------- | ------------------------------------------------------------------------ |
| objectid               | 要修改的物体 ID                                                          |
| materialIndex          | 要修改的材质索引（0-15）                                                 |
| modelid                | 包含替换纹理的模型 ID（0 表示透明通道，-1 表示仅修改材质颜色不改变纹理） |
| const textureLibrary[] | 包含替换纹理的 txd 文件名称（不需要时使用"none"）                        |
| const textureName[]    | 要使用的替换纹理名称（不需要时使用"none"）                               |
| materialColour         | 要设置的材质颜色（ARGB 格式的整型或十六进制值，0 表示保留原色）          |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败

## 示例代码

```c
public OnPlayerCommandText(playerid,cmdtext[])
{
    if (!strcmp(cmdtext, "/mycommand", true))
    {
        new
            Float:x, Float:y, Float:z,
            myObject;

        GetPlayerPos(playerid, x, y, z);
        myObject = CreateObject(19371, x, y, z+0.5, 0.0, 0.0, 0.0, 300.0);
        SetObjectMaterial(myObject, 0, 19341, "egg_texts", "easter_egg01", 0xFFFFFFFF);
        // 用物体19341的纹理替换当前物体的材质
        return 1;
    }
    return 0;
}
```

## 注意事项

:::tip

若修改材质颜色，物体的顶点光照效果将消失

:::

:::warning

必须使用 ARGB 颜色格式（不同于客户端消息使用的 RGBA 格式）

:::

## 相关函数

- [SetPlayerObjectMaterial](SetPlayerObjectMaterial): 设置玩家专属物体的材质
- [SetObjectMaterialText](SetObjectMaterialText): 设置物体的材质文本

## 高级地图编辑器

- [Texture Studio](https://github.com/Pottus/Texture-Studio) 作者：Pottus
- [Ultimate Creator](https://github.com/NexiusTailer/Ultimate-Creator) 作者：Nexius
- [Fusez's Map Editor](https://github.com/fusez/Map-Editor-V3) 作者：RedFusion
