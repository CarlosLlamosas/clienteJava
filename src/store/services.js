import Axios from 'axios'
import exampleService from '../services/ExampleService'
import studentService from '../services/StudentService'
import clienteService from '../services/ClienteService'
import tipoclienteService from '../services/TipoClienteService'
import entidadService from '../services/EntidadService'
import usuarioService from '../services/UsuarioService'
import prestamoService from '../services/PrestamoService'

let apiUrl = '192.168.23.190:9000/'

// Axios Configuration
Axios.defaults.headers.common.Accept = 'application/json'

export default {
    exampleService: new exampleService(Axios),
    studentService: new studentService(Axios, apiUrl),
    clienteService: new clienteService(Axios, apiUrl),
    tipoclienteService: new tipoclienteService(Axios, apiUrl),
    usuarioService: new usuarioService(Axios, apiUrl),
    entidadService: new entidadService(Axios, apiUrl),
    prestamoService: new prestamoService(Axios, apiUrl),

}