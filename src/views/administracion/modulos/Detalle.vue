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
                                {{ moduleName }}
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
                                <li class="breadcrumb-item"><router-link to="/Modulos">Modulos</router-link></li>
                                <li class="breadcrumb-item active">Detalle de registro # {{ getUrlQueryId() }}</li>
                            </ol>
                        </div><!-- /.col -->
                    </div><!-- /.row -->
                </div><!-- /.container-fluid -->
            </div>
            <!-- /.content-header -->

            <!-- Main content -->
            <div class="content" id="readonly" v-if="!edit">
                <div class="container-fluid">
                    <div class="card">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <table class="table table-striped table-hover">

                                        <tbody>
                                            <tr>
                                                <th scope="row">Module Name:</th>
                                                <td>
                                                    {{ moduleName }}
                                                </td>
                                            </tr>

                                            <tr>
                                                <th scope="row">Status:</th>
                                                <td ><span :class="cssStatus">{{ dataStatus }}</span></td>
                                            </tr>

                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="content" id="edit" v-else>
                <div class="container-fluid">
                    <div class="card">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">

                                    <form>
                                        <table class="table table-striped table-hover">

                                            <tbody>

                                                <tr>
                                                    <th scope="row">Module Name:</th>
                                                    <td v-if="edit">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder="Short Corp Name"
                                                            v-model="newData.moduleName"
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Status:</th>
                                                    <td >
                                                        <input
                                                            id="st"
                                                            type="checkbox"
                                                            class=""
                                                            :checked="chStatus"
                                                            @click="changeStatus()"
                                                        >
                                                        <label for="st" style="margin-left: 1em ;" :class="cssStatus">{{ dataStatus }}</label>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </form>

                                    <div class="right">
                                        <button class="btn btn-success" id="btnEditar" @click="saveChanges"> Guardar cambios </button>
                                        <button class="btn btn-danger" id="btnCancelar" @click="cancelChanges"> Cancelar edición </button>
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

        </div>

    </div>
</template>

<script>
import Navbar from "@/components/navbar/Navbar";
import NavbarSideBar from "@/components/navbar/NavbarSidebar";
import requests from "@/utils/requests";
import errorCodes from "@/utils/errorCodes";

export default {
    name: "Details"

    , components: {
        Navbar
        , NavbarSideBar
    }

    , data() {
        return {
            edit : false
            , IT : false
            , id : null
            , moduleName : null
            , dataStatus : null
            , userWhoModified : null
            , dateLastModified : null
            , chStatus : false
            , newData: {
                moduleName : null
                , chStatus : null
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

            const response = await requests.get(
                'modulos/get/'+ this.getUrlQueryId()
            ) ;

            // console.log( "response: " , response.data ) ;

            this.moduleName = response.data[ 1 ] ;
            this.chStatus = response.data [2][0].id === 1 ;
            this.dataStatus = response.data [ 2 ] !== null ? response.data [ 2 ][ 0 ].stName  : "" ;
            this.userWhoModified = response.data [ 4 ] !== null ? response.data [ 4 ][ 0 ].username : "" ;
            this.dateLastModified = response.data [ 5 ] ;

            this.newData.moduleName = this.moduleName ;
            this.newData.chStatus = this.chStatus ;

            this.cssStatus = this.chStatus === 1 || this.chStatus === true ? 'stActive' : 'stDeactivated' ;
            this.edit = false ;

            return response.data ;
        }

        , changeStatus() {
            if ( this.newData.chStatus === true ) {
                this.newData.chStatus = false ;
                this.dataStatus = "Deactivated" ;
                this.cssStatus = 'stDeactivated' ;
            } else {
                this.newData.chStatus = true ;
                this.dataStatus = "Active" ;
                this.cssStatus = 'stActive' ;
            }
        }

        , async saveChanges() {

            let notification ;

            if ( this.newData.moduleName.trim() === '' ) {
                notification = errorCodes.get( 400 ) ;

                this.$notify({
                    group: 'foo'
                    , title: `<h4>Error Code: ${ notification.code }</h4>`
                    , text: `<h5>${ notification.message }</h5>
                            <br />
                            <h6>Fields should not left blank.</h6>
                        `
                    , type: `${ notification.type }`
                    , duration: 5000
                } ) ;
            } else {

                // console.log( this.newData.shortDivisionName ) ;

                let st = this.newData.chStatus === true ? 1 : 2 ;

                const data = {
                    "id" : this.getUrlQueryId()
                    , "moduleName" : this.newData.moduleName
                    , "dataStatus" : st
                }

                // console.log( "data: " , data ) ;

                const response = await requests.put(
                    'modulos/update'
                    , data
                ) ;

                // console.log( "response: " , response ) ;

                if ( response.status === 200 ) {
                    await this.getRecordData() ;

                    notification = errorCodes.get( response.status ) ;
                    // console.log(notification)
                    this.$notify({
                        group: 'foo'
                        , title: `<h5>Message Code: ${notification.code}</h5>`
                        , text: `<h6>${notification.message}</h6>`
                        , type: `${notification.type}`
                        , duration: 10000
                    } ) ;
                    if ( st === 401 ) await this.$router.push( '/logout' ) ;

                } else {
                    let st ;
                    // if ( response.data !== typeof number ) st = 401 ;
                    // else st = response.status | response.data ;
                    st = response.status | response.data ;

                    notification = errorCodes.get( st ) ;
                    // console.log(notification)
                    this.$notify({
                        group: 'foo'
                        , title: `<h5>Error Code: ${notification.code}</h5>`
                        , text: `<h6>${notification.message}</h6>`
                        , type: `${notification.type}`
                        , duration: -1
                    } ) ;
                    // if ( st === 401 ) await this.$router.push( '/logout' ) ;
                }
            }

        }

        , cancelChanges() {
            this.edit = false ;
            this.getRecordData() ;
        }

        , async getCorps( arr ) {
            this.arr = this.arr === undefined || this.arr === null ? [ 1,2 ] : arr ;

            this.corps = await requests.post(
                'corp/select-tag'
                , this.arr
            ) ;
        }

    }

    , created() {
        this.getRecordData() ;
        this.getCorps() ;
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

    a#btnEditarCorporativo:link,
    a#btnEditarCorporativo:hover,
    a#btnEditarCorporativo:visited {
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

</style>