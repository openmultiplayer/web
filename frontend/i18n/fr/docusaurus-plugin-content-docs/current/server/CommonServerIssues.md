---
title : Problèmes courants
---

## Le serveur plante instantanément au démarrage

Le plus souvent, il s'agit d'une erreur dans votre fichier server.cfg ou de votre mode de jeu manquant. Vérifiez le fichier server_log.txt et la raison doit être située en bas. Sinon, vérifiez le fichier crashinfo.txt. La meilleure solution pour savoir ce qui cause le crash est d'utiliser le plugin de détection de crash de Zeex/0x5A656578 ([cliquez pour le lien](https://github.com/AmyrAhmady/samp-plugin-crashdetect)) qui donnera plus d'informations comme les numéros de ligne, les noms de fonction, les valeurs de paramètre, etc. Si le script est compilé en mode débogage (indicateur -d3) pour que le compilateur mette des informations supplémentaires sur tout cela dans la sortie .amx.

## Le serveur ne fonctionne pas - le pare-feu est désactivé

Vous devrez rediriger vos ports pour permettre aux joueurs de rejoindre votre serveur. Vous pouvez rediriger vos ports à l'aide du vérificateur de ports PF. Téléchargez-le sur : www.portforward.com Si les ports ne sont pas redirigés, cela signifie que vous devez les ouvrir dans votre routeur. Vous pouvez consulter la liste des routeurs sur [https://portforward.com/router.htm](https://portforward.com/router.htm).

Il contient toutes les informations sur la façon de transférer les ports.

## 'Le paquet a été modifié'

L'erreur généralement affichée comme:

```
[hh:mm:ss] Le paquet a été modifié, envoyé par id : <id>, ip : <ip> :<port>
```

se produit lorsqu'un joueur expire ou rencontre actuellement des problèmes de connexion.

## 'Attention : le client a dépassé la limite de messages'

L'erreur généralement affichée comme:

```
Avertissement : le client a dépassé 'messageslimit' (1) <ip> :<port> (<count>) Limite : x/sec
```

se produit lorsque le nombre de messages par seconde qu'un client envoie au serveur dépasse.

## 'Attention : le client a dépassé la limite d'accusé de réception'

L'erreur généralement affichée comme :

```
Avertissement : le client a dépassé 'ackslimit' <ip>:<port> (<count>) Limite : x/sec
```

se produit lorsque la limite d'accusé de réception dépasse.

## 'Attention : le client a dépassé la limite de trous de messages'

L'erreur généralement affichée comme :

```
Avertissement : le client a dépassé 'messageholelimit' (<type>) <ip> :<port> (<count>) Limite : x
```

se produit lorsque la limite de trou de message dépasse.

## 'Attention : trop de messages en panne'

L'erreur généralement affichée comme:

```
Avertissement : Trop de messages dans le désordre du joueur <ip> :<port> (<count>) Limite : x (messageholelimit)
```

Se produit lorsque les "messages hors service" réutilisent le paramètre messageholelimit.

Pour plus d'informations à ce sujet, consultez [ceci](https://open.mp/docs/server/ControllingServer#rcon-commands)

## Les joueurs obtiennent constamment l'erreur "Unacceptable NickName" mais elle est valide

Si vous êtes sûr d'utiliser un nom acceptable et que le serveur fonctionne sous Windows, essayez de changer l'option de compatibilité de samp-server.exe en Windows 98 et cela devrait être corrigé après un redémarrage du serveur.

Les serveurs Windows avec un temps de disponibilité élevé peuvent également provoquer ce problème. Cela a été remarqué d'environ 50 jours de temps de disponibilité du serveur. Pour le résoudre, un redémarrage est nécessaire.

## `MSVCR___.dll`/`MSVCP___.dll` introuvable

Ce problème se produit régulièrement sur les serveurs Windows lorsque vous essayez de charger un plug-in qui a été développé à l'aide d'une version supérieure du runtime Visual C++ à celle actuellement installée sur votre ordinateur. Pour résoudre ce problème, téléchargez les bibliothèques d'exécution Microsoft Visual C++ appropriées. Notez que le serveur SA-MP est 32 bits, vous devrez donc également télécharger la version 32 bits (x86) du runtime, quelle que soit l'architecture. La version du runtime dont vous avez spécifiquement besoin est indiquée par les numéros dans le nom de fichier (voir le tableau ci-dessous), bien que cela ne fasse pas de mal de les installer tous. Ces bibliothèques ne s'empilent pas, ou en d'autres termes : vous n'obtiendrez pas les runtimes pour les versions 2013 et antérieures si vous installez uniquement la version 2015.

| Numéro de version | Durée d'exécution |
| -------------- | --------------------------------------------- |
| 10.0 | Redistribuable Microsoft Visual C++ 2010 x86 |
| 11.0 | Redistribuable Microsoft Visual C++ 2012 x86 |
| 12.0 | Redistribuable Microsoft Visual C++ 2013 x86 |
| 14.0 | Redistribuable Microsoft Visual C++ 2015 x86 |
