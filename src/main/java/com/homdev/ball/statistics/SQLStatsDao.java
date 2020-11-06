package com.homdev.ball.statistics;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public class SQLStatsDao implements StatsDao {
    private JdbcTemplate jdbcTemplate;

    @Autowired
    public SQLStatsDao(JdbcTemplate jdbcTemplate) { this.jdbcTemplate = jdbcTemplate; }

    @Override
    public List<Stats> getStatLeaders() {

        List<Stats> totals = new ArrayList<>();

        String sql = "call stats_totals(?)";
        for (int id = 18; id < 53; id++) {
            if(id==20){
                continue;
            }
            Stats playerStats = (Stats) jdbcTemplate.queryForObject(
                    sql,
                    new Object[]{id},
                    new BeanPropertyRowMapper(Stats.class)
            );
            if(playerStats!=null){
                totals.add(playerStats);
            }
        }
        return totals;
    }

}
