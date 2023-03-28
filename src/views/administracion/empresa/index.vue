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
                                Listado de Empresas |
                                <small>
                                    <span class="right badge badge-secondary">
                                        <a href="#" id="btnNuevoRegistro" data-toggle="modal" data-target=".bd-example-modal-lg">Nuevo</a>
                                    </span>
                                </small>
                            </h1>
                        </div><!-- /.col -->
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><router-link to="/Dashboard">Dashboard</router-link></li>
                                <li class="breadcrumb-item active">
                                    Empresas
                                </li>
                            </ol>
                        </div><!-- /.col -->
                    </div><!-- /.row -->
                </div><!-- /.container-fluid -->
            </div>
            <!-- /.content-header -->

            <!-- Main content -->
            <div class="content">
                <div class="container-fluid">
                    <div class="card">
                        <div class="card-body table-responsive">

                            <table id="empresasList" class="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Short Name</th>
                                        <th>Division</th>
                                        <th>Last Modified</th>
                                        <th>User Who Modified</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody id="empresaContent"></tbody>

                                <tfoot>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Short Name</th>
                                        <th>Division</th>
                                        <th>Last Modified</th>
                                        <th>User Who Modified</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </tfoot>
                            </table>

                        </div>
                    </div>
                </div><!-- /.container-fluid -->
            </div>
        </div>

        <div
            id="nuevoCorporativo"
            class="modal fade bd-example-modal-lg"
            tabindex="-1"
            role="dialog"
            aria-labelledby="myLargeModalLabel"
            aria-hidden="true"
            data-backdrop="static"
            data-keyboard="false"
        >
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Nueva Empresa</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="cancelInsert">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">

                                <form>

                                    <form>
                                        <table class="table table-striped table-hover">

                                            <tbody>
                                                <tr>
                                                    <th scope="row">Enterprise Name:</th>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder="Enterprise Name"
                                                            v-model="newData.enterpriseName"
                                                        />
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th scope="row">Enterprise Short Name:</th>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder="Enterprise ShortName"
                                                            v-model="newData.enterpriseShortName"
                                                        />
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th scope="row">Division assign to:</th>
                                                    <td>
                                                        <select
                                                            name=""
                                                            id=""
                                                            class="form-control"
                                                            v-model="newData.divisionId"
                                                        >
                                                            <option
                                                                v-for = "corp in divisiones.data"
                                                                :value = "corp[ 0 ]"
                                                            >{{ corp[ 1 ] }}</option>
                                                        </select>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th scope="row">URL AdminPaq:</th>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder="URL Adminpaq"
                                                            v-model="newData.URLAdminPaq"
                                                        />
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th scope="row">URL ContPaq:</th>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder="URL Contpaq"
                                                            v-model="newData.URLContPaq"
                                                        />
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th scope="row">URL ContPaq:</th>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder="URL Server Compaq"
                                                            v-model="newData.URLServerComPaq"
                                                        />
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </form>

                                </form>


                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success" @click="saveNewData">Save changes</button>
                        <button type="button" class="btn btn-danger" data-dismiss="modal" @click="cancelInsert">Close</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import Navbar from "@/components/navbar/Navbar" ;
import NavbarSideBar from "@/components/navbar/NavbarSidebar" ;
import requests from "@/utils/requests";
import errorCodes from "@/utils/errorCodes";

