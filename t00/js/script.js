let superTeam = {
     title : "",
     leader : "",
     members : [],
     membersCount : "",
     agenda : "",
     isEvil : "",
}

superTeam.title = prompt('Name of the team');
superTeam.leader = prompt('Name of the team`s leader');
superTeam.members = prompt('The names of the members, separated by a comma').split(',');
superTeam.agenda = prompt('Goals and ideas of the team');
superTeam.isEvil = prompt('The team is evil? True or false');
superTeam.membersCount = superTeam.members.length + 1;

let team = `Here's the team:
          name - ${superTeam.title} 
          leader - ${superTeam.leader}
          members - ${superTeam.members.join(', ')}
          memberCount - ${superTeam.membersCount}
          agenda - ${superTeam.agenda}
          isEvil - ${superTeam.isEvil}`;
alert(team)














