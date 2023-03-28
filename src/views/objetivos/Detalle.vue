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
                <p>{{ userName }} {{userLastName}}</p>
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
                <li class="breadcrumb-item"><router-link to="/objetivos">Objetivos</router-link></li>
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
                      <th scope="row">Name:</th>
                      <td>
                        {{ newData.userName }}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Last Name:</th>
                      <td>
                        {{ newData.userLastName }}
                      </td>
                    </tr>

                    <tr>
                      <th scope="row">Status:</th>
                      <td ><span :class="cssStatus">{{ dataStatus }}</span></td>
                    </tr>

                    <tr>
                      <th scope="row">userLink:</th>
                      <td >{{ userLink }}</td>
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
                        <th scope="row">Name:</th>
                        <td v-if="edit">
                          {{ newData.userName }}
                        </td>
                      </tr>
                      <tr>
                      <tr>
                        <th scope="row">Last Name:</th>
                        <td v-if="edit">
                        {{ newData.userLastName }}
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
                        <th scope="row">Link assign to:</th>
                        <td v-if="edit">
                          <input
                              type="text"
                              class="form-control"
                              placeholder="userLink"
                              v-model="newData.userLink"
                          />
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
      , userName : null
      , userLastName : null
      , userId : null
      , userLink : null
      , dataStatus : null
      , createdBy : null
      , dateLastModified : null
      , chStatus : false

      , newData: {
        chStatus : null
        , dataStatus : null
        , userLink : null
        , userName : null
        , userLastname : null
        , createdBy: null
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
          'objetivos/get/'+ this.getUrlQueryId()
          , headers
      ) ;

      //console.log( "response: " , response.data ) ;

      this.userName = response.data[ 1 ] ;
      this.userlastName = response.data[ 2 ] ;
      this.userLink = response.data[ 3 ] ;
      this.userId = response.data[ 4 ] ;
      this.dateLastModified = response.data [ 5 ] ;
      this.createdBy = response.data [ 6 ][0] !== null ? response.data [ 6 ][0].username : "" ;
      if (response.data [ 7 ]=== 2){
        this.dataStatus="Deactivated";
      }
      else {
        this.dataStatus="Active";
      }

      this.chStatus = response.data [7] === 1 ;

      this.newData.userName = this.userName ;
      this.newData.userLastName = this.userlastName ;
      this.newData.userLink = this.userLink ;
      this.newData.chStatus = this.chStatus ;
      this.newData.createdbye=this.createdBy;


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

      if ( this.newData.userLink.trim() === '' | this.newData.userLink.trim() === '' ) {
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

        // console.log( this.newData.lastName ) ;

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
            "id" : this.getUrlQueryId(),
            "idUser": (this.userId).toString()
            , "dataStatus": st
            , "userLink": this.newData.userLink

          }

          //console.log( "data: " , data ) ;
        if (this.userLink === "")
        {
          const response = await requests.post(
              'objetivos/new'
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

          }
          else {
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
       else {
          const response = await requests.put(
              'objetivos/update/'+this.userId
              , data
              , headers
          ) ;

          //console.log( "response: " , response.status ) ;
          //console.log( "data: " , data ) ;

          if ( response.status === 200 || response.status === 201 ) {
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
            // if ( st === 401 ) await this.$router.push( '/logout' ) ;
          }
        }



      }

    }

    , cancelChanges() {
      this.edit = false ;
      this.getRecordData() ;
    }

    , async getObjetivos() {
      const objetivos = await requests.get(
          'objetivos/all'
      ) ;

      this.objetivos = objetivos.data ;
    }

  }

  , created() {
    this.getRecordData() ;
    this.getObjetivos() ;
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

</style>