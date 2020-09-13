import {combineEpics} from 'redux-observable';
import {
 
} from 'rxjs/operators';
import {} from 'rxjs';

import { {{camelCase name}}Slice} from './{{name}}.slice';
import { {{name}}State} from './types';


export const {{camelCase name}}Epic = combineEpics();
