import { Button, Flex, Heading, Icon, useColorMode } from '@chakra-ui/core';

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <nav>
      <Flex py={2} justify='space-between'>
        <Heading>Benedikt Schnatterbeck</Heading>
        <Button onClick={toggleColorMode}>
          {colorMode === 'light' ? <Icon name='sun' /> : <Icon name='moon' />}
        </Button>
      </Flex>
    </nav>
  );
};
