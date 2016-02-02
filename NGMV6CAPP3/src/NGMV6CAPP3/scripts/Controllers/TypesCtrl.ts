namespace app.Controllers {
    
    export interface ITypeContrl {
        
    }

    export class TypeCntrl implements ITypeContrl {

        static cntrlRegisName = "app.Controllers.TypeCtrl";
        
    }

    angular
        .module("maintenance")
        .controller("app.Controllers.TypeCtrl", TypeCntrl);
}