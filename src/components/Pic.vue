<template>

    <img
        :src='getImg( image )'
        :class='getClasses( classes )'
    />

</template>

<script>
export default {
    name:'Pic'

    , props: {
        image: {
            type:String
            , default:''
        }

        , classes: {
            type: String
            , default: 'img-fluid'
        }
    }

    , methods: {
        getImg:function( name ) {
            return require( '@/assets/images/'+ name ) ;
        }

        , getClasses( classes ) {
            return classes
        }
    }

}
</script>
