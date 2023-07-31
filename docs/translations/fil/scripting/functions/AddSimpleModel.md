---
title: AddSimpleModel
description: Nagdaragdag ng bagong custom na simpleng object model para sa pag-download.
tags: []
---

<VersionWarn version='SA-MP 0.3.DL R1' />

## Description

Nagdaragdag ng bagong custom na simpleng object model para sa pag-download. Ang mga file ng modelo ay maiimbak sa Documents\GTA San Andreas User Files\SAMP\cache ng player sa ilalim ng Server IP at Port folder sa isang CRC-form file name.

| Name         | Description                                                                                                                 |
| ------------ | --------------------------------------------------------------------------------------------------------------------------- |
| virtualworld | Ang virtual world ID para gawing available ang modelo sa. Gamitin ang -1 para sa lahat ng mundo.                            |
| baseid       | Ang batayang object model ID na gagamitin (orihinal na object na gagamitin kapag nabigo ang pag-download).                  |
| newid        | Ang bagong object model ID ay mula -1000 hanggang -30000 (29000 slots) na gagamitin sa ibang pagkakataon kasama ang CreateObject o CreatePlayerObject.|
| dffname      | Pangalan ng .dff model collision file na matatagpuan sa folder ng server ng mga modelo bilang default (setting ng artpath)   |
| txdname      | Pangalan ng .txd model texture file na matatagpuan sa folder ng server ng mga modelo bilang default (setting ng artpath).    |

## Returns

1: Matagumpay na naisakatuparan ang function.

0: Nabigo ang function na isagawa.

## Examples

```c
public OnGameModeInit()
{
    AddSimpleModel(-1, 19379, -2000, "wallzzz.dff", "wallzzz.txd");
    return 1;
}
```

```c
AddSimpleModel(-1, 19379, -2000, "wallzzz.dff", "wallzzz.txd");
```

## Notes

:::tip

Ang `useartwork` ay dapat munang paganahin sa mga setting ng server upang ito ay gumana Kapag ang virtualworld ay nakatakda, ang mga modelo ay mada-download kapag ang manlalaro ay pumasok sa partikular na mundo

:::

:::warning

Kasalukuyang walang mga paghihigpit sa kung kailan mo maaaring tawagan ang function na ito, ngunit magkaroon ng kamalayan na kung hindi mo sila tatawagan sa loob ng OnFilterScriptInit/OnGameModeInit, magkakaroon ka ng panganib na ang ilang mga manlalaro, na nasa server na, ay maaaring hindi na-download ang mga modelo.

:::

## Related Functions

- [OnPlayerFinishedDownloading](../callbacks/OnPlayerFinishedDownloading): Tinatawag kapag natapos na ng player ang pag-download ng mga custom na modelo.