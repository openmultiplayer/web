---
title: OnPlayerKeyStateChange
sidebar_label: OnPlayerKeyStateChange
description: Cette callback est appelée lorsqu'un joueur appuie / lâche une touche de son clavier (uniquement les touches supportées par SA:MP)
tags: ["player"]
---

## Paramètres

Cette callback est appelée lorsqu'un joueur appuie / lâche une touche de son clavier (uniquement les touches supportées par SA:MP).

 
| Nom	 	 | Description                                                                         |
| -------------- | ----------------------------------------------------------------------------------- |
| `int` playerid | ID du joueur qui appuie/relâche la touche					       |
| `int` newkeys  | Un [tableau des touches](../resources/keys) est disponible après l'action           |
| `int` oldkeys  | Un [tableau des touches](../resources/keys) est également disponible avant l'action |

## Valeur de retour

**1** - Autorise la callback à être appelée par un autre script.

**0** - Refuser que la callback soit appelée ailleurs.

Elle est toujours appelée **1**, il faut donc la remplacer par **0** pour que les filterscripts ne s'en occupent pas.

## Astuces

:::info

Cette callback peut aussi être appelée par un NPC.

:::

:::tip

Les touches directionnelles ne fonctionnent pas avec OnPlayerKeyStateChange. Elles ne peuvent être détectées qu'avec [GetPlayerKeys](../functions/GetPlayerKeys) (dans [OnPlayerUpdate](OnPlayerUpdate) ou un timer)

:::

## Fonctions connexes

- [GetPlayerKeys](../functions/GetPlayerKeys): Vérifie quelle touche presse un joueur

## Informations suppleméntaires

### Introduction

Cette callback est appelée indifféremment selon que le joueur presse une touche ou la relâche _(v. [Keys](../resources/keys))_. 

Les touches qui sont prises en charge ne sont pas les touches réelles du clavier, mais des touches de fonction attribuées à San Andreas. Cela signifie que, par exemple, vous ne pouvez pas détecter quand quelqu'un appuie sur la barre d'espace, mais ils peuvent détecter le moment où ils pressent leur touche sprint (qui peut, ou pas, être affectée à la barre d'espacement).

### Paramètres

Les paramètres de cette fonction sont une liste de toutes les touches actuellement maintenue enfoncée et toutes les touches enfoncées il y a un instant. La callback est appelée quand l'état d'une touche change _(quand une touche est relâchée ou enfoncée)_ et regarde les états de toutes les touches avant et après ce changement. Cette information peut être utilisée pour voir exactement ce qu'il se passe avec le clavier du joueur, mais les variables ne peuvent pas être utilisées de la même manière que les paramètres d'une autre fonction.

Pour réduire le nombre de variables, un seul BIT est utilisé pour représenter une clé, cela signifie qu'une variable peut contenir plusieurs clés à la fois et la simple comparaison des valeurs ne fonctionnera pas toujours.

### Comment NE PAS vérifier une touche

Présumons que vous voulez détecter quand le joueur presse la touche `KEY_FIRE`, le code devrait être :

```c
if (newkeys == KEY_FIRE)
```

Ce code peut même fonctionner dans vos tests, mais il est incorrect et vos tests sont insuffisants. Essayez de vous accroupir et d'appuyer sur le feu et votre code cessera instantanément de fonctionner. **Pourquoi?** Parce que `newkeys` n'est plus le même que `KEY_FIRE`, c'est le même que `KEY_FIRE` COMBINÉ AVEC `KEY_CROUCH`.

### Comment vérifier une touche 

Donc, si la variable peut contenir plusieurs clés à la fois, comment en vérifier une seule ? La réponse est le masquage de bits. Chaque touche a son propre bit dans la variable _(certaines touches ont le même bit, mais ce sont des touches onfoot / incar, donc ne peuvent jamais être pressées en même temps de toute façon)_ et vous devez vérifier juste ce seul bit :

```c
if (newkeys & KEY_FIRE)
```

Notez que le simple **&** est correct - il s'agit d'un ET au niveau du bit, pas d'un ET logique, c'est ainsi que les deux esperluettes sont appelées.

Maintenant, si vous testez ce code, cela fonctionnera que vous soyez accroupi ou debout lorsque vous appuyez sur `KEY_FIRE`. Cependant, il reste un léger problème : il se déclenchera tant que vous maintiendrez la clé. `OnPlayerKeyStateChange` est appelé chaque fois qu'une clé change et ce code est vrai chaque fois que `KEY_FIRE` est maintenue enfoncée. Si vous appuyez `KEY_FIRE`, le code se déclenchera, si cette touche est maintenue et que vous appuyez sur `KEY_CROUCH`, ce code se déclenchera à nouveau parce qu'une touche _(CROUCH)_ a changé et que `KEY_FIRE` est toujours maintenu.

### Comment vérifier une touche qui a été enfoncée

C'est là qu'intervient `oldkeys`. Pour vérifier si une touche vient d'être enfoncée, vous devez d'abord vérifier si elle est définie dans `newkeys` - ce qui signifie qu'elle est maintenue enfoncée, puis vérifier qu'elle n'est PAS dans `oldkeys` - ce qui signifie que c'est juste juste été maintenu. Le code suivant fait cela :

```c
if ((newkeys & KEY_FIRE) && !(oldkeys & KEY_FIRE))
```

Cela ne sera vrai que lorsque `KEY_FIRE` est enfoncée pour la première fois, pas lorsqu'elle est maintenue et qu'une autre touche change.

### Comment vérifier une touche qui a été relâchée

C'est exactement le même principe que ci-dessus, mais inversé :

```c
if ((oldkeys & KEY_FIRE) && !(newkeys & KEY_FIRE))
```

### Comment vérifier plusieurs touches

Si vous voulez vérifier qu'un joueur MAINTIEN `KEY_CROUCH` **et** `KEY_FIRE`, voici le code :

```c
if ((newkeys & KEY_FIRE) && (newkeys & KEY_CROUCH))
```

Cependant, si vous voulez détecter lorsqu'ils appuient pour la première fois sur `KEY_FIRE` et s'accroupissent, le code suivant NE FONCTIONNERA PAS. Cela fonctionnera s'ils parviennent à appuyer sur les deux touches exactement en même temps, mais si les appuis sont partiellement espacés _(bien moins d'une demi-seconde)_, ce ne sera pas le cas:

