<template>
    <div class="row">
        <div class="col">
            <VFJButtonInput :data_channel="data_channel" :params="getCfg_new_btn()" ></VFJButtonInput>
        </div>
    </div>
    <div class="row component-group" v-for="(reg_data) in list_data" :key="reg_data">
        <div class="col">
            <FormRow 
                v-for="(row_data) in add_loop_references( conf, reg_data )"
                :row_data="row_data" :data_channel="data_channel" :key="row_data"></FormRow>
        </div>
        <div class="col-auto">
            <VFJButtonInput :data_channel="data_channel" :params="getCfg_remove_btn( reg_data )" ></VFJButtonInput>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { VFJLoopFieldGroupConf } from './VFJLoopFieldGroupConf'

const props = defineProps(['params', 'data_channel'])

const conf = ref(new VFJLoopFieldGroupConf(props.params))
const list_data = ref([])

onMounted(async ()=>{
    props.data_channel.subscribe('runtime_list_data_updated', 'rd_'+conf.value.runtime_data_field, async ( data ) => {
        if (data.field == conf.value.runtime_data_field)
            list_data.value = data.rows
    })
})

function getCfg_remove_btn( reg_data ){
    return {
        action: 'list_remove_data',
        runtime_data_field: conf.value.runtime_data_field,
        icon: conf.value.btn_delete.icon, class: conf.value.btn_delete.class,
        reg_data: reg_data, label: conf.value.btn_delete.label,
    }
}

function getCfg_new_btn(){
    return {
        action: 'list_add_new_data', 
        runtime_data_field: conf.value.runtime_data_field,
        class: conf.value.btn_create.class, label: conf.value.btn_create.label,
        icon: conf.value.btn_create.icon, iconPos:  conf.value.btn_create.iconPos
    }
}

function add_loop_references( params, reg_data ){
    let field = conf.value.runtime_data_field
    let arr   = params.html_def

    props.data_channel.getData('initial_values', async (init_values) => {
        for (let i=0; i < arr.length; i++){
            for (let j=0; j < arr[i].content.length; j++){
                let c_params = arr[i].content[j].params
                if (c_params['dfield'] != undefined) {
                    c_params['field'] = field + '_' + reg_data._i + '_' + c_params.dfield
                    c_params['value'] = init_values[ conf.value.initial_values_id ][ c_params['dfield'] ]
                    props.data_channel.streaming('_user_input_data', { config: c_params, data: c_params['value'] })
                }
            }
        }
    })
    return arr
}
</script>