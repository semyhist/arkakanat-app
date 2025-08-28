import { useState, useEffect, useCallback } from 'react';

const useF1Data = (year = 2025) => {
  const [f1Data, setF1Data] = useState({ races: [], driverStandings: [], constructorStandings: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchF1Data = useCallback(async (fetchYear) => {
    setLoading(true);
    setError(null);
    try {
      const [racesRes, driverStandingsRes, constructorStandingsRes] = await Promise.all([
        fetch(`https://api.jolpi.ca/ergast/f1/${fetchYear}/races.json`),
        fetch(`https://api.jolpi.ca/ergast/f1/${fetchYear}/driverStandings.json`),
        fetch(`https://api.jolpi.ca/ergast/f1/${fetchYear}/constructorStandings.json`),
      ]);

      if (!racesRes.ok || !driverStandingsRes.ok || !constructorStandingsRes.ok) {
        throw new Error('Network response was not ok');
      }

      const racesData = await racesRes.json();
      const driverStandingsData = await driverStandingsRes.json();
      const constructorStandingsData = await constructorStandingsRes.json();

      setF1Data({
        races: racesData.MRData.RaceTable.Races,
        driverStandings: driverStandingsData.MRData.StandingsTable.StandingsLists[0]?.DriverStandings || [],
        constructorStandings: constructorStandingsData.MRData.StandingsTable.StandingsLists[0]?.ConstructorStandings || [],
      });
    } catch (err) {
      console.error("Error fetching F1 data:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchRaceResults = useCallback(async (fetchYear, round) => {
    try {
      const response = await fetch(`https://api.jolpi.ca/ergast/f1/${fetchYear}/${round}/results.json`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.MRData.RaceTable.Races[0]?.Results || [];
    } catch (err) {
      console.error("Error fetching race results:", err);
      return [];
    }
  }, []);

  useEffect(() => {
    fetchF1Data(year);
  }, [year, fetchF1Data]);

  return { f1Data, loading, error, refetch: fetchF1Data, fetchRaceResults };
};

export default useF1Data;