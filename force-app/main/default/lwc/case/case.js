import { LightningElement,api,wire } from 'lwc';
import findCaseByAccountId from '@salesforce/apex/CaseNumber.findCaseByAccountId';

export default class CaseNumber extends LightningElement {
    columns =  [
        { label: 'Case Number', fieldName: 'CaseNumber' },
        { label: 'Origin', fieldName: 'Origin' , type: 'picklist'},
        { label: 'Reason', fieldName: 'Reason', type: 'picklist' },    
    ];
    @api accountId;
    @wire(findCaseByAccountId,{accountId:'$accountId'}) cases;   
}