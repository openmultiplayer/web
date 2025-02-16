---
title: OnPlayerStateChange
description: This callback is called when a player changes state.
tags: ["player"]
---

## Paglalarawan

Ang callback na ito ay tinatawag kapag ang isang player ay nagbago ng estado. Halimbawa, kapag ang isang manlalaro ay nagbago mula sa pagiging driver ng isang sasakyan patungo sa pagiging on-foot.

| Name     | Description                              |
| -------- | ---------------------------------------- |
| playerid | Ang ID ng player na nagbago ng estado. |
| newstate | Ang bagong estado ng manlalaro.                  |
| oldstate | Ang dating estado ng manlalaro.             |

Sumangguni sa [Player States](../resources/playerstates) para sa listahan ng lahat ng available na estado ng manlalaro.

## Returns

Lagi itong na tatawag una sa mga filterscript.

## Halimbawa ng Paggamit

```c
public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)
{
    if (oldstate == PLAYER_STATE_ONFOOT && newstate == PLAYER_STATE_DRIVER) // Ang manlalaro ay pumasok sa isang sasakyan bilang isang driver
    {
        new vehicleid = GetPlayerVehicleID(playerid);
        AddVehicleComponent(vehicleid, 1010); // Maglagay ng NOS sa sasakyan
    }
    return 1;
}
```

## Mga Dapat Unawain

<TipNPCCallbacks />

## Mga Kaugnay na Callbacks

Maaaring maging kapaki-pakinabang ang mga sumusunod na callback, dahil nauugnay ang mga ito sa callback na ito sa isang paraan o iba pa.

- [OnPlayerInteriorChange](./OnPlayerInteriorChange): Tinatawag ang callback na ito kapag nagpalit ng interior ang isang player.

## Mga Kaugnay na Functions

Maaaring maging kapaki-pakinabang ang mga sumusunod na function, dahil nauugnay ang mga ito sa callback na ito sa isang paraan o iba pa.

- [GetPlayerState](../functions/GetPlayerState): Kunin ang kasalukuyang estado ng isang manlalaro.
- [GetPlayerSpecialAction](../functions/GetPlayerSpecialAction): Kumuha ng kasalukuyang espesyal na aksyon ng manlalaro.
- [SetPlayerSpecialAction](../functions/SetPlayerSpecialAction): Magtakda ng espesyal na aksyon ng manlalaro.
