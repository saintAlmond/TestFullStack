import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const baseUrl = "http://localhost/TestFullStack/my-test/public/";

export default class Producto extends Component {

    constructor(props){
        super(props);
        this.state = {
            producto:[],
            productoBackup:[],
            formName:'',
            formBundle:'',
        }

        //funciones de onchange de los campos en el formulario
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeBundle  = this.handleChangeBundle.bind(this);

    }


    componentDidMount(){
        this.loadDataProduct()
    }

    loadDataProduct(){

        axios.get(baseUrl+'api/producto/list').then(response=>{
            this.setState({
                producto:response.data,
                productoBackup:response.data
            })
        }).catch(error=>{
            alert("Error "+error)
        })

    }

    //campos de nombre
    handleChangeName(event) {
        this.setState({formName: event.target.value});
    }

    //campos de bundle
    handleChangeBundle(event) {
        this.setState({formBundle: event.target.value});
    }



    render() {
        return (
            <div class="container">

                <h3>Listado Producto</h3>
                <hr/>

                <button type="button" className="btn btn-primary col-md-12" data-toggle="modal"
                        data-target="#exampleModal">
                    Crear producto
                </button>

                <table className="table table-bordered order-table ">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Bundle</th>
                    </tr>
                    </thead>
                    <tbody id="bodytable">
                        {this.listData()}
                    </tbody>
                </table>

                <form>
                    <div ref="putomodal" className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"
                         aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Formulario de producto</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Name </label>
                                        <input type="text" className="form-control" value={this.state.formName}
                                               onChange={this.handleChangeName}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Bundle</label>
                                        <textarea className="form-control" rows="3" value={this.state.formBundle}
                                                  onChange={this.handleChangeBundle}></textarea>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar
                                    </button>
                                    <button type="button" className="btn btn-primary"
                                            onClick={() => this.sendNetworkProduct()}>Guardar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

    sendNetworkProduct(){

        const formData = new FormData()
        formData.append('name',this.state.formName)
        formData.append('bundle',this.state.formBundle)

        axios.post(baseUrl+'api/producto/create',formData).then(response=>{

            if (response.data.success==true) {
                alert(response.data.message)
                // cargar datos de nuevo
                this.loadDataProduct()
                //cerrar el modal
                $("#exampleModal").modal("hide");
            }

        }).catch(error=>{
            alert("Error "+error)
        })

    }

    listData(){

        return this.state.producto.map((data)=>{

            return(
                <tr>
                    <th>{data.name}</th>
                    <th>{data.bundle}</th>
                </tr>
            )
        })
    }
}

if (document.getElementById('producto')) {
    ReactDOM.render(<Producto />, document.getElementById('producto'));
}
