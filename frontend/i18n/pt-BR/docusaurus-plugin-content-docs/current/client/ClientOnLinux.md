---
title: "Cliente open.mp no Linux"
sidebar_label: "Cliente open.mp no Linux"
description: Guia para executar o cliente open.mp no Linux.
---

# Guia para executar o cliente open.mp no Linux

O launcher do open.mp pode ser executado no Linux de duas formas:

- **Com interface gráfica**, usando Proton. Você terá o launcher completo com navegador de servidores. Ele precisa do Microsoft Edge WebView2 Runtime e de uma versão do launcher compatível com Wine.
- **Pela linha de comando**, usando qualquer Wine. Funciona com todas as versões do launcher e não precisa do WebView2, mas não há interface gráfica: cada comando conecta a um único servidor.

As duas opções começam com a mesma configuração do prefixo. Depois, siga **apenas uma** das opções.

## Configurar o prefixo

Os comandos abaixo usam `~/Games/openmp` como prefixo e `~/Downloads` para os downloads. Ajuste os caminhos para o seu caso e use sempre **o mesmo prefixo** em todas as etapas. Execute os comandos no bash ou zsh. Se você usa fish, digite `bash` primeiro.

:::tip

A opção de linha de comando também funciona em um prefixo criado pelo Lutris ou Bottles, caso ele já tenha o GTA San Andreas e o launcher instalados. Nesse caso, pule para a [Opção B](#option-b-command-line-only-any-wine).

:::

1. Instale o [umu-launcher](https://github.com/Open-Wine-Components/umu-launcher) pelos pacotes da sua distribuição (`umu-launcher` no Arch/CachyOS, Fedora e outras) ou pela página de releases. Ele executa programas do Windows pelo Proton sem precisar do Steam.

2. Defina estas variáveis no terminal. Todos os comandos abaixo as utilizam:

```
export WINEPREFIX="$HOME/Games/openmp"
export GAMEID=umu-omplauncher
export STORE=none
```

Se quiser usar uma versão específica do Proton, defina também `PROTONPATH` com o caminho da pasta, por exemplo `export PROTONPATH="$HOME/.local/share/Steam/compatibilitytools.d/Proton-CachyOS Latest"`. Sem essa variável, o umu-run baixa e usa o GE-Proton.

3. Crie o prefixo. A primeira execução demora um pouco:

```
umu-run wineboot
```

4. Copie a pasta do GTA San Andreas para dentro do prefixo, por exemplo, para `~/Games/openmp/drive_c/Games/GTA San Andreas`. Copie a pasta, não um link simbólico.

5. Baixe o launcher portátil do open.mp, `omp-launcher.exe`, da [versão mais recente](https://github.com/openmultiplayer/launcher/releases/latest) e coloque-o no prefixo. Ele funciona sem instalação. Não use `omp-launcher-setup.exe`, pois o instalador tenta instalar o WebView2 por conta própria e falha dentro do prefixo.

```
mkdir -p "$WINEPREFIX/drive_c/Games/omp-launcher"
curl -fL https://github.com/openmultiplayer/launcher/releases/latest/download/omp-launcher.exe -o "$WINEPREFIX/drive_c/Games/omp-launcher/omp-launcher.exe"
```

O prefixo está pronto. Agora siga **apenas uma** destas opções:

- [Opção A: Interface gráfica do launcher](#option-a-launcher-gui-proton), se quiser o launcher completo com navegador de servidores. **Recomendado.**
- [Opção B: Somente linha de comando](#option-b-command-line-only-any-wine), se quiser apenas se conectar a um servidor por comando.

## Opção A: Interface gráfica do launcher (Proton) {#option-a-launcher-gui-proton}

:::warning

A interface gráfica precisa do **Proton**. No Wine padrão, a janela do launcher fica branca.

:::

### Testado em:

- umu-launcher com Proton-CachyOS 11.0 e WebView2 Runtime 156
- SteamOS 3.9.5 no Steam Deck com GE-Proton pelo Lutris
- Fedora Silverblue 44 com GE-Proton pelo Lutris (o UMU-Proton não funcionou nesta configuração)
- Arch Linux com KDE Plasma no Wayland, PipeWire e Proton-CachyOS-SLR pela versão Steam do GTA:SA (rebaixado para a versão 1.0, rodando no SLR)

:::note

A interface gráfica funcionou em outra configuração (outra versão do Proton ou Wine, Lutris, Bottles, Heroic, Steam ou outro ambiente gráfico)? Conte no Discord ou GitHub do open.mp e informe sua distribuição, ambiente gráfico, versão do Wine ou Proton e versão do WebView2 para que possamos adicionar à lista.

:::

### Como fazer:

1. Baixe a versão x86 do WebView2 Runtime e instale-a no prefixo. A janela do launcher é baseada nele:

```
curl -fL "https://go.microsoft.com/fwlink/p/?LinkId=2124701" -o ~/Downloads/MicrosoftEdgeWebView2RuntimeInstallerX86.exe
umu-run ~/Downloads/MicrosoftEdgeWebView2RuntimeInstallerX86.exe /silent /install
```

O instalador não exibe uma janela. Se a saída parar em `ntsync: up and running.`, ele ainda pode estar em execução. Isso é normal; aguarde o comando terminar e o prompt do shell voltar antes de continuar.

2. Inicie o launcher com o Xalia desativado nesta execução:

```
PROTON_USE_XALIA=0 umu-run "$WINEPREFIX/drive_c/Games/omp-launcher/omp-launcher.exe"
```

Na primeira inicialização, o launcher baixa os arquivos do cliente open.mp automaticamente. Nas configurações, defina o caminho do jogo como a pasta do GTA San Andreas (no exemplo, `C:\Games\GTA San Andreas`), escolha um servidor e jogue.

3. Adicione o launcher ao menu de aplicativos para iniciá-lo como qualquer outro aplicativo. O Proton não cria entradas no menu automaticamente. Execute isto uma vez, no mesmo terminal:

```
mkdir -p "$HOME/.local/share/applications" "$HOME/.local/share/icons"
curl -fL https://raw.githubusercontent.com/openmultiplayer/launcher/master/src-tauri/icons/128x128.png -o "$HOME/.local/share/icons/openmp-launcher.png"
PROTON_ENV=${PROTONPATH:+"\"PROTONPATH=$PROTONPATH\""}
cat > "$HOME/.local/share/applications/omp-launcher.desktop" <<EOF
[Desktop Entry]
Type=Application
Name=open.mp launcher
Comment=Navegador de servidores do open.mp e SA-MP
Exec=env "WINEPREFIX=$WINEPREFIX" GAMEID=umu-omplauncher STORE=none PROTON_USE_XALIA=0 $PROTON_ENV umu-run "$WINEPREFIX/drive_c/Games/omp-launcher/omp-launcher.exe"
Icon=$HOME/.local/share/icons/openmp-launcher.png
Categories=Game;
EOF
```

“open.mp launcher” aparecerá no menu de aplicativos. Você pode fixá-lo na barra de tarefas ou na área de trabalho. `PROTON_USE_XALIA=0` impede que o recurso de acessibilidade do Proton deixe o launcher mais lento.

:::tip

No Wine, o launcher renderiza por software (`--disable-gpu`), o que é mais rápido do que usar a GPU nesse ambiente. Para passar outras opções do Chromium, defina `OMP_WEBVIEW2_ARGS`. Deixe a variável vazia para usar a GPU.

:::

## Opção B: Somente linha de comando (qualquer Wine) {#option-b-command-line-only-any-wine}

:::warning

Você NÃO terá uma interface gráfica funcional. Esta opção deve ser executada em um prefixo do Wine usando argumentos de linha de comando.

:::

### Testado em:

- Lutris: wine-ge 8-26 32-bit prefix
- Bottles: soda-9.0-1

### Como fazer:

1. Baixe o [cliente SA-MP](https://www.sa-mp.mp/downloads/) e instale-o, apontando o instalador para a pasta do GTA San Andreas definida na configuração do prefixo. A interface gráfica baixa os arquivos do SA-MP automaticamente, mas a linha de comando precisa deles instalados:

```
umu-run ~/Downloads/sa-mp-0.3.7-R5-1-install.exe
```

Use o nome do arquivo da versão que você baixou.

2. Baixe a DLL mais recente do cliente open.mp. Acesse [api.open.mp/launcher](https://api.open.mp/launcher) e consulte `versions`: escolha a entrada com o maior número, baixe o `ompPluginDownload` correspondente (por exemplo, `https://assets.open.mp/omp-client-7.dll`) e confira se o MD5 corresponde ao `ompPluginChecksum` dessa entrada. Não use o `ompPluginDownload` no topo da página, pois ele aponta para um cliente antigo.

3. Salve o arquivo como `omp-client.dll` (renomeado, sem o número da versão) na pasta `AppData\Local\mp.open.launcher\omp\` do usuário principal do prefixo.

Em um prefixo do umu, estes comandos executam as duas etapas e conferem o MD5 para você:

```
OMP_DIR="$WINEPREFIX/drive_c/users/steamuser/AppData/Local/mp.open.launcher/omp"
mkdir -p "$OMP_DIR"
read -r URL MD5 < <(curl -fsSL https://api.open.mp/launcher | python3 -c 'import json,sys; v=json.load(sys.stdin)["versions"]; e=v[max(v,key=int)]; print(e["ompPluginDownload"], e["ompPluginChecksum"])')
curl -fL "$URL" -o "$OMP_DIR/omp-client.dll"
echo "$MD5  $OMP_DIR/omp-client.dll" | md5sum -c
```

A última linha deve exibir `OK`.

4. Execute o launcher com o servidor e a pasta do jogo como argumentos, pela linha de comando do prefixo (umu-run, Lutris ou Bottles), ou crie um script .bat para facilitar a inicialização.

### Exemplo de comando para iniciar

```
Z:\path\to\omp-launcher.exe -h server.ip -p port -n user.name -g Z:\home\yourname\path\to\gta-san-andreas\install\
```

No prefixo do umu configurado acima:

```
umu-run "$WINEPREFIX/drive_c/Games/omp-launcher/omp-launcher.exe" -h server.ip -p port -n user.name -g "C:\Games\GTA San Andreas"
```

:::tip

Execute omp-launcher.exe com a opção `--help` para ver mais informações sobre as opções, caso o exemplo acima não seja suficiente.

:::

## Solução de problemas

| Problema | Possível solução |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| A janela do launcher fica branca | Você está usando o Wine padrão. Execute o launcher pelo Proton (veja a seção da interface gráfica). |
| Janela em branco com `PROTON_ENABLE_WAYLAND=1` | O WebView2 não exibe a janela no Wayland nativo. Deixe a variável sem definição para o launcher rodar pelo XWayland. |
| Erro do WebView2 `0x80070002` ao iniciar | O WebView2 Runtime não está neste prefixo. Instale-o no mesmo prefixo do launcher. |
| Erro do WebView2 `0x80070005` logo após fechar | O processo do WebView2 da execução anterior ainda não foi encerrado. Aguarde alguns segundos e tente novamente. |
| O jogo trava ao pausar | Está faltando uma fonte. Instale o pacote allfonts pelo winetricks. |
| O prompt de login do servidor não aparece | Tente ativar ou desativar a opção “Prefer system libraries” no Lutris. |
| Aparece uma caixa preta e o jogo não carrega | Talvez faltem parâmetros de inicialização na CLI. Confira o comando usado para iniciar. |
