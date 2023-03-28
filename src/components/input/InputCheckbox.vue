<script>
    export default {
        name:'InputCheckbox',
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
            checkboxs:{
                type:Array,
                default:function(){
                    return([
                        {value:1,label:'checkbox 1'},
                        {value:2,label:'checkbox 2'},
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
            v-for='(checkbox,keyCheckbox) in checkboxs' 
            :key='keyCheckbox' 
            :class='inline ? "custom-control custom-checkbox custom-control-inline" : "custom-control custom-checkbox"'
        >
            <input 
                type='checkbox' 
                class='custom-control-input'
                :id='id+"-"+keyCheckbox' 
                :name='name'
                :required='required'
                :disabled='disabled'
                :value='checkbox.value'
                :data-option='label'
                :checked='checkbox.checked'
                v-on:change='onChange'
                 
            >
            <label class='custom-control-label' :for='id+"-"+keyCheckbox'>{{checkbox.label}}</label>
            <div v-if='msgError && keyCheckbox == checkboxs.length' class='invalid-feedback'>{{msgError}}</div>
        </div>
    </div>
</template>