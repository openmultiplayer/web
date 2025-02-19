---
title: "Lag Compensation"
sidebar_label: "Lag Compensation"
description: Lag compensation explanation.
---

SA-MP服务器默认启用了子弹的延迟补偿。

你可以通过在 [server.cfg](server.cfg) 中设置 `lagcompmode` 服务器变量，或在 [config.json](config.json) 中设置 `game.lag_compensation_mode` 来切换它。

将其设置为0会完全禁用延迟补偿，玩家将需要提前瞄准目标（在目标移动方向偏前的位置开火）。

禁用延迟补偿将阻止 [OnPlayerWeaponShot](../scripting/callbacks/OnPlayerWeaponShot) 回调的调用。

此变量只能在 [server.cfg](server.cfg) 或 [config.json](config.json) 中设置。

