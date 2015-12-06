/// <reference path="../typings/angularjs/angular.d.ts"/>

module App {
    angular.module("maintenance", [])
        .controller("siteEditCtrl", ($scope: Interfaces.IScope) => {

            $scope.sites = [
                "Shaab El Erg",
                "Abu Gotta Ramada",
                "El Arouk",
                "Small Giftun",
                "Erg Somaya" ];
        });
}