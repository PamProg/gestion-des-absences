
// Basic/Core
import angular from 'angular';
import RouteModule from 'angular-route';
import 'bootstrap/dist/css/bootstrap.css';
import { route } from './app.route';
import ngResource from "angular-resource";

// Component
import { AccueilComponent } from './accueil/accueil.component';
import visualisationAbsenceComponent from "./absence/visualisation/visualisationAbsence.component"

// Service
import visualisationAbsenceService from "./absence/visualisation/visualisationAbsence.service"
import apiUrls from "./utils/apiUrls.service";

//Modules
import menuEmployeModule from './menuEmploye/menuEmploye.module';
import menuAdminModule from './menuAdministrateur/menuAdministrateur.module';
import menuManagerModule from './menuManager/menuManager.module';


angular.module('app', [RouteModule, "ngResource", menuEmployeModule.name, menuAdminModule.name, menuManagerModule.name])
    .value('apiUrl', API_URL)
    .component('accueil', AccueilComponent)
    .component("visualisationAbsenceComponent", visualisationAbsenceComponent)
    .constant("apiUrls", apiUrls)
    .service("visualisationAbsenceService", visualisationAbsenceService)
    .config(route);

