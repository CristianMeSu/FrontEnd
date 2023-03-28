<template>
    <div>

        <Navbar />
        <NavbarSideBar />

        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">
                                {{ newData.name }} {{ newData.lastname }}
                                <small v-if="! edit">
                                    |
                                    <a href="javascript:;" id="btnEditar" @click="edit=true">
                                        <span class="right badge badge-secondary">
                                            Editar
                                        </span>
                                    </a>
                                </small>
                            </h1>
                        </div><!-- /.col -->
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><router-link to="/Dashboard">Dashboard</router-link></li>
                                <li class="breadcrumb-item"><router-link to="/Usuarios">Usuarios</router-link></li>
                                <li class="breadcrumb-item active">Detalle de registro # {{ getUrlQueryId() }}</li>
                            </ol>
                        </div><!-- /.col -->
                    </div><!-- /.row -->
                </div><!-- /.container-fluid -->
            </div>
            <!-- /.content-header -->

            <!-- Main content -->
            <form id="userForm">
                <div class="content" id="readonly">
                    <div class="container-fluid">
                        <div class="card">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-12 table-responsive">
                                        <table class="table table-striped table-hover">

                                            <tbody>

                                                <tr>
                                                    <th style="width: 20%" scope="row">Username:</th>
                                                    <td >
                                                        {{ newData.username }}
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th scope="row">Password:</th>
                                                    <td >
                                                        <span v-if="edit">
                                                            <div class="row">
                                                                <div class="col-md-6" >
                                                                    <input
                                                                        type="text"
                                                                        class="form-control"
                                                                        placeholder="New Password"
                                                                        v-model="newData.password"
                                                                    />
                                                                </div>
