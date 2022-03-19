import { useContext, useState } from "react";
import GlobalContext from "../global/GlobalContext";
import styled from "styled-components";

const ImageFoodStyle = styled.img`
    width: 50%;
    display: block;
`;
const DescriptionStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;
    >p {
        width: 80%;
    }
    >h5 {
        padding: 0 0 8px 0;
        color: #009CA3;
    }
`;
const AddButtonStyle = styled.button`
    background: #009CA3;
    font-size: 20px;
    display: flex;
    padding: 12px 10px 0px 10px;
    >p {
        margin-left: 30px;
    }
`;
const FooterStyle = styled.div`
    display: flex;
    justify-content: space-between;
    
`;
const SteepButtonsStyle = styled.div`
    display: flex;
    border: 1px solid #E6E6E6;
    border-radius: 4px;
    align-items: center;
    font-size: 30px;
    color: #009CA3;
    >div {
        margin: 0 8px 0 8px;
        :hover {
            cursor: pointer;
        }
    }
`;
export const FoodCard = ({unSelectFood}) => {
    const { states, functions } = useContext(GlobalContext);
    const [ amount, setAmount ] = useState(1);
    const onSteep = (oper) => {
        if(oper === '+'){
            setAmount(amount + 1)
        } else {
            if(amount > 1){
                setAmount(amount - 1)
            }
        }
    }
    const onClickAdd = () => {
        const newCartItem = {
            "restaurantId": states.foodSelected.restaurantId,
            "foodName": states.foodSelected.name,
            "price": states.foodSelected.price,
            "amount": amount
        };
        functions.addCartItem(newCartItem);
        unSelectFood();
    }
    return (
            <div className="modal fade" id="ExemploModalCentralizado" 
            role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {states.foodSelected.image && <ImageFoodStyle src={states.foodSelected.image} alt="Imagem de prato do restaurante" />}
                            <h3>{states.foodSelected.name}</h3>
                            <DescriptionStyle>
                                <p>
                                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                                </p>
                                <h5>R$ {states.foodSelected.price ? states.foodSelected.price.toFixed(2) : 0}</h5>
                            </DescriptionStyle>

                        </div>
                        <FooterStyle className="modal-footer">
                            <SteepButtonsStyle>
                                <div onClick={()=>onSteep("-")}>-</div>
                                {amount}
                                <div onClick={()=>onSteep("+")}>+</div>
                            </SteepButtonsStyle>
                            <AddButtonStyle type="button" className="btn btn-secondary" data-dismiss="modal" onClick={onClickAdd}>
                                Adicionar
                                <p>R$ {(amount * (states.foodSelected.price ? states.foodSelected.price.toFixed(2) : 0)).toFixed(2)}</p>
                            </AddButtonStyle>
                        </FooterStyle>
                    </div>
                </div>
            </div>
    )
}