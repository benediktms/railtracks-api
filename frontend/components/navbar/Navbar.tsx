import {
  Box,
  Button,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
} from '@chakra-ui/core';
import React from 'react';

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <nav>
      <Flex py={5} px={5} justify='flex-end'>
        <Box mr={2}>
          <Menu>
            {/* @ts-ignore */}
            <MenuButton as={Button} rightIcon='chevron-down'>
              Info
            </MenuButton>
            <MenuList>
              {/* @ts-ignore */}
              <MenuItem as='a' href='https://github.com/benediktms'>
                My GitHub Repo
              </MenuItem>
              {/* @ts-ignore */}
              <MenuItem
                as='a'
                /* @ts-ignore */
                href='https://www.linkedin.com/in/benedikt-schnatterbeck-813899b5/'
              >
                LinkedIn
              </MenuItem>
              {/* @ts-ignore */}
              <MenuItem as='a' href='#'>
                My CV
              </MenuItem>
              <MenuItem>Delete</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <IconButton
          aria-label='toggle color mode'
          icon={colorMode === 'light' ? 'moon' : 'sun'}
          onClick={toggleColorMode}
        />
      </Flex>
    </nav>
  );
};
