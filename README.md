Create a simple API to return tennis player stats using Node.Js


# Tasks

1 / Create a GET /players endpoint returning all the players (by requiring the headtohead.json listed
above). The list must be sorted by player id.

2 / Create a GET /players/<id> endpoint to return a single player matching id <id>. Return a 404 if no
player is matching.

3 / As the players data changes from time to time, change your code so that the players are fetched
from the following end point for every API call:
    - https://alivebyacadomia.github.io/headtohead.json

# Use
- yarn install
