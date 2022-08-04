import { LightningElement } from 'lwc';
import getAllActiveAccounts from '@salesforce/apex/Activeaccounts.getAllActiveAccounts';
import getAllInactiveAccounts from '@salesforce/apex/Activeaccounts.getAllInactiveAccounts';

export default class parentaccount extends LightningElement {

    accresult;
    errorMsg;

    allactiveaccounts(){
        getAllActiveAccounts()
        .then(result =>{
            this.accresult = result;
        })
        .catch(error =>{
            this.errorMsg = error;
        })
    }
    allinactiveaccounts(){
        getAllInactiveAccounts()
        .then(result =>{
            this.accresult = result;
        })
        .catch(error =>{
            this.errorMsg = error;
        })
    }
}
