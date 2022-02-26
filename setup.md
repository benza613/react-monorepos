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