---
title: AddCharModel
sidebar_label: AddCharModel
description: Dodaje nowy model postaci do pobrania.
tags: []
---

<VersionWarn version='SA-MP 0.3.DL R1' />

## Opis

Dodaje niestandardowy model postaci do pobrania. Pliki modelu będą przechowywane w ścieżce Dokumenty\GTA San Andreas User Files\SAMP\cache w katalogu nazwanym adresem IP oraz portem serwera, z nazwami w formie sum kontrolnych CRC.

| Nazwa   | Opis                                                                                                                |
| ------- | ------------------------------------------------------------------------------------------------------------------- |
| baseid  | Bazowe ID skina (nowy skin oddziedziczy po nim zachowanie, a jeżeli pobieranie się nie uda, to także wygląd).       |
| newid   | Nowe ID skina z zakresu od 20000 do 30000 (10000 slotów), używane później w SetPlayerSkin.                          |
| dffname | Nazwa pliku .dff z kolizjami modelu, znajdującego się domyślnie w serwerowym katalogu models (ustawienie artpath).  |
| txdname | Nazwa pliku .txd z teksturami modelu, znajdującego się domyślnie w serwerowym katalogu models (ustawienie artpath). |

## Zwracane wartości

1: Funkcja wykonała się prawidłowo.

0: Funkcja nie wykonała się prawidłowo.

## Przykłady

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

## Uwagi

:::tip

useartwork musi być włączone w ustawieniach serwera, aby ta funkcja działała.

:::

:::warning

Aktualnie nie ma żadnych restrykcji co do wywoływania tej funkcji, ale miej na uwadze, że jeżeli nie wywołasz jej w OnFilterScriptInit/OnGameModeInit, to gracze, którzy są już na serwerze, mogą nie mieć pobranych modeli.

:::

## Powiązane funkcje

- [SetPlayerSkin](SetPlayerSkin.md): Ustawia skin gracza.
