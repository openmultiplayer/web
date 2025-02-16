---
title: OnPlayerKeyStateChange
sidebar_label: OnPlayerKeyStateChange
description: Esta callback é chamada quando o estado de qualquer tecla suportada muda (pressionado/solto)
tags: ["player"]
---

## Descrição

Esta callback é chamada quando o estado de qualquer tecla [suportada](../resources/keys.md) muda. (pressionado/solto). Teclas direcionais não ativam o OnPlayerKeyStateChange (Para cima, baixo, direita, esquerda).

| Nome     | Descrição                                                                                     |
| -------- | --------------------------------------------------------------------------------------------- |
| playerid | O ID do jogador que pressionou ou soltou uma tecla.                                           |
| newkeys  | Um mapa (bitmask) das teclas atualmente pressionadas - [veja aqui](../resources/keys.md)      |
| oldkeys  | Um mapa (bitmask) das teclas pressionadas antes da atual - [veja aqui](../resources/keys.md). |

## Retornos

- Esta callback não suporta retornos.
- Sempre é chamado primeiro na gamemode.

## Notas

<TipNPCCallbacksPT />

:::tip

Teclas direcionais não ativam o OnPlayerKeyStateChange (Para cima, baixo, direita, esquerda). Estas podem apenas ser identificadas pelo [GetPlayerKeys](../functions/GetPlayerKeys.md) no [OnPlayerUpdate](../callbacks/OnPlayerUpdate.md) ou em um teporizador.

:::

## Funções Relaciondas

- [GetPlayerKeys](../functions/GetPlayerKeys.md): Verifica qual tecla o jogador está pressionando.

## Informação Adicional

### Introdução

Esta callback é chamada sempre que um jogador pressionar ou soltar uma das teclas suportadas como dito acima. As teclas suportadas não são exatamente teclas do teclado, mas sim, teclas mapeadas do San Andreas, isso significa que, por exemplo, você não pode detectar quando alguém pressiona a tecla espaço, mas pode detecar quando alguém pressiona a "sprint key" (botão de correr, que pode ou não estar definido para o espaço, pois é o padrão).

### Parâmetros

Os parâmetros desta função é uma lista de todoas as teclas que estão sendo pressionadas e de todas as teclas que foram pressionadas até o momento. Esta callback é chamada quando o estado da tecla muda (pressionada/solta) e passa os estados de todas a teclas. Isso pode ser usado para ver o que exatamente acontece, pois as variáveis não podem ser usadas diretamente como ocorre com os parâmetros de outras funções, para reduzir o número de variávies um único BIT é utilizado para representar a tecla, isso significa que uma variável pode conter múltiplas teclas, então comparar os valores nem sempre irá funcionar.

### Como não verificar uma tecla

Vamos presumir que você deseja detectar quando um jogador pressiona o botão FIRE (de atirar), o código óbbio seria:

```c
if (newkeys == KEY_FIRE)
```

Este código pode funcionar no seu teste, mas está errado e seu teste é insuficiente. Tente agaixar e atirar, o seu código irá para de funcionar instantaneamente. Por que? pois "newkeys" não é mais "KEY_FIRE", agora é o mesmo que "KEY_FIRE" junto de "KEY_CROUCH" (tecla para abaixar).

### Como verificar uma tecla corretamente

Então, se a variável pode conter múltiplas teclas, de uma vez, como você verifica por uma única tecla? Cada tecla contém seu única bit na variável (algumas teclas contém o mesmo bit, mas são teclas a pé/veículo, então não podem ser pressionadas ao mesmo tempo de qualquer maneira) e você precisa verificar por aquele determinado e único bit:

```c
if (newkeys & KEY_FIRE)
```

Note that the single <strong>&</strong> is correct - this is a bitwise AND, not a logical AND, which is what the two ampersands are called.

Note que o <strong>&</strong> sozinho está correto, este é um AND bitwise e não um AND lógico.

