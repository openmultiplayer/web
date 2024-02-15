---
title: TextDrawFont
description: Cambia la fuente del texto.
tags: ["textdraw"]
---

## Description

Changes the text font.
| Nombre | Descripcion |
| ------ | ----------- |
|  text  | El TextDraw a cambiar |
|  font  | Hay cuatro estilos de fuente, como se muestra a continuación. El valor de fuente 4 especifica que se trata de un sprite txd; 5 especifica que este textdraw puede mostrar modelos de vista previa. Un valor de fuente superior a 5 no se muestra, y cualquier valor superior a 16 crashea el cliente. |

**Estilos disponibles:**
![Available Styles](images/textdraws/Textdraw_font_styles.png)

**Fuentes disponibles:**
![Available Fonts](images/textdraws/Textdraw_Fonts.png)

## Retorno

Esta función no devuelve ningún valor específico.

## Ejemplos

```c
new Text: gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(320.0, 425.0, "This is an example textdraw");
    TextDrawFont(gMyTextdraw, 2);
    return 1;
}
```

## Notas

:::tip

Si quieres cambiar la fuente de un textdraw que ya se muestra, no tienes que volver a crearlo. Simplemente usa TextDrawShowForPlayer/TextDrawShowForAll después de modificar el textdraw y el cambio será visible.

:::

## Funciones relacionadas

- [TextDrawCreate](TextDrawCreate): Crear un textdraw.
- [TextDrawDestroy](TextDrawDestroy): Destruir un textdraw.
- [TextDrawColor](TextDrawColor): Establecer el color de un textdraw.
- [TextDrawBoxColor](TextDrawBoxColor): Establecer el color de la caja de un textdraw.
- [TextDrawBackgroundColor](TextDrawBackgroundColor): Establecer el color de fondo de un textdraw.
- [TextDrawAlignment](TextDrawAlignment): Establecer la alineación de un textdraw.
- [TextDrawLetterSize](TextDrawLetterSize): Definir el tamaño de letra del texto de un textdraw.
- [TextDrawTextSize](TextDrawTextSize): Definir el tamaño de la caja de un textdraw.
- [TextDrawSetOutline](TextDrawSetOutline): Definir si el texto tiene borde.
- [TextDrawSetShadow](TextDrawSetShadow): Definir si tiene sombras un textdraw.
- [TextDrawSetProportional](TextDrawSetProportional): Escalar el espaciado del texto en un textdraw a una relación proporcional.
- [TextDrawUseBox](TextDrawUseBox): Alternar si el textdraw tiene una caja o no.
- [TextDrawSetString](TextDrawSetString): Cambiar el texto de un textdraw existente.
- [TextDrawShowForPlayer](TextDrawShowForPlayer): Mostrar un textdraw a un jugador.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): Esconder un textdraw a un jugador.
- [TextDrawShowForAll](TextDrawShowForAll): Mostrar un textdraw a todos los jugadores.
- [TextDrawHideForAll](TextDrawHideForAll): Esconder un textdraw a todos los jugadores.
