import { Button } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import { Divider, Flex, HStack, Text, VStack } from '@chakra-ui/layout';
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
import { GrFormEdit } from 'react-icons/gr';

function AboutMe() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<VStack
			bg='white'
			width='100%'
			padding='3'
			display='flex'
			justifyContent='center'
			alignItems='center'
			flexDirection='column'
			rounded='2xl'
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
					About Me
				</Text>
				<Flex _hover={{ cursor: 'pointer' }} padding='1' onClick={onOpen}>
					<FiEdit2 size='20px' color="rgb(17, 112, 255)" />
				</Flex>
			</Flex>
			<VStack
				width='100%'
				justifyContent='flex-start'
				alignItems='flex-start'
				spacing='0'
				fontWeight='semibold'
				fontSize='medium'
				paddingX='20px'
				lineHeight="170%"
			>
				<Text>
					👨‍🎓 I am an undergrad CSE student at VIT University, Vellore.
				</Text>
				<Text>🎨 UI/UX design enthusiast</Text>
				<Text>👨‍💻 Interested in front-end development</Text>
				<Text>🔥 Flutter enthusiast</Text>
				<Text>⚡ Fun fact I can solve a Rubik's cube under 30 sec</Text>
			</VStack>

			<Modal
				closeOnOverlayClick={false}
				onClose={onClose}
				isOpen={isOpen}
				isCentered
				scrollBehavior='inside'
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader fontWeight='bold'>Edit About</ModalHeader>
					<ModalCloseButton />
					<Divider
						bg={window.Secondary}
						height='2px'
						orientation='horizontal'
					/>
					<ModalBody className='no-scrollbar'>
						<Textarea
							marginY='10px'
							bg='#BEDDFF50'
							color='black'
							resize='vertical'
							placeholder='Type Something about yourself'
						/>
					</ModalBody>
					<Divider
						bg={window.Secondary}
						height='2px'
						orientation='horizontal'
					/>
					<ModalFooter>
						<HStack spacing='4'>
							<Button bg='none' onClick={onClose}>
								Cancel
							</Button>
							<Button
								bg={window.Primary}
								_hover={{ background: '#1684F899' }}
								color='white'
							>
								Save
							</Button>
						</HStack>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</VStack>
	);
}

export default AboutMe;
