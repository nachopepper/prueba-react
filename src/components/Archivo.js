import { useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Button, input } from 'react-bootstrap'

const Archivo = () => {

    const [file1, setFile1] = useState('');
    const [file2, setFile2] = useState('');

    const onChange1 = e => {
        setFile1(e.target.files[0]);
    }

    const onChange2 = e => {
        setFile2(e.target.files[0]);
    }

    const onSubmit = async e => {
        //const url = "http://localhost:5000/subir"
        //const url = "https://ExcelServer.crishu.repl.co/subir"
        const url = "https://dev-back-hojadespacho.azurewebsites.net/subir"
        
        e.preventDefault();
        const formData = new FormData();
        formData.append('file1', file1);
        formData.append('file2', file2);

        try {
           await axios({

                url: url,
            
                method: 'POST',

                data: formData,
            
                responseType: 'blob',
            
            }).then((response) => {
            
                 var fileURL = window.URL.createObjectURL(new Blob([response.data]));
            
                 var fileLink = document.createElement('a');
            
              
            
                 fileLink.href = fileURL;
            
                 fileLink.setAttribute('download', `${String(Date.now())}.xlsx`);
            
                 document.body.appendChild(fileLink);
            
               
            
                 fileLink.click();

                 console.log(response);
            
            });
        } catch(err) {
            
        }
    }



    return (
        <div>
            <div style={{backgroundColor: '#009b78', padding: '10px'}}>
                <h1 style={{color: 'white'}}>Creador de hojas de despacho</h1>
            </div>
            <form onSubmit={onSubmit} >
                <div style= {{ display: 'flex', alignItems: "center", justifyContent: 'center', flexDirection: 'column', padding: '5%'}}>
                    
                    <h1>Seleccione archivo de manifiesto</h1>
                    <input type="file" onChange={onChange1} /> <br/>
                    <h1>Seleccione archivo de citación</h1>
                    <input type="file" onChange={onChange2} /> <br/>

                    <Button type='submit'>Enviar</Button>
                </div>
            </form>
        </div>

    )
}

export default Archivo
