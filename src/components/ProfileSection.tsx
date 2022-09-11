import styled from 'styled-components';

import profile_placeholder from '../assets/profile-placeholder.png';

interface Props {

}

export const ProfileSection = (props: Props) => {



    return (
        <ProfileSectionContainer>
            <ProfilePictureImage src={profile_placeholder} />
            <ProfileName>Stedy, 31</ProfileName>
        </ProfileSectionContainer>
    )
}

const ProfileSectionContainer = styled.div`
    width: 30%;
`
const ProfilePictureImage = styled.img`
    border-radius: 100px;
    width: 152px;
    height: 152px;
    margin: auto;
    display: block;
`

const ProfileName = styled.p`
    font-weight: bold;
    font-size: 20px;
    margin: 25px 0;
    display:inline-block;
`

const ProfileJob = styled.p`

`

const ProfileAge = styled.p`
    margin: 0;
    display:inline-block;
`