var Controllers;
(function (Controllers) {
    var SiteEditViewModel = (function () {
        function SiteEditViewModel() {
            var _this = this;
            this.setView = function (view) {
                _this.view = view;
            };
            this.startAdd = function () {
                _this.siteBox = "";
                _this.setView("add");
            };
            this.startRemove = function (index) {
                _this.selected = index;
                _this.setView("delete");
            };
            this.remove = function () {
                _this.sites.splice(_this.selected, 1);
                _this.setView("list");
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
        SiteEditViewModel.prototype.getSelected = function () {
            return this.sites[this.selected];
        };
        return SiteEditViewModel;
    })();
    angular
        .module("maintenance")
        .controller("Controllers.SiteEditViewModel", SiteEditViewModel);
})(Controllers || (Controllers = {}));
//# sourceMappingURL=controllers.js.map