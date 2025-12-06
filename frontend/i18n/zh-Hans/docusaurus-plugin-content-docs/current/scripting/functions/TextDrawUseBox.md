---
title: TextDrawUseBox
sidebar_label: TextDrawUseBox
description: 切换文本框显示状态
tags: ["文本绘图"]
---

## 描述

控制文本绘图是否显示背景文本框。

| 参数           | 说明                              |
| -------------- | --------------------------------- |
| Text:textid    | 需操作的文本绘图 ID               |
| bool:enableBox | 设为'true'启用文本框，'false'禁用 |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（通常表示指定文本绘图不存在）

## 示例代码

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(100.0, 33.0, "示例文本绘图");
    TextDrawUseBox(gMyTextdraw, true); // 启用文本框
    return 1;
}
```

## 注意事项

:::tip

若文本绘图已处于显示状态，需通过[TextDrawShowForAll](TextDrawShowForAll)/[TextDrawShowForPlayer](TextDrawShowForPlayer)重新显示才能使变更生效

:::

## 相关函数

- [TextDrawCreate](TextDrawCreate): 创建文本绘图
- [TextDrawDestroy](TextDrawDestroy): 销毁文本绘图
- [TextDrawIsBox](TextDrawIsBox): 检测文本框状态
- [TextDrawColor](TextDrawColor): 设置文本颜色
- [TextDrawBoxColor](TextDrawBoxColor): 设置文本框颜色
- [TextDrawBackgroundColor](TextDrawBackgroundColor): 设置文本背景色
- [TextDrawAlignment](TextDrawAlignment): 设置文本对齐方式
- [TextDrawFont](TextDrawFont): 设置文本字体样式
- [TextDrawLetterSize](TextDrawLetterSize): 设置文本字符尺寸
- [TextDrawTextSize](TextDrawTextSize): 设置文本框尺寸
- [TextDrawSetOutline](TextDrawSetOutline): 设置文本描边效果
- [TextDrawSetShadow](TextDrawSetShadow): 设置文本阴影效果
- [TextDrawSetProportional](TextDrawSetProportional): 启用比例缩放
- [TextDrawSetString](TextDrawSetString): 更新文本内容
- [TextDrawShowForPlayer](TextDrawShowForPlayer): 为玩家显示文本
- [TextDrawHideForPlayer](TextDrawHideForPlayer): 对玩家隐藏文本
- [TextDrawShowForAll](TextDrawShowForAll): 全局显示文本
- [TextDrawHideForAll](TextDrawHideForAll): 全局隐藏文本
