---
title: ID-urile de vreme
---

Se foloseste in [SetWeather](../functions/SetWeather) si [SetPlayerWeather](../functions/SetPlayerWeather).

```c
0 = EXTRASUNNY_LA
1 = SUNNY_LA
2 = EXTRASUNNY_SMOG_LA
3 = SUNNY_SMOG_LA
4 = CLOUDY_LA
5 = SUNNY_SF
6 = EXTRASUNNY_SF
7 = CLOUDY_SF
8 = RAINY_SF
9 = FOGGY_SF
10 = SUNNY_VEGAS
11 = EXTRASUNNY_VEGAS (heat waves)
12 = CLOUDY_VEGAS
13 = EXTRASUNNY_COUNTRYSIDE
14 = SUNNY_COUNTRYSIDE
15 = CLOUDY_COUNTRYSIDE
16 = RAINY_COUNTRYSIDE
17 = EXTRASUNNY_DESERT
18 = SUNNY_DESERT
19 = SANDSTORM_DESERT
20 = UNDERWATER (greenish, foggy)
```

Există 21 de ID-uri meteo diferite (0-20), cu toate acestea jocul nu prezintă niciun interval de verificare a identificărilor meteo și astfel puteți utiliza ID-uri meteo până la 255. Valorile mai mari de 255 sau mai mici de 0 sunt transformate în restul diviziei de către 256 (de exemplu, vremea ID 300 este identică cu ID 44, deoarece 300% 256 = 44). ID-urile meteo 0-22 par să funcționeze corect, dar alte ID-uri duc la efecte ciudate, cum ar fi cerul roz și texturile intermitente în anumite perioade. :::note

- Unele vremuri apar foarte diferite în anumite momente. Poti sa vezi [aici](http://hotmist.ddo.jp/id/weatherhtml) cum arată diferite tipuri meteo în momente diferite.

- [GTA San Andreas weather gallery](https://dev.prineside.com/en/gtasa_weather_id/) explică situația cu ID-urile meteo mai bine decât orice cuvinte. De asemenea, îl puteți utiliza dacă doriți să vizualizați vremea în anumite momente și să căutați vreme problematică care să provoace efecte ciudate.

:::
