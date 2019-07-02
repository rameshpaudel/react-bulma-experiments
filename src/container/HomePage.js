import React from 'react'

import  { Card, BreadCrumb } from '../components/index'
import {testThis, alertThis, Test, test} from '../api/index'

export default class HomePage extends React.Component{
    componentWillUnmount(){
        alertThis("You are exiting from the current page. Are you sure")
    }
    render(){
        var data = [1,2,3,4,5];
        var breadcrumb = [
            {
                link: '/',
                title: 'Home'
            }
        ]
        testThis(test)
        testThis(Test)
        testThis("The breadcrumb" ,breadcrumb);
        return(
            <div className="container">
                <BreadCrumb items={breadcrumb}/>
                <div className="columns">
                    {data.map((value,index)=>{
                        return (
                            <div key={index} className="column">
                                <Card image="http://lorempixel.com/200/200/sports">
                                    <p>Hello is there anybody out there</p>
                                    <a href="#">Click Here</a>
                                </Card>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}