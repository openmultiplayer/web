---
title: AddCharModel
sidebar_label: AddCharModel
description: Adaugă un nou model de caractere personalizat pentru descărcare.
tags: []
---

<VersionWarn version='SA-MP 0.3.DL R1' />

## Descriere

Adaugă un nou model de caractere personalizat pentru descărcare. Fișierele model vor fi stocate în documentele playerului \ GTA San Andreas User Files \ SAMP \ cache sub folderul Server IP și Port într-un nume de fișier CRC.

| Nume    | Descriere                                                                                                                                    |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| baseid  | ID-ul modelului de bază de bază de utilizat (comportamentul caracterului și caracterul original de utilizat atunci când descărcarea eșuează) |
| newid   | Noul ID al modelului skin a variat între 20000 și 30000 (10000 sloturi) pentru a fi utilizat ulterior cu SetPlayerSkin                       |
| dffname | Numele fișierului de coliziune a modelului .dff situat în dosarul serverului de modele în mod implicit (setare artpath).                     |
| txdname | Numele fișierului de textură model .txd situat în dosarul serverului modele în mod implicit (setare artpath).                                |

## Se intoarce

1: Funcția executată cu succes.

0: Funcția nu a putut fi executată.

## Exemple

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

## Note

:::tip

useartwork trebuie activat mai întâi în setările serverului pentru ca acest lucru să funcționeze

:::

:::warning

În prezent, nu există restricții cu privire la momentul în care puteți apela această funcție, dar rețineți că, dacă nu le apelați în OnFilterScriptInit / OnGameModeInit, aveți riscul ca unii jucători, care sunt deja pe server, să nu fi descărcat modelele.

:::

## Funcții relative

- [SetPlayerSkin](SetPlayerSkin): Setează skinul unui jucător.
