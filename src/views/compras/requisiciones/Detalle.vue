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
                                <li class="breadcrumb-item"><router-link to="/Requisiciones">Requisiciones</router-link></li>
                                <li class="breadcrumb-item active">Detalle de registro # </li>
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
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    {{ getRecordData() }}
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

export default {
    name: "Details"

    , components: {
        Navbar
        , NavbarSideBar
    }

    , data() {
        return {

        }


    }

    , methods: {
        getUrlQueryId() {
            return this.$route.params.id ;
        }

        , async getRecordData() {
            let notification ;
            const headers = {
                headers: {
                    'Authorization': `Bearer ${ localStorage.getItem( 'accessToken' ) }`,
                    'WWW-Authenticate': `Basic fm483fj98f3lfir793dfu98itoqkp5t8.fm483fj98f3lfir793dfu98itoqkp5t8.fm483fj98f3lfir793dfu98itoqkp5t8/fm483fj98f3lfir793dfu98itoqkp5t8`,
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                }
            } ;

            const response = await requests.get(
                'compras/requisiciones/get/'+ this.getUrlQueryId()
                , headers
            ) ;

            console.log( "response: " , response.data.data ) ;

            return response ;
        }

    }

    , created() {
        this.getUrlQueryId() ;
    }
}
</script>

<style scoped>

</style>