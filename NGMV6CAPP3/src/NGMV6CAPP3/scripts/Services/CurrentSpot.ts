module app.services {

    export interface ICurrentSpot {
        setCurrentSpot(menuId: string, title: string): void;
        getActiveMenu(): string;
        getTitle(): string;

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

    function factory(): CurrentSpot {
        return new CurrentSpot();
    }

    //using service instade of factory because the shape of an typescript
    // class is more like the type of data that the angular service is expecting
    angular
        .module("maintenance")
        .factory("app.services.CurrentSpot", factory);
        //.service("app.services.CurrentSpot", CurrentSpot);

}