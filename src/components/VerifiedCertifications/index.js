import { Button } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import { Flex, Text, VStack, HStack } from '@chakra-ui/layout';
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
import { BiPlusCircle } from 'react-icons/bi'
import VerifiedCertificationsCard from './VerifiedCertificationsCard';

function Education() {
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
					Certifications
				</Text>
				<Flex _hover={{ cursor: 'pointer' }} padding='1' onClick={onOpen}>
					<Button
						backgroundColor="transparent"
						border="1.5px solid grey"
						height="35px"
						borderRadius="1rem"
						color="grey"
						display="flex"
						justifyContent="center"
						alignItems="center"
						fontSize="60%"
					>
					<HStack spacing={2}>
						<BiPlusCircle size='15px' color="rgb(131, 131, 131)" backgroundColor="rgb(131, 131, 131)" />
						<Text fontSize="sm">Add Certification</Text>
					</HStack>
					</Button>
				</Flex>
			</Flex>
			<VStack
				width='100%'
				justifyContent='flex-start'
				alignItems='flex-start'
				spacing='2'
				fontWeight='normal'
				fontSize='sm'
			>
				<VerifiedCertificationsCard />
				<VerifiedCertificationsCard />
			</VStack>

			<Modal
				closeOnOverlayClick={false}
				onClose={onClose}
				isOpen={isOpen}
				isCentered
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Modal Title</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Text>Hello @</Text>
					</ModalBody>
					<ModalFooter>
						<Button onClick={onClose}>Close</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</VStack>
	);
}

export default Education;
