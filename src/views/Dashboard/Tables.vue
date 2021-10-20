<template>
    <div class="card card-body data-table">
        <h5>
            Resultado

            <el-button
                @click.prevent="exportCSV"
                class="float-right"
                type="info"
                circle
                icon="el-icon-download"
                title="Baixar arquivo SCV"
            ></el-button>
        </h5>

        <div class="row mb-3">
            <div class="col-12 col-sm-8">
                <div class="row mb-2">
                    <div class="col-6 col-md-3">
                        <el-select
                            class="select-default"
                            v-model="pagination.perPage"
                            placeholder="Por página"
                        >
                            <el-option
                                class="select-default"
                                v-for="item in pagination.perPageOptions"
                                :key="item"
                                :label="item"
                                :value="item"
                            ></el-option>
                        </el-select>
                    </div>

                    <div class="col-6 col-md-4">
                        <span class="text-default">Número de resultados por página</span>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-4">
                <el-input
                    placeholder="Filtrar dados..."
                    suffix-icon="el-icon-search"
                    v-model="searchQuery"
                    clearable
                >
                </el-input>
            </div>
        </div>

        <el-table
            stripe
            @sort-change="tableSort"
            :data="queriedData"
            border
        >
            <el-table-column
                :sort-method="(a, b) => 0"
                :sortable="'custom'"
                v-for="column in tableColumns"
                :key="column.label"
                :min-width="column.minWidth"
                :prop="column.prop"
                :label="column.label"
            ></el-table-column>

            <el-table-column
                :min-width="150"
                class-name="td-actions"
                label="Ações"
                fixed="right"
            >
                <template slot-scope="props">
                    <el-button
                        @click.prevent="action('edit', props.row)"
                        type="plain"
                        icon="el-icon-search"
                        circle
                    ></el-button>
                    <el-button
                        @click.prevent="action('edit', props.row)"
                        type="info"
                        icon="el-icon-edit"
                        circle
                    ></el-button>
                    <el-button
                        @click.prevent="action('delete', props.row)"
                        type="danger"
                        icon="el-icon-delete"
                        circle
                    ></el-button>
                </template>
            </el-table-column>
        </el-table>

        <div class="row mt-2 home-pagination">
            <div class="col-12 col-md-3">
                <p class="category">
                    Mostrando {{ from + 1 }} até {{ to }} de {{ total }}
                </p>
            </div>
            <div class="col-md-9">
                <pagination
                    type="primary"
                    class="float-right"
                    v-model="pagination.currentPage"
                    :per-page="pagination.perPage"
                    :total="pagination.total"
                ></pagination>
            </div>
        </div>
    </div>
</template>

<script>
import Pagination from '@/components/UIComponents/Pagination.vue'
import users from '@/components/UIComponents/users.js'
import XLSX from 'xlsx'

export default {
    components: {
        Pagination,
    },
    data() {
        return {
            pagination: {
                perPage: 5,
                currentPage: 1,
                perPageOptions: [5, 10, 25, 50],
                total: 0,
            },
            searchQuery: '',
            propsToSearch: ['name', 'email', 'age', 'salary'],
            tableColumns: [
                {
                    prop: 'name',
                    label: 'Nome',
                    minWidth: 200,
                },
                {
                    prop: 'email',
                    label: 'Email',
                    minWidth: 250,
                },
                {
                    prop: 'age',
                    label: 'Idade',
                    minWidth: 100,
                },
                {
                    prop: 'formated_salary',
                    label: 'Salário',
                    minWidth: 120,
                },
            ],
            tableData: [],
        }
    },
    computed: {
        pagedData() {
            return this.tableData.slice(this.from, this.to)
        },
        /***
         * Searches through table data and returns a paginated array.
         * Note that this should not be used for table with a lot of data as it might be slow!
         * Do the search and the pagination on the server and display the data retrieved from server instead.
         * @returns {computed.pagedData}
         */
        queriedData() {
            if (!this.searchQuery) {
                this.pagination.total = this.tableData.length
                return this.pagedData
            }
            let result = this.tableData.filter((row) => {
                let isIncluded = false
                for (let key of this.propsToSearch) {
                    let rowValue = row[key].toString()
                    if (
                        rowValue.includes &&
                        rowValue.includes(this.searchQuery)
                    ) {
                        isIncluded = true
                    }
                }
                return isIncluded
            })
            this.pagination.total = result.length
            return result.slice(this.from, this.to)
        },
        to() {
            let highBound = this.from + this.pagination.perPage
            if (this.total < highBound) {
                highBound = this.total
            }
            return highBound
        },
        from() {
            return this.pagination.perPage * (this.pagination.currentPage - 1)
        },
        total() {
            this.pagination.total = this.tableData.length
            return this.tableData.length
        },
    },
    methods: {
        action(action, row) {
            if (action === 'delete') {
                this.deleteData(row)
            }
            if (action === 'edit') {
                this.editData(row)
            }
        },
        editData(row) {
            this.$message('Editar')
        },
        async deleteData(row) {
            this.$message('Deletei')
        },
        tableSort({ prop, order }) {
            this.globalSort(this.tableData, prop, order)
            this.pagination.currentPage = 1
        },
        exportCSV() {
            const { tableData: data } = this
            if (Array.isArray(data) && data.length > 0) {
                let headers = ['Nome', 'Salário', 'E-mail']
                let table = []
                table.push(headers)
                data.map((item) =>
                    table.push([item.name, item.salary, item.email])
                )
                const ws = XLSX.utils.aoa_to_sheet(table)
                const wb = XLSX.utils.book_new()
                XLSX.utils.book_append_sheet(wb, ws, 'usuarios')
                XLSX.writeFile(wb, 'usuarios.csv')
            } else {
                this.$message({
                    message: 'Nenhum dado encontrado',
                    type: 'warning',
                })
            }
        },
        filterDataTable() {
            var data = users
            data.map((item, index) => {
                item.index = index + 1
                item.formated_salary = this.formatMoney(item.salary)
            })
            this.tableData = data
        },
    },
    mounted() {
        this.filterDataTable()
    },
}
</script>