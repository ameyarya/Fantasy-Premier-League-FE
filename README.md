# FANTASY PREMIER LEAGUE
# fantasy-league-java-server
## Web-Development Project (Spring 2020)
### TEAM 5: Amey Arya, Anurag Shubham, Mohammed Owais Ahmed, Nikhita Singh

Problem Statement:

In this project we are trying to emulate a fantasy soccer game similar to Fantasy Premier League (https://fantasy.premierleague.com/). The goal of this project is to allow users to create their own fantasy teams with real life players, assign points to the players based on their real-world performance which in turn determines the points earned by a user’s fantasy team. Each user has a budget to create a fantasy team and each player has a value assigned. The user must use his budget to create a team of 15 players.

The two users of the application will be:
- Admin: Responsible for populating/updating the data, assigning points to players after matches occur in the real world
- Regular User: Create his own team, can create a group with other players, can create tournaments

The overall project can be described as an amalgamation of the following sub problems:
- Creating a team: The user will be given a budget of a certain amount. The user will be able to view all the players and their costs. The user can then add or remove players to their team based on their budget. The user must pick five defenders, five midfielders, three forwards and two goalkeepers.
- Score prediction: Based on historical datasets which has information about the players and the points they have earned in the past seasons, the user will be able to see the predicted score for his team this season.
- Groups/ tournaments: Thrill of competition is achieved when a user can put his team against teams of other users. In the same vein, a user can invite other users to form a group. Based on the performance of their teams, the users are assigned ranks in the group.

We plan on using multiple available datasets such as:
- https://www.kaggle.com/adithyarganesh/fantasy-premier-league
- https://www.kaggle.com/chaibapat/fantasy-premier-league
The official fantasy premier league provides API to access their database over the seasons:
https://fantasy.premierleague.com/api/bootstrap-static/
