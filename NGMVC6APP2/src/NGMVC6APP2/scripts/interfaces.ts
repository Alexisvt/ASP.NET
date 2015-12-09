module Interfaces {
    
    export interface IScope {
        sites: string[];
        siteBox: string;
        view: string;
        startAdd: () => void;
        cancel: () => void;
        add: () => void;
        startEdit: (index: number) => void;
        save: () => void;
        startRemove: (index: number) => void;
        getSelected: () => string;
        remove: () => void;
    }
}