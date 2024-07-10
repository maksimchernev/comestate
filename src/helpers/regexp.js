/* eslint-disable no-useless-escape */
export const regexForName =
    /^([a-zA-Zа-яА-ЯЁё]{1,})[\s|\-]?([a-zA-Zа-яА-ЯЁё]*)[\s|\-]?([a-zA-Zа-яА-ЯЁё]*)?[\s|\-]?([a-zA-Zа-яА-ЯЁё]*)$/;

export const regexForEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const regexForPhone =
    /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/gm;

export const regexForDigitsOnly = /^$|^[0-9]+$/;

export const regexForDigitsAndLettersOnly = /^$|^[0-9А-Яа-яЁё]+$/;

export const regexForDigitsAndLettersExtraOnly = /^$|^[0-9А-Яа-яЁё#*]+$/;

export const regexForSearch = /^[\sA-Za-zА-Яа-яЁё0-9-,]*$/;

export const regexForDigitsLettersSpace = /^[\sA-Za-zА-Яа-яЁё0-9-]*$/;
