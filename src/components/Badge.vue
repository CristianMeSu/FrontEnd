<script>
    export default {
        name:'Badge',
        props:{
            type:{
                type:String,
                Default:'primary',
            },
            rounded:{
                type:Boolean,
                default:false,
            },
            filter:{
                type:Boolean,
                default:false,
            },
            label:{
                type:String,
                default:'Badge',
            },
            onClick:{
                type:Function,
                default:function(){}
            }
        }
    }
</script>

<template>
    <span 
        v-bind:class='rounded ? "badge rounded-pill badge-"+type : "badge badge-"+type' 
        v-bind:style='filter ? "padding:4px !important;" : ""'
    >
        <i v-if='filter' v-on:click='onClick' class='fas fa-times-circle text-white mr-2'/>
        <span>{{label}}</span>
    </span>
</template>