Recommended to use WSL w/ new windows terminal for windows development - much easier to do node stuff on linux.

1. install npm, npx, yarn 
2. npm install --global lerna
3. npx lerna init  
4. add this line to lerna.json 
    ```
    “useWorkspaces”: true
    ```
    and in package.json, we need to add

    ```
    "workspaces": [
        "packages/*"
    ]
    ```
5. yarn install && lerna bootstrap
6. npm i sass react-bootstrap bootstrap axios

7. init webpack for specific package
https://github.com/webpack/webpack-cli/blob/master/INIT.md


8. watch webpack-cli for issues with fast refresh or hot reload
npx webpack watch --progress

OR

just read these 2 articles and save your life -- 
https://dev.to/deadwing7x/setup-a-react-app-with-webpack-and-babel-4o3k

(update webpack.config -> devServer -> contentBase to static)

https://dev.to/deadwing7x/setup-a-react-app-using-webpack-babel-and-typescript-5927