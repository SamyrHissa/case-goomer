import { useContext, useEffect, useState } from "react";
import { useRequestData } from "../../hooks/useRequestData"
import { DetailsPageContainer,
        DropdownStyle,
        TitleDetailPageContainer
    } from "./styles";
import GlobalContext from "../../global/GlobalContext";
import { ScheduleList } from "../../components/Schedule-list";
import { SearchBox } from "../../components";

export const DetailsPage = ({name}) => {
    const { states, setters } = useContext(GlobalContext);
    const [menu, isLoadingMenu, errorMenu] = useRequestData(`https://challange.goomer.com.br/restaurants/${states.restaurantSelected.id}/menu`, []);
    const [menuGroup, setMenuGroup] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(()=>{
        menuGroupChange();
    }, [states.restaurantSelected])

    const onChangeSearchTerm = (e) => {
        setSearchTerm(e.target.value)
    }
    const menuGroupChange = () => {
        const newMenuGroup = new Set(menu.map((item)=>{
            return item.group
        }))
        // setMenuGroup(newMenuGroup);
        console.log('newMenuGroup', newMenuGroup);
    }
    return (
        
        <DetailsPageContainer >
            <TitleDetailPageContainer className="card" >
                <img style={{width: "12rem"}}  src={states.restaurantSelected.image} alt="Imagem de capa do card"/>
                    {/* <div >Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</div> */}
                    <div className="card-body">
                        <h4 className="card-title">{states.restaurantSelected.name}</h4>
                        <p className="card-text">{states.restaurantSelected.address}</p>
                        <ul className="list-group list-group-flush">
                            {states.restaurantSelected.hours ? states.restaurantSelected.hours.map((hour, item)=><ScheduleList key={item}  hours={hour}/>):<></>}
                        </ul>
                    </div>
                    
            </TitleDetailPageContainer>
            <SearchBox value={searchTerm} onChange={onChangeSearchTerm} title='Buscar cardápio' />
            
            <DropdownStyle className="btn-group">
            {/* {menuGroup.map((menu)=>  */}
            <button style={{width: "100%", textAlign: "end"}} type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {/* {menu.group} */}
                ação
            </button>
            {/* )} */}
            {/* <div className="dropdown-menu">
                <a className="dropdown-item" href="">Alguma ação</a>
                <a className="dropdown-item" href="">Outra ação</a>
                <a className="dropdown-item" href="">Alguma coisa aqui</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="">Link separado</a>
            </div>  */}
            </DropdownStyle>
        </DetailsPageContainer>
    )
}