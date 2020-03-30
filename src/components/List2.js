import React, { Component } from 'react'
import { ReactSortable } from "react-sortablejs";

export default class List2 extends Component {
    state = {
        list: [
            { id: "1", name: "shrek" },
            { id: "2", name: "Nelson" },
            { id: "3", name: "Prueba" }
        ],
        list2: []
    };
    render() {
        return (
            <div class="container">
                <div className="row align-items-start ">
                    <div className="col bg-success">
                    <h6 className="text-center">lista 1</h6>
                    <ReactSortable
                            list={this.state.list}
                            setList={newState => this.setState({ list: newState })}
                            group="shared-group-name"
                        >
                            {this.state.list.map(item => (
                                <div key={item.id}>
                                    <div className="card  m-3 cursor-draggable" >
                                        <div className="card-body">
                                            {item.name}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </ReactSortable>
                     </div>


                    <div class="col bg-danger">
                        <h6 className="text-center">lista 2</h6>
                        <ReactSortable
                            list={this.state.list2}
                            setList={newState => this.setState({ list2: newState })}
                            group="shared-group-name"
                        >
                            {this.state.list2.map(item => (
                                <div key={item.id}>
                                    <div className="card m-3 cursor-draggable" >
                                        <div className="card-body ">
                                            {item.name}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </ReactSortable>
                    </div>
                    <div className="col mt-3">
                        <h6>Puedas intercambiar datos entre la lista 1 y 2</h6>
                   </div>
                </div>
            </div>
        )
    }
}
