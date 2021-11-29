import { Box, Center, Flex, Grid, Text, VStack } from '@chakra-ui/layout';
import { HStack } from '@chakra-ui/react';
import { Image } from '@chakra-ui/image';
import { Slider, SliderFilledTrack, SliderTrack } from '@chakra-ui/slider';
import { BiLock } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import IntrestsCard from './InterestsCard/index';
import { FiEdit2 } from "react-icons/fi"

function index() {
	var interestimage="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
	return (
		<Flex bg='white' flexDir='column' padding='10px' rounded='2xl' width='full'>
			<HStack
				paddingX={5}
				display='flex'
				justifyContent='space-between'
				alignItems='center'
				width='full'
			>
				<HStack spacing={5}>
					<Text fontSize='xl' fontWeight='bold'>
						Intrests
					</Text>
					<HStack spacing='1' alignItems='center'>
						<BiLock />
						<Text>Private</Text>
					</HStack>
				</HStack>
				<Flex _hover={{ cursor: 'pointer' }} padding='1'>
					<FiEdit2 size='20px' color="rgb(17, 112, 255)"/>
				</Flex>
			</HStack>
			<Grid templateColumns='repeat(4, 1fr)' gap={3} padding='2'>
				<IntrestsCard icon={<FiUsers />} title='Interest' />
				<IntrestsCard icon={<FiUsers />} title='Interest' />
				<IntrestsCard icon={<FiUsers />} title='Interest' />
				<IntrestsCard icon={<FiUsers />} title='Interest' />
				<IntrestsCard icon={<FiUsers />} title='Interest' />
				<IntrestsCard icon={<FiUsers />} title='Interest' />
			</Grid>
		</Flex>
	);
}

export default index;
