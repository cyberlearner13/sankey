import React, {  useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import CustomSankeyChart from './CustomSankeyChart';
//import { getSankeyData } from './actions/sankeyActions';

const App = props => {
  //const [sankeyData, setSankeyData] = useState([{}]);
  const { dispatch } = props;


  useEffect(()=>{
    const getData = async () => {
      try{
        const chartData = await axios.get('http://www.mocky.io/v2/5e7f1fbd2f00006600bac277');
        dispatch({
          type: 'GET_CHART_DATA',
          payload: chartData.data
        })
      }
      catch(e){
        console.log(e)
      }
    }
   getData()

 },[dispatch]);

  return (
    <div>
      <CustomSankeyChart chartData={props.chartData} t={props.t}/>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    chartData: state.sankeyReducer
  }
}

export default connect(mapStateToProps)(App);