export default {
    name: "index"

    , components: {
        Navbar
        , NavbarSideBar
    }

    , data() {
        return {
            divisiones : {}

            , newData : {
                enterpriseName : null
                , enterpriseShortName : null
                , divisionId : 1
                , URLAdminPaq : null
                , URLContPaq : null
                , URLServerComPaq : null
            }
        }
    }

    , methods: {

        async firstDataLoad() {
            // console.log( localStorage.getItem( "accessToken" ) ) ;
            let notification ;

            const response = await requests.get(
                'empresas/'
            ) ;

            if ( response.data === 200 || response.status === 200 ) {

                let tbody = document.getElementById("empresaContent" ) ;
                let items = response.data.data ;

                for ( let i = 0 ; i <= items.length-1 ; i++ ) {

                    const tr = document.createElement("tr" ) ;

                    for ( let y = 0 ; y <= items[ i ].length-1 ; y++ ) {
                        const td = document.createElement("td" ) ;
                        td.innerHTML = items[ i ][ y ] ;
                        tr.appendChild( td ) ;
                    }

                    tbody.appendChild( tr ) ;
                }

                // $ ( '#requisicionesList' ).DataTable() ;
                let x=1;

                $ ( '#empresasList' ).DataTable( {
                    "processing": true,
                    "data": response.data.data
                    , "columns": [
                        {
                            data : 0
                            , render: function() {
                                return x++ ;
                            }
                        }

                        , {
                            data : 1
                            , render: function( data ) {
                                return data ;
                            }
                        }

                        , {
                            data : 2
                            , render: function( data ) {
                                return data ;
                            }
                        }

                        , {
                            data : 3
                            , render: function( data ) {
                                return data[ 1 ] ;
                            }
                        }

                        , {
                            data : 4
                            , render: function( data ) {
                                return data ;
                            }
                        }

                        , {
                            data : 5
                            , render: function( data ) {
                                return data[0] ? data[0].username : "" ;
                            }
                        }

                        , {
                            data : 6
                            , render: function( data ) {
                                let cClass, cIcon ;
                                if ( data[ 0 ].id === 2 ) {
                                    cClass = 'stDeactivated' ;
                                    cIcon = '<i class="fas fa-ban"></i>' ;
                                } else {
                                    cClass = 'stActive' ;
                                    cIcon = '<i class="fas fa-check"></i>' ;
                                }

                                let html = `<span class="${cClass}" title="${data[ 0 ].stName}">${cIcon}</span>` ;

                                return data[ 0 ] ? html : "" ;
                            }
                        }

                        , {
                            data : 7
                            , render: function( data ) {
                                return `
                                    <a href='/Empresas/Detalle/${data}' @click="x(${data})" class="details" >
                                        <i class='fas fa-folder-open'></i>
                                    </a>
                                ` ;
                            }
                        }



                    ]
                    , "order": [ [ 0 , 'asc' ] ]
                } ) ;

            } else {

                // console.log("RESPONSE",response.split(parseInt(response))) ;

                let st ;
                if ( response.data != typeof number ) st = 401 ;
                else st = response.status | response.data ;

                notification = errorCodes.get( st ) ;
                // console.log(notification)
                this.$notify({
                    group: 'foo'
                    , title: `<h5>Error Code: ${notification.code}</h5>`
                    , text: `<h6>${notification.message}</h6>`
                    , type: `${notification.type}`
                    , duration: -1
                } ) ;
                if ( st === 401 ) await this.$router.push( '/logout' ) ;

            }

        }

        , async saveNewData() {
            let notification ;

            if (
                ! this.newData.enterpriseName
                || this.newData.enterpriseName.trim() === ''

                || ! this.newData.enterpriseShortName
                || this.newData.enterpriseShortName.trim() === ''

                || ! this.newData.divisionId
                || this.newData.divisionId <= 0
            ) {
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

                const data = {
                    "empresaName" : this.newData.enterpriseName
                    , "empresaShortName" : this.newData.enterpriseShortName
                    , "divisionId" : this.newData.divisionId
                    , "cRutaAdminpaq" : this.newData.URLAdminPaq
                    , "cRutaContpaq" : this.newData.URLContPaq
                    , "cServerCompaq" : this.newData.URLServerComPaq
                }
                // console.log( "data:" , data ) ;
                //
                // console.log( "headers: " , this.headers ) ;
                // console.log( "newData: " , this.newData ) ;

                const response = await requests.post(
                    'empresas/new'
                    , data
                ) ;

                // console.log( "response: " , response ) ;

                if ( response.status === 200 ) {

                    notification = errorCodes.get( response.status ) ;
                    // console.log(notification)
                    this.$notify({
                        group: 'foo'
                        , title: `<h5>Message Code: ${notification.code}</h5>`
                        , text: `<h6>${notification.message}</h6>`
                        , type: `${notification.type}`
                        , duration: 10000
                    } ) ;
                    if ( response.status === 401 ) await this.$router.push( '/logout' ) ;
                    window.location.reload() ;

                } else {
                    let st ;
                    if ( response.data !== typeof number ) st = 401 ;
                    else st = response.status | response.data ;

                    notification = errorCodes.get( st ) ;
                    // console.log(notification)
                    this.$notify({
                        group: 'foo'
                        , title: `<h5>Error Code: ${notification.code}</h5>`
                        , text: `<h6>${notification.message}</h6>`
                        , type: `${notification.type}`
                        , duration: -1
                    } ) ;
                    if ( st === 401 ) await this.$router.push( '/logout' ) ;
                }

            }

        }

        , cancelInsert() {
            window.location.reload() ;
        }

        , async getDivisiones() {
            const divisiones = await requests.get(
                'divisiones/all'
            ) ;

            this.divisiones = divisiones.data ;
        }

    }

    , created() {
        this.firstDataLoad() ;
        this.getDivisiones() ;
    }

}

</script>

<style scoped>
    .red {
        background-color: red !important ;
    }

    a#btnNuevoRegistro:link,
    a#btnNuevoRegistro:hover,
    a#btnNuevoRegistro:visited {
        font-weight: normal ;
        color: lightblue ;
        padding: .5em ;
    }
</style>