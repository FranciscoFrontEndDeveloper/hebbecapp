# Hebbec-app

## Observaciones
1. No puede crear la conexion con Sockets.io porque no la he manejado mucho en cambio de eso decidi crear un mock con la informacion del documento de la prueba.
2. La resolucion utilizada en dispositivos moviles fue de 375 x 812
3. No se utilizo ningun framework de frontend como Bootstrap o Angular Material
4. Cree varios componentes reutilizables que fueron el label,input,select,button de los formularios reactivos.
5. Se dejaron lo "console.log" para que se pueda apreciar que la informacion de los formularios reactivos es enviada estoy conciente que se consira una mala practica pero puede ahorrar trabajo a quien revise la prueba.
6. En el formulario de editar la informacion del usuario aunque el servicio trae la informacion no se pinta ya que aparece un mensaje que indica que el campo "email" no se encuentra y para el momento de entregar la solucion de la prueba no encontre la causa de este comportamiento aunque sospecho que se debe al mock que cree para mostrar la informacion en el componente "dashbord".
7. para mostrar dicho mock utilice "angular-in-memory-web-api module"
8. Sin importar el resultado de la prueba agradezco la oportunidad que se me brindo de medir mis conocimientos y aprendi varias cosas utiles en el proceso que me serviran en mi labor de desarrollador.






This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


