---
title: ApplyAnimation
description: Włącza animację graczowi.
tags: []
---

## Opis

Włącza animację graczowi.

| Nazwa      | Opis                                                                                                                                                                                                                                                                                                   |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| playerid   | ID gracza, któremu chcesz włączyć animację.                                                                                                                                                                                                                                                            |
| animlib[]  | Biblioteka, z której ma być zastosowana animacja.                                                                                                                                                                                                                                                      |
| animname[] | Nazwa animacji, która ma zostać zastosowana (z powyższej biblioteki).                                                                                                                                                                                                                                  |
| fDelta     | Prędkość odtwarzania animacji (używaj 4.1).                                                                                                                                                                                                                                                            |
| loop       | Jeżeli jest ustawione na 1, animacja będzie zapętlona. Jeżeli jest ustawione na 0, animacja zostanie odtworzona tylko raz.                                                                                                                                                                             |
| lockx      | Jeżeli jest ustawione na 0, gracz wróci do swojego starego koordynatu X po skończeniu animacji (w przypadku animacji, które poruszają graczem, np. chodzenie). 1 nie przywróci go do starej pozycji.                                                                                                   |
| locky      | Tak samo jak powyżej, tyle że dla osi Y. Wartość powinna być taka sama, jak przy poprzednim parametrze.                                                                                                                                                                                                |
| freeze     | Ustawienie tego na 1 zamrozi gracza po ukończeniu animacji. 0 tego nie zrobi.                                                                                                                                                                                                                          |
| time       | Timer w milisekundach. Dla nieskończonej pętli powinien być ustawiony na 0.                                                                                                                                                                                                                            |
| forcesync  | Ustawienie tego na 1 powoduje synchronizację animacji ze wszystkimi graczami w zasięgu widzenia (opcjonalne). 2 działa tak samo jak 1, tyle że animację będą widzieć TYLKO gracze w zasięgu widzenia, a gracz, któremu została włączona, NIE BĘDZIE jej widział (przydatne m.in. przy animacjach NPC). |

## Zwracane wartości

Ta funkcja zawsze zwraca 1, nawet jeśli podany gracz nie istnieje lub którykolwiek z parametrów jest nieprawidłowy (np. nieprawidłowa biblioteka).

## Przykłady

```c
ApplyAnimation(playerid, "PED", "WALK_DRUNK", 4.1, 1, 1, 1, 1, 1, 1);
```

## Uwagi

:::tip

Opcjonalny parametr `forcesync`, domyślnie ustawiony na 0, w większości przypadków nie jest potrzebny, ponieważ gracze sami synchronizują animacje. Ten parametr może zmusić wszystkich graczy, którzy mogą zobaczyć `playerid` do włączenia animacji niezależnie od tego, czy konkretny gracz wykonuje tę animację. Jest to przydatne w sytuacji, kiedy gracze nie mogą sami zsynchronizować animacji. Na przykład, gdy są AFK.

:::

:::warning

Nieprawidłowa biblioteka animacji zcrashuje klient gracza.

:::

## Powiązane funkcje

- [ClearAnimations](ClearAnimations.md): Wyłącza dowolną wykonywaną przez gracza animację.
- [SetPlayerSpecialAction](SetPlayerSpecialAction.md): Ustawia graczowi specjalną akcję.
