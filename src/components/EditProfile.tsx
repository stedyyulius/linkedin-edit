import styled from 'styled-components';

import { dark, lightGrey } from '../styles/colors';

interface Props {
    visible: boolean
}

export const EditProfile = (props: Props) => {


    return (
        props.visible
        ?  <>
                <EditProfileBackground>
                </EditProfileBackground>
                <EditProfileContainer>
                    <EditProfileHeader>
                        <EditProfileTitle>Edit Profile</EditProfileTitle>
                    </EditProfileHeader>
                    <EditProfileBody>
                        <InputContainer>
                            <InputLabel>Name*</InputLabel>
                            <InputText />
                        </InputContainer>
                        <InputContainer>
                            <InputLabel>Age*</InputLabel>
                            <InputText />
                        </InputContainer>
                    </EditProfileBody>
                </EditProfileContainer>
            </>
        :   null
    )
}

const EditProfileBackground = styled.div`
    position: fixed;
    width: 1000vw;
    height: 1000vh;
    background-color: ${dark};
    opacity: 0.3;
`

const EditProfileContainer = styled.div`
    position: fixed;
    width: 60%;
    background-color: white;
    border-radius: 10px;
`

const EditProfileHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 15px;
    border-bottom: 2px solid ${lightGrey};
`

const EditProfileTitle = styled.p`
    

`

const EditProfileBody = styled.div`
    padding: 15px;
`

const InputContainer = styled.div`
    width: 100%;
    margin-bottom: 25px;
`


const InputLabel = styled.p`
    margin: 0 0 5px 0;
    color: grey;
`

const InputText = styled.input`
    width: 95%;
    border-radius: 3px;
    border: 0.5px solid black;
    padding: 5px;
`