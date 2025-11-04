---
title: Stringmanipulatie
sidebar_label: Stringmanipulatie
description: Beginnersvriendelijke guide over stringmanipulatie in Pawn, met praktische tips en voorbeelden.
---

## Introductie

### Waar gaat deze guide over?

We focussen op “string manipulation” in Pawn: van basis tot handige, effectieve technieken die je dagelijks gebruikt.

### Wat is string formatting?

Formatteren is tekst aanpassen voor leesbaarheid. In SA-MP’s Pawn is visuele formatting beperkt; kleuren werken, maar lettertypes zijn client-side. Extra fonts werken in [textdraws](../scripting/resources/textdraws) en [gametext](../scripting/functions/GameTextForPlayer).

### Stringdeclaratie

Strings zijn arrays met characters: `naam[groote]`.

::::info

**string_name**: geldige variabelenaam (bijv. `str`, `message`, `text`).

**string_size**: maximaal aantal characters.

::::

```pawn
// 5 tekens
new str_1[5];

// 100 tekens
new str_2[100];
```

Je kunt constants gebruiken voor maten:

```pawn
#define STRING_SIZE 20
new str_3[STRING_SIZE];
```

::::note

De compiler vervangt `STRING_SIZE` met de waarde. Gebruik een integer.

::::

Je kunt simpele berekeningen doen (geen modulo). Delen door 0 is fout; floats worden afgerond.

```pawn
#define STRING_SIZE 26
new
  str_4[STRING_SIZE + 4],
  str_5[STRING_SIZE - 6],
  str_6[STRING_SIZE * 2],
  str_7[9 / 3];
```

#### Lengtelimieten

SA-MP heeft limieten per context:

|                     |                                                                                                                        |      |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---- |
| **Text input**      | Chatinvoer                                                                                                             | 128  |
| **Text output**     | Tekst op het client-scherm                                                                                             | 144  |
| **Name**            | Spelersnaam                                                                                                            | 24   |
| **Textdraw string** | Tekst in textdraws                                                                                                      | 1024 |
| **Dialog info**     | Tekst in `DIALOG_STYLE_MSGBOX`, `DIALOG_STYLE_INPUT`, `DIALOG_STYLE_PASSWORD`                                          | 4096 |
| **Dialog caption**  | Titel van dialog                                                                                                       | 64   |
| **Dialog input**    | Invoer bij `DIALOG_STYLE_INPUT` en `DIALOG_STYLE_PASSWORD`                                                             | 128  |
| **Dialog column**   | Per kolom in `DIALOG_STYLE_TABLIST(_HEADER)`                                                                           | 128  |
| **Dialog row**      | Per rij in `DIALOG_STYLE_TABLIST(_HEADER)` en `DIALOG_STYLE_LIST`                                                      | 256  |
| **Chat bubble**     | Chat bubble boven nametag                                                                                              | 144  |
| **Menu title**      | GTA SA native menu header                                                                                              | 31   |
| **Menu item**       | GTA SA native menu item                                                                                                | 31   |

## Waarden toekennen

Bij creatie:

```pawn
new
  message_1[6] = "Hello",
  message_2[] = "This is another message";
```

Zorg dat de maat ≥ aantal tekens + 1 (null-terminator). Handmatig per slot kan ook; ASCII-codes werken eveneens.

Loops en interval-initialisatie zijn nuttig om strings te vullen:

```pawn
new message_7[26];
for (new i = 0; i < 26; i++) message_7[i] = 'A' + i;

new message_9[26] = {'A', 'B', ...};
```

## De null-terminator

`\0` markeert het einde van een string. Lege cellen zijn standaard `0`. Je kunt hem expliciet zetten met `0`, `\0`, of `EOS`.

## Stringfuncties

Nuttige natives (uit `string.inc`): `strlen`, `strcat`, `strmid`, `strins`, `strdel`, `strcmp`, `strfind`, `strval`, `valstr`, …

- `strlen(s)`: lengte t/m eerste null.
- `strcat(dst, src)`: plakt strings aan elkaar.
- `strval("2017")`: converteert string naar integer.

## De `format`-functie

Formatteert tekst met placeholders.

```pawn
format(output[], len, const format[], \{Float, _\}:...)
```

Gebruik `sizeof(array)` voor de juiste lengte.

## Optimalisatietips

- Kies realistische groottes; verspild geheugen stapelt.
- Overweeg packed strings voor geheugenbesparing:

```pawn
new pk[5 char];
pk = !"pawn";
```

## Output

### Console

- `print("Hello")`
- `printf("%d + %d = %d", 5, 6, 11)` ondersteunt placeholders.

### Client messages

`SendClientMessage(playerid, color, message)` en `SendClientMessageToAll(color, message)` met RGB-embed `{RRGGBB}` in tekst.

### Textdraws en dialogs

Textdraws gebruiken `TextDrawColor`. Dialogs ondersteunen volledige formatting via strings.

## Kleuren

- RGBA als `0xRRGGBBAA` voor functies.
- RGB-embed in tekst: `{FFFFFF}`.

## Escape character en sequences

Backslash `\` introduceert escapes (`\n`, `\t`, `\"`, `\\`, …). Je kunt het escape character wijzigen met `#pragma ctrlchar`.

## Format specifiers

Plaatsvervangers: `%i/%d` (int), `%s` (string), `%f` (float), `%c` (char), `%x` (hex), `%b` (binair), `%%` (letterlijk `%`), `%q` (SQLite escape).

Veldopbouw: `%[flags][width][.precision]type`

- width: minimaal aantal tekens, dynamisch met `*`.
- flags: bv. `0` voor nulvulling.
- precision: decimalen voor floats, max. lengte voor `%s`.

Voorbeeld substring met precision:

```pawn
substring(const source[], start = 0, length = -1)
{
    new output[256];
    format(output, sizeof(output), "%.*s", length, source[start]);
    return output;
}
```

## Externe links

- [strlib](https://github.com/oscar-broman/strlib)
- [formatex](https://github.com/Southclaws/formatex)
- [ASCII table](https://www.asciitable.com/)


