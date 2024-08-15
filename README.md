ionic-course-project

This is a course project app using Ionic + Angular.

Run Ionic App in Local:

1. Install latest nodejs from https://nodejs.org/en

2. Check installed node js version

   > node -v
   > v20.16.0

3. Install ionic cli - https://ionicframework.com/docs/intro/cli
   > npm install -g @ionic/cli

If got older version uninstall it using:

> npm uninstall -g ionic

4.  check ionic cli version
    C:\Users\admin>ionic -v
    7.2.0

5.  start ionic project for first time new project setup

> d:

-create folder you want the project to create
D:\>cd apps\ionic-course-project

> ionic start

-this will ask question for config , name of project , blank template , select no and go for standalone , then generate new project with dependecy
Project name put: ionic-course-project

-check ionic framework version , go to project directory and type ionic info
D:\apps\ionic-project\ionic-course-project>ionic info
Ionic Framework :
@ionic/angular 8.2.7
@angular/cli : 18.2.0

4. open visual studio code IDE , install if dont have free version
   install extensions

angular essentials
material icon theme

5)open visual studio in terminal and to run in local use this command

> ionic serve

6. now you should be access the app via http://localhost:8100

7. Deployment steps:

-Go to Netlify , sync with git and Configure Build Settings
Build Command: npm run build
Publish Directory: www

Now the app can be accessed via: https://ranjen-ionic-course-app.netlify.app

---

8. If want to generate new component can use

   > ng g c recipes
   > //OR
   > ionic generate

9. Since using Capacitor plugin , Don't need the @ionic-native/splash-screen and @ionic-native/status-bar plugins anymore

- Uninstall using

  > npm uninstall @ionic-native/splash-screen @ionic-native/status-bar

- Install and Use Capacitor Plugins
  > npm install @capacitor/status-bar @capacitor/splash-screen

---

10. Running the App on iOS: https://ionicframework.com/docs/building/ios
    Need Mac OS for this , to be tested later.

11. Running the App on Android: https://ionicframework.com/docs/building/android

11.1 Installation
-Check this document on requirement : https://capacitorjs.com/docs/android
-You can see it stated API 22+ (Android 5.1 or later) - this will be included in Android Studio ,
so install Android Studio first:
When install make sure select Android SDK Tools and Android SDK Platforms for API when install ,
or after install click Configure->SDK Manager-> SDK Tools , tick Android SDK Build Tools , Android SDK Tools , Android SDK Platform-Tools , Android Emulator and Intel x86 Emulator Accelarator if running Emulator , then Install

11.2 Android development source code running guide:

to create the www folder for native app development:

> ng build

Use Ionic CLI to add Android as supported platform for our project by run:

> ionic capacitor add android
> ionic capacitor add ios (For IOS)

- after finish you will see new android folder in the project which can be open in Android Studio , this is the native app
  rename the appId without dashes:

  11.3 Set the package id for the app under capacitor.config.json

  11.4 run to copy www folder into native app

  > ionic capacitor copy android
  > The above will set the project where you can build android app with it

OR Recommended you can also run:

> ionic capacitor run android

(If want live reload- not build app but run ng serve and give native app by auto update in native app , similar to live update in browser)

- cluncky and not work perfectly , but speed up development
- need to restart your app on native device once after run the command below , test by change the recipes.page.html, you can see both being changed in browser and also at native app emulator.
- most of the time emulator live reload wont work , try different emulator. Best is just use from browser if need speed development , to test the native just
  open the project manually from android studio and test from there.

  > ionic capacitor run android -l

- This will build all the steps for you , ng build + copy www folder into native app android folder + open android folder in android studio so can launch from there

- If above not open the Android Studio , open the project in Android Studio , Tools>Device Manager , choose phone and select any stable api and android version and wait for it to start, by click on play from the emulator. Once emulator started then can click the Play button from above in the IDE.

---

Running the App on a Real Android Device
You can easily run the app on a real Android device, too.

Simply connect your Android phone to your machine via USB and enable the "Developer Options" as described here: https://developer.android.com/studio/debug/dev-options

Once enabled, check "USB Debugging" in the "Developer Options" and you're good to go and should be able to run the app on your device by selecting it inside of Android Studio.

---

13. Official Capacitor Docs: https://capacitor.ionicframework.com/

---

14. For debugging can use console.log in the app source code or can put breakpoint in Chrome Developer Tool > Source > webpack and you can put breakpoint in the source there and refresh the page

15. When working with VS Code, you can also use the built-in debugging features to debug Angular apps.
    Need to have launch.json file , can check below:
    The official instructions should be helpful: https://code.visualstudio.com/docs/nodejs/angular-tutorial#_debugging-angular

- For now you can refer to the launch.json created to debug the app in the source code by running in Chrome as well

16. For android device native app debugging , after run ionic capacitor run android -l and it open live reload in android studio in chrome you can type: chrome://inspect

- It will open page , and you can see webapp in the Devices > Remote Target , can click Inspect open new window and can see console log for the native app

For ios after run ionic capacitor run ios -l

- open Safari > Develop > Simulator of the emulator we selected in xcode > ip address
  You can see the console, network , elements etc like in Chrome
