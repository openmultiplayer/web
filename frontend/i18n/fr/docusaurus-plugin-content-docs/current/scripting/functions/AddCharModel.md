---
title: AddCharModel
sidebar_label: AddCharModel
description : Ajoute un nouveau modèle de personnage personnalisé à télécharger.
tags: []
---

<VersionWarn version='SA-MP 0.3.DL R1' />

## Description

Ajoute un nouveau modèle de personnage personnalisé à télécharger. Les fichiers modèles seront stockés dans le dossier Documents\GTA San Andreas User Files\SAMP\cache du lecteur sous le dossier IP et port du serveur dans un nom de fichier au format CRC.

| Nom     | Description                                                                                                                                 |
| ------- | -------------------------------------------------- -----------------------------------------------------------------------------------------|
| baseid  | L'ID du modèle de skin de base à utiliser (comportement du personnage et personnage d'origine à utiliser lorsque le téléchargement échoue). |
| newid   | Le nouvel ID de modèle de skin allait de 20 000 à 30 000 (10 000 emplacements) à utiliser ultérieurement avec SetPlayerSkin                 |
| dffname | Nom du fichier de collision de modèles .dff situé dans le dossier du serveur de modèles par défaut (paramètre artpath).                     |
| txdname | Nom du fichier de texture de modèle .txd situé dans le dossier du serveur de modèles par défaut (paramètre artpath).                        |

## Retour

1 : La fonction s'est exécutée avec succès.

0 : La fonction n'a pas pu s'exécuter.

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

## Remarques

:::tip

useartwork doit d'abord être activé dans les paramètres du serveur pour que cela fonctionne

:::

:::warning

Il n'y a actuellement aucune restriction sur le moment où vous pouvez appeler cette fonction, mais sachez que si vous ne les appelez pas dans OnFilterScriptInit/OnGameModeInit, vous courez le risque que certains joueurs, qui sont déjà sur le serveur, n'aient pas téléchargé les modèles.

:::

## Fonctions associées

- [SetPlayerSkin](SetPlayerSkin): Définissez le skin d'un joueur.
- [GetPlayerSkin](GetPlayerSkin): Obtenez le skin d'un joueur.
