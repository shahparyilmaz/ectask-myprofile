import { Avatar } from '@chakra-ui/avatar';
import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Center, Flex,VStack, HStack, Stack, Text } from '@chakra-ui/layout';
import { FiUsers, FiGithub } from 'react-icons/fi';
import { RiLinkedinBoxLine } from 'react-icons/ri';
import { BsLink45Deg, BsMedium, BsCircleFill, BsPeople } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';
// import MediumLogo from '../../../assets/MediumLogo.svg';

function index() {
	return (
		<Flex bg='white' padding='3vmin' rounded='2xl' width='full' minHeight="35vmin">
			<Stack direction='row' width='100%' spacing={5}>
				<Flex display='flex' justifyContent='center' alignItems='center'>
					<Avatar borderRadius="4vmin" height='29vmin' width="29vmin" src='https://i1.sndcdn.com/avatars-E57gCy4yu6mAyKym-ifmOzQ-t240x240.jpg'/>
				</Flex>
				<Stack direction='column' width='100%' flexDir='column' padding='10px'>
					<Stack
						direction='row'
						flexWrap='wrap'
						display='flex'
						justifyContent='start'
						alignItems='center'
						spacing={5}
					>
						<Text fontSize='2xl' fontWeight='bold'>
							Mikasa Ackerman
						</Text>
						<Text
							bg='#EDFFFA'
							border='1px solid #31D0AA'
							paddingX='10px'
							display='flex'
							justifyContent='center'
							alignItems='center'
							rounded='full'
							fontWeight='medium'
							color='#31D0AA'
						>
							Student
						</Text>
					</Stack>
					<Stack spacing={0}>
					<Stack 
						direction='row' 
						flexWrap='wrap' 
						alignItems="center"
						color="grey"
						fontWeight="semibold"
					>
						<Text>B. Tech CSE</Text>
						<BsCircleFill
							paddingX={2}
							size='5px'
						/>
						<Text>Vellore Institute of technology, Vellore</Text>
						<BsCircleFill
							paddingX={2}
							size='5px'
						/>
						<Text>Engineer’s Cradle</Text>
					</Stack>
					<Stack
						color="grey"
						fontWeight="semibold"
					>
						<Text>Mumbai, Maharashtra</Text>
					</Stack>
					</Stack>
					<Stack direction='row' spacing='5' flexWrap='wrap'>
						<Stack direction='row' alignItems='center'>
							<Center
								bg="rgb(229, 241, 252)"
								rounded='lg'
								width='40px'
								height='40px'
								fontSize="30px"
								display="flex"
								alignItems="center"
								justifyContent="center"
							>
								<BsPeople size="20px" color="rgb(17, 112, 255)"/>
							</Center>
							<Flex direction='column'>
								<Text color={window.LightFont} fontWeight='semibold'>
									Connections
								</Text>
								<Text fontWeight='bold'>596</Text>
							</Flex>
						</Stack>
						<Stack direction='row' alignItems='center'>
							<Center
								bg="rgb(229, 241, 252)"
								rounded='lg'
								width='40px'
								height='40px'
								fontSize="30px"
								display="flex"
								alignItems="center"
								justifyContent="center"
							>
								<BsPeople size="20px" color="rgb(17, 112, 255)"/>
							</Center>
							<Flex direction='column'>
								<Text color={window.LightFont} fontWeight='semibold'>
									Connections
								</Text>
								<Text fontWeight='bold'>596</Text>
							</Flex>
						</Stack>
					</Stack>
					<HStack spacing='5' width='80%'>
						<Button
							size='sm'
							fontWeight='bold'
							bg="rgb(17, 112, 255)"
							color="white"
							width='full'
						>
							View Resume
						</Button>
						<Button
							size='sm'
							bg='transparent'
							fontWeight='bold'
							borderColor='#1684F8'
							color='#1684F8'
							width='full'
							leftIcon={<BsLink45Deg size='20px' />}
						>
							Contact info
						</Button>
						<Button
							size='sm'
							variant='outline'
							fontWeight='bold'
							borderColor='#1684F8'
							color='#1684F8'
							width='full'
							leftIcon={<AiOutlineEdit size='20px' />}
						>
							Edit Profile
						</Button>
					</HStack>
				</Stack>
				<Flex
					width='30%'
					display='flex'
					justifyContent='center'
					alignItems='flex-start'
					
				>
					<Stack direction='column' flexWrap='wrap'>
						<Text color="grey" fontSize='xl' fontWeight='bold'>
							Socials
						</Text>
						<Stack direction='row' alignItems='center'>
							<RiLinkedinBoxLine color="rgb(29, 82, 255)" size='25px' />
							<Text fontWeight='semibold'>Linkedin</Text>
						</Stack>
						<Stack direction='row' alignItems='center'>
							{/* <Image
								src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"
								alt='https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png'
								objectFit='contain'
								width='25px'
							/> */}
							<BsMedium color="rgb(29, 82, 255)"/>
							<Text fontWeight='semibold'>Medium</Text>
						</Stack>
						<Stack direction='row' alignItems='center'>
							<FiGithub color="rgb(29, 82, 255)" size='25px' />
							<Text fontWeight='semibold'>Github</Text>
						</Stack>
					</Stack>
				</Flex>
			</Stack>
		</Flex>
	);
}

export default index;
