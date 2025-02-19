---
title: ApplyActorAnimation
sidebar_label: ApplyActorAnimation
description: Mag-apply ng animation sa isang artista.
tags: []
---

<VersionWarn version='SA-MP 0.3.7' />

## Description

Mag-apply ng animation sa isang artista.

| Name       | Description                                                                                                                                                                                     |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| actorid    | Ang ID ng aktor kung saan ilalapat ang animation.                                                                                                                                                  |
| animlib[]  | Ang library ng animation kung saan maglalapat ng animation.                                                                                                                                         |
| animname[] | Ang pangalan ng animation na ilalapat, sa loob ng tinukoy na library.                                                                                                                               |
| fDelta     | Ang bilis ng paglalaro ng animation (gamitin ang 4.1).                                                                                                                                                      |
| loop       | Kung itatakda sa 1, mag-loop ang animation. Kung nakatakda sa 0, magpe-play ang animation nang isang beses.                                                                                                                |
| lockx      | Kung itatakda sa 0, ibabalik ang aktor sa kanilang lumang X coordinate kapag kumpleto na ang animation (para sa mga animation na gumagalaw sa aktor gaya ng paglalakad). 1 hindi na sila ibabalik sa dati nilang posisyon. |
| locky      | Pareho sa itaas ngunit para sa Y axis. Dapat panatilihing pareho sa nakaraang parameter.                                                                                                            |
| freeze     | Ang pagtatakda nito sa 1 ay mag-freeze ng isang aktor sa dulo ng animation. 0 ay hindi.                                                                                                                 |
| time       | Timer sa millisecond. Para sa isang walang katapusang loop dapat itong 0.                                                                                                                                  |

## Returns

1: Matagumpay na naisakatuparan ang function.

0: Nabigo ang function na isagawa. Ang aktor na tinukoy ay wala.

## Examples

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // Actor bilang salesperson sa Ammunation
    ApplyActorAnimation(gMyActor, "DEALER", "shop_pay", 4.1, 0, 0, 0, 0, 0); // Pay anim
    return 1;
}
```

## Notes

:::tip

Dapat mong paunang i-load ang animation library para sa player na pag-aaplayan ng aktor ng animation, at hindi para sa aktor. Kung hindi, hindi mailalapat ang animation sa aktor hanggang sa muling maipatupad ang function.

:::

## Related Functions

- [ClearActorAnimations](ClearActorAnimations): I-clear ang anumang mga animation na inilapat sa isang aktor.