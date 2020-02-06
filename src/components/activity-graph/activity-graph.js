import React from 'react';
// import * as V from 'victory';
import { VictoryChart,  VictoryTheme,
        VictoryStack, 
        VictoryLine,
        VictoryLegend} from 'victory';




const data2012 = [
  { test: 1, marks: 85 },
  { test: 2, marks: 67 },
  { test: 3, marks: 81 },
  { test: 4, marks: 59 }
];

const data2013 = [
  {test: 1, marks: 88},
  {test: 2, marks: 87},
  {test: 3, marks: 95},
  {test: 4, marks: 68}
];

const data2014 = [
  {test: 1, marks: 58},
  {test: 2, marks: 75},
  {test: 3, marks: 80},
  {test: 4, marks: 83}
];

const data2015 = [
  {test: 1, marks: 78},
  {test: 2, marks: 63},
  {test: 3, marks: 90},
  {test: 4, marks: 76}
];




class ActivityGraph extends React.Component {


  render() {
    return (
      <div className="test-report-container">
        <VictoryChart
          domainPadding={25}

          viewBox={"0 0 500 600"}

          width={500}
          height={300}
         
          
          theme={VictoryTheme.material}
          >
            <VictoryLegend
                x={125} y={15}
                // title="Legend"
                orientation="horizontal"
                gutter={10}
                colorScale={"cool"}
                data={[{name:"2012"},{name:"2013"},{name:"2014"},{name:"2015"}]}
            />

      
          <VictoryStack
            colorScale={"cool"}
          >
          <VictoryLine

          domain={{x:[50,100],y:[0,6]}}

              data={data2012}
              y="test"
              x="marks"
            />
              <VictoryLine
              data={data2013}
              y="test"
              x="marks"
            />
              <VictoryLine
              data={data2014}
              y="test"
              x="marks"
            />
              <VictoryLine
              data={data2015}
              y="test"
              x="marks"
            />
          </VictoryStack>
          


        </VictoryChart>
      </div>
    );
  }
}

export default ActivityGraph;
