---
title: OnObjectMoved
sidebar_label: OnObjectMoved
description: Ovaj callback se poziva kada je objekt pomjeren nakon MoveObject (kada se prestane kretati).
tags: []
---

## Deskripcija

Ovaj callback se poziva kada je objekt pomjeren nakon MoveObject (kada se prestane kretati).

| Ime      | Deskripcija                 |
| -------- | --------------------------- |
| objectid | ID objekta koji je pomjeren |

## Returns

Callback OnObjectMoved uvijek je prvo pozvan u filterskriptama!

## Primjeri

```c
public OnObjectMoved(objectid)
{
    printf("Objekat %d je završio svoje kretanje.", objectid);
    return 1;
}
```

## Zabilješke

:::tip

SetObjectPos ne radi kada ga koristite u ovom callback-u. Kako biste popravili to, ponovo kreirajte objekat.

:::

## Srodne Funkcije

- [MoveObject](../functions/MoveObject.md): Pomjeri objekar.
- [MovePlayerObject](../functions/MovePlayerObject.md): Pomjeri player objekat.
- [IsObjectMoving](../functions/IsObjectMoving.md): Provjerite da li se objekat kreće.
- [StopObject](../functions/StopObject.md): Zaustavite objekat od kretanja.
- [OnPlayerObjectMoved](OnPlayerObjectMoved.md): Pozvan kada player-objekat prestane da se kreće.
