module Interfaces {

    export interface IDive {
        site: string;
        location: string;
        depth: number;
        time: number;
    }

    export interface IGenericFunc<T> {
        (message: T): T;
    }
}