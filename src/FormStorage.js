
export class FormStorage {

    data_form      = {}
    data_form_send = {}

    update( evnt ){
        this.data_form[ evnt.config.field ] = evnt.data
        this.data_form_send[ evnt.config.field ] = evnt.data //Estop cambiara en el futuro
    }

    getValue( id_field ){
        return this.data_form[ id_field ]
    }
}