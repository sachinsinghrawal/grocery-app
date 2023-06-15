import React from 'react';
import { Component } from 'react';
import {UserContext} from '../AuthContext';
import {Text,TextInput,View,} from 'react-native';


export class User extends Component
{
    render()
    {
        let abc =this.context;
        return(
            <View style={{width:'60%',height:'100%',alignSelf:'center',justifyContent:'center'}}>
                <Text>{abc}</Text>
                <TextInput placeholder='bta bhi de bhaiya' style={{borderWidth:2,}}/>
            </View>
        )
    }
}

User.contextType = UserContext;

