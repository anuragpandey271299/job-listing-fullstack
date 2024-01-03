import React from 'react'
import { Navigate } from 'react-router-dom'
import {jwtDecode} from 'jwt-decode'

export function PrivateRoute({Cmp}) {
    const jwtoken = localStorage.getItem('jwtoken')
    if(jwtoken){
        try {
            const decodedJWT=jwtDecode(jwtoken)
            const isJWTExpired = Date.now()>=decodedJWT.exp*1000
            if(!isJWTExpired){
                return<Cmp />
            }
        } catch (error) {
            console.log(error)
        }
    }

    return <Navigate to='/login' />
    
}

