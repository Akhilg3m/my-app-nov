

Angular:  Angular is a framework to build single page applications.
--------

        Framework: Combination of languages and libraries.
        ---------
            1) HTML
            2) CSS
            3) TypeScript
            4) Rxjs
            5) Zone.js

        SPA:   Only one HTML page will be there, 
        ----   Part of the page will change WRT user activity.

Project Setup:
--------------

    1) Download and install nodejs

        check:
        ------
            node -v
            npm -v

    2) Install angular

        npm install -g @angular/cli

        check:
        ------
            ng --version

    3) Create project

        ng new my-app

    4) Start the server

        ng serve



Angular Topics:
---------------


Routing:  Angular is SPA, 
          Routing helps us to navigate from one view to another view.


    There are 4 types of routing in angular:

        1) General Route:
        -----------------

            {path:'login', component: LoginComponent}

        2) Children Route:
        ------------------

            {path:'dashboard', component: DashboardComponent, childrend:[
                {path:'bmi', componnet: BMIComponent}
            ]}

        3) Emptry Route:
        ----------------

            {path:'', component: LoginComponent}

        4) WildCard Route:
        ------------------

            {path:'**', component: PageNotFoundComponent}


    Routing Implementation:
    -----------------------

        1) Create route in app-routing.module.ts file's ROUTES array.

        2) Mention <router-outlet> tag in app.component.html file.


    Navigate between views:
    -----------------------

        1) FROM HTML
        ------------

            <button routerLink="/dashboard">

            <button routerLink="calculator">




Angular Architecture:
---------------------


Data Bindings:
--------------

    There are 4 types of data bindings

    1) Interpolation:  TS -> HTML
    -----------------

        To display variale value in template.

        <p>{{ age }}</p>

    2) Property Binding: TS -> HTML
    --------------------

        To bind variable value to html element attribute.

        <button [disabled]="true">

    3) Event Binding: TS <- HTML 
    -----------------

        To capture user events in template

        <button (click)="submit()">

    4) Two way binding: TS <-> HTML
    -------------------

        To exchange data in two ways

        <input [(ngModel)]="age">


    Variable Structure:
    -------------------

        public  age: number = 20;


        Variable naming rules:
        ----------------------
        1) Should start with alphabet

            1name 

            name

        2) Cannot use space in name
        3) Should use camelcase names

            firstname
            first_name
            first-name

            firstName

        4) Boolean names should start with "is"

            isValid,  isMale

        5) Array names always in plural.

            users, names

        6) Name should be descriptive

            fn

            firstName


    Directives: useful to alter the DOM.
    -----------

        There are three types of directives.

        1) Structural Directives: useful to alter DOM structure.
        -------------------------

            a) ngFor: to iteratively add elements to DOM.
            ---------

                <tr *ngFor="let user of users>

            b) ngIf: to conditionally show and hide elements in DOM.
            --------

                <p *ngIf="true">

        2) Attribute Directives: useful to alter attribute value dynamically.
        ------------------------

            a) ngStyle:
            -----------

                <td [ngStyle]="{ 'color': isValid? 'green' : 'red' }"

            b) ngClass:
            -----------

                <td [ngClass]="{ 'red': marks<35, 'green':marks>=35 }">

        3) Component Directives:
        ------------------------

            -> In Angular, every component is directive

               Directives are superset, components are subset.


    PIPES:  useful to transform date from one format to another format
    ------

        ex:  {{  user.name | uppercase  }}
                           | lowercase

             {{ product | json }}

             {{ today | date:'yyyy-MM-dd' }}


    
HTTP / API Integration:
-----------------------

Data Flow:
-----------


RXJS: Responsible for all async operation in angular
-----

    It has 3 features:
    -----------------
    1) Promise
    2) Observable
    3) Subject


            Promise                          Observable
            -------                          ----------
 1)    Single callback                  Multiple callbacks

 2)   can not stop in between          we can stop in between using 
                                       unsubscribe method

 3)  supports less RXJS operators     supports more RXJS operators.




            Observable                         subject
            ----------                         -------

1)     unicasting                            multicasting / Broadcasting

2)     state                                     state 



API Integration:
----------------

1) Import HttpClientModule in app.module.ts

2) Inject HttpClient service in UserService

    constructor( private _httpClient:HttpClient ){ }

3) Create getUsers method to load data

    getUsers():Observable<any>{
        return this._httpClient.get("URL");
    }

4) Inject UserService in UserComponent

5) Subscribe to the observable and store data

    constructor( private _userService:UserService ){

        _userService.getUsers().subscribe(
            (data:any)=>{ this.users = data },
            (err:any)=>{ }
        )
    }


ALL POSSIBLE API CALLS:
-----------------------

1) all          get       get( url )

2) specific     get       get( url/id )

3) filter       get       get( url?filter=XXXXX )

4) pagination   get       get( url?limit=10&page=1 )

5) sorting      get       get( url?sortBy=XXXX & order=XXXXX )

6) create       post

7) update       put

8) delete       delete


FORMS:
------

We have two types of forms in Angular.

    1) Template driven forms
    2) Reactive forms


Reactive Forms:
---------------

    1) Import ReactiveFromsModule
    2) Create formGroup in class
    3) Create form in html
    4) Map the controls
    5) Check the form output in console.


Reactive form features:
-----------------------
1) FormGroup
2) NestedFormGroup
3) FormArray
4) Dynamic Forms
5) Form Validation


Form Validations:
-----------------
TS:
---
    age: new FormControl( null, [Validators.required] )

HTML:
-----

    <div *ngIf="CONTROL?.touched || CONTROL?.dirty">

        <p *ngIf="CONTROL?.errors.['required']"> ERR_MESSAGE </p> 
    
    </div>

    CONTROLS:
    ---------
    FormGroup:      userForm.get('age')
    NesteFormGroup  userForm.get('address).get('pincode')
    FormArray       usersFormArray.controls[i]?.get('cvv')


GIT Implementation:
-------------------

1) Linking sytem with website (Laptop->website)

    git config --global user.email XXXXXXXX

    git config --global user.name XXXXXXXX


2) Linking project to remote repository (ProjectFolder -> repository)

    git init

    git remote add origin URL

3) Send code to repository

    git add .

    git commit -m "XXXXX"

    git pull origin master

    git push


Mistakes or Hurdles:
--------------------

    1: Source: while creating the branch
    ---------

    2: Merge Conflicts:
    -------------------

    3: Wrong code commit:
    ---------------------
    








Communications:
---------------

    Three types of communications in angular

        1. Component Communication
        2. Page Communication
        3. Module Communication

   

    Parent <-> child:
    -----------------


    parent.html
    -----------

    <app-child [ac]="10" (bEvent)="catch($event)" ></app-child>


    child.ts
    --------

    @Input() public ac:string = "";

    @Output() public bEvent:EventEmitter<any> = new EventEmitter();
    bEvent.emit(20);


Module Loadings:
----------------

    3 types
        1) Eager loading
        2) Lazy loading
        3) Pre loading

    1) Eager Loading:
    -----------------
        1) Export component from feature module
        2) Import feature module in app module

        Disadvantage:
        -------------
            Initial load time.





    