package com.homdev.ball.statistics;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

@Service
public class StatsService {
    private StatsDao statsDao;

    @Autowired
    public StatsService(StatsDao statsDao) { this.statsDao = statsDao; }

    public List<Stats> getStatLeaders(int board){
        List<Stats> LeaderBoard = statsDao.getStatLeaders();
        List<Stats> Leaders = new ArrayList<>();

        switch (board){
            case 1:
                LeaderBoard.sort(Comparator.comparing(Stats::getPts).reversed());
                break;
            case 2:
                LeaderBoard.sort(Comparator.comparing(Stats::getAss).reversed());
                break;
            case 3:
                LeaderBoard.sort(Comparator.comparing(Stats::getReb).reversed());
                break;
            default:
                break;
        }


        for(int n=0; n<5; n++){
            Leaders.add(LeaderBoard.get(n));
        }
        return Leaders;
    }
}
