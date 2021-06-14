## 🚀 Quick start

1.  ** install dependencies **

    ```shell
    yarn install
    cd app3 && yarn install
    ```

2.  ** Serve Remote app on localhost:8003 **

    ```shell
    cd app3
    yarn build # only in case of changes of app3
    yarn serve
    ```

3.  ** Run Gatsby (Shell) on localhost:8000 **

    ```shell
    yarn start
    ```

4.  ** Build Gatsby **
    to test production we need to 

    ```
    yarn build
    cd public && npx http-server -p 9000
    ```
