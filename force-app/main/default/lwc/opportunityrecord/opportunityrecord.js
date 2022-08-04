import { LightningElement,track,wire } from 'lwc';
import getOpportunities from '@salesforce/apex/OpportunityRecord.getOpportunities';
export default class OpportunityRecord extends LightningElement {

    

    @track data;
    @track opportunityRecordsList;
    @track columns = [
        { label: 'Name', fieldName: 'Name', type: 'text' },        
        { label: 'Amount', fieldName: 'Amount', type: 'amount' },
        { label: 'Type', fieldName: 'Type', type: 'text' },       
    ];   
    @wire (getOpportunities) opportunityRecords({error,data}){
        if(data){
            this.data = data;            
        }
        else if (error){
            this.data  = undefined;
        }
    }
    connectedCallback(){
        getOpportunities()
            .then(result=>{
                this.opportunityRecordsList = result;
            })
            .catch(error=>{
                this.opportunityRecordsList = undefined;
            });
    }
}
