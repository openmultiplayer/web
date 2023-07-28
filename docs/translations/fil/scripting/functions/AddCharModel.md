---
title: AddCharModel
description: Nagdaragdag ng bagong custom na modelo ng character para sa pag-download.
tags: []
---

<VersionWarn version='SA-MP 0.3.DL R1' />

## Description

Nagdaragdag ng bagong custom na modelo ng character para sa pag-download. Ang mga file ng modelo ay maiimbak sa Documents\GTA San Andreas User Files\SAMP\cache ng player sa ilalim ng Server IP at Port folder sa isang CRC-form file name.

| Name    | Description                                                                                                                  |
| ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| baseid  | Ang base skin model ID na gagamitin (gawi ng character at orihinal na character na gagamitin kapag nabigo ang pag-download). |
| newid   | Ang bagong skin model ID ay mula 20000 hanggang 30000 (10000 slots) na gagamitin mamaya sa SetPlayerSkin                     |
| dffname | Pangalan ng .dff model collision file na matatagpuan sa folder ng server ng mga modelo bilang default (setting ng artpath).  |
| txdname | Pangalan ng .txd model texture file na matatagpuan sa folder ng server ng mga modelo bilang default (setting ng artpath).    |

## Returns

1: Matagumpay na naisakatuparan ang function.

0: Nabigong maisagawa ang function.

## Examples

```c
public OnGameModeInit()
{
    AddCharModel(305, 20001, "lvpdpc2.dff", "lvpdpc2.txd");
    AddCharModel(305, 20002, "lapdpd2.dff", "lapdpd2.txd");
    return 1;
}
```

```c
AddCharModel(305, 20001, "lvpdpc2.dff", "lvpdpc2.txd");
AddCharModel(305, 20002, "lapdpd2.dff", "lapdpd2.txd");
```

## Notes

:::tip

ang useartwork ay dapat munang paganahin sa mga setting ng server upang ito ay gumana

:::

:::warning

Kasalukuyang walang mga paghihigpit sa kung kailan mo maaaring tawagan ang function na ito, ngunit magkaroon ng kamalayan na kung hindi mo sila tatawagan sa loob ng OnFilterScriptInit/OnGameModeInit, magkakaroon ka ng panganib na ang ilang mga manlalaro, na nasa server na, ay maaaring hindi na-download ang mga modelo.

:::

## Related Functions

- [SetPlayerSkin](SetPlayerSkin): Itakda ang pananamit ng isang manlalaro.
