import styled from 'styled-components';
import { breakpoints } from '../../utils/global-styles';


export const HomeContainer = styled.div`
    
`;


export const RestaurantCardContainer = styled.div`
    display: grid;
    row-gap: 5px;
    column-gap: 5px;
    padding: 10px;
    
    
    @media(max-width: ${breakpoints.xl}) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media(max-width: ${breakpoints.sm}) {
        grid-template-columns: 1fr;
    }
    
`;
