# Water World Todos
## Steps
### Step 1
#### Gui
* [X] GUI
  * [X] Canvas
  * [X] Buttons
    * [X] Buildings
      * [X] Collector
      * [X] Blaster
    * [X] Game States
      * [X] Play
    * [X] other
      * [X] Help
      * [X] Exit Game

#### Draw
* [X] Canvas Draw
  * [X] Draw terain
  * [X] Draw Path between Buildings
  * [X] Draw Buildings
  * [X] Draw Emmiters
  * [X] Draw Creepers
  * [X] Draw Packets

#### Logic
* [X] Game Logic
  * [X] World
    * [X] Tiles
    * [X] CollectorFields
    * [X] Creepers
  * [X] Player
    * [X] Energy
    * [X] Position
  * [X] Buildings
    * [X] get destroyed
      * [X] remove
    * [X] Position
    * [X] Connected
    * [x] Collectors
      * [X] Collection
      * [x] CollectionFields
    * [x] Blaster
      * [x] Shoot creepers
    * [X] Portal stations (stabilizer)
      * [X] when portal are full health gg won
  * [x] Packets
    * [x] move along connections
    * [x] Give energy
    * [x] give health
    * [x] packetqueue
  * [X] Emmiter
    * [X] Emmit creepers
  * [X] Creeper
    * [X] Spread
    * [X] damage buildings

#### Problems
* [X] Creepers dont rly spread as intended
* [X] Creepers dont get drawn right
* [X] Images dont get drawn in the right size (building size)
* [X] Paths between buildings are not the same color
* [X] Buildings cant be placed on top of each other
* [X] Buildings are gosts when placed
  * [X] Paths need to be made even when Things are Ghosts
  * [X] draw buildings as ghosts
* [X] Draw health and Energy under buildings
  * [X] health
  * [X] energy
* [X] my path algorithm doesnt work properly
* [X] shadows from the terrain
* [X] packets get removed that should not be removed

### Step 2
#### features
* [X] Some Structures can move
  * [X] Player
  * [X] Blaster
  * [X] Connections need to be fixed
* [X] Terrain bar
  * [X] terrain
  * [X] creeper

#### Fixes
* [X] water spreading

#### performance
* [X] canvas prerendering
  * [X] terrain
  * [X] shadows

* [X] creeper lvl only to 6 with the world height

* [X] terrain not 0 but 1 atleast

* [X] terrainbar with lines every 1 height

### Step 3
#### canvas engine
* [ ] pixijs