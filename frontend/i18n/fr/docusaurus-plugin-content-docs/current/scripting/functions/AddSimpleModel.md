---
title : AddSimpleModel
description: Ajoute un nouveau modèle d'objet simple personnalisé à télécharger.
tags: []
---

<VersionWarn version='SA-MP 0.3.DL R1' />

## Description

Ajoute un nouveau modèle d'objet simple personnalisé à télécharger. Les fichiers modèles seront stockés dans le dossier Documents\GTA San Andreas User Files\SAMP\cache du lecteur sous le dossier IP et port du serveur dans un nom de fichier au format CRC.

| Nom          | Description                                                                                                                                            |
| ------------ | -------------------------------------------------- --------------------------------------------------------------------------------------------------- |
| virtualworld | L'identifiant du monde virtuel sur lequel rendre le modèle disponible. Utilisez -1 pour tous les mondes.                                               |
| baseid       | ID de modèle d'objet de base à utiliser (objet d'origine à utiliser lorsque le téléchargement échoue).                                                 |
| newid        | Le nouvel ID de modèle d'objet allait de -1000 à -30000 (29000 emplacements) pour être utilisé ultérieurement avec CreateObject ou CreatePlayerObject. |
| dffname      | Nom du fichier de collision de modèles .dff situé dans le dossier du serveur de modèles par défaut (paramètre artpath)                                 |
| txdname      | Nom du fichier de texture de modèle .txd situé dans le dossier du serveur de modèles par défaut (paramètre artpath).                                   |

## Retour

1 : La fonction s'est exécutée avec succès.

0 : La fonction n'a pas pu s'exécuter.

## Exemples

```c
public OnGameModeInit()
{
     AddSimpleModel(-1, 19379, -2000, "wallzzz.dff", "wallzzz.txd");
     return 1;
}
```

```c
AddSimpleModel(-1, 19379, -2000, "wallzzz.dff", "wallzzz.txd");
```

## Remarques

:::tip

`useartwork` doit d'abord être activé dans les paramètres du serveur pour que cela fonctionne Lorsque virtualworld est défini, les modèles seront téléchargés une fois que le joueur entrera dans le monde spécifique

:::

:::warning

Il n'y a actuellement aucune restriction sur le moment où vous pouvez appeler cette fonction, mais sachez que si vous ne les appelez pas dans OnFilterScriptInit/OnGameModeInit, vous courez le risque que certains joueurs, qui sont déjà sur le serveur, n'aient pas téléchargé les modèles.

:::

## Fonctions associées

- [OnPlayerFinishedDownloading](../callbacks/OnPlayerFinishedDownloading): appelé lorsqu'un joueur a fini de télécharger des modèles personnalisés.
