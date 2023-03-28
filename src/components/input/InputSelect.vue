<script>
    export default {
        name:'InputSelect',
        props:{
            id:{
                type:String,
                default:'input-select',
            },
            name:{
                type:String,
                defaul:'input_select'
            },
            label:{
                type:String,
                defaul:''
            },
            placeholder:{
                type:String,
                default:'Select list',
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
                default:''
            },
            options:{
                type:Array,
                default:function(){
                    return([
                        {value:1,label:'opcion 1'},
                        {value:2,label:'opcion 2'},
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
        },
        methods:{
            changeOption:function(){
                const select = document.querySelector('#'+this.id)

                select.dataset.option = select.options[select.selectedIndex].innerText
                
                if (select.id == this.id)
                {
                    if (select.selectedIndex == 0)
                    {
                        select.classList.add('select-placeholder')
                    }
                    else
                    {
                        select.classList.remove('select-placeholder')
                        
                    }
                }
            }
        },
        mounted:function(){
            this.changeOption()
        }
    }
</script>

<template>
    <div class='form-group'>
        <label>{{label}}</label>
        <select 
            class='form-control select-placeholder' 
            :id='id' 
            :name='name'
            :required='required'
            :disabled='disabled'
            :value='value'
            v-on:change='(e) => {changeOption(e);onChange(e);}'
        >
            <option value='' selected>{{placeholder}}</option>
            <option 
                v-for='(option,keyOption) in options' 
                :key='keyOption' 
                :value='option.value'
            >
                {{option.label}}
            </option>
        </select>
        <div v-if='msgError' class='invalid-feedback'>{{msgError}}</div>
    </div>
</template>