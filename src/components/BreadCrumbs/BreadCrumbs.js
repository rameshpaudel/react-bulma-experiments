import React from 'react'
import {Link} from 'react-router-dom'


export default class BreadCrumbs extends React.Component{
    render(){
        return(
        <nav className="breadcrumb" aria-label="breadcrumbs">
            <ul>
                {this.props.items.map((value,index)=>{
                    return<li key={index}><Link to={value.link}>{value.title}</Link></li>
                })}
            </ul>
        </nav>
        )
    }
}
