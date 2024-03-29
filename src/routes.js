import Login from './views/Login/Login' ;
import GA from './views/Login/GA' ;

import Dashboard from './views/Dashboard' ;

import RequisicionesIndex from './views/compras/requisiciones/index' ;
import Detalle from './views/compras/requisiciones/Detalle' ;

import CorporativoIndex from './views/administracion/corporativo/index' ;
import corpDetails from './views/administracion/corporativo/Detalle' ;

import DivisionesIndex from './views/administracion/divisiones/index' ;
import divisionDetails from './views/administracion/divisiones/Detalle' ;

import EmpresasIndex from './views/administracion/empresa/index' ;
import empresaDetails from './views/administracion/empresa/Detalle' ;

import modulosIndex from './views/administracion/modulos/index' ;
import modulosDetails from './views/administracion/modulos/Detalle' ;

import projectsIndex from './views/construccion/projects/index' ;
import projectsDetails from './views/construccion/projects/Detalle' ;

import objetivosIndex from './views/objetivos/index' ;
import objetivosDetails from './views/objetivos/Detalle' ;

import RegistroDocs from './views/registroDocs/RegistroDocs' ;

import UsersIndex from './views/administracion/users/index' ;
import userDetails from './views/administracion/users/Detalle' ;

import ContratosIndex from './views/legal/index' ;

