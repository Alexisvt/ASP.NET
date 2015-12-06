///<reference path="../typings/angularjs/angular.d.ts"/>

module App {
    import DiveGenerator = Classes.DiveGenerator;

    angular.module("diveLog", [])
        .controller("diveLogCtrl", ($scope: Interfaces.IScope) => {

            let index: number = 0;
            $scope.dives = [];

            $scope.addDive = () => {
                if ($scope.enableAdd()) {
                    $scope.dives.push(DiveGenerator.dives[index++]);
                }
            };

            $scope.clearDives = () => {
                $scope.dives = [];
                index = 0;
            }

            $scope.enableAdd = () => {
                return index < DiveGenerator.dives.length;
            };


        });
}

