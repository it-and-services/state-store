## Build and publish ngx-state-store module

Execute the following:

         $ make your changes   
         $ increase state-store/projects/ngx-state-store/package.json version
         $ describe the release in the ChangeLog file
         $ npm install 
         $ ng test ngx-state-store
         $ npm run build:release
         $ git add/commit
         $ git tag v0.1.0       # adjust version here
         $ git push origin state-store
         $ git push --tags
         $ npm login // only first time
         $ npm publish dist/ngx-state-store --otp=<code>