Agora se testar o código irá funcionar, mesmo se agaixar ou levantar e pressionar a tecla de atirar. Entretanto, ainda há um pequeno problema, irá atirar desde que você esteja pressionando a tecla. OnPlayerKeyStateChange é chamado sempre que uma tecla muda, e aquele código é verdadeire sempre que a botão de atirar e pressionado. Se você pressionar "fire" o código será chamado, porém se essa tecla estiver pressionada e você pressionar a tecla para agaixar o código será chamda de novo, pois pressinou a tecla para agaixar. Como detectar quando uma tecla é PRIMEIRAMENTE pressionada mas não chamada novamente quando pressionada e segurada e outra tecla é pressionada?

### Como verificar uma tecla que foi pressionada

Aqui é onde o "oldkeys" entra. Para verificar se uma tecla acabou de ser pressionada você precisa primeiramente verificar se ela está no "newkeys", isso quer dizer que está pressionada, e verificar se não está no "oldkeys", isso quer dizer que apenas foi pressionada e segurada, o código a seguir exemplifica isso:

```c
if ((newkeys & KEY_FIRE) && !(oldkeys & KEY_FIRE))
```

Será verdadeiro quando a tecla "fire" for primeiramente pressionada, não quando é pressionada e segurada e outra tecla muda.

### Como verificar por uma tecla que está sendo pressionada

O mesmo princípio que o visto acima, porém invertido:

```c
if ((oldkeys & KEY_FIRE) && !(newkeys & KEY_FIRE))
```

### Como verificar por múltiplas teclas

Se quer verificar se o jogador está pressionando "crouch" e "fire" então o código a seguir funcionará:

```c
if ((newkeys & KEY_FIRE) && (newkeys & KEY_CROUCH))
```

Não funcionará se quiser detectar quando primeiramente pressionarem "fire" e então o "crouch".

```c
if ((newkeys & KEY_FIRE) && !(oldkeys & KEY_FIRE) && (newkeys & KEY_CROUCH) && !(oldkeys & KEY_CROUCH))
```

Why not? Because OnPlayerKeyStateChange is called every time a single key changes. So they press "KEY_FIRE" - OnPlayerKeyStateChange is called with "KEY_FIRE" in "newkeys" and not in "oldkeys", then they press "KEY_CROUCH" - OnPlayerKeyStateChange is called with "KEY_CROUCH" and "KEY_FIRE" in "newkeys", but "KEY_FIRE" is now also in "oldkeys" as it's already been pressed, so "!(oldkeys & KEY_FIRE)" will fail. Fortunately the solution is very simple (in fact simpler than the original code):

Por que não? Pois OnPlayerKeyStateChange é chamada sempre que uma única tecla muda. Então ao pressionar "KEY_FIRE" OnPlayerKeyStateChange será chamado com "KEY_FIRE" no "newkeys" e não no "oldkeys", então ao pressionar "KEY_CROUCH" OnPlayerKeyStateChange será chamado com "KEY_CROUCH" e "KEY_FIRE" no "newkeys", mas "KEY_FIRE" agora também está no "oldkeys" pois já foi pressionado, então "!(oldkeys & KEY_FIRE)" irá falhar. Felizmente, a solução é bem simples:

```c
if ((newkeys & (KEY_FIRE | KEY_CROUCH)) == (KEY_FIRE | KEY_CROUCH) && (oldkeys & (KEY_FIRE | KEY_CROUCH)) != (KEY_FIRE | KEY_CROUCH))
```

Parece complicado, mas ele verifica ambas as teclas que estão no "newkeys" e ambas as teclas que não estão no "oldkeys", se uma delas estiver no "oldkeys" não irá importar pois não é ambas que estão lá. Tudo isso pode ser simplificado com bonitos e ótimos "defines".

## Simplificação

### Detectando uma tecla sendo pressionada

A definição:

```c
// HOLDING(keys)
#define HOLDING(%0) \
	((newkeys & (%0)) == (%0))
```

Pressionando uma tecla:

```c
if (HOLDING( KEY_FIRE ))
```

Pressionando múltiplas teclas:

```c
if (HOLDING( KEY_FIRE | KEY_CROUCH ))
```

### Detectando a primeira tecla que foi pressionada

A definição:

```c
// PRESSED(keys)
#define PRESSED(%0) \
	(((newkeys & (%0)) == (%0)) && ((oldkeys & (%0)) != (%0)))
```

