import { Button } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import { Flex, Text, VStack } from '@chakra-ui/layout';
import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from '@chakra-ui/modal';
import { Textarea } from '@chakra-ui/textarea';
import { FiEdit2 } from 'react-icons/fi';
import ProjectsCard from './ProjectsCard';

function AboutMe() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<VStack
			bg='white'
			width='100%'
			rounded='2xl'
			padding='3'
			display='flex'
			justifyContent='center'
			alignItems='center'
			flexDirection='column'
		>
			<Flex
				width='100%'
				display='flex'
				paddingX='20px'
				justifyContent='space-between'
				alignItems='center'
				flexDir='row'
			>
				<Text fontSize='xl' fontWeight='bold'>
					Projects
				</Text>
			</Flex>
			<VStack
				width='100%'
				justifyContent='flex-start'
				alignItems='flex-start'
				spacing='2'
				fontWeight='semibold'
				fontSize='medium'
				paddingX='20px'
			>
				<ProjectsCard />
			</VStack>
		</VStack>
	);
}

export default AboutMe;
