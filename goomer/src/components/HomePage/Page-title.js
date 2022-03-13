import styled from 'styled-components';

const PageTitleStyle = styled.div`
    text-align: center;
    font-size: 24px;
    font-family: Medium Montserrat;
    letter-spacing: 0px;
    color: #404040;
`;

export const PageTitle = () => {
    return (
        <PageTitleStyle>Bem-vindo ao Lista Rango</PageTitleStyle>
    )
}