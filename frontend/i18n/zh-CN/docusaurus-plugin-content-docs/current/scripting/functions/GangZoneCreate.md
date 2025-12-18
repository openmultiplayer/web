---
title: GangZoneCreate
sidebar_label: GangZoneCreate
description: 创建帮派区域（彩色雷达区域）。
tags: ["帮派区域"]
---

## 描述

创建帮派区域（彩色雷达区域）。

| 参数       | 说明                      |
| ---------- | ------------------------- |
| Float:minX | 帮派区域西侧边界的 X 坐标 |
| Float:minY | 帮派区域南侧边界的 Y 坐标 |
| Float:maxX | 帮派区域东侧边界的 X 坐标 |
| Float:maxY | 帮派区域北侧边界的 Y 坐标 |

## 返回值

返回创建区域的 ID，创建失败返回 **-1**

## 示例

```c
new gangZone;

public OnGameModeInit()
{
    gangZone = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);
    return 1;
}
```

```
                          最大Y坐标
                          v
             -------------* < 最大X坐标
             |            |
             |  帮派区域   |
             |   中心点    |
             |            |
      最小X坐标 > *-------------
             ^
             最小Y坐标
```

## 注意事项

:::warning

- 最多支持创建 1024 个帮派区域
- 参数顺序错误会导致区域显示异常

:::

:::tip

此函数仅创建帮派区域，需使用[GangZoneShowForPlayer](GangZoneShowForPlayer)或[GangZoneShowForAll](GangZoneShowForAll)进行显示

:::

## 相关函数

- [GangZoneDestroy](GangZoneDestroy): 销毁帮派区域
- [GangZoneShowForPlayer](GangZoneShowForPlayer): 为玩家显示帮派区域
- [GangZoneShowForAll](GangZoneShowForAll): 为所有玩家显示帮派区域
- [GangZoneHideForPlayer](GangZoneHideForPlayer): 为玩家隐藏帮派区域
- [GangZoneHideForAll](GangZoneHideForAll): 为所有玩家隐藏帮派区域
- [GangZoneFlashForPlayer](GangZoneFlashForPlayer): 使帮派区域对玩家闪烁
- [GangZoneFlashForAll](GangZoneFlashForAll): 使帮派区域对所有玩家闪烁
- [GangZoneStopFlashForPlayer](GangZoneStopFlashForPlayer): 停止帮派区域对玩家闪烁
- [GangZoneStopFlashForAll](GangZoneStopFlashForAll): 停止帮派区域对所有玩家闪烁

## 帮派区域编辑器

- [Prineside 开发工具-帮派区域编辑器](https://dev.prineside.com/en/gtasa_gangzone_editor/)
