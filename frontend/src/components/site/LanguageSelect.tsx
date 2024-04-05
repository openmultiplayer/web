import { useDisclosure, useBreakpointValue } from "@chakra-ui/react";
import { Box, Text, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Grid, Flex, Image } from "@chakra-ui/react";
import { RadioGroup, useRadio, useRadioGroup, UseRadioProps } from "@chakra-ui/radio"; // Import UseRadioProps
import { VisuallyHidden } from "@chakra-ui/visually-hidden";
import { useRouter } from "next/router";
import { FC, forwardRef, useCallback, useImperativeHandle, useState } from "react";
import getLanguageName from "src/utils/getLanguageName";

interface Props {
  title: string;
}

const LanguageSelect = forwardRef(({ title }: Props, ref) => {
  const { locale, locales, pathname, asPath, query, push } = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newLocale, setNewLocale] = useState(locale);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(-1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => {
      onOpen();
    },
  }));

  const modalSize = useBreakpointValue({ base: "full", md: "5xl" });
  const flagSize = useBreakpointValue({ base: 6, md: 10 });

  const { getRadioProps } = useRadioGroup({
    name: "language",
    defaultValue: locale,
    onChange: (locale: string) => {
      setNewLocale(locale);
    },
  });

  const onSet = useCallback(
    (selectedLocale: string) => {
      setNewLocale(selectedLocale);
      onClose();
      push({ pathname, query }, asPath, { locale: selectedLocale });
    },
    [onClose, push, pathname, query, asPath]
  );

  const handleButtonClick = useCallback(
    (selectedLocale: string, index: number) => {
      if (!isButtonDisabled) {
        setClickedIndex(index);
        setButtonClicked(true);
        setIsButtonDisabled(true);
        setTimeout(() => {
          onSet(selectedLocale);
          setButtonClicked(false);
          setClickedIndex(-1);
          setIsButtonDisabled(false);
        }, 300);
      }
    },
    [onSet, isButtonDisabled]
  );

  if (!locales || !locale) {
    return (
      <Box backgroundColor="red.100" borderRadius="0.5em" p="0.5em" lineHeight="1">
        <Text m="0">Could not load locales menu</Text>
      </Box>
    );
  }

  const getFlagImage = (locale) => {
    return `/images/assets/${locale}.svg`;
  };

  return (
    <>
      <span>{title}</span>

      <Modal isOpen={isOpen} onClose={onClose} size={modalSize}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Change language from {getLanguageName(locale)}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid templateColumns="repeat(3, 1fr)" templateRows="repeat(3, 1fr)" gap={2}>
              {locales.map((value: string, index: number) => {
                const radio = getRadioProps({ value });
                return (
                  <LanguageSelectItem
                    key={value}
                    {...radio}
                    onClick={() => handleButtonClick(value, index)}
                    isActive={index === clickedIndex}
                    isDisabled={isButtonDisabled}
                    flagSize={flagSize}
                  >
                    <Flex align="center" justifyContent="space-between">
                      <span>{getLanguageName(value)}</span>
                      <Image src={getFlagImage(value)} alt="Flag" maxWidth={flagSize} maxHeight={flagSize} />
                    </Flex>
                  </LanguageSelectItem>
                );
              })}
            </Grid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
});

const LanguageSelectItem: FC<{ onClick: () => void; isActive: boolean; isDisabled: boolean; flagSize: number } & UseRadioProps> = ({ // Add UseRadioProps to the component props
  onClick,
  isActive,
  isDisabled,
  flagSize,
  ...props
}) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label" onClick={onClick}>
      <input {...input} disabled={isDisabled} />
      <Box
        {...checkbox}
        cursor={isDisabled ? "not-allowed" : "pointer"}
        borderWidth="1px"
        borderRadius={4}
        px={4}
        py={2}
        backgroundColor={isActive ? "purple.300" : ""}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default LanguageSelect;
