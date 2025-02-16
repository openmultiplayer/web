---
title: OnPlayerFinishedDownloading
sidebar_label: OnPlayerFinishedDownloading
description: Acest callback este apelat atunci când un jucător termină descărcarea modelelor personalizate.
tags: ["player"]
---

<VersionWarn name='callback' version='SA-MP 0.3.DL R1' />

## Descriere

Acest callback este apelat atunci când un jucător termină descărcarea modelelor personalizate. Pentru mai multe informații despre cum să adăugați modele personalizate la serverul dvs., consultați firul de lansare și acest tutorial.

| Nume         | Descriere                                                                                |
| ------------ | ---------------------------------------------------------------------------------------- |
| playerid     | ID-ul jucătorului care a terminat descărcarea modelelor personalizate.                   |
| virtualworld | ID-ul lumii virtuale pentru care jucătorul a terminat de descărcat modele personalizate. |

## Returnări

Acest callback nu se ocupă de returnări.

## Exemple

```c
public OnPlayerFinishedDownloading(playerid, virtualworld)
{
    SendClientMessage(playerid, 0xffffffff, "Descărcări finalizate.");
    return 1;
}
```

## Note

:::tip

Acest callback este apelat de fiecare dată când un jucător schimbă lumi virtuale, chiar dacă nu există modele personalizate prezente în acea lume.

:::

## Related Functions