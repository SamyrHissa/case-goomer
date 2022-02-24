
export const MenuCard = () => {
    return (
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src=".../100px180/?text=Image cap" alt="Imagem de capa do card" />
            <div class="card-body">
                <h5 class="card-title">Título do card</h5>
                <p class="card-text">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Vestibulum at eros</li>
            </ul>
            <div class="card-body">
                <a href="#" class="card-link">Link do card</a>
                <a href="#" class="card-link">Outro link</a>
            </div>
        </div>
    )
}