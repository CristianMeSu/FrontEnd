<script>
    import Vue from 'vue'
    export default Vue.extend({
        name:'Stepped',
        props:{
            steps:{
                type:Array,
                default:function(){
                    return([
                        {icon:'fa fa-spinner',label:'step 1',active:true},
                        {icon:'fa fa-user-tie',label:'step 2'},
                    ])
                }
            }
        },
    })
</script>

<template>
    <div class='stepped'>
        <div class='row'>
            <div class='col text-center' v-for='(step,keyStep) in steps' v-bind:key='keyStep'>
                <div v-bind:class='step.active == true ? "step" : "step disabled"'>
                    <span class='divider'/>
                    <i v-bind:class='step.icon'/>
                </div>
                <div>
                    <b>{{step.label}}</b>
                </div>
            </div>
        </div>
    </div>
</template>