<template>
    <div>

        <Navbar />
        <NavbarSideBar />
        <RegistroDocs />
        <router-view></router-view>


    </div>
</template>

<script>
    // import errorCodes from '@/utils/errorCodes' ;
    import NavbarSideBar from '@/components/navbar/NavbarSidebar'
    import Navbar from '@/components/navbar/Navbar'
    import RegistroDocs from '@/views/registroDocs/RegistroDocs';

    export default {
        name: "Dashboard"

        , components: {
          Navbar
        , NavbarSideBar
        , RegistroDocs

         } ,
         data() {
          return {}
        }

        , methods: {

          async getUserData() {
            // console.log( localStorage ) ;
            // let u = localStorage.getItem( "username" ) ? localStorage.getItem( "username" ) : null ;
            // if ( u ) {
            //
            // }

          }

        }

        , created() {
          this.getUserData();
        }

      }
</script>

<style scoped>


</style>