---
título: OnPlayerKeyStateChange
descripción: Este callback se llama cuando el estado de alguna tecla soportada cambia (presionada/soltada).
tags: ["player"]
---

## Descripción

Este callback se llama cuando el estado de alguna tecla [soportada](../resources/keys) cambia (presionada/soltada).<br/>Las teclas direccionales no desencadenan OnPlayerKeyStateChange (arriba, abajo, izquierda, derecha).

| Nombre   | Descripción                                                                                      				 |
| -------- | --------------------------------------------------------------------------------------------------------------- |
| playerid | El ID del jugador que presionó o soltó una tecla.                                                				 |
| newkeys  | Un mapa (máscara de bits) de las teclas actualmente presionadas. - [ver acá](../resources/keys). 				 |
| oldkeys  | Un mapa (máscara de bits) de las teclas presionadas previo al cambio actual - [ver acá](../resources/keys).     |

## Devoluciones

- Este callback no controla devoluciones.
- Siempre se llama primero en el gamemode.

## Notas

:::info

Este callback también puede ser llamado por NPC.

:::

:::tip

Las teclas direccionales no desencadenan OnPlayerKeyStateChange (arriba, abajo, izquierda, derecha).<br/>Estas sólo pueden ser detectadas con [GetPlayerKeys](../functions/GetPlayerKeys) (en [OnPlayerUpdate](OnPlayerUpdate) o en un timer).

:::

## Funciones Relacionadas

    #test

- [GetPlayerKeys](../functions/GetPlayerKeys): Comprueba qué teclas está apretando un jugador.

## Información adicional

### Introducción

Este callback es llamado cuando un jugador presiona o suelta una de las teclas soportadas (vea [Teclas](../resources/keys)).<br/> Las teclas que son compatibles no son las teclas actuales del teclado, sino las teclas funcionales mapeadas del GTA San Andreas, esto quiere decir que, por ejemplo, no podés detectar cuando alguien presiona la <strong>barra espaciadora</strong>, pero sí podés detectar cuando este presiona su tecla la tecla de correr, (que puede, o no, ser asignada a la barra espaciadora (así es por defecto en el juego)).

### Parámetros

Los parámetros de esta funcion son una lista de todas las teclas actualmente siendo presionadas y todas las teclas presionadas hace un momento. Este callback es llamado cuando el estado de la tecla cambia (esto será, cuando una tecla sea sea presionada o soltada) y pasa los estados de todas las teclas antes y después de este cambio. Esta información puede ser usada para ver exáctamente que pasó pero las variables no pueden ser usadas directamente de la misma manera como parámetros a otras funciones. Para reducir el número de variables un solo BIT es usado para representar una tecla, esto quiere decir que una variable puede contener múltiples teclas al mismo tiempo y comparar los valores simplemente no va a funcionar siempre. 

### Cómo no comprobar una tecla

Vamos a suponer que querés detectar cuando un jugador presiona el botón DISPARO, el código obvio sería:

```c
if (newkeys == KEY_FIRE)
```

Este código puede funcionar en su testeo, pero es incorrecto y su testeo es insuficiente. Probá agachandote y presionando disparo - tu código ya no va a funcionar como antes. ¿Por qué? Esto es porque 'newkeys' ya no es lo mismo que 'KEY_FIRE', en este caso el valor será 'KEY_FIRE' COMBINADO CON 'KEY_CROUCH'.

### Cómo comprobar una tecla correctamente

Entonces, si la variable puede contener múltiples teclas al mismo tiempo, ¿cómo comprobamos por una en específico? La respuesta es enmascaramiento de bits. Cada tecla tiene su propio bit en la variable (algunas teclas tienen el mismo bit, pero estas son teclas a pie/en vehículo, entonces nunca podrán ser presionadas al mismo tiempo) y necesitás comprobar por un solo bit:

```c
if (newkeys & KEY_FIRE)
```

Notese que el uso de un solo <strong>&</strong> es correcto - este es un bitwise AND (operador de manipulación de bits), no un AND lógico, que es como se llama el operador de los dos signos <strong>&&</strong>.

Ahora si probás este código va a funcionar mientras estés agachando o parado cuando apretes la tecla/botón de disparo. Sin embargo acá sigue un ligero problema - el personaje disparará hasta que dejes de presionar la tecla. OnPlayerKeyStateChange se llama cada vez que hay un cambio en las teclas y este código funciona mientras que la tecla de disparo es presionada. Si presionas disparar el código será desencadenado, y si esta tecla es retenida y presionas agacharse - este código se desencadenará de nuevo porque una tecla (agacharse) cambió su estado y disparo aún sigue presionado. ¿Cómo detectamos cuando una tecla es presionada por primera vez, pero sin desencadenar el callback de nuevo cuando sigue presionada y otra tecla diferente cambia?

