import { onMounted } from 'vue'

export function useInputCommon( emit, config, props, model, field_options=undefined ) {
    function input_event(){
        emit('update:modelValue', { config: config.value, data: model.value })
    }

    onMounted(async ()=>{
        if (props.modelValue?.field_options && config.value.field_options) {
            let data = props.modelValue.field_options 
            field_options.value = data[ config.value.field_options ]
        }
        
        if (props.modelValue !== undefined) {
            let value = props.modelValue.getValue( config.value.field )
            if (value != undefined) model.value = value
        }
    })

    return { input_event }
}