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

    $ siege -c 2 -r 10 http://localhost:8080/log
    ** SIEGE 3.0.5
    ** Preparing 2 concurrent users for battle.
    The server is now under siege...
    HTTP/1.1 200   2.70 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   4.44 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   1.88 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   1.92 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   2.48 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   2.48 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   4.38 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   8.07 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   7.06 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   1.57 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   2.29 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   6.77 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   2.20 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   3.19 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   7.06 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   2.40 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   2.65 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   4.01 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   1.66 secs:  271105 bytes ==> GET  /log
    HTTP/1.1 200   2.88 secs:  271105 bytes ==> GET  /log
    done.

    Transactions:		          20 hits
    Availability:		          100.00 %
    Elapsed time:		          47.94 secs
    Data transferred:	          5.17 MB
    Response time:		         3.60 secs
    Transaction rate:	          0.42 trans/sec
    Throughput:		            0.11 MB/sec
    Concurrency:		           1.50
    Successful transactions:       20
    Failed transactions:	       0
    Longest transaction:	       8.07
    Shortest transaction:          1.57

#### Test Notes
* Node Server running on Macbook Air
* MSSQL Server running on same LAN
* Wide variance in times
* CPU spikes on node process
* Server Server Waits increase over life of test
* Using default AdventureWorks2012 database, included in this repo under `/db`
