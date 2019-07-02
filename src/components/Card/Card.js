import React from 'react'

export default class Card extends React.Component{
    render(){
        return (
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                    <img src={this.props.image} alt="Placeholder image"/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}