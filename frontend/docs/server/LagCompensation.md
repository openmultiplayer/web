---
title: "Lag Compensation"
description: Lag compensation explanation.
---

Lag compensation for fired bullets is enabled by default on SA-MP servers.

It can be toggled using the `lagcompmode` server variable in [server.cfg](server.cfg) or `game.lag_compensation_mode` in [config.json](config.json).

Setting it to 0 will disable lag compensation completely and players will have to lead their shots (fired ahead of targets).

Disabling Lag Compensation will prevent [OnPlayerWeaponShot](../scripting/callbacks/OnPlayerWeaponShot) from being called.

This variable can only be set in [server.cfg](server.cfg) or [config.json](config.json).
