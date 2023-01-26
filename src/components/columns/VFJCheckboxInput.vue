<template>

    <div class="mb-3">
        <label :for="params.key" class="form-label">{{ params.label }}</label>
        <div class="input-group row">
            <div class="field-radiobutton col-12" v-for="(option) in field_options" :key="option">
                <Checkbox inputId="{{params.key + option[params.option_id]}}" :name="params.key" @change="input_event" :value="option[params.option_id]" v-model="model" />
                <label for="{{ params.key + option[params.option_id] }}">{{option[params.option_label]}}</label>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps(['params', 'data_channel'])

const model = ref()
const field_options = ref([])

function input_event(){
    props.data_channel.streaming('_user_input_data', { config: props.params, data: model.value })
}

onMounted(async ()=>{
    props.data_channel.getData('field_options', async (data) => {
        field_options.value = data[ props.params.field_options ]
    })
})
</script>