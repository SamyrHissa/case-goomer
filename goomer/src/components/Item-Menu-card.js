import styled from "styled-components";
import { ScheduleList } from "./Schedule-list";

export const MenuCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    box-shadow: 0px 2px 4px #00000029;
    border-radius: 4px;
    padding: 10px;
    margin: 10px auto;
    padding: 10px;
    .card-description {
        justify-content: space-between;
    }
`;
const DescripitionSalesStyle = styled.div`
    border: 1px ;
    border-radius: 15px;
    background: #2B0D61;
    color: #FFFFFF;
    padding: 5px;
    margin-left: 20px;
    text-align: center;
    
`;
const PriceSalesStyle = styled.div`
    display: flex;
    >p {
        text-decoration: line-through;
    }
    >h5 {
        margin-right: 15px;
        margin-top: 10px;
    }
    

`;
export const ItemMenuCard = ({title, image, price, sales}) => {
    return (
        <MenuCardContainer className="card">
            <img className="card-img-left"  style={{width: "6rem"}} src={image} alt="Imagem do item do menu" />
            
            <div className="card-body">
                <div className="card-description" style={{display: "flex"}}>
                    <h6 className="card-title">{title}</h6>
                    {sales && 
                        <div>
                            <DescripitionSalesStyle>{sales[0].description}</DescripitionSalesStyle>
                            {sales[0].hours ? 
                                <ul>
                                  {sales[0].hours.map((hour, item)=><ScheduleList key={item}  hours={hour}/>)}
                                </ul> : <>eu</>}
                        </div>
}
                </div>
                {(sales) 
                    ?   <PriceSalesStyle >
                            <h5 className="card-text">R$ {sales[0].price.toFixed(2)}</h5>
                            <p className="card-text">R$ {price.toFixed(2)}</p>
                        </PriceSalesStyle>                        
                    : price && <p className="card-text">R$ {price.toFixed(2)}</p>}
            </div>
            
            
        </MenuCardContainer>
    )
}