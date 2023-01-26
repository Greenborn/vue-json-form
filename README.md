# Vue3 Formulario JSON

**Componente aún no funcional**
- Se puede crear un formulario (ver examples/test_1) pero el mismo no cuenta con validaciones
- Aún no se disparan eventos al completar el formulario
- Aún no se realizan llamados a API externa
- Aún no se admiten loops de campos (conjunto de datos para describir registros)
- Aún no se soporta inclusión de tabla de datos ya cargados 

# Instalación
```npm i @greenborn/vue_json_form```

# Uso
```<FormularioJSON :form_definition="configuration_json"></FormularioJSON>```

# Definición JSON formulario
[Definicion de JSON Formulario.md](Definicion_JSON_Formulario.md)

# Change log
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