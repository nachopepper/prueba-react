import React, { useState } from 'react';
import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { useDispatch, useSelector } from 'react-redux'
import {login} from "../actions/auth";

const LoginComponent = ({ history }) => {

    const dispatch = useDispatch();

    const [recordar, setRecordar] = useState('false');

    const google = (e) => {

        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({ user }) => {
                dispatch(login())
            })
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div>
                <form onSubmit={ google } style={{ width: '40vw' }}>
                    <div className="form-group" style={{ backgroundColor: '#009b78', display: 'flex', justifyContent: 'center' }}>
                        <h3>Iniciar Sesión</h3>
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Igrese Email" />
                    </div>

                    <div className="form-group">
                        <label>Contraseña</label>
                        <input type="password" className="form-control" placeholder="Ingrese Contraseña" />
                    </div>

                    <div className="form-group" style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '4%' }}>
                        <button
                            style={{ backgroundColor: '#009b78' }} type='button' className="btn">INGRESAR
                        </button>
                    </div>


                    <button style={{ backgroundColor: '#009b78' }} type='button' onClick={ google } className="btn btn-block">Ingresar con cuenta Google</button>
                </form>
            </div>
        </div>
    );

};


export default LoginComponent;
