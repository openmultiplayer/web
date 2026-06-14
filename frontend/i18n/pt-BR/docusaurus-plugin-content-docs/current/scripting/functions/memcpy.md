---
title: memcpy
sidebar_label: memcpy
description: "Copie bytes de um local para outro."
tags: ["string"]
---


<LowercaseNote />

## Descrição

Copie bytes de um local para outro.

| Nome | Descrição |
| ------------------------- | ------------------------------------------------------------------------------------- |
| dest[] | Uma matriz na qual os bytes da origem são copiados.
| const source[] | A matriz de origem.                                                                     |
| index = 0 | O índice inicial em bytes na matriz de destino para onde os dados devem ser copiados. |
| numbytes | O número de bytes (não células) a serem copiados.                                              |
| maxlength = sizeof (dest) | O número máximo de células que cabem no buffer de destino.                       |

## Retornos

**true** em caso de sucesso, **false** em caso de falha.

## Exemplos

```c
// Concatenar duas strings com memcpy
new
	destination[64] = "This is ",
	source[] = "a string in a 32 Bit Array";

memcpy(destination, source, strlen(destination) * 4, sizeof source * 4, sizeof destination);
print(destination);
// Saída: Esta é uma string em uma matriz de bits 32
```
## Funções Relacionadas

- [strcmp](strcmp): Compare duas strings para ver se são iguais.
- [strfind](strfind): pesquisa uma substring em uma string.
- [strdel](strdel): Exclui parte/toda uma string.
- [strins](strins): Coloque uma string em outra string.
- [strlen](strlen): Verifique o comprimento de uma string.
- [strmid](strmid): Extrai caracteres de uma string.
- [strpack](strpack): compacta uma string em um destino.
- [strval](strval): Encontre o valor de uma string.
- [strcat](strcat): concatena duas strings.