```c
if ((newkeys & KEY_FIRE) && !(oldkeys & KEY_FIRE) && (newkeys & KEY_CROUCH) && !(oldkeys & KEY_CROUCH))
```

**Pourquoi pas?** Parce que `OnPlayerKeyStateChange` est appelé à chaque fois qu'une seule clé change. Alors ils appuient sur `KEY_FIRE` - `OnPlayerKeyStateChange` est appelé avec `KEY_FIRE` dans `newkeys` et pas dans `oldkeys`, puis ils appuient sur `KEY_CROUCH` - `OnPlayerKeyStateChange` est appelé avec `KEY_CROUCH` et `KEY_FIRE` dans `newkeys`, mais `KEY_FIRE` est maintenant aussi dans `oldkeys` car il a déjà été pressé, donc `! (Oldkeys & KEY_FIRE)` échouera. Heureusement la solution est très simple _(en fait plus simple que le code d'origine)_ :

```c
if ((newkeys & (KEY_FIRE | KEY_CROUCH)) == (KEY_FIRE | KEY_CROUCH) && (oldkeys & (KEY_FIRE | KEY_CROUCH)) != (KEY_FIRE | KEY_CROUCH))
```

Cela peut paraître compliqué, mais cela vérifie que les deux touches sont définies dans `newkeys` et que les deux clés ne sont pas définies dans `oldkeys`, si l'une d'elles était définie dans `oldkeys` cela n'a pas d'importance. Toutes ces choses peuvent être grandement simplifiées avec des définitions.

## Simplifications

### Détecter un maintien de touche

Le define :

```c
// HOLDING(keys)
#define HOLDING(%0) \
	((newkeys & (%0)) == (%0))
```

Maintien d'une seule touche :

```c
if (HOLDING( KEY_FIRE ))
```

Maintien de plusieurs touches :

```c
if (HOLDING( KEY_FIRE | KEY_CROUCH ))
```

### Détecter la première pression sur une touche

Le define :

```c
// PRESSED(keys)
#define PRESSED(%0) \
	(((newkeys & (%0)) == (%0)) && ((oldkeys & (%0)) != (%0)))
```

Pression d'une seule touche :

```c
if (PRESSED( KEY_FIRE ))
```

Pression de plusieurs touches :

```c
if (PRESSED( KEY_FIRE | KEY_CROUCH ))
```

### Détecter si un joueur enfonce actuellement une touche

Le define :

```c
// PRESSING(keyVariable, keys)
#define PRESSING(%0,%1) \
	(%0 & (%1))
```

Enfoncement d'une seule touche :

```c
if (PRESSING( newkeys, KEY_FIRE ))
```

Enfoncement de plusieurs touches :

```c
if (PRESSING( newkeys, KEY_FIRE | KEY_CROUCH ))
```

### Détecter le relâchement d'une touche

Le define :

```c
// RELEASED(keys)
#define RELEASED(%0) \
	(((newkeys & (%0)) != (%0)) && ((oldkeys & (%0)) == (%0)))
```

Relâchement d'une seule touche :

```c
if (RELEASED( KEY_FIRE ))
```

Relâchement de plusieurs touches :

```c
if (RELEASED( KEY_FIRE | KEY_CROUCH ))
```

## Exemple

### Super jump

```c
public OnPlayerKeyStateChange(playerid, KEY:newkeys, KEY:oldkeys)
{
	if (PRESSED(KEY_JUMP))
	{
		new
			Float:x,
			Float:y,
			Float:z;
		GetPlayerPos(playerid, x, y, z);
		SetPlayerPos(playerid, x, y, z + 10.0);
	}
	return 1;
}
```
