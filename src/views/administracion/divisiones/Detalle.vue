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
                                {{ divisionName }}
                                <small v-if="! edit">
                                    |
                                    <a href="javascript:;" id="btnEditarCorporativo" @click="edit=true">
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
                                <li class="breadcrumb-item"><router-link to="/Divisiones">Divisiones</router-link></li>
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
                                                <th scope="row">Short Division Name:</th>
                                                <td>{{ shortDivisionName }}</td>
                                            </tr>

                                            <tr>
                                                <th scope="row">Status:</th>
                                                <td ><span :class="cssStatus">{{ dataStatus }}</span></td>
                                            </tr>

                                            <tr>
                                                <th scope="row">Corp:</th>
                                                <td >{{ corpName }}</td>
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
                                                    <th scope="row">Short Division Name:</th>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder="Short Division Name"
                                                            v-model="newData.shortDivisionName"
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

                                                <tr>
                                                    <th scope="row">Corp Assign to:</th>
                                                    <td>
                                                        <select
                                                            name=""
                                                            id=""
                                                            class="form-control"
                                                            v-model="newData.corpId"
                                                        >
                                                            <option
                                                                v-for = "corp in corps.data"
                                                                :value = "corp[ 0 ]"
                                                            >{{ corp[ 1 ] }}</option>
                                                        </select>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </form>

                                    <div class="right">
                                        <button class="btn btn-success" id="btnEditarCorporativo" @click="saveChanges"> Guardar cambios </button>
                                        <button class="btn btn-danger" id="btnEditarCorporativo" @click="cancelChanges"> Cancelar edición </button>
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
                                                    <th scope="row">Division Name:</th>
                                                    <td v-if="edit">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            placeholder="Short Corp Name"
                                                            v-model="newData.divisionName"
                                                        />
                                                    </td>
                                                    <td v-else>
                                                        {{ divisionName }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Date Last Modified</th>
                                                    <td>{{ dateCreated }}</td>
                                                </tr>

                                                <tr>
                                                    <th>Last User Who Modified</th>
                                                    <td>{{ createdBy }}</td>
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
            , divisionName : null
            , shortDivisionName : null
            , corpId : null
            , corpName : null
            , dataStatus : null
            , createdBy : null
            , dateCreated : null
            , chStatus : false
            , corps : null
            , newData: {
                divisionName : null
                , shortDivisionName : null
                , chStatus : null
                , corpId : null
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

            const headers = {
                headers: {
                    'Authorization': `Bearer ${ localStorage.getItem( 'accessToken' ) }`,
                    'WWW-Authenticate': `Basic fm483fj98f3lfir793dfu98itoqkp5t8.fm483fj98f3lfir793dfu98itoqkp5t8.fm483fj98f3lfir793dfu98itoqkp5t8/fm483fj98f3lfir793dfu98itoqkp5t8`,
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                }
            } ;

            const response = await requests.get(
                'divisiones/get/'+ this.getUrlQueryId()
                , headers
            ) ;

            // console.log( "response: " , response.data ) ;

            this.divisionName = response.data[ 1 ] ;
            this.shortDivisionName = response.data[ 2 ] ;
            this.corpId = response.data [ 3 ][ 0 ][ 0 ] ;
            this.corpName = response.data [ 3 ][ 0 ][ 1 ] ;
            this.chStatus = response.data [4][0].id === 1 ;
            this.dataStatus = response.data [ 4 ] !== null ? response.data [ 4 ][ 0 ].stName  : "" ;
            this.dateCreated = response.data [ 5 ] ;
            this.createdBy = response.data [ 6 ] !== null ? response.data [ 6 ] : "" ;

            this.newData.divisionName = this.divisionName ;
            this.newData.shortDivisionName = this.shortDivisionName ;
            this.newData.corpId = this.corpId ;
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

            if ( this.newData.shortDivisionName.trim() === '' | this.newData.divisionName.trim() === '' ) {
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

                const headers = {
                    headers: {
                        'Authorization': `Bearer ${ localStorage.getItem( 'accessToken' ) }`,
                        'WWW-Authenticate': `Basic fm483fj98f3lfir793dfu98itoqkp5t8.fm483fj98f3lfir793dfu98itoqkp5t8.fm483fj98f3lfir793dfu98itoqkp5t8/fm483fj98f3lfir793dfu98itoqkp5t8`,
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    }
                }

                let st = this.newData.chStatus === true ? 1 : 2 ;

                const data = {
                    "id" : this.getUrlQueryId()
                    , "divisionName" : this.newData.divisionName
                    , "divisionClave" : this.newData.shortDivisionName
                    , "dataStatus" : st
                    , "corpId" : this.newData.corpId
                }

                // console.log( "data: " , data ) ;

                const response = await requests.put(
                    'divisiones/update'
                    , data
                    , headers
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