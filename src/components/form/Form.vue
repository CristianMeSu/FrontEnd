<script>
    import InputText from '../input/InputText'
    import InputNumber from '../input/InputNumber'
    import InputPassword from '../input/InputPassword'
    import InputDate from '../input/InputDate'
    import InputSelect from '../input/InputSelect'
    import InputRadio from '../input/InputRadio'
    import InputCheckbox from '../input/InputCheckbox'

    export default {
        name:'Form',
        components:{
            InputText,
            InputNumber,
            InputPassword,
            InputDate,
            InputSelect,
            InputRadio,
            InputCheckbox,
        },
        props:{
            id:{
                type:String,
                default:'form'
            },
            form:{
                type:Array,
                default:function(){
                    return([
                        {row:[
                            {size:'col-12 col-md-4',type:'text',name:'input1',label:'input 1',placeholder:'input 1'},
                            {size:'col-12 col-md-4',type:'number',name:'input2',label:'input 2',placeholder:'input 2'},
                        ]}
                    ])
                }
            }
        },
        methods:{
            getDataForm:function(){
                const form = document.querySelector('form[id='+this.id+']')
                const inputs = form.querySelectorAll('input,select,textarea')
                const dataInputs = {}
                let valueRadio = ''
                let selectCheckbox = []
                let error = false

                if (form.id == this.id)
                {
                    for (const input of inputs) {
                        dataInputs[input.name] = input.value

                        if(input.required == true && input.validity.valueMissing == true)
                        {
                            form.classList.add('was-validated')

                            if (input.type == 'radio')
                            {
                                if (input.checked == true)
                                {
                                    valueRadio = input.value
                                }

                                dataInputs[input.name] = valueRadio
                            }
                            else if (input.type == 'checkbox')
                            {
                                let valueCheckbox = []

                                if (input.checked == true)
                                {
                                    selectCheckbox.push({[input.name]:{value:input.value,option:input.dataset.option}})
                                }

                                for (let index = 0; index < selectCheckbox.length; index++) {
                                    if (selectCheckbox[index][input.name] != undefined)
                                    {
                                        valueCheckbox.push(selectCheckbox[index][input.name])
                                    }
                                }

                                dataInputs[input.name] = valueCheckbox
                            }
                            
                            error = true
                        }
                        else
                        {
                            if (input.type == 'radio')
                            {
                                if (input.checked == true)
                                {
                                    valueRadio = input.value
                                }

                                dataInputs[input.name] = valueRadio
                            }
                            else if (input.type == 'checkbox')
                            {
                                let valueCheckbox = []

                                if (input.checked == true)
                                {
                                    selectCheckbox.push({[input.name]:{value:input.value,option:input.dataset.option}})
                                }

                                for (let index = 0; index < selectCheckbox.length; index++) {
                                    if (selectCheckbox[index][input.name] != undefined)
                                    {
                                        valueCheckbox.push(selectCheckbox[index][input.name])
                                    }
                                }

                                dataInputs[input.name] = valueCheckbox
                            }
                        }
                    }

                    return({error:error,data:dataInputs})
                }
            },
            clearDataForm:function(){
                const form = document.querySelector('form[id='+this.id+']')
                const inputs = form.querySelectorAll('input,select,textarea')

                form.classList.remove('was-validated')

                for (const input of inputs) {
                    input.value = ''

                    if (input.type == 'checkbox')
                    {
                        input.checked = false
                        input.defaultChecked = false
                    }
                    else if (input.type == 'radio')
                    {
                        input.checked = false
                        input.defaultChecked = false
                    }
                }
            }
        }
    }
</script>

<template>
    <form :id='id' v-on:submit='(e) => {e.preventDefault()}'>
        <div 
            v-for='(row,keyRow) in form' 
            :key='keyRow'
            class='form-row'
        >
            <div
                v-for='(input,keyInput) in row.row' 
                :key='keyInput'
                :class='input.hidden == true ? input.size+" d-none" : input.size'
            >
                <InputText 
                    v-if='input.type == "text"' 
                    :id='id+"-input-"+keyRow+"-"+keyInput'
                    :name='input.name'
                    :label='input.label'
                    :placeholder='input.placeholder'
                    :required='input.required'
                    :disabled='input.disabled'
                    :value='input.value'
                    :msgError='input.msgError'
                    :onChange='input.onChange'
                />
                <InputNumber 
                    v-else-if='input.type == "number"' 
                    :id='id+"-input-"+keyRow+"-"+keyInput'
                    :name='input.name'
                    :label='input.label'
                    :placeholder='input.placeholder'
                    :required='input.required'
                    :disabled='input.disabled'
                    :value='input.value'
                    :msgError='input.msgError'
                    :onChange='input.onChange'
                />
                <InputPassword 
                    v-else-if='input.type == "password"' 
                    :id='id+"-input-"+keyRow+"-"+keyInput'
                    :name='input.name'
                    :label='input.label'
                    :placeholder='input.placeholder'
                    :required='input.required'
                    :disabled='input.disabled'
                    :value='input.value'
                    :msgError='input.msgError'
                    :onChange='input.onChange'
                />
                <InputDate
                    v-else-if='input.type == "date"' 
                    :id='id+"-input-"+keyRow+"-"+keyInput'
                    :name='input.name'
                    :label='input.label'
                    :placeholder='input.placeholder'
                    :required='input.required'
                    :disabled='input.disabled'
                    :value='input.value'
                    :msgError='input.msgError'
                    :onChange='input.onChange'
                />
                <InputSelect
                    v-else-if='input.type == "select"' 
                    :id='id+"-input-"+keyRow+"-"+keyInput'
                    :name='input.name'
                    :label='input.label'
                    :placeholder='input.placeholder'
                    :required='input.required'
                    :disabled='input.disabled'
                    :value='input.value'
                    :msgError='input.msgError'
                    :options='input.options'
                    :onChange='input.onChange'
                />
                <InputRadio
                    v-else-if='input.type == "radio"' 
                    :id='id+"-input-"+keyRow+"-"+keyInput'
                    :name='input.name'
                    :label='input.label'
                    :required='input.required'
                    :disabled='input.disabled'
                    :value='input.value'
                    :msgError='input.msgError'
                    :radios='input.radios'
                    :onChange='input.onChange'
                />
                <InputCheckbox
                    v-else-if='input.type == "checkbox"' 
                    :id='id+"-input-"+keyRow+"-"+keyInput'
                    :name='input.name'
                    :label='input.label'
                    :required='input.required'
                    :disabled='input.disabled'
                    :value='input.value'
                    :msgError='input.msgError'
                    :checkboxs='input.checkboxs'
                    :onChange='input.onChange'
                />
                <div
                    v-else-if='input.pureHtml != undefined && typeof input.pureHtml == "function"'
                    v-html='input.pureHtml(row)'
                    :class='input.size'
                />
                <div 
                    v-else-if='input.pureComponent != undefined && typeof input.pureComponent == "function"' 
                >
                    <component
                        v-for='(inputComponent,keyInputComponent) in input.pureComponent(row)'
                        v-bind:key='keyInputComponent' 
                        v-bind:is='inputComponent.component' 
                        v-bind='inputComponent.props'
                    />
                </div>
            </div>
        </div>
    </form>
</template>