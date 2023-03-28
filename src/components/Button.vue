<script>
    export default {
        name:'Button',
        props:{
            type:{
                type:String,
                Default:'primary',
            },
            rounded:{
                type:Boolean,
                default:false,
            },
            icon:{
                type:String,
                default:''
            },
            label:{
                type:String,
                default:''
            },
            loading:{
                type:Boolean,
                default:false
            },
            onClick:{
                type:Function,
                default:function(e){
                    console.log(e)
                }
            }
        }
    }
</script>

<template>
    <button 
        v-bind:class='rounded ? "btn btn-block rounded-pill btn-"+type : "btn btn-block btn-"+type'
        v-on:click='onClick'
        :disabled='loading'
    >
        <i v-if='icon' :class='loading ? "spinner-border" : icon' :style='loading ? "width:24px; height:24px; font-size:16px;" : ""'/>
        <span v-if='label'>{{loading ? "loading" : label}}</span>
    </button>
</template>