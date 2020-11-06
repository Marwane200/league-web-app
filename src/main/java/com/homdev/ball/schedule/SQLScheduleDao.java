package com.homdev.ball.schedule;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class SQLScheduleDao implements ScheduleDao {
    private JdbcTemplate jdbcTemplate;

    @Autowired
    public void setJdbcTemplate(JdbcTemplate jdbcTemplate){ this.jdbcTemplate = jdbcTemplate; };

    @Override
    public List<Game> getGames() {
        String sql = "call schedule()";
        List<Game> schedule = jdbcTemplate.query(
                sql,
                new BeanPropertyRowMapper(Game.class)
                );
        return schedule;
    }
}
