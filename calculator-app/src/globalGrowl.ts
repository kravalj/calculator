import {Growl} from 'primereact/growl';

export const GlobalGrowl = {

    growlRef: new Growl({}, null),

    showSuccess: (message: String, life: number = 2000) => {
        GlobalGrowl.growlRef.show({severity: 'success', summary: 'Success', detail: message, life: life});
    },

    showError: (error: String, life: number = 2000) => {
        GlobalGrowl.growlRef.show({severity: 'error', summary: 'Error', detail: error, life: life});
    }
}