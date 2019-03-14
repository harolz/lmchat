#!/usr/bin/env bash

python3 -m rasa_core.train -s stories.md -d domain.yml -o models/dialogue 
