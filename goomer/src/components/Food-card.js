export const FoodCard = ({unSelectFood}) => {
    console.log('aqui passei');
    return (
            <div className="modal fade" id="ExemploModalCentralizado" tabindex="-1" role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="TituloModalCentralizado">Título do modal</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        Aqui seria a texto?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={unSelectFood}>Fechar</button>
                        <button type="button" className="btn btn-primary">Salvar mudanças</button>
                    </div>
                    </div>
                </div>
            </div>
    )
}