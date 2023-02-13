# Vue3 Formulario JSON

Este componente tiene como objetivo la generación de un formulario a partir de un JSON de configuración.

Actualmente es funcional aunque hay cosas que faltan.

- Se puede crear un formulario (en repo ver examples/test_1) 
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
    component: 'V_TABS',
    section_def: 
    [
      {
        header: "Parte 1", 
        content: [
          { class: 'row', content: 
            [
              { 
                component: 'V_GROUP', class:'col-6',
                params:{ 
                    id: "example_group_1", 
                    content: [
                      { class: 'row', content: 
                        [{ component: '_IMAGE', params:{ src: "https://www.primefaces.org/primevue/demo/images/primevue-logo-dark.svg", alt: "Vue logo" } }
                        ] 
                      },
                      { class: 'row', content: 
                        [{ component: '_TEXT', params:{ html: "<h1>Titulo de formulario</h1>"} }
                        ] 
                      },
                      { class: 'row', content: 
                        [
                          { component: 'I_TEXT', params:{ field: 'name',tooltip:"hello moto", label: 'Campo de texto', type: 'text' } },
                          { component: 'I_TEXTAREA', params:{ field: 'descripcion','tooltip':'hola', label: 'Campo Textarea' } },
                          { component: 'I_SELECT', params:{ field: 'categoria_1', 'tooltip':'hola1', label: 'Campo Select',
                            field_options: "opciones_select_categoria", option_id : "id", option_label: "text"
                          } },
                          { component: 'I_NUMBER', params:{ field: 'number', min:0, max: 20, tooltip:"number", label: 'Campo de numerico' } },
                        ] 
                      },
                      { class: 'row', content: 
                        [
                          { component: 'I_RADIO', params:
                            { field: 'radio_ej', label: 'Campo Radio Button',
                              field_options: "opciones_radio_ej", option_id : "id", option_label: "text"
                            } 
                          },
                          { component: 'I_CHECKBOX', params:
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
          { class: 'row', content: 
            [
              { class:'col-4', component: 'I_DATE', params:{ field: 'date', label: 'Campo de fecha' } },
              { class:'col-4', component: 'I_BUTTON', params:{ action: 'test_action','tooltip':'hola', label: 'Boton de prueba' } },
              { class:'col-4', component: 'I_COLOR', params:{ field: 'color','tooltip':'hola', label: 'Campo de selección de color' } },
            ] 
          },
          { class: 'row', content: 
            [
              { class:'col-4', component: 'I_RANGE', params:{ field: 'rango', range:false, min:0, step:1, max:200, label: 'Campo de selección tipo Slider' } },
              { class:'col-6', component: 'I_FILE', params:{ field: 'file', label: 'Campo de subida de archivos' } },
            ] 
          },
          { class: 'row', 
            content: [
              { class:'col-4', component: 'I_BUTTON', params:{ action: 'section_next', label: 'Siguiente' } }
            ]
          },
        ],
      },
      {
        header: "Parte 2",
        content: [
          { class: 'row', content: 
            [{ class:'col-4', component: '_IMAGE', params:{ src: "https://www.primefaces.org/primevue/demo/images/primevue-logo-dark.svg", alt: "Vue logo" } }
            ] 
          },
          { class: 'row', content: 
            [{ class:'col-4', component: '_TEXT', params:{ html: "<h1>Titulo de formulario Parte 2</h1>"} }
            ] 
          },
          { class: 'row', content: 
            [{ class:'col-4', component: 'I_TEXT', params:{ field: 'name', label: 'Campo de texto', type: 'text' } },
            { class:'col-4', component: 'I_TEXTAREA', params:{ field: 'descripcion', label: 'Campo Textarea' } },
            { class:'col-4', component: 'I_SELECT', params:{ field: 'categoria', label: 'Campo Select',
              field_options: "opciones_select_categoria", option_id : "id", option_label: "text"
            } }
            ] 
          },
          { class: 'row', content: 
            [
              { class:'col-4', component: 'I_RADIO', params:
                { field: 'radio_ej', label: 'Campo Radio Button',
                  field_options: "opciones_radio_ej", option_id : "id", option_label: "text"
                } 
              },
              { class:'col-4', component: 'I_CHECKBOX', params:
                { field: 'checkbox_ej', label: 'Campo Checkbox',
                  field_options: "opciones_checkbox_ej", option_id : "id", option_label: "text"
                } 
              }
            ] 
          },
          { class: 'row', content: 
            [
              { class:'col-4', component: 'I_DATE', params:{ field: 'date', label: 'Campo de fecha' } },
              { class:'col-4', component: 'I_BUTTON', params:{ action: 'test_action', label: 'Boton de prueba' } },
              { class:'col-4', component: 'I_COLOR', params:{ field: 'color', label: 'Campo de selección de color' } },
            ] 
          },
          { class: 'row', content: 
            [
              { class:'col-4', component: 'I_RANGE', params:{ field: 'rango', min:0, step:1, max:200, label: 'Campo de selección tipo Slider' } },
              { class:'col-4', component: 'I_FILE', params:{ field: 'file', label: 'Campo de subida de archivos' } },
            ] 
          },
          { class: 'row', 
            content: [
              { class:'col-4', component: 'I_BUTTON', params:{ action: 'section_back', label: 'Anterior' } },
              { class:'col-4', component: 'I_BUTTON', params:{ action: 'section_next', label: 'Siguiente' } }
            ]
          },
        ],
      },
      {
        header: "Paso Final",
        content: [
          { class: 'row', 
            content: [
              { 
                class:'col', component: 'V_LOOP', 
                params:{
                  runtime_data_field: 'user_list',
                  initial_values_id: 'user_list_initial_values',
                  content: [
                  { class: 'row', content: 
                      [
                        { class:'col-4', component: 'I_DATE', params:{  dfield: 'date',    label: 'Campo de fecha' } },
                        { class:'col-4', component: 'I_BUTTON', params:{ dfield: 'btn', action: 'test_action', label: 'Boton de prueba' } },
                        { class:'col-4', component: 'I_COLOR', params:{  dfield: 'color',  label: 'Campo de selección de color' } },
                      ] 
                    }
                  ]
                } 
              }
            ]
          },
          { class: 'row', 
            content: [
              { class:'col-4', component: 'I_BUTTON', params:{ action: 'section_back', label: 'Anterior' } },
              { class:'col-4', component: 'I_BUTTON', params:{ action: 'section_goTo', action_params:{ id: 0 }, label: 'Inicio' } },
              { class:'col-4', component: 'I_BUTTON', params:{ action: 'submit', label: 'Confirmar' } }
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
|@click| Se dispara por cada click en cualquier campo del formulario|
|@submit| Se dispara al apretar el botón Submit (enviar)|

# Change log
- **0.1.85**: Se mejora generación de estructura HTML
- **0.1.84**: Se arreglan bug de loop de campos que no generaba correctamente la estructura de datos, si se eliminaban registros
- **0.1.83**: Las opciones de configuración de los controles ahora se definen en composable
- **0.1.82**: Se agrega tipo de control input numerico diferenciado del control de texto; Se agrega posibilidad de configurar placeholder
- **0.1.81**: model llevado a composable; componente de loops ahora sincroniza al modelo general; componente de loops ahora sincroniza al modelo general; Se reemplaza prev_model por model; En Loops: se mejora el almacenamiento de la info cargada en el modelo, se arregla el eliminar; soulución a bug, campos que no recibian el modelo como parametro; refactor se intercambia html_def por content; Se simplifican los nombres de los componetes; Se elimina CompInsert por que se trata de un componente redundante; Los campos de tipo select, ahora usan el inputcompostable; Se define composable para inputs, se aplica a texto, fecha, range y textarea, luego se aplicacra al resto de campos; Se simplifica configuracion basica de componentes de tipo input; Todos los componentes reciben acceso al modelo definido en componete FormularioJSON; Se arregla evento input del control de tipo range; se modifica css_class por class; Se mejora manejo de eventos; Reorganización estructura de directorios 
- **0.1.53**: Se implementan los eventos @submit e @input; Se implementa v-model
- **0.1.52**: Se reemplaza key por field y dkey por dfield
- **0.1.51**: La configuración de los componentes V_LOOP ahora permite definir la información inicial de los campos, todavia falta afinar algunos detalles.
- **0.1.50**: Se agrega posibilidad de definir tooltips a controles de tipo fecha, color, select, texto y botones, en dichos controles tambien se definen valores por defecto para algunas propiedades
- **0.1.49**: Se agrega dependencia Primeicons para el uso de iconos en botones, Ahora en los botones se puede configurar el icono, clases css, posicion del icono. Al componente V_LOOP ahora se le puede configurar los parametros de los botones que usa el mismo
- **0.1.48**: Se agrega soporte para loops (multiples registros) de campos pudiendo agregar/quitar/ y editar, ahora los componentes de formulario, en el onmounted actualizan el valor del modelo al registrado en el modelo general de formulario
- **0.1.47**: Se agrega soporte para grupo de campos
- **0.1.46**: Ahora los botones permiten ir pagina adelante, atras, una especifica, y dar por finalizado el formulario (validaciones pendientes)
- **0.1.45**: En JSON se agrega soporte para devidir el formulario en varias partes, y especificar como se requiere mostrar, por ej si se trata de una vista de tabs con V_TABS
- **0.1.44**: Componente I_FILE funcional falta, aplicar validaciones
- **0.1.43**: Componente I_COLOR funcional; componente I_RANGE funcional
- **0.1.42**: Componente I_BUTTON funcional, aunque aun no se atienden las acciones de los botones; componente VFJImage funcional
- **0.1.41**: Componente I_DATE funcional, aun no se aplican validaciones ni formateos
- **0.1.40**: Componente I_CHECKBOX funcional, por ahora solo tiene en cuenta opciones definidas directamente en JSON (No via API)
- **0.1.39**: Componente VFJRadioBtnInput funcional, por ahora solo tiene en cuenta opciones definidas directamente en JSON (No via API)
- **0.1.38**: Componente I_SELECT funcional, por ahora solo tiene en cuenta opciones definidas directamente ne JSON (No via API)
- **0.1.36**: Componente I_TEXTAREA funcional, aun no se aplican validaciones
- **0.1.35**: Componente I_TEXT funcional, aunque aun no se aplican validaciones
- **0.1.33**: Componente _TEXT funcional
- **0.1.32**: Se agregan componentes base para los diferentes tipos de campos, el componente FormCol ya asigna el componente correpsondiente y los parametros de acuerdo al JSON de configuración
- **0.1.31**: Se generan las columnas del formulario
- **0.1.30**: Se generan las filas del formulario
- **0.1.29**: Se espera definción de parametros
- **0.1.25**: Paquete configurado - ya es instalable con: npm i vue-formulario-json y puede ser incluido en cualquir proyeto vue3 para su uso. 