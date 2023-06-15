import React from 'react';
import { Component } from 'react';
import { UserContext } from '../AuthContext';
import {User} from './User';
 
export  default class contextDemo extends Component
{
    
    render()
    {
        return (
            <UserContext.Provider value="naam enter kar bosdk">
             <User/>
            </UserContext.Provider>
        )
    }

}