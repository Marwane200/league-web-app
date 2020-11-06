package com.homdev.ball.roster;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Player {
    private int playerId;
    private int teamId;
    private String teamName;
    private String playerName;
    private int playerNumber;
    private String playerPos;

    public Player(){
    }

    public Player(
            @JsonProperty("PID") int playerId,
            @JsonProperty("teamID") int teamId,
            @JsonProperty("teamName") String teamName,
            @JsonProperty("name") String playerName,
            @JsonProperty("number") int playerNumber,
            @JsonProperty("position") String playerPos) {
        this.playerId = playerId;
        this.teamId = teamId;
        this.teamName = teamName;
        this.playerName = playerName;
        this.playerNumber = playerNumber;
        this.playerPos = playerPos;
    }

    public int getTeamId() {
        return teamId;
    }

    public void setTeamId(int teamId) {
        this.teamId = teamId;
    }

    public String getTeamName() {
        return teamName;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }

    public String getPlayerName() {
        return playerName;
    }

    public void setPlayerName(String playerName) {
        this.playerName = playerName;
    }

    public int getPlayerNumber() {
        return playerNumber;
    }

    public void setPlayerNumber(int playerNumber) {
        this.playerNumber = playerNumber;
    }

    public String getPlayerPos() {
        return playerPos;
    }

    public void setPlayerPos(String playerPos) {
        this.playerPos = playerPos;
    }

    public int getPlayerId() { return playerId; }

    public void setPlayerId(int playerId) { this.playerId = playerId; }
}
