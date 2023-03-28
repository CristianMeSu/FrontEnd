<script>
    export default {
        name:'Status',
        props:{
            status:{
                type:Number,
                default:0,
            },
            click:{
                type:Function,
                default:function(){console.log('click')}
            }
        },
    }
</script>

<template>
    <span v-on:click='(e) => click(e)' v-bind:class='status == 0 ? "badge badge-danger" : "badge badge-success"'>
        {{
            status == 0
            ?
                $t('lang.app.misc.inactive')
            :
                $t('lang.app.misc.active')
        }}
    </span>
</template>
