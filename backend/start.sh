#!/bin/bash
node producer.js &
node consumer.js &
wait
