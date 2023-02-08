
export class FormStorage {

    data_form      = {}
    field_options  = {}
    initial_values = {}

    update( evnt ){
        this.data_form[ evnt.config.field ] = evnt.data
    }

    getValue( id_field ){
        if (this.data_form != undefined)
            return this.data_form[ id_field ]
    }

    deleteField( id_field ){
        delete this.data_form[id_field]
    }
}