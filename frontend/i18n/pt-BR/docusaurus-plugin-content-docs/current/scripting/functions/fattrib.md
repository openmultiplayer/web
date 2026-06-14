---
title: fattrib
sidebar_label: fattrib
description: "Defina os atributos do arquivo."
tags: ["file management"]
---


<VersionWarn version='omp v1.1.0.2612' />

<LowercaseNote />

## Descrição

Defina os atributos do arquivo.

| Nome | Descrição |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------- |
| const filename[] | O nome do arquivo.                                                                                                     |
| timestamp = 0 | Hora da última modificação do arquivo. Quando este parâmetro é definido como zero, o carimbo de data/hora do arquivo não é alterado. |
| attrib = 0x0F | Uma máscara de bits com os novos atributos do arquivo. Quando definido como 0x0F, os atributos do arquivo não são alterados.             |

## Retornos

**true** em caso de sucesso, **false** em caso de falha.

## Exemplos

```c
// Altere o horário de modificação do arquivo para 'Thu Mar 07 2024 06:28:15'
if (fattrib("file.txt", 1709792895))
{
    // Sucesso
    print("File attributes was set.");
}
else
{
    // Erro
    print("The file \"file.txt\" does not exists, or can't set the attributes.");
}
```
## Notas

:::tip

- O tempo está em número de segundos desde a meia-noite de 1º de janeiro de 1970: o início da época do sistema UNIX.
- Os atributos do arquivo são uma máscara de bits.
- O significado de cada bit depende do sistema de arquivos subjacente (por exemplo, FAT, NTFS, etx2 e outros).

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
- [fflush](fflush): Descarregue um arquivo no disco (garanta que todas as gravações sejam concluídas).
- [fstat](fstat): Retorna o tamanho e o carimbo de data/hora de um arquivo.
- [frename](frename): Renomeia um arquivo.
- [fcopy](fcopy): Copia um arquivo.
- [filecrc](filecrc): Retorna o valor CRC de 32 bits de um arquivo.
- [diskfree](diskfree): Retorna o espaço livre em disco.
- [fcreatedir](fcreatedir): Crie um diretório.
