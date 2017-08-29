# Customer-SPA
### Single Page MEAN Stack Application

## What you need is Latest version of following things -
- Node JS  7.8.0
- Angular, So that we can use Angular-cli
- MongoDB  3.4.4
- Nginx, So that we make Routing

## How to Start -
- Start Nginx with this configuration i.e,
 ```sh
server {
    listen 98;
    
    location / api / {
        proxy_pass http: //localhost:3000/api/;
            proxy_read_timeout 120 s;
        proxy_set_header X - Forwarded - Host $host;
        proxy_set_header X - Forwarded - Server $host;
        proxy_set_header X - Forwarded - For $proxy_add_x_forwarded_for;
    }
    location / {

        proxy_pass http: //localhost:3001;
            proxy_read_timeout 120 s;
        proxy_set_header X - Forwarded - Host $host;
        proxy_set_header X - Forwarded - Server $host;
        proxy_set_header X - Forwarded - For $proxy_add_x_forwarded_for;
    }
}
```
- Start MongoDB Server which will be Running on PORT 27017
- Now Go in Customer-SPA folder and Run the Command `npm install`,

  when this is done then Run Command node app.js.
  
  So your Server is Running on Port 3000 Successfully.
  
  This will be Printed on Console  `listening on 3000`.
  
- So Till now we have setup the Server Part.Going forward on UI Part,

  go to the folder of customer-Ui with CLI and Run Command `ng Serve`.
  
- Now open your chrome and open localhost:98 ( which we have set in NGINX )

#### You can now play with UI and The API's of Customer-Single Page Application

