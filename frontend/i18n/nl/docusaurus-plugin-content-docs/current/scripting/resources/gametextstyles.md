---
title: "GameText-stijlen"
sidebar_label: "GameText-stijlen"
description: GameText-stijlen voor textdraws en gametext.
---

Deze pagina behandelt gametext-stijlen en gebruik in textdraws en per-speler gametext. Gebruikt door [GameTextForPlayer](../functions/GameTextForPlayer) en [GameTextForAll](../functions/GameTextForAll).

---

## Tekstkleuren

Gebruik kleurtags om delen van tekst te kleuren, bv. `~y~Gele tekst~y~`.

| Code                 | Kleur                                                   | Omschrijving                                       |
| -------------------- | ------------------------------------------------------- | -------------------------------------------------- |
| N/B                  | ![](https://assets.open.mp/assets/images/gameTextStyles/-.png)  | Standaardkleur                                     |
| `~h~`                | ![](https://assets.open.mp/assets/images/gameTextStyles/h.png)  | Lichtere variant van de huidige kleur              |
| `~r~` …              | ![](https://assets.open.mp/assets/images/gameTextStyles/r.png)  | Rood, meerdere lichtheidsniveaus                   |
| `~g~` …              | ![](https://assets.open.mp/assets/images/gameTextStyles/g.png)  | Groen, meerdere lichtheidsniveaus                  |
| `~b~` …              | ![](https://assets.open.mp/assets/images/gameTextStyles/b.png)  | Blauw, meerdere lichtheidsniveaus                  |
| `~p~` …              | ![](https://assets.open.mp/assets/images/gameTextStyles/p.png)  | Paars, meerdere lichtheidsniveaus                  |
| `~y~` …              | ![](https://assets.open.mp/assets/images/gameTextStyles/y.png)  | Geel, meerdere lichtheidsniveaus                   |
| `~l~`                | ![](https://assets.open.mp/assets/images/gameTextStyles/l.png)  | Kleine letter L, zwart, geen lichting              |
| `~w~` / `~s~`        | ![](https://assets.open.mp/assets/images/gameTextStyles/w.png)  | Wit; `~h~` maakt alles uiteindelijk deze kleur     |

---

## Speciale tekens

Deze tags hoeven niet ingesloten te worden:

| Code  | Omschrijving                                                                                                                |
| ----- | --------------------------------------------------------------------------------------------------------------------------- |
| `~n~` | Nieuwe regel                                                                                                                |
| `~h~` | Lichter maken van geselecteerde kleuren (kan midden in de tekst staan)                                                     |
| `~u~` | Pijl omhoog (grijs)                                                                                                         |
| `~d~` | Pijl omlaag (grijs)                                                                                                         |
| `~<~` | Pijl links (grijs)                                                                                                          |
| `~>~` | Pijl rechts (grijs)                                                                                                         |
| `~]~` | `*`-symbool (alleen stijlen 3, 4, 5)                                                                                        |
| `~k~` | Toetsenmapping (bijv. `~k~~VEHICLE_TURRETLEFT~`). Lijst: zie [Keys](../resources/keys).                                     |

:::caution
Gebruik niet te veel kleuren/specials in één gametext; dit kan clients laten crashen. Zorg voor een even aantal `~`-tekens in de string.
:::

## Tekststijlen

| Stijl   | Voorbeeld                                                          | Omschrijving                                                                                                       |
| ------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| Stijl 0 | ![](https://assets.open.mp/assets/images/gameTextStyles/style0.png) | 9s zichtbaar, verbergt andere overlays (gefixet in fixes.inc)                                                     |
| Stijl 1 | ![](https://assets.open.mp/assets/images/gameTextStyles/style1.png) | Fade na ~8s; bij langere tijd herhaalt het (gefixet in fixes.inc)                                                 |
| Stijl 2 | ![](https://assets.open.mp/assets/images/gameTextStyles/style2.png) | N/B                                                                                                               |
| Stijl 3 | ![](https://assets.open.mp/assets/images/gameTextStyles/style3.png) | N/B                                                                                                               |
| Stijl 4 | ![](https://assets.open.mp/assets/images/gameTextStyles/style4.png) | N/B                                                                                                               |
| Stijl 5 | ![](https://assets.open.mp/assets/images/gameTextStyles/style5.png) | ~3s zichtbaar; weigert bij spam (gefixet in fixes.inc)                                                            |
| Stijl 6 | ![](https://assets.open.mp/assets/images/gameTextStyles/style6.png) | N/B                                                                                                               |

## Stijlen toegevoegd door [fixes.inc](https://github.com/pawn-lang/sa-mp-fixes)

| Stijl    | Voorbeeld                                                           | Omschrijving                        |
| -------- | ------------------------------------------------------------------- | ----------------------------------- |
| Stijl 7  | ![](https://assets.open.mp/assets/images/gameTextStyles/style7.png)  | Gebaseerd op SA-voertuignamen       |
| Stijl 8  | ![](https://assets.open.mp/assets/images/gameTextStyles/style8.png)  | Gebaseerd op SA-locatienamen        |
| Stijl 9  | ![](https://assets.open.mp/assets/images/gameTextStyles/style9.png)  | SA-radio (geselecteerd)              |
| Stijl 10 | ![](https://assets.open.mp/assets/images/gameTextStyles/style10.png) | SA-radio (tijdens wisselen)          |
| Stijl 11 | ![](https://assets.open.mp/assets/images/gameTextStyles/style11.png) | SA-positief geld                    |
| Stijl 12 | ![](https://assets.open.mp/assets/images/gameTextStyles/style12.png) | SA-negatief geld                    |
| Stijl 13 | ![](https://assets.open.mp/assets/images/gameTextStyles/style13.png) | SA-stuntbonussen                    |
| Stijl 14 | ![](https://assets.open.mp/assets/images/gameTextStyles/style14.png) | SA-klok                              |
| Stijl 15 | ![](https://assets.open.mp/assets/images/gameTextStyles/style15.png) | SA-notificatie-popup                 |


