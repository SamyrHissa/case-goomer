import { useRequestData } from "../../hooks/useRequestData"
import { DetailsPageContainer,
        DropdownStyle,
        TitleDetailPageContainer
} from "./styles"

export const DetailsPage = () => {
    const [restaurantDetails, isLoadingRestaurantDetails, errorRestaurantDetails] = useRequestData("http://challange.goomer.com.br/restaurants", []);
    console.log("restaurantDetails", restaurantDetails);
    return (
        <DetailsPageContainer >
            <TitleDetailPageContainer className="card" >
                {(restaurantDetails.length > 0) ? <img style={{width: "18rem"}}  src={restaurantDetails[1].image} alt="Imagem de capa do card"/>:<></>}
                    {/* <div >Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</div> */}
                    <div class="card-body">
                        <h5 class="card-title">Título do card</h5>
                        <p class="card-text">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Cras justo odio</li>
                            <li class="list-group-item">Dapibus ac facilisis in</li>
                            <li class="list-group-item">Vestibulum at eros</li>
                        </ul>
                    </div>
                    
            </TitleDetailPageContainer>
            
            
            <DropdownStyle className="btn-group">
            <button style={{width: "100%", textAlign: "end"}} type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Ação
            </button>
            <div className="dropdown-menu">
                <a className="dropdown-item" href="">Alguma ação</a>
                <a className="dropdown-item" href="">Outra ação</a>
                <a className="dropdown-item" href="">Alguma coisa aqui</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="">Link separado</a>
            </div>
            </DropdownStyle>
        </DetailsPageContainer>
    )
}