### Cómo comprobar si una tecla ha sido presionada

Acá es cuando entra "oldkeys". Para comprobar si una tecla fue presionada necesitas primero verificar si esta está como valor en "newkeys" - lo que significa que fue presionada, y entonces comprobar si esta tecla NO está en "oldkeys" - lo que quiere decir que esta sólo se ha presionado. El siguiente código hace lo anterior mencionado:

```c
if ((newkeys & KEY_FIRE) && !(oldkeys & KEY_FIRE))
```

Esto SOLO será verdadero cuando la tecla DISPARO sea presionada una sola vez, y no cuando se mantenga y otra tecla cambie su estado.

### Cómo comprobar si una tecla se liberó/dejó de presionarse

Exactamente el mismo concepto que antes, pero dado vuelta.

```c
if ((oldkeys & KEY_FIRE) && !(newkeys & KEY_FIRE))
```

### Cómo comprobar múltiples teclas

Si querés comprobar por jugadores PRESIONANDO agacharse y disparando el siguiente código funcionará correctamente:

```c
if ((newkeys & KEY_FIRE) && (newkeys & KEY_CROUCH))
```

Sin embargo si querés detectar cuando el jugador presiona por primera vez disparar y se agacha el siguiente código NO funcionará. Este funcionará si el jugador presiona las dos teclas al mismo tiempo exactamente, pero si estas están fraccionadamente afuera del mismo desencadenamiento (mucho menos de medio segundo desde que se apretó la primer tecla en cuestión), este no funcionará:

```c
if ((newkeys & KEY_FIRE) && !(oldkeys & KEY_FIRE) && (newkeys & KEY_CROUCH) && !(oldkeys & KEY_CROUCH))
```

¿Por qué no? Esto es porque OnPlayerKeyStateChange se llama cada vez que una simple tecla cambia su estado. Entonces si el jugador presiona "KEY_FIRE" - OnPlayerKeyStateChange es llamado con "KEY_FIRE" en "newkeys" y no en "oldskeys", entonces presiona "KEY_CROUCH" - OnPlayerKeyStateChange es llamado con "KEY_CROUCH" y "KEY_FIRE" en "newkeys" pero "KEY_FIRE" es ahora también en "oldkeys" como si ya fue presionado, entonces "!(oldkeys & KEY_FIRE)" fallará. Afortunadamente la solución es muy simple (de hecho más simple que el código original):

```c
if ((newkeys & (KEY_FIRE | KEY_CROUCH)) == (KEY_FIRE | KEY_CROUCH) && (oldkeys & (KEY_FIRE | KEY_CROUCH)) != (KEY_FIRE | KEY_CROUCH))
```
 
Esto puede parecer complicado, pero comprueba que ambas teclas estén en "newkeys" y que no estén en "oldkeys", si una de ellas está en "oldkeys" no importa ya que ambas no estaban. Todas estas cosas pueden ser muy simplificadas con macros (defines).

## Simplificación

### Detectar una tecla sosteniendose/hundiéndose

El macro:

```c
// HOLDING(keys)
#define HOLDING(%0) \
	((newkeys & (%0)) == (%0))
```

Sosteniendo una tecla:

```c
if (HOLDING( KEY_FIRE ))
```

Sosteniendo múltiples teclas:

```c
if (HOLDING( KEY_FIRE | KEY_CROUCH ))
```

### Detectando una tecla pulsada una sola vez

El macro:

```c
// PRESSED(keys)
#define PRESSED(%0) \
	(((newkeys & (%0)) == (%0)) && ((oldkeys & (%0)) != (%0)))
```

Una tecla pulsada:

```c
if (PRESSED( KEY_FIRE ))
```

Múltiples teclas pulsadas:

```c
if (PRESSED( KEY_FIRE | KEY_CROUCH ))
```

### Detectar si un jugador está presionando una tecla actualmente

El macro:

```c
// PRESSING(keyVariable, keys)
#define PRESSING(%0,%1) \
	(%0 & (%1))
```

Presionando una tecla:

```c
if (PRESSING( newkeys, KEY_FIRE ))
```

Presionando múltiples teclas:

```c
if (PRESSING( newkeys, KEY_FIRE | KEY_CROUCH ))
```

