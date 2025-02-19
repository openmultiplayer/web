---
title: GetMyPos
sidebar_label: GetMyPos
description: Dobij poziciju NPC-a
tags: ["npc"]
---

## Deskripcija

Dobij poziciju NPC-a
 
| Ime       | Deskripcija                                               |
| --------- | --------------------------------------------------------- |
| &Float:x  | Float za spremanje X koordinate, proslijeđen referencom.  |
| &Float:y  | Float za spremanje Y koordinate, proslijeđen referencom. |
| &Float:z  | Float za spremanje Z koordinate, proslijeđen referencom. |

## Returns

Ova funkcija ne returna (ne vraća) nikakve specifične vrijednosti. 

## Primjer

```c
new Float:x, Float:y, Float:z;
GetMyPos(x,y,z);
printf("Trenutno sam na %f, %f, %f!",x,y,z);
```

## Srodne Funkcije

- [SetMyPos](SetMyPos): Postavite poziciju NPC-u.
