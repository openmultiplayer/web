---
title: ApplyAnimation
description: Mag-apply ng animation sa isang player.
tags: []
---

## Description

Mag-apply ng animation sa isang player.

| Name       | Description                                                                                                                                                                                                                                                                                                   |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| playerid   | Ang ID ng player kung saan ilalapat ang animation.                                                                                                                                                                                                                                                               |
| animlib[]  | Ang library ng animation kung saan maglalapat ng animation.                                                                                                                                                                                                                                                       |
| animname[] | Ang pangalan ng animation na ilalapat, sa loob ng tinukoy na library.                                                                                                                                                                                                                                             |
| fDelta     | Ang bilis ng paglalaro ng animation (gamitin ang 4.1).                                                                                                                                                                                                                                                                    |
| loop       | Kung itatakda sa 1, mag-loop ang animation. Kung nakatakda sa 0, magpe-play ang animation nang isang beses.                                                                                                                                                                                                                              |
| lockx      | Kung nakatakda sa 0, ibabalik ang player sa kanilang lumang X coordinate kapag kumpleto na ang animation (para sa mga animation na gumagalaw sa player tulad ng paglalakad). 1 hindi na sila ibabalik sa dati nilang posisyon.                                                                                                             |
| locky      | Pareho sa itaas ngunit para sa Y axis. Dapat panatilihing pareho sa nakaraang parameter.                                                                                                                                                                                                                          |
| freeze     | Ang pagtatakda nito sa 1 ay mag-freeze sa player sa dulo ng animation. 0 ay hindi.                                                                                                                                                                                                                             |
| time       | Timer sa millisecond. Para sa isang walang katapusang loop dapat itong 0.                                                                                                                                                                                                                                                |
| forcesync  | Itakda sa 1 upang gawing i-sync ng server ang animation sa lahat ng iba pang manlalaro sa streaming radius (opsyonal). Gumagana ang 2 tulad ng 1, ngunit ilalapat LAMANG ang animation sa mga naka-stream na manlalaro, ngunit HINDI ang aktwal na player na ini-animate (kapaki-pakinabang para sa mga npc animation at paulit-ulit na animation kapag ang mga manlalaro ay ini-stream) |

## Returns

Ang function na ito ay palaging nagbabalik ng 1, kahit na ang tinukoy na player ay hindi umiiral, o alinman sa mga parameter ay hindi wasto (hal. di-wastong library).

## Examples

```c
ApplyAnimation(playerid, "PED", "WALK_DRUNK", 4.1, 1, 1, 1, 1, 1, 1);
```

## Notes

:::tip

Ang 'forcesync' na opsyonal na parameter, na nagde-default sa 0, sa karamihan ng mga kaso ay hindi kailangan dahil ang mga manlalaro ay nagsi-sync ng mga animation mismo. Ang parameter na 'forcesync' ay maaaring pilitin ang lahat ng mga manlalaro na nakakakita ng 'playerid' na i-play ang animation kahit na ang player ay gumaganap ng animation na iyon. Ito ay kapaki-pakinabang sa mga pagkakataon kung saan ang player ay hindi maaaring i-sync ang animation sa kanilang sarili. Halimbawa, maaaring ma-pause ang mga ito.

:::

:::warning

Ang isang di-wastong library ng animation ay mag-crash sa laro ng manlalaro.

:::

## Related Functions

- [ClearAnimations](ClearAnimations): I-clear ang anumang mga animation na ginagawa ng isang player.
- [SetPlayerSpecialAction](SetPlayerSpecialAction): Magtakda ng espesyal na aksyon ng manlalaro.