### Detectando una tecla liberada

El macro:

```c
// RELEASED(keys)
#define RELEASED(%0) \
	(((newkeys & (%0)) != (%0)) && ((oldkeys & (%0)) == (%0)))
```

Una tecla liberada:

```c
if (RELEASED( KEY_FIRE ))
```

Múltiples teclas liberadas:

```c
if (RELEASED( KEY_FIRE | KEY_CROUCH ))
```

## Ejemplos

### Añadiendo nitro x10 al vehículo del jugador cuando presiona disparar

```c
public OnPlayerKeyStateChange(playerid, KEY:newkeys, KEY:oldkeys)
{
	if (PRESSED(KEY_FIRE))
	{
		if (IsPlayerInAnyVehicle(playerid))
		{
			AddVehicleComponent(GetPlayerVehicleID(playerid), 1010);
		}
	}
	return 1;
}
```

### Super salto

```c
public OnPlayerKeyStateChange(playerid, KEY:newkeys, KEY:oldkeys)
{
	if (PRESSED(KEY_JUMP))
	{
		new
			Float:x,
			Float:y,
			Float:z;
		GetPlayerPos(playerid, x, y, z);
		SetPlayerPos(playerid, x, y, z + 10.0);
	}
	return 1;
}
```

### God mode mientras se sostiene 'KEY_ACTION'

```c
new
	Float:gPlayerHealth[MAX_PLAYERS];

#if !defined INFINITY
	#define INFINITY (Float:0x7F800000)
#endif

public OnPlayerKeyStateChange(playerid, KEY:newkeys, KEY:oldkeys)
{
	if (PRESSED(KEY_ACTION))
	{
		// El jugador presionó la tecla de acción, guardamos su
		// salud anterior para restaurarla posteriormente.
		GetPlayerHealth(playerid, gPlayerHealth[playerid]);
		SetPlayerHealth(playerid, INFINITY);
	}
	else if (RELEASED(KEY_ACTION))
	{
		// Dejó de presionar la tecla de acción - restauramos
		// su antigua salud de nuevo.
		SetPlayerHealth(playerid, gPlayerHealth[playerid]);
	}
	return 1;
}
```

### Explicación

No necesitas preocuparte de CÓMO se hace, sólo que así es. HOLDING detecta si está presionando una tecla (o teclas), independientemente de si la estaban presionando antes, PRESSED detecta si solo se presionó la tecla y RELEASED detecta si acaba de soltar una tecla. Sin embargo si querés saber más - sigue leyendo.

La razón por la que necesitas hacerlo de esta manera, no solo usando & o ==, es detectar exactamente las teclas que desea mientras ignora otras que pueden o no estar presionadas. En binario KEY_SPRINT es:

```
0b00001000
```

y KEY_JUMP es:

```
0b00100000
```

Si solo estuviéramos usando & y OnPlayerKeyStateChange es llamado por un jugador presionando "salto" podríamos obtener el siguiente código:

```
newkeys = 0b00100000
wanted  = 0b00101000
ANDed   = 0b00100000
```

El AND de los dos números no es 0, por lo que el resultado es verdadero, que no es lo que queremos.

Si usamos == los dos números claramente no son iguales, entonces la verificación fallaría, eso es lo que queremos.

Si el jugador estuviera presionando "saltar", "correr" y agacharse, tendríamos el siguiente código:

```
newkeys = 0b00101010
wanted  = 0b00101000
ANDed   = 0b00101000
```

La versión con AND es la misma que las claves requeridas y tampoco es 0, por lo que dará la respuesta correcta, sin embargo, los dos números originales no son iguales, por lo que == fallará. En ambos ejemplos, uno de los dos resultó en la respuesta correcta y el otro en la incorrecta. Si comparamos el primero usando & e == tenemos:

```
newkeys = 0b00100000
wanted  = 0b00101000
ANDed   = 0b00100000
```

Obviamente, "wanted" y AND no son lo mismo, por lo que la verificación falla, lo cual es correcto, para el segundo ejemplo:

```
newkeys = 0b00101010
wanted  = 0b00101000
ANDed   = 0b00101000
```

"wanted" y AND son lo mismo, por lo que compararlos devolverá verdadero, lo cual nuevamente es correcto.

Por lo tanto, al usar este método, podemos verificar con precisión si se presionaron ciertas teclas e ignorar todas las demás teclas. Las "oldkeys" lo usan en su verificación! - En lugar de == para asegurarse de que las teclas no fueron presionadas previamente, así sabemos que una de ellas fue presionada.
