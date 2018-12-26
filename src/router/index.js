import Vue from 'vue'
import Router from 'vue-router'

import Default from '@/components/Default'
import ExampleIndex from '@/components/example/Index'
import ExampleView from '@/components/example/View'
import StudentIndex from '@/components/students/Index'
import StudentCreateOrUpdate from '@/components/students/CreateOrUpdate'
import ClienteIndex from '@/components/cliente/Index'
import ClienteCreateOrUpdate from '@/components/cliente/CreateOrUpdate'
import EntidadIndex from '@/components/entidad/Index'
import EntidadCreateOrUpdate from '@/components/entidad/CreateOrUpdate'
import PrestamoIndex from '@/components/prestamo/Index'
import PrestamoCreateOrUpdate from '@/components/prestamo/CreateOrUpdate'
import UsuarioIndex from '@/components/usuario/Index'
import UsuarioCreateOrUpdate from '@/components/usuario/CreateOrUpdate'
import TipoClienteIndex from '@/components/tipocliente/Index'
import TipoClienteCreateOrUpdate from '@/components/tipocliente/CreateOrUpdate'

Vue.use(Router)

const routes = [
  { path: '/', name: 'Default', component: Default },
  { path: '/example', name: 'ExampleIndex', component: ExampleIndex },
  { path: '/example/:id', name: 'ExampleView', component: ExampleView },
  { path: '/students/', name: 'StudentIndex', component: StudentIndex },
  { path: '/students/add', name: 'StudentCreate', component: StudentCreateOrUpdate },
  { path: '/students/:id/edit', name: 'StudentEdit', component: StudentCreateOrUpdate },
  { path: '/cliente/', name: 'ClienteIndex', component: ClienteIndex },
  { path: '/cliente/add', name: 'ClienteCreate', component: ClienteCreateOrUpdate },
  { path: '/cliente/:id/edit', name: 'ClientetEdit', component: ClienteCreateOrUpdate },
  { path: '/entidad/', name: 'EntidadIndex', component: EntidadIndex },
  { path: '/entidad/add', name: 'EntidadCreate', component: EntidadCreateOrUpdate },
  { path: '/entidad/:id/edit', name: 'EntidadtEdit', component: EntidadCreateOrUpdate },
  { path: '/prestamo/', name: 'PrestamoIndex', component: PrestamoIndex },
  { path: '/prestamo/add', name: 'PrestamoCreate', component: PrestamoCreateOrUpdate },
  { path: '/prestamo/:id/edit', name: 'PrestamoEdit', component: PrestamoCreateOrUpdate },
  { path: '/usuario/', name: 'UsuarioIndex', component: UsuarioIndex },
  { path: '/usuario/add', name: 'UsuarioCreate', component: UsuarioCreateOrUpdate },
  { path: '/usuario/:id/edit', name: 'UsuarioEdit', component: UsuarioCreateOrUpdate },
  { path: '/tipocliente/', name: 'TipoClienteIndex', component: TipoClienteIndex },
  { path: '/tipocliente/add', name: 'TipoClienteCreate', component: TipoClienteCreateOrUpdate },
  { path: '/tipocliente/:id/edit', name: 'TipoClientetEdit', component: TipoClienteCreateOrUpdate },
]

export default new Router({
  routes
})
