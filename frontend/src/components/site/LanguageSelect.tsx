import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Stack, Text } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import {
  RadioGroup,
  useRadio,
  useRadioGroup,
  UseRadioProps,
} from "@chakra-ui/radio";
import { VisuallyHidden } from "@chakra-ui/visually-hidden";
import { useRouter } from "next/router";
import { FC, forwardRef, useCallback, useImperativeHandle, useState } from "react";
import getLanguageName from "src/utils/getLanguageName";

interface Props {
  title: string;
}

const LanguageSelect =  forwardRef(({ title }: Props, ref) => {
  const { locale, locales, pathname, asPath, query, push } = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newLocale, setNewLocale] = useState(locale);

  useImperativeHandle(ref, () => ({
    open: () => {
      onOpen()
    }
  }));

  const { getRadioProps } = useRadioGroup({
    name: "language",
    defaultValue: locale,
    onChange: (locale: string) => {
      setNewLocale(locale);
    },
  });

  const onSet = useCallback(() => {
    onClose();
    push({ pathname, query }, asPath, { locale: newLocale });
  }, [onClose, push, pathname, query, asPath, newLocale]);

  if (!locales || !locale) {
    return (
      <Box
        backgroundColor="red.100"
        borderRadius="0.5em"
        p="0.5em"
        lineHeight="1"
      >
        <Text m="0">Could not load locales menu</Text>
      </Box>
    );
  }

  return (
    <>
      <span>{title}</span>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Change language from {getLanguageName(locale)}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              <Button colorScheme="green" onClick={onSet}>
                Save
              </Button>

              <RadioGroup as="fieldset">
                <VisuallyHidden>
                  <legend>Website language</legend>
                </VisuallyHidden>
                <Stack direction="column">
                  {locales.map((value: string) => {
                    const radio = getRadioProps({ value });
                    return (
                      <LanguageSelectItem key={value} {...radio}>
                        {getLanguageName(value)}
                      </LanguageSelectItem>
                    );
                  })}
                </Stack>
              </RadioGroup>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
});

const LanguageSelectItem: FC<UseRadioProps> = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius={4}
        _checked={{
          borderColor: "purple.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={4}
        py={2}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default LanguageSelect;
