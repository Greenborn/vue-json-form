<template>
    <div :class="row_data.class">
        <div class="col" >
            <component  v-for="(col_data) in row_data.content" :key="col_data"
                        :is="COMPONENTS_REFS[ col_data.component ]" :class="col_data.class" :data_channel="data_channel" :params="col_data.params"
                        @update:modelValue="update_model" v-model="prev_model" 
                        @click_event="click_event"/>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { COMPONENTS_REFS } from '../components'

const emit = defineEmits(['update:modelValue', 'click_event'])

const props = defineProps(['row_data', 'data_channel', 'modelValue'])

const prev_model = ref( props.modelValue )

function update_model( evnt ){
    emit('update:modelValue', evnt)
}

function click_event( evnt ){
    emit('click_event', evnt)
}

onMounted(async ()=>{
    console.log(6,prev_model.value)
})
</script>