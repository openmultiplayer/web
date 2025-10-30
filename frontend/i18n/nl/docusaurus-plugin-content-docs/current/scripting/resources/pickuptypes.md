---
title: "Pickup-typen"
sidebar_label: "Pickup-typen"
---

### Beschikbare typen

:::note
Gebruikt door [CreatePickup](../functions/CreatePickup) en [CreatePlayerPickup](../functions/CreatePlayerPickup).
:::

:::note
De meeste andere IDs zijn ongedocumenteerd of lijken op type 1; gebruik ze niet zomaar (sommige hebben bijwerkingen zoals 18 en 20).
:::

| ID  | Beschrijving                                                                                                                                                                                                                                        |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0   | Geen speciale attributen en niet oppakbaar. Triggert geen [OnPlayerPickUpPickup](../callbacks/OnPlayerPickUpPickup)/[OnPlayerPickUpPlayerPickup](../callbacks/OnPlayerPickUpPlayerPickup) en wordt niet verwijderd bij serverstop                   |
| 1   | Bestaat altijd. Schakelt pickupscripts uit (hoefijzers/oesters) zodat alleen gescripte acties gelden. Triggert periodiek pickupevents (waarschijnlijk SA:MP-bug)                                                                                   |
| 2   | Verdwijnt na oppakken, respawnt na 30s als speler ≥ 15m afstand heeft (geld)                                                                                                                                                                        |
| 3   | Verdwijnt na oppakken, respawnt na death                                                                                                                                                                                                            |
| 4   | Verdwijnt na 20s. Respawnt na death                                                                                                                                                                                                                 |
| 5   | Verdwijnt na 120s. Respawnt na death                                                                                                                                                                                                                |
| 8   | Verdwijnt na oppakken, zonder effect (geld)                                                                                                                                                                                                         |
| 9   | Ontploft bij contact met grondvoertuig binnen 10s na creatie (landmijnen)                                                                                                                                                                          |
| 10  | Ontploft bij contact met grondvoertuig (landmijnen)                                                                                                                                                                                                 |
| 11  | Ontploft bij contact met vaartuig binnen 10s na creatie (zeemijnen)                                                                                                                                                                                |
| 12  | Ontploft bij contact met vaartuig (zeemijnen)                                                                                                                                                                                                       |
| 13  | Onzichtbaar. Speelt checkpoint-geluid bij oppakken met voertuig, triggert geen OnPlayerPickUpPickup (zwevende pickup)                                                                                                                              |
| 14  | Verdwijnt na oppakken, alleen met voertuig oppakbaar. Speelt checkpoint-geluid (zwevende pickup)                                                                                                                                                   |
| 15  | Zoals type 2, maar respawnt na 12 minuten (of 5 min bij bribe-model)                                                                                                                                                                               |
| 18  | Lijkt op type 1. Tab (KEY_ACTION) laat ‘m verdwijnen maar triggert geen OnPlayerPickUpPickup (properties)                                                                                                                                          |
| 19  | Verdwijnt na oppakken, respawnt niet. Speelt kassageluid                                                                                                                                                                                            |
| 20  | Lijkt op type 1. Verdwijnt bij foto met Camera; triggert snapshot-bericht; triggert geen OnPlayerPickUpPickup (snapshots)                                                                                                                           |
| 22  | Zoals type 3 (missions)                                                                                                                                                                                                                             |


