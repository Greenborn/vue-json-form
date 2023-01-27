<template>
  <div class="container">
    <FormularioJSON :form_definition="f_config" :events="events"></FormularioJSON>
  </div>
  
</template>

<script setup>
import { ref } from 'vue'

const f_config = ref({
  "general_data": {
    "field_options": {
      "opciones_select_categoria": [
        { id: 1, text: 'Categoria 1'},
        { id: 2, text: 'Categoria 2'},
        { id: 3, text: 'Categoria 3'},
        { id: 4, text: 'Categoria 4'},
      ],
      "opciones_radio_ej": [
        { id: 1, text: 'Radio 1'},
        { id: 2, text: 'Radio 2'},
        { id: 3, text: 'Radio 3'},
        { id: 4, text: 'Radio 4'},
      ],
      "opciones_checkbox_ej": [
        { id: 1, text: 'Checkbox 1'},
        { id: 2, text: 'Checkbox 2'},
        { id: 3, text: 'Checkbox 3'},
        { id: 4, text: 'Checkbox 4'},
      ]
    }
  },
  "sections": { 
    component: 'VFJTabsSection',
    section_def: 
    [
      {
        header: "Parte 1",
        html_def: [
          { css_class: 'justify-content-md-center', content: 
            [
              { 
                component: 'VFJComponentGroup', css_class:'',
                params:{ 
                    id: "example_group_1",
                    html_def: [
                      { css_class: 'justify-content-md-center', content: 
                        [{ css_class:'', component: 'VFJImage', params:{ src: "https://www.primefaces.org/primevue/demo/images/primevue-logo-dark.svg", alt: "Vue logo" } }
                        ] 
                      },
                      { css_class: 'justify-content-md-center', content: 
                        [{ css_class:'', component: 'VFJText', params:{ html: "<h1>Titulo de formulario</h1>"} }
                        ] 
                      },
                      { css_class: 'justify-content-md-center', content: 
                        [{ css_class:'', component: 'VFJTextInput', params:{ key: 'name', label: 'Campo de texto', required: false, disabled: false, type: 'text' } },
                        { css_class:'', component: 'VFJTextareaInput', params:{ key: 'descripcion', label: 'Campo Textarea', required: false, disabled: false } },
                        { css_class:'', component: 'VFJSelectInput', params:{ key: 'categoria', label: 'Campo Select', required: false, disabled: false,
                          field_options: "opciones_select_categoria", option_id : "id", option_label: "text"
                        } }
                        ] 
                      },
                      { css_class: 'justify-content-md-center', content: 
                        [
                          { css_class:'', component: 'VFJRadioBtnInput', params:
                            { key: 'radio_ej', label: 'Campo Radio Button', required: false, disabled: false,
                              field_options: "opciones_radio_ej", option_id : "id", option_label: "text"
                            } 
                          },
                          { css_class:'', component: 'VFJCheckboxInput', params:
                            { key: 'checkbox_ej', label: 'Campo Checkbox', required: false, disabled: false,
                              field_options: "opciones_checkbox_ej", option_id : "id", option_label: "text"
                            } 
                          }
                        ] 
                      },                      
                    ]
                } 
              }
            ] 
          },
          { css_class: 'justify-content-md-center', content: 
            [
              { css_class:'', component: 'VFJDateInput', params:{ key: 'date', label: 'Campo de fecha', required: false, disabled: false } },
              { css_class:'', component: 'VFJButtonInput', params:{ action: 'test_action', label: 'Boton de prueba', disabled: false } },
              { css_class:'', component: 'VFJColorInput', params:{ key: 'color', label: 'Campo de selección de color', required: false, disabled: false } },
            ] 
          },
          { css_class: 'justify-content-md-center', content: 
            [
              { css_class:'', component: 'VFJRangeInput', params:{ key: 'rango', range:false, min:0, step:1, max:200, label: 'Campo de selección tipo Slider', required: false, disabled: false } },
              { css_class:'', component: 'VFJFileInput', params:{ key: 'file', label: 'Campo de subida de archivos', required: false, disabled: false } },
            ] 
          },
          { css_class: 'justify-content-md-center', 
            content: [
              { css_class:'', component: 'VFJButtonInput', params:{ action: 'section_next', label: 'Siguiente', disabled: false } }
            ]
          },
        ],
      },
      {
        header: "Parte 2",
        html_def: [
          { css_class: 'justify-content-md-center', content: 
            [{ css_class:'', component: 'VFJImage', params:{ src: "https://www.primefaces.org/primevue/demo/images/primevue-logo-dark.svg", alt: "Vue logo" } }
            ] 
          },
          { css_class: 'justify-content-md-center', content: 
            [{ css_class:'', component: 'VFJText', params:{ html: "<h1>Titulo de formulario Parte 2</h1>"} }
            ] 
          },
          { css_class: 'justify-content-md-center', content: 
            [{ css_class:'', component: 'VFJTextInput', params:{ key: 'name', label: 'Campo de texto', required: false, disabled: false, type: 'text' } },
            { css_class:'', component: 'VFJTextareaInput', params:{ key: 'descripcion', label: 'Campo Textarea', required: false, disabled: false } },
            { css_class:'', component: 'VFJSelectInput', params:{ key: 'categoria', label: 'Campo Select', required: false, disabled: false,
              field_options: "opciones_select_categoria", option_id : "id", option_label: "text"
            } }
            ] 
          },
          { css_class: 'justify-content-md-center', content: 
            [
              { css_class:'', component: 'VFJRadioBtnInput', params:
                { key: 'radio_ej', label: 'Campo Radio Button', required: false, disabled: false,
                  field_options: "opciones_radio_ej", option_id : "id", option_label: "text"
                } 
              },
              { css_class:'', component: 'VFJCheckboxInput', params:
                { key: 'checkbox_ej', label: 'Campo Checkbox', required: false, disabled: false,
                  field_options: "opciones_checkbox_ej", option_id : "id", option_label: "text"
                } 
              }
            ] 
          },
          { css_class: 'justify-content-md-center', content: 
            [
              { css_class:'', component: 'VFJDateInput', params:{ key: 'date', label: 'Campo de fecha', required: false, disabled: false } },
              { css_class:'', component: 'VFJButtonInput', params:{ action: 'test_action', label: 'Boton de prueba', required: false, disabled: false } },
              { css_class:'', component: 'VFJColorInput', params:{ key: 'color', label: 'Campo de selección de color', required: false, disabled: false } },
            ] 
          },
          { css_class: 'justify-content-md-center', content: 
            [
              { css_class:'', component: 'VFJRangeInput', params:{ key: 'rango', range:false, min:0, step:1, max:200, label: 'Campo de selección tipo Slider', required: false, disabled: false } },
              { css_class:'', component: 'VFJFileInput', params:{ key: 'file', label: 'Campo de subida de archivos', required: false, disabled: false } },
            ] 
          },
          { css_class: 'justify-content-md-center', 
            content: [
              { css_class:'', component: 'VFJButtonInput', params:{ action: 'section_back', label: 'Anterior', disabled: false } },
              { css_class:'', component: 'VFJButtonInput', params:{ action: 'section_next', label: 'Siguiente', disabled: false } }
            ]
          },
        ],
      },
      {
        header: "Paso Final",
        html_def: [
          { css_class: 'justify-content-md-center', 
            content: [
              { 
                css_class:'', component: 'VFJLoopFieldGroup', 
                params:{
                  runtime_data_key: 'user_list',
                  html_def: [
                  { css_class: 'justify-content-md-center', content: 
                      [
                        { css_class:'', component: 'VFJDateInput', params:{   dkey: 'date',    label: 'Campo de fecha', required: false, disabled: false } },
                        { css_class:'', component: 'VFJButtonInput', params:{ dkey: 'btn', action: 'test_action', label: 'Boton de prueba', disabled: false } },
                        { css_class:'', component: 'VFJColorInput', params:{  dkey: 'color',  label: 'Campo de selección de color', required: false, disabled: false } },
                      ] 
                    }
                  ]
                } 
              }
            ]
          },
          { css_class: 'justify-content-md-center', 
            content: [
              { css_class:'', component: 'VFJButtonInput', params:{ action: 'section_back', label: 'Anterior', disabled: false } },
              { css_class:'', component: 'VFJButtonInput', params:{ action: 'section_goTo', action_params:{ id: 0 }, label: 'Inicio', disabled: false } },
              { css_class:'', component: 'VFJButtonInput', params:{ action: 'submit', label: 'Confirmar', disabled: false } }
            ]
          },
        ]
      }
    ]
  }
  
})
const events = ref({
  _input: async (e) => { console.log(e) },
  _submit: async (e) => { console.log(e) }
})
</script>

<style>
.component-group{
  background-color: #ddd;
}
</style>
