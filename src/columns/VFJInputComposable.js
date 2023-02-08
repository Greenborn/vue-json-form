import { onMounted } from 'vue'

export function useInputCommon( emit, config, props, model ) {
    function input_event(){
        emit('update:modelValue', { config: config.value, data: model.value })
    }

    onMounted(async ()=>{
        if (props.modelValue !== undefined) {
            let value = props.modelValue.getValue( config.value.field )
            if (value != undefined) model.value = value
        }
    })

    return { input_event }
}