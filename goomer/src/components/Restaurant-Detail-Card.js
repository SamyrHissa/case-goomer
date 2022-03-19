import styled from "styled-components";
import { ScheduleList } from ".";

export const RestaurantDetailPageContainer = styled.div`
    width: 90%;
    display: flex;
    box-shadow: 0px 2px 4px #00000029;
    border-radius: 4px;
    flex-direction: row;
    padding: 10px;
    margin: 0 auto;
`;

export const RestaurantDetailCard = ({image, name, address, hours}) => {
    return(
            <RestaurantDetailPageContainer className="card" >
                <img style={{width: "12rem"}}  src={image} alt="Imagem de capa do card"/>
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-text">{address}</p>
                        <ul className="list-group list-group-flush">
                            {hours ? hours.map((hour, item)=><ScheduleList key={item}  hours={hour}/>):<></>}
                        </ul>
                    </div>
                    
            </RestaurantDetailPageContainer>
    )
}