/// <reference path="../typings/angularjs/angular.d.ts"/>

module App {
    //angular.module("maintenance", [])
    //    .controller("siteEditCtrl", ($scope: Interfaces.IScope) => {

    //        //$scope.sites = [
    //        //    "Shaab El Erg",
    //        //    "Abu Gotta Ramada",
    //        //    "El Arouk",
    //        //    "Small Giftun",
    //        //    "Erg Somaya"];

    //        //let setView = (view: string) => {
    //        //    $scope.view = view;
    //        //};

    //        //let selected = -1;

    //        //$scope.startEdit = (index: number) => {
    //        //    selected = index;
    //        //    $scope.siteBox = $scope.sites[index];
    //        //    setView("edit");
    //        //};

    //        //$scope.save = () => {
    //        //    $scope.sites[selected] = $scope.siteBox;
    //        //    setView("list");
    //        //};

    //        //$scope.startAdd = () => {
    //        //    $scope.siteBox = "";
    //        //    setView("add");
    //        //};

    //        //$scope.cancel = () =>
    //        //{
    //        //    setView("list");
    //        //}

    //        //$scope.add = () => {
    //        //    $scope.sites.push($scope.siteBox);
    //        //    setView("list");
    //        //}

    //        //setView("list");

    //    });

    angular.module("maintenance", [])
        .controller("siteEditCtrl", Controllers.SiteEditViewModel);
}