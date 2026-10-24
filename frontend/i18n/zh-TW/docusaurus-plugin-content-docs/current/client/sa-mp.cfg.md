---
title: sa-mp.cfg
sidebar_label: sa-mp.cfg
description: SA-MP 用戶端設定檔。
---

## 設定檔說明

`sa-mp.cfg` 是用來變更 SA-MP 相關設定的用戶端設定檔。此檔案位於 Windows 使用者帳戶下的「我的文件\\GTA San Andreas User Files\\SAMP」資料夾，可使用記事本等文字編輯器修改。

## 設定選項

| 選項                 | 說明                                                                                                                               |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| **pagesize**        | 請查閱指令 /pagesize。                                                                                                             |
| **fpslimit**        | 請查閱指令 /fpslimit。                                                                                                             |
| **disableheadmove** | 請查閱指令 /headmove。                                                                                                             |
| **timestamp**       | 請查閱指令 /timestamp。                                                                                                            |
| **ime**             | 控制聊天視窗輸入框是否支援輸入法文字編輯和語言切換（IME）。1 啟用 IME，0 停用 IME。                                                 |
| **audiomsgoff**     | 請查閱指令 /audiomsg。                                                                                                             |
| **multicore**       | 切換 SA-MP 用戶端執行時是否使用多個 CPU 核心。預設值為 `1`（使用多個 CPU 核心）。若遇到滑鼠問題，請設為 `0`。                      |
| **directmode**      | 讓聊天文字顯示有問題的玩家使用較慢的直接螢幕文字渲染模式。0 為停用，1 為啟用。                                                      |
| **audioproxyoff**   | 若此選項設為 `1`，且 Windows 網際網路選項中設有 Proxy 伺服器，SA-MP 播放音訊串流時將不使用該 Proxy。                               |
| **nonametagstatus** | 此選項於 0.3x 加入，請查閱指令 /nametagstatus。                                                                                    |
| **fontface**        | 此選項於 0.3.7 加入，可變更聊天、對話框和計分板的字型，例如 `fontface="Comic Sans MS"`。此功能尚未正式支援，可能會造成問題。      |
| **fontweight**      | 此選項於 0.3.7 加入，用來切換聊天字型是否為粗體。0 = 粗體（預設），1 = 一般字體。                                                  |
| **nohudscalefix**   | 此選項可啟用或停用雷達比例修正，也可以在遊戲中使用用戶端指令 /hudscalefix 變更。                                                   |
