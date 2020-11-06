package com.homdev.ball.roster;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("api/teams")
@CrossOrigin(origins = "*")
@RestController
public class RosterController {
    private final RosterService rosterService;

    @Autowired
    public RosterController(RosterService rosterService) { this.rosterService = rosterService;
    }


    @GetMapping(path = "{id}")
    public List<Player> getTeams(@PathVariable("id") int ID){
        return rosterService.getTeams(ID);
    }
}
