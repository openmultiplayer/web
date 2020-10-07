---
id: GetPlayerKeys_FR
title: GetPlayerKeys_FR
description: Obtenir la touche sur laquelle appuie le joueur.
tags: ["player"]
---

## คำอธิบาย

Obtenir la touche sur laquelle appuie le joueur.

| Name      | Description                                                                                                                                                |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| playerid  | ID du joueur dont on veut obtenir la touche.                                                                                                               |
| keys      | Un ensemble de bits contenant l'état des touches du joueur. Cette valeur est ce que l'on appelle un Masque binaire. Cliquez ici pour la liste des touches. |
| updown    | Etat Up/Down.                                                                                                                                              |
| leftright | Etat Left/Right.                                                                                                                                           |

## ส่งคืน

Les touches sont stockés dans les variables spécifiées.

## ตัวอย่าง

```c
public OnPlayerUpdate(playerid)
{
    new Keys,ud,lr;
    GetPlayerKeys(playerid,Keys,ud,lr);

    if (ud == KEY_UP) SendClientMessage(playerid, -1, "UP");
    else if (ud == KEY_DOWN) SendClientMessage(playerid, -1, "DOWN");

    if (lr == KEY_LEFT) SendClientMessage(playerid, -1, "LEFT");
    else if (lr == KEY_RIGHT) SendClientMessage(playerid, -1, "RIGHT");

    return 1;
}
```

## บันทึก

:::warning

Seulement la fonction de la touche peut être détecté; Pas la véritable touche. Par exemple, il n'est pas possible de détecter si le joueur presse la touche ESPACE, mais il est possible de détecter la touche SPRINT (qui peut être assigné à une autre touche) (touche espace par défaut)).
Depuis la mise à jour 0.3.7, Les touches "A" et "D" ne sont plus reconnus depuis un véhicule. Cependant, les touches "W" et "S" peuvent être détecté grâce au paramètre "keys".

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน
