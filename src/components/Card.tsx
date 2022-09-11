import styled from 'styled-components';

import { lightGrey } from '../styles/colors';

interface Props {
    children: React.ReactElement
}

export const Card = (props: Props) => {
    
    return (
        <CardContainer>
            {props.children}
        </CardContainer>
    )
}

const CardContainer = styled.div`
    border-radius: 20px;
    border: 1px solid ${lightGrey};
`