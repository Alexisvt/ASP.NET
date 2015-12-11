module app.services {
    
    export interface ICurrentSpot {
        setCurrentSpot(menuId: string, title: string) : void;
        getActiveMenu(): string;
        getTitle() : string;
        
    }

    export class CurrentSpot implements ICurrentSpot {

        private activeMenuId: string;
        private titleText: string;

        constructor() {
            this.activeMenuId = "";
            this.titleText = "";
        }

        setCurrentSpot(menuId: string, title: string): void {
            this.activeMenuId = menuId;
            this.titleText = title;
        }

        getActiveMenu(): string {
            return this.activeMenuId;
        }

        getTitle(): string {
            return this.titleText;
        }
    }

    function factory() : CurrentSpot {
        return new CurrentSpot();
    }

    angular
        .module("maintenance")
        .factory("app.services.CurrentSpot", factory);

}