#!/usr/bin/env bash

python3 ./render.py

python3 -m rasa_core.run -d models/dialogue/ -u default/current \
       --port 5005 --credentials credentials.yml \
       --cors * --endpoints endpoints.yml