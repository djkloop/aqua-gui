import _ from 'lodash';

let id = 0;

export const uniqueID = () => ++id;

export const deepClone = (obj: any) => _.cloneDeep(obj);

export const isEmpty = (val: any) => _.isEmpty(val);
