import api from './api';


export function getaccounts(){
    return api.get('admin/view');
}
