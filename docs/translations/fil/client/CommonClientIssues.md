---
title: Common Issues
---

## Contents

## Client

### Nagka error ako "San Andreas cannot be found"

Ang San Andreas Multiplayer ay **hindi** stand-alone program! Nagdadag-dag lamang ito ng functionality sa GTA San Andreas, bagkus ay kailangan ang GTA San Andreas na laro para sa PC. Kailangan din itong maging **EU/US v1.0**, ang ibang version tulad ng v2.0 o Steam at Direct2Drive versions ay hindi gagana. [pindutin dito upang i-downgrade ang iyong GTA: SA version sa 1.0](http://grandtheftauto.filefront.com/file/GTA_SA_Downgrader_Patch;74661)

### Wala akong makitang server sa SA:MP client ko!

Una, dapat ay siguraduhing sinusundan ang tamang proseso na nakalapat sa [Quick-start guide](https://team.sa-mp.com/wiki/Getting_Started). Kung sinundan ito, at hindi parin nakikita ang mga servers sa iyong SA:MP client, kaialangan mong i-allow ang SA:MP sa iyong firewall. Sa kasamaang palad, dahil sa dami ng availanle na firewall softwares, hindi namin kayo matutulungan dito - pero suggest namin na maghanap kayo sa website ng manufacturer o maghanap ng solusyon sa Google search. At wag kalimutin na updated ang inyong SA:MP client sa latest na version!

### Singleplayer loads instead of SA:MP

:::warning

Hindi ka dapat makakita ng singleplayer options kapag binuksan ang GTA mula sa SA:MP client (new game, load game, etc.) - Ang SA:MP ay magbubukas mag-isa at hindi ipapakita ang mga options na ito. Kapag nakakita ka ng options na mga to tulad ng "new game", magbubukas ang Single Player at hindi ang San Andreas Multiplayer.

:::

Ang Singleplayer ay maaaring mag lumitaw sa dalawang rason; hindi mo na install ng maayos ang iyong SA:MP at wala ito sa GTA San Andreas game folder o maling version ng GTA San Andreas ang iyong gamit. Kung maling version ng GTA San Andreas ang iyong ginagamit ay maaari mo itong ma downgrade gamit ang GTA San Andreas Downgrader. Pindutin [ito](http://grandtheftauto.filefront.com/file/GTA_SA_Downgrader_Patch;74661) para ma download ito.

Minsan ang single player menu ay lalabas, pero ang SA:MP ay nag bukas naman siguro, subukang pumili sa mga options na ito sa menu at pindutin ang `ESC` key para makaalis dito. Ang SA:MP ay magbubukas na.

### May lumalabas na "Unacceptable Nickname" kapag pumapasok ako sa server!

Siguraduhing ikaw ay hindi gumagamit ng pinagbabawal na mga characters sa iyong pangalan na ilinagay, gamitin ang (0-9, a-z, \[\], (), \$, @, ., \_ at = lamang), at dapat ang pangalan ay hindi lumalagpas sa 20 characters. Maaari din itong mangyari kapag ang pangalan na iyong ginagamit ay nasa loob na ng server na pinapasukan (Na pwedeng mangyari kapag nag rereconnect ka ng madalas pagkatapos mag timeout o mag crash). Ang window na nag rurun ng SA:MP sa humigit na 50 araw ay minsan ang dahilan sa bug na ito.

### Ang screen ko ay nagpapakita lamang ng "Connecting to IP:Port..."

Ang server ay pwedeng offline, o kung hindi maka connect sa server, subukang patayin ang firewall at tignan kung gagana ito. Kung gumana, kailangan mong i reconfigure ang iyong firewall. Maaari din na ikaw ay gumagamit ng outdated na version ng SA:MP - mahahanap mo ang updated na version ng SA:MP [dito](http://sa-mp.com/download.php).

### Meron akong mods sa GTA San Andreas at ang SA:MP ay ayaw bumukas.

Kapag ayaw bumukas, delete mo ang iyong mods na sa tingin mo ay nagbibigay ng problemang ito.

### Kapag binubuksan ko ang GTA gamit ang SA:MP ayaw nitong bumukas.

I delete ang gta_sa.set sa iyong userfiles folder at siguraduhing wala kang cheats o mods.

### Nag c-crash ang aking laro kapag may sumabog na sasakyan.

Kung meron kang dalawang monitor sa PC merong tatlong paraan para maayos ito:

1. I-Disable ang 2dr monitor kapag naglalaro ka ng SA:MP. (Hindi siguro matalinong paraan kapag gusto mong maglaro ng SA:MP sa iyong dalawang monitor.)
2. I-Set ang Visual FX Quality sa low. (ESC > Options > Display Setup > Advanced)
3. Rename mo ang iyong GTA San Andreas folder (halimbawa: "GTA San Andreas2" o GTA "San_Andreas") (Madalas itong gumana, ngunit minsan ay hindi gagana kaya kailangan mong i-rename ito muli.)

### Hindi na gumagana ang aking mouse katapos kong umalis sa pause menu.

Kung hindi na gumagana o nag freeze ang iyong mouse katapos umalis sa game menu pero gumagana ito sa game menu, kailangan mong i-disable ang multicore option [sa-mp.cfg](../../../client/ClientCommands#file-sa-mpcfg "Sa-mp.cfg") (set mo ito sa 0). Tuloy-tuloy na pag pindot sa `ESC` button hanggang gumana ang mouse ay maaaring maging solusyon, pero hindi ito malinis na solusyon at matagal itong gawin.

### The file dinput8.dll is missing

Lumalabas ito kapag ang iyong DirectX ay hindi na install ng tama, subukang i re-install ito - Wag kalimutang i-restart ang iyong PC. Kung naroon padin ang problema, punta ka nalang sa `C:\\Windows\\System32` at i copy paste ang dinput.dll na file papunta sa folder ng iyong GTA San Andreas. Maaayos na ito katapos.

### I cannot see other player's nametags! Hindi ko makita ang nametag ng ibang players!

Kailangan mong tandaan na minsan ang server na iyong pinasukan ay dinidisable ang nametags. Kung hindi man, ang problemang ito ay nangyayari sa mga computer na may Intel HD integrated graphics processors (na hindi naman talaga pang gaming). Sa kasamaang palad, walang unibersal na solusyon para dito, ang aayos lang dito ay mag install ng dedicated na graphics card para sa iyong computer, kung kaya naman ito ng iyong bulsa.
