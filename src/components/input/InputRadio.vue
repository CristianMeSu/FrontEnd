<script>
    export default {
        name:'InputRadio',
        props:{
            id:{
                type:String,
                default:'radio'
            },
            name:{
                type:String,
                default:'radio'
            },
            label:{
                type:String,
                default:''
            },
            inline:{
                type:Boolean,
                default:false
            },
            required:{
                type:Boolean,
                default:false
            },
            disabled:{
                type:Boolean,
                default:false
            },
            radios:{
                type:Array,
                default:function(){
                    return([
                        {value:1,label:'radio 1'},
                        {value:2,label:'radio 2'},
                    ])
                }
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
    <div>
        <label>{{label}}</label>
        <br/>
        <div 
            v-for='(radio,keyRadio) in radios' 
            :key='keyRadio' 
            :class='inline ? "custom-control custom-radio custom-control-inline" : "custom-control custom-radio"'
        >
            <input 
                type='radio' 
                class='custom-control-input'
                :id='id+"-"+keyRadio' 
                :name='name'
                :required='required'
                :disabled='disabled'
                :value='radio.value'
                v-on:change='onChange'
            >
            <label class='custom-control-label' :for='id+"-"+keyRadio'>{{radio.label}}</label>
            <div v-if='msgError && keyRadio == radios.length' class='invalid-feedback'>{{msgError}}</div>
        </div>
    </div>
</template>