<!--                                                                <div class="col-md-6" v-if="edit">-->
<!--                                                                    <button type="button" class="btn btn-success" @click="saveChanges">-->
<!--                                                                        <i class="fas fa-check"></i>-->
<!--                                                                    </button>-->
<!--                                                                </div>-->
                                                            </div>

                                                        </span>
                                                        <span v-else>
                                                            <span v-if="!showPassword">
                                                                [ Encrypted ]
                                                                <i class="fas fa-eye showPassword" @click="showPassword = !showPassword"></i>
                                                            </span>

                                                            <span v-else>
                                                                {{ password }}
                                                                <i class="fas fa-eye-slash showPassword" @click="showPassword = !showPassword"></i>
                                                            </span>
                                                        </span>
                                                    </td>
                                                </tr>

                                                <h3 style="margin-top: 1em ;">Details</h3>

                                                <tr>
                                                    <th scope="row">Rol:</th>
                                                    <td >
                                                        <select
                                                            v-if="edit"
                                                            name=""
                                                            id=""
                                                            class="form-control"
                                                            v-model="newData.rol"
                                                        >
                                                            <option
                                                                v-for = "role in roles"
                                                                :value = "role.name.split('_')[ 1 ]"
                                                            >{{ role.name.split('_')[ 1 ] }}</option>
                                                        </select>
                                                        <span v-else>{{ newData.rol }}</span>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th scope="row">Status:</th>
                                                    <td >
                                                        <input
                                                            v-if="edit"
                                                            id="st"
                                                            type="checkbox"
                                                            class=""
                                                            :checked="newData.chStatus"
                                                            @click="changeStatus()"
                                                        >
                                                        <label v-if="edit" for="st" style="margin-left: 1em ;" :class="cssStatus">{{ dataStatus }}</label>
                                                        <span v-else :class="cssStatus">{{ newData.dataStatus }}</span>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th scope="row">Name:</th>
                                                    <td >
                                                        <input
                                                            v-if="edit"
                                                            id="name"
                                                            type="text"
                                                            class="form-control"
                                                            v-model="newData.name"
                                                        >
                                                        <span v-else>{{ newData.name }}</span>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th scope="row">Lastname:</th>
                                                    <td >
                                                        <input
                                                            v-if="edit"
                                                            id="name"
                                                            type="text"
                                                            class="form-control"
                                                            v-model="newData.lastname"
                                                        >
                                                        <span v-else>{{ newData.lastname }}</span>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th scope="row">Email:</th>
                                                    <td >
                                                        <input
                                                            v-if="edit"
                                                            id="email"
                                                            type="email"
                                                            class="form-control"
                                                            v-model="newData.email"
                                                        >
                                                        <span v-else>{{ newData.email }}</span>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th scope="row">Empresas:</th>
                                                    <td >
                                                        <div class="row" v-if="edit">
                                                            <div class="col-md-5">
                                                                <select
                                                                    name=""
                                                                    id=""
                                                                    class="form-control"
                                                                    v-model="newData.empresaId"
                                                                >
                                                                    <option
                                                                        v-for = "empresa in empresas"
                                                                        :value = "empresa[ 0 ]"
                                                                    >{{ empresa[ 1 ] }}</option>
                                                                </select>
                                                            </div>
                                                            <div class="col-md-1">
                                                                <button @click="addUserToCompany()" type="button" class="btn btn-success">
                                                                    <i class="fas fa-plus-circle"></i>
                                                                </button>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <ul id="lEmpresas">
                                                                    <li v-for="e in newData.empresasList" :id="'empresa-'+e.id">
                                                                        <i @click="borrarEmpresa( e.id , e.nombreEmpresa )" class="fas fa-times" style="color:red; margin-right: .8em; cursor: pointer;"></i>
                                                                            {{ e.nombreEmpresa }}
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <span v-else>
                                                            <ul>
                                                                <li v-for="e in newData.empresasList">
                                                                    {{ e.nombreEmpresa }}
                                                                    <span v-if="edit"> X </span>
                                                                </li>
                                                            </ul>
                                                        </span>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th scope="row">Módulos:</th>
                                                    <td >
                                                        <div class="row" v-if="edit">
                                                            <div class="col-md-5">
                                                                <select
                                                                    name=""
                                                                    id=""
                                                                    class="form-control"
                                                                    v-model="newData.moduloId"
                                                                >
                                                                    <option
                                                                        v-for = "modulo in modulos"
                                                                        :value = "modulo[ 0 ]"
                                                                    >{{ modulo[ 1 ] }}</option>
                                                                </select>
                                                            </div>
                                                            <div class="col-md-1">
                                                                <button @click="addUserToModulo()" type="button" class="btn btn-success">
                                                                    <i class="fas fa-plus-circle"></i>
                                                                </button>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <ul id="lModulos">
                                                                    <li v-for="e in newData.modulosList" :id="'modulo-'+e.id">
                                                                        <i @click="borrarModulo( e.id , e.moduleName )" class="fas fa-times" style="color:red; margin-right: .8em; cursor: pointer;"></i>
                                                                            {{ e.moduleName }}
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <span v-else>
                                                            <ul>
                                                                <li v-for="e in newData.modulosList">
                                                                    {{ e.moduleName }}
                                                                    <span v-if="edit"> X </span>
                                                                </li>
                                                            </ul>
                                                        </span>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th>Secret Key:</th>
                                                    <td>
                                                        <span >
                                                            <span v-if="!showSecretKey4GA">
                                                                [ Encrypted ]
                                                                <i class="fas fa-eye showPassword" @click="showSecretKey4GA = !showSecretKey4GA"></i>
                                                            </span>

                                                            <span v-else>
                                                                {{ secretKey4GA }}
                                                                <i class="fas fa-eye-slash showPassword" @click="showSecretKey4GA = !showSecretKey4GA"></i>
                                                            </span>
                                                        </span>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th>QR Access Code Image:</th>
                                                        <td>
                                                            <VueQRCodeComponent :text="qrCode" :size="200"></VueQRCodeComponent>
                                                        </td>
                                                </tr>

                                            </tbody>
                                        </table>

                                        <div class="right" v-if="edit">
                                            <button type="button" class="btn btn-success" id="btnEditar" @click="saveChanges"> Guardar Detalles </button>
                                            <button type="button" class="btn btn-danger" id="btnEditar" @click="cancelChanges"> Cancelar edición </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="content" id="itZone" v-if="IT">
                    <div class="container-fluid">
                        <div class="card">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div>
                                            <h2>IT Zone</h2>
                                            <table class="table table-striped table-hover">
                                                <tbody>

                                                    <tr>
                                                        <th>Date Last Modified</th>
                                                        <td>{{ dateLastModified }}</td>
                                                    </tr>

                                                    <tr>
                                                        <th>Last User Who Modified</th>
                                                        <td>{{ userWhoModified }}</td>
                                                    </tr>
                                                </tbody>

                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    </div>
