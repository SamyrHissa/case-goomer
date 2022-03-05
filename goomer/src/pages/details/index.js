import { useContext, useEffect, useState } from "react";
import { DetailsPageContainer,
        DropdownStyle,
        RestaurantDetailPageContainer,
        ImageItem
    } from "./styles";
import GlobalContext from "../../global/GlobalContext";
import { SearchBox, ScheduleList, MenuCard } from "../../components";
import { RestaurantDetailCard } from "../../components/Restaurant-Detail-Card";

export const DetailsPage = () => {
    const { states, requests } = useContext(GlobalContext);
    const [menuGroup, setMenuGroup] = useState([])
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(()=>{
        requests.getMenu(states.restaurantSelected.id);
    }, [])

    const onChangeSearchTerm = (e) => {
        setSearchTerm(e.target.value)
    }
        
    const MenuGroupChange2 = (item) => {
        const newMenuItem = states.menu.filter((itemMenu)=>{
            return itemMenu.group === item
        })
        console.log('newMenuItem', newMenuItem);
        return (
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {newMenuItem.map((item)=>{
                    return(
                    <a>
                        <ImageItem  src={item.image} alt="Imagem de capa do card"/>
                        <p>{item.name}</p>
                    </a>
                    )
                })}
                
                
            </div>
        )
    }
    const MenuGroupChange1 = () => {
        const newMenuGroup = Array.from(new Set(states.menu.map((item)=>{
            return item.group
        })));
        // console.log('states.menu', states.menu);
        return (
            <DropdownStyle>
                {newMenuGroup.map((item)=>{
                    return(
                        <div className="dropdown" key={item}>
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {item}
                                </button>
                                {MenuGroupChange2(item)}
                                
                        </div>
                    )
                })}
            </DropdownStyle>
        )
    };
    
    return (
        
        <DetailsPageContainer >
            {states.restaurantSelected && 
                <RestaurantDetailCard image={states.restaurantSelected.image} 
                    name={states.restaurantSelected.name} 
                    address={states.restaurantSelected.address} 
                    hours={states.restaurantSelected.hours} />
            // <RestaurantDetailPageContainer className="card" >
            //     <img style={{width: "12rem"}}  src={states.restaurantSelected.image} alt="Imagem de capa do card"/>
            //         {/* <div >Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</div> */}
            //         <div className="card-body">
            //             <h4 className="card-title">{states.restaurantSelected.name}</h4>
            //             <p className="card-text">{states.restaurantSelected.address}</p>
            //             <ul className="list-group list-group-flush">
            //                 {states.restaurantSelected.hours ? states.restaurantSelected.hours.map((hour, item)=><ScheduleList key={item}  hours={hour}/>):<></>}
            //             </ul>
            //         </div>
                    
            // </RestaurantDetailPageContainer>
            }
            <SearchBox value={searchTerm} onChange={onChangeSearchTerm} title='Buscar cardápio' />
                {MenuGroupChange1()}
                
        </DetailsPageContainer>
    )
}