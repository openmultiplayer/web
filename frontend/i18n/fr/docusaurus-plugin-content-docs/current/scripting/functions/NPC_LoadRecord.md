---
title: NPC_LoadRecord
sidebar_label: NPC_LoadRecord
description: Charge un fichier d'enregistrement NPC pour la lecture.
tags: ["npc", "enregistrement", "lecture"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Charge un fichier d'enregistrement NPC pour l'utiliser en lecture.

| Name           | Description                    |
| -------------- | ------------------------------ |
| const filePath | Le chemin vers le fichier d'enregistrement |

## Returns

Retourne l'ID de l'enregistrement chargé, ou `INVALID_RECORD_ID` en cas d'échec.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcloadrecord ", true, 15))
    {
        new filepath[128];
        new len = strlen(cmdtext);
        if (len <= 15)
            return SendClientMessage(playerid, 0xFF0000FF, "Utilisation : /npcloadrecord [filepath]");

        strmid(filepath, cmdtext, 15, len);

        new recordid = NPC_LoadRecord(filepath);

        if (recordid == -1)
            SendClientMessage(playerid, 0xFF0000FF, "Échec du chargement de l'enregistrement depuis : %s", filepath);
        else
            SendClientMessage(playerid, 0x00FF00FF, "Enregistrement chargé depuis %s avec l'ID : %d", filepath, recordid);
        return 1;
    }
    return 0;
}
```

## Notes

- Chargez les enregistrements avant de les utiliser avec NPC_StartPlayback

:::warning

Contrairement à [NPC_StartPlayback](NPC_StartPlayback), `filePath` nécessite le chemin complet depuis la racine du serveur, ainsi que l'extension `.rec`.  
Exemple : `npcmodes/recordings/myrecording.rec`

:::

## Fonctions liées

- [NPC_UnloadRecord](NPC_UnloadRecord): Décharge un enregistrement
- [NPC_UnloadAllRecords](NPC_UnloadAllRecords): Décharge tous les enregistrements
- [NPC_StartPlayback](NPC_StartPlayback): Démarre la lecture d'un enregistrement
- [NPC_GetRecordCount](NPC_GetRecordCount): Obtient le nombre d'enregistrements chargés

## Callbacks liées

- [OnNPCPlaybackStart](../callbacks/OnNPCPlaybackStart): Appelée lorsque la lecture démarre
- [OnNPCPlaybackEnd](../callbacks/OnNPCPlaybackEnd): Appelée lorsque la lecture se termine
