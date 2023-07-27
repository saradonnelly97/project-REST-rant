# Project REST-Rant

REST-Rant is an app where users can review restaurants.

## Key Features: 

**Rant and Rave:** Tell the world how you REALLY feel about your least favorite (or favorite) place to eat. Rate your dining experience on a scale of 1 dumpster fire to 5 (or maybe more). 



| Method | Path | Purpose |
| --- | --- | --- |
| GET | / | Home Page |
| GET | /places | Places Index Page |
| POST | /places | Create New Place |
| GET | /places/new | Form Page for Creating New Place | 
| GET | /palces/:id | Details about a particular place |
| PUT | /places/:id | Update a particular place | 
| GET | /places/:id/edit | Form page for editing an existing place | 
| DELETE | /places/:id | Delete a particular place | 
| POST | /places/:id/rant | Create a RANT (comment) about a particular place |
| DELETE | /places/:id/rant/:rantID | Delete a RANT (comment) about a particular place | 
| GET | * | 404 page (matches any route that is not defined above) |

## Planned Data: 

| PLANNED DATA: | x | x | x | x | x |
| --- | --- | --- | --- | --- | --- |
| **Places** | name | photo | location | food type | rants/raves |
