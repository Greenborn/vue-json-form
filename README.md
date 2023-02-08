# Vue3 Formulario JSON

Este componente tiene como objetivo la generación de un formulario a partir de un JSON de configuración.

Actualmente es funcional aunque hay cosas que faltan.

- Se puede crear un formulario (ver examples/test_1) pero el mismo no cuenta con validaciones
- Aún no se soporta inclusión de tabla de datos ya cargados 
- No hay soporte para autocompletado

# Instalación
```npm i @greenborn/vue_json_form```

# Uso

En main.js
```
import { VueFormJSON } from '@greenborn/vue_json_form'
import 'bootstrap/dist/css/bootstrap.css'

createApp(App).use(VueFormJSON).mount('#app')
```

En componente a incluir el formulario:
```
<FormularioJSON :form_definition="f_config" 
                v-model="form_data" 
                @submit="submitHandler" @input="inputHandler"/>
```

Ejemplo de configuración JSON formulario:
```
const configuration_json = ref({
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
    },
    "autocomplete_options": {
      "ciudades": [ 'Tandil', 'Mar del Plata', 'Ayacucho', 'Azul', 'Bolivar', 'Capital Federal' ]
    },
    "initial_values": {
      user_list_initial_values: { date:new Date(), color:'#00FF00' }
    }
    
  },
  "sections": { 
    component: 'VFJTabsSection',
    section_def: 
    [
      {
        header: "Parte 1",
        html_def: [
          { class: 'justify-content-md-center', content: 
            [
              { 
                component: 'VFJComponentGroup', class:'',
                params:{ 
                    id: "example_group_1",
                    html_def: [
                      { class: 'justify-content-md-center', content: 
                        [{ class:'', component: 'VFJImage', params:{ src: "https://www.primefaces.org/primevue/demo/images/primevue-logo-dark.svg", alt: "Vue logo" } }
                        ] 
                      },
                      { class: 'justify-content-md-center', content: 
                        [{ class:'', component: 'VFJText', params:{ html: "<h1>Titulo de formulario</h1>"} }
                        ] 
                      },
                      { class: 'justify-content-md-center', content: 
                        [{ class:'', component: 'VFJTextInput', params:{ field: 'name',tooltip:"hello moto", label: 'Campo de texto', type: 'text' } },
                        { class:'', component: 'VFJTextareaInput', params:{ field: 'descripcion','tooltip':'hola', label: 'Campo Textarea' } },
                        { class:'', component: 'VFJSelectInput', params:{ field: 'categoria', 'tooltip':'hola', label: 'Campo Select',
                          field_options: "opciones_select_categoria", option_id : "id", option_label: "text"
                        } }
                        ] 
                      },
                      { class: 'justify-content-md-center', content: 
                        [
                          { class:'', component: 'VFJRadioBtnInput', params:
                            { field: 'radio_ej', label: 'Campo Radio Button',
                              field_options: "opciones_radio_ej", option_id : "id", option_label: "text"
                            } 
                          },
                          { class:'', component: 'VFJCheckboxInput', params:
                            { field: 'checkbox_ej', label: 'Campo Checkbox',
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
          { class: 'justify-content-md-center', content: 
            [
              { class:'', component: 'VFJDateInput', params:{ field: 'date', label: 'Campo de fecha' } },
              { class:'', component: 'VFJButtonInput', params:{ action: 'test_action','tooltip':'hola', label: 'Boton de prueba' } },
              { class:'', component: 'VFJColorInput', params:{ field: 'color','tooltip':'hola', label: 'Campo de selección de color' } },
            ] 
          },
          { class: 'justify-content-md-center', content: 
            [
              { class:'', component: 'VFJRangeInput', params:{ field: 'rango', range:false, min:0, step:1, max:200, label: 'Campo de selección tipo Slider' } },
              { class:'', component: 'VFJFileInput', params:{ field: 'file', label: 'Campo de subida de archivos' } },
            ] 
          },
          { class: 'justify-content-md-center', 
            content: [
              { class:'', component: 'VFJButtonInput', params:{ action: 'section_next', label: 'Siguiente' } }
            ]
          },
        ],
      },
      {
        header: "Parte 2",
        html_def: [
          { class: 'justify-content-md-center', content: 
            [{ class:'', component: 'VFJImage', params:{ src: "https://www.primefaces.org/primevue/demo/images/primevue-logo-dark.svg", alt: "Vue logo" } }
            ] 
          },
          { class: 'justify-content-md-center', content: 
            [{ class:'', component: 'VFJText', params:{ html: "<h1>Titulo de formulario Parte 2</h1>"} }
            ] 
          },
          { class: 'justify-content-md-center', content: 
            [{ class:'', component: 'VFJTextInput', params:{ field: 'name', label: 'Campo de texto', type: 'text' } },
            { class:'', component: 'VFJTextareaInput', params:{ field: 'descripcion', label: 'Campo Textarea' } },
            { class:'', component: 'VFJSelectInput', params:{ field: 'categoria', label: 'Campo Select',
              field_options: "opciones_select_categoria", option_id : "id", option_label: "text"
            } }
            ] 
          },
          { class: 'justify-content-md-center', content: 
            [
              { class:'', component: 'VFJRadioBtnInput', params:
                { field: 'radio_ej', label: 'Campo Radio Button',
                  field_options: "opciones_radio_ej", option_id : "id", option_label: "text"
                } 
              },
              { class:'', component: 'VFJCheckboxInput', params:
                { field: 'checkbox_ej', label: 'Campo Checkbox',
                  field_options: "opciones_checkbox_ej", option_id : "id", option_label: "text"
                } 
              }
            ] 
          },
          { class: 'justify-content-md-center', content: 
            [
              { class:'', component: 'VFJDateInput', params:{ field: 'date', label: 'Campo de fecha' } },
              { class:'', component: 'VFJButtonInput', params:{ action: 'test_action', label: 'Boton de prueba' } },
              { class:'', component: 'VFJColorInput', params:{ field: 'color', label: 'Campo de selección de color' } },
            ] 
          },
          { class: 'justify-content-md-center', content: 
            [
              { class:'', component: 'VFJRangeInput', params:{ field: 'rango', range:false, min:0, step:1, max:200, label: 'Campo de selección tipo Slider' } },
              { class:'', component: 'VFJFileInput', params:{ field: 'file', label: 'Campo de subida de archivos' } },
            ] 
          },
          { class: 'justify-content-md-center', 
            content: [
              { class:'', component: 'VFJButtonInput', params:{ action: 'section_back', label: 'Anterior' } },
              { class:'', component: 'VFJButtonInput', params:{ action: 'section_next', label: 'Siguiente' } }
            ]
          },
        ],
      },
      {
        header: "Paso Final",
        html_def: [
          { class: 'justify-content-md-center', 
            content: [
              { 
                class:'', component: 'VFJLoopFieldGroup', 
                params:{
                  runtime_data_field: 'user_list',
                  initial_values_id: 'user_list_initial_values',
                  html_def: [
                  { class: 'justify-content-md-center', content: 
                      [
                        { class:'', component: 'VFJDateInput', params:{   dfield: 'date',    label: 'Campo de fecha' } },
                        { class:'', component: 'VFJButtonInput', params:{ dfield: 'btn', action: 'test_action', label: 'Boton de prueba' } },
                        { class:'', component: 'VFJColorInput', params:{  dfield: 'color',  label: 'Campo de selección de color' } },
                      ] 
                    }
                  ]
                } 
              }
            ]
          },
          { class: 'justify-content-md-center', 
            content: [
              { class:'', component: 'VFJButtonInput', params:{ action: 'section_back', label: 'Anterior' } },
              { class:'', component: 'VFJButtonInput', params:{ action: 'section_goTo', action_params:{ id: 0 }, label: 'Inicio' } },
              { class:'', component: 'VFJButtonInput', params:{ action: 'submit', label: 'Confirmar' } }
            ]
          },
        ]
      }
    ]
  }
  
})
```

