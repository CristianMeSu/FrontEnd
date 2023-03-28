<script>
    import Vue from 'vue' 
    export default Vue.extend({
        name:'Icon',
        props:{
            icon:{
                type:String,
                default:'fas fa-plus'
            },
            size:{
                type:Number,
                default:14,
            },
            onClick:{
                type:Function,
                default:function(){}
            },
        }
    })
</script>

<template>
    <i v-on:click='onClick' :class='icon' :style='"font-size:"+size+"px"'/>
</template>