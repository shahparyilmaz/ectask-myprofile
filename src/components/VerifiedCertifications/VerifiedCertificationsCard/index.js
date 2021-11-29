import { Image } from '@chakra-ui/image';
import { Flex, HStack, Text, VStack } from '@chakra-ui/layout';
import { MdVerifiedUser } from 'react-icons/md';
import { FiEdit2 } from 'react-icons/fi';

function index() {
	return (
		<HStack
			bg='white'
			width='100%'
			rounded='lg'
			display='flex'
			_hover={{ cursor: 'pointer', background: '#BEDDFF50' }}
			flexDirection='row'
			padding='1'
			justifyContent='space-between'
		>
			<HStack>
				<Image
					src='https://i.ibb.co/t43PJd2/Sample.png'
					alt='EC_Image'
					objectFit='cover'
					width='75px'
					background='white'
					height='75px'
					rounded='md'
				/>
				<VStack alignItems='flex-start' spacing='0'>
					<HStack>
						<Text fontSize='xl' fontWeight='bold'>
							Vellore Institute of Technology, Vellore
						</Text>
						<MdVerifiedUser size='20px' color={window.Primary} />
					</HStack>
					<Text fontSize='lg' fontWeight='semibold'>
						Bachelor of technology - BTech, CSE
					</Text>
					<Text fontSize='md' fontWeight='semibold'>
						2018 - 2022
					</Text>
				</VStack>
			</HStack>
			{/* <Image
				src='https://i.ibb.co/t43PJd2/Sample.png'
				alt='EC_Image'
				objectFit='cover'
				width='125px'
				background='white'
				height='75px'
				rounded='md'
			/> */}
			<HStack onClick={()=>alert('edit')}
				spacing={1}
				color="rgb(17, 112, 255)"
				paddingX={5}
			>
				<Flex _hover={{ cursor: 'pointer' }} padding='1'>
					<FiEdit2 size='20px'/>
				</Flex>
				<Text fontSize="sm">
					Edit
				</Text>
			</HStack>
		</HStack>
	);
}

export default index;