Eventos:
|Evento| Descripción |
|---|---|
|@input| Se dispara por cada modificación de los datos de cualquier campo del formulario|
|@submit| Se dispara al apretar el botón Submit (enviar)|

# Definición JSON formulario
[Definicion de JSON Formulario.md](Definicion_JSON_Formulario.md)

# Change log
- **0.1.53**: Se implementan los eventos @submit e @input; Se implementa v-model
- **0.1.52**: Se reemplaza key por field y dkey por dfield
- **0.1.51**: La configuración de los componentes VFJLoopFieldGroup ahora permite definir la información inicial de los campos, todavia falta afinar algunos detalles.
- **0.1.50**: Se agrega posibilidad de definir tooltips a controles de tipo fecha, color, select, texto y botones, en dichos controles tambien se definen valores por defecto para algunas propiedades
- **0.1.49**: Se agrega dependencia Primeicons para el uso de iconos en botones, Ahora en los botones se puede configurar el icono, clases css, posicion del icono. Al componente VFJLoopFieldGroup ahora se le puede configurar los parametros de los botones que usa el mismo
- **0.1.48**: Se agrega soporte para loops (multiples registros) de campos pudiendo agregar/quitar/ y editar, ahora los componentes de formulario, en el onmounted actualizan el valor del modelo al registrado en el modelo general de formulario
- **0.1.47**: Se agrega soporte para grupo de campos
- **0.1.46**: Ahora los botones permiten ir pagina adelante, atras, una especifica, y dar por finalizado el formulario (validaciones pendientes)
- **0.1.45**: En JSON se agrega soporte para devidir el formulario en varias partes, y especificar como se requiere mostrar, por ej si se trata de una vista de tabs con VFJTabsSection
- **0.1.44**: Componente VFJFileInput funcional falta, aplicar validaciones
- **0.1.43**: Componente VFJColorInput funcional; componente VFJRangeInput funcional
- **0.1.42**: Componente VFJButtonInput funcional, aunque aun no se atienden las acciones de los botones; componente VFJImage funcional
- **0.1.41**: Componente VFJDateInput funcional, aun no se aplican validaciones ni formateos
- **0.1.40**: Componente VFJCheckboxInput funcional, por ahora solo tiene en cuenta opciones definidas directamente en JSON (No via API)
- **0.1.39**: Componente VFJRadioBtnInput funcional, por ahora solo tiene en cuenta opciones definidas directamente en JSON (No via API)
- **0.1.38**: Componente VFJSelectInput funcional, por ahora solo tiene en cuenta opciones definidas directamente ne JSON (No via API)
- **0.1.36**: Componente VFJTextareaInput funcional, aun no se aplican validaciones
- **0.1.35**: Componente VFJTextInput funcional, aunque aun no se aplican validaciones
- **0.1.33**: Componente VFJText funcional
- **0.1.32**: Se agregan componentes base para los diferentes tipos de campos, el componente FormCol ya asigna el componente correpsondiente y los parametros de acuerdo al JSON de configuración
- **0.1.31**: Se generan las columnas del formulario
- **0.1.30**: Se generan las filas del formulario
- **0.1.29**: Se espera definción de parametros
- **0.1.25**: Paquete configurado - ya es instalable con: npm i vue-formulario-json y puede ser incluido en cualquir proyeto vue3 para su uso. 