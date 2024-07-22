# ProgettoNGgirl2024

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

------------------------------------------------------------------
EXPLAINING THE CODE:

🇮🇹 ITALIAN: Progetto su una Todo-list che permetta di aggiungere, modificare e rimuovere delle voci e che questi cambiamenti rimangano salvati nel Local Storage.

✏️ GRAFICA e STRUTTURA: Il sito risponde bene nella sua semplicita', utilizzando le classi Bootstrap per creare un interfaccia molto semplice e responsive. E' formata da un titolo, input con pulsante per inserire la nuova voce, la lista sottostante con una piccola checkbox per ciascun elemento, e un messaggio finale con un bottone per aggiornare lo stato della lista. 
app.component e' il componente principale che fa da homepage dove inserisco gli altri elementi.

💻SERVIZIO: Contiene tutte le funzionalita' principali della pagina, grazie alla proprieta' TODOLIST che grazie alla funzione TakeDatasFromLocalStorage() salva la lista di todo al suo interno. E' presente anche una cartella models con al suo interno un tipo di dato custom per i dati della todo-list, chiamato ToDoData.

📄 COMPONENTE TODO-LIST: Componente che ha il compito di prendere dal servizio i dati che sono salvati nel local Storage nella funzione getTodoList() e fare il ciclo dei suoi elementi, che grazie al componente figlio TODO-LIST-ITEM permette loro di venir visualizzati con la stessa struttura dati (dalla property binging [todo]). Il bottone che richiama la funzione reload() serve per ricaricare la pagina.

📄 COMPONENTE TODO-LIST-ITEM: Componente figlio di TODO-LIST che tramite @Input() permette che la proprieta' todo possa prendere i dati dal componente genitore. Le funzioni EditStatusTitle() e ChangeTitle(item) controllano che venga cliccato sopra il nome dell'elemento della lista e lo trasformano da un paragrafo ad un input, con comparsa di un tasto per salvare definitivamente i cambiamenti. La funzione CompletedTask() permette di aggiungere una riga sopra la voce se viene cliccata la propria checkbox. Infine, il tasto delete ritorna alla funzione DeleteTodoItem(todo) dentro al servizio per cancellare questa voce dalla lista.

📄 COMPONENTE INPUT: Componente per la barra dell'input e del suo bottone. [(ngModel)]="NewInput" permette di far comunicare i dati in un two-way-binding, che prende il valore scritto nell'input dentro la proprieta' NewInput, che viene poi usata nella funzione getNewTask() azionata al click del bottone. Grazie all'@output su proprieta' item inserisco al suo interno il valore di NewInput, che diventa un evento su app.component. Questo evento fa scattare una funzione del servizio, AddTodoItem($event), che inserisce questo nuovo elemento dentro la lista.

---------------

🇬🇧 ENGLISH: This project is about a Todo-list that allows you to add, edit and remove items and to save them in the Local Storage.

✏️ DESIGN and STRUCTURE: The site is made using the Bootstrap classes to create a very simple and responsive interface. It consists of a title, input with a button to insert the new entry, the list below with a small checkbox for each item, and a final message with a button to update the status of the list. 
app.component is the main component that acts as the homepage where I added the other elements.

💻SERVICE:  It contains all the main functionalities of the page, thanks to the TODOLIST property which, when the function TakeDatasFromLocalStorage() is working, saves the todo list inside it. There is also a models folder with a custom data type for the todo-list datas, called ToDoData.

📄 TODO-LIST COMPONENT: It has the task of taking from the service the data that are saved in the local Storage with the getTodoList() function and looping its elements. Its child component TODO-LIST-ITEM allows those datas to be displayed with the same data structure (from property binging [todo]). The button that calls the reload() function is used to reload the page.

📄TODO-LIST-ITEM COMPONENT: It is the child component of TODO-LIST that uses @Input() to allow the todo property to take data from its parent. The EditStatusTitle() and ChangeTitle(item) functions check that the name of the list item is clicked on and transform it from a paragraph to an input, with the appearance of a button that allows to permanently save the changes. The CompletedTask() function allows you to add a line through the entry, if you click in its checkbox. Finally, the delete button returns to the DeleteTodoItem(todo) function inside the service to delete this item from the list.

📄INPUT COMPONENT: Component for the input bar and its button. [(ngModel)]="NewInput" allows the data to communicate in a two-way-binding, which takes the value written in the input into the NewInput property, which is then used in the getNewTask() function activated when the button is clicked. Thanks to the @output on item property, I insert the value of NewInput into it, which becomes an event on app.component. This event triggers a service function, AddTodoItem($event), which inserts this new item into the list.
