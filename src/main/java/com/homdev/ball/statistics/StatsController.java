package com.homdev.ball.statistics;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/stats")
@CrossOrigin(origins = "*")
public class StatsController {
    private StatsService statService;

    @Autowired
    public StatsController(StatsService statsService) { this.statService = statsService; }

    @GetMapping(path = "{board}")
    public List<Stats> getStats(@PathVariable("board") int board){

        return statService.getStatLeaders(board);
    }

}
