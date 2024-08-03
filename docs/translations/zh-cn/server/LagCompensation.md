---
title: "延迟补偿"
description: 延迟补偿说明.
---

自 0.3z 起，SA-MP 服务器默认启用武器开火的延迟补偿。 它可以使用 [server.cfg](server.cfg) 中的 `lagcompmode` 服务器变量进行切换。 将其设置为 0 将完全禁用延迟补偿，玩家将必须提前射击（在目标之前射击）。

禁用延迟补偿将阻止调用 [OnPlayerWeaponShot](../scripting/callbacks/OnPlayerWeaponShot)。

此变量只能在 [server.cfg](server.cfg) 中设置。
