# RpxXuiCommonLib

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.
This Project is used for EXUI team as a common library.
All the common library is located at projects/exui-common-lib

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
The main project is only a base to run the projects/exui-common-lib 

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the exui-common-lib project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
it will run the test for exui-common-lib


## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Timeout Notification Service

The Timeout Notification Service allows your application to receive notifications
when a User is approaching the the total time that a User has been idle for.

This can be set by your application using the Timeout Notification Config object.

Your application will then have to listen to events coming from the Timeout Notification Service,
and handle these events within your application.

### How to implement the Timeout Notification Service

* Step 1. Import the TimeoutNotificationsService from rpx-xui-common-lib
```
import { TimeoutNotificationsService } from '@hmcts/rpx-xui-common-lib';
```
* Step 2. Add the TimeoutNotificationService to the constructor.
```
  constructor(
    private readonly timeoutNotificationsService: TimeoutNotificationsService
  ) {
```
* Step 3. Add a Handler, to handle the TimeoutNotificationService events.
```
public timeoutNotificationEventHandler(event) {
	switch (event.eventType) {
	  case 'countdown': {
	  	// Implement application countdown logic, here we are using
	  	// our timeout modal, which is another re-usable UI component.
	    this.updateTimeoutModal(event.readableCountdown, true);
	    return;
	  }
	  case 'sign-out': {
	  	// Implement application signout logic
	    this.updateTimeoutModal(undefined, false);
	    return;
	  }
	  case 'keep-alive': {
	  	// Implement application keep alive logic
	    return;
	  }
	  default: {
	    throw new Error('Invalid Timeout Notification Event');
	  }
	}
}
```
* Step 4. Listen for the TimeoutNotificationService events, and send them onto the Handler.
```
this.timeoutNotificationsService.notificationOnChange().subscribe(event => {
  this.timeoutNotificationEventHandler(event);
});
```
* Step 5. Create a configuration object and pass the object to configure the service.
```
/**
 * Timeout Notification Config
 * 
 * Note that idleModalDisplayTime and totalIdleTime should be passed in
 * in milliseconds.
 */
const timeoutNotificationConfig: any = {
  idleModalDisplayTime: idleModalDisplayTimeInMilliseconds,
  totalIdleTime: totalIdleTimeInMilliseconds,
  idleServiceName: 'idleSession'
};

this.timeoutNotificationsService.initialise(timeoutNotificationConfig);
```

### Property names explained

```totalIdleTime``` is the total amount of time in milliseconds that the User is idle for. ie.
A User is working, they then stop interacting with the page. When the User stops interacting 
with the page is when the totalIdleTime begins.

The Users Total Idle Time, includes the time in which we show the Timeout Modal to a User.

```idleModalDisplayTime``` is the total amount of time in milliseconds to display a Session Timeout Modal.
Note that our xui re-usable Session Timeout Modal can be used.

*Important note*: The idleModalDisplayTime IS PART of the totalIdleTime. The idleModalDisplayTime does not get added to the end of the totalIdleTime.

An example:
`totalIdleTime: 120000`
`idleModalDisplayTime: 60000`,

totalIdleTime is 2 minutes.
idleModalDisplayTime is 1 minute.

This would lead to:
1. On the User being idle for 1 minute, 'countdown' events are thrown.
2. When the User is Idle for 2 minutes a 'sign-out' event is thrown. 
3. If the User interacts with the page within this time a 'keep-alive' event is thrown.
4. By default when the User is idle for under 1 minute, countdown events are thrown each second. 

### What happens when the User is in the final minute of being idle?

When the User is in the final minute of them being idle,
countdown events are thrown every second. So that you can display
a 60 second countdown, within your modal dialog.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

END
