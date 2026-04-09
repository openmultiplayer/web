---
title: 网络状态
sidebar_label: 网络状态
description: 连接服务器时按住F5键显示的网络状态信息。
tags: []
---

| 数据                                                     | **说明**                                                                    |
| -------------------------------------------------------- | --------------------------------------------------------------------------- |
| Download Rate                                            | 从服务器下载数据的速率                                                      |
| Upload Rate                                              | 向服务器上传数据的速率                                                      |
| Vehicles                                                 | 已为客户端流加载的车辆数量                                                  |
| Vehicle Models                                           | 已为客户端流加载的不同车辆模型种类数量                                      |
| Vehicle Models Loaded                                    | （预）加载的车辆模型总数                                                    |
| RWObjects                                                | 当前渲染的物体数量                                                          |
| PedSlotsUsed                                             | 已占用的角色槽数量（NPC/玩家都会占用'角色'槽）                              |
| ObjectSlotsUsed                                          | 已占用的物体槽数量                                                          |
| OnFoot Send Rate                                         | 步行状态数据同步频率（单位：毫秒）。可在 server.cfg 中设置                  |
| Streaming Mem (Memory) Used (Also shows total allowance) | 当前使用的流内存容量及总可用容量                                            |
| Messages in Send buffer                                  | 等待发送的网络消息数量                                                      |
| Messages sent                                            | 已发送的网络消息总数                                                        |
| Btyes sent                                               | 已发送的数据总量（单位：字节）                                              |
| Acks sent                                                | 已发送的确认包数量（用于确认数据包接收）                                    |
| Acks in send buffer                                      | 等待发送的确认包数量                                                        |
| Messages waiting for ack                                 | 等待接收确认的消息数量                                                      |
| Messages resent                                          | 因未收到确认而重新发送的消息数量。客户端在重新发送 109 次消息后尝试重新连接 |
| Bytes resent                                             | 重新发送的数据总量（单位：字节）                                            |
| Packetloss                                               | 已发送但未被接收端收到的数据包百分比                                        |
| Messages received                                        | 从服务器接收的网络消息总数                                                  |
| Bytes received                                           | 已接收的数据总量（单位：字节）                                              |
| Acks received                                            | 已接收的确认包数量                                                          |
| Duplicate acks received                                  | 已接收的重复确认包数量（已确认过的确认包）                                  |
