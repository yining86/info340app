import React from 'react';

const Filter = ({ teams, selectedTeam, onTeamChange }) => {
    return (
        <div>
            <label htmlFor="teamFilter">Filter by team: </label>
            <select
                id="teamFilter"
                value={selectedTeam}
                onChange={(e) => onTeamChange(e.target.value)}
            >
                <option value="">All Teams</option>
                {teams.map((team) => (
                    <option key={team} value={team}>
                        {team}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Filter;
