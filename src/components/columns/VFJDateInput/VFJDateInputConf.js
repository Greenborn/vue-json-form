//Se usa para definir los parametros inciales de configuración del componente VFJDateInputConf
export class VFJDateInputConf {
    label = ''
    class = ''
    disabled = false
    inline = false
    key = ''
    selectionMode = 'single'
    dateFormat = 'dd.mm.yy'
    showTime = false
    required = false
    tooltip = ''

    constructor( params ){
        let keys = Object.keys(params)
        for (let c=0; c < keys.length; c++)
            if (this[keys[c]] !== undefined)
                this[keys[c]] = params[keys[c]]
    }
}