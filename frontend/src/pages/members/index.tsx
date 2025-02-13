import React from "react";
import { useState } from "react";
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
import useSWR from "swr";
import { api, apiSWR } from "src/fetcher/fetcher";
import { User } from "src/types/_generated_User";
import nProgress from "nprogress";
import LoadingBanner from "src/components/LoadingBanner";
import { APIError } from "src/types/_generated_Error";
import ErrorBanner from "src/components/ErrorBanner";

const UserView = ({ user, users, setUsers }: any) => {
  return (
    <div
      style={{
        display: "grid",
        padding: "0.4em 0.8em",
        backgroundColor: user.deletedAt ? "#FC5900" : "#FAFAFA",
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
      <BanModal user={user} users={users} setUsers={setUsers} />
    </div>
  );
};

const BanModal = ({ users, user, setUsers }: any) => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleBan = async (id: string) => {
    nProgress.start();
    setUsers(users.filter((user: any) => user.id !== id));
    await api(`/users/${user.id}`, { method: "DELETE" });
    toast({
      title: "Operation successful",
      description: `${user.name} has been banned.`,
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top-right",
    });
    nProgress.done();
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
  return null;

  const [memberSearch, setMemberSearch] = useState("");
  const [sort, setSort] = useState("asc");
  const [pageExtremes, setPageExtremes] = useState({
    start: 0,
    end: 10,
  });
  const { data, error, mutate } = useSWR<User[], APIError>("/users", apiSWR());

  if (error) {
    return <ErrorBanner {...error} />;
  }
  if (!data) {
    return <LoadingBanner />;
  }

  const users = Object.values(data);

  const handleMemberSearch = (event: any) => {
    setMemberSearch(event.target.value);
    if (event.target.value != "") {
      const extremeObj = { ...pageExtremes };
      extremeObj.start = 0;
      extremeObj.end = users.length;
      setPageExtremes(extremeObj);
    } else {
      const extremeObj = { ...pageExtremes };
      extremeObj.start = 0;
      extremeObj.end = 10;
      setPageExtremes(extremeObj);
    }
  };

  const handleSort = (event: any) => {
    setSort(event.target.value);
  };

  const nextPage = () => {
    const extremeObj = { ...pageExtremes };
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
    const extremeObj = { ...pageExtremes };
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
                <UserView
                  key={el.id}
                  user={el}
                  setUsers={mutate}
                  users={users}
                />
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
