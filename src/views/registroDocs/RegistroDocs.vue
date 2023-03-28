<template>
  <div v-if="mostrar" style="border-image: initial; border: 1px solid black;" class="col-sm-4 offset-3" >
      <br>
      <center>    <h3  class="m-0">| Registro Pendiente | </h3></center>
      <br>

      <center><h5  >{{continuar}}</h5></center>
      <center><h5 >{{end}}</h5></center>
      <center>

      </center>
      <center>
        <h4>

      <small class="col-sm-2"><p></p>
        <span class="btn btn-info">
                      <a  :href="userLink" id="btnNuevoRegistro"  target="_blank"  >Continuar</a>
                  </span>
      </small>
      <small class="col-sm-2 offset-1">
        <span class="btn btn-success">
                      <a href="#" id="btnFinalizarRegistro" @click="saveChanges" class="col-sm-2 "  >Finalizar</a>
                  </span>

      </small></h4>
      </center>
      <br>


  </div>

</template>

<script>
import requests from "@/utils/requests";
import errorCodes from "@/utils/errorCodes";
export default {
  name: "registroDocs"
  ,data(){

    return{

      dataStatus : null,
          userLink : null,
          createdBy : null,
          dateLastModified:null,
          chStatus:null,
          mostrar: true,
          continuar: 'Para continuar con el registro porfavor de click en el botón continuar',
          end:'Para guardar el registro pulse el botón finalizar',
      newData: {
        userLink : null
        , dataStatus : null
      }
    }
  }
  ,beforeMount() {
    this.getRecordData()
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

      let i= localStorage.getItem( 'userId' )
      const response = await requests.get(
          'objetivos/get/'+i
          , headers,
      //console.log(localStorage.getItem( 'userId' ))
      ) ;



      this.userLink = response.data[3] ;
      this.userId = response.data[ 4 ] ;
      this.dataStatus= response.data[7];
      this.chStatus = response.data [7] === 1 ;

      this.newData.userLink=this.userLink;
      this.newData.dataStatus=this.dataStatus;
      let a= this.userLink
      //console.log(this.dataStatus)
      //console.log(a)

      if (this.dataStatus===1 || a===""){
        this.mostrar=false;
      }
      else {
        this.mostrar=true;
      }
      //console.log(this.mostrar)
      return response.data ;
    }


    , async saveChanges() {

        this.newData.dataStatus=1

      let notification ;
      const headers = {
          headers: {
            'Authorization': `Bearer ${ localStorage.getItem( 'accessToken' ) }`,
            'WWW-Authenticate': `Basic fm483fj98f3lfir793dfu98itoqkp5t8.fm483fj98f3lfir793dfu98itoqkp5t8.fm483fj98f3lfir793dfu98itoqkp5t8/fm483fj98f3lfir793dfu98itoqkp5t8`,
            'Accept': 'application/json',
            'Content-type': 'application/json',
          }
        }
        let st
        let i= localStorage.getItem( 'userId' )
        const data = {

          "id" : i,
          "idUser": i
          , "dataStatus": this.newData.dataStatus
          , "userLink": this.userLink
        }
       // console.log(data);
          const response = await requests.put(
              'objetivos/update/'+this.userId
              , data
              , headers
          ) ;
          //console.log( "response: " , response ) ;
          if ( response.status === 200 || response.status === 201) {
            await this.getRecordData();

            notification = errorCodes.get(response.status);
            // console.log(notification)
            this.$notify({
              group: 'foo'
              , title: `<h5>Message Code: ${notification.code}</h5>`
              , text: `<h6>${notification.message}</h6>`
              , type: `${notification.type}`
              , duration: 10000
            });
            if (st === 401) await this.$router.push('/logout');

          }}

    , async getObjetivos() {
        const objetivos = await requests.get(
            'objetivos/all'
        ) ;

        this.objetivos = objetivos.data ;
      }

    }



  , mounted() {
    if ( localStorage.getItem( "roles" )  === "ROLE_IT" ) this.IT = true ;
  }


}

</script>

<style scoped>
#btnNuevoRegistro {
  A: hover;
  color: #ffffff;
  font-family: "Source Sans Pro";
  font-size: 17.28px;
  text-decoration: none;
}
#btnFinalizarRegistro{
  A: hover;
  color: #ffffff;
  font-family: "Source Sans Pro";
  font-size: 17.28px;
  text-decoration: none;
}
</style>