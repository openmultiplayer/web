---
title: "Lag Compensation | open.mp"
description: "Lag compensation explanation."
canonical: https://open.mp/docs/server/LagCompensation
language: en
---

# Lag Compensation

Lag compensation for fired bullets is enabled by default on SA-MP servers.

It can be toggled using the `lagcompmode` server variable in [server.cfg](https://open.mp/docs/server/server.cfg) or `game.lag_compensation_mode` in [config.json](https://open.mp/docs/server/config.json).

Setting it to 0 will disable lag compensation completely and players will have to lead their shots (fired ahead of targets).

Disabling Lag Compensation will prevent [OnPlayerWeaponShot](https://open.mp/docs/scripting/callbacks/OnPlayerWeaponShot) from being called.

This variable can only be set in [server.cfg](https://open.mp/docs/server/server.cfg) or [config.json](https://open.mp/docs/server/config.json).
