# Arabic documentation translation

This is an ongoing translation, not complete Arabic coverage. The goal is to translate all English docs and correct the existing Arabic pages in one growing draft PR.

## Current coverage

Source baseline: `4014a3952e3ae9556440446c32c2b1b8ae7f2f30` (upstream master).

**25 of 1,247 documentation pages** have Arabic content in this batch. All nine previously existing Arabic pages have been rewritten against this baseline. Pages without an Arabic file still fall back to English through Docusaurus; that fallback does not count as a translation.

| Section | Arabic pages |
| --- | ---: |
| `.` | 1 |
| `client` | 2 |
| `meta` | 1 |
| `scripting/callbacks` | 14 |
| `scripting/functions` | 5 |
| `scripting/resources` | 2 |

Navigation, sidebar categories, shared version/NPC notices, and documentation accessibility labels are localized separately from page coverage. Arabic inline code is isolated left-to-right so commands such as `/quit` and paths keep their original order.

## Writing conventions

- Write clear Modern Standard Arabic. Explain the meaning in context rather than copying English sentence structure or transliterating every term.
- Keep API names, identifiers, commands, paths, model names, numeric values, and runnable examples intact. Game-client text remains in English in code examples; do not assume Arabic text works in the client.
- Translate front matter descriptions as well as prose, tables, warnings, and related-link explanations. Preserve the English heading IDs explicitly so inbound fragment links keep working.
- Use **معرّف** for ID, **الخادم** for server, **برنامج اللعبة** for client, **نمط اللعب (gamemode)** and **السكربتات الجانبية (filterscripts)** on first use. Use **مركبة** rather than assuming every vehicle is a car.
- Explain streaming as entering or leaving **نطاق العرض** for a particular player. Distinguish vehicle paint colours (**ألوان المركبة**) from paintjobs (**تصاميم الطلاء**).
- Translate callbacks as **دوال الاستدعاء**; explain them with **يستدعي الخادم هذه الدالة عندما…**. Preserve callback order, return-value polarity and the difference between previewing and buying.
- Use Docusaurus locale-level RTL rather than per-page wrapper divs. Keep code left-to-right and check mixed Arabic/API tables in a browser.
- Compare each translation to its English source, including notes and related links. Do not treat file presence or a successful build as proof of translation quality.

## Remaining work

- [ ] Remaining client guides.
- [ ] Server installation, configuration, administration and troubleshooting.
- [ ] Remaining scripting callbacks.
- [ ] Remaining scripting functions.
- [ ] Remaining scripting resources and reference tables.
- [ ] Pawn language documentation and language reference.
- [ ] Tutorials, changelog, awesome list and remaining meta pages.
- [ ] Independent Arabic language review and final full-coverage audit.

## Pages in this batch

- [client/ClientCommands.md](docusaurus-plugin-content-docs/current/client/ClientCommands.md)
- [client/sa-mp.cfg.md](docusaurus-plugin-content-docs/current/client/sa-mp.cfg.md)
- [index.md](docusaurus-plugin-content-docs/current/index.md)
- [meta/Contributing.md](docusaurus-plugin-content-docs/current/meta/Contributing.md)
- [scripting/callbacks/OnActorStreamIn.md](docusaurus-plugin-content-docs/current/scripting/callbacks/OnActorStreamIn.md)
- [scripting/callbacks/OnActorStreamOut.md](docusaurus-plugin-content-docs/current/scripting/callbacks/OnActorStreamOut.md)
- [scripting/callbacks/OnEnterExitModShop.md](docusaurus-plugin-content-docs/current/scripting/callbacks/OnEnterExitModShop.md)
- [scripting/callbacks/OnPlayerSpawn.md](docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerSpawn.md)
- [scripting/callbacks/OnPlayerStreamIn.md](docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerStreamIn.md)
- [scripting/callbacks/OnPlayerStreamOut.md](docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerStreamOut.md)
- [scripting/callbacks/OnVehicleDeath.md](docusaurus-plugin-content-docs/current/scripting/callbacks/OnVehicleDeath.md)
- [scripting/callbacks/OnVehicleMod.md](docusaurus-plugin-content-docs/current/scripting/callbacks/OnVehicleMod.md)
- [scripting/callbacks/OnVehiclePaintjob.md](docusaurus-plugin-content-docs/current/scripting/callbacks/OnVehiclePaintjob.md)
- [scripting/callbacks/OnVehicleRespray.md](docusaurus-plugin-content-docs/current/scripting/callbacks/OnVehicleRespray.md)
- [scripting/callbacks/OnVehicleSirenStateChange.md](docusaurus-plugin-content-docs/current/scripting/callbacks/OnVehicleSirenStateChange.md)
- [scripting/callbacks/OnVehicleSpawn.md](docusaurus-plugin-content-docs/current/scripting/callbacks/OnVehicleSpawn.md)
- [scripting/callbacks/OnVehicleStreamIn.md](docusaurus-plugin-content-docs/current/scripting/callbacks/OnVehicleStreamIn.md)
- [scripting/callbacks/OnVehicleStreamOut.md](docusaurus-plugin-content-docs/current/scripting/callbacks/OnVehicleStreamOut.md)
- [scripting/functions/ChangeVehicleColor.md](docusaurus-plugin-content-docs/current/scripting/functions/ChangeVehicleColor.md)
- [scripting/functions/ChangeVehiclePaintjob.md](docusaurus-plugin-content-docs/current/scripting/functions/ChangeVehiclePaintjob.md)
- [scripting/functions/GetVehicleParamsSirenState.md](docusaurus-plugin-content-docs/current/scripting/functions/GetVehicleParamsSirenState.md)
- [scripting/functions/SetVehicleHealth.md](docusaurus-plugin-content-docs/current/scripting/functions/SetVehicleHealth.md)
- [scripting/functions/SetVehicleToRespawn.md](docusaurus-plugin-content-docs/current/scripting/functions/SetVehicleToRespawn.md)
- [scripting/resources/paintjobs.md](docusaurus-plugin-content-docs/current/scripting/resources/paintjobs.md)
- [scripting/resources/vehiclehealth.md](docusaurus-plugin-content-docs/current/scripting/resources/vehiclehealth.md)
