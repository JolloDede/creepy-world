import React, { MouseEvent } from "react";
import { Button } from "./button";
import { Values } from "./values";
import Structure from "./structure";

export function GameBar() {

    return(
        <div className="game-bar">
            <div className="structure-wrap">
                {/* first line of the structures */}
                <Structure name="Collector" />
                <Structure name="Relay" />
                <Structure name="Storage" />
                <Structure name="Speed" />
                <Structure name="Reactor" />
                {/* second line of the structures */}
                <Structure name="Blaster" />
                <Structure name="Mortar" />
                <Structure name="Sam" />
                <Structure name="Drone" />
            </div>
            <div className="upgrades-btn">
                <h2>Upgrades</h2>
            </div>
            <div className="elevation-wrap">
                <h2>Elevation</h2>
            </div>
            <div className="missiontime-wrap">
                <h2>Mission Time</h2>
            </div>
            <div className="player-values">
                <Values name="ENERGY" />
                <Values name="Collection" />
                <Values name="Depletion" />
                <Values name="Starvation" />
            </div>
            <div className="game-state-btn">
                <Button display="playSign" />
                <Button display="soundSign" />
                <Button display="musicSign" />
            </div>
            <div className="extra-btn">
                <Button display="Option" />
                <Button display="Help" />
                <Button display="Exit Game" />
            </div>
        </div>
    );
}