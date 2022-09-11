import styled from 'styled-components';
import edit_icon from '../assets/edit-icon.png';

import { lightGrey } from '../styles/colors';

interface Props {
    setEdit: (job: any) => void
}

export const Job = (props: Props) => {
    return (
        <JobContainer>
            <JobDetailContainer>
                <JobDetail>
                    <JobCompanyImage src="https://media-exp1.licdn.com/dms/image/C4D0BAQEp2GJJMbdaYg/company-logo_100_100/0/1656475407183?e=1671062400&v=beta&t=znodICebKBgY5mjrU7aZ1qm4zMrWUvBtetvHD9pk2ik" />
                    <div>
                        <JobTitle>Full Stack Developer</JobTitle>
                        <JobCompanyName>Great Connection System Pte Ltd · Full-time</JobCompanyName>
                        <JobDate>May 2021 - Present · 1 yr 5 mos</JobDate>
                        <JobLocation>Singapore</JobLocation>
                    </div>
                </JobDetail>
                <JobEditIcon src={edit_icon} onClick={() => props.setEdit(true)} />
            </JobDetailContainer>
        </JobContainer>
    )
}

const JobContainer = styled.div`
    padding: 15px;
`

const JobDetailContainer = styled.div`
    border-bottom: 1px solid ${lightGrey};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const JobCompanyImage = styled.img`
    width: 60px;
    height: 80px;
    margin-right: 20px;
`

const JobDetail = styled.div`
     display: flex;
    flex-direction: row;
`

const JobTitle = styled.p`
    font-weight: bold;
`

const JobCompanyName = styled.p`
    
`

const JobDate = styled.p`
    color: grey;
`

const JobLocation = styled.p`
    color: grey;
`

const JobEditIcon = styled.img`
  width: 35px;
  height: 35px;

`
