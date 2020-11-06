package com.homdev.ball.roster;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RosterService {
    private final RosterDao rosterDao;

    @Autowired
    public RosterService(RosterDao rosterDao) { this.rosterDao = rosterDao; }


    public List<Player> getTeams(int TeamID){
        return rosterDao.getTeams(TeamID);
    }
}
