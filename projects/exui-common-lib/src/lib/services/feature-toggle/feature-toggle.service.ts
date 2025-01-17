import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FeatureUser } from '../../models/feature-user';

@Injectable()
export class FeatureToggleService {
    // tslint:disable-next-line: variable-name
    public initialize(_user: FeatureUser): void {
        throw new Error('Not implemented');
    }
    // tslint:disable-next-line: variable-name
    public isEnabled(_feature: string): Observable<boolean> {
        throw new Error('Not implemented');
    }
    // tslint:disable-next-line: variable-name
    public getValue<R>(_key: string, _defaultValue: R): Observable<R> {
        throw new Error('Not implemented');
    }

    // tslint:disable-next-line: variable-name
    public getValueOnce<R>(_key: string, _defaultValue: R): Observable<R> {
        throw new Error('Not implemented');
    }
}
