---
id: AddCharModel
title: AddCharModel
description: Dodaje nowy model (skin wraz z modelem postaci) do pobrania dla graczy.
tags: []
---

:::Ostrzeżenie

Ta funkcja została dodana w wersji 0.3-DL R1 i nie będzie działać w starszych wersjach!

:::

## Ostrzeżenie

Dodaje 'customowy skin' inaczej skórkę do pobrania. Ten obiekt będzie pobrany do ścieżki Dokumenty\GTA San Andreas User Files\SAMP\cache pod nazwą adresu IP serwera i jego portu (tzw. format nazw CRC).

| Name    | Description                                                                                                    |
| ------- | -------------------------------------------------------------------------------------------------------------- |
| baseid  | Zmienna przechowująca wartość domyślnego ID skina dla gracza, jeśli skin nie pobierze się on prawidłowo.  |
| newid   | Nowe ID skina z zakresu 20000 do 30000 (10000 slotów) do użycia potem z SetPlayerSkin.           |
| dffname | Nazwa pliku kolizji modelu .dff znajdującego się w folderze models (domyślnie przez serwer: ustawienie artpath w server.cfg)           |
| txdname |  Nazwa pliku textury modelu .txd znajdującej się w folderze models (domyślnie przez serwer: ustawienie artpath w server.cfg)            |

## Zwracane wartości

1: Ta funkcja wywołała się prawidłowo

0: Ta funkcja nie wykonała się prawidłowo

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

## Notatki

:::Wskazówka

useartwork musi być włączony w ustawieniach serwera (server.cfg) jeśli skrypt ma działać

:::

:::Ostrzeżenie

Możesz wywoływać tę funkcję gdzie chcesz w kodzie, niemniej jednak pamiętaj że jeśli wywołana funkcja zostanie w OnFilterScriptInit ryzykujesz tym, że niektórzy gracze nie będą mogli pobrać skinów!

:::

## Powiązane funkcje

- [SetPlayerSkin](SetPlayerSkin.md): Ustawia skin gracza.
