import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true}: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData &&  (         
        <Box>
            <Text>Matheus Andrade</Text>
            <Text color="gray.300" fontSize="small">
              matheus.w.a@outlook.com.br
            </Text>
        </Box>
      )}

      <Avatar size="md" name="Matheus Andrade"/>
    </Flex>
  )
}