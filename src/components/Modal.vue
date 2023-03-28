<script>
    export default {
        name:'Modal',
        props:{
            id:{
                type:String,
                default:'modal',
            },
            iconClose:{
                type:Boolean,
                default:false,
            },
            size:{
                type:String,
                default:'',
            },
            title:{
                type:String,
                default:'',
            },
        },
    }
</script>

<template>
    <div class='modal fade show' v-bind:id='id'>
        <div v-bind:class='"modal-dialog modal-dialog-centered "+size'>
            <div class='modal-content'>
            <div v-if='title' class='modal-header'>
                {{title}}
                <!-- <button 
                    type='button' 
                    class='close' 
                    data-dismiss='modal' 
                    aria-label='Close'
                    v-if='stateIconClose == true'
                >
                    <span aria-hidden='true'>&times;</span>
                </button> -->
            </div>
            <div class='modal-body'>
                <slot/>
            </div>
                <!-- <div class='modal-footer'>
                    <button type='button' class='btn btn-danger' data-dismiss='modal'>Close</button> -->
                    <!-- <button type='button' class='btn btn-primary' >Save changes</button> -->
                <!-- </div> -->
            </div>
        </div>
    </div>
</template>