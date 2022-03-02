import styled from "styled-components";

const SeachContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 30px;
    
`;
const SearchStyle = styled.input`
    width: 40vw;
    border-radius: 20px;
    border: none;
    padding: 10px;
    background: #FBFBFB 0% 0% no-repeat padding-box;
    box-shadow: 0px 2px 4px #00000029;
`;
export const SearchBox = ({value, onChange, title}) => {

    return (
        <SeachContainer>
            <SearchStyle value={value} onChange={onChange}
                placeholder={title} 
                aria-label="Pesquisar" />
        </SeachContainer>
    )
}