module Interfaces {

    export interface IDive {
        site: string;
        location: string;
        depth: number;
        time: number;
    }

    export interface IScope {
        dives: IDive[];
        addDive: () => void;
        clearDives: () => void;
        enableAdd: () => boolean;
    }

    export interface IGenericFunc<T> {
        (message: T): T;
    }
}