import { Image } from '@chakra-ui/image';
import { Flex, HStack, Text, VStack } from '@chakra-ui/layout';
import { FiEdit2 } from "react-icons/fi"

function index() {
	return (
		<HStack
			bg='white'
			width='100%'
			rounded='lg'
			display='flex'
			justifyContent="space-between"
			_hover={{ cursor: 'pointer', background: '#BEDDFF50' }}
			flexDirection='row'
			padding='1'
		>
			<HStack>
				<Image
					src='https://i.ibb.co/t43PJd2/Sample.png'
					alt='EC_Image'
					objectFit='cover'
					width='75px'
					height='75px'
					background='white'
					rounded='md'
				/>
				<VStack alignItems='flex-start' spacing='0'>
					<Text fontSize='xl' fontWeight='bold'>
						Vellore Institute of Technology, Vellore
					</Text>
					<Text fontSize='lg' fontWeight='semibold'>
						Bachelor of technology - BTech, CSE
					</Text>
					<Text fontSize='md' fontWeight='semibold'>
						2018 - 2022
					</Text>
				</VStack>
			</HStack>
			<HStack onClick={()=>alert('function')}
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
