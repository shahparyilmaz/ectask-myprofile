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
import { FiEdit2 } from 'react-icons/fi';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { RiCalendarEventFill } from 'react-icons/ri';
import { BiPlusCircle } from 'react-icons/bi'
import EducationCard from './EducationCard';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Education() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);

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
					Education
				</Text>
				{/* <Flex _hover={{ cursor: 'pointer' }} padding='1' onClick={onOpen}>
					<FiEdit2 size='20px' color="rgb(17, 112, 255)"/>
				</Flex> */}
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
						<Text fontSize="sm">Add Education</Text>
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
				<EducationCard />
				<EducationCard />
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
					<ModalHeader fontWeight='bold'>Edit Education</ModalHeader>
					<ModalCloseButton />
					<Divider
						bg={window.Secondary}
						height='2px'
						orientation='horizontal'
					/>
					<ModalBody className='no-scrollbar'>
						<VStack>
							<FormControl id='School/University' spacing='0'>
								<FormLabel fontWeight='normal'>School/University</FormLabel>
								<Input
									placeholder='Enter the name of the school or university'
									bg={window.InputBG}
									type='text'
								/>
							</FormControl>
							<FormControl id='Degree' spacing='0'>
								<FormLabel fontWeight='normal'>Degree</FormLabel>
								<Input
									placeholder='Name of the Degree'
									bg={window.InputBG}
									type='text'
								/>
							</FormControl>
							<FormControl id='Field of Study' spacing='0'>
								<FormLabel fontWeight='normal'>Field of Study</FormLabel>
								<Input
									placeholder='Enter the Field of Study'
									bg={window.InputBG}
									type='text'
								/>
							</FormControl>
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
											placeholderText='DD-MM-YYYY'
											onChange={(date) => setEndDate(date)}
											customInput={<Input bg={window.InputBG} type='text' />}
										/>
										<InputRightElement>
											<RiCalendarEventFill />
										</InputRightElement>
									</InputGroup>
								</FormControl>
							</Stack>
							<Stack direction='row' width='100%'>
								<FormControl id='Grade' spacing='0'>
									<FormLabel fontWeight='normal'>Grade</FormLabel>
									<Input
										placeholder='Enter your Grade'
										bg={window.InputBG}
										type='text'
									/>
								</FormControl>
								<FormControl id='Percentage' spacing='0'>
									<FormLabel fontWeight='normal'>Percentage</FormLabel>
									<Input
										placeholder='Enter your Percentage'
										bg={window.InputBG}
										type='text'
									/>
								</FormControl>
							</Stack>
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
