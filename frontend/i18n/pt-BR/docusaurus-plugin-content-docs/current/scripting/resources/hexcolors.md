---
title: Hex Colors
sidebar_label: Hex Colors
description: "Trata da representação de cores em hexadecimal em SAMP."
---


## O que é hexadecimal?

O sistema numérico hexadecimal, ou comumente conhecido apenas como Hex, é um sistema numérico composto por 16 símbolos únicos (também conhecido como base 16). Você provavelmente está se perguntando como esse sistema numérico pode ter 16 símbolos quando nosso querido sistema decimal (base 10) possui apenas 10 símbolos (0-9). Bem, a resposta é bastante simples, vamos dar uma olhada em ambos os sistemas:

---

### Decimal (base 10)

```c
01
2
3
4
5
6
7
8
9
```
---

### Hexadecimal (base 16)

```c
01
2
3
4
5
6
7
8
9
A //10
B //11
C //12
D //13
E //14
F //15
```
Como não há mais números disponíveis, o hexadecimal usa letras do alfabeto. Não se assuste com isso, você pode simplesmente vê-los como espaços reservados cujo valor é +1 do número anterior. Isso parece muito confuso e pode até parecer bastante assustador, mas você se acostumará rapidamente.

Agora vamos dar uma olhada em alguns números maiores.

---

### Decimal (base 10)

```c
255
```
---

### Hexadecimal (base 16)

```c
FF
```
O número 255 é bastante compreensível, mas o que é ‘FF’? Vamos dar uma olhada em ambos em sua notação exponencial.

---

:::caution

**Nota** | '^' está elevado a neste caso, não o operador exclusivo bit a bit.

:::

### Decimal (base 10)

```c
2 * (10^2) + 5 * (10^1) + 5 * (10^0)

// que equivale a

200+50+5

// que equivale a

255
```
Hex é exatamente o mesmo! A única diferença é que funciona com potências de 16 (daí a base 10/16).

---

### Hexadecimal (base 16)

```c
F * (16^1) + F * (16^0)

// que equivale a

15 * (16^1) + 15 * (16^0)

// que equivale a

240+15
```
---

## Quando e como usar hexadecimal.

Não existe realmente um uso único para o hexadecimal, você pode usá-lo quando quiser; embora seja usado principalmente para definições de cores (veremos isso mais tarde). Algumas pessoas usam hexadecimal como auxílio visual para tornar as coisas mais claras (Y_Less), por exemplo:

:::caution

**Nota** | Este é um exemplo complicado, não se preocupe se não entender.

:::

```c
var = b & 0x04
```
Isso deixa bem claro que eu quero os 4 bits altos do byte baixo de b, por outro lado:

```c
var = b & 4
```
Não é nada amigável aos olhos.

Observe como '04' tem '0x' na frente dele. Este é um símbolo constante no Pawn que permite o uso de hexadecimal (como 0b é para binário).

---

## Cores hexadecimais

As cores hexadecimais seguem este formato:

```c
RR - Two values for the red (Where FF is max, and 00 is the lowest).
GG - Two values for the green (Where FF is max, and 00 is the lowest).
BB - Two values for the blue (Where FF is max, and 00 is the lowest).
AA - Two values for the transparency (Where FF is max, and 00 is the lowest).
```
Vamos dar uma olhada em algumas cores, começando pelo básico e passando para as combinações.

```c
// básicos

0x00000000 - Black
0xFF0000FF - Bright red.
0x00FF00FF - Bright green.
0x0000FFFF - Bright blue.
0xFFFFFFFF - White

// combinações

0xFFFF00FF - Bright yellow
0xFF00FFFF - Bright purple
0x00FFFFFF - Bright cyan
```
Estas são apenas as cores/combinações básicas, se você está procurando outras cores/tem preguiça de converter, é melhor usar um conversor como este:
