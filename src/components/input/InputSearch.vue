<script>
    import Vue from 'vue'
    export default Vue.extend({
        name:'InputSearch',
        props:{
            required:{
                type:Boolean,
                default:false,
            },
            onClick:{
                type:Function,
                default:function(e){
                    console.log("InputSearch: ",e)
                }
            }
        }
    })
</script>

<template>
    <div class='form-group'>
        <input 
            type='search' 
            class='form-control' 
            :placeholder="$t('lang.app.misc.search')"
            v-bind:required='required'
        />
        <i class='fa fa-search' v-on:click='onClick'/>
    </div>
</template>
