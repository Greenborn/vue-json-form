<template>
    <component 
        :is="COMPONENTS_REFS[ formConfig.sections.component ]" :data_channel="subs_data_channel" :params="formConfig.sections.section_def"></component>    
</template>

<script setup>
import { ref, onMounted } from 'vue'

import { SubscriptionChannel } from './helpers/SubscriptionChannel'
import { COMPONENTS_REFS } from './components/components'

import { FormConfig } from './FormConfig'
import { FormStorage } from './FormStorage'

const props = defineProps(['form_definition', 'events'])

const formConfig = ref(new FormConfig())
const formStorage   = ref(new FormStorage())

const subs_data_channel = ref(new SubscriptionChannel())

const BTN_ACTION_INDEX = {
    'submit' : submit_form
}

async function submit_form(){
    await props.events._submit(formStorage.value.data_form_send)
}

onMounted(async ()=>{
    formConfig.value = props.form_definition

    subs_data_channel.value.subscribe('_user_input_data', 'modifi', async ( evnt ) => {
        formStorage.value.update( evnt )
        await props.events._input( evnt )
    })

    subs_data_channel.value.subscribe('_user_button_action', 'btns_0', async ( evnt ) => {
        if (BTN_ACTION_INDEX[ evnt.config.action ] != undefined) 
            await BTN_ACTION_INDEX[ evnt.config.action ]( evnt )
    })

    subs_data_channel.value.setGetter('field_options', async ()=>{ return formConfig.value.general_data.field_options } )
})
</script>