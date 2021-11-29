import { Button } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import { Divider, Flex, HStack, Stack, Text, VStack } from '@chakra-ui/layout';
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
import { Checkbox } from '@chakra-ui/react';
import { FiEdit2 } from 'react-icons/fi';
import { BiPlusCircle } from 'react-icons/bi'
import { GrAddCircle } from 'react-icons/gr'
import { IoMdAddCircleOutline } from 'react-icons/io';
import { RiCalendarEventFill } from 'react-icons/ri';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import WorkExperienceCard from './WorkExperienceCard';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';

function Education() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
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
					Work Experience
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
						<Text fontSize="sm">Add Experience</Text>
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
				<WorkExperienceCard />
				<WorkExperienceCard />
			</VStack>

			<Modal
				closeOnOverlayClick={false}
				onClose={onClose}
				isOpen={isOpen}
				isCentered
				size='xl'
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader fontWeight='bold'>Edit Work Experience</ModalHeader>
					<ModalCloseButton />
					<Divider
						bg={window.Secondary}
						height='2px'
						orientation='horizontal'
					/>
					<ModalBody className='no-scrollbar'>
						<VStack>
							<FormControl id='Company' spacing='0' isRequired>
								<FormLabel fontWeight='normal'>Company</FormLabel>
								<Input
									placeholder='Ex: Microsoft Corporation'
									bg={window.InputBG}
									type='text'
								/>
							</FormControl>
							<FormControl id='Title' spacing='0' isRequired>
								<FormLabel fontWeight='normal'>Title</FormLabel>
								<Input
									placeholder='Ex: UX Designer'
									bg={window.InputBG}
									type='text'
								/>
							</FormControl>
							<FormControl id='Location' spacing='0'>
								<FormLabel fontWeight='normal'>Location</FormLabel>
								<Input
									placeholder='Location Dropdown'
									bg={window.InputBG}
									type='text'
								/>
							</FormControl>
							<Flex width='100%'>
								<Checkbox>I am currently working hear</Checkbox>
							</Flex>
							<Stack direction='row' width='100%'>
								<FormControl flex='1' id='Start date' spacing='0'>
									<FormLabel fontWeight='normal'>Start date</FormLabel>
									<InputGroup>
										<DatePicker
											selected={startDate}
											placeholderText='DD-MM-YYYY'
											onChange={(date) => setStartDate(date)}
											customInput={<Input bg={window.InputBG} type='text' />}
										/>
										<InputRightElement>
											<RiCalendarEventFill />
										</InputRightElement>
									</InputGroup>
								</FormControl>
								<FormControl flex='1' id='End date' spacing='0'>
									<FormLabel fontWeight='normal'>End date</FormLabel>
									<InputGroup>
										<DatePicker
											selected={endDate}
											onChange={(date) => setEndDate(date)}
											placeholderText='DD-MM-YYYY'
											customInput={<Input bg={window.InputBG} type='text' />}
										/>
										<InputRightElement>
											<RiCalendarEventFill />
										</InputRightElement>
									</InputGroup>
								</FormControl>
							</Stack>

							<FormControl id='Description' spacing='0'>
								<FormLabel fontWeight='normal'>Description</FormLabel>
								<Textarea
									bg='#BEDDFF50'
									color='black'
									resize='vertical'
									placeholder='Type Something about your Work'
								/>
							</FormControl>
							<Button
								variant='outline'
								fontWeight='bold'
								borderColor='#1684F8'
								color='#1684F8'
								width='full'
								leftIcon={<IoMdAddCircleOutline size='20px' />}
							>
								Add another Education
							</Button>
						</VStack>
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

export default Education;
