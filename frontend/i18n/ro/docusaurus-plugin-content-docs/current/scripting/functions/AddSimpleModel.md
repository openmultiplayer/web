---
title: AddSimpleModel
sidebar_label: AddSimpleModel
description: Adaugă un nou model de obiect simplu personalizat pentru descărcare.
tags: []
---

<VersionWarn version='SA-MP 0.3.DL R1' />

## Descriere

Adaugă un nou model de obiect simplu personalizat pentru descărcare. Fișierele model vor fi stocate în documentele playerului \ GTA San Andreas User Files \ SAMP \ cache sub folderul Server IP și Port într-un nume de fișier CRC.

| Nume         | Descriere                                                                                                                                            |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| virtualworld | ID-ul lumii virtuale pentru a face modelul disponibil la. Folosiți -1 pentru toate lumile.                                                           |
| baseid       | ID-ul modelului de obiect de bază de utilizat (obiectul original de utilizat atunci când descărcarea eșuează).                                       |
| newid        | ID-ul noului model de obiect a variat de la -1000 la -30000 (29000 de sloturi) pentru a fi utilizat ulterior cu CreateObject sau CreatePlayerObject. |
| dffname      | Numele fișierului de coliziune a modelului .dff situat în dosarul serverului de modele în mod implicit (setare artpath)                              |
| txdname      | Numele fișierului de textură model .txd situat în dosarul serverului modele în mod implicit (setare artpath).                                        |

## Se intoarce

1: Funcția executată cu succes.

0: Funcția nu a putut fi executată.

## Exemple

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

## Note

:::tip

`Useartwork` trebuie să fie activat mai întâi în setările serverului pentru ca acesta să funcționeze Când virtualworld este setat, modelele vor fi descărcate odată ce jucătorul intră în lumea specifică

:::

:::warning

În prezent, nu există restricții cu privire la momentul în care puteți apela această funcție, dar rețineți că, dacă nu le apelați în OnFilterScriptInit / OnGameModeInit, aveți riscul ca unii jucători, care sunt deja pe server, să nu fi descărcat modelele.

:::

## Funcții conexe

- [OnPlayerFinishedDownloading](../callbacks/OnPlayerFinishedDownloading.md): Apelat când un jucător termină de descărcat modele personalizate.
