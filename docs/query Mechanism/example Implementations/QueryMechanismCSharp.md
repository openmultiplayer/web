---
title: Query Mechanism / C Sharp
description: Here are a few implementations of how to send and recieve packets to and from SA-MP servers (v 0.3).
---

### Source

```c
using System;
using System.IO;
using System.Net;
using System.Net.Sockets;

namespace Query
{
    class RCONQuery
    {
        Socket qSocket;
        IPAddress address;
        int _port = 0;
        string _password = null;

        string[] results = new string[50];
        int _count = 0;

        public RCONQuery(string IP, int port, string password)
        {
            qSocket = new Socket(AddressFamily.InterNetwork, SocketType.Dgram, ProtocolType.Udp);

            qSocket.SendTimeout = 5000;
            qSocket.ReceiveTimeout = 5000;

            try
            {
                address = Dns.GetHostAddresses(IP)[0];
            }

            catch
            {

            }

            _port = port;
            _password = password;
        }

        public bool Send(string command)
        {
            try
            {
                IPEndPoint endpoint = new IPEndPoint(address, _port);

                using (MemoryStream stream = new MemoryStream())
                {
                    using (BinaryWriter writer = new BinaryWriter(stream))
                    {
                        writer.Write("SAMP".ToCharArray());

                        string[] SplitIP = address.ToString().Split('.');

                        writer.Write(Convert.ToByte(Convert.ToInt32(SplitIP[0])));
                        writer.Write(Convert.ToByte(Convert.ToInt32(SplitIP[1])));
                        writer.Write(Convert.ToByte(Convert.ToInt32(SplitIP[2])));
                        writer.Write(Convert.ToByte(Convert.ToInt32(SplitIP[3])));

                        writer.Write((ushort)_port);

                        writer.Write('x');

                        writer.Write((ushort)_password.Length);
                        writer.Write(_password.ToCharArray());

                        writer.Write((ushort)command.Length);
                        writer.Write(command.ToCharArray());
                    }

                    if (qSocket.SendTo(stream.ToArray(), endpoint) > 0)
                        return true;
                }
            }

            catch
            {
                return false;
            }

            return false;
        }

        public int Receive()
        {
            try
            {
                for (int i = 0; i < results.GetLength(0); i++)
                    results.SetValue(null, i);

                _count = 0;

                EndPoint endpoint = new IPEndPoint(address, _port);

                byte[] rBuffer = new byte[500];
                
                int count = qSocket.ReceiveFrom(rBuffer, ref endpoint);

                using (MemoryStream stream = new MemoryStream(rBuffer))
                {
                    using (BinaryReader reader = new BinaryReader(stream))
                    {
                        if (stream.Length <= 11)
                            return _count;

                        reader.ReadBytes(11);
                        short len;

                        try
                        {
                            while ((len = reader.ReadInt16()) != 0)
                                results[_count++] = new string(reader.ReadChars(Convert.ToInt32(len)));
                        }

                        catch
                        {
                            return _count;
                        }
                    }
                }
            }

            catch
            {
                return _count;
            }

            return _count;
        }

        public string[] Store(int count)
        {
            string[] rString = new string[count];

            for (int i = 0; i < count && i < _count; i++)
                rString[i] = results[i];

            _count = 0;

            return rString;
        }
    }

    class Query
    {
        Socket qSocket;
        IPAddress address;
        int _port = 0;

        string[] results;
        int _count = 0;

        DateTime[] timestamp = new DateTime[2];

        public Query(string IP, int port)
        {
            qSocket = new Socket(AddressFamily.InterNetwork, SocketType.Dgram, ProtocolType.Udp);

            qSocket.SendTimeout = 5000;
            qSocket.ReceiveTimeout = 5000;

            try
            {
                address = Dns.GetHostAddresses(IP)[0];
            }

            catch
            {

            }

            _port = port;
        }

        public bool Send(char opcode)
        {
            try
            {
                EndPoint endpoint = new IPEndPoint(address, _port);

                using (MemoryStream stream = new MemoryStream())
                {
                    using (BinaryWriter writer = new BinaryWriter(stream))
                    {
                        writer.Write("SAMP".ToCharArray());

                        string[] SplitIP = address.ToString().Split('.');

                        writer.Write(Convert.ToByte(Convert.ToInt32(SplitIP[0])));
                        writer.Write(Convert.ToByte(Convert.ToInt32(SplitIP[1])));
                        writer.Write(Convert.ToByte(Convert.ToInt32(SplitIP[2])));
                        writer.Write(Convert.ToByte(Convert.ToInt32(SplitIP[3])));

                        writer.Write((ushort)_port);

                        writer.Write(opcode);

                        if (opcode == 'p')
                            writer.Write("8493".ToCharArray());

                        timestamp[0] = DateTime.Now;
                    }

                    if (qSocket.SendTo(stream.ToArray(), endpoint) > 0)
                        return true;
                }
            }

            catch
            {
                return false;
            }

            return false;
        }

        public int Receive()
        {
            try
            {
                _count = 0;

                EndPoint endpoint = new IPEndPoint(address, _port);

                byte[] rBuffer = new byte[3402];
                qSocket.ReceiveFrom(rBuffer, ref endpoint);

                timestamp[1] = DateTime.Now;

                using (MemoryStream stream = new MemoryStream(rBuffer))
                {
                    using (BinaryReader reader = new BinaryReader(stream))
                    {
                        if (stream.Length <= 10)
                            return _count;

                        reader.ReadBytes(10);

                        switch (reader.ReadChar())
                        {
                            case 'i': // Information
                                {
                                    results = new string[6];

                                    results[_count++] = Convert.ToString(reader.ReadByte());

                                    results[_count++] = Convert.ToString(reader.ReadInt16());

                                    results[_count++] = Convert.ToString(reader.ReadInt16());

                                    int hostnamelen = reader.ReadInt32();
                                    results[_count++] = new string(reader.ReadChars(hostnamelen));

                                    int gamemodelen = reader.ReadInt32();
                                    results[_count++] = new string(reader.ReadChars(gamemodelen));

                                    int languagelen = reader.ReadInt32();
                                    results[_count++] = new string(reader.ReadChars(languagelen));

                                    return _count;
                                }

                            case 'r': // Rules
                                {
                                    int rulecount = reader.ReadInt16();

                                    results = new string[rulecount * 2];

                                    for (int i = 0; i < rulecount; i++)
                                    {
                                        int rulelen = reader.ReadByte();
                                        results[_count++] = new string(reader.ReadChars(rulelen));

                                        int valuelen = reader.ReadByte();
                                        results[_count++] = new string(reader.ReadChars(valuelen));
                                    }

                                    return _count;
                                }

                            case 'c': // Client list
                                {
                                    int playercount = reader.ReadInt16();

                                    results = new string[playercount * 2];

                                    for (int i = 0; i < playercount; i++)
                                    {
                                        int namelen = reader.ReadByte();
                                        results[_count++] = new string(reader.ReadChars(namelen));

                                        results[_count++] = Convert.ToString(reader.ReadInt32());
                                    }

                                    return _count;
                                }

                            case 'd': // Detailed player information
                                {
                                    int playercount = reader.ReadInt16();

                                    results = new string[playercount * 4];

                                    for (int i = 0; i < playercount; i++)
                                    {
                                        results[_count++] = Convert.ToString(reader.ReadByte());

                                        int namelen = reader.ReadByte();
                                        results[_count++] = new string(reader.ReadChars(namelen));

                                        results[_count++] = Convert.ToString(reader.ReadInt32());
                                        results[_count++] = Convert.ToString(reader.ReadInt32());
                                    }

                                    return _count;
                                }

                            case 'p': // Ping
                                {
                                    results = new string[1];

                                    results[_count++] = timestamp[1].Subtract(timestamp[0]).Milliseconds.ToString();

                                    return _count;
                                }

                            default:
                                return _count;
                        }
                    }
                }
            }

            catch
            {
                return _count;
            }
        }

        public string[] Store(int count)
        {
            string[] rString = new string[count];

            for (int i = 0; i < count && i < _count; i++)
                rString[i] = results[i];

            _count = 0;

            return rString;
        }
    }
}
```

## Implementation

Just copy it into your code and you're good to go. To call it, use the methods like this:

```c
Query.Query sQuery = new Query.Query("127.0.0.1", 7777);

sQuery.Send('i');

int count = sQuery.Receive();

string[] info = sQuery.Store(count);

/* 
 * Variable 'info' might now contain:   
 *   Password   Players     Max. players    Hostname                Gamemode    Language
 * { "0",       "12",       "500",          "Query test server",    "LVDM",     "English" }
 */

//-------------------------

Query.RCONQuery sQuery = new Query.RCONQuery("127.0.0.1", 7777, "changeme");

sQuery.Send("echo Hello from C#");

int count = sQuery.Receive();

string[] info = sQuery.Store(count);

/* 
 * Variable 'info' might now contain:
 * { "Hello from C#" }
 */
}
```