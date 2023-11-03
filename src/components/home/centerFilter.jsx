import Card from 'react-bootstrap/Card';
import leagueData from '../../assets/dumdata/leagueData';
import LeagueFilter from '../League/leagueFilter';
import FilterObjects from '../League/filterObjects';

function CenterFilter() {
  return <Card className="mb-4 mt-4" body>

      <FilterObjects/>
      <LeagueFilter data={leagueData}/>
    </Card>;
}

export default CenterFilter;