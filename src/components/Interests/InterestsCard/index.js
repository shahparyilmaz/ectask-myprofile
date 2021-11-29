import { Center, HStack, Text } from '@chakra-ui/layout';

function index(props) {
	return (
		<HStack padding='2' shadow='lg' rounded='lg'>
			<Center bg={window.Gray200} rounded='lg' width='40px' height='40px'>
				{props.icon}
			</Center>
			<Text fontWeight='semibold'>{props.title}</Text>
		</HStack>
	);
}

export default index;
