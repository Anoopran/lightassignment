import { LightningElement,wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountCase.getAccounts';
export default class AccountCase extends LightningElement {
    @wire(getAccounts) accounts;
    accountidfrmparent;
    handleClick(event){
        event.preventDefault();     
        this.accountidfrmparent = event.target.dataset.accountid;       
    }
}