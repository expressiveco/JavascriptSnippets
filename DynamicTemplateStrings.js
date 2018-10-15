// Fills template strings dynamically
// * Inspired from the answers at https://stackoverflow.com/questions/30003353/can-es6-template-literals-be-substituted-at-runtime-or-reused
const fillTemplate = function(templateString, templateVars){
  var func = new Function(...Object.keys(templateVars),  "return `"+templateString +"`;")
  return func(...Object.values(templateVars));
}

// Sample
var hosting = "overview/id/d:${Id}";
var domain = {Id:1234, User:22};
var result = fillTemplate(hosting, domain);

console.log(result);
