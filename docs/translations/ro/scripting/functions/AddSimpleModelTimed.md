---
title: AddSimpleModelTimed
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
| dffname      | Numele fișierului de coliziune a modelului .dff situat în dosarul serverului de modele în mod implicit (setare artpath).                             |
| txdname      | Numele fișierului de textură model .txd situat în dosarul serverului modele în mod implicit (setare artpath).                                        |
| timeon       | Ora jocului mondial (ora) va apărea acest obiect                                                                                                     |
| timeoff      | Timpul de joc mondial (ora) acestui obiect va dispărea                                                                                               |

## Se intoarce

1: Funcția executată cu succes.

0: Funcția nu a putut fi executată.

## Exemple

```c
public OnGameModeInit()
{
    AddSimpleModelTimed(-1, 19379, -2000, "wallzzz.dff", "wallzzz.txd", 9, 18); // This wall only renders from 9:00 am to 6:00 pm
    return 1;
}
```

## Note

:::tip

Useartwork trebuie să fie activat mai întâi în setările serverului pentru ca acest lucru să funcționeze Când virtualworld este setat, modelele vor fi descărcate odată ce jucătorul intră în lumea specifică

:::

:::warning

În prezent, nu există restricții cu privire la momentul în care puteți apela această funcție, dar rețineți că, dacă nu le apelați în OnFilterScriptInit / OnGameModeInit, aveți riscul ca unii jucători, care sunt deja pe server, să nu fi descărcat modelele.

:::

## Funcții conexe

- [OnPlayerFinishedDownloading](../callbacks/OnPlayerFinishedDownloading): Apelat când un jucător termină de descărcat modele personalizate.
