<script>
    export default {
        name:'InputPassword',
        props:{
            id:{
                type:String,
                default:'input-password',
            },
            name:{
                type:String,
                defaul:'input_password'
            },
            label:{
                type:String,
                defaul:''
            },
            placeholder:{
                type:String,
                defaul:'Input password'
            },
            required:{
                type:Boolean,
                default:false,
            },
            disabled:{
                type:Boolean,
                default:false,
            },
            value:{
                type:String,
                defaul:''
            },
            msgError:{
                type:String,
                defaul:''
            },
            onChange:{
                type:Function,
                default:function(){}
            }
        }
    }
</script>

<template>
    <div class='form-group'>
        <label>{{label}}</label>
        <input 
            type='password' 
            class='form-control'
            :id='id'
            :name='name'
            :placeholder='placeholder'
            :required='required'
            :disabled='disabled'
            :value='value'
            v-on:change='onChange'
        />
        <div v-if='msgError' class='invalid-feedback'>{{msgError}}</div>
    </div>
</template>