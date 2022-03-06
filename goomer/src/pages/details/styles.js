import styled from 'styled-components';

export const DetailsPageContainer = styled.div`
    width: 100vw;
    padding: 30px;
    
    /* text-align: center; */
    /* justify-content: center; */
    /* align-items: center; */
`;
export const RestaurantDetailPageContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    border: 1px solid red;
    justify-self: center;
`;
export const DropdownStyle = styled.div`
    display: grid;
    row-gap: 5px;
    column-gap: 5px;
    padding: 10px;
    grid-template-columns: repeat(2, 1fr);
    border: 1px solid black;
`;
export const ImageItem = styled.img`
    width: 50px;
`;