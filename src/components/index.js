import { Flex, VStack } from '@chakra-ui/layout';
import ProfileHeader from './ProfileHeader'
import AboutMe from './AboutMe';
import NoAboutMe from './AboutMe/NoAboutMe'
import Interests from './Interests'
import Education from './Education';
import NoEducation from './Education/NoEducation'
import WorkExperience from './WorkExperience';
import NoWorkExperience from './WorkExperience/NoWorkExperience'
import VerifiedCertifications from './VerifiedCertifications';
import NoCertifications from './VerifiedCertifications/NoCertifications'
import VolunteerExperience from './VolunteerExperience';
import NoVolunteerExperience from './VolunteerExperience/NoVolunteerExperience'
import Projects from './Projects'
import { useState } from 'react';
import './index.css'

function Index() {
	const [profile,setProfile] = useState({
		aboutme:true,
		interests:true,
		education:true,
		workexperience:true,
		certifications:false,
		volunteerexperience:true
	})
	return (
		<div className="myprofile-container">
		<VStack width='100%' spacing='3'>
			<ProfileHeader/>
			{profile.aboutme?(<AboutMe/>):(<NoAboutMe/>)}
			{profile.interests?(<Interests/>):(<Interests/>)}
			{profile.education?(<Education/>):(<NoEducation/>)}
			{profile.workexperience?(<WorkExperience/>):(<NoWorkExperience/>)}
			{profile.certifications?(<VerifiedCertifications/>):(<NoCertifications/>)}
			{profile.volunteerexperience?(<VolunteerExperience/>):(<NoVolunteerExperience/>)}			
		</VStack>
		</div>
	);
}

export default Index;
