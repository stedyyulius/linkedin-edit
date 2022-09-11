import styled from 'styled-components';

import { dark, lightGrey } from '../styles/colors';

interface Props {
    job: any
}

export const EditJob = (props: Props) => {


    return (
        props.job && Object.keys(props.job).length
        ?  <>
                <EditJobBackground>
                </EditJobBackground>
                <EditJobContainer>
                    <EditJobHeader>
                        <EditJobTitle>Edit Job</EditJobTitle>
                    </EditJobHeader>
                    <EditJobBody>
                        <InputContainer>
                            <InputLabel>Name*</InputLabel>
                            <InputText />
                        </InputContainer>
                        <InputContainer>
                            <InputLabel>Age*</InputLabel>
                            <InputText />
                        </InputContainer>
                    </EditJobBody>
                </EditJobContainer>
            </>
        :   null
    )
}

const EditJobBackground = styled.div`
    position: fixed;
    width: 1000vw;
    height: 1000vh;
    background-color: ${dark};
    opacity: 0.3;
`

const EditJobContainer = styled.div`
    position: fixed;
    width: 60%;
    background-color: white;
    border-radius: 10px;
`

const EditJobHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 15px;
    border-bottom: 2px solid ${lightGrey};
`

const EditJobTitle = styled.p`
    

`

const EditJobBody = styled.div`
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