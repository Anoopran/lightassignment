public with sharing class OpportunityRecord {
    
    @AuraEnabled(cacheable=true)
     public static List<Opportunity> getOpportunities() {
     return [SELECT Name, Amount,Type FROM Opportunity ];
   }
}