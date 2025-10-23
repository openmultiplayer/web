---
title: 延迟补偿机制
sidebar_label: 延迟补偿机制
description: 延迟补偿机制说明。
---

SA-MP 服务器默认启用子弹射击的延迟补偿机制。

可通过修改 [server.cfg](server.cfg) 中的 `lagcompmode` 服务器变量或 [config.json](config.json) 中的 `game.lag_compensation_mode` 来切换该功能。

将该值设为 0 将完全禁用延迟补偿，此时玩家需要进行射击预判（需朝目标移动方向提前射击）。

禁用延迟补偿将导致 [OnPlayerWeaponShot](../scripting/callbacks/OnPlayerWeaponShot) 回调函数无法被触发。

此变量仅能在 [server.cfg](server.cfg) 或 [config.json](config.json) 配置文件中进行设置。
