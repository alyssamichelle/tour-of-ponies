import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Pony } from './pony';
import { MessageService } from './message.service';


@Injectable({ providedIn: 'root' })
export class HeroService {

  private inMemoryBaseUrl = 'api/heroes';  // URL to in memory web api
  private ponyBaseUrl =  'http://localhost:5099/ponies'; // URL to Layla's lovely .NET-y minimal API

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET heroes from the server */
  getHeroes(): Observable<Pony[]> {
    const inMemoryUrl = `${this.inMemoryBaseUrl}`;
    const ponyUrl = `${this.ponyBaseUrl}/heroes`;

    return this.http.get<Pony[]>(ponyUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Pony[]>('getHeroes', []))
      );
  }

  /** GET hero by id. Return `undefined` when id not found */
  getHeroNo404<Data>(id: string): Observable<Pony> {
    const inMemoryUrl = `${this.inMemoryBaseUrl}/?id=${id}`;
    const ponyUrl = `${this.ponyBaseUrl}/?id=${id}`;

    return this.http.get<Pony[]>(ponyUrl)
      .pipe(
        map(heroes => heroes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} hero id=${id}`);
        }),
        catchError(this.handleError<Pony>(`getHero id=${id}`))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getHero(id: string): Observable<Pony> {
    const inMemoryUrl = `${this.inMemoryBaseUrl}/${id}`;
    const ponyUrl = `${this.ponyBaseUrl}/${id}`;

    return this.http.get<Pony>(ponyUrl).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Pony>(`getHero id=${id}`))
    );
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Pony[]> {
    
    const inMemoryUrl = `${this.inMemoryBaseUrl}/?name=${term}`;
    const ponyUrl = `${this.ponyBaseUrl}/?name=${term}`;

    if (!term.trim()) {
      // if not search term, return all heroes.
      return this.getHeroes();
    }
    return this.http.get<Pony[]>(ponyUrl).pipe(
      tap(x => x.length ?
         this.log(`found heroes matching "${term}"`) :
         this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Pony[]>('searchHeroes', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addHero(pony: Pony): Observable<Pony> {
    const inMemoryUrl = `this.inMemoryBaseUrl`;
    const ponyUrl = `this.ponyBaseUrl`;

    return this.http.post<Pony>(ponyUrl, pony, this.httpOptions).pipe(
      tap((newHero: Pony) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Pony>('addHero'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteHero(hero: Pony | number): Observable<Pony> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const inMemoryUrl = `${this.inMemoryBaseUrl}/${id}`;
    const ponyUrl = `${this.ponyBaseUrl}/${id}`;

    return this.http.delete<Pony>(ponyUrl, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Pony>('deleteHero'))
    );
  }

  /** PUT: update the hero on the server */
  updateHero(hero: Pony): Observable<any> {
    return this.http.put(this.ponyBaseUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
