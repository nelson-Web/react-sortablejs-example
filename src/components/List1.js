import React, { Component } from 'react'
import { ReactSortable } from "react-sortablejs";

export default class List1 extends Component {
    state = {
        list: [
            { id: "1", name: "shrek" },
            { id: "2", name: "Nelson" },
            { id: "3", name: "Prueba" }
        ]
    };
    render() {
        return (
            <div class="container">
                <div className="row align-items-start">
                    <div className="col">
                     </div>
                    <div class="col mt-3">
                        <h6 className="text-center">Este es un ejemplo con una lista</h6>
                        <ReactSortable
                            list={this.state.list}
                            setList={newState => this.setState({ list: newState })}
                        >
                            {this.state.list.map(item => (
                                <div key={item.id}>
                                    <div className="card bg-primary m-3 cursor-draggable" >
                                        <div className="card-body text-white">
                                            {item.name}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </ReactSortable>
                    </div>
                    <div className="col">
                   </div>
                </div>
            </div>

        );
    }
}