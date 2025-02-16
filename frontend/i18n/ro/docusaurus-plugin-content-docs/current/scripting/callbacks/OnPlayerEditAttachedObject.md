---
title: OnPlayerEditAttachedObject
sidebar_label: OnPlayerEditAttachedObject
description: Acest callback este apelat atunci când un jucător încheie modul de ediție a obiectelor atașate.
tags: ["player"]
---

## Descriere

Acest callback este apelat atunci când un jucător încheie modul de ediție a obiectelor atașate.

| Nume                   | Descriere                                                                |
|------------------------|--------------------------------------------------------------------------|
| playerid               | ID-ul jucătorului care a încheiat modul ediție                           |
| EDIT_RESPONSE:response | 0 dacă au anulat (ESC) sau 1 dacă au făcut clic pe pictograma de salvare |
| index                  | Indexul obiectului atașat (0-9)                                          |
| modelid                | Modelul obiectului atașat care a fost editat                             |
| boneid                 | Osul obiectului atașat care a fost editat                                |
| Float:fOffsetX         | Decalajul X pentru obiectul atașat care a fost editat                    |
| Float:fOffsetY         | Decalajul Y pentru obiectul atașat care a fost editat                    |
| Float:fOffsetZ         | Decalajul Z pentru obiectul atașat care a fost editat                    |
| Float:fRotX            | Rotația X pentru obiectul atașat care a fost editat                      |
| Float:fRotY            | Rotația Y pentru obiectul atașat care a fost editat                      |
| Float:fRotZ            | Rotația Z pentru obiectul atașat care a fost editat                      |
| Float:fScaleX          | Scara X pentru obiectul atașat care a fost editat                        |
| Float:fScaleY          | Scara Y pentru obiectul atașat care a fost editat                        |
| Float:fScaleZ          | Scara Z pentru obiectul atașat care a fost editat                        |

## Returnări

1 - Va împiedica alte scripturi să primească acest callback.

0 - Indică faptul că acest callback va fi transmis următorului script.

Este întotdeauna numit primul în filterscript-uri.

## Example

```c
enum attached_object_data
{
    Float:ao_x,
    Float:ao_y,
    Float:ao_z,
    Float:ao_rx,
    Float:ao_ry,
    Float:ao_rz,
    Float:ao_sx,
    Float:ao_sy,
    Float:ao_sz
}

new ao[MAX_PLAYERS][MAX_PLAYER_ATTACHED_OBJECTS][attached_object_data];

// Datele ar trebui să fie stocate în matricea de mai sus atunci când obiectele atașate sunt atașate.

public OnPlayerEditAttachedObject(playerid, EDIT_RESPONSE:response, index, modelid, boneid, Float:fOffsetX, Float:fOffsetY, Float:fOffsetZ, Float:fRotX, Float:fRotY, Float:fRotZ, Float:fScaleX, Float:fScaleY, Float:fScaleZ)
{
    if (response)
    {
        SendClientMessage(playerid, COLOR_GREEN, "Ediția obiectului atașat a fost salvată.");

        ao[playerid][index][ao_x] = fOffsetX;
        ao[playerid][index][ao_y] = fOffsetY;
        ao[playerid][index][ao_z] = fOffsetZ;
        ao[playerid][index][ao_rx] = fRotX;
        ao[playerid][index][ao_ry] = fRotY;
        ao[playerid][index][ao_rz] = fRotZ;
        ao[playerid][index][ao_sx] = fScaleX;
        ao[playerid][index][ao_sy] = fScaleY;
        ao[playerid][index][ao_sz] = fScaleZ;
    }
    else
    {
        SendClientMessage(playerid, COLOR_RED, "Ediția obiectului atașat nu a fost salvată.");

        new i = index;
        SetPlayerAttachedObject(playerid, index, modelid, boneid, ao[playerid][i][ao_x], ao[playerid][i][ao_y], ao[playerid][i][ao_z], ao[playerid][i][ao_rx], ao[playerid][i][ao_ry], ao[playerid][i][ao_rz], ao[playerid][i][ao_sx], ao[playerid][i][ao_sy], ao[playerid][i][ao_sz]);
    }
    return 1;
}
```

## Note

:::warning

Edițiile ar trebui eliminate dacă răspunsul a fost „0” (anulat). Acest lucru trebuie făcut prin stocarea offset-urilor etc. într-o matrice ÎNAINTE de a utiliza EditAttachedObject.

:::

## Funcții similare

- [EditAttachedObject](../functions/EditAttachedObject): Editați un obiect atașat.
- [SetPlayerAttachedObject](../functions/SetPlayerAttachedObject): Atașați un obiect unui jucător.