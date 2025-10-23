---
title: PlayerTextDrawSetShadow
sidebar_label: PlayerTextDrawSetShadow
description: 为玩家文本绘图的文本添加右下角阴影
tags: ["玩家", "文本绘图", "玩家文本绘图"]
---

## 描述

为玩家文本绘图的文本添加右下角阴影效果，阴影的字体样式与文本字体保持一致

| 参数名            | 说明                          |
| ----------------- | ----------------------------- |
| playerid          | 要设置阴影的玩家 ID           |
| PlayerText:textid | 要设置阴影的玩家文本绘图的 ID |
| shadowSize        | 阴影尺寸（0 为隐藏阴影）      |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（玩家或文本绘图不存在）

## 示例

```c
new PlayerText:welcomeText[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my server!");
    PlayerTextDrawSetShadow(playerid, welcomeText[playerid], 1); // 设置1单位阴影

    PlayerTextDrawShow(playerid, welcomeText[playerid]);
    return 1;
}
```

## 注意事项

:::tip

当阴影尺寸超过文本区域大小时，阴影可能会被方框边界裁剪

:::

## 相关函数

- [CreatePlayerTextDraw](CreatePlayerTextDraw): 创建玩家文本绘图
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): 销毁玩家文本绘图
- [PlayerTextDrawGetShadow](PlayerTextDrawGetShadow): 获取阴影尺寸
- [PlayerTextDrawColor](PlayerTextDrawColor): 设置文本颜色
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): 设置方框颜色
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): 设置背景颜色
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): 设置对齐方式
- [PlayerTextDrawFont](PlayerTextDrawFont): 设置字体类型
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): 设置字符尺寸
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): 设置文本区域尺寸
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): 切换轮廓显示
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): 启用比例缩放
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): 切换方框显示
- [PlayerTextDrawSetString](PlayerTextDrawSetString): 修改文本内容
- [PlayerTextDrawShow](PlayerTextDrawShow): 显示文本绘图
- [PlayerTextDrawHide](PlayerTextDrawHide): 隐藏文本绘图
