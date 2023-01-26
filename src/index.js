import FormularioJSON from './FormularioJSON.vue'
import FormCol from './FormCol.vue'
import FormRow from './FormRow.vue'

import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import Textarea from 'primevue/textarea'
import PrimeVue from 'primevue/config'
import RadioButton from 'primevue/radiobutton'
import Checkbox from 'primevue/checkbox'
import Calendar from 'primevue/calendar'
import Button from 'primevue/button'
import Image from 'primevue/image'
import ColorPicker from 'primevue/colorpicker'
import Slider from 'primevue/slider'
import FileUpload from 'primevue/fileupload'

import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'

import "primevue/resources/themes/nova/theme.css";
import "primevue/resources/primevue.min.css";

export const VueFormJSON = {
    install(Vue, options) {
        Vue.use(PrimeVue);
        Vue.component("InputText", InputText);
        Vue.component("RadioButton", RadioButton);
        Vue.component("Checkbox", Checkbox);
        Vue.component("Dropdown", Dropdown);
        Vue.component("Textarea", Textarea);
        Vue.component("Calendar", Calendar);
        Vue.component("Button", Button);
        Vue.component("Image", Image);
        Vue.component("ColorPicker", ColorPicker);
        Vue.component("Slider", Slider);
        Vue.component("FileUpload", FileUpload);

        Vue.component("TabView", TabView)
        Vue.component("TabPanel", TabPanel)

        Vue.component("FormularioJSON", FormularioJSON);
        Vue.component("FormRow", FormRow);
        Vue.component("FormCol", FormCol);
    }
}