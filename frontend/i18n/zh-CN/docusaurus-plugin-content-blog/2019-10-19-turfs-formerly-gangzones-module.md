---
slug: turfs-formerly-gangzones-module
title: Turf（原帮派区域）模块
authors: j0sh
---

大家好！我刚刚完成了Turf（领地）功能在服务器中的实现，觉得可以发文介绍一下这个模块，顺便告诉大家我们并没有放弃或停止开发！

<!-- truncate -->

:::warning

以下内容已过时，不反映 open.mp 的当前状态。本文发布于此仅作归档用。

:::

```c
// 创建一个领地。可指定一个玩家ID将其设为该玩家的领地。
native Turf:Turf_Create(Float:minx, Float:miny, Float:maxx, Float:maxy, Player:owner = INVALID_PLAYER_ID);

// 销毁一个领地。
native Turf_Destroy(Turf:turf);

// 向一个或一批玩家显示一个领地。
// 如果 playerid = INVALID_PLAYER_ID，将发送给所有玩家。
native Turf_Show(Turf:turf, colour, Player:playerid = INVALID_PLAYER_ID);

// 对一个或一批玩家隐藏一个领地。
// 如果 playerid = INVALID_PLAYER_ID，将发送给所有玩家。
native Turf_Hide(Turf:turf, Player:playerid = INVALID_PLAYER_ID);

// 对一个或一批玩家闪烁显示一个领地。
// 如果 playerid = INVALID_PLAYER_ID，将发送给所有玩家。
native Turf_Flash(Turf:turf, colour, Player:playerid = INVALID_PLAYER_ID);

// 停止对一个或一批玩家闪烁显示一个领地。
// 如果 playerid = INVALID_PLAYER_ID，将发送给所有玩家。
native Turf_StopFlashing(Turf:turf, Player:playerid = INVALID_PLAYER_ID);
```

很明显，这与传统API不同，但不用担心，我们会为这类功能提供封装层，以确保普通脚本无需修改即可重新编译，且不会出现问题。

你可能还想知道另一个重要事实：所有Turf都在同一个资源池中，脚本最多可以创建4,294,967,295个Turf。但是，客户端一次最多只能同时处理1024个Turf。
