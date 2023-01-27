<template>
    <div class="row">
        <div class="col">
            <VFJButtonInput :data_channel="data_channel" :params="getCfg_new_btn()" ></VFJButtonInput>
        </div>
    </div>
    <div class="row component-group" v-for="(reg_data) in list_data" :key="reg_data">
        <div class="col">
            <FormRow 
                v-for="(row_data) in add_loop_references( params, reg_data )"
                :row_data="row_data" :data_channel="data_channel" :key="row_data"></FormRow>
        </div>
        <div class="col-auto">
            <VFJButtonInput :data_channel="data_channel" :params="getCfg_remove_btn( reg_data )" ></VFJButtonInput>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps(['params', 'data_channel'])

const list_data = ref([])

onMounted(async ()=>{
    props.data_channel.subscribe('runtime_list_data_updated', 'rd_'+props.params.runtime_data_key, async ( data ) => {
        if (data.key == props.params.runtime_data_key)
            list_data.value = data.rows
    })
})

function getCfg_remove_btn( reg_data ){
    return {
        action: 'list_remove_data', label: '', disabled: false,
        runtime_data_key: props.params.runtime_data_key,
        reg_data: reg_data
    }
}

function getCfg_new_btn(){
    return {
        action: 'list_add_new_data', label: 'Agregar', disabled: false,
        runtime_data_key: props.params.runtime_data_key
    }
}

function add_loop_references( params, reg_data ){
    let key = params.runtime_data_key
    let arr = JSON.parse(JSON.stringify(params.html_def))

    for (let i=0; i < arr.length; i++){
        for (let j=0; j < arr[i].content.length; j++){
            let c_params = arr[i].content[j].params

            if (c_params['dkey'] != undefined)  
                c_params.key = key + '_' + reg_data._i + '_' + c_params.dkey
        }
    }
    
    return arr
}
</script>