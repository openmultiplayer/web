---
title: "Lag compensatie"
sidebar_label: "Lag compensatie"
description: Uitleg over lag compensatie.
---

Lag compensatie voor afgevuurde kogels staat standaard aan op SA-MP-servers.

Je kunt dit togglen met de servervariabele `lagcompmode` in [server.cfg](server.cfg) of `game.lag_compensation_mode` in [config.json](config.json).

Zet je deze op 0, dan is lag compensatie volledig uitgeschakeld en moeten spelers “voorschieten” (voor het doel mikken).

Het uitschakelen van lag compensatie voorkomt dat [OnPlayerWeaponShot](../scripting/callbacks/OnPlayerWeaponShot) wordt aangeroepen.

Deze variabele kan alleen worden ingesteld in [server.cfg](server.cfg) of [config.json](config.json).


