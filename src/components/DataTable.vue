<template>
    <table
        :id="getId( tableId )"
        class="table table-bordered table-hover"
        :data="getData( tableData )"
    >
        <thead>
        <tr>
            <th>ID</th>
            <th>Fecha</th>
            <th>Fecha Requerida</th>
            <th>Status</th>
            <th>Proyecto</th>
            <th>Residente</th>
            <th>Descripcion</th>
        </tr>
        </thead>

        <tfoot>
        <tr>
            <th>ID</th>
            <th>Fecha</th>
            <th>Fecha Requerida</th>
            <th>Status</th>
            <th>Proyecto</th>
            <th>Residente</th>
            <th>Descripcion</th>
        </tr>
        </tfoot>
    </table>
</template>

<script>
export default {
    name: "DataTable"

    , props: {
        tableId: {
            type: String
            , default: "myDataTable"
        }

        , tableData: {}
    }

    , methods: {
        getId( id ) {
            return id ;
        }

        , getData( theData ) {
            return this.theData = theData ;
        }
    }

    , created() {
        $ ( '#'+this.tableId ).DataTable( {
            "processing": true,
            "data": this.tableData
        } ) ;
    }
}
</script>

<style scoped>

</style>