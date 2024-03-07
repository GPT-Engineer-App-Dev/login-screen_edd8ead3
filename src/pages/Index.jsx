import React from "react";
import { Box, Heading, FormControl, FormLabel, Input, Button, Stack, Text, Divider, Center, Icon } from "@chakra-ui/react";
import { FaGoogle, FaApple } from "react-icons/fa";

const Index = () => {
  return (
    <Box maxWidth="400px" mx="auto" mt="8">
      <Heading as="h1" size="xl" textAlign="center" mb="8">
        Login
      </Heading>
      <form>
        <Stack spacing="4">
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Button colorScheme="blue" type="submit">
            Login with Email
          </Button>
        </Stack>
      </form>

      <Divider my="6" />

      <Center>
        <Text fontSize="sm" color="gray.600" mb="4">
          Or login with
        </Text>
      </Center>

      <Stack spacing="4">
        <Button leftIcon={<Icon as={FaGoogle} />} colorScheme="red" variant="outline">
          Login with Google
        </Button>
        <Button leftIcon={<Icon as={FaApple} />} colorScheme="black" variant="outline">
          Login with Apple
        </Button>
      </Stack>
    </Box>
  );
};

export default Index;
