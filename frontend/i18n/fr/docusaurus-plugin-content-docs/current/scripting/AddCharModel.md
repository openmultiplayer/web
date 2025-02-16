---
title: AddCharModel
sidebar_label: AddCharModel
description: Ajoute un nouveau skin de joueur à télécharger
tags: []
---

<VersionWarn version='SA-MP 0.3.DL R1' />

## Description

Ajoute un nouveau skin de joueur à télécharger. The fichier modèle va être sauvegardé dans le dossier Documents\GTA San Andreas User Files\SAMP\cache du joueur, dans un dossier contenant l'IP et le port du serveur, et avec un nom de fichier correspondant au CRC du fichier.

| Name    | Description                                                                                                    |
| ------- | -------------------------------------------------------------------------------------------------------------- |
| baseid  | L'ID de base du skin à utiliser (Utilisé pour récupérer le skin et le comportement du personnage si le téléchargement vient à echouer). |
| newid   | Le nouvel ID de skin, de 20000 à 30000 (10000 slots) à utiliser dans SetPlayerSkin             |
| dffname | Nom du fichier .dff de collision, situé dans le dossier models par défaut (peut être modifié avec le paramètre artpath de server.cfg). |
| txdname | Nom du fichier .tdx de texture, situé dans le dossier models par défaut (peut être modifié avec le paramètre artpath de server.cfg). |

## Retourne

1: La fonction s'est correctement exécutée.

0: L'exécution ne s'est pas correctement déroulé.

## Exemples

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

Le paramètre useartwork doit être activé dans les paramètres du serveur pour que cette fonction soit utilisable

:::

:::warning

Il n'y a actuellement aucune restriction sur le moment où cette fonction est appelée, prenez donc en compte qu'il est possible, si vous appelez cette fonction en dehors de OnFilterScriptInit/OnGameModeInit, les modèles de personnages ne soit pas téléchargés chez le joueur.

:::

## Fonction connexes

- [SetPlayerSkin](SetPlayerSkin): Applique un skin au joueur.
