---
title: fcreatedir
sidebar_label: fcreatedir
description: "Crie um diretório."
tags: ["file management"]
---


<VersionWarn version='omp v1.1.0.2612' />

<LowercaseNote />

## Descrição

Crie um diretório.

| Nome | Descrição |
| --------------- | ---------------------------------------------------------------------- |
| const dirname[] | O nome do diretório a ser criado, incluindo opcionalmente um caminho completo. |

## Retornos

**true** em caso de sucesso, **false** em caso de falha.

## Exemplos

```c
if (fcreatedir("logs"))
{
    // Sucesso
    printf("The directory \"logs\" created successfully.");
}
else
{
    // Erro
    print("Failed to create the directory \"logs\"");
}
```
## Notas

:::tip

Para deletar o diretório novamente, utilize [fremove](fremove). O diretório deve estar vazio antes de ser removido.

:::

## Funções Relacionadas

- [fopen](fopen): Abra um arquivo.
- [fclose](fclose): Fecha um arquivo.
- [ftemp](ftemp): Crie um fluxo de arquivo temporário.
- [fremove](fremove): Remove um arquivo.
- [fwrite](fwrite): Grava em um arquivo.
- [fputchar](fputchar): Coloca um caractere em um arquivo.
- [fgetchar](fgetchar): Obtenha um caractere de um arquivo.
- [fblockwrite](fblockwrite): Grava blocos de dados em um arquivo.
- [fblockread](fblockread): Lê blocos de dados de um arquivo.
- [fseek](fseek): Salta para um caractere específico em um arquivo.
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
