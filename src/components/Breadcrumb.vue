<script>
    export default {
        name:'Breadcrumb',
        props:{
            breadcrumbs:{
                type:Array,
                default:function(){
                    return([
                        {to:'/',label:this.$t('lang.app.misc.home'),icon:'fas fa-home'},
                        {to:'/',label:this.$t('lang.app.misc.example'),active:true},
                    ])
                }
            },
        },
        data:function(){
            return({
                stateBreadcrumbs:this.breadcrumbs
            })
        }
    }
</script>

<template>
    <nav>
        <ol class='breadcrumb'>
            <router-link 
                v-bind:to='breadcrumb.to' 
                tag='li' 
                v-bind:class='breadcrumb.active ? "breadcrumb-item active" : "breadcrumb-item"' 
                v-for='(breadcrumb,keyBreadcrumb) in stateBreadcrumbs'
                v-bind:key='keyBreadcrumb'
            >
                <i v-bind:class='breadcrumb.icon'/> {{breadcrumb.label}}
            </router-link>
        </ol>
    </nav>
</template>
