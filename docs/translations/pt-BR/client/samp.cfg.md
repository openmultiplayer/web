---
title: "samp.cfg"
description: Guia configuração samp.cfg.
---

## Descrição
samp.cfg é um arquivo de configuração do cliente que permite alterar as configurações relacionadas ao SA-MP. Este arquivo é encontrado na pasta 'Meus Documentos\GTA San Andreas User Files\SAMP', na sua conta de usuário do Windows. Este arquivo pode ser editado com um editor de texto como o bloco de notas.

## Opções
| Opção | Descrição |
|-------|-----------|
| pagesize | Isso permite que os jogadores definam o número de linhas exibidas na janela do chat. Pode ser definido entre 10 e 20 linhas. O padrão é 10 linhas. Esta opção é definida no jogo usando o comando /pagesize do lado do cliente. |
| fpslimit | Isso permite que os jogadores definam um limite específico de FPS, quando a opção de limitador de quadros estiver habilitada no menu GTA:SA. Os valores aceitos são de 20 a 90. O padrão definido pelo SA-MP é 50. Esta opção pode ser alterada no jogo com o comando /fpslimit do lado do cliente. |
| disableheadmove | Esta opção controla se a cabeça do jogador se move na direção para a qual está olhando. 1 desativa os movimentos da cabeça, 0 ativa. Esta opção pode ser alternada no jogo com o comando /headmove do lado do cliente. |
| timestamp | Isso permite que os jogadores mostrem um carimbo de data/hora local ao lado das mensagens do chat. 1 habilita carimbos de data/hora e 0 os desabilita. Isso pode ser alternado no jogo usando o comando /timestamp do lado do cliente. |
| ime | Isso controla se a entrada da janela de chat oferece suporte à edição de texto do método de entrada e à troca de idioma. 1 habilita o IME, 0 desabilita. |
| multicore | Alterna se o cliente SA-MP usa vários núcleos de CPU durante a execução. O padrão é 1 (usa vários núcleos de CPU). Defina como 0 se houver problemas com o mouse. |
| directmode | Isso permite que jogadores com problemas de exibição de texto no chat usem o modo mais lento de renderização de texto direto na tela. 0 para desabilitar, 1 para habilitar. |
| audiomsgoff | Se esta opção for definida como 1, nenhuma mensagem 'Audio Stream: [URL]' será exibida na janela de chat quando o servidor reproduzir um stream de áudio. Esta opção pode ser alternada no jogo usando o comando /audiomsg do lado do cliente. |
| audioproxyoff | Se esta opção estiver definida como 1 e houver um servidor proxy definido nas Opções de Internet do Windows, o proxy não será usado ao reproduzir streams de áudio no SA-MP. |
| nonametagstatus | Se esta opção estiver definida como 0, os jogadores verão um ícone de ampulheta (hourglass) próximo às nametags de outros jogadores quando estiverem pausados. Isso está habilitado (0) por padrão. Esta opção pode ser alterada no jogo usando o comando /nametagstatus do lado do cliente. |
| fontface | Permite alterar a fonte do chat, das caixas de diálogo e do scoreboard. Exemplo: fontface = "Comic Sans MS". Não é oficialmente suportado e pode causar problemas. |
| fontweight | Esta opção alterna se a fonte do seu chat está em negrito ou não. 0 = NEGRITO (padrão) e 1 = NORMAL. |