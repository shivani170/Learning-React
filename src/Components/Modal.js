import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        return (
            <div className="logout_card">
                <div className="logout_card-user ">
                   <div className="logout_card-name">Utkarsh Arya</div>
                   <div className="logout_card-email">utkarsharya@gmail.com</div>
                </div>
                <div className="logout_card-logout">Logout</div>
            </div>
        )
    }
}