</template>

<script>
import Navbar from "@/components/navbar/Navbar";
import NavbarSideBar from "@/components/navbar/NavbarSidebar";
import requests from "@/utils/requests";
import errorCodes from "@/utils/errorCodes";
import VueQRCodeComponent from 'vue-qrcode-component'

export default {
    name: "Details"

    , components: {
        Navbar
        , NavbarSideBar
        , VueQRCodeComponent
    }

    , data() {
        return {
            edit : false
            , IT : false
            , id : null
            , u : null

            , empresas : null
            , modulos : null
            , roles : null
            , oneRole : null
            , showPassword : false
            , showSecretKey4GA : false
            , qrCode : ''

            , username : null
            , password : null
            , rol : null
            , name : null
            , lastname : null
            , empresaId : null
            , secretKey4GA : null
            , email : null
            , dataStatus : null
            , chStatus : false
            , dateLastModified : null
            , userWhoModified : null
            , moduloId : null
            , moduloName : null
            , modulosList : null

            , newData: {
                username : null
                , password : null
                , rol : null
                , name : null
                , lastname : null
                , empresaId : null
                , empresa : null
                , empresasList : null
                , dataStatus : null
                , chStatus : false
                , dateLastModified : null
                , userWhoModified : null
                , email : null
                , moduloId : null
                , moduloName : null
                , modulosList : null
            }

            , cssStatus : "stActive"

        }
    }

    , methods: {
        getUrlQueryId() {
            return this.$route.params.id ;
        }

        , async getRecordData() {
            // let notification ;

            this.u = await requests.get(
                'users/get-details/'+ this.getUrlQueryId()
            ) ;
            const u = this.u ;

            console.log( "u: " , u.data ) ;

            this.username = u.data.user.username ;
            this.password = u.data.user.password ;
            this.dataStatus = u.data.userStatus.stName ;
            this.chStatus = u.data.user.dataStatus === 1 ;
            this.rol = u.data.user.roles[ 0 ] ? u.data.user.roles[ 0 ].name.split( "_" )[ 1 ] : null ;
            this.dateLastModified = u.data.user.dateLastModified ;
            this.userWhoModified = u.data.userModifier.username ;
            console.log("aqui",this.userWhoModified)
            this.secretKey4GA = u.data.user.secretKey4GA ;
            this.email = u.data.userEmails[ 0 ].email ;
            this.qrCode = this.getQRCode().toString() ;

            this.name = u.data.userDetails ? u.data.userDetails.userName : null ;
            this.lastname = u.data.userDetails ? u.data.userDetails.userLastname : null ;
            // this.empresaId = u.data.userDetails ? u.data.userDetails.empresaId : null ;

            this.empresaId = 1 ;
            this.empresa = u.data.userEmpresa ? u.data.userEmpresa[ 1 ] : null ;
            this.empresasList = u.data.userCompanies ? u.data.userCompanies : null ;

            this.moduloId = 1 ;
            this.modulo = u.data.userModules ? u.data.userModules[ 1 ] : null ;
            this.modulosList = u.data.userModules ? u.data.userModules : null ;

            this.newData.name = this.name ;
            this.newData.lastname = this.lastname ;

            this.newData.empresaId = this.empresaId ;
            this.newData.empresa = this.empresa ;
            this.newData.empresasList = this.empresasList ;

            this.newData.moduloId = this.moduloId ;
            this.newData.moduloName = this.moduloName ;
            this.newData.modulosList = this.modulosList ;

            this.newData.username = this.username ;
            // this.newData.password = this.password ;
            this.newData.dataStatus = this.dataStatus ;
            this.newData.rol = this.rol ;
            this.newData.dateLastModified = this.dateLastModified ;
            this.newData.userWhoModified = this.userWhoModified ;
            this.newData.email = this.email ;

            this.newData.chStatus = this.chStatus ;
            this.cssStatus = this.chStatus === 1 || this.chStatus === true ? 'stActive' : 'stDeactivated' ;

            // console.log( "this.newData: " , this.newData ) ;
        }

        , changeStatus() {
            if ( this.newData.chStatus ) {
                this.newData.chStatus = false ;
                this.dataStatus = "Deactivated" ;
                this.cssStatus = 'stDeactivated' ;
            } else {
                this.newData.chStatus = true ;
                this.dataStatus = "Active" ;
                this.cssStatus = 'stActive' ;
            }
        }

        // , async changePassword() {
        , async saveChanges() {
            const rol = await requests.get(
                'roles/one/'+ this.newData.rol
                , [ this.newData.rol ]
            ) ;

            // const rol = this.get1Role() ;
            const theRol = {
                "id" : rol.data.id
                , "name" : rol.data.name
            }

            // console.log( "this.newData.rol: " , this.newData.rol ) ;
            // console.log( "rol object: " , rol.data ) ;
            // console.log( "theRol object: " , [ theRol ] ) ;

            let notification ;
            let st = this.newData.chStatus === true || this.newData.chStatus === 1 ? 1 : 2 ;

            const userData = {
                "password" : this.newData.password
                , "roles" : [ theRol ]
                , "dataStatus" : st
            } ;

            // console.log( "userData: " , userData ) ;

            const userResponse = await requests.put(
                'users/change-user-data/'+ this.getUrlQueryId()
                , userData
            ) ;
            // console.log( "userResponse: " , userResponse ) ;

            let userDetails ;
            let userDetailsResponse ;
            if ( this.newData.name !== null && this.newData.lastname !== null ) {
                userDetails = {
                    "idUser" : this.getUrlQueryId()
                    , "userName" : this.newData.name
                    , "userLastname" : this.newData.lastname
                    , "dataStatus" : st
                }

                // console.log( "this.u.data.userDetails: " , this.u.data.userDetails ) ;
                if ( this.u.data.userDetails !== null ) {
                    // console.log( "PUT" ) ;
                    userDetailsResponse = await requests.put(
                        'users/change-details/'+ this.getUrlQueryId()
                        , userDetails
                    ) ;
                } else {
                    // console.log( "POST" ) ;
                    userDetailsResponse = await requests.post(
                        'users/details/new'
                        , userDetails
                    ) ;
                }
                // console.log( "userDetails: " , userDetails ) ;
                // console.log( "userDetailsResponse: " , userDetailsResponse ) ;
            }

            const userEmails = {
                "email" : this.newData.email
                , "dataStatus" : st
            }
            const userEmailsResponse = await requests.put(
                'users/change-emails/'+ this.getUrlQueryId()
                , userEmails
            ) ;
            // console.log( "userEmailsResponse: " , userEmailsResponse ) ;


            if (
                (userResponse.status === 200
                || userResponse.status === 201)

                // &&( userDetailsResponse.status === 200
                // || userDetailsResponse.status === 201)

                &&( userEmailsResponse.status === 200
                || userEmailsResponse.status === 201 ) ) {
                // console.log("200-201") ;

                notification = errorCodes.get( 200 ) ;
                // console.log(notification)
                this.$notify({
                    group: 'foo'
                    , title: `<h5>Message Code: ${notification.code}</h5>`
                    , text: `<h6>${notification.message}</h6>`
                    , type: `${notification.type}`
                    , duration: 10000
                } ) ;

                this.cancelChanges() ;

            } else {
                let st ;
                // if ( response.data !== typeof number ) st = 401 ;
                // else
                // st = 401 ;

                notification = errorCodes.get( st ) ;
                // console.log(notification)
                this.$notify({
                    group: 'foo'
                    , title: `<h4>Error Code: ${notification.code}</h4>`
                    , text: `<h5>${notification.message}</h5>`
                    , type: `${notification.type}`
                    , duration: -1
                } ) ;
                // if ( st === 401 ) await this.$router.push( '/logout' ) ;
            }

        }

        , cancelChanges() {
            // console.log("cancelChanges") ;
            this.edit = false ;
            this.getRecordData() ;
        }

        , async getRoles() {
            const roles = await requests.get(
                'roles/'
            ) ;

            this.roles = roles.data ;
            // console.log( this.roles ) ;
        }

        , async get1Role() {
            const rol = await requests.get(
                'roles/one/'+ this.newData.rol
                , [ this.newData.rol ]
            ) ;

            console.log( "this.newData.rol: " , this.newData.rol ) ;
            console.log( "get1Role: " , rol.data ) ;

            return rol.data ;
        }

        , async getEmpresas() {
            const empresas = await requests.get(
                'empresas/'
            ) ;

            this.empresas = empresas.data.data ;
            // console.log( this.empresas ) ;
        }

        , async getModules() {
            const modules = await requests.get(
                'modulos/'
            ) ;

            this.modulos = modules.data.data ;
            // console.log( "this.modulos: " , this.modulos ) ;
        }

        , async borrarEmpresa( idEmpresa , nombreEmpresa ) {
            // Se recibe el id del registro, no de la empresa

            let notification ;

            let result = confirm( `Desea retirar usuario "${ this.newData.username }" de la empresa "${ nombreEmpresa }"` , "AERP" ) ;
            if ( result ) {

                const deleteUserFromCompany = await requests.delete(
                    'users/details/d/'+ idEmpresa
                ) ;

                console.log( "deleteUserFromCompany: " , deleteUserFromCompany ) ;

                if ( deleteUserFromCompany.status === 200 || deleteUserFromCompany.status === 201 ) {
                    notification = errorCodes.get( deleteUserFromCompany.status ) ;
                    this.$notify({
                        group: 'foo'
                        , title: `<h5>Message Code: ${notification.code}</h5>`
                        , text: `<h6>${notification.message}</h6>`
                        , type: `${notification.type}`
                        , duration: 10000
                    } ) ;

                    let ul = document.getElementById( "lEmpresas" ) ;
                        let item = ul.querySelector( "#empresa-"+ idEmpresa ) ;
                            ul.removeChild( item ) ;
                }

            }
        }

        , async addUserToCompany() {
            // console.log( this.newData.empresaId ) ;
            let notification ;

            const data = {
                "idUser" : this.getUrlQueryId()
                , "empresaId" : this.newData.empresaId
            }

            const addUserToCompany = await requests.post(
                'users/details/addUserToCompany'
                , data
            ) ;

            if ( addUserToCompany.status === 200 || addUserToCompany.status === 201 ) {
                notification = errorCodes.get( addUserToCompany.status ) ;
                this.$notify({
                    group: 'foo'
                    , title: `<h5>Message Code: ${notification.code}</h5>`
                    , text: `<h6>${notification.message}</h6>`
                    , type: `${notification.type}`
                    , duration: 5000
                } ) ;

                this.cancelChanges() ;
                setTimeout( () => {
                    // console.log( "setTimeOut" ) ;
                    this.edit = true ;
                }, 1000 ) ;

            } else {
                notification = errorCodes.get( 202 ) ;
                this.$notify({
                    group: 'foo'
                    , title: `<h5>Message Code: ${notification.code}</h5>`
                    , text: `<h6>${notification.message}. But already registered.</h6>`
                    , type: `warn`
                    , duration: 10000
                } ) ;
            }
            // console.log( "addUserToCompany: " , addUserToCompany ) ;

        }

        , async borrarModulo( idModulo , moduleName ) {
            // Se recibe el id del registro, no de la empresa

            let notification ;

            let result = confirm( `Desea retirar usuario "${ this.newData.username }" del acceso al módulo "${ moduleName }"` , "AERP" ) ;
            if ( result ) {

                const deleteUserFromModule = await requests.delete(
                    'users/details/dm/'+ idModulo
                ) ;

                console.log( "deleteUserFromModule: " , deleteUserFromModule ) ;

                if ( deleteUserFromModule.status === 200 || deleteUserFromModule.status === 201 ) {
                    notification = errorCodes.get( deleteUserFromModule.status ) ;
                    this.$notify({
                        group: 'foo'
                        , title: `<h5>Message Code: ${notification.code}</h5>`
                        , text: `<h6>${notification.message}</h6>`
                        , type: `${notification.type}`
                        , duration: 10000
                    } ) ;

                    let ul = document.getElementById( "lModulos" ) ;
                        let item = ul.querySelector( "#modulo-"+ idModulo ) ;
                            ul.removeChild( item ) ;
                }

            }
        }

        , async addUserToModulo() {
            // console.log( this.newData.empresaId ) ;
            let notification ;

            const data = {
                "idUser" : this.getUrlQueryId()
                , "moduleId" : this.newData.moduloId
            }

            //console.log( "data: " , data ) ;

            const addUserToModule = await requests.post(
                'users/details/addUserToModule'
                , data
            ) ;

            if ( addUserToModule.status === 200 || addUserToModule.status === 201 ) {
                notification = errorCodes.get( addUserToModule.status ) ;
                this.$notify({
                    group: 'foo'
                    , title: `<h5>Message Code: ${notification.code}</h5>`
                    , text: `<h6>${notification.message}</h6>`
                    , type: `${notification.type}`
                    , duration: 5000
                } ) ;

                this.cancelChanges() ;
                setTimeout( () => {
                    // console.log( "setTimeOut" ) ;
                    this.edit = true ;
                }, 1000 ) ;

            } else {
                notification = errorCodes.get( 202 ) ;
                this.$notify({
                    group: 'foo'
                    , title: `<h5>Message Code: ${notification.code}</h5>`
                    , text: `<h6>${notification.message}. But already registered.</h6>`
                    , type: `warn`
                    , duration: 10000
                } ) ;
            }
            console.log( "addUserToModule: " , addUserToModule ) ;

        }

        , getQRCode() {
            const secretKey = this.secretKey4GA ;
            const account = this.email ;
            const issuer = "Amistad-ERP" ;
            const url = "otpauth://totp/"
                + encodeURIComponent( issuer + ":" + account )
                + "?secret=" + secretKey
                + "&issuer=" + issuer
            ;

/*
        // Ejemplo de cadena generada correctamente por el BackEnd
        otpauth://totp/Amistad-ERP%3Alexcastillo.amistad%40gmail.com?secret=KGQNJGAYI5SVAZJDOXUXEKJDYT3QOZQ7&issuer=Amistad-ERP

*/
            return url.toString() ;
        }

    }

    , created() {
        this.getRecordData() ;
        this.getRoles() ;
        // this.get1Role() ;
        this.getEmpresas() ;
        this.getModules() ;
        // this.changeStatus() ;
        // this.getQRCode() ;
    }

    , mounted() {
        if ( localStorage.getItem( "roles" )  === "ROLE_IT" ) this.IT = true ;
    }

}
</script>

<style scoped>
    .red {
        background-color: red !important ;
    }

    a#btnEditar:link,
    a#btnEditar:hover,
    a#btnEditar:visited {
        font-weight: normal ;
        color: lightblue ;
        padding: .5em ;
    }

    #itZone {
        margin-top: 2.5em ;
    }

    .right {
        text-align: right ;
    }

    .btn-success {
        margin-right: 2em ;
    }

    .showPassword {
        color: grey ;
        margin-left: 1em ;
    }

</style>