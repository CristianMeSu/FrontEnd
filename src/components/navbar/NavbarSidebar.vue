<template>
        <!-- Main Sidebar Container -->
        <aside class="main-sidebar sidebar-light-secondary elevation-4">
            <!-- Brand Logo -->
            <router-link to="/Dashboard" class="nav-link">
                <Pic image='blogoactual.png' />
            </router-link>

            <!-- Sidebar -->
            <div class="sidebar">
                <!-- Sidebar user panel (optional) -->
    <!--            <div class="user-panel mt-3 pb-3 mb-3 d-flex">-->
    <!--                <div class="image">-->
    <!--                    <img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">-->
    <!--                    <Pic image='' />-->
    <!--                </div>-->
    <!--                <div class="info">-->
    <!--                    <a href="#" class="d-block">Alexander Pierce</a>-->
    <!--                </div>-->
    <!--            </div>-->

                <!-- SidebarSearch Form -->
    <!--            <div class="form-inline">-->
    <!--                <div class="input-group" data-widget="sidebar-search">-->
    <!--                    <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">-->
    <!--                    <div class="input-group-append">-->
    <!--                        <button class="btn btn-sidebar">-->
    <!--                            <i class="fas fa-search fa-fw"></i>-->
    <!--                        </button>-->
    <!--                    </div>-->
    <!--                </div>-->
    <!--            </div>-->

                <!-- Sidebar Menu -->
                <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <!-- Add icons to the links using the .nav-icon class
                             with font-awesome or any other icon font library -->
    <!--                    <li class="nav-item menu-open">-->
    <!--                        <a href="#" class="nav-link active">-->
    <!--                            <i class="nav-icon fas fa-tachometer-alt"></i>-->
    <!--                            <p>-->
    <!--                                Starter Pages-->
    <!--                                <i class="right fas fa-angle-left"></i>-->
    <!--                            </p>-->
    <!--                        </a>-->
    <!--                        <ul class="nav nav-treeview">-->
    <!--                            <li class="nav-item">-->
    <!--                                <a href="#" class="nav-link active">-->
    <!--                                    <i class="far fa-circle nav-icon"></i>-->
    <!--                                    <p>Active Page</p>-->
    <!--                                </a>-->
    <!--                            </li>-->
    <!--                            <li class="nav-item">-->
    <!--                                <a href="#" class="nav-link">-->
    <!--                                    <i class="far fa-circle nav-icon"></i>-->
    <!--                                    <p>Inactive Page</p>-->
    <!--                                </a>-->
    <!--                            </li>-->
    <!--                        </ul>-->
    <!--                    </li>-->

                        <li><hr /></li>

                        <li class="nav-item " v-if="IT">
                            <a href="#" class="nav-link">
                                <i class="nav-icon fas fa-tachometer-alt"></i>
                                <p>
                                    Administración
                                    <i class="right fas fa-angle-left"></i>
                                </p>
                            </a>

                                <ul class="nav nav-treeview">



                                    <li class="nav-item">
                                        <router-link to="/Usuarios" class="nav-link">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>Usuarios</p>
                                        </router-link>
                                    </li>

                                </ul>
                        </li>

                        <li><hr /></li>

                        <li class="nav-item">
                            <router-link to="/logout" class="nav-link">
                                <p>
                                    <i class="nav-icon fas fa-power-off"></i>
                                    Cerrar sesión
                                </p>
                            </router-link>
                        </li>
                    </ul>
                </nav>
                <!-- /.sidebar-menu -->
            </div>
            <!-- /.sidebar -->
        </aside>


</template>

<script>
    import Pic from '@/components/Pic'
    import requests from "@/utils/requests";

    export default {
        name:'NavbarSidebar'

        , components: {
            Pic
        },
        data:function() {
            return({
                brand: 'logo.png'
                , userModulesAssignTo : null
                , IT : false
                , modules: {
                    compras : false
                    , crm : false
                    , legal : false
                }
            })
        }

        , methods:{
            closeSidebar:function(){
                const sidebar = document.querySelector('nav.navbar-sidebar')

                if (sidebar.classList.value === 'navbar-sidebar active')
                {
                    sidebar.classList.remove('active')
                    this.brand = 'logo.png'
                }
            },
            toggleSidebar:function(){
                const sidebar = document.querySelector('nav.navbar-sidebar')

                if (sidebar.classList.value === 'navbar-sidebar active')
                {
                    sidebar.classList.remove('active')
                    this.brand = 'logo.png'
                }
                else
                {
                    sidebar.classList.add('active')
                    this.brand = 'logotipo.png'
                }
            },
            toggleMenu:function(e){
                /* const item = document.querySelector('li[id='+id+']')
                const menu = document.querySelector('ul[id='+id+']')

                if (menu.classList.value == 'sidebar-menu d-none')
                {
                    item.classList.add('router-link-active')
                    menu.classList.remove('d-none')
                }
                else
                {
                    item.classList.remove('router-link-active')
                    menu.classList.add('d-none')
                } */

                const menus = document.querySelectorAll('ul.sidebar-menu')

                for (const menu of menus) {
                    if (menu.id === e.currentTarget.id)
                    {
                        if (menu.classList.value === 'sidebar-menu d-none')
                        {
                            menu.classList.remove('d-none')
                        }
                        else
                        {
                            menu.classList.add('d-none')
                        }
                    }
                    else
                    {
                        menu.classList.add('d-none')
                    }
                }
            },
            validateLogout:function(){
                localStorage.removeItem('accessToken')
                localStorage.removeItem('username')
                localStorage.removeItem('extension')
                this.$store.state.isLoginHere = true
                this.$router.push('/login')
            }

            , async getUserModulesAssignTo() {
                // console.log( "this.getIdUser: " , this.getidUser() )
                const userModulesAssignTo = await requests.get(
                    'users/details/getUserModulesAssignTo/'+ this.getidUser()
                ) ;

                this.userModulesAssignTo = userModulesAssignTo.data ;

                this.userModulesAssignTo.forEach( el => {
                    if ( el.includes( 1 ) ) this.modules.compras = !! this.modules.compras ;
                    if ( el.includes( 2 ) ) this.modules.crm = !! this.modules.crm ;
                    if ( el.includes( 3 ) ) this.modules.legal = !! this.modules.legal ;

                    // console.log( this.modules ) ;
                } )

                // console.log( "this.userModulesAssignTo: " , this.userModulesAssignTo ) ;
            }

            , getidUser() {
                return localStorage.getItem( "userId" ) ;
            }

        }

        , mounted() {
            this.IT = localStorage.getItem("roles") === "ROLE_IT" ;
        }

        , created() {
            this.getUserModulesAssignTo() ;
        }

    }
</script>
