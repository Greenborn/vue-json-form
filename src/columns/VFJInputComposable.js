import { onMounted } from 'vue'

export function useInputCommon( emit, config, props, model, field_options=undefined ) {
    function input_event(){
        emit('update:modelValue', { config: config.value, data: model.value })
    }

    function click_event(evnt){
        emit('click', { config: config.value, data: model.value, evnt:evnt })
    }

    onMounted(async ()=>{
        if (props.modelValue != undefined && config.value.field_options != undefined) {
            let data = props.modelValue.field_options 
            field_options.value = data[ config.value.field_options ]
            console.log(83,config.value,field_options.value)
        }
        
        if (props.modelValue !== undefined) {
            let value = props.modelValue.getValue( config.value.field )
            if (value != undefined) model.value = value
        }
    })

    return { input_event, click_event }
}