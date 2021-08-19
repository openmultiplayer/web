import React from "react";
import { useState, useEffect } from "react";
import { Button, HStack, Input, Select, useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useToast,
} from "@chakra-ui/react";

const User = ({ user, users, setUsers }: any) => {
  return (
    <div
      style={{
        display: "grid",
        padding: "0.4em 0.8em",
        backgroundColor: "#FAFAFA",
        margin: "0.4em 0",
        border: "1px solid #E2E8F0",
        borderRadius: "8px",
        gridTemplateColumns: "1fr 1fr 1fr 0.2fr",
        alignItems: "center",
      }}
    >
      <p>{user.name}</p>
      <p>
        <strong>{user.posts || 0}</strong> posts
      </p>
      <p>Joined on {user.createdAt.slice(0, 10)}</p>
      {/* <Button
        size="md"
        border="1px solid grey"
        onClick={() => handleBan(user.id)}
      >
        🚫
      </Button> */}
      <BanModal user={user} users={users} setUsers={setUsers} />
    </div>
  );
};

const BanModal = ({ users, user, setUsers }: any) => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleBan = (id: string) => {
    const user = users.find((user: any) => user.id === id);
    setUsers(users.filter((user: any) => user.id !== id));
    toast({
      title: "Operation successful",
      description: `${user.name} has been banned.`,
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top-right",
    });
  };

  return (
    <>
      <Button onClick={onOpen} border="1px solid lightgrey">
        ❌
      </Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ban member?</ModalHeader>
          <ModalBody>Are you sure you want to ban {user.name}?</ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={() => handleBan(user.id)}>
              Ban
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default function Members() {
  const [users, setUsers] = useState([
    {
      id: "dw20192-28djjajs2-d9892ds",
      email: "JohnDoe@example.com",
      authMethod: "GITHUB",
      name: "John Doe",
      bio: null,
      admin: false,
      createdAt: "2021-08-12T13:35:11.663Z",
      updatedAt: "2021-08-12T13:35:11.664Z",
      github: null,
      discord: null,
      servers: null,
      posts: 12,
    },
    {
      id: "d220192-282jjajs2-d9892ds",
      email: "JohnDoe@example.com",
      authMethod: "GITHUB",
      name: "Jane Doe",
      bio: null,
      admin: false,
      createdAt: "2021-08-12T13:35:11.663Z",
      updatedAt: "2021-08-12T13:35:11.664Z",
      github: null,
      discord: null,
      servers: null,
      posts: 19,
    },
    {
      id: "746802e2-d465-4904-8c80-fa598bd9ee34",
      email: "nschutze0@wsj.com",
      authMethod: "GITHUB",
      name: "Nissy Schutze",
      bio: "null",
      admin: false,
      createdAt: "27.01.2021",
      updatedAt: "06.01.2021",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 62,
    },
    {
      id: "59eff8a3-d17f-4014-a036-78da58a49096",
      email: "mshawcroft1@gov.uk",
      authMethod: "GITHUB",
      name: "Mic Shawcroft",
      bio: "null",
      admin: false,
      createdAt: "25.10.2020",
      updatedAt: "17.01.2021",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 87,
    },
    {
      id: "927b7add-b102-4cf9-8bfe-d414ff3a68f2",
      email: "mmaddra2@cornell.edu",
      authMethod: "GITHUB",
      name: "Muriel Maddra",
      bio: "null",
      admin: true,
      createdAt: "06.05.2021",
      updatedAt: "19.05.2021",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 41,
    },
    {
      id: "36f3b63a-1c04-48ef-bd34-53e21d29e443",
      email: "dhailston3@youtu.be",
      authMethod: "DISCORD",
      name: "Deborah Hailston",
      bio: "null",
      admin: false,
      createdAt: "13.04.2021",
      updatedAt: "10.02.2021",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 38,
    },
    {
      id: "d9d51a22-a9e0-4e74-91ee-b13f0798e85d",
      email: "hboocock4@howstuffworks.com",
      authMethod: "DISCORD",
      name: "Hayes Boocock",
      bio: "null",
      admin: false,
      createdAt: "25.07.2021",
      updatedAt: "08.04.2021",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 64,
    },
    {
      id: "baab91f6-8b55-4870-839f-7c9577f8e89d",
      email: "gdowner5@purevolume.com",
      authMethod: "GITHUB",
      name: "Gleda Downer",
      bio: "null",
      admin: false,
      createdAt: "09.11.2020",
      updatedAt: "13.05.2021",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 62,
    },
    {
      id: "334e283d-f7b5-411e-948c-7275fb57d122",
      email: "jdurrell6@tiny.cc",
      authMethod: "DISCORD",
      name: "Janifer Durrell",
      bio: "null",
      admin: false,
      createdAt: "07.07.2021",
      updatedAt: "19.04.2021",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 80,
    },
    {
      id: "08c8dccf-5368-4312-bae3-d69c80b49aa9",
      email: "dbleasdille7@domainmarket.com",
      authMethod: "DISCORD",
      name: "Dev Bleasdille",
      bio: "null",
      admin: false,
      createdAt: "02.08.2021",
      updatedAt: "17.01.2021",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 88,
    },
    {
      id: "3b26b61d-ae32-4300-8701-2b354f8c378f",
      email: "acharlewood8@spotify.com",
      authMethod: "DISCORD",
      name: "Anet Charlewood",
      bio: "null",
      admin: true,
      createdAt: "19.04.2021",
      updatedAt: "01.07.2021",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 44,
    },
    {
      id: "7deb8347-06fd-4450-a6ee-027a0371f94c",
      email: "kgrigorian9@wired.com",
      authMethod: "DISCORD",
      name: "Kirsten Grigorian",
      bio: "null",
      admin: true,
      createdAt: "29.08.2020",
      updatedAt: "04.08.2021",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 36,
    },
    {
      id: "bad8d621-5039-4ec2-ab77-48c869ca13fd",
      email: "rvana@csmonitor.com",
      authMethod: "GITHUB",
      name: "Rose Van Niekerk",
      bio: "null",
      admin: true,
      createdAt: "04.05.2021",
      updatedAt: "16.09.2020",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 27,
    },
    {
      id: "3dc17344-18be-4732-a81b-8661715e8f92",
      email: "anossentb@cdbaby.com",
      authMethod: "GITHUB",
      name: "Aylmer Nossent",
      bio: "null",
      admin: true,
      createdAt: "02.03.2021",
      updatedAt: "12.12.2020",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 113,
    },
    {
      id: "69cd226d-f962-4c2b-bc56-9d5135cc0a28",
      email: "mtorricinac@ovh.net",
      authMethod: "DISCORD",
      name: "Myrilla Torricina",
      bio: "null",
      admin: false,
      createdAt: "02.01.2021",
      updatedAt: "16.02.2021",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 33,
    },
    {
      id: "a6a968d3-d480-456f-ab7b-d88602e0c39c",
      email: "cmaylerd@twitter.com",
      authMethod: "DISCORD",
      name: "Carleton Mayler",
      bio: "null",
      admin: false,
      createdAt: "27.10.2020",
      updatedAt: "29.12.2020",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 36,
    },
    {
      id: "d7b64d98-04f2-47f9-b1f5-5c93454d9cca",
      email: "mdragee@icq.com",
      authMethod: "DISCORD",
      name: "Mariele Drage",
      bio: "null",
      admin: false,
      createdAt: "30.06.2021",
      updatedAt: "20.03.2021",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 81,
    },
    {
      id: "ff5cf145-7265-473f-b0b0-670a73d15720",
      email: "fblinermanf@ted.com",
      authMethod: "GITHUB",
      name: "Fay Blinerman",
      bio: "null",
      admin: false,
      createdAt: "21.08.2020",
      updatedAt: "13.10.2020",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 96,
    },
    {
      id: "2c15c2d7-6654-453b-809a-d065a263265a",
      email: "rshaweg@cbslocal.com",
      authMethod: "DISCORD",
      name: "Rodina Shawe",
      bio: "null",
      admin: true,
      createdAt: "03.05.2021",
      updatedAt: "10.02.2021",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 34,
    },
    {
      id: "bfd3a40a-6557-407d-8c91-06a651bd1b2c",
      email: "ltibbettsh@nifty.com",
      authMethod: "GITHUB",
      name: "Lefty Tibbetts",
      bio: "null",
      admin: false,
      createdAt: "20.11.2020",
      updatedAt: "17.04.2021",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 33,
    },
    {
      id: "aa9ece7a-41a8-49ca-a7ce-ba21a2f782fd",
      email: "adaunayi@typepad.com",
      authMethod: "GITHUB",
      name: "Annmaria Daunay",
      bio: "null",
      admin: false,
      createdAt: "16.10.2020",
      updatedAt: "12.04.2021",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 60,
    },
    {
      id: "1921301a-db45-4975-b40d-5c31544df25b",
      email: "fluneyj@statcounter.com",
      authMethod: "DISCORD",
      name: "Fionna Luney",
      bio: "null",
      admin: false,
      createdAt: "25.07.2021",
      updatedAt: "20.01.2021",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 124,
    },
    {
      id: "6613882e-b8a1-4105-817f-b4a3ea9f2836",
      email: "grodenburgk@washington.edu",
      authMethod: "GITHUB",
      name: "Gustave Rodenburg",
      bio: "null",
      admin: false,
      createdAt: "14.03.2021",
      updatedAt: "18.09.2020",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 74,
    },
    {
      id: "28845ce5-9ca9-4646-8b7e-ea5e4c416d0a",
      email: "jswindellsl@privacy.gov.au",
      authMethod: "GITHUB",
      name: "Jamie Swindells",
      bio: "null",
      admin: false,
      createdAt: "15.03.2021",
      updatedAt: "22.11.2020",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 94,
    },
    {
      id: "0b2a3ad8-6480-41cf-a3c8-6a9e8f16339d",
      email: "mfillarym@toplist.cz",
      authMethod: "GITHUB",
      name: "Maddi Fillary",
      bio: "null",
      admin: true,
      createdAt: "05.06.2021",
      updatedAt: "03.05.2021",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 105,
    },
    {
      id: "4d9d4869-36ec-46c8-83bd-0f9b7229fc70",
      email: "mramagen@booking.com",
      authMethod: "GITHUB",
      name: "Mirna Ramage",
      bio: "null",
      admin: false,
      createdAt: "11.09.2020",
      updatedAt: "26.10.2020",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 14,
    },
    {
      id: "96c670b9-064c-4813-aa78-5874bc849628",
      email: "ejayo@sciencedirect.com",
      authMethod: "GITHUB",
      name: "Eden Jay",
      bio: "null",
      admin: true,
      createdAt: "27.11.2020",
      updatedAt: "04.12.2020",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 116,
    },
    {
      id: "95ac4f6c-4498-4daa-af2c-9e86aeb3f0da",
      email: "kjirusekp@parallels.com",
      authMethod: "GITHUB",
      name: "Keir Jirusek",
      bio: "null",
      admin: true,
      createdAt: "03.01.2021",
      updatedAt: "12.07.2021",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 21,
    },
    {
      id: "430b0b0c-01db-458a-ad31-ac3ead3c1aaf",
      email: "nlunamq@biblegateway.com",
      authMethod: "GITHUB",
      name: "Nicola Lunam",
      bio: "null",
      admin: true,
      createdAt: "12.03.2021",
      updatedAt: "26.10.2020",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 3,
    },
    {
      id: "70bf288e-5a84-425d-a2f7-aaaee60535fb",
      email: "lmcilwrickr@pen.io",
      authMethod: "DISCORD",
      name: "Lalo McIlwrick",
      bio: "null",
      admin: false,
      createdAt: "18.07.2021",
      updatedAt: "30.01.2021",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 60,
    },
    {
      id: "30ec94f5-79b7-4a98-9310-156bb32e6ce7",
      email: "rbollettis@nhs.uk",
      authMethod: "DISCORD",
      name: "Roobbie Bolletti",
      bio: "null",
      admin: false,
      createdAt: "02.09.2020",
      updatedAt: "04.01.2021",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 40,
    },
    {
      id: "f602aae9-1fe9-4faa-b37e-fad5ff1bd975",
      email: "aantramt@dmoz.org",
      authMethod: "DISCORD",
      name: "Alyce Antram",
      bio: "null",
      admin: false,
      createdAt: "20.07.2021",
      updatedAt: "20.10.2020",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 101,
    },
    {
      id: "90974740-92c7-41ea-ad88-a9b81218a063",
      email: "nlonsdaleu@51.la",
      authMethod: "DISCORD",
      name: "Nance Lonsdale",
      bio: "null",
      admin: true,
      createdAt: "08.11.2020",
      updatedAt: "07.08.2021",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 86,
    },
    {
      id: "4a9e7461-2ad6-4a82-bdd2-27e6a9e33c6d",
      email: "croutv@myspace.com",
      authMethod: "GITHUB",
      name: "Coop Rout",
      bio: "null",
      admin: false,
      createdAt: "08.05.2021",
      updatedAt: "30.09.2020",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 120,
    },
    {
      id: "7da6c1da-0a61-45bb-8626-5070473720bf",
      email: "wautenw@archive.org",
      authMethod: "GITHUB",
      name: "Windy Auten",
      bio: "null",
      admin: true,
      createdAt: "07.03.2021",
      updatedAt: "01.11.2020",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 97,
    },
    {
      id: "7fd2a2f8-82ee-4768-be36-768871dd5b3e",
      email: "nschusterx@youtu.be",
      authMethod: "DISCORD",
      name: "Ned Schuster",
      bio: "null",
      admin: true,
      createdAt: "17.09.2020",
      updatedAt: "11.02.2021",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 73,
    },
    {
      id: "e25cacb2-613a-4ae1-b467-00075e55035f",
      email: "acrawshawy@go.com",
      authMethod: "DISCORD",
      name: "Agatha Crawshaw",
      bio: "null",
      admin: true,
      createdAt: "03.03.2021",
      updatedAt: "17.07.2021",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 102,
    },
    {
      id: "745611b2-db9e-4fb2-b4d5-ccc673c41fac",
      email: "mflippelliz@facebook.com",
      authMethod: "GITHUB",
      name: "Monty Flippelli",
      bio: "null",
      admin: false,
      createdAt: "28.10.2020",
      updatedAt: "26.02.2021",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 84,
    },
    {
      id: "aace37a9-2982-406c-8363-de16071e0dab",
      email: "bodrought10@netlog.com",
      authMethod: "DISCORD",
      name: "Benton O'Drought",
      bio: "null",
      admin: true,
      createdAt: "11.12.2020",
      updatedAt: "26.02.2021",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 80,
    },
    {
      id: "020c81d0-9fe2-425a-897e-bd9f01e901e6",
      email: "vbriddock11@naver.com",
      authMethod: "DISCORD",
      name: "Vic Briddock",
      bio: "null",
      admin: true,
      createdAt: "31.05.2021",
      updatedAt: "08.01.2021",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 55,
    },
    {
      id: "68d97aac-e9bb-49a8-96e6-4208619078e4",
      email: "mzohrer12@bandcamp.com",
      authMethod: "DISCORD",
      name: "Melina Zohrer",
      bio: "null",
      admin: true,
      createdAt: "30.05.2021",
      updatedAt: "19.01.2021",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 37,
    },
    {
      id: "5169be42-f158-4d11-82bf-ae360c5a9212",
      email: "hevens13@ucsd.edu",
      authMethod: "DISCORD",
      name: "Harold Evens",
      bio: "null",
      admin: true,
      createdAt: "05.03.2021",
      updatedAt: "10.09.2020",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 44,
    },
    {
      id: "9e656718-8f96-432c-b9e9-90e5b1a39d42",
      email: "jpatrickson14@microsoft.com",
      authMethod: "DISCORD",
      name: "Justinn Patrickson",
      bio: "null",
      admin: false,
      createdAt: "19.11.2020",
      updatedAt: "29.07.2021",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 7,
    },
    {
      id: "6099bb83-9e37-4d19-bb37-0b47d4c2d0cd",
      email: "tbarfoot15@tumblr.com",
      authMethod: "DISCORD",
      name: "Tarra Barfoot",
      bio: "null",
      admin: true,
      createdAt: "06.01.2021",
      updatedAt: "17.12.2020",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 96,
    },
    {
      id: "2679c96a-7e45-4df8-ae73-5e3378768cbf",
      email: "hflewan16@about.me",
      authMethod: "GITHUB",
      name: "Hansiain Flewan",
      bio: "null",
      admin: true,
      createdAt: "10.08.2021",
      updatedAt: "25.09.2020",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 45,
    },
    {
      id: "6f3fe518-1d71-4eac-9c98-192df9aefea1",
      email: "pwinscum17@altervista.org",
      authMethod: "DISCORD",
      name: "Prentice Winscum",
      bio: "null",
      admin: false,
      createdAt: "13.07.2021",
      updatedAt: "07.07.2021",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 56,
    },
    {
      id: "4bd20b90-b1e1-4544-85e5-e15e8d441927",
      email: "alarwell18@squarespace.com",
      authMethod: "DISCORD",
      name: "Aubine Larwell",
      bio: "null",
      admin: false,
      createdAt: "05.05.2021",
      updatedAt: "23.09.2020",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 72,
    },
    {
      id: "0333dae4-43f0-422d-9891-a8b138b1ca2a",
      email: "lmcgillecole19@vkontakte.ru",
      authMethod: "DISCORD",
      name: "Lory McGillecole",
      bio: "null",
      admin: true,
      createdAt: "19.11.2020",
      updatedAt: "12.10.2020",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 46,
    },
    {
      id: "6c69a192-a7cc-4038-bb0f-84bfeb9abd1e",
      email: "nneiland1a@tumblr.com",
      authMethod: "GITHUB",
      name: "Nalani Neiland",
      bio: "null",
      admin: false,
      createdAt: "21.08.2020",
      updatedAt: "22.08.2020",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 20,
    },
    {
      id: "d83a225a-7e52-4918-8d8a-b5f899f8bc12",
      email: "hmedina1b@netlog.com",
      authMethod: "GITHUB",
      name: "Hildagarde Medina",
      bio: "null",
      admin: true,
      createdAt: "04.12.2020",
      updatedAt: "22.07.2021",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 9,
    },
    {
      id: "844e13f7-3e5d-4b1f-bc4e-c90512363c0b",
      email: "hbirth1c@umn.edu",
      authMethod: "GITHUB",
      name: "Harlie Birth",
      bio: "null",
      admin: true,
      createdAt: "13.05.2021",
      updatedAt: "07.01.2021",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 2,
    },
    {
      id: "7f49482f-bdd5-4c53-a9a7-6a04b1e4c171",
      email: "gkemmer1d@facebook.com",
      authMethod: "GITHUB",
      name: "Gretchen Kemmer",
      bio: "null",
      admin: true,
      createdAt: "04.11.2020",
      updatedAt: "19.06.2021",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 116,
    },
    {
      id: "7f49282f-b2d5-4c53-a9a7-6a04b1e4c171",
      email: "gkemmer1d@facebook.com",
      authMethod: "GITHUB",
      name: "Amir Kemmer",
      bio: "null",
      admin: true,
      createdAt: "04.11.2020",
      updatedAt: "19.06.2021",
      github: "null",
      discord: "null",
      servers: "null",
      posts: 120,
    },
  ]);
  const [memberSearch, setMemberSearch] = useState("");
  const [sort, setSort] = useState("asc");
  const [pageExtremes, setPageExtremes] = useState({
    start: 0,
    end: 10,
  });

  //Pagination states

  const API_USERS = "https://api.open.mp/users";

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const usersResult = await fetch(`${API_USERS}?sort=${sort}`, {
  //       credentials: "include",
  //     });
  //     console.log(usersResult.json());
  //     // setUsers(JSON.parse(usersResult));
  //   };

  //   fetchUsers();
  // }, [sort]);

  const handleMemberSearch = (event: any) => {
    setMemberSearch(event.target.value);
    if (event.target.value != "") {
      let extremeObj = { ...pageExtremes };
      extremeObj.start = 0;
      extremeObj.end = users.length;
      setPageExtremes(extremeObj);
    } else {
      let extremeObj = { ...pageExtremes };
      extremeObj.start = 0;
      extremeObj.end = 10;
      setPageExtremes(extremeObj);
    }
  };

  const handleSort = (event: any) => {
    setSort(event.target.value);
  };

  const nextPage = () => {
    let extremeObj = { ...pageExtremes };
    if (extremeObj.end + 10 > users.length) {
      extremeObj.start += 10;
      extremeObj.end = users.length;
    } else {
      extremeObj.start += 10;
      extremeObj.end += 10;
    }
    setPageExtremes(extremeObj);
  };

  const lastPage = () => {
    let extremeObj = { ...pageExtremes };
    if (extremeObj.end + 10 > users.length && extremeObj.end % 10 != 0) {
      extremeObj.start -= 10;
      extremeObj.end = extremeObj.end - (extremeObj.end % 10);
    } else {
      extremeObj.start -= 10;
      extremeObj.end -= 10;
    }
    setPageExtremes(extremeObj);
  };

  return (
    <>
      <section className="center measure-wide">
        <h1>Members</h1>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <HStack spacing="10px">
            <Input
              placeholder="search members"
              style={{ margin: "0.8em 0em", minWidth: "70%" }}
              value={memberSearch}
              onChange={handleMemberSearch}
            ></Input>
            <Select value={sort} onChange={handleSort}>
              <option value="asc">ascending</option>
              <option value="desc">descending</option>
            </Select>
          </HStack>
          {`Showing ${pageExtremes.start + 1} - ${pageExtremes.end} of  ${
            users.length
          } registered members.`}

          <div style={{ minHeight: "620px" }}>
            {users
              .filter(
                (person) =>
                  person.name
                    .toLowerCase()
                    .trim()
                    .includes(memberSearch.toLowerCase().trim()) ||
                  memberSearch === ""
              )
              .slice(pageExtremes.start, pageExtremes.end)
              .map((el) => (
                <User key={el.id} user={el} setUsers={setUsers} users={users} />
              ))}
          </div>
          <HStack justifyContent="center" margin="1em">
            <Button
              isDisabled={pageExtremes.start === 0 ? true : false}
              onClick={lastPage}
            >
              previous
            </Button>
            <Button
              isDisabled={pageExtremes.end >= users.length ? true : false}
              onClick={nextPage}
            >
              next
            </Button>
          </HStack>
        </div>
      </section>
    </>
  );
}
