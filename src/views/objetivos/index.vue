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
                | Registro de Objetivos Anuales |
                <small>

                </small>
              </h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><router-link to="/Dashboard">Dashboard</router-link></li>
                <li class="breadcrumb-item active">
                  Objetivos
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

              <table id="objetivosList" class="table table-bordered table-hover">
                <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Last Name</th>
                  <th>User Link</th>
                  <th>Last Modified</th>
                  <th>User Who Modified</th>
                  <th>Status</th>
                  <th></th>
                  <th></th>
                </tr>
                </thead>

                <tbody id="objetivosContent"></tbody>

                <tfoot>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Last Name</th>
                  <th>User Link</th>
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
      objetivos : {}

      , newData : {
        userName : null
        ,lastName : null
        , userLink : null


      }
    }
  }

  , methods: {

    async firstDataLoad() {
      // console.log( localStorage.getItem( "accessToken" ) ) ;
      let notification ;

      const response = await requests.get(
          'objetivos/'
      ) ;

      // console.log("response: ",response.data.data[0][5][0].username)

      if ( response.data === 200 || response.status === 200 ) {

        let tbody = document.getElementById("objetivosContent" ) ;
        let items = response.data.data;

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

        $ ( '#objetivosList' ).DataTable( {
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
                return data;
              }
            }

            , {
              data : 2
              , render: function( data ) {
                return data;
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
                return data !== null ? data : "" ;
              }
            }

            ,
            {
              data : 5
              , render: function( data ) {
                return data ? data[0].username : "" ;
              }
            }

            , {
              data : 6
              , render: function( data ) {
               // console.log(data)
                let cClass, cIcon, a ;
                if ( data === 2 ) {
                  cClass = 'stDeactivated' ;
                  cIcon = '<i class="fas fa-ban"></i>' ;
                  a='No Registrado'
                } else {
                  cClass = 'stActive' ;
                  cIcon = '<i class="fas fa-check"></i>' ;
                  a='Regsitrado'
                }

                let html = `<span class="${cClass}" title="${a}">${cIcon}</span>` ;

                return data ? html : "" ;
              }
            }

            , {
              data : 7
              , render: function( data ) {
                return `
                                    <a href='/Objetivos/Detalle/${data}' @click="x(${data})" class="details" >
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
          ! this.newData.userName
          || this.newData.userName.trim() === ''

          || ! this.newData.lastName
          || this.newData.lastName.trim() === ''

          || ! this.newData.userLink
          || this.newData.userLink <= 0

          || ! this.newData.userId
          || this.newData.userId <= 0
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
          "userName" : this.newData.userName
          , "lastName" : this.newData.lastName
          , "userLink" : this.newData.userLink
          , "userId" : this.newData.userId
        }
        // console.log( "data:" , data ) ;
        //
        // console.log( "headers: " , this.headers ) ;
        // console.log( "newData: " , this.newData ) ;

        const response = await requests.post(
            'objetivos/new'
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

    , async getObjetivos() {
      const objetivos = await requests.get(
          'objetivos/all'
      ) ;

      this.objetivos = objetivos.data ;
    }

  }

  , created() {
    this.firstDataLoad() ;
    this.getObjetivos() ;
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