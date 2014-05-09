This repo contains simple code used to test the performance of the `tedious`
MSSQL Server driver in `node.js`. We are using the `siege` load testing tool
to generate a moderate amount of load which seems to drive the CPU of the
node process very high (> 60% with very small load, can easily max out under
moderate load).

## Run the server

    $ npm install
    $ node index.js

## Test with Siege

    $ brew install siege
    $ siege -c 2 -r 100 http://localhost:8080/log

## Sample Results

    $ siege -c 5 -r 10 http://localhost:8080/log
    ** SIEGE 3.0.5
    ** Preparing 5 concurrent users for battle.
    The server is now under siege...
    HTTP/1.1 200   0.08 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   0.34 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   0.17 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   0.23 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   0.23 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   0.37 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   0.59 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   0.73 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   0.38 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   0.35 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   0.44 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   0.40 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   0.43 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   2.27 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   0.46 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   1.70 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   0.43 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   0.80 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   0.41 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   0.43 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   2.32 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   0.99 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   1.93 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   0.81 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   2.42 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   0.94 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   2.80 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   1.39 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   1.07 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   2.22 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   0.45 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   8.60 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   1.01 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   0.65 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   0.89 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   0.99 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   1.16 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   0.98 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   1.12 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   3.49 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   1.59 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   0.44 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   0.46 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   0.39 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   2.58 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   0.73 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   8.02 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   0.37 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   0.46 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   0.81 secs:  271105 bytes ==> GET  /log
    done.

    Transactions:		          50 hits
    Availability:		      100.00 %
    Elapsed time:		       22.73 secs
    Data transferred:	       12.93 MB
    Response time:		        1.27 secs
    Transaction rate:	        2.20 trans/sec
    Throughput:		        0.57 MB/sec
    Concurrency:		        2.79
    Successful transactions:          50
    Failed transactions:	           0
    Longest transaction:	        8.60
    Shortest transaction:	        0.08

#### Test Notes
* Node Server running on Macbook Air
* MSSQL Server running on same LAN
* Wide variance in times
* CPU spikes on node process
* Server Server Waits increase over life of test
* Using default AdventureWorks2012 database, included in this repo under `/db`
