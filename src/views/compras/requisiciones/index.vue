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
                            <h1 class="m-0">Listado de Requisiciones</h1>
                        </div><!-- /.col -->
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><router-link to="/Dashboard">Dashboard</router-link></li>
                                <li class="breadcrumb-item active">Requisiciones</li>
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

                            <table id="requisicionesList" class="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Fecha</th>
                                        <th>Fecha Requerida</th>
                                        <th>Status</th>
                                        <th>Proyecto</th>
                                        <th>Residente</th>
                                        <th>Descripcion</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody id="requisicionesContent"></tbody>

                                <tfoot>
                                    <tr>
                                        <th></th>
                                        <th>Fecha</th>
                                        <th>Fecha Requerida</th>
                                        <th>Status</th>
                                        <th>Proyecto</th>
                                        <th>Residente</th>
                                        <th>Descripcion</th>
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

        <!-- Large modal -->
<!--        <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>-->
<!--        <button type="button" class="btn btn-primary details" >GET ID selected</button>-->

        <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="content-wrapper">
                        <button
                            @click="x"
                            class="btn btn-dark">Cerrar</button>
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

    let id ;

    export default {
        name: "index"

        , components: {
            Navbar
            , NavbarSideBar
        }

        , data() {
            return {

            }
        }

        , props: {
            myId: id
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
                    'compras/requisiciones/all'
                    , headers
                ) ;

                if ( response.data === 200 || response.status === 200 ) {

                    let tbody = document.getElementById("requisicionesContent" ) ;
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

                    $ ( '#requisicionesList' ).DataTable( {
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
                                    return data ;
                                }
                            }

                            , {
                                data : 5
                                , render: function( data ) {
                                    return data ;
                                }
                            }

                            , {
                                data : 6
                                , render: function( data ) {
                                    return data ;
                                }
                            }

                            , {
                                data : 7
                                , render: function( data ) {
                                    return `
                                        <a href='/Requisiciones/Detalle/${data}' class="details" data-id='${ data }' >
                                            <i class='fas fa-folder-open'></i>
                                        </a>
                                    ` ;
                                    //data-toggle='modal' data-target='.bd-example-modal-lg'
                                }
                            }

                            , {
                                data : 8
                                , render: function() {
                                    return null ;
                                }
                            }

                        ]
                        , "order": [ [ 0 , 'desc' ] ]
                    } ) ;

                } else {

                    console.log("RESPONSE",response) ;

                    let st ;
                    if ( response.data != typeof number ) st = 401 ;
                        else st = response.status | response.data ;

                    notification = errorCodes.get( st ) ;
                    console.log(notification)
                    this.$notify({
                        group: 'foo'
                        , title: `<h5>Error Code: ${notification.code}</h5>`
                        , text: `<h6>${notification.message}</h6>`
                        , type: `${notification.type}`
                        , duration: -1
                    } ) ;

                }

            }

            , x() {
                alert( this.myId ) ;
            }

        }

        , created() {
            this.firstDataLoad() ;
        }
    }

    //
    // $ ( "body" ).on( "click" , "a.details" , function() {
    //     id = $ ( this ).attr( "data-id" ) ;
    //     console.log( id ) ;
    // } ) ;

</script>

<style scoped>

</style>