package com.homdev.ball.statistics;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Stats {
    private int id;
    private String name;
    private int pts;
    private int ass;
    private int reb;

    public Stats(){
    }

    public Stats(
            @JsonProperty("id") int id,
            @JsonProperty("name") String name,
            @JsonProperty("points") int pts,
            @JsonProperty("assists") int ass,
            @JsonProperty("rebounds") int reb) {
        this.id = id;
        this.name = name;
        this.pts = pts;
        this.ass = ass;
        this.reb = reb;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPts() {
        return pts;
    }

    public void setPts(int pts) {
        this.pts = pts;
    }

    public int getAss() {
        return ass;
    }

    public void setAss(int ass) {
        this.ass = ass;
    }

    public int getReb() {
        return reb;
    }

    public void setReb(int reb) {
        this.reb = reb;
    }
}
