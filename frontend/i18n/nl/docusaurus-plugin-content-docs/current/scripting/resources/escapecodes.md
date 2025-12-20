---
title: "Escape‑codes"
sidebar_label: "Escape‑codes"
---

Bij het maken van strings zijn sommige tekens lastig te noteren; escape‑codes lossen dit op. Hieronder de codes voor Pawn.

| Escape‑code                               | Code         |
| ----------------------------------------- | ------------ |
| Geluidssignaal (server)                   | \a (ook \7) |
| Backspace                                 | \b           |
| Escape                                    | \e           |
| Form feed                                 | \f           |
| Nieuwe regel                              | \n           |
| Carriage return                           | \r           |
| Horizontale tab                           | \t           |
| Verticale tab                             | \v           |
| Backslash (\)                             | \\          |
| Enkele aanhalingsteken (')                | \'           |
| Dubbele aanhalingsteken (")              | \"          |
| Procentteken                              | \%           |
| Teken met decimale code "ddd"            | \ddd;        |
| Teken met hexadecimale code "hhh"        | \xhhh;       |

:::note
De puntkomma na `\ddd;` en `\xhhh;` is optioneel en kan de escape‑reeks expliciet beëindigen in een string.
:::

Bron: `pawn-lang.pdf` (p. 99)


