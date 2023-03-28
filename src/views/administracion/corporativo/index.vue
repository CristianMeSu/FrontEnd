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
                                Listado de Corporativos |
                                <small>
                                    <span class="right badge badge-secondary">
                                        <a href="#" id="btnNuevoCorporativo" data-toggle="modal" data-target=".bd-example-modal-lg">Nuevo</a>
                                    </span>
                                </small>
                            </h1>
                        </div><!-- /.col -->
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><router-link to="/Dashboard">Dashboard</router-link></li>
                                <li class="breadcrumb-item active">
                                    Corporativos
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

                            <table id="corporativoList" class="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Short Name</th>
                                        <th>Name</th>
                                        <th>Date Last Modified</th>
                                        <th>Last User Who Modified</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody id="corporativoContent"></tbody>

                                <tfoot>
                                    <tr>
                                        <th></th>
                                        <th>Short Name</th>
                                        <th>Name</th>
                                        <th>Date Last Modified</th>
                                        <th>Last User Who Modified</th>
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
                        <h5 class="modal-title">Nuevo Corporativo</h5>
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
                                                    <th scope="row">Corp Name:</th>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder="Corp Name"
                                                            v-model="newDataCorp.corpName"
                                                        />
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th scope="row">Short Corp Name:</th>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder="Short Corp Name"
                                                            v-model="newDataCorp.shortCorpName"
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
                        <button type="button" class="btn btn-success" @click="saveNewCorpData">Save changes</button>
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
            newDataCorp : {
                corpName : null
                , shortCorpName : null
            }
        }
    }

    , methods: {

        async firstDataLoad() {
            // console.log( localStorage.getItem( "accessToken" ) ) ;
            let notification ;
            const headers = {
                headers: {
                    'Authorization': `Bearer ${ localStorage.getItem( 'accessToken' ) }`,
                    'WWW-Authenticate': `Basic fm483fj98f3lfir793dfu98itoqkp5t8.fm483fj98f3lfir793dfu98itoqkp5t8.fm483fj98f3lfir793dfu98itoqkp5t8/fm483fj98f3lfir793dfu98itoqkp5t8`,
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                }
            }

            const response = await requests.get(
                'corp/'
                , headers
            ) ;

            if ( response.data === 200 || response.status === 200 ) {

                let tbody = document.getElementById("corporativoContent" ) ;
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

                $ ( '#corporativoList' ).DataTable( {
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
                                return data ;
                            }
                        }

                        , {
                            data : 4
                            , render: function( data ) {
                                return data[0] ? data[0].username : "" ;
                            }
                        }

                        , {
                            data : 5
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
                            data : 6
                            , render: function( data ) {
                                return `
                                    <a href='/Corporativo/Detalle/${data}' @click="x(${data})" class="details" >
                                        <i class='fas fa-folder-open'></i>
                                    </a>
                                ` ;
                            }
                        }



                    ]
                    , "order": [ [ 1 , 'asc' ] ]
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

        , async saveNewCorpData() {

            let notification ;

            if ( this.newDataCorp.corpName.trim() === '' || this.newDataCorp.shortCorpName.trim() === '' ) {
                console.log("aqui")
                notification = errorCodes.get( 400 ) ;

                this.$notify({
                    group: 'foo'
                    , title: `<h4>Error Code: ${ notification.code }</h4>`
                    , text: `<h5>${ notification.message }</h5>
                            <br />
                            <h6>Short Corp Name should not left blank.</h6>
                        `
                    , type: `${ notification.type }`
                    , duration: 5000
                } ) ;
            } else {
                const headers = {
                    headers: {
                        'Authorization': `Bearer ${ localStorage.getItem( 'accessToken' ) }`,
                        'WWW-Authenticate': `Basic fm483fj98f3lfir793dfu98itoqkp5t8.fm483fj98f3lfir793dfu98itoqkp5t8.fm483fj98f3lfir793dfu98itoqkp5t8/fm483fj98f3lfir793dfu98itoqkp5t8`,
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    }
                }

                const data = {
                    "corpName" : this.newDataCorp.corpName
                    , "shortCorpName" : this.newDataCorp.shortCorpName
                }

                const response = await requests.post(
                    'corp/new-corp'
                    , data
                    , headers
                ) ;

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

    }

    , created() {
        this.firstDataLoad() ;
    }

}

</script>

<style scoped>
    .red {
        background-color: red !important ;
    }

    a#btnNuevoCorporativo:link,
    a#btnNuevoCorporativo:hover,
    a#btnNuevoCorporativo:visited {
        font-weight: normal ;
        color: lightblue ;
        padding: .5em ;
    }
</style>