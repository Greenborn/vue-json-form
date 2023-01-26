<template>
    <Button :label="params.label" @click="input_event($event)"/>
</template>

<script setup>
const props = defineProps(['params', 'data_channel'])

function input_event(){
    props.data_channel.streaming('_user_button_action', { config: props.params })
}
</script>