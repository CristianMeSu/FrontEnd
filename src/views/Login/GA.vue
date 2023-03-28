<template>
    <div class="container login-container">

        <div class="row">
            <div class="col-md-6 login-form-1">
                <h3>
                    <Pic image='LOGO-FINAL-DEFINITIVO.png' />
                </h3>

                <form id="2FA" v-on:submit.prevent="">

                    <div class="form-group">
                        <input
                            name="code"
                            autocomplete="off"
                            type="text"
                            class="form-control"
                            placeholder="Google Authenticator Code *"
                            value=""
                            v-model="code"
                        />
                    </div>

                    <div class="form-group">
                        <button
                            type="button"
                            id="submit"
                            class="btnSubmit"
                            @click="verifyCode"
                        >Send 2FA code</button>
                    </div>

                </form>

            </div>

        </div>

    </div>
</template>

<script>
    import Pic from "@/components/Pic" ;
    import requests from "@/utils/requests";
    import md5 from 'js-md5' ;
    import errorCodes from "@/utils/errorCodes";

    export default {
        data() {
            return {
                code : ''
            }
        }

        , components: {
            Pic
        }

        , methods: {
            async verifyCode() {
                event.preventDefault() ;

                let notification ;

                if ( this.code.trim() === '' ) {
                    notification = errorCodes.get( 400 ) ;

                    this.$notify({
                        group: 'foo'
                        , title: `<h5>Error Code: ${notification.code}</h5>`
                        , text: `<h6>${notification.message}</h6>`
                        , type: `${notification.type}`
                        , duration: -1
                    });
                } else {

                    let dataSend = {
                        id: parseInt( localStorage.getItem( 'userId' ) )
                        , code: md5( this.code )
                    } ;

                    const headers = {
                        headers: {
                            'Authorization': `Bearer ${ localStorage.getItem( 'accessToken' ) }`,
                            'WWW-Authenticate': `Basic fm483fj98f3lfir793dfu98itoqkp5t8.fm483fj98f3lfir793dfu98itoqkp5t8.fm483fj98f3lfir793dfu98itoqkp5t8/fm483fj98f3lfir793dfu98itoqkp5t8`,
                            'Accept': 'application/json',
                            'Content-type': 'application/json'
                        }
                    }
                    // console.log(headers,dataSend) ;

                    const response = await requests.post(
                        '2FA-validator'
                        , dataSend
                        , headers
                    ) ;

                    // console.log( response ) ;

                    if ( response.status === 200 || response.data === 200 ) {
                        if ( response.data === 401  ) {
                            notification = errorCodes.get( response.data ) ;
                            this.$notify({
                                group: 'foo'
                                , title: `<h5>Error Code: ${notification.code}</h5>`
                                , text: `<h6>${notification.message}</h6>`
                                , type: `${notification.type}`
                                , duration: -1
                            } ) ;

                            await this.$router.push( '/logout' ) ;
                        }
                        localStorage.setItem( "2FA" , response.data ) ;

                        notification = errorCodes.get( response.status ) ;
                        this.$notify({
                            group: 'foo'
                            , title: `<h5>Message Code: ${notification.code}</h5>`
                            , text: `<h6>${notification.message}</h6>`
                            , type: `${notification.type}`
                            , duration: -1
                        } ) ;

                        // await this.$router.push( '/Dashboard' ) ;
                        window.location.href="/Dashboard" ;
                    } else {

                        notification = errorCodes.get( response.status ) ;
                        this.$notify({
                            group: 'foo'
                            , title: `<h5>Error Code: ${notification.code}</h5>`
                            , text: `<h6>${notification.message}</h6>`
                            , type: `${notification.type}`
                            , duration: -1
                        } ) ;
                    }

                    // console.log( response.data ) ;
                }

                return false ;
            }
        }

        , computed() {
            localStorage.removeItem( "2FA"  ) ;
        }


    }
</script>

<style scoped>

</style>