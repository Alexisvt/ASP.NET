module Controllers {
    
    class SiteEditViewModel implements Interfaces.IScope{

        sites: string[];
        view: string;
        siteBox: string;
        private selected: number;

        //static $inject = ["$scope"];

        constructor() {
            //initialize state
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

        private setView = (view: string) : void => {
            this.view = view;
        }

        startAdd = (): void => {

            this.siteBox = "";
            this.setView("add");
        }

        cancel(): void {
            this.setView("list");
        }

        add(): void {
            this.sites.push(this.siteBox);
            this.setView("list");
        }

        startEdit(index: number): void {
            this.selected = index;
            this.siteBox = this.sites[index];
            this.setView("edit");
        }

        save(): void {
            this.sites[this.selected] = this.siteBox;
            this.setView("list");
        }

        startRemove = (index: number) : void => {
            this.selected = index;
            this.setView("delete");
        }

        getSelected(): string {
            return this.sites[this.selected];
        }

        remove = () : void => {
            this.sites.splice(this.selected, 1);
            this.setView("list");
        }
    }

    angular
        .module("maintenance")
        .controller("Controllers.SiteEditViewModel", SiteEditViewModel);

}