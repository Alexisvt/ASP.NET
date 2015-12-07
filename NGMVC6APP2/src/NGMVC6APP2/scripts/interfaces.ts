module Interfaces {
    
    export interface IScope {
        sites: string[];
        view: string;
        startAdd: () => void;
        cancel: () => void;
        add: () => void;
        siteBox: string;
        startEdit: (index: number) => void;
        save: () => void;
    }
}