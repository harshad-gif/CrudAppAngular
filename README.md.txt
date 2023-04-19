PhoneBookCrudApp: Backend
For Backend I have used java based framework spring boot.you can run this app just simply
by following this steps.
Step 1 : Go to Eclipse and click on Right click.
Step 2 : Click import -> click existing maven -> browse folder PhoneBookCrudApp-> Heat Enter
Step 3 : Click pom.xml -> All the dependecies will automaticall installed
Step 4 : open PhoneBookCrudAppApplication file -> Right Click -> click Run as Java Application -> heat enter
Step 5 : After successfullyy run application go to console -> Go to browser and paste this link(http://localhost:8080/h2-console/)
Step 6 : After opening above link add this url : jdbc:h2:mem:phoneBook inside jdbc url input box and click connect.


phoneBookCrud : FrontEnd

For Frontend I have used angular. you can run this app by follwoing this steps.
Step 1:Install angular cli using this command -  npm install -g @angular/cli

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive service`.


Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


Database : I used in memory datbase which is H2 Database.
