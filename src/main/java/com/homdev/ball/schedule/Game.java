package com.homdev.ball.schedule;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Game {
    private int gameId;
    private String team1;
    private String team2;
    private String date;
    private String startTime;
    private String court;

    public Game(){
    }

    public Game(
            @JsonProperty("gameId") int gameId,
            @JsonProperty("team1") String team1,
            @JsonProperty("team2") String team2,
            @JsonProperty("date") String date,
            @JsonProperty("start") String startTime,
            @JsonProperty("court") String court) {
        this.team1 = team1;
        this.team2 = team2;
        this.date = date;
        this.startTime = startTime;
        this.court = court;
    }

    public int getGameId() { return gameId; }

    public void setGameId(int gameId) { this.gameId = gameId; }

    public String getCourt() {
        return court;
    }

    public void setCourt(String court) {
        this.court = court;
    }

    public String getTeam1() {
        return team1;
    }

    public void setTeam1(String team1) {
        this.team1 = team1;
    }

    public String getTeam2() {
        return team2;
    }

    public void setTeam2(String team2) {
        this.team2 = team2;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) { this.startTime = startTime; }
}