Uma tecla que foi pressionada:

```c
if (PRESSED( KEY_FIRE ))
```

Múltiplas teclas que foram pressionadas:

```c
if (PRESSED( KEY_FIRE | KEY_CROUCH ))
```

### Detectando se o jogador, atualmente, está pressionando uma tecla

A definição:

```c
// PRESSING(keyVariable, keys)
#define PRESSING(%0,%1) \
	(%0 & (%1))
```

Pressionando uma tecla:

```c
if (PRESSING( newkeys, KEY_FIRE ))
```

Pressionando múltiplas teclas:

```c
if (PRESSING( newkeys, KEY_FIRE | KEY_CROUCH ))
```

### Detectando uma tecla que foi solta

A definição:

```c
// RELEASED(keys)
#define RELEASED(%0) \
	(((newkeys & (%0)) != (%0)) && ((oldkeys & (%0)) == (%0)))
```

Uma tecla solta:

```c
if (RELEASED( KEY_FIRE ))
```

Múltiplas teclas soltas:

```c
if (RELEASED( KEY_FIRE | KEY_CROUCH ))
```

## Exemplos

### Anexar NOS quando o jogador pressionar 'fire' (atirar)

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

### Super pulo

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

### Modo Deus ativado enquanto estiver pressionando uma tecla

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
		// Pressionaram a tecla, salve a vida antiga e ativa o modo Deus
		GetPlayerHealth(playerid, gPlayerHealth[playerid]);
		SetPlayerHealth(playerid, INFINITY);
	}
	else if (RELEASED(KEY_ACTION))
	{
		// Soltaram a tecla, restaura a vida antiga e desative o modo Deus
		SetPlayerHealth(playerid, gPlayerHealth[playerid]);
	}
	return 1;
}
```

### Explicação

Você não precisa saber como é feito, apenas que é assim. HOLDING detecta se o jogador está PRESSIONANDO uma tecla ou teclas, PRESSED detecta a tecla(s) que já foram PRESSIONADAS, RELEASED detecta se uma tecla(s) foi SOLTA.

O motivo de precisar fazer assim, e não apenas usando & ou ==, é para exatamente detectar as teclas que deseja e ignorar as outra, as quais podem ou não terem sido pressionadas, em binário KEY_SPRINT é:

```
0b00001000
```

e KEY_JUMP é:

```
0b00100000
```

Se apenas estivessemos usando & e OnPlayerKeyStateChange for chamado por um jogador pressiondo o "jump" poderiamos obter o código a seguir:

```
newkeys = 0b00100000
wanted  = 0b00101000
ANDed   = 0b00100000
```

O AND dos dois números não é 0, portanto o resultado é verdadeiro, o que não é o que queremos.

Se apenas usarmos == os dois números claramente não são os mesmos, portanto a verificação iria falhar, é o que queremos.

Se o jogador estivesse pressionando "jump" (pulo), "sprint" (correr) e crouch (agaixar), nós teriamos o seguinte código:

```
newkeys = 0b00101010
wanted  = 0b00101000
ANDed   = 0b00101000
```

A versão ANDed é o mesmo que as teclas necessárias e também não é 0, portante irá dar a resposta correta, entretanto, os dois números originais não são o mesmo, então == irá falhar. Em ambos os exemplos um dos dois resultaram na resposta correta, e outra na errada. Se compararmos o primeiro usando & e == teremos:

```
newkeys = 0b00100000
wanted  = 0b00101000
ANDed   = 0b00100000
```

Obviamente "wanted" e ANDed não são o mesmo, então a verificação falha, o que é correto, para o segundo exemplo:

```
newkeys = 0b00101010
wanted  = 0b00101000
ANDed   = 0b00101000
```

"wanted" e ANDed são o mesmo, então comparando-os irá retornar verdadeiro, o que novamente é correto.

Então usando este método, podemos precisamente verificar se determinadas teclas foram ou não pressionadas e ignorar todas as outras teclas. O "oldkeys" usa em sua verificação != ao invés de == para garantir que as teclas não foram previamente pressionadas, então sabemos que uma delas foi pressionada.
