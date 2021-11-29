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
import { FiEdit2 } from 'react-icons/fi'
import VerifiedCertificationsCard from './VerifiedCertificationsCard';


export default function NoCertifications(){
	const { isOpen, onOpen, onClose } = useDisclosure();
    return(
        <>
        <VStack
			bg='white'
			width='100%'
			rounded='2xl'
			paddingX={3}
            paddingY={5}
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
				flexDirection='row'
			>
				<Text fontSize='xl' fontWeight='bold'>
					Certifications
				</Text>
				<Flex _hover={{ cursor: 'pointer' }} padding='1' onClick={onOpen}>
					<FiEdit2 size='20px' color="grey" />
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
                color="rgb(29, 82, 255)"
			>
                <Button
                    backgroundColor="transparent"
                    width="fit-content"
                    height="fit-content"
                    padding={0}
                    onClick={onOpen}
                >
				<Text>
					+ Add certificates to strengthen your profile 
				</Text>
                </Button>
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
        </>
    )
}