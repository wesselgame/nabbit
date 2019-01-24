// Type definitions for nabbit 0.0.1
// Created by: Wesselgame

export const types: {
    NULL: number;
    array: number;
    boolean: number;
    float: number;
    function: number;
    integer: number;
    object: number;
    string: number;
    symbol: number;
    undefined: number;
};

export function add(val: any, other: any): any;

export function ceil(n: any, pr: any): any;

export function chunk(array: any, size: any): any;

export function cramp(str: any): any;

export function divide(val: any, other: any): any;

export function globalize(specific: any, string: any, array: any, object: any, ciphers: any, lang: any, utils: any, consts: any): void;

export function isSymbol(val: any): any;

export function list(array: any, splitter: any, conj: any): any;

export function meanBy(array: any, iteratee: any): any;

export function mock(str: any): any;

export function multiply(val: any, other: any): any;

export function number(min: any, max: any): any;

export function replaceCharAt(str: any, index: any, char: any): any;

export function reverse(str: any): any;

export function scramble(array: any): any;

export function space(str: any): any;

export function string(length: any, seed: any): any;

export function subtract(val: any, other: any): any;

export function type(v: any): any;

export function valKey(obj: any, val: any): any;

