<template>
    <div class='container-fluid'>
        <div class="container login-container">
            <div class="row">
                <div class="col-md-6 login-form-1">
                    <h3>
                        <Pic image='LOGO-FINAL-DEFINITIVO.png' />
                    </h3>

                    <form id="loginForm" action="TwoFA">

                        <div class="form-group">
                            <input
                                name="username"
                                type="text"
                                class="form-control"
                                placeholder="Your Username *"
                                value=""
                                v-model="username"
                            />
                        </div>

                        <div class="form-group">
                            <input
                                name="password"
                                type="password"
                                class="form-control"
                                placeholder="Your Password *"
                                value=""
                                v-model="password"
                            />
                        </div>

                        <div class="form-group">
                            <button
                                type="button"
                                id="submit"
                                class="btnSubmit"
                                @click="verifyLoginData"
                            >Login</button>
                        </div>

                    </form>
                </div>

            </div>
        </div>

    </div>
</template>


<script>
    import requests from "@/utils/requests" ;
    import Pic from '@/components/Pic' ;
    import errorCodes from '@/utils/errorCodes' ;

    export default {

        data() {
            return {
                showSuccess : false
                , eLogin : false
                , username : ''
                , password : ''
            }
        }

        , components: {
            Pic
        }

        , methods: {
            hideAlerts() {
                this.showSuccess = false ;
                this.eLogin = false ;
            }

            , async verifyLoginData() {
                let notification ;

                if ( this.username.trim() === '' || this.password.trim() === '' ) {
                    notification = errorCodes.get( 400 ) ;

                    this.$notify({
                        group: 'foo'
                        , title: `<h5>Error Code: ${notification.code}</h5>`
                        , text: `<h6>${notification.message}</h6>`
                        , type: `${notification.type}`
                        , duration: -1
                    });
                } else {

                    const loginData = {
                        username : this.username
                        , password : this.password
                    } ;

                    const headers = {
                        headers: {
                            'Authorization': `Bearer ${loginData.username}`,
                            'WWW-Authenticate': `Basic ${loginData.username}.fm483fj98f3lfir793dfu98itoqkp5t8`,
                            'Accept': 'application/json',
                            'Content-type': 'application/json'
                        }
                    }

                    const response = await requests.post(
                        'auth/signin'
                        , loginData
                        , headers
                    ) ;

                    notification = errorCodes.get( response.status ) ;
                    // console.log( response ) ;

                    if ( response.data.accessToken !== undefined ) {
                        localStorage.setItem( 'accessToken' , response.data.accessToken ) ;
                        localStorage.setItem( 'userId' , response.data.id ) ;
                        localStorage.setItem( 'username' , response.data.username ) ;
                        localStorage.setItem( 'roles' , response.data.roles ) ;

                         // console.log( "accessToken: " , localStorage.getItem( 'accessToken' ) ) ;
                         // console.log( "UserId: " , localStorage.getItem( 'userId' ) ) ;
                         // console.log( "Username: " , localStorage.getItem( 'username' ) ) ;
                         // console.log( "Roles: " , localStorage.getItem( 'roles' ) ) ;

                        this.$notify({
                            group: 'foo'
                            , title: `<h5>Message Code: ${notification.code}</h5>`
                            , text: `<h6>${notification.message}</h6>`
                            , type: `${notification.type}`
                            , duration: 5000
                        } ) ;

                        await this.$router.push( '/GA' ) ;
                    } else {
                        // console.log( "error" ) ;

                        this.$notify({
                            group: 'foo'
                            , title: `<h5>Error Code: ${notification.code}</h5>`
                            , text: `<h6>${notification.message}</h6>`
                            , type: `${notification.type}`
                            , duration: -1
                        } ) ;
                    }

                    // console.log( "response: " , response ) ;
                }

                return false ;
            }
        }


    }
</script>


<style scoped>

</style>