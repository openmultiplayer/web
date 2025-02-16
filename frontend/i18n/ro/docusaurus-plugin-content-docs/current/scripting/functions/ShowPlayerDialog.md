---
title: ShowPlayerDialog
description: Afișează jucătorlui un dialog sincron (doar unul o dată).
tags: ["player"]
---

## Description

Afișează jucătorlui un dialog sincron (doar unul o dată).

| Nume      | Descriere                                                                                                                                                                     |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| playerid  | ID-ul jucătorului căruia i se arată dialogul.                                                                                                                                 |
| dialogid  | ID-ul dialogului, pentru ca răspunsurile să poată fi prelucrate. Maximul pentru dialogid e 32767. Dacă se folosesc valori negative atunci se va închide orice dialog deschis. |
| style     | [Stilul](../resources/dialogstyles.md) dialogului.                                                                                                                            |
| caption[] | Titlul de sus al dialogului. Lungimea lui nu poate depăși 64 de caractere, altfel începe să se taie.                                                                          |
| info[]    | Textul afișat în partea principală a dialogului. Folosiți \n pentru a începe o nouă linie și \t pentru tabulatură.                                                            |
| button1[] | Textul butonului din stânga.                                                                                                                                                  |
| button2[] | Textul butonului din dreapta. Lăsați-l gol ( "" ) pentru a-l ascunde.                                                                                                         |

## Returnări

1: Funcția a fost executată cu succes.

0: Executarea funcției a eșuat. Asta înseamnă că jucătorului nu e conectat.

## Exemple

```c
// Definim ID-urile dialogurilor folosind un enum:
enum
{
    DIALOG_NULL,
    DIALOG_LOGIN,
    DIALOG_WELCOME,
    DIALOG_WEAPONS
}

// Sau macro-uri:
#define DIALOG_NULL 0
#define DIALOG_LOGIN 1
#define DIALOG_WELCOME 2
#define DIALOG_WEAPONS 3

// Enum-urile sunt recomandate, fiindcă nu trebuie să ținem coint de ID-urile folosite. Totuși, enum-urile folosesc memorie pentru a stoca, pe când define-urile sunt procesate în stadiul de compilare.

// Exemplu pentru DIALOG_STYLE_MSGBOX:
ShowPlayerDialog(playerid, DIALOG_WELCOME, DIALOG_STYLE_MSGBOX, "Notice", "Ai fost conectat la server!", "Close", "");

// Exemplu pentru DIALOG_STYLE_INPUT:
ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Login", "Introdu parola mai jos:", "Login", "Cancel");

// Exemplu pentru DIALOG_STYLE_LIST:
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_LIST, "Weapons", "AK47\nM4\nSniper Rifle", "Option 1", "Option 2");

// Exemplu pentru DIALOG_STYLE_PASSWORD:
ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_PASSWORD, "Login", "Introdu parola mai jos:", "Login", "Cancel");

// Exemplu pentru DIALOG_STYLE_TABLIST:
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_TABLIST, "Buy Weapon", "Deagle\t$5000\t100\nSawnoff\t$5000\t100\nPistol\t$1000\t50", "Select", "Cancel");

// Exemplu pentru DIALOG_STYLE_TABLIST_HEADERS:
ShowPlayerDialog(playerid, DIALOG_WEAPONS, DIALOG_STYLE_TABLIST_HEADERS, "Buy Weapon", "Weapon\tPrice\tAmmo\nDeagle\t$5000\t100\nSawnoff\t$5000\t100\nPistol\t$1000\t50", "Select", "Cancel");
```

## Note

:::tip

Este recomandat să se folosească enumerații (vezi mai sus) sau definiții (#define) pentru a determina care ID-uri sunt ale căror dialoguri, pentru ca pe viitor să se evite confuzia.

:::

:::tip

Folosește color embedding pentru mai multe culori în text. Folosind -1 ca și dialogid închide toate dialog-urile deschise pe ecranul clientului.

:::

## Funcții Asociate

- [TextDrawShowForPlayer](TextDrawShowForPlayer.md): Arată un textdraw unui jucător.
- [OnDialogResponse](../callbacks/OnDialogResponse.md): Apelat atunci când un jucător răspunde unui dialog.
