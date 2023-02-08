//Se usa para definir los parametros inciales de configuración del componente VFJRangeInput
export class VFJRangeInputConf{
    label = ''
    class = ''
    disabled = false
    field = ''
    dfield = ''
    required = false
    autocomplete_options = ''
    tooltip = ''
    step = 1
    min  = 0
    max  = 100
    range = false

    constructor( params ){
        let keys = Object.keys(params)
        for (let c=0; c < keys.length; c++)
            if (this[keys[c]] !== undefined)
                this[keys[c]] = params[keys[c]]
    }
}