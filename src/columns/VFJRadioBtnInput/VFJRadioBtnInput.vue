<template>

    <div class="mb-3">
        <label :for="params.field" class="form-label">{{ params.label }}</label>
        <div class="input-group row">
            <div class="field-radiobutton col-12" v-for="(option) in field_options" :key="option">
                <RadioButton inputId="{{params.field + option[params.option_id]}}" :name="params.field" 
                @change="input_event" @click="click_event"
                :value="option[params.option_id]" v-model="model" />
                <label for="{{ params.field + option[params.option_id] }}">{{option[params.option_label]}}</label>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue'
import { VFJRadioBtnInputConf } from './VFJRadioBtnInputConf'
import { useInputCommon } from '../VFJInputComposable'

const props = defineProps(['params', 'modelValue'])
const emit  = defineEmits(['update:modelValue', 'click'])

const field_options = ref([])

const { input_event, click_event, model, config } = useInputCommon( emit, VFJRadioBtnInputConf, props, { field_options:field_options })
</script>