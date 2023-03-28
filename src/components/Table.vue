<script>
    export default {
        name:'Table',
        props:{
            title:{
                type:String,
                default:'List',
            },
            head:{
                type:Array,
                default:function() {
                    return [
                        {key:'column_1',label:'column 1'},
                        {label:'column 2',component:function(data) {return(data)}},
                    ]
                }
            },
            body:{
                type:Array,
                default:function() {
                    return [
                        {column_1:'fila 1 columna 1',column_2:'fila 1 columna 2'},
                        {column_1:'fila 2 columna 1',column_2:'fila 2 columna 2'},
                    ]
                }
            }
        },
        /* data:function() {
            return ({
                stateTitle:this.title,
                stateHead:this.head,
                stateBody:this.body,
                //valueSearch:'',
            }) 
        },
        methods:{
            sendClick: function(e){
                return this.$emit('click',e)
            },
            sendChange: function(e){
                return this.$emit('change',e)
            },
        }, */
    }
</script>

<template>
    <div class='table-cards'>
        <!-- <div class='row'>
            <div class='col-12 col-md-6'>
                <div class='title font-weight-bold mb-0 mt-2'>{{stateTitle}}</div>
            </div>
            <div class='col-12 col-md-5'>
                <input 
                    type='search' 
                    class='form-control' 
                    placeholder='Search' 
                    v-model='valueSearch'
                    @change='sendChange'
                />
                <i class='fa fa-search'/>
            </div>
            <div class='col-12 col-md-1'>
                <span class='btn-icon float-right mt-n1'>
                    <i id='btnAdd' class='fas fa-plus-circle' @click='sendClick'/>
                </span>
            </div>
        </div> -->
        <div v-for='(row,keyRow) in body' v-bind:key='keyRow' class='card my-3'>
            <div class='card-body'>
                <div class='row'>
                    <span class='badge-count'>
                        <div>{{keyRow+1}}</div>
                    </span>
                    <div v-for='(cell,keyCell) in head' v-bind:key='keyCell' :class='cell.size ? cell.size : "col"'>
                        {{row[cell.key]}}
                        <div
                            v-if='cell.pureHtml != undefined && typeof cell.pureHtml == "function"'
                            v-html='cell.pureHtml(row)'
                        />
                        <div v-if='cell.pureComponent != undefined && typeof cell.pureComponent == "function"' >
                            <component
                                v-for='(cellComponent,keyCellComponent) in cell.pureComponent(row)'
                                v-bind:key='keyCellComponent' 
                                v-bind:is='cellComponent.component' 
                                v-bind='cellComponent.props'
                            ></component>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>