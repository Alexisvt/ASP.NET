var Controllers;
(function (Controllers) {
    var SiteEditViewModel = (function () {
        function SiteEditViewModel(otroScope) {
            var _this = this;
            this.setView = function (view) {
                _this.view = view;
            };
            this.startAdd = function () {
                _this.siteBox = "";
                _this.setView("add");
            };
            this.sites = [
                "Shaab El Erg",
                "Abu Gotta Ramada",
                "El Arouk",
                "Small Giftun",
                "Erg Somaya"];
            this.selected = -1;
            this.siteBox = "";
            this.setView("list");
        }
        SiteEditViewModel.prototype.cancel = function () {
            this.setView("list");
        };
        SiteEditViewModel.prototype.add = function () {
            this.sites.push(this.siteBox);
            this.setView("list");
        };
        SiteEditViewModel.prototype.startEdit = function (index) {
            this.selected = index;
            this.siteBox = this.sites[index];
            this.setView("edit");
        };
        SiteEditViewModel.prototype.save = function () {
            this.sites[this.selected] = this.siteBox;
            this.setView("list");
        };
        SiteEditViewModel.$inject = ["$scope"];
        return SiteEditViewModel;
    })();
    Controllers.SiteEditViewModel = SiteEditViewModel;
})(Controllers || (Controllers = {}));
//# sourceMappingURL=controllers.js.map