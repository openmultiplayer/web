---
title: sa-mp.cfg
sidebar_label: sa-mp.cfg
description: SA-MP clientconfiguratiebestand.
---

## Beschrijving

`sa-mp.cfg` is het clientconfiguratiebestand waarmee je SA-MP-gerelateerde instellingen kunt aanpassen. Dit bestand staat in je map ‘Mijn Documenten\\GTA San Andreas User Files\\SAMP’ onder je Windows-gebruikersaccount. Je kunt dit bestand bewerken met een teksteditor zoals Kladblok.

## Opties

| Optie              | Beschrijving                                                                                                                                                                                                                                                                                                                                  |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **pagesize**       | Aantal regels in het chatvenster. Waarden 10 t/m 20. Standaard 10. In-game aan te passen met de client-side `/pagesize` command.                                                                                                                                                                                                             |
| **fpslimit**       | Stelt een [FPS](http://en.wikipedia.org/wiki/Frame_rate "http://en.wikipedia.org/wiki/Frame_rate")-limiet in wanneer de frameratelimiter in het GTA:SA-menu aanstaat. Waarden 20 t/m 90, standaard 50. In-game aan te passen met de client-side `/fpslimit` command.                                                                     |
| **disableheadmove**| Bepaalt of hoofden in kijkrichting meebewegen. `1` schakelt uit, `0` schakelt in. In-game te togglen met de client-side `/headmove` command.                                                                                                                                                                                                 |
| **timestamp**      | Toont een lokale tijdstempel naast chatberichten. `1` aan, `0` uit. In-game te togglen met de client-side `/timestamp` command.                                                                                                                                                                                                              |
| **ime**            | Schakelt IME (Input Method) voor chat input en taalwisseling. `1` aan, `0` uit.                                                                                                                                                                                                                                                              |
| **multicore**      | Bepaalt of de SA-MP client meerdere CPU-cores gebruikt. Standaard `1` (GEBRUIKT meerdere cores). Zet op `0` bij muisproblemen.                                                                                                                                                                                                               |
| **directmode**     | Direct-to-screen tekstweergave voor wie problemen heeft met chat rendering. `0` uit, `1` aan.                                                                                                                                                                                                                                                 |
| **audiomsgoff**    | Bij `1` wordt ‘Audio Stream: [URL]’ niet meer in de chat getoond als de server een audiostream afspeelt. In-game te togglen met `/audiomsg`.                                                                                                                                                                                                |
| **audioproxyoff**  | Bij `1`, en als er een proxy is ingesteld in Windows Internetopties, wordt die proxy niet gebruikt voor audiostreams in SA-MP.                                                                                                                                                                                                                |
| **nonametagstatus**| Bij `0` zien players een hourglass-icoon naast nametags van gepauzeerde spelers. Standaard `0` (ingeschakeld). In-game te wijzigen met `/nametagstatus`.                                                                                                                                                                                    |
| **fontface**       | Wijzigt het lettertype van chat, dialogs en scoreboard (bijv. `fontface="Comic Sans MS"`). Niet officieel ondersteund; kan problemen geven.                                                                                                                                                                                                 |
| **fontweight**     | Schakelt vetgedrukte chatfonts. **0 = VET (standaard), 1 = NORMAAL.**                                                                                                                                                                                                                                                                        |


