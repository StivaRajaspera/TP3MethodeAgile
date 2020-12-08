$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/cuisiner.feature");
formatter.feature({
  "name": "Recrutement",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "En tant que Cuisine, je veux pouvoir recruter un chef quand j en ai besoin",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@MyScenario"
    }
  ]
});
formatter.step({
  "name": "je suis une cuisine",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.CuisinerSteps.je_suis_une_cuisine()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "je recrute un chef libre",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.CuisinerSteps.je_recrute_un_chef_libre()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "le chef devra apparaitre dans ma liste de chefs",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.CuisinerSteps.le_chef_devra_apparaitre_dans_ma_liste_de_chefs()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "En tant que Cuisine, je veux pouvoir renvoyer un Chef en precisant son nom",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "je suis une cuisine",
  "keyword": "Given "
});
formatter.step({
  "name": "le nom \"\u003cnom\u003e\" du chef est valide",
  "keyword": "When "
});
formatter.step({
  "name": "j expulse un chef portant le nom \"\u003cnom\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "le chef portant ce nom ne devrait pas apparaitre dans la liste de chefs",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "nom"
      ]
    },
    {
      "cells": [
        "Paul"
      ]
    }
  ]
});
formatter.scenario({
  "name": "En tant que Cuisine, je veux pouvoir renvoyer un Chef en precisant son nom",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "je suis une cuisine",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.CuisinerSteps.je_suis_une_cuisine()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "le nom \"Paul\" du chef est valide",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.CuisinerSteps.le_nom_du_chef_est_valide(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "j expulse un chef portant le nom \"Paul\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.CuisinerSteps.j_expulse_un_chef_portant_le_nom(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "le chef portant ce nom ne devrait pas apparaitre dans la liste de chefs",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.CuisinerSteps.le_chef_portant_ce_nom_ne_devrait_pas_apparaitre_dans_la_liste_de_chefs()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "En tant que Chef, je veux pourvoir quitter une cuisine",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "je suis un Chef",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.CuisinerSteps.je_suis_un_Chef()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "j appartiens a une cuisine",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.CuisinerSteps.j_appartiens_a_une_cuisine()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "je quitte cuisine",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.CuisinerSteps.je_quitte_cuisine()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "je n apparais plus dans la liste chefs de la cuisine que j ai quitte",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.CuisinerSteps.je_n_apparais_plus_dans_la_liste_chefs_de_la_cuisine_que_j_ai_quitte()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "je n appartiens plus a aucune cuisine",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.CuisinerSteps.je_n_appartiens_plus_a_aucune_cuisine()"
});
formatter.result({
  "status": "passed"
});
});