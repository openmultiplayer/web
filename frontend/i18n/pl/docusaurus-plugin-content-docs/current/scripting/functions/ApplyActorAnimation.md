---
title: ApplyActorAnimation
sidebar_label: ApplyActorAnimation
description: Włącza animację aktorowi.
tags: []
---

<VersionWarn version='SA-MP 0.3.7' />

## Opis

Włącza animację aktorowi.

| Nazwa      | Opis                                                                                                                                                                                                 |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| actorid    | ID aktora, któremu chcesz włączyć animację.                                                                                                                                                          |
| animlib[]  | Biblioteka, z której ma być zastosowana animacja.                                                                                                                                                    |
| animname[] | Nazwa animacji, która ma zostać zastosowana (z powyższej biblioteki).                                                                                                                                |
| fDelta     | Prędkość odtwarzania animacji (używaj 4.1).                                                                                                                                                          |
| loop       | Jeżeli jest ustawione na 1, animacja będzie zapętlona. Jeżeli jest ustawione na 0, animacja zostanie odtworzona tylko raz.                                                                           |
| lockx      | Jeżeli jest ustawione na 0, aktor wróci do swojego starego koordynatu X po skończeniu animacji (w przypadku animacji, które poruszają aktorem, np. chodzenie). 1 nie przywróci go do starej pozycji. |
| locky      | Tak samo jak powyżej, tyle że dla osi Y. Wartość powinna być taka sama, jak przy poprzednim parametrze.                                                                                              |
| freeze     | Ustawienie tego na 1 zamrozi aktora po ukończeniu animacji. 0 tego nie zrobi.                                                                                                                        |
| time       | Timer w milisekundach. Dla nieskończonej pętli powinien być ustawiony na 0.                                                                                                                          |

## Zwracane wartości

1: Funkcja wykonała się prawidłowo.

0: Funkcja nie wykonała się prawidłowo. Podany aktor nie istnieje.

## Przykłady

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // Aktor jako sprzedawca w Ammu-Nation
    ApplyActorAnimation(gMyActor, "DEALER", "shop_pay", 4.1, 0, 0, 0, 0, 0); // Animacja płacenia
    return 1;
}
```

## Uwagi

:::tip

Musisz wstępnie załadować bibliotekę animacji graczowi, u którego animacja będzie wyświetlana, a nie samemu aktorowi. W przeciwnym wypadku, animacja aktora nie zostanie włączona do momentu ponownego uruchomienia funkcji.

:::

## Powiązane funkcje

- [ClearActorAnimations](ClearActorAnimations.md): Wyłącza wszystkie animacje, które aktor ma włączone.
