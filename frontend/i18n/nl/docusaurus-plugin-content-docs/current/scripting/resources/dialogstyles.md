---
title: "Dialoogstijlen"
sidebar_label: "Dialoogstijlen"
---

:::note
- In [OnDialogResponse](../callbacks/OnDialogResponse) zet **button1** `response` op **1**, **button2** op **0**.
- Elke dialoog kan een optionele button 2 hebben; leeg laten verbergt deze. ESC triggert dan `response = 0`.
- [ShowPlayerDialog](../functions/ShowPlayerDialog): kleur‑embedding werkt in `caption`, `info`, `button1`, `button2`.
:::

- Deze pagina beschrijft het gedrag van `ShowPlayerDialog` en `OnDialogResponse`.
- Voor limieten: zie [Limits](../resources/limits).

## Stijl 0: `DIALOG_STYLE_MSGBOX`

Opmerkingen: `\t` voegt een TAB toe; `\n` nieuwe regel; kleur‑embedding reset niet op `\n` of `\t`.

`listitem = -1`, `inputtext` leeg.

## Stijl 1: `DIALOG_STYLE_INPUT`

`listitem = -1`; `inputtext` bevat de ingevoerde tekst (incl. kleuren).

## Stijl 2: `DIALOG_STYLE_LIST`

`listitem` is de index (0‑based); `inputtext` is de tekst van het gekozen item (zonder kleuren).

## Stijl 3: `DIALOG_STYLE_PASSWORD`

Vergelijkbaar met INPUT. `listitem = -1`; `inputtext` bevat de invoer (zonder kleurenweergave).

## Stijl 4: `DIALOG_STYLE_TABLIST`

`\t` maakt een nieuwe kolom; `\n` een nieuw item. Kleur‑embedding reset na `\n` en `\t`. Eerste rij is header. `listitem` is index; `inputtext` is tekst van de eerste kolom.

## Stijl 5: `DIALOG_STYLE_TABLIST_HEADERS`

Als TABLIST; eerste `info`‑rij bevat headers; `inputtext` is tekst van de eerste kolom van het gekozen item.


