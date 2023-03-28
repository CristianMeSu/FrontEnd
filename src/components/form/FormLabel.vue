<script>
    import Vue from 'vue'
    export default Vue.extend({
        name:'FormLabel',
        props:{
            labels:{
                type:Array,
                default:function(){
                    return([
                        {label:'text 1',value:'text test 2'},
                        {label:'text 2',value:'text test 2'}
                    ])
                }
            }
        },
    })
</script>

<template>
    <div>
        <div class='mb-3' v-for='(input,keyInput) in labels' v-bind:key='keyInput'>
            <b>{{input.label}}:</b> {{input.value}}
        </div>
    </div>
</template>