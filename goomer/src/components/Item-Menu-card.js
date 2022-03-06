import styled from "styled-components";

export const MenuCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid red;
    padding: 10px;
    margin: 0 auto;
    padding: 10px;
    .card-description {
        justify-content: space-between;
    }
    .card-title {
        /* margin-top: 15px; */
    }
`;
const DescripitionSalesStyle = styled.div`
    border: 1px ;
    border-radius: 15px;
    background: #2B0D61;
    color: #FFFFFF;
    padding: 5px;
    margin-left: 20px;
    /* height : 30px; */
`;
const PriceSalesStyle = styled.div`
    display: flex;
    >p {
        text-decoration: line-through;
    }
    >h5 {
        /* text-Decoration-Color: #009CA3; */
        margin-right: 15px;
    }
    

`;
export const ItemMenuCard = ({title, image, price, sales}) => {
    // console.log("sales", sales);
    return (
        <MenuCardContainer className="card" 
        // style={{width: "9rem"}}
        >
            <img className="card-img-left"  style={{width: "6rem"}} src={image} alt="Imagem do item do menu" />
            
            <div className="card-body">
                <div className="card-description" style={{display: "flex"}}>
                    <h6 className="card-title">{title}</h6>
                    {sales && <DescripitionSalesStyle>{sales[0].description}</DescripitionSalesStyle>}
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