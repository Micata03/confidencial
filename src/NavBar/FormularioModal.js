import React from 'react'
import {GoMail} from 'react-icons/go'

function FormularioModal({close}) {

    return (
        <div className='modal-overlay'>
                        <div className='form-modal'></div>
                        <div className='form-modal-close' onClick={close}></div>
                        <GoMail className='correo'/>
                        <div className='red-point-correo'></div>
                        <h6 className='form-titulo'>Las noticias del día en tu correo</h6>
                        <p className='form-subtitulo'>Recibí lo mejor de nuestra cobertura periodística todos los días, a las 8:00 am.</p>
                        <input type='text' placeholder=' Nombre' className='form-nombre'></input>
                        <input type='text' placeholder=' Apellido' className='form-apellido'></input>
                        <input type='text' placeholder=' Correo electrónico' className='form-mail'></input>
                        <button type='submit' className='form-btn'>SUSCRIBIRME</button>
                        <small className='form-small'>Estoy de acuerdo con las <b>Condiciones de uso</b> y la <b>Política de privacidad.</b> </small>

                        
                    </div>
    )
}

export default FormularioModal
