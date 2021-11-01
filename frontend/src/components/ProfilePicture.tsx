import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";
import { API_ADDRESS } from "src/config";

const imageUrl = (id: string) => `${API_ADDRESS}/users/image/${id}`;

type Props = {
  id: string;
};

const ProfilePicture: FC<Props> = ({ id }) => {
  const src = imageUrl(id);

  return (
    <Box
      position="relative"
      borderRadius="50%"
      overflow="hidden"
      width="1.5em"
      height="1.5em"
    >
      <Image
        src={src}
        alt="User's profile picture"
        layout="fill"
        objectFit="cover"
      />
    </Box>
  );
};

export default ProfilePicture;
