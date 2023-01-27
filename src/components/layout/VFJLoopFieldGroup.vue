<template>
    <div class="row">
        <div class="col">
            <VFJButtonInput :data_channel="data_channel" :params="get_add_new_config()" ></VFJButtonInput>
        </div>
    </div>
    <div class="row component-group" v-for="(reg_data) in list_data" :key="reg_data">
        <div class="col">
            <FormRow 
                v-for="(row_data) in add_loop_references( params.html_def, reg_data)"
                :row_data="row_data" :data_channel="data_channel" :key="row_data"></FormRow>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps(['params', 'data_channel'])

const list_data = ref([])

onMounted(async ()=>{
    props.data_channel.subscribe('runtime_list_data_added', 'rd_'+props.params.runtime_data_key, async ( data ) => {
        if (data.key == props.params.runtime_data_key)
            list_data.value = data.rows
    })
})

function get_add_new_config(){
    return {
        action: 'list_add_new_data', label: 'Agregar', disabled: false,
        runtime_data_key: props.params.runtime_data_key
    }
}

function add_loop_references( params ){
    return params
}
</script>