export const routes = [

    {
        path: ''
        , component: Login
        , beforeEnter(to, from, next) {
            if( localStorage.getItem( 'accessToken' ) ) { next( '/GA' ) ; } else { next() ; }
        }

    }

    , { path: '/login' , component: Login
        , beforeEnter( to, from, next ) {
            if( localStorage.getItem( 'accessToken' ) ) { next( '/GA' ) ; } else { next() ; }
        }
    }

    , { path: '/logout' , component: Login
        , beforeEnter( to, from, next ) {
            localStorage.removeItem('accessToken') ;
            localStorage.removeItem('username') ;
            if( localStorage.getItem( 'accessToken' ) ) { next( '/home' ) ; } else { next('/login') ; }
        }

    }

    , {
        path: '/GA'
        , component: GA
        , beforeEnter( to, from, next ) {
            if( localStorage.getItem( 'accessToken' ) ) { next() ; } else { next( '/login' ) ; }
        }
    }

    , {
        path: '/Dashboard'
        , component: Dashboard
        , beforeEnter( to, from, next ) {
            if ( localStorage.getItem( 'accessToken' ) && localStorage.getItem( '2FA' ) ) {
                next() ;
            }
            else { next( '/logout' ) ; }
        }
    }

    , {
        path: '/Requisiciones'
        , component: RequisicionesIndex
        , beforeEnter( to, from, next ) {
            if ( localStorage.getItem( 'accessToken' ) && localStorage.getItem( '2FA' ) ) {
                next() ;
            }
            else { next( '/logout' ) ; }
        }
    }
    , {
        path: '/Requisiciones/Detalle/:id'
        , component: Detalle
        , beforeEnter( to, from, next ) {
            if ( localStorage.getItem( 'accessToken' ) && localStorage.getItem( '2FA' ) ) {
                next() ;
            }
            else { next( '/logout' ) ; }
        }
    }

    , {
        path: '/Corporativo'
        , component: CorporativoIndex
        , beforeEnter( to, from, next ) {
            if ( localStorage.getItem( 'accessToken' ) && localStorage.getItem( '2FA' ) ) {
                next() ;
            }
            else { next( '/logout' ) ; }
        }
    }

    , {
        path: '/Corporativo/Detalle/:id'
        , component: corpDetails
        , beforeEnter( to, from, next ) {
            if ( localStorage.getItem( 'accessToken' ) && localStorage.getItem( '2FA' ) ) {
                next() ;
            }
            else { next( '/logout' ) ; }
        }
    }

    , {
        path: '/Divisiones'
        , component: DivisionesIndex
        , beforeEnter( to, from, next ) {
            if ( localStorage.getItem( 'accessToken' ) && localStorage.getItem( '2FA' ) ) {
                next() ;
            }
            else { next( '/logout' ) ; }
        }
    }

    , {
        path: '/Divisiones/Detalle/:id'
        , component: divisionDetails
        , beforeEnter( to, from, next ) {
            if ( localStorage.getItem( 'accessToken' ) && localStorage.getItem( '2FA' ) ) {
                next() ;
            }
            else { next( '/logout' ) ; }
        }
    }

    , {
        path: '/Empresas'
        , component: EmpresasIndex
        , beforeEnter( to, from, next ) {
            if ( localStorage.getItem( 'accessToken' ) && localStorage.getItem( '2FA' ) ) {
                next() ;
            }
            else { next( '/logout' ) ; }
        }
    }

    , {
        path: '/Empresas/Detalle/:id'
        , component: empresaDetails
        , beforeEnter( to, from, next ) {
            if ( localStorage.getItem( 'accessToken' ) && localStorage.getItem( '2FA' ) ) {
                next() ;
            }
            else { next( '/logout' ) ; }
        }
    }

    , {
        path: '/Modulos'
        , component: modulosIndex
        , beforeEnter( to, from, next ) {
            if ( localStorage.getItem( 'accessToken' ) && localStorage.getItem( '2FA' ) ) {
                next() ;
            }
            else { next( '/logout' ) ; }
        }
    }

    , {
        path: '/Modulos/Detalle/:id'
        , component: modulosDetails
        , beforeEnter( to, from, next ) {
            if ( localStorage.getItem( 'accessToken' ) && localStorage.getItem( '2FA' ) ) {
                next() ;
            }
            else { next( '/logout' ) ; }
        }
    }
    ,
    {
        path: '/Projects'
        , component: projectsIndex
        , beforeEnter( to, from, next ) {
            if ( localStorage.getItem( 'accessToken' ) && localStorage.getItem( '2FA' ) ) {
                next() ;
            }
            else { next( '/logout' ) ; }
        }
    }

    , {
        path: '/Projects/Detalle/:id'
        , component: projectsDetails
        , beforeEnter( to, from, next ) {
            if ( localStorage.getItem( 'accessToken' ) && localStorage.getItem( '2FA' ) ) {
                next() ;
            }
            else { next( '/logout' ) ; }
        }
    }
    ,
    {
        path: '/Objetivos'
        , component: objetivosIndex
        , beforeEnter( to, from, next ) {
            if ( localStorage.getItem( 'accessToken' ) && localStorage.getItem( '2FA' ) ) {
                next() ;
            }
            else { next( '/logout' ) ; }
        }
    }

    , {
        path: '/registrodocs        '
        , component: RegistroDocs
        , beforeEnter( to, from, next ) {
            if ( localStorage.getItem( 'accessToken' ) && localStorage.getItem( '2FA' ) ) {
                next() ;
            }
            else { next( '/logout' ) ; }
        }
    }

    , {
        path: '/Objetivos/Detalle/:id'
        , component: objetivosDetails
        , beforeEnter( to, from, next ) {
            if ( localStorage.getItem( 'accessToken' ) && localStorage.getItem( '2FA' ) ) {
                next() ;
            }
            else { next( '/logout' ) ; }
        }
    }
    , {
        path: '/Usuarios'
        , component: UsersIndex
        , beforeEnter( to, from, next ) {
            if ( localStorage.getItem( 'accessToken' ) && localStorage.getItem( '2FA' ) ) {
                next() ;
            }
            else { next( '/logout' ) ; }
        }
    }

    , {
        path: '/Usuarios/Detalle/:id'
        , component: userDetails
        , beforeEnter( to, from, next ) {
            if ( localStorage.getItem( 'accessToken' ) && localStorage.getItem( '2FA' ) ) {
                next() ;
            }
            else { next( '/logout' ) ; }
        }
    }

    , {
        path: '/contratos'
        , component: ContratosIndex
        , beforeEnter( to, from, next ) {
            if ( localStorage.getItem( 'accessToken' ) && localStorage.getItem( '2FA' ) ) {
                next() ;
            }
            else { next( '/logout' ) ; }
        }
    }



    , { path: '*', redirect: '/Dashboard' }

] ;
