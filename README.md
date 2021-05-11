# We are using lerna monorepo
1. https://lerna.js.org/
2. https://github.com/NiGhTTraX/ts-monorepo
# Check SS folder for issues.
Steps to reproduce:
1. Run `yarn install` at root and once it is completed then run `yarn build`.
2. Go to examples/react_native and run `yarn android`.
Issue 1:
    We are getting error as shown in ss `package_link_JsTimer_Issue1.jpg` when we are clicking on any track data buttons.
Issue 2:
Getting below error as shown in ss `Module_JsTimer_Issue2.jpg`, after adding below package to the path example/react_native
`yarn add react-native-device-info@8.1.2`
Error: Invariant Violation: Module JSTimers is not a registered callable module(calling callTimers).
A frequent cause of the error is that the application entry file path is incorrect.

Final Results:
It should console the track data as shown in ss `sucess_track_data_action.jpg`