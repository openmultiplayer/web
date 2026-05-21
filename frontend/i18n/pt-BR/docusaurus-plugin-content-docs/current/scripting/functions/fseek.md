---
title: fseek
sidebar_label: fseek
description: "Altere a posição atual no arquivo."
tags: ["file management"]
---


<LowercaseNote />

## Descrição

Altere a posição atual no arquivo. Você pode avançar ou retroceder no arquivo.

| Nome | Descrição |
| --------------------------------------------------- | --------------------------------------------------------------------------- |
| File:handle | O identificador de arquivo a ser usado. Retornado por fopen.                                  |
| position | A nova posição no arquivo, relativa ao parâmetro de origem (veja abaixo). |
| [seek_whence:whence](../resources/file-seek-whence) | A posição inicial à qual a posição do parâmetro se refere.                  |

## Retornos

A nova posição; em relação ao início do arquivo.

## Exemplos

```c
// Abra "file.txt" no modo "somente leitura"
new File:handle = fopen("file.txt", io_read);

// Se "file.txt" estiver aberto
if (handle)
{
    // Sucesso

    // Vá para o 1º byte de "file.txt" e imprima sua posição
    printf("Begin of file position: %d", fseek(handle, 0, seek_start));

    // Vá para o último byte de "file.txt" e imprima sua posição
    printf("End of file position: %d", fseek(handle, 0, seek_end));

    // Vá para o mesmo byte de "file.txt" e imprima sua posição
    printf("Currrent file position: %d", fseek(handle, 0, seek_current));

    // Feche "file.txt"
    fclose(handle);
}
else
{
    // Erro
    print("Failed to open \"file.txt\".");
}
```
## Notas

:::warning

Usar um identificador inválido irá travar seu servidor! Obtenha um identificador válido usando [fopen](fopen) ou [ftemp](ftemp).

:::

## Funções Relacionadas

- [fopen](fopen): Abra um arquivo.
- [fclose](fclose): Fecha um arquivo.
- [ftemp](ftemp): Crie um fluxo de arquivo temporário.
- [fremove](fremove): Remove um arquivo.
- [fwrite](fwrite): Grava em um arquivo.
- [fread](fread): Leia um arquivo.
- [fputchar](fputchar): Coloca um caractere em um arquivo.
- [fgetchar](fgetchar): Obtenha um caractere de um arquivo.
- [fblockwrite](fblockwrite): Grava blocos de dados em um arquivo.
- [fblockread](fblockread): Lê blocos de dados de um arquivo.
- [flength](flength): Obtenha o comprimento do arquivo.
- [fexist](fexist): Verifica se existe um arquivo.
- [fmatch](fmatch): Verifica se os padrões com um nome de arquivo correspondem.
- [ftell](ftell): Obtenha a posição atual no arquivo.
- [fflush](fflush): Descarregue um arquivo no disco (certifique-se de que todas as gravações foram concluídas).
- [fstat](fstat): Retorna o tamanho e o carimbo de data/hora de um arquivo.
- [frename](frename): Renomeia um arquivo.
- [fcopy](fcopy): Copia um arquivo.
- [filecrc](filecrc): Retorna o valor CRC de 32 bits de um arquivo.
- [diskfree](diskfree): Retorna o espaço livre em disco.
- [fattrib](fattrib): Defina os atributos do arquivo.
- [fcreatedir](fcreatedir): Crie um diretório.

## Recursos relacionados

- [Procurar arquivo de onde](../resources/file-seek-whence)
