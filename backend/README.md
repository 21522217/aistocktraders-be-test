# Stock Trading Real-time Dashboard

## Description
This is a real-time stock data dashboard displaying the top increasing, decreasing, and highest volume stocks. The system includes a frontend (React.js), backend (Node.js), and Kafka for real-time data processing. Where:

- producer: Fetches data from the API and sends it to Kafka.
- consumer: Receives data from Kafka and sends it to the frontend via Socket.IO.
- Frontend: Displays the data and updates it in real-time.

## Installation
1. Clone repository
2. Install backend dependencies
3. Install frontend dependencies

## Running the System
1. Start Kafka

- Start Kafka and Zookeeper on your local machine or a remote server. If you haven't installed Kafka, refer to the Kafka documentation for installation and startup.
- Create a Kafka topic to transmit data, e.g., stock_data.

-- this step required tremendous setup for Kafka and zookeeper for realtime data accessing purpose --


cd D:\Study\KAFKA
.\bin\windows\zookeeper-server-start.bat .\config\zookeeper.properties
.\bin\windows\kafka-server-start.bat .\config\server.properties
jps

------------------------------------------------

2. Run the Producer (Backend)

The producer will fetch data from the API and send it to Kafka.
```
cd backend
node producer.js
```
3. Run the Consumer (Backend)

The consumer will receive data from Kafka and send it to the frontend via Socket.IO.
```
cd backend
node consumer.js
```
4. Run the Frontend (React.js)

Start the frontend to display the data. The frontend will be available at http://localhost:3000.