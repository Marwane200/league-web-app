package com.homdev.ball.roster;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class SQLRosterDao implements RosterDao {

    private JdbcTemplate jdbcTemplate;

    @Autowired
    public SQLRosterDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }


    @Override
    public List<Player> getTeams(int TeamID) {
        String sql = "call find_team(?)";
        List<Player> roster = jdbcTemplate.query(
                sql,
                new Object[]{TeamID},
                new BeanPropertyRowMapper(Player.class)
                );
        return roster;
    }
}
