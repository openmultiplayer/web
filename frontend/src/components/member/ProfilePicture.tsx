import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";
import { API_ADDRESS } from "src/config";

const imageUrl = (id: string) => `${API_ADDRESS}/users/image/${id}`;

type Props = {
  id: string;
  size?: string;
};

const ProfilePicture: FC<Props> = ({ id, size = "1.5em" }) => {
  const src = imageUrl(id);

  return (
    <Box overflow="hidden" borderRadius="50%" w={size}>
      <Image
        src={src}
        alt="User's profile picture"
        width={40}
        height={40}
        layout="responsive"
        objectFit="contain"
      />
    </Box>
  );
};

export default ProfilePicture;
