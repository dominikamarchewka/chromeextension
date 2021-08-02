myLeads = '["www.facebook.pl"]'
myLeads = JSON.parse(myLeads);
myLeads.push("www.domi.pl");
myLeads = JSON.stringify(myLeads);
console.log(typeof myLeads)